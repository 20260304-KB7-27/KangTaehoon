<template>
    <h1>📌 게시판 목록 v3</h1>
    <div class="add-container">
        <input
            type="text"
            v-model.trim="post.title"
            placeholder="새 게시물 제목"
        />
        <input
            type="text"
            v-model.trim="post.content"
            placeholder="새 게시물 내용"
        />
        <button @click.stop="addPost">작성</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const post = ref({
    title: '',
    content: '',
});
const emit = defineEmits(['add']);
const curNum = ref(11);
const addPost = (e) => {
    if (post.value.title === '') return;

    emit('add', {
        no: curNum.value,
        id: new Date().getTime(),
        title: post.value.title,
        content: post.value.content,
        isOpened: false,
        isEditing: false,
    });
    curNum.value += 1;

    post.value = {
        title: '',
        content: '',
    };
};
</script>

<style lang="scss" scoped></style>
