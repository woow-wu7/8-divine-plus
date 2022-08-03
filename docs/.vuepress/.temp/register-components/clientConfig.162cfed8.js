import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("DividerH", defineAsyncComponent(() => import("/Users/wuxia/work/personal/front_end/8-divine-plus/docs/.vuepress/components/DividerH.vue"))),
      app.component("DividerV", defineAsyncComponent(() => import("/Users/wuxia/work/personal/front_end/8-divine-plus/docs/.vuepress/components/DividerV.vue")))
  },
}
