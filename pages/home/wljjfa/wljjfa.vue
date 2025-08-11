<template>
	<view class="service-container">
		<uv-collapse :value="[0]">
			<uv-collapse-item v-for="item,index in obj" :title="item.title" :name="index">
				<view class="service-grid">
				          <view  class="service-item">
				            <text class="service-label">核心服务:</text><text class="service-desc">{{item.hxfw}}</text>
				          </view>
						  <view  class="service-item">
						    <text class="service-label">适用场景:</text><text class="service-desc">{{item.cj}}</text>
						  </view>
						  <view  class="service-item">
						    <text class="service-label">优势:</text><text class="service-desc">{{item.ys}}</text>
						  </view>
					
						   </view>
			</uv-collapse-item>
			
		</uv-collapse>
	</view>
</template>

<script setup>
	const obj=[{
		title:"展会运输",
		hxfw:"提供定制木箱、上门打包、运输、布展及撤展全流程服务，适配精密仪器、易碎品等各类展品。",
		cj:"工业展、科技展、艺术品展等各类展会参展商。​",
		ys:"一站式 “门到展” 服务，专业包装降损，全程专人跟进省时省心。​​",
	},{
		title:"宠物运输",
		hxfw:"协助办理检疫等手续，提供航空 / 公路运输，配备标准宠物箱及温控环境，长途专人照料。​",
		cj:"个人宠物迁移、宠物机构运输、赛事宠物转运。​​",
		ys:"全程监控宠物状态，注重安全与舒适，经验丰富让主人放心。​​",
	},{
		title:"特种车辆运输​",
		hxfw:"针对大型工程机械、特种设备等，提供路线勘察、合规运输及加固保障，含超限许可办理。",
		cj:"工程建设、工厂搬迁、大型设备采购。​​",
		ys:"专业车辆与团队，精准把控运输细节，确保合法安全。​​",
	},{
		title:"多式联运​",
		hxfw:"整合公路、铁路、航空、海运等方式，优化路线组合，全程跟踪及手续代办。​",
		cj:"长距离 / 大批量货物运输、跨境物流需求。​",
		ys:"降本增效，灵活适配需求，减少中间环节延误。​​",
	},{
		title:"冷链快递​",
		hxfw:"为生鲜、医药等提供全程温控（0-10℃/-18℃等），配备冷藏设备及实时温度监控。​",
		cj:"生鲜电商、餐饮、医疗机构、医药企业。​",
		ys:"严控温度保品质，降低损耗，提供可靠冷链保障。",
	},]
</script>

<style scoped>

	.service-label{
		font-size: 30rpx;
		display: inline-block;
		padding-right: 10rpx;
		font-weight: 700;
	}
</style>
