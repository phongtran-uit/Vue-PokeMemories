<template>
  <div class="screen">
    <div>
      <h1 class="title">POKE MEMORIES</h1>
      <h3 class="description">Select mode to start game</h3>
      <div class="actions">
        <button
          class="item"
          v-for="item in gameModes"
          :key="item.id"
          @click="playGame(item.totalItems)"
        >
          <p class="name">{{ item.name }}</p>
          <p class="level">{{ item.level }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gameModes, gameStatus } from '@/constants'
import { defineEmits } from 'vue'
const emit = defineEmits(['toggleGameStatus'])
const playGame = (playItem) => {
  emit('toggleGameStatus', playItem, gameStatus.playing)
}
</script>

<style scoped lang="css">
.screen {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.title {
  font-size: 72px;
  color: var(--light);
}
.description {
  font-size: 32px;
  color: var(--light);
  margin-bottom: 24px;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.item {
  width: 150px;
  height: 150px;
  border-radius: 16px;
  background-color: transparent;
  border: none;
  border: 1px solid currentColor;
  color: var(--light);
  cursor: pointer;
  transition: all 0.3s;
  padding: 16px;
}
.item .name {
  font-size: 32px;
}
.item .level {
  font-size: 20px;
}
.item:hover {
  background-color: var(--light);
  color: var(--dark);
}
</style>
