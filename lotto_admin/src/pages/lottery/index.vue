<template>
  <d2-container>
    <d2-crud
      :columns="columns"
      :data="data"
      :add-button="addButton"
      :form-template="formTemplate"
      :form-options="formOptions"
      title="lottery list"
      add-mode
      @row-add="handleRowAdd"
      @row-remove="handleRowRemove"
      @dialog-cancel="handleDialogCancel"/>
  </d2-container>
</template>
<script>
import api from '@/api/admin/lottery'
export default {
  /* eslint-disable */
  name: 'lottery-index',
  data() {
    return {
      loading: false,
      data: [],
      columns: [{
        title: 'ID',
        key: 'id'
      }, {
        title: '名称',
        key: 'name'
      }, {
        title: '标题',
        key: 'title'
      }],
      formTemplate: {
        name: {
          title: '名称',
          value: ''
        },
        title: {
          title: '标题',
          value: ''
        }
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false
      },
      addButton: {
        icon: 'el-icon-plus',
        size: 'small'
      }
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      api.list().then(res => {
        this.data = res
      })
    },
    handleRowAdd(row, done) {
      this.formOptions.saveLoading = true
      api.create().then(res => {
        done()
        this.loadData()
        this.formOptions.saveLoading = false
      })
    },
    handleRowEdit({ index, row }, done) {
      this.formOptions.saveLoading = true
      api.update().then(res => {
        done()
        this.loadData()
        this.formOptions.saveLoading = false
      })
    },
    handleRowRemove({ index, row }, done) {
      this.formOptions.saveLoading = true
      api.destory().then(res => {
        done()
        this.loadData()
        this.formOptions.saveLoading = false
      })
    },
    handleDialogCancel(done) {
      this.$message({
        message: '取消保存',
        type: 'warning'
      })
      done()
    }
  }
}
</script>
<style lang="scss">
</style>
