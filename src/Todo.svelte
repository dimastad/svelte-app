<script>
	import { onMount } from 'svelte';
    import Input from './Input.svelte';
    export let name;
    let todos = [];
    
    onMount(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=18&_limit=17`)
        todos = await res.json();
    })

    const getDeleteItem = (id) => {
        console.log('id ', id)
    }


</script>

<main>
	<h1>{name}!</h1>
    <Input />
    <section>
        {#each todos as todo }
        <article>
            <h3>Owner Id: {todo.userId}</h3>
            <p>{todo.title}</p>
            <span class="badge">{todo.completed}</span>
            <span class="close" on:click={getDeleteItem(todo.id)}>&#9747;</span>
        </article>
        {:else}
        <p>loading...</p>
        {/each}    
    </section>
    
    
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #000000;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 900;
	}

    h3 {
        margin: 0;
        grid-row-start: 1;
    }

    section {
        margin: 0 auto;
        padding-right: 5px;
        text-align: start;
        max-width: 75%;
        max-height: 500px;
        overflow-y: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }

    section::-webkit-scrollbar {
        width: 5px;
    }

    section::-webkit-scrollbar-track {
        background-color: transparent;
    }

    section::-webkit-scrollbar-thumb {
        background-color: lightgray;
        border-radius: 25px;
    }

    article {
        display: grid;
        grid-template-columns: 1fr 30px;
        gap: 5px;
        border-radius: 1em;
        border: 2px solid grey;
        padding: 0.7em 1.4em;
        position: relative;
    }

    p {
        grid-row-start: 2;
    }

    .badge {
        grid-column-start: 3;
        grid-row: 1/3;
        align-self: center;
        background: green;
        border-radius: 15px;
        padding: 5px 15px;
        color: #fff;
    }

    .close {
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 15px;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	@media (max-width: 768px) {
		section {
			grid-template-columns: 1fr;
		}
	}
</style>