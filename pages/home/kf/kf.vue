<template>
	<view class="flex">
		<image style="margin: auto;" mode="aspectFit" src="/static/bh.jpg"></image>
		<view class="bottom">
			
			<view class="circle" v-for="item,index in arr" @click="clickS(index)">
				<view><uv-icon color="#2979ff" :name="item.icon" size="28"></uv-icon></view>
				<view class="k">{{item.title}}</view>
				<view class="v">{{item.value}}</view>
			</view>
		</view>
		<view style="text-align: right;padding-right: 30rpx; font-size: 28rpx; color:#666;margin-top: 60rpx;">青岛一通宏祥物流有限公司</view>
		
		
	</view>
</template>

<script setup>
	import {makePhoneCall} from '/utils/index.js'
	const clickS=(index)=>{
		if (index==2 ){makePhoneCall()}
	}
	const arr=[
		{icon:"email-fill",title:"邮箱",value:"123@163.com"},
		{icon:"qq-fill",title:"QQ",value:"123456789"},
		{icon:"phone-fill",title:"热线",value:"18866211816"},
		{icon:"empty-address",title:"地址",value:"山东省青岛市城阳区流亭街道政建物流园B区12号"}
	]
</script>

<style scoped>
	.flex{
		display: flex;
		flex-direction: column;
	}
	.bottom{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap:20rpx;
		align-items: center;
	}
	 .contact{
		 color: #1890ff;
		 text-decoration: underline;
		 margin-left: 10rpx;
	 }
		   .circle{
			   width: 300rpx;
			   height: 300rpx;
			   justify-content: center;
			   flex-direction: column;
			   align-items: center;
			   display: flex;
			   border: 1px solid #ddd;
			   padding: 10rpx;
		   }
		   .k{
			   font-size: 26rpx;
			   color:#1c1c1c;
		   }
		   .v{
			   margin-top: 10rpx;
			   font-size: 28rpx;
			    color:#1c1c1c;
				font-weight: 600;
		   }
</style>
