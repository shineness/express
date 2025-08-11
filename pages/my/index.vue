<template>
    <view class="profile-page" :style="`height:calc(100vh - ${botHeight});`">
        <!-- 状态栏占位 -->
        <view class="bg">


            <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

            <!-- 顶部操作栏 -->
            <view class="top-bar">
                
            </view>

            <!-- 用户信息区域 -->
            <view class="user-section">
                <view class="user-info" @click="handleLogin">
                    <uv-avatar :src="userInfo.avatar || '/static/my/user-avatar.png'" size="60"
                        shape="circle"></uv-avatar>
                    <view class="user-details">
                        <text class="login-text">{{ userInfo.isLogin ? userInfo.nickname : '点击登录获取头像' }}</text>
                        <text class="user-id">用户ID {{ userInfo.userId }}</text>
                    </view>
                </view>
            </view>
        </view>
        <!-- 优惠券卡片 -->
        <view class="coupon-section">
            <uv-card :show-head="false" :show-foot="false" margin="15px" padding="0" bg-color="rgba(255, 240, 240, 0.8)"
                border-color="#ffcccb">
                <view class="coupon-content" @click="handleCouponClick">
                    <view class="coupon-left">
                        <uv-icon name="coupon" color="#ff4444" size="20"></uv-icon>
                        <text class="coupon-text">优惠券</text>
                    </view>
                    <view class="coupon-right">
                        <text class="use-text">去使用</text>
                        <uv-icon name="arrow-right" color="#999" size="14"></uv-icon>
                    </view>
                </view>
            </uv-card>
        </view>

        <!-- 地址按钮区域 -->
        <view class="address-section">
            <view class="address-buttons">
                <view class="subs">
                    <uv-button  :plain="true" size="large" @click="handleSenderAddress">
                        <view class="address-btn-content">
                            <uv-icon name="map" color="#353b48" size="18"></uv-icon>
                            <text class="address-text">寄件地址</text>
                        </view>
                    </uv-button>
                </view>
                <view class="subs">
                    <uv-button  :plain="true"  size="large" @click="handleReceiverAddress">
                        <view class="address-btn-content">
                            <uv-icon name="home" color="#353b48" size="18"></uv-icon>
                            <text class="address-text">收件地址</text>
                        </view>
                    </uv-button>
                </view>
            </view>
        </view>

        <!-- 菜单列表 -->
        <view class="menu-section">
            <uv-cell-group :border="false">
                <uv-cell title="帮助中心" :is-link="true" @click="handleHelpCenter" :customStyle="cus">
                    <template #icon>
                        <uv-icon name="question-circle" color="#666" size="20"></uv-icon>
                    </template>
                </uv-cell>

                <uv-cell title="联系客服" :is-link="true" @click="handleContactService" :customStyle="cus">
                    <template #icon>
                        <uv-icon name="kefu-ermai" color="#666" size="20"></uv-icon>
                    </template>
                </uv-cell>

                <uv-cell title="分享小程序" :is-link="true" @click="handleShareApp" :customStyle="cus">
                    <template #icon>
                        <uv-icon name="share" color="#666" size="20"></uv-icon>
                    </template>
                </uv-cell>
            </uv-cell-group>
        </view>

        <!-- 推广区域 -->
        <!-- <view class="promotion-section">
			<uv-card :show-head="false" :show-foot="false" margin="15px" padding="15px">
				<view class="promotion-content">
					<view class="promotion-left">
						<view class="promotion-logo">
							<uv-avatar src="/static/images/logistics-logo.png" size="40" shape="circle"
								bg-color="#1a365d">
								<text class="logo-text">大件物流</text>
							</uv-avatar>
						</view>
						<view class="promotion-info">
							<text class="promotion-title">大件物流 上门取件</text>
							<text class="promotion-desc">关注公众号，物流进度早知道</text>
						</view>
					</view>
					<uv-button type="primary" size="small" shape="circle" text="去关注" @click="handleFollow"></uv-button>
				</view>
			</uv-card>
		</view> -->

        <!-- 版本信息 -->
        <view class="version-info">
            <text class="version-text"> v1.0.2 正式版</text>
        </view>

        <!-- 底部导航 -->
        <!-- 	<view class="bottom-navigation">
			<uv-tabbar v-model="currentTab" :list="tabbarList" :inactive-color="'#999'" :active-color="'#4a90e2'"
				@change="handleTabChange"></uv-tabbar>
		</view> -->

        <!-- 消息提示 -->
        <uv-toast ref="uToast"></uv-toast>
    </view>
</template>

<script setup>
import {
    ref,
    onMounted,
    computed
} from 'vue'
// import uni from 'uni-app' // Import uni to fix the undeclared variable error

// 响应式数据
const statusBarHeight = ref(44)
const currentTab = ref(2) // 当前选中"我的"标签

// 用户信息
const userInfo = ref({
    isLogin: false,
    nickname: '',
    avatar: '',
    userId: '2wwt8s'
})

const botHeight = computed(() => {
    return (50 + uni.getSystemInfoSync().safeAreaInsets.bottom - 24) + 'px'
})

// Toast引用
const uToast = ref()

// 生命周期
onMounted(() => {
    // 获取系统信息
    uni.getSystemInfo({
        success: (res) => {
            statusBarHeight.value = res.statusBarHeight || 44
        }
    })

    // 检查登录状态
    checkLoginStatus()
})

// 检查登录状态
const checkLoginStatus = () => {
    // 这里可以从本地存储或API获取用户信息
    const loginInfo = uni.getStorageSync('userInfo')
    if (loginInfo) {
        userInfo.value = {
            ...userInfo.value,
            ...loginInfo,
            isLogin: true
        }
    }
}

// 事件处理函数
const handleLogin = () => {
    if (!userInfo.value.isLogin) {
        // 执行登录逻辑
        uni.getUserProfile({
            desc: '用于完善用户资料',
            success: (res) => {
                userInfo.value = {
                    ...userInfo.value,
                    isLogin: true,
                    nickname: res.userInfo.nickName,
                    avatar: res.userInfo.avatarUrl
                }

                // 保存到本地存储
                uni.setStorageSync('userInfo', userInfo.value)

                uToast.value?.show({
                    type: 'success',
                    message: '登录成功'
                })
            },
            fail: () => {
                uToast.value?.show({
                    type: 'error',
                    message: '登录失败'
                })
            }
        })
    }
}

const handleCouponClick = () => {
    uToast.value?.show({
        type: 'primary',
        message: '跳转到优惠券页面'
    })
}

const handleSenderAddress = () => {
    uToast.value?.show({
        type: 'primary',
        message: '设置寄件地址'
    })
}

const handleReceiverAddress = () => {
    uToast.value?.show({
        type: 'primary',
        message: '设置收件地址'
    })
}

const handleHelpCenter = () => {
    uToast.value?.show({
        type: 'primary',
        message: '进入帮助中心'
    })
}

const handleContactService = () => {
    uToast.value?.show({
        type: 'primary',
        message: '联系客服'
    })
}

const handleShareApp = () => {
    uni.share({
        provider: 'weixin',
        scene: 'WXSceneSession',
        type: 5,
        imageUrl: '/static/images/share-logo.png',
        title: '风火递物流小程序',
        miniProgram: {
            id: 'your-mini-program-id',
            path: '/pages/index/index',
            type: 0,
            webUrl: 'https://your-website.com'
        },
        success: () => {
            uToast.value?.show({
                type: 'success',
                message: '分享成功'
            })
        }
    })
}

const handleFollow = () => {
    uToast.value?.show({
        type: 'primary',
        message: '跳转关注公众号'
    })
}

const handleTabChange = (index) => {
    currentTab.value = index
    const routes = ['/pages/index/index', '/pages/order/index', '/pages/profile/index']

    if (index !== 2) { // 不是当前页面才跳转
        uni.switchTab({
            url: routes[index]
        })
    }
}
</script>

<style scoped>
.bg {
    background: linear-gradient(180deg, #4a90e2 0%, #f7f7f7 100%)
}

.profile-page {

    background-color: #f5f7fa;
    padding-bottom: 60px;
}

.status-bar {
    background-color: transparent;
}
.subs{
    flex-grow: 1;
}
.coupon-section {
    padding: 20rpx;
}

.top-bar {
    padding: 10px 15px;
    display: flex;
    justify-content: flex-end;
}

.top-actions {
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 8px 15px;
    border-radius: 20px;
}

.record-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 用户信息区域 */
.user-section {
    padding: 20px 15px;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 15px;
}

.user-details {
    flex: 1;
}

.login-text {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
}

.user-id {
    display: block;
    font-size: 14px;
    color: #999;
}

/* 优惠券区域 */
.coupon-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border: 2px solid #d8b1b4;
    border-radius: 30rpx;
}

.coupon-left {
    display: flex;
    align-items: center;
    gap: 10px;
}

.coupon-text {
    font-size: 14px;
    color: #333;
    font-weight: 600;
}

.coupon-right {
    display: flex;
    align-items: center;
    gap: 5px;
}

.use-text {
    font-size: 14px;
    color: #999;
}

/* 地址按钮区域 */
.address-section {
    padding: 0 15px;
    margin-bottom: 20px;
}

.address-buttons {
    display: flex;
    gap: 15px;
}

.address-buttons .uv-button {
    flex: 1;
}

.address-btn-content {
    display: flex;
    align-items: center;
    gap: 8px;
}

.address-text {
    font-size: 14px;
    color:#353b48;
}

/* 菜单区域 */
.menu-section {
    margin: 0 15px 20px;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
}

/* 推广区域 */
.promotion-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.promotion-left {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
}

.promotion-logo {
    position: relative;
}

.logo-text {
    font-size: 10px;
    color: white;
    font-weight: bold;
}

.promotion-info {
    flex: 1;
}

.promotion-title {
    display: block;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 4px;
}

.promotion-desc {
    display: block;
    font-size: 12px;
    color: #999;
}

/* 版本信息 */
.version-info {
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-bottom: 20px;
}

.version-text {
    font-size: 12px;
    color: #999;
}

/* 底部导航 */
.bottom-navigation {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    border-top: 1px solid #eee;
    z-index: 999;
}

/* 响应式调整 */
@media (max-width: 375px) {
    .user-section {
        padding: 15px;
    }

    .login-text {
        font-size: 16px;
    }

    .address-buttons {
        gap: 10px;
    }
}
</style>