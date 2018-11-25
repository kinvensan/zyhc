<template>
  <d2-container>
    <d2-crud
      :columns="columns"
      :data="data"
      :pagination="pagination"
      title="用户列表"
      add-mode
      selection-row
      :add-button="addButton"
      :form-template="formTemplate"
      :form-options="formOptions"
      @row-add="handleRowAdd"
      @dialog-cancel="handleDialogCancel"/>
  </d2-container>
</template>

<script>
import api from '@/api/admin/user'
export default {
  name: 'demo-page1',
  data () {
    return {
      columns: [
        {
          title: 'ID',
          key: 'id'
        },
        {
          title: '用户',
          key: 'user_name'
        },
        {
          title: '邮件',
          key: 'email'
        }
      ],
      data: [],
      options: {
        border: true
      },
      addButton: {
        icon: 'el-icon-plus',
        size: 'medium',
        type: 'primary'
      },
      formTemplate: {
        user_name: {
          title: '用户名',
          value: ''
        },
        email: {
          title: '邮件',
          value: ''
        },
        user_type: {
          title: '类型',
          value: 1,
          component: {
            name: 'el-select',
            options: [
              {
                value: '1',
                label: '普通用户'
              },
              {
                value: '2',
                label: '管理用户'
              }
            ],
            size: 'small'
          }
        }
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false
      },
      pagination: {
        pageSize: 20,
        layout: 'prev, pager, next, total'
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      api.list().then( res => {
        this.loading = false
        this.data = res.data
      })
    },
    handleRowAdd (row, done) {
      this.formOptions.saveLoading = true
      api.create(row).then( res => {
        this.$message({
          message: '保存成功',
          type: 'success'
        })
        done()
        this.formOptions.saveLoading = false
      })
    },
    handleDialogCancel (done) {
      this.$message({
        message: '取消保存',
        type: 'warning'
      })
      done()
    }
  }
}
</script>
