const baseUrl = 'https://xxxxxxx.com/xxxxx/' //你的接口地址

// 不带token请求
const httpRequest = (opts, data) => {
	uni.onNetworkStatusChange(function(res) {
		if (!res.isConnected) {
			uni.showToast({
				title: '网络连接不可用！',
				icon: 'none'
			});
		}
		return false
	});
	let httpDefaultOpts = {
		url: baseUrl + opts.url,
		data: data,
		method: opts.method,
		header: opts.method == 'get' ? {
			'X-Requested-With': 'XMLHttpRequest',
			"Accept": "application/json",
			"Content-Type": "application/json; charset=UTF-8"
		} : {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/json; charset=UTF-8'
		},
		dataType: 'json',
	}
	let promise = new Promise(function(resolve, reject) {
		uni.request(httpDefaultOpts).then(
			(res) => {
				resolve(res[1])
			}
		).catch(
			(response) => {
				reject(response)
			}
		)
	})
	return promise
};
//带Token请求
const httpTokenRequest = (opts, data) => {
	uni.onNetworkStatusChange(function(res) {
		if (!res.isConnected) {
			uni.showToast({
				title: '网络连接不可用！',
				icon: 'none'
			});
		}
		return false
	});
	let token = uni.getStorageSync('token');
	if (token == '' || token == undefined || token == null) {
		uni.showToast({
			title: '账号已过期，请重新登录',
			icon: 'none',
			complete: function() {
				uni.reLaunch({
					url: '/pages/login/login'
				});
			}
		});
	} else {
		let httpDefaultOpts = {
			url: baseUrl + opts.url,
			data: data,
			method: opts.method,
			header: opts.method == 'get' ? {
				'X-Access-Token': token,
				'X-Requested-With': 'XMLHttpRequest',
				"Accept": "application/json",
				"Content-Type": "application/json; charset=UTF-8"
			} : {
				'X-Access-Token': token,
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json; charset=UTF-8'
			},
			dataType: 'json',
		}
		let promise = new Promise(function(resolve, reject) {
			uni.request(httpDefaultOpts).then(
				(res) => {
					if (res[1].data.code == 200) {
						resolve(res[1])
					} else {
						if (res[1].data.code == 5000) {
							uni.reLaunch({
								url: '/pages/login/login'
							});
							uni.clearStorageSync();
						} else {
							uni.showToast({
								title: '' + res[1].data.message,
								icon: 'none'
							})
						}
					}
				}
			).catch(
				(response) => {
					reject(response)
				}
			)
		})
		return promise
	}

};

export default {
	baseUrl,
	httpRequest,
	httpTokenRequest
}


// 页面中请求示例
	// let opts = {
	// 	url: 'xxxx/xxxx/login',
	// 	method: 'get'
	// };
	// let params = {
	// 	userName: '凯文童鞋',
	// 	password: '123456'
	// };
	// uni.showLoading({
	// 	title: '加载中'
	// })
	// console.log('参数', params);
	// this.$myRequest.httpRequest(opts, params).then(res => {
	// 	console.log('登录', res);
	// 	if (res.data.code == 200) {
	// 		console.log('成功')
	// 	} else {
	// 		tconsole.log('失败')
	// 	}
	// });
