<template>
    <span>
        <input type="checkbox">
        <strong>{{todo.id}}</strong>
        {{ todo.title }}
        <button class="remove">&times;</button>
    </span>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .remove {
        background: darkred;
        color: white;
        border-radius: 20%;
        font-weight: bold;
        border: solid 1px gray;
    }

    .done {
        text-decoration: line-through;
    }
</style>