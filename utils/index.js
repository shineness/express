//判断是否上一页
export const getCurrentPagesBut = () => {
	let isPrevPage = false
	let pages = getCurrentPages(); // 获取当前页面栈的实例
	let currPage = pages[pages.length - 1]; //当前页面
	let prevPage = pages[pages.length - 2]; //上一个页面
	if (prevPage && (prevPage.route || prevPage.__route__)) {
		isPrevPage = true
	}
	return isPrevPage

}

// 页面跳转封装
export const pagesRoute = () => {
	const isPrevPage = getCurrentPagesBut()
	if (isPrevPage) {
		uni.navigateBack()
	} else {
		let url = '/pages/tabBar/home/index'
		let type = userStore().customNum
		if (type == 1) {
			url = '/pages/tabBar/eventsManage/index'
		} else if (type == 2) {
			url = '/pages/tabBar/savingsAccount/index'
		} else if (type == 3) {
			url = '/pages/tabBar/bill/index'
		} else if (type == 4) {
			url = '/pages/tabBar/mine/index'
		}
		uni.switchTab({
			url
		})
	}

}
export const makePhoneCall = (e) => {
	uni.makePhoneCall({
		phoneNumber: "18866211816",
		success: () => console.log('拨号成功'),
		fail: (err) => console.error('拨号失败:', err)
	});
}

export function findValueByRange(inputNumber, rangeObj, str) { //获取所在区间的续重
	// 将输入转换为数字
	const num = parseFloat(inputNumber);

	// 获取所有ztll_开头的键
	const rangeKeys = Object.keys(rangeObj).filter(key => key.startsWith(str) && key !== str + 'base');

	// 按区间排序（确保顺序正确）
	rangeKeys.sort((a, b) => {
		const aMin = parseFloat(a.split('-')[0].replace(str, ''));
		const bMin = parseFloat(b.split('-')[0].replace(str, ''));
		return aMin - bMin;
	});

	// 查找匹配的区间
	for (const key of rangeKeys) {
		const [minStr, maxStr] = key.replace(str, '').split('-');
		const min = parseFloat(minStr);
		const max = parseFloat(maxStr);

		if (num > min && num <= max) {
			return rangeObj[key]; // 去除可能的空格
		}
	}

	// 如果没有找到匹配的区间，返回null或默认值
	return null;
}