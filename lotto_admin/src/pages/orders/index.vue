<template>
  <d2-container>
    <d2-crud
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :add-button="addButton"
      :form-template="formTemplate"
      :form-options="formOptions"
      :row-handle="rowHandle"
      title="lottery list"
      add-mode
      @row-add="handleRowAdd"
      @row-edit="handleRowEdit"
      @row-remove="handleRowRemove"
      @dialog-cancel="handleDialogCancel"/>
  </d2-container>
</template>
<script>
import api from '@/api/admin/orders'
export default {
  /* eslint-disable */
  name: 'article-index',
  data() {
    return {
      loading: false,
      data: [],
      columns: [{
        title: 'ID',
        key: 'id'
      }, {
        title: '标题',
        key: 'title'
      }, {
        title: '路径',
        key: 'catalog_path'
      }],
      formTemplate: {
        title: {
          title: '名称',
          value: '',
          component: {
            span: 12
          }
        },
        author: {
          title: '作者',
          value: '',
          component: {
            span: 12
          }
        },
        status: {
          title: '状态',
          value: '',
          component: {
            name: 'el-select',
            span: 12,
            options: [
              {
                label: '草稿', 
                value: 1
              },
              {
                label: '发布',
                value: 2
              }
            ]
          }
        },
        lang: {
          title: '语言',
          value: '',
          component: {
            span: 12
          }
        },
        catalog_path: {
          title: '路径',
          value: '',
          component: {
            span: 12
          }
        },
        publish_at:{
          title: '发布',
          value: '',
          component: {
            span: 12
          }
        },
        content_short: {
          title: '简介',
          value: '',
          component: {
            span: 24
          }
        },
        content_html: {
          title: '内容',
          value: '',
          component: {
            span: 24
          }
        }
      },
      formOptions: {
        labelWidth: '40px',
        labelPosition: 'left',
        saveLoading: false
      },
      pagination: {
        total:0,
        currentPage: 1,
        pageSize: 20,
        layout: 'prev, pager, next, total'
      },
      addButton: {
        icon: 'el-icon-plus',
        size: 'small'
      },
      rowHandle: {
        edit: {
          icon: 'el-icon-edit',
          text: '',
          size: 'small',
        },
        remove: {
          icon: 'el-icon-delete',
          text: '',
          size: 'small',
          fixed: 'right',
          confirm: true
        }
      }
    }
  },
  created() {
    this.loadData()
  },
  computed: {
    d2DataLength () {
      return this.pagination.total
    }
  },
  methods: {
    loadData() {
      const page = {
        currentPage: this.pagination.currentPage,
        pageSize: this.pagination.pageSize
      }
      this.loading = true;
      api.list({page}).then(res => {
        this.data = res.data
        this.pagination.total = res.count
        this.pagination.pageSize = res.pageSize
        this.loading = false;
      }).catch(err => {
        this.loading = false;
      })
    },
    handleRowAdd(row, done) {
      this.formOptions.saveLoading = true
      api.create(row).then(res => {
        done()
        this.loadData()
        this.formOptions.saveLoading = false
      })
    },
    handleRowEdit({ index, row }, done) {
      this.formOptions.saveLoading = true
      api.update(row).then(res => {
        done()
        this.loadData()
        this.formOptions.saveLoading = false
      }).catch(err => {
        this.formOptions.saveLoading = false
      })
    },
    handleRowRemove({ index, row }, done) {
      this.formOptions.saveLoading = true
      api.destory(row).then(res => {
        done()
        this.loadData()
        this.formOptions.saveLoading = false
      }).catch(err => {
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
