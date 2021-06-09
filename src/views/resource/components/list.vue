<template>
  <div class="resource-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-form-item label="资源名称">
            <el-input v-model="form.name" placeholder="请输入资源名称"></el-input>
          </el-form-item>
          <el-form-item label="资源路径">
            <el-input v-model="form.url" placeholder="请输入资源路径"></el-input>
          </el-form-item>
          <el-form-item label="资源分类">
            <el-select v-model="form.categoryId" clearable placeholder="请选择资源分类">
              <el-option v-for="item in resourceCategories" :key="item.id" :label="item.name" :value="itme.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" :disabled="isLoading">查询搜索</el-button>
            <el-button @click="onReset" :disabled="isLoading">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table :data="resources" v-loading="isLoading">
        <el-table-column type="index" label="编号" />
        <el-table-column prop="name" label="资源名称" />
        <el-table-column prop="url" label="资源路径" />
        <el-table-column prop="description" label="描述" />
        <el-table-column prop="createdTime" label="添加时间" />
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" :title="scope" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="form.current" :page-sizes="[10, 20, 30, 40]" :page-size="form.size"
        layout="total, sizes, prev, pager, next, jumper" :total="totalCount" background :disabled="isLoading">
      </el-pagination>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getResourcePages } from '@/services/resource'
import { getResourceCategories } from '@/services/resource-category'
import { Form } from 'element-ui'

export default Vue.extend({
  name: 'ResourceList',
  data() {
    return {
      isLoading: true,
      resources: [],
      form: {
        name: '',
        url: '',
        categoryId: '',
        current: 1, // 默认查询第一页
        size: 10 // 每页大小
      },
      totalCount: 0,
      resourceCategories: []
    }
  },
  created() {
    this.loadResources()
    this.getResourceCategories()
  },
  methods: {
    onSubmit() {
      this.form.current = 1
      this.form.size = 10
      this.loadResources()
    },
    async loadResources() {
      this.isLoading = true
      const { data } = await getResourcePages(this.form)
      this.resources = data.data.records
      this.totalCount = data.data.total
      this.isLoading = false
    },
    handleSizeChange(val: number) {
      this.form.size = val
      this.form.current = 1
      this.loadResources()
    },
    handleCurrentChange(val: number) {
      this.form.current = val
      this.loadResources()
    },
    async getResourceCategories() {
      const { data } = await getResourceCategories()
      this.resourceCategories = data.data
    },
    onReset() {
      (this.$refs.from as Form).resetFields()
      this.form.current = 1
      this.form.size = 10
      this.loadResources()
    }
  }
})
</script>
