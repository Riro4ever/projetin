<script setup>
const props = defineProps(['state']);
</script>

<template>
  <div class="game-move">
    <fa v-if="props.state== 1" :icon="['far', 'circle']" size="6x" color="blue"/>
    <fa v-else-if="props.state== 2" :icon="['fas', 'xmark']" size="8x" color="blue"/>
  </div>
</template>

<style scoped>
.game-move{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>