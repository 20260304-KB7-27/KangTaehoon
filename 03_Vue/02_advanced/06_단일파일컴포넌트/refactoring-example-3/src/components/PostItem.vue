<template>
    <li class="post-item-container">
        <div class="post-item" @click.stop="openHandler">
            <span>{{ post.no }}. {{ post.title }}</span>
            <span class="arrow">{{ post.isOpened ? '▲' : '▼' }}</span>
        </div>

        <OpenedItem
            v-if="post.isOpened && !post.isEditing"
            :post="post"
            @edit="editHandler"
            @delete="(id) => emit('delete', id)"
            @open="openHandler"
        />
        <EditItem
            v-else-if="post.isOpened && post.isEditing"
            :post="post"
            @save="(data) => emit('save', data)"
            @edit="editHandler"
        />
    </li>
</template>

<script setup>
import EditItem from './EditItem.vue';
import OpenedItem from './OpenedItem.vue';

const props = defineProps({
    post: Object,
});

const emit = defineEmits(['edit', 'delete', 'open', 'save']);

const openHandler = () => {
    emit('open', props.post.no);
};

const editHandler = () => {
    emit('edit', props.post.no);
};
</script>

<style lang="scss" scoped></style>
