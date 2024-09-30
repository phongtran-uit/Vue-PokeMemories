<template>
  <div class="container">
    <div class="game-board">
      <button class="go-back" @click="emit('toggleGameStatus', 0, gameStatus.start)">
        <i class="fa-solid fa-arrow-left"></i>Go Back
      </button>
      <Timer />
    </div>
    <CardList :card-arr="cardArr" @on-game-end="onGameEnd" />
  </div>
</template>

<script setup>
import { createCards } from '@/utils'
import CardList from './CardList.vue'
import { gameStatus } from '@/constants'
import Timer from './Timer.vue'
const props = defineProps({
  numberOfPlayItems: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['toggleGameStatus'])
const cardArr = createCards(props.numberOfPlayItems)

const onGameEnd = () => {
  emit('toggleGameStatus', props.numberOfPlayItems, gameStatus.end)
}
</script>

<style lang="css" scoped>
.container {
  max-width: 75vh;
  margin: 0 auto;
  padding: 16px;
  height: 95vh;
}
.game-board {
  top: 32px;
  left: 32px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.go-back {
  padding: 16px 32px;
  border-radius: 16px;
  background-color: var(--dark);
  border: 1px solid var(--light);
  color: var(--light);
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
}
.go-back:hover {
  background-color: var(--light);
  color: var(--dark);
}
</style>
