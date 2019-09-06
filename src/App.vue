<template>
    <div id="app">
        <h1>todos</h1>
        <AddTodo @add-todo="addTodo" />
        <hr>
        <TodoList v-bind:todos="todos" @remove-todo="removeTodo" />
    </div>
</template>

<script>
    import TodoList from '@/components/todo-list';
    import AddTodo from '@/components/add-todo';

    export default {
        name: "app",
        data() {
            return {
                todos: [
                    {id: 1, title: 'Купить хлеб', completed: false},
                    {id: 2, title: 'Купить масло', completed: false},
                    {id: 3, title: 'Купить молоко', completed: false},
                ]
            }
        },

        /* mounted() {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
                .then(response => response.json())
                .then(json => {this.todos = json})
        }, */

        methods: {
            removeTodo(id) {
                this.todos = this.todos.filter(item => item.id !== id);
            },
            addTodo(todo) {
                this.todos.push(todo);
            }
        },

        components: {
            TodoList,
            AddTodo
        }
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px auto 20px auto;
        width: 700px;
    }

    h1 {
        color: rgba(175, 47, 47, 0.15);
    }

    .indicator {
        border: solid 1px fuchsia;
    }
</style>
