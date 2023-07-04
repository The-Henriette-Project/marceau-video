<script setup lang="ts">

import { ref, defineEmits } from 'vue'

const emit = defineEmits(['filePathSelected'])

const filePath = ref("")

const handleOpen = function() {
  window.electron.openVideoFile().then((theFilePath) => {
    console.log(theFilePath)
    filePath.value = theFilePath
    emitFilePath()
  })
}

const handleDrop = function(e) {
  
  e.preventDefault();
  e.stopPropagation();

  for (const f of e.dataTransfer.files) {
    filePath.value = f.path
  }

  emitFilePath()
}

const handleDragover = function(e) {
  e.preventDefault();
  e.stopPropagation();
}

const emitFilePath = function(){
  console.log(emitFilePath, filePath);
  emit('filePathSelected', filePath.value);
}

</script>

<template>

  <div>
    <button @click="handleOpen">Open file...</button>
  </div>

  <div @drop="handleDrop" @dragover="handleDragover" class="dragZone">
      <span>...or drop your video here</span>
  </div>

  <p>{{filePath}}</p>

</template>

<style scoped>

</style>
