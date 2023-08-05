<script setup lang="ts">
import {timeObject, zeroTimeObject, vttString} from '../utility'
import { ref, computed } from 'vue'

const emit = defineEmits(['currentTime'])
defineProps<{ video: string }>()

const currentTime = ref(zeroTimeObject())
emit('currentTime', currentTime);

const vtt = ref({

})

const handleTime = function(e) {
  currentTime.value = timeObject(e.target.currentTime);
  emit('currentTime', currentTime.value);
}

const vttEncoded = computed(()=> {
  return vttString(vtt.value)
}) ;

</script>

<template>

  <div class="videoPlayer">
    
    <div>
      <video width="300" @timeupdate="handleTime" :src="video" controls>
        <track label="Test" kind="subtitles" srclang="fr" :src="vttEncoded" default>
      </video>
    </div>
    
    <p class="timePanel">{{ currentTime.label }}</p>
  </div>

</template>

<style scoped>
.videoPlayer {

}

.timePanel {
  background-color: black;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  display: inline-block;
}
</style>
