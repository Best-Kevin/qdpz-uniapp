<!-- 蓝色简洁登录页面 -->
<template>
	<view>
		<cu-custom class="navBox" bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">登录集合</block>
		</cu-custom>

		<view class="padding-lr-sm padding-top-sm bg-white">
			<view class="newsListBox bg-white">
				<view class="newsList radius shadow-warp padding-bottom-xs" @click="goIndex1">
					<view class='newsType'>简洁风格</view>
					<image src="https://cdn.zhoukaiwen.com/login_index1_bg.jpg" mode="aspectFill"></image>
					<view class="text-bold text-black text-shadow padding-top-xs padding-lr-sm">简洁风格登录页</view>
					<view class="flex justify-between margin-top-xs">
						<view class="text-bold text-sm text-grey padding-tb-xs padding-left-sm">
							<view class="cu-avatar round margin-right-xs sm"
								:style="[{ backgroundImage:'url(https://cdn.zhoukaiwen.com/logo.png)' }]"></view>
							<text>前端铺子</text>
						</view>
						<view class="text-xs text-grey padding-right-sm" style="line-height: 60rpx;">2020-07-11</view>
					</view>
				</view>
				
				<view class="newsList radius shadow-warp padding-bottom-xs" @click="goIndex2">
					<view class='newsType'>商务风格</view>
					<image src="https://cdn.zhoukaiwen.com/login_index2_bg.jpg" mode="aspectFill"></image>
					<view class="text-bold text-black text-shadow padding-top-xs padding-lr-sm">商务风格登录页</view>
					<view class="flex justify-between margin-top-xs">
						<view class="text-bold text-sm text-grey padding-tb-xs padding-left-sm">
							<view class="cu-avatar round margin-right-xs sm"
								:style="[{ backgroundImage:'url(https://cdn.zhoukaiwen.com/logo.png)' }]"></view>
							<text>前端铺子</text>
						</view>
						<view class="text-xs text-grey padding-right-sm" style="line-height: 60rpx;">2020-07-11</view>
					</view>
				</view>
				
				<view class="newsList radius shadow-warp padding-bottom-xs" @click="goIndex3">
					<view class='newsType'>电商风格</view>
					<image src="https://cdn.zhoukaiwen.com/login_index3_bg.jpg" mode="aspectFill"></image>
					<view class="text-bold text-black text-shadow padding-top-xs padding-lr-sm">电商风格登录页·1</view>
					<view class="flex justify-between margin-top-xs">
						<view class="text-bold text-sm text-grey padding-tb-xs padding-left-sm">
							<view class="cu-avatar round margin-right-xs sm"
								:style="[{ backgroundImage:'url(https://cdn.zhoukaiwen.com/logo.png)' }]"></view>
							<text>前端铺子</text>
						</view>
						<view class="text-xs text-grey padding-right-sm" style="line-height: 60rpx;">2020-07-11</view>
					</view>
				</view>
				
				<view class="newsList radius shadow-warp padding-bottom-xs" @click="goIndex4">
					<view class='newsType'>电商风格</view>
					<image src="https://cdn.zhoukaiwen.com/login_index4_bg.jpg" mode="aspectFill"></image>
					<view class="text-bold text-black text-shadow padding-top-xs padding-lr-sm">电商风格登录页·2</view>
					<view class="flex justify-between margin-top-xs">
						<view class="text-bold text-sm text-grey padding-tb-xs padding-left-sm">
							<view class="cu-avatar round margin-right-xs sm"
								:style="[{ backgroundImage:'url(https://cdn.zhoukaiwen.com/logo.png)' }]"></view>
							<text>前端铺子</text>
						</view>
						<view class="text-xs text-grey padding-right-sm" style="line-height: 60rpx;">2020-07-11</view>
					</view>
				</view>
				
				<view class="newsList radius shadow-warp padding-bottom-xs" @click="goIndex5">
					<view class='newsType'>蓝色渐变</view>
					<image src="https://cdn.zhoukaiwen.com/login_index5_bg.jpg" mode="aspectFill"></image>
					<view class="text-bold text-black text-shadow padding-top-xs padding-lr-sm">蓝色渐变风格登录页</view>
					<view class="flex justify-between margin-top-xs">
						<view class="text-bold text-sm text-grey padding-tb-xs padding-left-sm">
							<view class="cu-avatar round margin-right-xs sm"
								:style="[{ backgroundImage:'url(https://cdn.zhoukaiwen.com/logo.png)' }]"></view>
							<text>前端铺子</text>
						</view>
						<view class="text-xs text-grey padding-right-sm" style="line-height: 60rpx;">2020-07-11</view>
					</view>
				</view>
				
			</view>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {

			};
		},
		onLoad() {

		},
		methods: {
			goIndex1(){
				uni.navigateTo({
					url: 'index1'
				})
			},
			goIndex2(){
				uni.navigateTo({
					url: 'index2'
				})
			},
			goIndex3(){
				uni.navigateTo({
					url: 'index3'
				})
			},
			goIndex4(){
				uni.navigateTo({
					url: 'index4'
				})
			},
			goIndex5(){
				uni.navigateTo({
					url: 'index5'
				})
			}
		}
	};
</script>
<style lang="scss" scoped>
	.newsListBox {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-flow: row wrap;
		align-content: flex-start;

		.newsList {
			position: relative;
			width: 346rpx;
			border-radius: 10rpx;
			overflow: hidden;
			margin-bottom: 25rpx;

			.newsType {
				position: absolute;
				right: 15rpx;
				top: 12rpx;
				z-index: 9;
				background: #0081ff;
				opacity: 0.8;
				padding: 8rpx 12rpx;
				border-radius: 10rpx;
				color: #fff;
				font-size: 20rpx;
			}

			image {
				width: 346rpx;
				height: 620rpx;
			}
		}
	}
</style>
