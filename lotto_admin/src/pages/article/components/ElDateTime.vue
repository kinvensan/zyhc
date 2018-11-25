<template>
  <el-date-picker
    v-model="valuedt"
    type="datetime"
    placeholder="选择日期时间"
    :change="handleChange" />
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
      require: true
    }
  },
  data() {
    return {
      valuedt: ''
    }
  },
  methods: {
    handleChange() {
      this.value = this.valuedt
      this.$emit('input', this.value)
    }
  }
}
</script>
