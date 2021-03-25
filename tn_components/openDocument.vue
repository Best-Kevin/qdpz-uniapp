<template>
	<view class="container">
		<cu-custom class="navBox" bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">文档预览</block>
		</cu-custom>

		<button class="blueBtn cu-btn bg-blue shadow lg" @tap="openDocument()">文档预览</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
			}
		},
		watch: {

		},
		mounted() {

		},
		methods: {
			openDocument() {
				uni.downloadFile({
					url: 'https://cdn.zhoukaiwen.com/kevin.pdf',
					success: function(res) {
						var filePath = res.tempFilePath;
						uni.openDocument({
							filePath: filePath,
							success: function(res) {
								console.log('打开文档成功');
							}
						});
					}
				})
			}
		}
	}
</script>

<style scoped>
	.blueBtn {
		width: 500rpx;
		margin: 50rpx auto;
		display: block;
		line-height: 80rpx;
	}
</style>
