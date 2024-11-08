<template>
	<view class="container">
		<cu-custom bgColor="bg-1a1a1a" :isBack="true">
			<block slot="backText"></block>
			<block slot="content"><!-- 摄影师资料 --></block>
		</cu-custom>
		
		<view class="picBox">
			<view class="cu-bar">
				<view class="action sub-title justify-between">
					<text class="text-xl text-bold text-white">摄影师精选作品</text>
					<text class="text-ABC text-white">selected</text>
					<!-- last-child选择器-->
				</view>
				<view class="action text-white text-sm" style="opacity: 0.6;">
					2022-02-29 更新
				</view>
			</view>
			
			<view class="picMain flex justify-between">
				<view class="picL">
					<image src="https://www.zhoukaiwen.com/img/qh/wxt1.jpg" mode="aspectFill"></image>
				</view>
				<view class="picB">
					<image src="https://www.zhoukaiwen.com/img/qh/kw1.jpg" mode="aspectFill"></image>
					<image src="https://www.zhoukaiwen.com/img/qh/kw2.jpg" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		
		<view class="title-header">
			<view class="title-text">
				摄 / 影 / 师
			</view>
		</view>
		
		<view class="cu-card dynamic isCard">
			<view class="cu-item shadow">
				<view class="PhotographerBoxL">
					<view class="cu-avatar round xl" style="background-image:url(https://www.zhoukaiwen.com/img/qh/kt1.jpg);">
						<view class="cu-tag badge">特约</view>
					</view>
					<view class="text-bold margin-top-sm">滑呗-叉烧饭</view>
					<view class='cu-tag2 margin-top-xs bg-blue radius'>鳌山滑雪场</view>
					<view class="text-xs margin-top-sm text-grey">擅长风景摆拍、抓拍摄影师</view>
				</view>
				<view class="PhotographerBoxR">
					<view class="text-sm text-bold">擅长拍摄：滑行跟拍、风景摆拍照</view>
					<view class="text-sm text-grey margin-top-xs">20-21雪季共拍摄2万张照片，深受雪友好评，图片精修，价格优惠</view>
					<view class="margin-top-sm text-black">摄影师作品</view>
					<view class="PhotoPpl margin-top-xs flex justify-between">
						<image src="https://www.zhoukaiwen.com/img/qh/kt1.jpg" mode="aspectFill"></image>
						<image src="https://www.zhoukaiwen.com/img/qh/kt2.jpg" mode="aspectFill"></image>
						<image src="https://www.zhoukaiwen.com/img/qh/kt3.jpg" mode="aspectFill"></image>
					</view>
				</view>
				<view class="padding-sm text-center fl text-bold text-blue goPhotographer">联系摄影师</view>
			</view>
			
			<view class="cu-item shadow">
				<view class="PhotographerBoxL">
					<view class="cu-avatar round xl" style="background-image:url(https://www.zhoukaiwen.com/img/qh/lxf1.jpg);">
						<view class="cu-tag badge">跟拍</view>
					</view>
					<view class="text-bold margin-top-sm">李雪儿</view>
					<view class='cu-tag2 margin-top-xs bg-blue radius'>鳌山滑雪场</view>
					<view class="text-xs margin-top-sm text-grey">高速跟拍，无惧速度</view>
				</view>
				<view class="PhotographerBoxR">
					<view class="text-sm text-bold">擅长拍摄：滑行跟拍</view>
					<view class="text-sm text-grey margin-top-xs">擅长滑行跟拍，设备：insta360 X2，滑行稳定，无惧速度，跟拍成品高</view>
					<view class="margin-top-sm text-black">摄影师作品</view>
					<view class="PhotoPpl margin-top-xs flex justify-between">
						<image src="https://www.zhoukaiwen.com/img/qh/wxt1.jpg" mode="aspectFill"></image>
						<image src="https://www.zhoukaiwen.com/img/qh/kw2.jpg" mode="aspectFill"></image>
						<image src="https://www.zhoukaiwen.com/img/qh/kt2.jpg" mode="aspectFill"></image>
					</view>
				</view>
				<view class="padding-sm text-center fl text-bold text-blue goPhotographer">联系摄影师</view>
			</view>
			
		</view>
		
		

	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			var that = this;
		},
		mounted() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.picBox{
		width: 750rpx;
		background-color: #1a1a1a;
		.picMain{
			width: 750rpx;
			height: 380rpx;
			padding: 10rpx 30rpx 30rpx 30rpx;
			.picL{
				width: 430rpx;
				height: 100%;
				image{
					border-radius: 8rpx;
					width: 100%;
					height: 100%;
				}
			}
			.picB{
				width: 250rpx;
				height: 100%;
				display:flex;
				flex-flow: column; //垂直排列
				justify-content: space-between;//两端对齐
				image{
					border-radius: 8rpx;
					width: 100%;
					height: 48%;
				}
			}
		}
	}
	.title-header {
		display: flex;
		height: 120rpx;
		font-size: 40rpx;
		align-items: center;
		justify-content: center;
		/* padding: 40rpx 0 0 0; */
		font-weight: bold;
		background-image: url(https://s1.ax1x.com/2020/09/16/wccswF.png);
		background-size: cover;
	}
	.title-text {
		background-image: -webkit-linear-gradient(0deg, #ff8a34, #FBBD12);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.cu-card>.cu-item{
		margin: 0 30rpx 30rpx 30rpx;
	}
	.PhotographerBoxL{
		width: 35%;
		text-align: center;
		padding: 25rpx;
		float: left;
	}
	.PhotographerBoxR{
		width: 65%;
		padding: 25rpx;
		float: left;
		.PhotoPpl{
			width: 100%;
			image{
				border-radius: 8rpx;
				width: 128rpx;
				height: 128rpx;
			}
		}
	}
	.cu-tag2 {
		height: 40rpx !important;
		font-size: 22rpx;
		vertical-align: middle;
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 0rpx 16rpx;
		font-family: Helvetica Neue, Helvetica, sans-serif;
		white-space: nowrap;
	}
	.goPhotographer{
		width: 96%; 
		margin: 0 2%; 
		border-top: 1rpx #CCCCCC dashed;
	}
</style>
