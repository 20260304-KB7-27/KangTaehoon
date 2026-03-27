<template>
    <div class="row mb-3">
        <div class="col">
            <div class="input-group">
                <input
                    type="text"
                    v-model.trim="todo"
                    class="form-control"
                    placeholder="할일은 여기에 입력!"
                    @keyup.enter="$emit('add', todo)"
                />
                <button class="btn btn-primary" @click="$emit('add', todo)">
                    입력
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const todo = ref('');
</script>

<style scoped></style>
