<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" v-on:change="todo.completed = !todo.completed">
            <strong>{{ index + 1 }}</strong> {{ todo.title | uppercase }}
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
        },

        filters : {
            uppercase(value) {
                return value.toUpperCase();
            }
        },
    }
</script>

<style scoped>
    li {
        display: flex;
        justify-content: space-between;
        margin: 1rem;
        padding: .5rem 2rem;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
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
        background: #F3E0E0;
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