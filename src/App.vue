<template>
    <div id="app">
        <h1>todos<sup v-if="this.todos.length > 0">{{ this.todos.length }}</sup></h1>
        <div class="col-2">
            <AddTodo @add-todo="addTodo" />
            <select v-model="filter">
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
            </select>
        </div>
        

        <hr>

        <Loader v-if="loading" />
        <TodoList 
            v-else-if="filterTodos.length"
            v-bind:todos="filterTodos" 
            @remove-todo="removeTodo" />
        <div v-else>
            <p>No todos!</p>
            <p>Type text in the input field to add a new todo item.</p>
        </div>
    </div>
</template>

<script>
    import TodoList from '@/components/todo-list';
    import AddTodo from '@/components/add-todo';
    import Loader from '@/components/loader';

    export default {
        name: "app",
        data() {
            return {
                todos: [
                    {id: 1, title: 'Купить хлеб', completed: false},
                    {id: 2, title: 'Купить масло', completed: false},
                    {id: 3, title: 'Купить молоко', completed: false},
                ],
                loading: true,
                filter: 'all'
            }
        },

        mounted() {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
                .then(response => response.json())
                .then(json => {
                    // this.todos = json;
                    // this.loading = false
                    setTimeout(() => {
                        this.todos = json;
                        this.loading = false
                    }, 1000)
                })
        },

        computed: {
            filterTodos() {
                if (this.filter === 'all') {
                    return this.todos;
                }
                
                if (this.filter === 'completed') {
                    return this.todos.filter(item => item.completed);
                }
                
                if (this.filter === 'active') {
                    return this.todos.filter(item => !item.completed);
                }
            }
        },

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
            AddTodo,
            Loader
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
        font-size: 3rem;
        color: #F3E0E0;
    }

    h1 sup {
        font-size: 1rem;
    }

    hr {
        border: solid 1px white;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    }

    .col-2 {
        width: 700px;
        padding: 5px;
        display: flex;
        justify-content: center;
    }

    .indicator {
        border: solid 1px fuchsia;
    }
</style>
