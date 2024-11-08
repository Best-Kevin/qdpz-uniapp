<template>
	<view class="components-home">

		<!-- 会员弹窗说明 -->
		<view class="cu-modal" @tap="hideModal" :class="modalName=='Modal'?'show':''" style="z-index: 99999;">
			<view class="cu-dialog" style="padding: 300rpx 0 70rpx;">
				<view class="modal_bg">
					<view class="title-header">
						<view class="title-text">
							VIP · 会 · 员 · 说 · 明
						</view>
					</view>
				</view>
				<view class="modal_main">
					<view class="padding-lr margin-top-xs">
						<view class="text-grey text-smdf">
							<text class="cuIcon-title text-blue margin-right-xs"></text>
							<text>开源不易，<text class="text-orange">感谢大家</text> 对「前端铺子」的支持！</text>
						</view>

						<view class="text-grey text-smdf margin-top-sm">
							<text class="cuIcon-title text-blue margin-right-xs"></text>
							<text>会员尊享所有付费组件，同时优先响应会员页面模板需求、项目需求，代开发费用六折！享受外包项目九折优惠！</text>
						</view>

						<view class="text-grey text-smdf margin-top-sm">
							<text class="cuIcon-title text-blue margin-right-xs"></text>
							<text>定价也不是很高，统一定价：<text class="text-orange">699元/终身</text>（约2个酷炫前端页面价格）‍</text>
						</view>

						<view class="text-grey text-smdf margin-top-sm">
							<text class="cuIcon-title text-blue margin-right-xs"></text>
							<text>项目初衷是寻求商务合作，同时垫付一下工作室的服务器+CDN支出‍</text>
						</view>

						<view class="text-grey text-smdf margin-top-sm">
							<text class="cuIcon-title text-blue margin-right-xs"></text>
							<text>购买会员，进入会员群，请联系：<text class="text-orange">280224091‍（微信）</text></text>
						</view>


					</view>
				</view>
			</view>
		</view>

		<view class="bgImg">

			<view class="bannerBox">
				<swiper style="height: 680rpx;" class="swiper" @change="cardSwiper" circular="true"
					indicator-dots="true" autoplay="true" interval="4000" duration="600">
					<swiper-item class="swiper-list" v-for="(item, index) in bannerList" :key="index">
						<view class="swiper-item uni-bg-red">
							<image class="swiper-img radius shadow-warp" :src="item.imageUrl" mode="widthFix"></image>
						</view>
					</swiper-item>
				</swiper>
				<view class="indication">
					<block v-for="(item,index) in bannerList" :key="index">
						<view class="spot" :class="cardCur == index ? 'active': '' "></view>
					</block>
				</view>
			</view>

			<view @click="showModal" class="left_box shadow-warp" style="padding: 20rpx 20rpx 20rpx 10rpx;">
				<view class="cu-avatar lgs round margin-right-sm margin-left-xs fl"
					style="background-image:url(https://cdn.zhoukaiwen.com/qdpz_hy3.svg);"></view>
				<view class="text-bold fl margin-top-xs text-shadow">VIP会员 ·<text class="text-orange">￥699</text></view>
				<viwe class="text-grey text-sm margin-top-xs fl text-shadow">组件永久免费，详情点击 👉</viwe>
			</view>


			<view class="right_box shadow-warp" @click="goBasic">
				<button class='content cu-btn' style="display: contents;">
					<view class="text-xxl" style="height: 64rpx; margin-top: 12rpx;">
						<image src="https://cdn.zhoukaiwen.com/qdpz_hz1.svg" mode="widthFix" style="width: 65rpx;">
						</image>
					</view>
					<view class="text-shadow text-black text-bold" style="font-size: 26rpx; margin-top: 14rpx;">更多功能
					</view>
				</button>
			</view>

		</view>
		<view class="mainBox flex justify-between">
			<view @click="goPoster" class="mainBtn shadow-warp radius bg-white padding-sm margin-xs radius text-center">
				<view style="text-align: center;">
					<image src="https://cdn.zhoukaiwen.com/qdpz_hbbj3.gif" mode="widthFix"
						style="width: 125rpx;border-radius: 20rpx;"></image>
				</view>
				<view class="text-bold text-black text-lg margin-top-sm text-shadow">海报编辑器</view>
				<view class="margin-top-sm text-gray text-sm text-shadow"><text
						class="text-orange margin-right-xs text-bold">￥699</text> 享受终身VIP服务</view>
			</view>

			<view @click="goPicEditor"
				class="mainBtn shadow-warp radius bg-white padding-sm margin-xs radius text-center">
				<view style="text-align: center;">
					<image src="https://cdn.zhoukaiwen.com/qdpz_pic1.svg" mode="widthFix" style="width: 125rpx;">
					</image>
				</view>
				<view class="text-bold text-black text-lg margin-top-sm text-shadow">图片编辑器</view>
				<view class="margin-top-sm text-gray text-sm text-shadow"><text
						class="text-orange margin-right-xs text-bold">￥199</text> 会员源码免费</view>
			</view>
		</view>

		<view class="padding">
			<view class="flex">
				<view @click="goBasic" class="flex-sub bg-white padding-sm margin-sm radius shadow-warp"
					style="line-height: 80rpx;">
					<image class="fl margin-right-sm" src="https://cdn.zhoukaiwen.com/qdpz_kt1.svg" mode="widthFix"
						style="width: 68rpx;margin-top: 8rpx;"></image>
					<view class="text-shadow text-bold">智能抠图</view>
				</view>

				<view @click="goBasic" class="flex-sub bg-white padding-sm margin-sm radius shadow-warp"
					style="line-height: 80rpx;">
					<image class="fl margin-right-sm" src="https://www.zhoukaiwen.com/img/luck_draw.svg" mode="widthFix"
						style="width: 74rpx;margin-top: 2rpx;"></image>
					<view class="text-shadow text-bold">抽奖集合</view>
				</view>

			</view>
			<view class="flex">
				<view @click="goBasic" class="flex-sub bg-white padding-sm margin-sm radius shadow-warp"
					style="line-height: 80rpx;">
					<image class="fl margin-right-sm" src="https://cdn.zhoukaiwen.com/pic5.svg" mode="widthFix"
						style="width: 68rpx;margin-top: 8rpx;"></image>
					<view class="text-shadow text-bold">AI修图</view>
				</view>

				<view @click="goBasic" class="flex-sub bg-white padding-sm margin-sm radius shadow-warp"
					style="line-height: 80rpx;">
					<image class="fl margin-right-sm" src="https://cdn.zhoukaiwen.com/qdpz_vr.svg" mode="widthFix"
						style="width: 68rpx;margin-top: 8rpx;"></image>
					<view class="text-shadow text-bold">VR看车(展厅)</view>
				</view>
			</view>

			<!-- <view class="padding">
				<view class="text-center text-grey text-sm margin-top-xxl">· 前端铺子 ·</view>
				<view class="text-center text-grey text-sm margin-tb-sm">开源地址：https://gitee.com/kevin_chou/qdpz</view>
			</view> -->
		</view>
		<view style="height: 120rpx;width: 1rpx;"></view>

	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				cardCur: 0,
				bannerList: [{
						imageUrl: 'https://cdn.zhoukaiwen.com/qh_banner8.jpg'
					},
					{
						imageUrl: 'https://cdn.zhoukaiwen.com/qdpz_banner3.jpg'
					}
				],
				modalName: null, //会员弹窗
			}
		},
		onShow() {

		},
		mounted() {

		},
		methods: {
			showModal() {
				this.modalName = 'Modal'
			},
			hideModal() {
				this.modalName = null;
			},
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			goPoster() {
				uni.navigateTo({
					url: '../main/posterList'
				})
			},
			goPicEditor() {
				uni.navigateTo({
					url: '/tn_components/imageEditor'
				})
			},
			goMatting() {
				uni.navigateTo({
					url: '../main/matting'
				})
			},
			goBasic(){
				uni.showToast({
				    title: '会员组件，请在正式版体验',
					icon: 'none',
				    duration: 2000
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-item {
		height: 100%;
	}

	/* 轮播指示点 start*/
	.indication {
		z-index: 9999;
		width: 100%;
		height: 36rpx;
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.spot {
		background-color: #FFFFFF;
		opacity: 0.6;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		top: -130rpx;
		margin: 0 8rpx !important;
		position: relative;
	}

	.spot.active {
		opacity: 1;
		width: 30rpx;
		background-color: #0081ff;
	}

	.bgImg {
		position: relative;
		margin-bottom: 100rpx;

		.left_box {
			position: absolute;
			height: 130rpx;
			width: 60%;
			background: #ffffff;
			bottom: -55rpx;
			left: 5%;
			border-radius: 15rpx;
		}

		.right_box {
			text-align: center;
			position: absolute;
			height: 130rpx;
			width: 25%;
			background: #ffffff;
			bottom: -55rpx;
			right: 5%;
			border-radius: 15rpx;
		}
	}

	.mainBox {
		width: 750rpx;
		height: 300rpx;
		padding: 0 5%;
		margin-bottom: 10rpx;

		.mainBtn {
			width: 45%;
		}
	}

	.radius {
		border-radius: 18rpx !important;
	}

	// 弹窗
	.cu-dialog {
		background: #FFFFFF;
		overflow: visible;
	}

	.modal_bg {
		width: 100%;
		height: 400rpx;
		position: absolute;
		top: -100rpx;
		background-image: url(https://zhoukaiwen.com/img/qdpz/modal_bg.png);
		background-size: 100%;
		background-repeat: no-repeat;
	}

	.modal_main {
		text-align: left;
		background-color: #FFFFFF;
	}

	.title-header {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		height: 120rpx;
		font-size: 40rpx;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		background-image: url(https://cdn.zhoukaiwen.com/wccswF.png);
		background-size: cover;
	}

	.title-text {
		background-image: -webkit-linear-gradient(0deg, #ff8a34, #FBBD12);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
