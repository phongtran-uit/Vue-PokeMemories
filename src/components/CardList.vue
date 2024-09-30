<template>
  <div
    class="card-list"
    :style="`grid-template-columns: repeat(${gridNumber},1fr); grid-template-rows: repeat(${gridNumber},1fr);`"
  >
    <Card
      v-for="(item, idx) in cardArr"
      :card="item"
      :key="idx"
      @on-click-card="(id) => onClickCard(id, idx)"
      :is-flipped="state.chooseIdxArr.includes(idx)"
      :rotate-duration="timeoutAnimation"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Card from './Card.vue'
const props = defineProps({
  cardArr: {
    type: Array
  }
})
const emit = defineEmits(['onGameEnd'])
const state = reactive({
  chooseIdxArr: [],
  firstChooseId: undefined
})

let timeout = undefined
let isBlock = false
const timeoutChecking = 1000
const timeoutAnimation = 500
const gridNumber = Math.sqrt(props.cardArr.length)

const onClickCard = (id, idx) => {
  if (isBlock) return
  state.chooseIdxArr.push(idx)
  if (!state.firstChooseId) {
    state.firstChooseId = id
    timeout = setTimeout(() => {
      state.firstChooseId = undefined
      state.chooseIdxArr.splice(state.chooseIdxArr.length - 1, 1)
    }, timeoutChecking)
  } else {
    clearTimeout(timeout)
    isBlock = true
    setTimeout(() => {
      if (state.firstChooseId !== id) {
        state.chooseIdxArr.splice(state.chooseIdxArr.length - 2, 2)
      }
      isBlock = false
      state.firstChooseId = undefined
      if (props.cardArr.length === state.chooseIdxArr.length) {
        emit('onGameEnd')
      }
    }, timeoutAnimation)
  }
}
</script>

<style lang="css" scoped>
.card-list {
  display: grid;
  height: 100%;
  gap: 16px;
}
</style>
