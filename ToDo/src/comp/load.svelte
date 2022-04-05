<script>
    import App from "../app.svelte";

    let showApp = false
    let showLoad = true

    const home = () => {
        showApp = true
        showLoad = false
    }
    const show_local_storage = () => {
        document.getElementsByName("result")[0].innerHTML  +=  "<br/>" + localStorage.getItem("todos") + "<br/>"
    }
</script>

{#if (showLoad)}
    <h1>Load</h1>
    <div name="result"></div>
    <button on:click="{show_local_storage}">
        Load localStorage
    </button>

    <button on:click="{home}">
        Home
    </button>

{/if}

{#if (showApp)}
    <App />
{/if}
