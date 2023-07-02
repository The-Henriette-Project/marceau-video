<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
console.log('Hello from VUE component')
const count = ref(0)
const video = ref("")

const handleClick = function() {
  count.value++;
  window.electronAPI.setTitle("IPC TEST FROM COMPONENT 1")

  //await
  window.electronAPI.setTitle2("IPC TEST FROM COMPONENT 2").then(data => {
    alert(data);
  })
  

}

const handleDrop = function(e) {
  console.log("drop", e);

  e.preventDefault();
    e.stopPropagation();

    for (const f of e.dataTransfer.files) {
      console.log('COMP - File(s) you dragged here: ', f.path)
      video.value = f.path
    }
}

const handleDragover = function(e) {
  //console.log("dragover", e);
}


</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="handleClick">count is {{ count }}</button>

    <video :src="video" controls />

    <div @drop="handleDrop" @dragover="handleDragover">
      Drag your video here 
      {{ video }}
    </div>

  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
