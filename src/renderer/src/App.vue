<script setup lang="ts">
import {
  SettingOutlined,
  VideoCameraOutlined,
  Loading3QuartersOutlined
} from '@ant-design/icons-vue';

import { computed } from 'vue';

import Settings from './components/settings/index.vue'
import Camera from './components/camera/index.vue'
import { useConfigStore } from './store/config';
import useDrag from '@renderer/hooks/useDrag'


const { config } = useConfigStore()
const handleClick = () => {
  config.currentTag = currentTag.value === 'camera' ? 'settings' : 'camera'
}

const currentTag = computed(() => config.currentTag)

const handleMenu = () => {
  window.api.openMenu()
}
useDrag()

const handleRounded = () => {
  config.rounded = !config.rounded
  if (config.rounded) {
    window.api.setWindowSize({ aspectRatio: 1, width: 300, height: 300 })
  } else {
    window.api.setWindowSize({ aspectRatio: 16 / 9, width: 350, height: 197 })
  }

}

</script>

<template>
  <!-- <Suspense> -->
  <main class="w-screen h-screen relative group" @contextmenu="handleMenu">
    <div @click="handleClick"
      class=" hidden group-hover:block cursor-pointer z-20 absolute mt-2  t-10  left-1/2 -translate-x-1/2 text-slate-100">
      <SettingOutlined v-if="currentTag === 'camera'" />
      <VideoCameraOutlined v-else />
    </div>
    <Camera v-if="currentTag === 'camera'" />
    <Settings v-else />
    <Loading3QuartersOutlined
      class="hidden group-hover:block  cursor-pointer text-slate-100 absolute bottom-6 left-1/2 -translate-x-1/2"
      v-if="config.currentTag === 'camera'" @click="handleRounded" />
  </main>
  <!-- </Suspense> -->
</template>
