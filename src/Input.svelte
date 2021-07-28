<script>

</script>


<form>
    <label for="">Enter your text </label>
    <input type="text" placeholder="enter something" />
    <button>send</button>
</form>



<style>
    form {
        display: grid;
        grid-template-columns: max-content 1fr auto;
        align-items: center;
        gap: 15px;
        max-width: 75%;
        margin: 0 auto 25px auto;
        text-align: start;
    }

    input {
        margin: 0;
        border-radius: 1em;
        border: 2px solid grey;
        padding: 0.7em 1.4em;
        transition: border 0.3s;
    }

    input:focus {
        outline: none;
        border: 2px solid lightgray;
    }

    button {
        padding: 0.7em 1.4em;
        margin: 0;
        border: 2px solid grey;
        border-radius: 1em;
        cursor: pointer;
        transition: all 0.3s;
    }

    button:hover {
        background-color: #fff;
    }

    @media (max-width: 768px) {
        form {
            grid-template-columns: 1fr auto;
        }
        input, button {
            grid-row-start: 2;
        }
    }
</style>