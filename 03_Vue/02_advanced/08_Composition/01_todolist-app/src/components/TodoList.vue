<template>
    <div class="row">
        <div class="col">
            <ul class="list-group">
                <TodoListItem
                    v-for="todo in todolist"
                    :key="todo.id"
                    :todo="todo"
                    @toggle-completed="$emit('toggle-completed', $event)"
                    @delete-todo="$emit('delete-todo', $event)"
                />
            </ul>
        </div>
    </div>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';

const props = defineProps({
    todolist: {
        type: Array,
    },
});
console.log(props.todolist);
</script>

<style scoped></style>
