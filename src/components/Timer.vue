<template>
  <div>
    <div :class="['timer', duration <= 30 && duration > 0 ? 'danger' : duration <= 0 ? 'end' : '']">
      Time Remaining:
      <p class="time-remaining">
        {{ `${timer.hours}`.padStart(2, '0') }} : {{ `${timer.minutes}`.padStart(2, '0') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps({
  duration: {
    type: Number,
    default: 1800
  }
})
let duration = props.duration
const timer = reactive({
  hours: Math.floor(duration / 60),
  minutes: duration % 60
})
const interval = setInterval(() => {
  if (duration === 0) {
    clearInterval(interval)
    confirm('Your playtime is up. Give it another try!')
    return
  }
  duration--
  timer.hours = Math.floor(duration / 60)
  timer.minutes = duration % 60
}, 1000)
</script>

<style lang="css" scoped>
@keyframes danger {
  0% {
    color: var(--secondary);
    border-color: var(--secondary);
  }
  50% {
    color: var(--light);
    border-color: var(--light);
  }
  100% {
    color: var(--secondary);
    border-color: var(--secondary);
  }
}
.timer {
  padding: 16px 32px;
  color: var(--primary);
  border-radius: 16px;
  background-color: var(--dark);
  border: 1px solid var(--primary);
  text-align: center;
  transition: all 0.3s;
}
.danger {
  animation: danger 1s infinite;
}
.time-remaining {
  color: var(--light);
  font-size: 28px;
}
</style>
