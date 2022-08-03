import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Divider", defineAsyncComponent(() => import("/Users/wuxia/work/personal/front_end/8-divine-plus/docs/.vuepress/components/Divider.vue")))
  },
}
