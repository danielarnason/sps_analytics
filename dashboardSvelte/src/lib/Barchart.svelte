<script>
    import Chart from 'chart.js/auto'
    import { onMount } from 'svelte';

    export let data = []
    export let datatype = 'chart'
    $: chartId = `myChart-${datatype}`
    $: chartLabel = `Antal ${datatype} pr. dag`

    onMount(() => {
        setTimeout(() => {
            new Chart(
            // @ts-ignore
            document.getElementById(chartId),
            {
                type: 'bar',
                data: {
                    labels: data.map(row => row.date.split(' ')[0]),
                    datasets: [
                        {
                            label: chartLabel,
                            data: data.map(row => row.antal)
                        }
                    ],
                },
                maintainAspectRatio: false
            }
        )      
        }, 500);
    })
    
</script>

<div class="chart-container">
    <canvas id={chartId}></canvas>
</div>

<style>
    .chart-container {
        position: relative;
        /* margin: auto; */
        height: 50vh;
        width: 45vw;
        /* padding-top: 24px; */
    }
</style>