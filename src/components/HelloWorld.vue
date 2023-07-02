<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{ msg: string }>()
console.log('Hello from VUE component')
const count = ref(0)
const video = ref("")
const time = ref("")
const vtt = ref(`WEBVTT
00:01.000 --> 00:04.000
This is a test
00:05.000 --> 00:09.000
yes, a test`)


const handleClick = function() {
  count.value++;
  window.electronAPI.setTitle("IPC TEST FROM COMPONENT 1")

  
  window.electronAPI.setTitle2("IPC TEST FROM COMPONENT 2").then(data => {
    //alert(data);
    console.log("set title2 ok...")
  })
  
  window.electronAPI.save1(video.value)
  
  window.electronAPI.save2(video.value).then(() => {
    console.log("save2 done.")
  })

  window.electronAPI.save3(video.value).then(() => {
    console.log("save3 done.")
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

const handleTime = function(e) {
  const currentTime = e.target.currentTime
  
  var minutes = Math.floor(currentTime / 60);
  var hours = Math.floor(minutes / 60);   
  var seconds = Math.floor(currentTime - minutes * 60);
  var floatSeconds = currentTime - minutes * 60;

  //console.log("handleTime", currentTime);
  //console.log("handleTime", `${hours}:${minutes}:${seconds}`);
  //console.log("handleTime", `${hours}:${minutes}:${floatSeconds}`);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  floatSeconds = floatSeconds < 10 ? '0' + floatSeconds : floatSeconds;


  time.value = `${hours}:${minutes}:${floatSeconds}`
}



const vttEncoded = computed(()=> {
  return "data:text/vtt;base64," +  btoa(vtt.value)
}) ;

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="handleClick">count is {{ count }}</button>

    <video width="300" @timeupdate="handleTime" :src="video" controls>
      <track label="Test" kind="subtitles" srclang="fr" :src="vttEncoded" default>

    </video>

    <div @drop="handleDrop" @dragover="handleDragover">
      Drag your video here 
      <p>{{ time }}</p>
      {{ video }}
    </div>

    <textarea v-model="vtt"></textarea>

  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
