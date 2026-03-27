<template>
    <!-- songs를 Props로 전달 -->
    <SongList :songs="songs"></SongList>
    <button @click="addSong">새로운 곡 추가</button>
</template>

<script setup>
import { ref, provide, computed } from 'vue';
import SongList from './components/SongList.vue';

const songs = ref([
    { id: 1, title: 'Blueming', done: true },
    { id: 2, title: 'Dynamite', done: true },
    { id: 3, title: 'Lovesick Girls', done: false },
    { id: 4, title: '마리아(Maria)', done: false },
]);

// songs 추가
const addSong = () => {
    songs.value.push({
        id: 5,
        title: '새로운 노래',
        done: true,
    });
};

// Provide
// - provide('key', data) : 정적 값
// - provide('key', computed()) : 반응형을 유지한 데이터

provide('icons', {
    checked: 'far fa-check-circle',
    unchecked: 'far fa-circle',
});

provide(
    'doneCount',
    computed(() => {
        songs.value.filter((song) => song.done === true).length;
    }),
);
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
</style>
