<template>
  <div ref="editor" class="text-editor"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import E from 'wangeditor'
import { uploadCourseImage } from '@/services/course'

export default Vue.extend({
  name: 'TextEditor',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  // 组件已经渲染好，可以初始化操作 DOM 了
  mounted() {
    this.initEditor()
  },
  methods: {
    initEditor() {
      const editor = new E(this.$refs.editor as any)
      // 注意：事件监听必须在 create 之前
      editor.config.onchange = (value: string) => {
        this.$emit('input', value)
      }
      editor.create()

      // 注意：设置初始化必须在 create 之后
      editor.txt.html(this.value)

      // 自定义图片上传
      editor.config.customUploadImg = async (resultFiles: any, insertImgFn: any) => {
        // 1. 把用户选择的 resultFiles 上传到服务端
        const fd = new FormData()
        fd.append('file', resultFiles[0])
        const { data: { data } } = await uploadCourseImage(fd)
        // 2. 根据上传图片返回的地址生成 img 标签到富文本编辑器中
        insertImgFn(data.name)
      }
    }
  }
})
</script>
