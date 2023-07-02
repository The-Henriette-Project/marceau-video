<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
console.log('Hello from VUE component')
const count = ref(0)

const handleClick = function() {
  count.value++;
  window.electronAPI.setTitle("IPC TEST FROM COMPONENT")
}



</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="handleClick">count is {{ count }}</button>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
