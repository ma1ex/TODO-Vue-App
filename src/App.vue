<template>
    <div id="app">
        <h1>todos</h1>
        <TodoList v-bind:todos="todos" />
    </div>
</template>

<script>
    import TodoList from '@/components/todo-list';
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
        components: {
            TodoList
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
        margin-top: 60px;
    }

    h1 {
        color: rgba(175, 47, 47, 0.15);
    }
</style>
