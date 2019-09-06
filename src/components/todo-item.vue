<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" v-on:change="todo.completed = !todo.completed">
            <strong>{{ index + 1 }}</strong> {{ todo.title }}
        </span>
        <button class="remove" title="Delete" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
    </li>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            },
            // index: Number
            index: ''
        }
    }
</script>

<style scoped>
    li {
        display: flex;
        justify-content: space-between;
        margin: 1rem;
        padding: .5rem 2rem;
        border: solid 1px gray;
    }

    .remove {
        width: 30px;
        height: 30px;
        background: none;
        color: gray;
        font-weight: bold;
        border: none;

    }

    .remove:hover {
        background: red;
        color: white;
        border-radius: 50%;
        cursor: pointer;
    }

    input {
        margin-right: 1rem;
    }

    .done {
        text-decoration: line-through;
    }
</style>