<script setup lang="ts">


import { ref, defineEmits, defineProps } from 'vue'
import InputExternalValue from './InputExternalValue.vue'

const emit = defineEmits(['changed', 'goto'])
const props = defineProps(['currentTime'])

const data = ref({
    label: "",
    from: "",
    to: "",
    preview: "",
})

const validateSequence = function() {
  console.log(data);
  ///emit
}

</script>

<template>
  <div class="sequenceItem">

    <p>{{ currentTime }}</p>

    <form action="" @submit="validateSequence">
        <p>label: <input type="text" v-model="data.label" /></p>
        <p>from:    <InputExternalValue v-model="data.from" :externalValue="currentTime" /></p>
        
        <p>to:      <InputExternalValue v-model="data.to" :externalValue="currentTime" /></p>
        <p>preview: <InputExternalValue v-model="data.preview" :externalValue="currentTime" /></p>

        <button>Validate</button>
    </form>

    <p>{{ data.label }} : {{ data.from }} --> {{ data.to }} ({{ data.preview }})</p>
    
  </div>
</template>

<style scoped>
.sequenceItem {
  border: 1px solid black;
  padding: 1em;

}

</style>
