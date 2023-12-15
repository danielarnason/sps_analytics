<script>
  import { onMount } from "svelte";
  import Barchart from "./lib/Barchart.svelte";
  import Sum from "./lib/Sum.svelte";
  import Themestable from "./lib/Themestable.svelte";
  import Toolstable from "./lib/Toolstable.svelte";

  let afdelingTop
  let sessionsMonth
  let themesMonth
  let sumThemesMonth
  let toolsTop

  let fetchingData = false


  const executeSpsCommands = async(mm) => {
    fetchingData = true
    afdelingTop = await mm.getSession().getDatasource('sps_session_info').execute({command: 'read-top-afdeling-month'}).map(({afdeling_ad, antal}) => ({afdeling_ad, antal}))
    sessionsMonth = await mm.getSession().getDatasource('sps_session_info').execute({command: 'read-session-info-month'}).map(({date, antal}) => ({date, antal}))
    themesMonth = await mm.getSession().getDatasource('sps_analytics').execute({command: 'read-theme-interactions-month'}).map(({date, antal}) => ({date, antal}))
    sumThemesMonth = await mm.getSession().getDatasource('sps_analytics').execute({command: 'read-antal-theme-interactions-month'})[0].antal
    toolsTop = await mm.getSession().getDatasource('sps_button_clicks').execute({command: 'read-top-tools-month'}).map(({displayname, antal}) => ({displayname, antal}))
    fetchingData = false
  }

  onMount(() => {
    // @ts-ignore
    MiniMap.createMiniMap({
      mapDiv: 'mmbody',
      initCallback: async (minimap) => {
        await executeSpsCommands(minimap)
      }
    })
  })
</script>

<div id="mmbody"></div>
<div class="chart-container">
  <Barchart data={sessionsMonth} datatype={'sessions'}/>
  <Barchart data={themesMonth} datatype={'themes'}/>
</div>
<Sum sum={sumThemesMonth} />
<div class="table-container">
  <Themestable data={afdelingTop} title={'Top 10 afdelinger'}/>
  <Toolstable data={toolsTop} title={'Top 10 værktøjer'}/>
</div>

<style>  
  #mmbody {
    display: none;
  }

  .table-container {
    display: flex;
  }

  .chart-container {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    
    grid-row-start: 1;
    grid-column-start: 1;

    grid-row-end: 3;
    grid-column-end: 2;
  }
</style>