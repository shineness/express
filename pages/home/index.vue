<template>
	<view class="container">
		<!-- 头部导航 -->
		<view class="bg">
			<view class="header">
				<view class="header-left">
					<image class="logo" src="/static/jdl-logo.png" mode="aspectFit" />
					<text class="brand-text">物流解决方案</text>
				</view>

			</view>

			<!-- 主横幅区域 -->
			<view class="banner">
				<view class="banner-content">
					<text class="banner-title">一站式物流解决方案</text>

					<!-- 物流公司logo展示 -->
					<view class="logistics-brands">
						<view class="brand-item">
							<text class="brand-logo">JDL</text>
						</view>
						<view class="brand-item">
							<text class="brand-logo">KYE</text>
						</view>
						<view class="brand-item">
							<text class="brand-logo">翠鸟</text>
						</view>
						<view class="brand-item">
							<text class="brand-logo">家速</text>
						</view>
						<view class="brand-item">
							<text class="brand-logo">快递</text>
						</view>
					</view>
				</view>
			</view>



			<!-- 搜索栏 -->
			<view class="search-section">
				<uv-search v-model="searchValue" placeholder="请输入物流单号或扫码单号" :show-action="false" bg-color="white"
					shape="round" height="44" @search="handleSearchSubmit" @change="handleSearchChange">
					<template #prefix>
						<view style="font-size: 28rpx;margin-right: 10rpx;">查快递</view>
					</template>
					<template #suffix>
						<uv-icon name="search" size="24"></uv-icon>
					</template>
				</uv-search>
			</view>
		</view>
		<uv-notice-bar :text="text" fontSize="12" speed="60" color="#5d5d5d"></uv-notice-bar>
		
		<!-- 业务模块区 -->
		<view class="business-section">

			<view class="modules-grid">
				<view class="module-item" v-for="(module, index) in businessModules" :key="index"
					@click="handleModuleClick(module)">
					<view class="module-icon">
						<text class="icon-text">{{ module.icon }}</text>
					</view>
					<text class="module-title">{{ module.title }}</text>
					<text class="module-desc">{{ module.description }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	// 响应式数据
	const searchValue = ref('')
	const text=ref("专注3kg以上寄大件/发物流,全国1-2小时上门取件,官方折扣渠道更优惠~")
	// 业务模块数据
	const businessModules = ref([{
			icon: '📦',
			title: '普货零担',
			description: '灵活拼载高效达',
			to:"/pages/home/phld/phld"
		},
		{
			icon: '❄️',
			title: '冷冻零担',
			description: '冷链零担，鲜货无忧运输',
			to:"/pages/index/index?type=2"
		},
		{
			icon: '️🚛',
			title: '整车运输',
			description: '整车直发，一站门到门',
			to:"/pages/home/zcys/zcys"
		},
		{
			icon: '🔁',
			title: '仓储供应链',
			description: '国内空运，极速通达全国',
			to:"/pages/home/ccgyl/ccgyl"
		},
		{
			icon: '🚚',
			title: '城市配送',
			description: '城市区域配送',
			to:"/pages/home/csps/csps"
		},
		{
			icon: '🌍',
			title: '国际运输',
			description: '连接全球贸易',
			to:"/pages/home/gjys/gjys"
		},
		{
			icon: '📋',
			title: '物流解决方案',
			description: '快速送达身边',
			to:"/pages/home/wljjfa/wljjfa"
		},
		{
			icon: '💻',
			title: '联系我们',
			description: '服务有保障',
			to:"/pages/home/kf/kf"
		}
	])

	// 事件处理函数
	const handleSearch = () => {
		console.log('搜索按钮点击')
	}

	const handleReturn = () => {
		console.log('归来按钮点击')
	}

	const handleInput = (e) => {
		searchValue.value = e.detail.value
	}

	const handleSearchSubmit = () => {
		console.log('搜索提交:', searchValue.value)
	}
	const handleSearchChange=()=>{

	}
	const handleModuleClick = (module) => {
	
		uni.navigateTo({
			url:module.to
		})
	}
</script>

<style scoped>
	.container {
		min-height: 100vh;
		background-color: #f5f5f5;
	}

	.bg {
		background:linear-gradient(135deg, #4a90e2 0%, #a5a5a5 100%);
	}

	/* 头部样式 */
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 80rpx 30rpx 0rpx;
		/* background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%); */
		color: white;
	}

	.header-left {
		display: flex;
		align-items: center;
	}

	.logo {
		width: 60rpx;
		height: 60rpx;
		margin-right: 20rpx;
	}

	.brand-text {
		font-size: 32rpx;
		font-weight: bold;
	}

	.header-right {
		display: flex;
		align-items: center;
		gap: 20rpx;
	}

	.search-icon {
		width: 60rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
	}

	.return-btn {
		padding: 10rpx 20rpx;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 30rpx;
	}

	.btn-text {
		font-size: 28rpx;
	}

	/* 横幅样式 */
	.banner {
		/* background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%); */
		padding: 40rpx 30rpx;
		text-align: center;
		color: white;
	}

	.banner-title {
		font-size: 48rpx;
		font-weight: bold;
		margin-bottom: 60rpx;
		display: block;
	}

	.logistics-brands {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 40rpx;
		flex-wrap: wrap;
	}

	.brand-item {
		background-color: rgba(255, 255, 255, 0.2);
		padding: 15rpx 25rpx;
		border-radius: 20rpx;
	}

	.brand-logo {
		font-size: 28rpx;
		font-weight: bold;
	}

	/* 搜索区域样式 */
	.search-section {
		padding: 40rpx 30rpx;
		/* background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%); */
	}

	.search-container {
		display: flex;
		align-items: center;
		background-color: white;
		border-radius: 50rpx;
		overflow: hidden;
	}

	.search-tab {
		background-color: #f0f0f0;
		padding: 20rpx 30rpx;
		border-right: 1px solid #e0e0e0;
	}

	.tab-text {
		font-size: 28rpx;
		color: #333;
	}

	.search-input {
		flex: 1;
		padding: 20rpx 30rpx;
		font-size: 28rpx;
		border: none;
		outline: none;
	}

	.search-btn {
		padding: 20rpx 30rpx;
		background-color: #4a90e2;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.search-icon-text {
		color: white;
		font-size: 32rpx;
	}

	/* 业务模块区样式 */
	.business-section {
		padding: 40rpx 30rpx;
		background-color: white;
		/* margin-top: 20rpx; */
	}

	.section-title {
		font-size: 36rpx;
		font-weight: bold;
		color: #333;
		margin-bottom: 40rpx;
		display: block;
	}

	.modules-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 30rpx;
	}

	.module-item {
		background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
		border-radius: 20rpx;
		padding: 40rpx 30rpx;
		text-align: center;
		color: white;
		box-shadow: 0 4rpx 12rpx rgba(74, 144, 226, 0.3);
		transition: transform 0.2s ease;
	}

	.module-item:active {
		transform: scale(0.95);
	}

	.module-icon {
		margin-bottom: 20rpx;
	}

	.icon-text {
		font-size: 60rpx;
	}

	.module-title {
		font-size: 32rpx;
		font-weight: bold;
		margin-bottom: 10rpx;
		display: block;
	}

	.module-desc {
		font-size: 24rpx;
		opacity: 0.9;
		line-height: 1.4;
		display: block;
	}

	/* 响应式调整 */
	@media (max-width: 750rpx) {
		.banner-title {
			font-size: 40rpx;
		}

		.logistics-brands {
			gap: 20rpx;
		}

		.modules-grid {
			gap: 20rpx;
		}

		.module-item {
			padding: 30rpx 20rpx;
		}
	}
</style>