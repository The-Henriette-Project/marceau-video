<script setup lang="ts">

import { ref, defineEmits, defineProps, watch } from 'vue'

const emit = defineEmits(['update:modelValue', 'changed'])
const props = defineProps(['modelValue', 'externalValue'])

const useExternalValue = ref(true)
const realValue = ref(props.modelValue)

watch(props, (newProps) => {
    updateValueFromExternal(newProps.externalValue)    
})

const updateValueFromExternal = function(externalValue){
    if (useExternalValue.value !== true) {
        return
    }

    realValue.value = externalValue

    emit('update:modelValue', realValue.value)
}

const toggleExternal = function(event){
    event.preventDefault();
    useExternalValue.value = !useExternalValue.value
    updateValueFromExternal(props.externalValue)
}

</script>

<template>
    <input type="text" v-model="realValue" />
    <button @click="toggleExternal">{{ useExternalValue ? "fix to " + props.externalValue : "fixed (click to unfix)." }}</button>
</template>

<style scoped>
input {
  border: 1px solid black;
  padding: 0.3em;

}

</style>
