<script>
    import items from "../items"
    import EditItem from "../comp/edit-item.svelte"
    import AddItem from "../comp/add-item.svelte";//add custom add item minus the title

    let list_visible = true;
    let list_edit_visible = false;
    let add_item = false

    const remove = (id) => {
        $items = $items.filter(function(value){
            if (value.id != id) return value;
        });
    }

    const edit = (id) => {
        list_edit_visible = true;
        list_visible = false;
    }
    const add = () => {
        list_edit_visible = false;
        list_visible = false;
        add_item = true
    }
</script>

<style>
    .list-container{
        padding: 5px;
    }
    .item-container{
        border: 2px solid black;
        height: 150px;
        padding: 5px;
        margin: 2px;
    }
    .btn-edit{
        float:left;
    }
    .btn-delete{
       float:right;
    }
</style>
<div class="list-container">
    {#if list_visible}
    <button on:click="{add}">
        Add
    </button>
        {#each $items as item}
            <div class="item-container">
                <div style="border-bottom: 2px dashed black;">
                    <span>
                        {item.title}
                    </span>
                    <span style="float: right;">
                        {item.date}
                    </span>
                </div>
                <br>
                <textarea style="width: 98%; height:60px">
                    {item.description}
                </textarea>
                <div>
                    <!-- <div class="btn-edit">
                        <button on:click = {edit(item.id)} >
                        Edit
                        </button>
                    </div> -->
                    <div class="btn-delete">
                        <button on:click = {remove(item.id)} >
                        Delete
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    {/if}

    {#if add_item}
        <AddItem />
    {/if}

    <!-- {#if list_edit_visible}
        <EditItem />
    {/if} -->

</div>
