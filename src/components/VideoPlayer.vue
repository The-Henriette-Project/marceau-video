<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits(['currentTime'])
defineProps<{ video: string }>()

const time = ref("00:00:00")

emit('currentTime', {
    timestamp: 0,
    hours: '00',
    minutes: '00',
    seconds: '00',
    floatSeconds: '00', 
    label: time.value
  });

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

  const label = `${hours}:${minutes}:${floatSeconds}`
  time.value = label

  emit('currentTime', {
    timestamp: currentTime,
    hours,
    minutes,
    seconds,
    floatSeconds, 
    label
  });
}

const vttEncoded = computed(()=> {
  return "data:text/vtt;base64," +  btoa(vtt.value)
}) ;

</script>

<template>

  <div class="videoPlayer">
    
    <div>
      <video width="300" @timeupdate="handleTime" :src="video" controls>
        <track label="Test" kind="subtitles" srclang="fr" :src="vttEncoded" default>
      </video>
    </div>
    
    <p class="timePanel">{{ time }}</p>
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
