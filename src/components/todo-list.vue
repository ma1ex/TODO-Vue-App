<template>
    <div>
        <ul>
            <li v-for="todo of todos">
                <TodoItem v-bind:todo="todo" />
            </li>
        </ul>
    </div>
</template>

<script>
    import TodoItem from './todo-item';
    export default {
        props: [
            'todos'
        ],
        components: {
            TodoItem
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        display: flex;
        justify-content: space-between;
        margin: 1rem;
        padding: .5rem 2rem;
        border: solid 1px lightgray;
    }
</style>