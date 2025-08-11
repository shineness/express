<template>
	<view class="service-container">
		<uv-collapse :value="[0,1,2]">
			<uv-collapse-item v-for="item,index in obj" :title="item.title" :name="index">
				<view class="service-grid">
				          <view  class="service-item">
				            <text class="service-desc">{{item.content}}</text>
				          </view>
						   </view>
			</uv-collapse-item>
			
		</uv-collapse>
	</view>
</template>

<script setup>
	const obj=[{
		title:"提供的服务",
		content:"涵盖商超配送（常温 / 冷链）、电商包裹同城速达、企业件定时配送（如文件、样品）、大件货物（家具、家电）上门配送，还可提供临时仓储、分拣打包、夜间配送等定制化服务，适配各类日用品、生鲜、工业小件等货物。​"
	},{
		title:"合作客户案例",
		content:"为本地连锁超市（如某社区超市连锁品牌，每日配送生鲜及日用品至各门店）、电商平台（协助某区域电商完成市区内包裹当日达）、家电卖场（为某家电品牌提供市区及周边区县的家电配送安装）等提供服务。​"
	},{
		title:"价格模式",content:"参考价按货物重量 / 体积、配送距离及时效要求计算，具体需详聊。包含基础配送费、上门取件费；不含货物保险费、特殊地点（如偏远小区、限行区域）附加费，大件货物如需搬运上楼另计费用。"
	}]
</script>

<style>
	       
</style>
