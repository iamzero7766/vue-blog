import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})


export const userInfoStore = defineStore('userInfo', () => {
  const userInfo = ref({
    userName: 'abc',
    userId: '1234',
  })
  function setUserInfo(info) {
    userInfo.value.userName = info.user_name;
    userInfo.value.userId = info.user_id;
  }

  return { userInfo, setUserInfo }
})
