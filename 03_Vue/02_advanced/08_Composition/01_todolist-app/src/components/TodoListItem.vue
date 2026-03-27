<template>
    <li
        class="list-group-item"
        :class="{ 'list-group-item-success': todo.completed }"
        @click="$emit('toggle-completed', todo.id)"
    >
        <span class="pointer" :class="{ 'todo-done': todo.completed }"
            >{{ todo.todo }} {{ todo.completed ? '(완료)' : '' }}</span
        >
        <span
            class="float-end badge bg-secondary pointer"
            @click.stop="$emit('delete-todo', todo.id)"
            >삭제</span
        >
    </li>
</template>

<script setup>
const props = defineProps({
    todo: {
        type: Object,
    },
});
</script>

<style scoped></style>
