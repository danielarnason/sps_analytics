<script>
    export let sum = 0
</script>

<div class="sumContainer">
    <h1>Antal temaer tændt sidste måned</h1>
    <h1 id="sum">{sum}</h1>
</div>

<style>
    .sumContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        grid-row-start: 2;
        grid-column-start: 2;

        grid-row-end: 3;
        grid-column-end: 3;
    }

    #sum {
        font-size: 130px;
    }
</style>