<script>
    import App from "../app.svelte";

    let showApp = false
    let showSettings = true

    const home = () => {
        showApp = true
        showSettings = false
    }
</script>

{#if (showSettings)}
    <h1>Settings</h1>

    <button on:click="{home}">
        Home
    </button>

{/if}

{#if (showApp)}
    <App />
{/if}
