<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{ video: string }>()

const time = ref("")

const vtt = ref(`WEBVTT
00:01.000 --> 00:04.000
This is a test
00:05.000 --> 00:09.000
yes, a test`)


const handleTime = function(e) {
  const currentTime = e.target.currentTime
  
  var minutes = Math.floor(currentTime / 60);
  var hours = Math.floor(minutes / 60);   
  var seconds = Math.floor(currentTime - minutes * 60);
  var floatSeconds = currentTime - minutes * 60;

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

  <div class="videoPlayer">
    <p>{{video}}</p>
    <video width="300" @timeupdate="handleTime" :src="video" controls>
      <track label="Test" kind="subtitles" srclang="fr" :src="vttEncoded" default>
    </video>

  </div>

</template>

<style scoped>

</style>
