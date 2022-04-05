<script>
import { error } from "console";


    throw new error("Not implemented yet do not use")
    function back() {
        list_visible = true;
        list_edit_visible = false;
    }
</script>

<style>
    #edit-item-container{
        display: block;
    }
    #action_btns{
        margin: 5px;
    }
</style>

<div id="edit-item-container">
    <h1>Editing ToDo</h1>
    <h4>Title</h4>
    <input type="text">
    <h4>Body</h4>
    <textarea ></textarea>
    <h4>Date</h4>
    <input type="datetime">

    <div id="action_btns">
        <button>Save</button>
        <button >Back</button>
    </div>
</div>

