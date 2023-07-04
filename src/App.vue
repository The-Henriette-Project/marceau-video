<script setup lang="ts">
import { ref } from 'vue'

import OpenDropZone from './components/OpenDropZone.vue'
import VideoPlayer from './components/VideoPlayer.vue'

const videoPath = ref("")

</script>

<template>
  <OpenDropZone @file-path-selected="(path) => videoPath = path " />
  <VideoPlayer v-if="videoPath" :video="videoPath" />
    <p>video: {{ videoPath }}</p>

</template>



<style scoped>

</style>
