<template>
  <view class="container">
    <uni-forms ref="formRef" :modelValue="formData" :rules="rules">
      <uni-forms-item label="测试输入" name="testInput">
        <input v-model="formData.testInput" placeholder="请输入内容" />
      </uni-forms-item>
      <button @click="submit">提交</button>
    </uni-forms>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  testInput: ''
})

const rules = {
  testInput: {
    rules: [{
      required: true,
      errorMessage: '请输入内容'
    }]
  }
}

const formRef = ref(null)

const submit = async () => {
  try {
    const validate = await formRef.value.validate()
    uni.showToast({
      title: '表单验证通过',
      icon: 'success'
    })
  } catch (err) {
    uni.showToast({
      title: '请填写必填字段',
      icon: 'none'
    })
  }
}
</script>

<style>
.container {
  padding: 20px;
}
</style>
