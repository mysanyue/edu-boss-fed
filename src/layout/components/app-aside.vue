<template>
  <div class="aside">
    <el-menu
      text-color="#fff"
      default-active="2"
      class="el-menu-vertical-demo"
      active-text-color="#ffd04b"
      background-color="#545c64"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item index="/role">角色管理</el-menu-item>
        <el-menu-item index="/menu">菜单管理</el-menu-item>
        <el-menu-item index="/resource">资源管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="/course">
        <i class="el-icon-menu"></i>
        <span slot="title">课程管理</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-document"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>广告管理</span>
        </template>
        <el-menu-item index="/advert">广告列表</el-menu-item>
        <el-menu-item index="/advert-space">广告位列表</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'App-Aside',
  methods: {
    handleOpen(key: string, keyPath: string) {
      console.log(key, keyPath)
    },
    handleClose(key: string, keyPath: string) {
      console.log(key, keyPath)
    }
  }
})
</script>

<style lang="scss" scoped>
.aside {
  .el-menu {
    overflow: hidden;
    min-height: 100vh;
  }
}
</style>
