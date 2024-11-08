<template>
	<view class="components-pano">
		<web-view src="https://www.zhoukaiwen.com/loveChina/index.html"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			wx.showShareMenu({
				withShareTicket: true
			})
		},
		// 分享小程序
		onShareAppMessage(res) {
			return {
				title: '迎国庆～ 国庆红旗头像一键生成！快来「前端铺子」吧！',
			}
		},
		onShareTimeline() {
			return {
				title: '迎国庆～ 国庆红旗头像一键生成！快来「前端铺子」吧！',
				query: {
					key: value
				},
				imageUrl: ''
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>

</style>
