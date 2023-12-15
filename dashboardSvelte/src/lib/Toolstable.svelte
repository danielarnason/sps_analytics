<script>
    export let data = []
    export let title
    let kolonner = []
    $: if (data.length != 0) {
        kolonner = Object.keys(data[0])
    }
</script>

<!-- {@debug data} -->
<div id="tableContainer">
    <table>
        <caption>{title}</caption>
        <thead>
            {#each kolonner as kolonne}
                <th>{kolonne}</th>
            {/each}
        </thead>
        <tbody>
            {#each data as afdeling}
                <tr>
                    <td>{afdeling.displayname}</td>
                    <td>{afdeling.antal}</td>
                </tr>
            {/each}        
        </tbody>
    </table>
</div>

<style>
    caption {
        font-size: xx-large;
        margin-bottom: 4px;
    }
    
    #tableContainer {
        overflow: auto;
        width: 100%;
    }

    #tableContainer table {
        border: 1px solid #dededf;
        height: 90%;
        width: 97%;
        table-layout: auto;
        border-collapse: collapse;
        border-spacing: 1px;
        text-align: center;
    }

    #tableContainer caption {
        caption-side: top;
        text-align: center;
    }

    #tableContainer th {
        border: 1px solid #dededf;
        background-color: #eceff1;
        color: #000000;
        padding: 5px;
    }

    #tableContainer td {
        border: 1px solid #dededf;
        background-color: #ffffff;
        color: #000000;
        padding: 5px;
    }
</style>