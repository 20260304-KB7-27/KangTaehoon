<template>
    <ul>
        <PostItem
            v-for="post in posts"
            :key="post.no"
            :post="post"
            @open="openHandler"
            @edit="editHandler"
            @delete="deleteHandler"
            @save="emit('save', $event)"
        />
    </ul>
</template>

<script setup>
import PostItem from './PostItem.vue';

const props = defineProps({
    posts: Array,
});
const emit = defineEmits(['open', 'edit', 'delete', 'save']);

const openHandler = (no) => {
    emit('open', no);
};

const editHandler = (no) => {
    // console.log(no);

    emit('edit', no);
};

const deleteHandler = (no) => {
    emit('delete', no);
};
</script>

<style lang="scss" scoped></style>
