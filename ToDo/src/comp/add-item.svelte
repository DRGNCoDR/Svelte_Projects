<script>
    import App from "../app.svelte";
    import items from "../items"
    import List from "../comp/list.svelte"

    let showApp = false
    let showList = false
    let showAddItem = true

    const home = () => {
        showApp = true
        showAddItem = false
    }

    const clear = () => {
        document.getElementsByClassName("name")[0].value = ""
        document.getElementsByClassName("title")[0].value = ""
        document.getElementsByClassName("date")[0].value = ""
        document.getElementsByClassName("description")[0].value = ""
    }

    const save = () => {
        const item = {
            id: Date.now(),
            date: document.getElementsByClassName("date")[0].value,
            title: document.getElementsByClassName("title")[0].value,
            description: document.getElementsByClassName("description")[0].value
        }

        $items = [...$items, item]

        var stored = JSON.parse(localStorage.getItem("todos"));
        stored.push(item)
        localStorage.setItem("todos", JSON.stringify(stored))

        showList = true
        showAddItem = false
    }
</script>

{#if (showAddItem)}
    <h1>Add Item</h1>

    <button on:click="{home}">
        Home
    </button>

    <h4>Enter Name</h4>
    <input type="text" class="name"/>
    <h4>Title</h4>
    <input type="text" class="title"/>
    <h4>Date</h4>
    <input type="date" class="date"/>
    <h4>Description</h4>
    <input type="text" class="description"/>
    <div>
        <button on:click="{clear}">
            Clear
        </button>

        <button on:click="{save}">
            Save
        </button>
    </div>

{/if}

{#if (showApp)}
    <App />
{/if}

{#if (showList)}
    <List />
{/if}
