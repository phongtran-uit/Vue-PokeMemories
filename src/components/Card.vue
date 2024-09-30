<template>
  <div class="card-wrapper">
    <div
      :class="['card-inner', props.isFlipped ? 'isFlipped' : '']"
      @click="emit('onClickCard', card.id)"
      :style="{
        transition: `all ${props.rotateDuration}ms`
      }"
    >
      <div class="card card-front">
        <img :src="cardFront" alt="card-front" />
      </div>
      <div class="card card-back">
        <img :src="props.card.imgSrc" alt="card-back" />
      </div>
    </div>
  </div>
</template>

<script setup>
import cardFront from '@/assets/images/icon_back.png'
const props = defineProps({
  card: {
    type: Object,
    required: true
  },
  isFlipped: {
    type: Boolean,
    default: false
  },
  rotateDuration: {
    type: Number,
    default: 1000
  }
})
const emit = defineEmits(['onClickCard'])
</script>

<style lang="css" scoped>
.card-wrapper {
  perspective: 1600px;
}
.card-inner {
  height: 100%;
  position: relative;
  box-shadow: 0 3px 18px 3px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
}
.card-inner.isFlipped {
  transform: rotateY(-180deg);
  pointer-events: none;
}
.card {
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
}
.card-front {
  background-color: var(--dark);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  cursor: pointer;
}
.card-back {
  transform: rotateY(-180deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: var(--light);
  padding: 16px;
}
img {
  pointer-events: none;
}
.card-front img {
  max-width: 50%;
  height: auto;
}
.card-back img {
  max-width: 100%;
  height: auto;
}
</style>
