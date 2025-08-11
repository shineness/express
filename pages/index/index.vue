<template>
	<view class="content">
		<view class="form-container">
			<uni-forms ref="formRef" :modelValue="form" :rules="rules" label-width="100px">


				<uni-forms-item label="寄件地址:" name="senderAddress">

					<input class="picker" style="background: #ddd;" v-model="form.senderAddress" placeholder="请输入寄件地址"
						disabled></input>
				</uni-forms-item>
				<uni-forms-item label="收件地址:" name="recipientAddress">
					<picker mode="region" :value="form.recipientAddress" @change="haddleChange2">
						<input class="picker" v-model="form.recipientAddress" placeholder="请选择收件地址" disabled></input>
					</picker>
				</uni-forms-item>
				<uni-forms-item label="物品重量(kg):" name="packageWeight">

					<input class="picker" v-model="form.packageWeight" type="number" placeholder="请输入物品重量" />
				</uni-forms-item>
				<uni-forms-item class="form-item " :label="'物品体积(m³):  '+form.tiji ">
					<input class="picker" v-model="form.tiji" type="number" placeholder="请输入物品体积 " />
				</uni-forms-item>
				
				<uni-forms-item class="form-item " label="尺寸 " style="border-top: 1px solid #ddd;">
				<view
					style="display: flex; align-items: flex-start; flex-direction: column;justify-content: flex-start;"
					v-for="item,index in form.list" :key="index">
					<view style="display: flex; align-items: center;justify-content: flex-start;margin-bottom: 10rpx; ">
						
							<view class="tiji">
								<uni-forms-item name="c" class="no-label">
									<input class="picker" v-model="form.list[index].c" type="number"
										placeholder="长cm" />
								</uni-forms-item>
								<uni-forms-item name="k" class="no-label">
									<input class="picker" v-model="form.list[index].k" type="number"
										placeholder="宽cm" />
								</uni-forms-item>
								<uni-forms-item name="g" class="no-label">
									<input class="picker" v-model="form.list[index].g" type="number"
										placeholder="高cm" />
								</uni-forms-item>
								<uni-forms-item name="num" class="no-label">
									<input class="picker" v-model="form.list[index].num" type="number"
										placeholder="数量" />
								</uni-forms-item>
							</view>
						
						<view style="margin-left: 6rpx; position: relative;top: -20rpx;" v-if="index>0" @click="del(index)"><uni-icons type="clear"
								color="red" size="20"></uni-icons>
						</view>
					</view>
				</view>

				<!-- <view class="tiji">
						<uni-forms-item  name="c" class="no-label">
							<input class="picker" v-model="form.c" type="number" placeholder="长度 cm" />
						</uni-forms-item>
						<uni-forms-item  name="k" class="no-label">
							<input class="picker"  v-model="form.k" type="number" placeholder="宽度 cm" />
						</uni-forms-item>
						<uni-forms-item  name="g" class="no-label">
							<input class="picker" v-model="form.g" type="number" placeholder="高度 cm" />
						</uni-forms-item>
					</view> -->
				<button
					style="height: 60rpx;width: 200rpx; font-size: 26rpx; display: flex;justify-content: center;align-items: center;border-radius: 30rpx;border:1px solid #1aad19;color:#1aad19"
					@click="add">新增尺寸</button>
				</uni-forms-item>
				<view style="display: flex;">
					<button style="border-radius: 50rpx;  flex-grow: 1;" @click="submitForm"
						type="primary">点击查询</button>
					<button style="border-radius: 50rpx; flex-grow: 1;margin-left: 10rpx;border: 1px solid #ddd;"
						@click="reset">重置</button>
				</view>

			</uni-forms>
		</view>
		<view style="height: 500rpx;">
			<view class="yuji"> 预计费用：
			</view>
			<view class="res">
				<view class="item" v-for="item,index in couriers" :key="index">
					<view class="com">{{item.name}}</view>
					<image :src="item.icon" style="width: 80rpx;height: 80rpx;margin-top: 20rpx;"></image>
					<view class="mony">¥<text class="number">{{item.value}}</text></view>
					<view class="sx" v-if="item.sx">预计时效<text class="number">{{item.sx}}</text></view>
				</view>
			</view>
		</view>

		
	</view>
</template>

<script setup>
	import { onLoad, onShow } from "@dcloudio/uni-app";
	
	import {
		ref,
		onMounted,
		computed,
		watch 
	} from 'vue'
	import * as XLSX from 'xlsx'
	import zy from './zy.json'
	import sf from './sf.json'
	import db from './db.json'


	import {
		transformToMultiSelectorData,
		getValueByRange
	} from './index'
	const excelData = ref([])
	const short = (str) => {
		return str.slice(0, -1);
	}
	const initform = {
		senderAddress: '青岛市',
		recipientAddress: '',
		packageWeight: '',
		tiji: "",
		list: [{
			c: "",
			k: "",
			g: "",
			num: 1
		}],

		tji: "",
		courier: ''
	}
	const type=ref()
	const form = ref({
		senderAddress: '青岛市',
		recipientAddress: '',
		packageWeight: '',
		tiji: "",
		list: [{
			c: "",
			k: "",
			g: "",
			num: 1
		}],

		tji: "",
		courier: ''
	})
	watch(
	  () => form.value.list,
	  (newList, oldList) => {
	    console.log('list 发生变化:', newList)
	    // 这里可以执行其他操作
		const a= newList.reduce((sum, item) => {
	    const c = parseFloat(item.c) || 0
	    const k = parseFloat(item.k) || 0
	    const g = parseFloat(item.g) || 0
	    const num = parseFloat(item.num) || 0
	    return sum + (c * k * g * num)
	  }, 0) /1000000
	  console.log(form)
	  
	   form.value.tiji=a
	  },
	  { deep: true }
	)
	
	const reset = () => {
		console.log(initform)
		couriers.value = []
		form.value = {
		senderAddress: '青岛市',
		recipientAddress: '',
		packageWeight: '',
		tiji: "",
		list: [{
			c: "",
			k: "",
			g: "",
			num: 1
		}],

		tji: "",
		courier: ''
	}
	}
	const rules = ref({
		recipientAddress: {
			rules: [{
				required: true,
				errorMessage: '请选择寄件地址',
			}]
		},
		packageWeight: {
			rules: [{
				required: true,
				errorMessage: '请输入物品重量',
			}]
		},
		tiji: {
			rules: [{
				required: true,
				errorMessage: '请输入物品体积',
			}]
		},
		// k: {
		// 	rules: [{
		// 		required: true,
		// 		errorMessage: '请输入宽度',
		// 	}]
		// },
		// g: {
		// 	rules: [{
		// 		required: true,
		// 		errorMessage: '请输入高度',
		// 	}]
		// },

	})
	const level1 = ref("")
	const level2 = ref("")
	const zyObj = ref({})
	const sfObj = ref({})
	const dbObj = ref({})
	const add = () => {
		form.value.list.push({
			c: "",
			k: "",
			g: "",
			num: 1
		})
	}
	const del = (index) => {
		form.value.list.splice(index, 1)
	}
	const makePhoneCall = (e) => {
		uni.makePhoneCall({
			phoneNumber: "18866211816",
			success: () => console.log('拨号成功'),
			fail: (err) => console.error('拨号失败:', err)
		});
	}
	const haddleChange1 = (e) => {
		if (e.detail.value[0] == e.detail.value[1]) {
			form.value.senderAddress = e.detail.value[1] + "" + e.detail.value[2]

		} else {
			form.value.senderAddress = e.detail.value?.join("")
		}

	}
	const haddleChange2 = (e) => {
		const l0 = e.detail.value[0]
		const l1 = e.detail.value[1]
		const l2 = e.detail.value[2]
		if (l0 == l1) {
			form.value.recipientAddress = l1 + "" + l2
			level1.value = short(l1)
			level2.value = short(l2)
		} else {
			form.value.recipientAddress = l0 + "" + l1 + "" + l2
			level1.value = short(l0)
			level2.value = short(l1)
		}
		zyObj.value = zy.filter((item) => {
			return item["省级行政区"].indexOf(level1.value) > -1 && item["地级行政区"].indexOf(level2.value) > -1
		})[0]
		dbObj.value = db.filter((item) => {
			return item["省级行政区"].indexOf(level1.value) > -1 && item["地级行政区"].indexOf(level2.value) > -1
		})[0]
		sfObj.value = sf.filter((item) => {
			return item["省级行政区"].indexOf(level1.value) > -1 && item["地级行政区"].indexOf(level2.value) > -1
		})[0]

	}
	const couriers = ref([])
	const lifang = computed(() => {
		console.log(form.value.tiji)
		const res = form.value.list.reduce((init, pre) => {
			if (pre) {
				const num = parseFloat(pre)
				return init + num
			} else {
				return init + 0
			}

		}, 0)
		return res
	})

	onMounted(() => {

	})





	const getRes = (obj) => {
		if (obj.value) {

			const w = Math.max(parseInt(form.value.packageWeight), form.value.tiji * 200)
			console.log(w)
			const songhuo = obj?.value?.["送货费"] || 0
			const danjia = getValueByRange(obj.value, w) || 0
			const res = w * danjia + songhuo
			return res.toFixed(2)
		} else {
			return '无数据'
		}



	}
	const formRef = ref(null)

	const submitForm = async () => {
		try {

			const res = await formRef.value.validate()
			couriers.value = [{
					name: "顺丰",
					icon: "/static/sf.png",
					value: getRes(zyObj),
					sx: zyObj?.value?.["预计时效"] || ""
				},
				{
					name: "德邦",
					icon: "/static/db.png",
					value: getRes(dbObj),
					sx: dbObj?.value?.["预计时效"] || ""
				},
				{
					name: "一通",
					icon: "",
					value: getRes(sfObj),
					sx: dbObj?.value?.["预计时效"] || ""
				}
			]

		} catch (err) {
			uni.showToast({
				icon: "none",
				title: "输入有误"
			})
		}



	}
	onLoad((param)=>{
		type.value=param.type
		debugger
	})
</script>

<style>
	.no-label {
		display: none !important;
		/* 隐藏 label */
		height: 0 !important;
		padding: 0 !important;
		margin: 0 !important;
	}

	.table-container {
		border: 1px solid #ddd;
		margin: 10rpx 0;
	}

	.table-row {
		display: flex;
		border-bottom: 1px solid #ddd;
	}

	.table-row:last-child {
		border-bottom: none;
	}

	.table-cell {
		padding: 8px;
		flex: 1;
		border-right: 1px solid #ddd;
	}

	.table-cell:last-child {
		border-right: none;
	}

	.tiji {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}


	.form-container {
		margin: 20rpx;
		padding: 15px;
		background: #f5f5f5;
		border-radius: 8px;
	}

	.form-item {
		margin-bottom: 20rpx;
	}



	.form-item text {
		display: block;
		mpadding-bottom: 5px;
	}

	.form-item input,
	.picker {
		padding: 8px;
		border: 1px solid #ddd;
		border-radius: 4px;
		background: white;
	}

	input {
		border: 1px solid #ddd;
	}

	.res {
		padding: 20rpx;
		display: flex;
		justify-content: space-around;
	}

	.com {
		font-size: 30rpx;
		font-weight: 600;
		margin-bottom: 10rpx;
	}

	.item {
		background-color: #f5f5f5;
		border-radius: 30rpx;
		margin: 20rpx;
		width: 28%;
		height: 350rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.mony {
		color: red;
		font-size: 24rpx;
		font-weight: 600;
		margin-top: 30rpx;
	}

	.number {
		font-size: 38rpx;
		color: red;
		margin-left: 10rpx;
	}

	.sx {
		font-size: 28rpx;
	}

	.yuji {
		padding: 10rpx 40rpx;
		font-size: 26rpx;
		font-weight: 600;
		color: #1c1c1c;
	}

	.bottom {
		margin-left: 40rpx;
		font-size: 26rpx;
		color: #000;
		padding-bottom: 100rpx;
	}

	.uni-forms-item {
		/* margin-bottom: 0 !important; */
		/* padding-bottom: 20rpx; */
	}
</style>