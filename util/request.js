let requestIimes = 0

export const request = params => {

	requestIimes++

	uni.showLoading({
		title: '加载中',
		mask: 'true'
	})

	const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"

	return new Promise((resolve, reject) => {
		uni.request({
			...params,
			url: baseUrl + params.url,
			success: (res) => { 
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: "获取数据失败",
					mask: true
				})
				reject(err)
			},
			complete: () => {
				requestIimes--
				
				if (requestIimes === 0) {
					uni.hideLoading()
				}
			}
		})
	})
}
