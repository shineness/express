<template>
    <view class="container" :style="`height:calc(100vh - ${botHeight});`">
        <uv-empty mode="order" ></uv-empty>
    </view>
    

</template>

<script setup>
import {
    ref,
    onMounted,
    computed
} from 'vue'
const botHeight = computed(() => {
    return (50 + uni.getSystemInfoSync().safeAreaInsets.bottom - 24) + 'px'
})
</script>

<style scoped>
.container{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>