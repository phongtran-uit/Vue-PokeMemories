<script setup>
import InteractScreen from '@/components/InteractScreen.vue'
import MainScreen from '@/components/MainScreen.vue'
import ResultScreen from '@/components/ResultScreen.vue'
import { reactive } from 'vue'
import CopyRight from './components/CopyRight.vue'
import { gameStatus } from './constants'
let state = reactive({
  gamePlayStatus: gameStatus.start,
  numberOfPlayItems: 0
})
const toggleGameStatus = (playItem, status) => {
  state.numberOfPlayItems = playItem
  state.gamePlayStatus = status
}
</script>
<template>
  <MainScreen
    @toggle-game-status="toggleGameStatus"
    v-if="state.gamePlayStatus === gameStatus.start"
  />
  <InteractScreen
    v-if="state.gamePlayStatus === gameStatus.playing"
    @toggle-game-status="toggleGameStatus"
    :number-of-play-items="state.numberOfPlayItems"
  />
  <ResultScreen
    v-if="state.gamePlayStatus === gameStatus.end"
    @toggle-game-status="toggleGameStatus"
    :number-of-play-items="state.numberOfPlayItems"
  />
  <CopyRight />
</template>

<style scoped></style>
