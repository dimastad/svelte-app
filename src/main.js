import Todo from './Todo.svelte';

export const todo = new Todo({
	target: document.body,
	props: {
		name: 'Todo list',
	}
});
