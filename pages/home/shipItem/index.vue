<template>
	<view class="app-container">
		<!-- Status Bar -->
		<view class="status-bar">
			<!-- <view class="status-left">
        <text>11:24</text>
        <view class="status-icons">
          <view class="status-icon status-icon-blue">
            <text class="status-text">交</text>
          </view>
          <view class="status-icon status-icon-circle"></view>
          <view class="status-icon status-icon-red"></view>
        </view>
      </view>
      <view class="status-right">
        <text class="status-symbol">🏠</text>
        <text class="status-symbol">🔔</text>
        <view class="signal-bars">
          <view class="signal-bar signal-active"></view>
          <view class="signal-bar signal-active"></view>
          <view class="signal-bar signal-active"></view>
          <view class="signal-bar signal-inactive"></view>
        </view>
        <view class="battery">
          <view class="battery-level"></view>
        </view>
      </view> -->
		</view>

		<!-- Header -->
		<uv-navbar placeholder bgColor="transparent" @leftClick="pagesRoute" title="寄件">
			<template v-slot:left>
				<view class="uv-nav-slot">
					<uv-icon name="arrow-left" size="20"></uv-icon>
				</view>
			</template>
		</uv-navbar>
		<!--  <view class="header">
      <text class="back-arrow" @tap="goBack">‹</text>
      <text class="header-title">寄大件</text>
      <view class="header-actions">
        <view class="action-button">
          <text class="dots-text">⋯</text>
        </view>
        <view class="action-button">
          <text class="profile-text">👤</text>
        </view>
      </view>
    </view> -->

		<!-- Address Selection -->
		<view class="address-section">
			<view class="address-item" @tap="selectPickupAddress">
				<view class="address-left">
					<view class="address-icon address-icon-blue">
						<text class="address-icon-text">寄</text>
					</view>
					<text class="address-text">从哪里上门取件</text>
				</view>
				<text class="address-book">地址簿</text>
			</view>
			<view class="address-item" @tap="selectDeliveryAddress">
				<view class="address-left">
					<view class="address-icon address-icon-orange">
						<text class="address-icon-text">收</text>
					</view>
					<text class="address-text">要寄到哪里</text>
				</view>
				<text class="address-book">地址簿</text>
			</view>
		</view>

		<!-- Product Information -->
		<view class="product-section" @tap="editProductInfo">
			<view class="product-header">
				<view class="product-title">
					<text class="product-label">物品信息</text>
					<text class="required-label">必填</text>
				</view>
				<view class="product-details">
					<text class="product-info">器械设备 / 30kg / 带纸箱</text>
					<text class="chevron-right">›</text>
				</view>
			</view>
			<view class="product-note">
				<text class="note-label">备注：</text>
				<text class="note-text">可邮寄电动车、家具、家电、行李、器材设备等</text>
			</view>
		</view>

		<!-- Logistics Company Selection -->
		<view class="logistics-section">
			<text class="logistics-title">选择快递公司</text>
			<view class="logistics-grid">
				<!-- KYE Logistics -->
				<view class="logistics-card " :class="{
			   'logistics-selected':current==0
		   }" @tap="selectLogistics(0)">
					<view class="discount-badge">
						<text class="badge-text">88折</text>
					</view>
					<view class="service-badge">
						<text class="badge-text">100%取件</text>
					</view>
					<view class="logistics-info">
						<view class="logistics-header">
							<view class="logistics-logo kye-logo">
								<text class="logo-text">KYE</text>
							</view>
							<text class="logistics-name">跨越物流</text>
						</view>
						<view class="logistics-price">¥ 25起</view>
						<text class="logistics-weight">适用重量30~2000kg</text>
					</view>

				</view>

				<!-- SVD Logistics -->
				<view class="logistics-card" :class="{
		  			   'logistics-selected':current==1
		  }" @tap="selectLogistics(1)">
					<view class="service-badge">
						<text class="badge-text">全国免费取件</text>
					</view>
					<view class="logistics-info">
						<view class="logistics-header">
							<view class="logistics-logo svd-logo">
								<text class="logo-text">SVD</text>
							</view>
							<text class="logistics-name">顺心捷达</text>
						</view>
						<view class="logistics-price">¥ 25起</view>
						<text class="logistics-weight">适用重量20~2000kg</text>
					</view>
				</view>
			</view>
		</view>

		<!-- Delivery Method -->
		<view class="delivery-section" @tap="viewDeliveryOptions">
			<view class="delivery-header">
				<view class="delivery-left">
					<text class="delivery-icon">📋</text>
					<text class="delivery-title">送货方式/包装服务</text>
				</view>
				<view class="delivery-right">
					<text class="delivery-link">查看说明</text>
					<text class="chevron-right">›</text>
				</view>
			</view>
		</view>

		<!-- Agreement -->
		<view class="agreement-section" @tap="toggleAgreement">
			<uv-checkbox-group v-model="checkboxValue">
				<uv-checkbox v-for="(item, index) in checkboxList" :key="index" :label="item.name"
					:name="item.name"><text>
						<text class="agreement-text">我已阅读并同意</text>
						<text class="agreement-link" @tap.stop="viewAgreement">《寄件服务协议》</text>
					</text></uv-checkbox>
			</uv-checkbox-group>

		</view>

		<!-- Warning -->
		<view class="warning-section">
			<uv-icon name="warning-fill" size="18" color="#d97706"></uv-icon>
			<!-- <text class="warning-icon">️</text> -->
			<text class="warning-text">跨越物流默认会收取4元保价费，若已保价则</text>
		</view>

		<!-- Bottom Section -->
		<view class="bottom-section">
			<view class="bottom-content">
				<view class="price-section">
					<view style="display: flex;">
						<text class="price-label">预估：</text>
						<view class="price-badge">
							<text class="price-badge-text">优惠后 ¥ 25 起寄</text>
						</view>
					</view>

					<text class="price-note">请填写收寄件地址后预估运费</text>
				</view>
				<button class="booking-button" @tap="handleBooking">
					免费预约
				</button>
			</view>

		</view>

		<!-- Bottom Indicator -->

	</view>
</template>

<script setup>
	import {
		pagesRoute
	} from "@/utils/index"

	import {
		ref
	} from 'vue'
	// import uni from 'uni-app' // Declare the uni variable

	// Reactive data
	const selectedLogistics = ref('kye')
	const isAgreementChecked = ref(false)
	const current = ref(0)
	const checkboxList = ref([{
		name: "",
	}])
	// Methods
	const goBack = () => {
		uni.navigateBack()
	}

	const selectPickupAddress = () => {
		uni.navigateTo({
			url: '/pages/address/address?type=pickup'
		})
	}

	const selectDeliveryAddress = () => {
		uni.navigateTo({
			url: '/pages/address/address?type=delivery'
		})
	}

	const editProductInfo = () => {
		uni.navigateTo({
			url: '/pages/product/product'
		})
	}

	const selectLogistics = (company) => {
		current.value = company
		// selectedLogistics.value = company
		// uni.showToast({
		// 	title: `已选择${company === 'kye' ? '跨越物流' : '顺心捷达'}`,
		// 	icon: 'success'
		// })
	}

	const viewDeliveryOptions = () => {
		uni.navigateTo({
			url: '/pages/delivery/delivery'
		})
	}

	const toggleAgreement = () => {
		isAgreementChecked.value = !isAgreementChecked.value
	}

	const viewAgreement = () => {
		uni.navigateTo({
			url: '/pages/agreement/agreement'
		})
	}

	const handleBooking = () => {
		if (!isAgreementChecked.value) {
			uni.showToast({
				title: '请先同意服务协议',
				icon: 'none'
			})
			return
		}

		uni.showLoading({
			title: '预约中...'
		})

		setTimeout(() => {
			uni.hideLoading()
			uni.showToast({
				title: '预约成功',
				icon: 'success'
			})
		}, 2000)
	}
</script>

<style scoped>
	.app-container {
		/* min-height: 100vh; */
		height: calc(100vh - 71px);
		background: linear-gradient(to bottom, #f3e8ff, #faf5ff);
	}

	/* Status Bar */
	.status-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16rpx 32rpx;
		font-size: 28rpx;
		font-weight: 500;
	}

	.status-left {
		display: flex;
		align-items: center;
		gap: 16rpx;
	}

	.status-icons {
		display: flex;
		gap: 8rpx;
	}

	.status-icon {
		width: 32rpx;
		height: 32rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4rpx;
	}

	.status-icon-blue {
		background-color: #3b82f6;
	}

	.status-icon-circle {
		background-color: #60a5fa;
		border-radius: 50%;
	}

	.status-icon-red {
		background-color: #f87171;
	}

	.status-text {
		color: white;
		font-size: 20rpx;
	}

	.status-right {
		display: flex;
		align-items: center;
		gap: 8rpx;
	}

	.status-symbol {
		font-size: 28rpx;
	}

	.signal-bars {
		display: flex;
		gap: 4rpx;
	}

	.signal-bar {
		width: 8rpx;
		height: 24rpx;
		border-radius: 18rpx;
	}

	.signal-active {
		background-color: #000;
	}

	.signal-inactive {
		background-color: #9ca3af;
	}

	.battery {
		width: 48rpx;
		height: 24rpx;
		border: 2rpx solid #000;
		border-radius: 4rpx;
		position: relative;
	}

	.battery-level {
		width: 32rpx;
		height: 16rpx;
		background-color: #000;
		border-radius: 2rpx;
		position: absolute;
		top: 4rpx;
		left: 4rpx;
	}

	/* Header */
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24rpx 32rpx;
	}

	.back-arrow {
		font-size: 48rpx;
		font-weight: 300;
	}

	.header-title {
		font-size: 36rpx;
		font-weight: 500;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 16rpx;
	}

	.action-button {
		width: 64rpx;
		height: 64rpx;
		background-color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.dots-text,
	.profile-text {
		font-size: 32rpx;
		color: #4b5563;
	}

	/* Address Section */
	.address-section {
		margin: 0 32rpx 32rpx;
		background-color: white;
		border-radius: 24rpx;
		padding: 32rpx;
	}

	.address-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 24rpx;
	}

	.address-item:last-child {
		margin-bottom: 0;
	}

	.address-left {
		display: flex;
		align-items: center;
		gap: 24rpx;
	}

	.address-icon {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.address-icon-blue {
		background-color: #3b82f6;
	}

	.address-icon-orange {
		background-color: #f97316;
	}

	.address-icon-text {
		color: white;
		font-weight: 500;
		font-size: 22rpx;
	}

	.address-text {
		color: #1f2937;
		font-size: 32rpx;
	}

	.address-book {
		color: #6b7280;
		font-size: 28rpx;
	}

	/* Product Section */
	.product-section {
		margin: 0 32rpx 32rpx;
		background-color: white;
		border-radius: 24rpx;
		padding: 32rpx;
	}

	.product-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 24rpx;
	}

	.product-title {
		display: flex;
		align-items: center;
		gap: 16rpx;
	}

	.product-label {
		color: #1f2937;
		font-weight: 500;
		font-size: 28rpx;
	}

	.required-label {
		color: #ef4444;
		font-size: 24rpx;
	}

	.product-details {
		display: flex;
		align-items: center;
		gap: 16rpx;
		color: #4b5563;
	}

	.product-info {
		font-size: 28rpx;
	}

	.chevron-right {
		font-size: 32rpx;
		color: #9ca3af;
	}

	.product-note {
		font-size: 28rpx;
	}

	.note-label {
		color: #ef4444;
		font-weight: 500;
	}

	.note-text {
		color: #ef4444;
		font-size: 26rpx;
	}

	/* Logistics Section */
	.logistics-section {
		margin: 0 32rpx 32rpx;
	}

	.logistics-title {
		color: #1f2937;
		font-weight: 500;
		margin-bottom: 24rpx;
		font-size: 28rpx;
	}

	.logistics-grid {
		margin-top: 20rpx;
		display: flex;
		gap: 24rpx;
	}

	.logistics-card {
		flex: 1;
		background-color: white;
		border-radius: 24rpx;
		padding: 32rpx;
		border: 4rpx solid #e5e7eb;
		position: relative;
	}

	.logistics-selected {
		border: 4rpx solid #3b82f6;
	}

	.discount-badge {
		position: absolute;
		top: -16rpx;
		right: 24rpx;
		background-color: #ef4444;
		border-radius: 8rpx;
		padding: 4rpx 16rpx;
	}

	.service-badge {
		position: absolute;
		top: 16rpx;
		left: 16rpx;
		background-color: #3b82f6;
		border-radius: 8rpx;
		padding: 4rpx 16rpx;
	}

	.badge-text {
		color: white;
		font-size: 24rpx;
	}

	.logistics-info {
		margin-top: 48rpx;
	}

	.logistics-header {
		display: flex;
		align-items: center;
		gap: 16rpx;
		margin-bottom: 16rpx;
	}

	.logistics-logo {
		width: 64rpx;
		height: 64rpx;
		border-radius: 8rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.kye-logo {
		background-color: #f3e8ff;
	}

	.svd-logo {
		background-color: #f3f4f6;
	}

	.logo-text {
		font-weight: bold;
		font-size: 28rpx;
	}

	.kye-logo .logo-text {
		color: #7c3aed;
	}

	.svd-logo .logo-text {
		color: #4b5563;
	}

	.logistics-name {
		font-weight: 500;
		font-size: 32rpx;
	}

	.logistics-price {
		color: #ef4444;
		font-weight: 500;
		margin-bottom: 8rpx;
		margin-right: 8rpx;
		font-size: 32rpx;
	}

	.logistics-weight {
		color: #6b7280;
		font-size: 24rpx;
	}

	.selected-check {
		position: absolute;
		bottom: 16rpx;
		right: 16rpx;
		width: 48rpx;
		height: 48rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.check-mark {
		color: #3b82f6;
		font-size: 32rpx;
		font-weight: bold;
	}

	/* Delivery Section */
	.delivery-section {
		margin: 0 32rpx 32rpx;
		background-color: white;
		border-radius: 24rpx;
		padding: 18rpx 32rpx;
	}

	.delivery-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.delivery-left {
		display: flex;
		align-items: center;
		gap: 16rpx;
	}

	.delivery-icon {
		font-size: 40rpx;
	}

	.delivery-title {
		font-weight: 500;
		font-size: 28rpx;
	}

	.delivery-right {
		display: flex;
		align-items: center;
		gap: 16rpx;
		color: #4b5563;
	}

	.delivery-link {
		font-size: 28rpx;
	}

	/* Agreement Section */
	.agreement-section {
		margin: 0 32rpx 32rpx;
		display: flex;
		align-items: center;
		gap: 16rpx;
	}

	.checkbox {
		width: 32rpx;
		height: 32rpx;
		border: 2rpx solid #9ca3af;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.checkbox-checked {
		background-color: #3b82f6;
		border-color: #3b82f6;
	}

	.checkbox-check {
		color: white;
		font-size: 20rpx;
		font-weight: bold;
	}

	.agreement-text {
		color: #4b5563;
		font-size: 22rpx;
	}

	.agreement-link {
		color: #3b82f6;
		font-size: 22rpx;
	}

	/* Warning Section */
	.warning-section {
		position: fixed;
		bottom: 90px;
		display: flex;
		width: 100%;
		align-items: center;
		gap: 16rpx;
		background-color: #fef3cd;
		padding: 24rpx;
		border-radius: 16rpx;
	}

	.warning-icon {
		font-size: 32rpx;
	}

	.warning-text {
		color: #d97706;
		font-size: 24rpx;
		flex: 1;
	}

	/* Bottom Section */
	.bottom-section {
		/* margin: 0 32rpx 64rpx; */
		width: 100%;
		height: 90px;
		/* padding: 20rpx 30rpx; */
		background-color: #fff;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		display: flex;
	}

	.bottom-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 30rpx;
		width: 100%;
	}

	.price-section {
		display: flex;
		align-items: center;
		gap: 16rpx;
		flex-direction: column;
	}

	.price-label {
		color: #1f2937;
		font-size: 32rpx;
	}

	.price-badge {
		background-color: #ef4444;
		border-radius: 50rpx;
		padding: 8rpx 24rpx;
		display: flex;
	}

	.price-badge-text {
		color: white;
		font-size: 24rpx;
	}

	.booking-button {
		background-color: #3b82f6;
		color: white;
		/* padding: 24rpx 48rpx; */
		border-radius: 50rpx;
		font-weight: 500;
		border: none;
		margin: 0;
		font-size: 30rpx;
	}

	.price-note {
		color: #6b7280;
		font-size: 24rpx;
	}

	/* Bottom Indicator */
	.bottom-indicator {
		display: flex;
		justify-content: center;
		padding-bottom: 32rpx;
	}

	.indicator-bar {
		width: 256rpx;
		height: 8rpx;
		background-color: #d1d5db;
		border-radius: 18rpx;
	}

	/* Responsive Design */
	@media (max-width: 750rpx) {
		.logistics-grid {
			flex-direction: column;
		}

		.bottom-content {
			flex-direction: column;
			gap: 24rpx;
			align-items: stretch;
		}

		.booking-button {
			width: 100%;
		}
	}
</style>