<!-- 模拟数据加载 -->
<template>
	<view class="container">
		<cu-custom class="navBox" bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">模拟数据加载</block>
		</cu-custom>
		
		<div>{{JSON.stringify(dataList)}}</div>

		<button class="blueBtn cu-btn bg-blue shadow lg" @tap="getData()">数据加载</button>
	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				dataList: [],
			}
		},
		watch: {

		},
		mounted() {

		},
		methods: {
			getData() {
				console.log('数据加载')
				let opts = {
					type: 2, 	//1为数据接口；2为静态资源请求
					url: 'json/project.json',
					method: 'get'
				};
				// let params = {
				// 	userName: '凯文童鞋',
				// 	password: '123456'
				// };
				uni.showLoading({
					title: '加载中'
				})
				// console.log('参数', params);
				request.httpRequest(opts).then(res => {
					console.log(res);
					uni.hideLoading();
					if(res.statusCode == 200){
						this.dataList = res.data;
					}else{
						
					}
				});
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
