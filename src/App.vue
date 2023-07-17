<script setup lang="ts">
import { ref } from 'vue'

import OpenDropZone from './components/OpenDropZone.vue'
import VideoPlayer from './components/VideoPlayer.vue'

const videoPath = ref("")
const currentTime = ref(0)

</script>

<template>
  <div v-if="!videoPath" class="containerSingle standardContainer">
    <h1>Hello, Marceau video</h1>
    <OpenDropZone @file-path-selected="(path) => videoPath = path " />
  </div>

  <div v-if="videoPath" class="containerDouble">
    <div class="containerDouble_contentOne standardContainer">
      <VideoPlayer :video="videoPath" @currentTime="(time) => currentTime = time.label" />
    </div>

    <div class="containerDouble_contentTwo standardContainer">
      <p>Sequences: {{ currentTime }}</p>
      <p>Subtitles: {{ currentTime }}</p>
    </div>
    
  </div>

</template>



<style scoped>

</style>
