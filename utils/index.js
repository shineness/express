//判断是否上一页
export const getCurrentPagesBut = () => {
	let isPrevPage = false
	let pages = getCurrentPages();   // 获取当前页面栈的实例
	let currPage = pages[pages.length - 1];   //当前页面
	let prevPage = pages[pages.length - 2];  //上一个页面
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
		uni.switchTab({ url })
	}

}
