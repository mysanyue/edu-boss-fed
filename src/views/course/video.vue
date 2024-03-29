<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <div>课程：{{ courseName }}</div>
        <div>阶段：{{ parentLabel }}</div>
        <div>课时：{{ label }}</div>
      </div>
      <el-form label-width="40px">
        <el-form-item label="视频">
          <input ref="video-file" type="file">
        </el-form-item>
        <el-form-item label="封面">
          <input ref="image-file" type="file" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="authUpload">开始上传</el-button>
          <el-button @click="$router.back()">返回</el-button>
        </el-form-item>
        <el-form-item>
          <p v-if="uploadPercent">视频上传中：{{ uploadPercent }}%</p>
          <p v-if="isTransCodeSuccess">视频转码中: {{ isTransCodeSuccess ? '完成': '正在处理，请稍后...' }}</p>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import {
  aliyunImagUploadAddressAdnAuth,
  aliyunVideoUploadAddressAdnAuth,
  transCodeVideo,
  getAliyunTransCodePercent
} from '@/services/aliyun-oss'

export default {
  props: {
    courseName: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    parentLabel: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      uploader: null,
      videoId: null,
      imageUrl: '',
      fileName: '',
      uploadPercent: 0,
      isUploadSuccess: false,
      isTransCodeSuccess: false
    }
  },
  created() {
    this.initUploader()
  },
  methods: {
    authUpload() {
      this.isUploadSuccess = false
      this.isTransCodeSuccess = false
      this.uploadPercent = 0

      const videoFile = this.$refs['video-file'].files[0]
      this.uploader.addFile(videoFile, null, null, null, '{"Vod":{}}')
      this.uploader.addFile(this.$refs['image-file'].files[0], null, null, null, '{"Vod":{}}')
      this.fileName = videoFile.name
      this.uploader.startUpload()
    },
    initUploader() {
      this.uploader = new window.AliyunUpload.Vod({
        // 阿里账号ID，必须有值 ，值的来源https://help.aliyun.com/knowledge_detail/37196.html
        userId: 1618139964448548,
        // 上传到点播的地域， 默认值为'cn-shanghai',//eu-central-1,ap-southeast-1
        region: 'cn-shanghai',
        // 分片大小默认1M，不能小于100K
        partSize: 1048576,
        // 并行上传分片个数，默认5
        parallel: 5,
        // 网络原因失败时，重新上传次数，默认为3
        retryCount: 3,
        // 网络原因失败时，重新上传间隔时间，默认为2秒
        retryDuration: 2,
        // 开始上传
        onUploadstarted: async uploadInfo => {
          let uploadAuthInfo = null
          if (uploadInfo.isImage) {
            const { data } = await aliyunImagUploadAddressAdnAuth()
            this.imageUrl = data.data.imageURL
            uploadAuthInfo = data.data
          } else {
            const { data } = await aliyunVideoUploadAddressAdnAuth({
              fileName: uploadInfo.file.name
            })
            this.videoId = data.data.videoId
            uploadAuthInfo = data.data
          }

          this.uploader.setUploadAuthAndAddress(
            uploadInfo,
            uploadAuthInfo.uploadAuth,
            uploadAuthInfo.uploadAddress,
            uploadAuthInfo.videoId || uploadAuthInfo.imageId
          )
        },
        // 文件上传成功
        onUploadSucceed: function (uploadInfo) {
        },
        // 文件上传失败
        onUploadFailed: function (uploadInfo, code, message) {
        },
        // 文件上传进度，单位：字节
        onUploadProgress: function (uploadInfo, totalSize, loadedPercent) {
          if (!uploadInfo.isImage) {
            this.uploadPercent = Math.floor(loadedPercent * 100)
          }
        },
        // 上传凭证超时
        onUploadTokenExpired: function (uploadInfo) {
        },
        // 全部文件上传结束
        onUploadEnd: async uploadInfo => {
          this.isUploadSuccess = true
          // 请求转码
          const { data } = await transCodeVideo({
            lessonId: this.$route.query.lessonId,
            fileId: this.videoId,
            coverImageUrl: this.imageUrl,
            fileName: this.fileName
          })

          // 查询转码进度
          const timer = setInterval(async () => {
            const { data } = await getAliyunTransCodePercent(this.$route.query.lessonId)
            if (data.data === 100) {
              this.isTransCodeSuccess = true
              clearInterval(timer)
            }
          }, 3000)
        }
      })
    }
  }
}
</script>
