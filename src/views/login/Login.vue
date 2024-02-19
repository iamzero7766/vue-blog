<script setup>
import { ref } from 'vue'
import { userInfoStore } from '../../stores/counter'
import { useRouter, useRoute } from 'vue-router'

  const router = useRouter();
  const route = useRoute();

  const loginForm = ref({
    user_name: '',
    uesr_psd: '',
    uesr_code: '',
  })
  const formRef = ref(null)

  const loginRules = ref({
    user_name: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    uesr_psd: [
      { required: true, message: '请输入密码', trigger: 'blur' },
    ],
    uesr_code: [
      { required: true, message: '请输入验证码', trigger: 'blur' },
    ],
  })

  const userStore = userInfoStore();



  function submitForm() {
    if(!formRef) return;
    console.log(111)
    formRef.value.validate((valid, fields) => {
      if (valid) {
        console.log('submit!')
        userStore.setUserInfo({
          user_name: loginForm.value.user_name,
          user_id: loginForm.value.uesr_psd,
        })
        console.log(userStore.userInfo.userName);
        router.push({
          name: 'HomeView'
        })
      } else {
        console.log('error submit!', fields)
      }
    })
  }

  function resetForm() {
    if(!formRef) return;
    formRef.value.resetFields();
  }




</script>

<template>
  <div class="form-box">
    <el-form :model="loginForm" class="form-view" ref="formRef" :rules="loginRules">
      <el-form-item label="" prop="user_name">
        <el-input v-model="loginForm.user_name" placeholder="请输入用户名" clearable class="input-view"/>
      </el-form-item>
      <el-form-item label="" prop="uesr_psd">
        <el-input v-model="loginForm.uesr_psd" type="password" show-password placeholder="请输入密码" class="input-view"/>
      </el-form-item>
      <el-form-item label="" prop="uesr_code">
        <el-input v-model="loginForm.uesr_code" placeholder="验证码" class="input-view"/>
      </el-form-item>
      <div>
        <el-button @click="submitForm">登录</el-button>
        <el-button @click="resetForm">取消</el-button>
      </div>
      <p>{{ userStore.userInfo }}</p>
    </el-form>
  </div>
</template>
<style lang="scss">
.form-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-view {
    text-align: center;
    .input-view {
      width: 300px;
    }
  }
}
</style>