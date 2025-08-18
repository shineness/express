<template>
  <view class="container">
    <!-- 常温车型表格 -->
    <view class="title">常温车型</view>
    <uni-table border stripe emptyText="暂无数据">
      <uni-tr>
        <uni-th width="100" align="center">车型</uni-th>
		<uni-th width="120" align="center">价格</uni-th>
        <uni-th width="140" align="center">车型</uni-th>
        <uni-th width="120" align="center">参考内径</uni-th>
        <uni-th width="140" align="center">载重</uni-th>
      </uni-tr>
      <uni-tr v-for="(item, index) in normalTempData" :key="index">
        <uni-td align="center">{{ item.type }}</uni-td>
		<uni-td align="center" :class="{ 'highlight': parsePrice(item.price) > 10 }">
		  {{ item.price }}
		</uni-td>
        <uni-td align="center">{{ item.style }}</uni-td>
        <uni-td align="center">{{ item.dimension }}</uni-td>
        <uni-td align="center">{{ item.weight }}</uni-td>
      
      </uni-tr>
    </uni-table>

    <!-- 冷藏车型表格 -->
    <view class="title" style="margin-top: 30px;">冷藏车型</view>
    <uni-table border stripe>
      <uni-tr>
        <uni-th width="100" align="center">车型</uni-th>
		 <uni-th width="120" align="center">价格</uni-th>
        <uni-th width="100" align="center">车型</uni-th>
        <uni-th width="120" align="center">参考内径</uni-th>
        <uni-th width="100" align="center">载重</uni-th>
       
      </uni-tr>
      <uni-tr v-for="(item, index) in coldStorageData" :key="index">
        <uni-td align="center">{{ item.type }}</uni-td>
		<uni-td align="center" :class="{ 'highlight': parsePrice(item.price) > 10 }">
		  {{ item.price }}
		</uni-td>
        <uni-td align="center">{{ item.style }}</uni-td>
        <uni-td align="center">{{ item.dimension }}</uni-td>
        <uni-td align="center">{{ item.weight }}</uni-td>
    
      </uni-tr>
    </uni-table>
	  <view class="notice-box">
	      <view class="notice-title">价格说明：</view>
	      <view class="notice-item">1. 此价格含9%增值税专用发票（包含代理运输服务，运输方式及责任范围可咨询客服）</view>
	      <view class="notice-item">2. 货值超过3000元建议投保，保险费按货值的万分之八计算</view>
	      <view class="notice-item">3. 此价格为参考价，具体价格请联系客服确认</view>
	      <view class="notice-item contact">具体咨询客服：<text class="contact-btn" @click="makePhoneCall()" data-phone="18866211816">点击联系</text></view>
	    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
	import {makePhoneCall} from '/utils/index.js'

// 数据解析函数（提取价格数字）
const parsePrice = (priceStr) => {
  return parseFloat(priceStr) || 0;
};

// 常温车型数据
const normalTempData = ref([
  { type: '依维柯', style: '厢车', dimension: '2.4*1.7*1.5', weight: '1吨', price: '4.5元/公里' },
  { type: '4米2', style: '平板/高栏/厢车', dimension: '3.8*1.8*1.8', weight: '1.5吨', price: '5.5元/公里' },
  { type: '6米8', style: '平板/高栏/厢车', dimension: '6.4*2.2*2.5', weight: '6吨', price: '7.5元/公里' },
  { type: '9米6', style: '平板/高栏/厢车', dimension: '9.0*2.2*2.5', weight: '10吨', price: '8.5元/公里' },
  { type: '13米', style: '高栏', dimension: '12.5*2.3*2.5', weight: '18吨', price: '9.5元/公里' },
  { type: '13米75', style: '高低板', dimension: '13.5*2.8*2.5', weight: '25吨', price: '11元/公里' },
  { type: '17米5', style: '高低板', dimension: '17.5*2.8*2.5', weight: '25吨', price: '12元/公里' },
  { type: '气垫车', style: '厢车、飞翼、平板', dimension: '具体咨询客服', weight: '具体咨询客服', price: '具体咨询客服' }
])

// 冷藏车型数据
const coldStorageData = ref([
  { type: '4米2', style: '厢车', dimension: '3.8*1.8*1.8', weight: '1.5吨', price: '6元/公里' },
  { type: '6米8', style: '厢车', dimension: '6.4*2.2*2.5', weight: '6吨', price: '8元/公里' },
  { type: '9米6', style: '厢车', dimension: '9.0*2.2*2.5', weight: '10吨', price: '9元/公里' },
  { type: '12米5', style: '厢车', dimension: '12*2.2*2.5', weight: '18吨', price: '11元/公里' },
  { type: '15米', style: '厢车', dimension: '14.5*2.2*2.5', weight: '25吨', price: '13元/公里' }
])
</script>

<style scoped>
.container {
  padding: 15px;
}

.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.highlight {
  color: #f56c6c;
  font-weight: bold;
}

/* 表格斑马纹底色（需全局样式） */
:deep(.uni-table-tr:nth-child(even)) {
  background-color: #fafafa;
}
/* 价格说明 */
.notice-box {
  margin-top: 40rpx;
  padding: 20rpx;
  background-color: #fff;
  border-radius: 12rpx;
  box-shadow: 0 2rpx 12rpx 0 rgba(0, 0, 0, 0.05);
}

.notice-title {
  font-size: 28rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 16rpx;
}

.notice-item {
  font-size: 26rpx;
  color: #666;
  line-height: 1.8;
  margin-bottom: 12rpx;
  position: relative;
  padding-left: 20rpx;
}



.contact {
  margin-top: 20rpx;
  color: #333;
}

.contact-btn {
  color: #1890ff;
  text-decoration: underline;
  margin-left: 10rpx;
}
</style>