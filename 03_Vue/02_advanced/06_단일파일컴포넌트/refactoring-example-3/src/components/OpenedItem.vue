<template v-if="post.isOpened && !post.isEditing">
    <div class="post-content">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <button @click.stop="editHandler">수정</button>
        <!-- 삭제 메소드 추가 -->
        <button @click="deleteHandler">삭제</button>
        <button @click.stop="closeHandler(post.no)">닫기</button>
    </div>
</template>

<script setup>
defineProps({
    post: {
        Object,
    },
});

const emit = defineEmits(['edit', 'open', 'delete']);

const editHandler = () => {
    emit('edit');
};
const closeHandler = (id) => {
    emit('open', id);
};

const deleteHandler = (id) => {
    emit('delete', id);
};
</script>

<style lang="scss" scoped></style>
