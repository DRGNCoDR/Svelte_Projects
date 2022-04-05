<script>
    let display = "0"
    let storedNumber = 0
    let storedNumber2 = 0
    let operator = ""

    const buttons = [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
        "."
    ]
    const operators = [
        "+", "-", "/", "*"
    ]
    //Function
    const appendDisplay = (pressedButton) =>{
        if (display == "0" ){
            clearDisplay()
        }

        display = `${display}${pressedButton}`

        if (pressedButton == "C"){
            resetCalcualtor()
        }

        if(pressedButton == "+"
        || pressedButton == "-"
        || pressedButton == "/"
        || pressedButton == "*"){
            operator = pressedButton
            storedNumber = display.slice(0, -1)
            clearDisplay()
        }

        if(pressedButton == "="){
            storedNumber2 = parseInt(display)
            clearDisplay()
            calculateOperations(storedNumber, operator, storedNumber2)
        }
    }
    function clearDisplay(){
        display = ""
    }
    function resetCalcualtor(){
        display = "0"
        storedNumber = 0
        storedNumber2 = 0
        operator = ""
    }
    function calculateOperations(number, operation, number2){
        console.log(number + operation + number2)
        if(operation == "+"){
            display = parseInt(number) + parseInt(number2)
        }
        if(operation == "-"){
            display = parseInt(number) - parseInt(number2)
        }
        if(operation == "/"){
            display = parseInt(number) / parseInt(number2)
        }
        if(operation == "*"){
            display = parseInt(number) * parseInt(number2)
        }
    }
</script>
<style>
    #App-title{
        text-align: center;
    }
     #Calculator-Container{
        border: 3px solid black;
        height: 400px;
        width: 80%;
        margin: auto;
    }
    #display-container{
        padding: 10px;
    }
    #display{
        text-align: right;
        border: 3px solid black;
        font-size: 40px;
        margin: 1px;
        padding: 5px;
    }
    .button{
        display:flex;
        flex: 0 1 33%;
        justify-content: center;
        align-items: center;
        height: 40px;
        border: 1px solid black;
        border-top:none;
        border-left:none;
        cursor: pointer;
        background: -webkit-linear-gradient(top,#d2d2d2,#ddd);
        font-size:2em;
    }
    #clear-button{
        padding-left: 10px;
    }
    .clear-button{
        justify-content: center;
        align-items: center;
        height: 40px;
        border: 1px solid black;
        border-top:none;
        border-left:none;
        cursor: pointer;
        background: -webkit-linear-gradient(top,#d2d2d2,#ddd);
        font-size:2em;
    }
    #num-button-container{
       padding: 10px;
       display: flex;
       flex-wrap: wrap;
       flex: 0 1 40%;
       min-width: 400px;
    }
    .zero-btn{
       /* display: flex;
       flex-wrap: wrap;
       flex: 4 0 40%;
       min-width: 416px; */
    }
    #operators-container{
        padding: 10px;
       display: flex;
       justify-content: space-evenly;

    }
    .operator{
        background: #f98110;
        color: #fff;
        flex: 0 2 5%;
    }

    /* .col{
        display: flex;
        flex-wrap: wrap;
        flex: 0 1 100%;
    } */
</style>
<h1 id="App-title">Ray's Svelte Calulator</h1>
<div id="Calculator-Container">
    <div id="display-container">
        <h4 id="display">{display}</h4>
    </div>
    <div id="clear-button" >
        <button class="clear-button operator" on:click = {() => appendDisplay("C")}>Clear</button>
    </div>
    <br>
    <div id="num-button-container">
        <!--Generate Buttons-->
        {#each buttons as button}
            <button
                id = "button-{button}"
                class = "col button"
                on:click = {() => appendDisplay(button)}>{button}
            </button>
        {/each}
        <div id="zero-button" >
            <button class="button zero-btn" on:click = {() => appendDisplay("0")}>0</button>
        </div>
    </div>
    <br>
    <div id="operators-container">
        {#each operators as operator}
                <button
                    id = "button-operator"
                    class = "operator button"
                    on:click = {() => appendDisplay(operator)}>{operator}
                </button>
        {/each}
        <div id="equals-container" >
            <button class="button operator" on:click = {() => appendDisplay("=")}>=</button>
        </div>
    </div>

</div>


<!-- Learn CSS Grid, Flexbox for layout of the buttons-->
<!--Run live server-->
<!-- http://localhost:1338/ -->
<!-- Remember to BUILD -->
