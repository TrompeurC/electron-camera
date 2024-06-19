<script setup lang="ts">
import { useConfigStore } from '@renderer/store/config';
import { ref } from 'vue';



const { config } = useConfigStore()
const options = ref<MediaDeviceInfo[]>([])
const getOptions = async () => {
  const devices = await navigator.mediaDevices.enumerateDevices()
  options.value = devices.filter(item => item.kind === 'videoinput')
}
getOptions()

</script>

<template>
  <a-form class="settings-bg pt-9 flex justify-center flex-col items-center" :model="config">
    <p class="text-slate-200 mb-4">参数配置</p>
    <a-form-item name="deviceId" label="">
      <a-select placeholder="摄像头" v-model:value="config.deviceid" style="width: 220px">
        <a-select-option v-for="item of options" :key="item.deviceId" :value="item.deviceId">{{
    item.label }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item name="borderWidth">
      <a-input-number placeholder="边框宽度" v-model:value="config.borderWidth" :controls="false" style="width: 220px" />
    </a-form-item>
    <a-form-item name="borderColor">
      <a-input placeholder="边框颜色" v-model:value="config.borderColor" style="width: 220px" />
    </a-form-item>
  </a-form>
</template>

<style scoped>
.settings-bg {
  background: linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100));
}
</style>
