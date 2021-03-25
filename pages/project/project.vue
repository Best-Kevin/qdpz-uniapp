<!-- 项目展示 -->
<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">开源项目</block>
		</cu-custom>
		<view class="content" v-html="content"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '<div style="color: #0081ff;">这是项目详情，数据渲染加载的...</div><div style="color: #0081ff;">这是项目详情，数据渲染加载的...</div><div style="color: #0081ff;">这是项目详情，数据渲染加载的...</div><div style="color: #0081ff;">这是项目详情，数据渲染加载的...</div>',
			}
		},
		watch: {

		},
		mounted() {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.content{
		padding: 30rpx;
	}
</style>
