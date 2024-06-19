import { Ref, onMounted } from "vue"

export const useIgnoreMouseEvent = (ele:Ref<HTMLElement | null>) => {
  onMounted(() => {
    ele.value?.addEventListener('mousemove', function (e:MouseEvent) {
      const rect = this.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const radius = rect.width / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;

        if (dx * dx + dy * dy <= radius * radius) {
            // 鼠标在圆形区域内
            window.electron.ipcRenderer.send('ignoreMouseEvent', false)
        } else {
            // 鼠标在圆形区域外
            window.electron.ipcRenderer.send('ignoreMouseEvent', true)
        }
    })
    ele.value?.addEventListener('mouseleave', () => {
      window.electron.ipcRenderer.send('ignoreMouseEvent', true)
    })
  })
  // onUnmounted(())
}
