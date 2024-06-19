<script setup lang="ts">
// import { useIgnoreMouseEvent } from '@renderer/hooks/useIgnoreMouseEvent';
import { useConfigStore } from '@renderer/store/config';
import { ref } from 'vue'
const { config } = useConfigStore()

const constraints: MediaStreamConstraints = {
  video: {
    deviceId: config.deviceid
  },
  audio: false,
}

const videoRef = ref<HTMLVideoElement | null>(null)

const getDevices = async () => {
  const stream = await navigator.mediaDevices.getUserMedia(constraints)
  videoRef.value!.srcObject = stream
  videoRef.value?.play()
}
getDevices()


// useIgnoreMouseEvent(videoRef)
</script>

<template>
  <main :class="{
    'rounded-full': config.rounded,
  }" class="  w-screen h-screen overflow-hidden"
    :style="`border: ${config.borderWidth}px solid ${config.borderColor}`">
    <video class=" h-full w-full object-cover" :class="{
    'rounded-full': config.rounded,
  }" ref="videoRef"></video>
  </main>
</template>

<style scoped></style>
