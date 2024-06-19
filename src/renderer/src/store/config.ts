import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
  const config = ref({
    deviceid: '',
    currentTag: 'camera',
    borderWidth: '0',
    borderColor: '',
    rounded: true,
  })
  return {
    config
  }
}, {
  persist: true
})
