<script setup lang="ts">

import { ref, defineEmits } from 'vue'

const emit = defineEmits(['filePathSelected'])

const filePath = ref("")
const dropZoneClass = ref("")

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
  console.log("over")
  dropZoneClass.value = "active"

  e.preventDefault();
  e.stopPropagation();
}

const handleDragout = function(e) {
  console.log("leave")
  dropZoneClass.value = ""

  e.preventDefault();
  e.stopPropagation();
}

const emitFilePath = function(){
  console.log(emitFilePath, filePath);
  emit('filePathSelected', filePath.value);
}

</script>

<template>
  <div @drop="handleDrop" @dragover="handleDragover" @dragleave="handleDragout" class="dropZone" :class="dropZoneClass">
      <p><button class="actionButton" @click="handleOpen">Open file...</button></p>
      <p><span>...or drop your video here</span></p>
  </div>
</template>

<style scoped>
.dropZone {
  text-align: center;
  border: 3px dashed white;
  transition: 0.2s;
}

.dropZone.active {
  border: 3px dashed lightgrey;
}
</style>
