<template>
    <li class="todo" v-bind:class="{completed: todo.completed}">
        <div class="view">
            <!-- <input class="toggle" v-bind:checked="todo.completed" type="checkbox" v-on:change="todo.completed = !todo.completed">  -->
            <input class="toggle" v-bind:checked="todo.completed" type="checkbox" v-on:change="$emit('completed-todo', todo.id)"> 
            <label>{{ todo.title }}</label> 
            <button class="destroy" title="Delete" v-on:click="$emit('remove-todo', todo.id)"></button>
        </div>
        <!-- <input class="edit" type="text"> -->
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

        filters: {
            uppercase(value) {
                return value.toUpperCase();
            }
        }
    }
</script>

<style>
    .done {
        text-decoration: line-through;
        color: gray;
    }
</style>