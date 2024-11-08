<template>
	<view class="container">
		<cu-custom bgColor="bg-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">通用详情页</block>
		</cu-custom>

		<view class="bg-top bg-blue">
			<view class="top-box shadow">
				<view class="qh-pic cu-avatar xl" style="background-image:url(https://zhoukaiwen.com/img/kevinLogo.png)"></view>
				<view class="qh-title text-bold text-blue text-xl">
					<text>标题就随便来写了～</text>
				</view>

				<!-- :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']" -->
				<view class="cu-list menu">
					<view class="cu-item" style="padding: 0;">
						<view class="content margin-top" style="display: flex; justify-content: space-around;">
							<!-- <text class="cuIcon-locationfill text-red margin-right-xs"></text> -->
							<text class="text-black text-bold"
								style="min-width: 290rpx; max-width: 290rpx; text-align: left;">陕西省西安市莲湖区</text>
							<text class="cuIcon-forwardfill text-blue margin-lr-sm"></text>
							<text class="text-black text-bold"
								style="min-width: 290rpx; max-width: 290rpx; text-align: left;">四川省成都市武侯区</text>
						</view>
					</view>

					<view class="cu-item" style="padding: 0;">
						<view class="content">
							<text class="cuIcon-rechargefill text-green"></text>
							<text class="text-black">拼车价格</text>
						</view>
						<view class="action">
							<view class="cu-tag round bg-green light">332元</view>
						</view>
					</view>

					<view class="cu-item" style="padding: 0;">
						<view class="content">
							<text class="cuIcon-timefill text-blue  margin-right-xs"></text>
							<text class="text-black">出发时间</text>
						</view>
						<view class="action">
							<view class="cu-tag round bg-blue light">2022年12月22日</view>
						</view>
					</view>

					<view class="cu-item" style="padding: 0;">
						<view class="content">
							<text class="cuIcon-friendfill text-red"></text>
							<text class="text-black">已拼人数</text>
						</view>
						<view class="action">
							<view class="cu-avatar-group"
								style="padding-left: 10rpx;margin-left: 15rpx;vertical-align: middle;">
								<image v-for="(item, index) in joinList.length" :key="index"
									style="width: 42rpx; height: 42rpx; float: left;margin: 0 2rpx;"
									src="https://www.zhoukaiwen.com/img/icon/qh_applet/icon/icon_zuowei_2.png" mode="">
								</image>
								<image v-for="(item, index) in 4 - joinList.length" :key="index"
									style="width: 42rpx; height: 42rpx; float: left;margin: 0 2rpx;"
									src="https://www.zhoukaiwen.com/img/icon/qh_applet/icon/icon_zuowei_1.png" mode="">
								</image>
							</view>
							<text class="text-grey text-sm">{{joinList.length}}/4 人</text>
						</view>
					</view>

					<view class="cu-item" style="padding: 0;">
						<view class="content">
							<text class="cuIcon-emojiflashfill text-pink"></text>
							<text class="text-black">拼车要求</text>
						</view>
						<view class="cu-capsule radius margin-right">
							<view class='cu-tag bg-green'>
								<text class="cuIcon-check text-lg"></text>
							</view>
							<view class="cu-tag line-green">
								可吃零食
							</view>
						</view>

						<view class="cu-capsule radius">
							<view class='cu-tag bg-red'>
								<text class="cuIcon-close text-lg"></text>
							</view>
							<view class="cu-tag line-red">
								不可吸烟
							</view>
						</view>
					</view>

					<view class="bxBox">
						<text class="bxImg cuIcon-selectionfill text-pink"></text>
						<view class="title text-black">车主标签</view>
					</view>

					<view class='padding-bottom-sm flex flex-wrap bg-white' style="justify-content: flex-end;">
						<view class="cu-tag margin-right-xs bg-blue light radius">
							社交牛逼症
						</view>
						<view class="cu-tag bg-purple light radius">
							全程可陪聊
						</view>
						<view class="cu-tag bg-brown light radius">
							进藏老司机
						</view>
						<view class="cu-tag bg-green light radius">
							脾气好
						</view>
					</view>
					
					<view class="bxBox" style="border-top: 1rpx solid #eee;">
						<text class="bxImg cuIcon-selectionfill text-pink"></text>
						<view class="title text-black">车主备注</view>
					</view>
					
					<view class='padding-bottom-sm padding-left-sm bg-white'>
						这是一段备注信息
					</view>

				</view>

			</view>

			<!-- 拼车人员列表 -->
			<view class="center-box shadow">
				<view class="cu-list menu">
					<view class="cu-bar bg-white margin-top-xs u-border-bottom">
						<view class="action sub-title">
							<text class="text-xl text-bold text-blue text-shadow">已拼人员</text>
							<text class="text-ABC text-blue">JoinedPpl</text>
						</view>
					</view>
					<view v-if="joinList.length < 1" class="padding text-center text-grey">暂无数据</view>
					<view class="cu-item" style="padding: 0;">
						<view class="content">
							<image src="../static/logo.png" class="png cu-avatar round sm" mode="aspectFit"></image>
							<text class="text-lg">凯文童鞋</text>
						</view>
						<view class="action">
							<view  class="cu-tag radius bg-blue light">
								186****1093
							</view>
							<button class="cu-btn round sm shadow bg-red margin-left">请离</button>
						</view>
					</view>
					
					<view class="cu-item" style="padding: 0;">
						<view class="content">
							<image src="https://zhoukaiwen.com/img/koalaBillLogo.jpg" class="png cu-avatar round sm" mode="aspectFit"></image>
							<text class="text-lg">西安彭于晏</text>
						</view>
						<view class="action">
							<view  class="cu-tag radius bg-blue light">
								133****1323
							</view>
							<button class="cu-btn round sm shadow bg-red margin-left">请离</button>
						</view>
					</view>

				</view>
			</view>

			<!-- 车主信息 -->
			<view class="center-box shadow">
				<view class="cu-list menu">
					<view class="cu-bar bg-white margin-top-xs u-border-bottom">
						<view class="action sub-title">
							<text class="text-xl text-bold text-blue text-shadow">车主信息</text>
							<text class="text-ABC text-blue">OwnerTel</text>
						</view>
					</view>
					<view class="cu-item" style="padding: 0;">
						<view class="content">
							<text class="cuIcon-myfill text-blue"></text>
							<text class="text-lg">昵称</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">小张师傅</text>
						</view>
					</view>

					<view class="cu-item" style="padding: 0;">
						<view class='content'>
							<text class="cuIcon-mobilefill text-blue"></text>
							<text class='text-lg'>联系方式</text>
						</view>
						<view class="action">
							<view class="cu-tag round bg-blue light">
								177 **** 1131
							</view>
						</view>
					</view>

				</view>
			</view>

			<!-- 加入按钮 -->
			<view class="padding-lr flex margin-top-sm" style="justify-content: space-between;">
				<button class="cu-btn bg-blue margin-top-sm lg" style="width: 46%;">立刻上车</button>
				<button class="cu-btn bg-red margin-top-sm lg" style="width: 46%;">立刻下车</button>
			</view>
			
			<view class="padding-lr" style="margin-top: 15rpx; margin-bottom: 30rpx;">
				<text class="text-grey text-sm">"上车" 即可查看发布者信息，为保证您的拼单，请与发布者确认</text>
			</view>
			
		</view>
	</view>
</template>

<script>
	// import request from '@/common/request.js';
	export default {
		data() {
			return {
				joinList: [
					{
						
					},
					{
						
					}
				]
			}
		},
		onShow() {
			
		},
		onLoad() {
			
		},
		onReachBottom() {

		},
		onShareAppMessage() {
			return {
				title: '分享'
			}
		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>
	.container {
		width: 750rpx;
		color: #333333;

		.bg-top {
			margin-top: -1rpx;
			width: 750rpx;
			height: 220rpx;
			padding-top: 50rpx;
			border-radius: 0 0 20% 20%;

			.top-box {
				width: 700rpx;
				background-color: #FFFFFF;
				margin: 0 auto;
				border-radius: 20rpx;
				padding: 20rpx 30rpx 0rpx;
				position: relative;

				.qh-pic {
					position: absolute;
					right: 64rpx;
					top: -50rpx;
					border-radius: 12rpx;
				}

				.qh-title {
					width: 100%;
					height: 60rpx;
					line-height: 65rpx;
					padding-right: 190rpx;
				}

				.bxBox {
					position: relative;
					display: flex;
					/* padding: 0 30rpx; */
					min-height: 100rpx;
					/* background-color: #ffffff; */
					/* justify-content: space-between; */
					align-items: center;
					font-size: 30rpx;
					line-height: 1.6em;
					flex: 1;

					.bxImg {
						display: inline-block;
						margin-right: 10rpx;
						width: 1.6em;
						text-align: center;
					}
				}

			}
		}

		.center-box {
			color: #333333;
			width: 700rpx;
			background-color: #FFFFFF;
			margin: 0 auto;
			border-radius: 20rpx;
			padding: 0rpx 30rpx 0rpx;
			position: relative;
			margin-top: 20rpx;
		}
	}
</style>
