<script setup>
import { userInfoStore } from '../../stores/counter'
import { ref, onMounted } from 'vue'

const menuListAll = [
  { label: 'ARTICLE', value: '1'},
  { label: 'DIARY', value: '2'},
  { label: 'ACCOUNT', value: '3'},
]
const menuList = ref([]);

onMounted(() => {
  const userStore = userInfoStore();
  console.log(userStore.userInfo.userName)
  if(userStore.userInfo.userName == 'admin') {  // 管理员
    console.log('admin')
    menuList.value = menuListAll;
  } else {
    console.log('not admin')
    menuList.value = menuListAll.filter(x => x.value == 1);
  }
  console.log(menuList.value)
})

</script>

<template>
  <div class="home-view-box">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item 
        v-for="item in menuList" 
        :key="item.value"
        :index="item.value">{{ item.label }}</el-menu-item>
    </el-menu>

  </div>
</template>

<style lang="scss">
.home-view-box {

}
</style>