<script>
    import AddItem from "./comp/add-item.svelte"
    import Load from "./comp/Load.svelte"
    import Settings from "./comp/settings.svelte"

    let showHome = true
    let showSettings = false
    let showLoad = false
    let showAdd = false

    const settings = () =>  {
        showSettings = true
        showLoad = false
        showAdd = false
        showHome = false
    }

    const load = () =>  {
        showSettings = false
        showLoad = true
        showAdd = false
        showHome = false
    }

    const add = () =>  {
        showSettings = false
        showLoad = false
        showHome = false
        showAdd = true
    }
</script>
{#if showHome}
    <div>
        <h1>ToDo App</h1>

        <button on:click="{settings}">
            Settings
        </button>

        <button on:click="{load}">
            Load
        </button>

        <button on:click="{add}">
            Add New
        </button>
    </div>
{/if}

{#if showSettings}
    <Settings />
{/if}

{#if showLoad}
    <Load />
{/if}

{#if showAdd}
    <AddItem />
{/if}
