<template>
  <div class="resource-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-form-item label="审批人">
            <el-input v-model="form.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询搜索</el-button>
            <el-button>重置</el-button>
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
        layout="total, sizes, prev, pager, next, jumper" :total="totalCount" background>
      </el-pagination>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getResourcePages } from '@/services/resource'

export default Vue.extend({
  name: 'ResourceList',
  data() {
    return {
      isLoading: false,
      resources: [],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        current: 1, // 默认查询第一页
        size: 10 // 每页大小
      },
      totalCount: 0
    }
  },
  created() {
    this.loadResources()
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    async loadResources() {
      this.isLoading = true
      const { data } = await getResourcePages({
        current: this.form.current,
        size: this.form.size
      })
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
    }
  }
})
</script>
