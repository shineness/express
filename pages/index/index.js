export const transformDataToTree = (originalData) => {
	const provinceMap = new Map();

	// 遍历原始数据
	originalData.forEach(item => {
		const provinceName = item['省级行政区'];
		const cityName = item['地级行政区'];

		// 如果省份不存在，则创建省份节点
		if (!provinceMap.has(provinceName)) {
			provinceMap.set(provinceName, {
				text: provinceName,
				value: provinceName,
				children: []
			});
		}

		// 添加城市节点到对应省份的children中
		const provinceNode = provinceMap.get(provinceName);
		provinceNode.children.push({
			text: cityName,
			value: cityName
		});
	});

	// 将Map转换为数组
	return Array.from(provinceMap.values());
}
export const transformDataTo2DArray = (originalData) => {
	return [originalData.map(item => [
		item['省级行政区'],
		item['地级行政区']
	])];

}
export const transformToMultiSelectorData = (originalData) => {
	// 1. 获取所有省级行政区（去重）
	const provinces = [...new Set(originalData.map(item => item['省级行政区']))];

	// 2. 构建省级 -> 地级行政区的映射
	const provinceToCitiesMap = new Map();

	originalData.forEach(item => {
		const province = item['省级行政区'];
		const city = item['地级行政区'];

		if (!provinceToCitiesMap.has(province)) {
			provinceToCitiesMap.set(province, []);
		}
		provinceToCitiesMap.get(province).push(city);
	});

	// 3. 返回二维数组格式：第一列是省份，第二列是城市列表
	return [provinces, Array.from(provinceToCitiesMap.values())];
}
export const getValueByRange = (data, inputNumber) => {
	// 定义区间范围和对应的属性名
	const ranges = [{
			max: 50,
			prop: "(1,50]"
		},
		{
			max: 100,
			prop: "(50,100]"
		},
		{
			max: 300,
			prop: "(100,300]"
		},
		{
			max: 500,
			prop: "(300,500]"
		},
		{
			max: 1000,
			prop: "(500,1000]"
		},
		{
			max: 2000,
			prop: "(1000,2000]"
		},
		{
			max: Infinity,
			prop: "(2000,+∞)"
		}
	];

	// 特殊情况处理：输入小于等于1
	if (inputNumber <= 1) {
		return 0; // 或者你可以返回一个默认值
	}

	// 查找匹配的区间
	for (const range of ranges) {
		if (inputNumber <= range.max) {
			return data[range.prop];
		}
	}

	// 如果所有区间都不匹配（理论上不会执行到这里）
	return null;
}