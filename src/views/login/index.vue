<template>
  <div class="login">
    <el-form
      ref="form"
      label-position="top"
      label-width="80px"
      class="login-form"
      :model="form"
      :rules="rules"
    >
      <el-form-item prop="phone">
        <el-input v-model="form.phone" @keyup.native.enter="onSubmit">
          <i slot="prefix" class="el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="form.password"
          @keyup.native.enter="onSubmit"
        >
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="login-btn"
          :loading="btnLoading"
          @click="onSubmit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import request from '@/utils/request'
import qs from 'qs'
import { Form } from 'node_modules/element-ui/types'
import { login } from '@/service/user'

export default Vue.extend({
  name: 'LoginIndex',
  data() {
    return {
      btnLoading: false,
      form: {
        phone: '18201288771',
        password: '111111'
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
          // {
          //   pattern: /^1\d{10$}/,
          //   message: '请输入正确的手机号',
          //   trigger: 'blur'
          // }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 18,
            message: '密码长度 6 到 18 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        // 1. 表单验证
        await (this.$refs.form as Form).validate()

        // 验证通过 -> 提交表单
        this.btnLoading = true
        const { data } = await login(this.form)

        // 处理请求结果，失败给出提示
        if (data.state !== 1) {
          this.$message.error(data.message)
        } else {
          // 成功 -> 跳转到首页
          this.$router.push({ name: 'home' })
          this.$message.success('登录成功')
        }
      } catch (error) {
        console.log('登录失败', error)
      }
      this.btnLoading = false
    }
  }
})
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 300px;
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    padding-top: 40px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
