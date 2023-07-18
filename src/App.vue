<script setup lang="ts">
import { ref } from 'vue'

import OpenDropZone from './components/OpenDropZone.vue'
import VideoPlayer from './components/VideoPlayer.vue'
import SequenceItem from './components/SequenceItem.vue'

const videoPath = ref("")
const currentTime = ref(0)

const data = ref({
  "video": {
    "path": "",
    "file": "",
  },

  "sequences": {

  }
})

const validatedSequence = function(sequence, sequenceId) {
  ///...
  console.log("validatedSequence", sequenceId, sequence)
}

const gotoTime = function(time) {
  ///...
  console.log("gotoTime", time)
}


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

      <SequenceItem :currentTime="currentTime" mode="edit" @validated="validatedSequence" @goto="gotoTime" />

      <template v-for="(sequence, sequenceId) in data.sequences" :key="sequenceId">
        <SequenceItem  :currentTime="currentTime" :sequence="sequence" mode="show" />
      </template>

      

      <p>Subtitles: {{ currentTime }}</p>
    </div>
    
  </div>

</template>



<style scoped>

</style>
