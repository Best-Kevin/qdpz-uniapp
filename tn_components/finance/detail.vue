<template>
	<view class="container" style="background-color: white;">
		<view class="topBox">
			<image class="topImg" src="https://cdn.zhoukaiwen.com/banner-bg.d26093a6.png" mode="widthFix"></image>
			<cu-custom :isBack="true" bgColor="bg-shadeTop text-white" style="position: fixed; z-index: 9999999;">
				<block slot="backText">返回</block>
				<block slot="content"></block>
			</cu-custom>
			
			<view class="topMainBox flex flex-direction justify-between viewBox">
				<view class="padding-lr padding-tb-sm">
					<view class="isHead cu-avatar lg round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
					<view class="isName text-lg text-bold">多品种仓位实时收益-ADA</view>
				</view>
				<view class="flex justify-between text-center padding-lr padding-tb-sm">
					<view class="flex flex-direction">
						<text class="margin-bottom-xs text-df">使用人数</text>
						<text class="text-bold text-xl">1025</text>
					</view>
					<view class="flex flex-direction">
						<text class="margin-bottom-xs text-df">交易天数</text>
						<text class="text-bold text-xl">45</text>
					</view>
					<view class="flex flex-direction">
						<text class="margin-bottom-xs text-df">剩余名额</text>
						<text class="text-bold text-xl">35/50</text>
					</view>
				</view>
			</view>
		</view>

		<view>
			<view class="padding-lr-sm margin-bottom-sm">
				<text class="inputName text-bold text-df">分配资金</text>
				<view class="cu-form-group radius margin-top-xs topBg">
					<input placeholder="请输入分配资金" name="input" type="number"></input>
					<text class="text-sm text-grey">USTD</text>
				</view>
			</view>
			<view class="padding-lr-sm margin-bottom-sm">
				<text class="inputName text-bold text-df">杠杆</text>
				<view class="cu-form-group radius margin-top-xs topBg">
					<input placeholder="请输入杠杆" name="input" type="number"></input>
				</view>
			</view>
			<view class="padding-lr-sm margin-bottom-sm">
				<text class="inputName text-bold text-df">仓位比例</text>
				<view class="cu-form-group radius margin-top-xs topBg">
					<input placeholder="请输入仓位比例" name="input" type="number"></input>
				</view>
			</view>
			<view class="padding-lr-sm margin-bottom-sm">
				<text class="inputName text-bold text-df">保证金模式</text>
				<view class="cu-form-group radius margin-top-xs topBg">
					<input disabled  v-model="type1[type1Index]" name="input"></input>
					<picker @change="type1Change" :value="type1Index" :range="type1">
						<view class="picker text-grey text-sm">
							全仓
						</view>
					</picker>
				</view>
			</view>
			<view class="padding-lr-sm margin-bottom-sm">
				<text class="inputName text-bold text-df">交易资金模式</text>
				<view class="cu-form-group radius margin-top-xs topBg">
					<input disabled placeholder="请输入仓位比例" v-model="type2[type2Index]" name="input"></input>
					<picker @change="type2Change" :value="type2Index" :range="type2">
						<view class="picker text-grey text-sm">
							固定(每次仓位相同)
						</view>
					</picker>
				</view>
			</view>
			
			<view class="flex flex-direction padding-lr">
				<button class="cu-btn bg-yellow margin-tb-sm lg text-bold">开始量化</button>
			</view>
			
		</view>

	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				type1Index: 0,
				type1:['全仓','逐仓'],
				type2Index: 0,
				type2:['固定(每次仓位相同)','动态滚仓(仓位随盈亏等比例调整)']
			}
		},
		onShow() {

		},
		onLoad(option) {
			
		},
		methods: {
			type1Change(e){
				this.type1Index = e.detail.value;
			},
			type2Change(e){
				this.type2Index = e.detail.value;
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
	.viewBox{
		background-color: #f5f5f5;
		color: #333;
	}
	.pageBg{
		background-color: #ffffff;
	}
	.container {
		padding-bottom: 90rpx;
	}
	.topBox {
		position: relative;
		width: 100%;
		height: 380rpx;
		background: linear-gradient(to bottom, #020036, #101014);
		padding-top: 160rpx;
		margin-bottom: 60rpx;
	}
	.topMainBox{
		display: flex;
		width: 690rpx;
		height: 210rpx;
		position: absolute;
		bottom: -40rpx;
		left: 30rpx;
		border-radius: 18rpx;
	}
	.isHead{
		position: absolute;
		top: -20rpx;
		left: 6rpx;
	}
	.isName{
		position: absolute;
		left: 150rpx;
	}
	.topImg {
		width: 750rpx;
		position: absolute;
		top: 0;
	}
	.inputName:before{
		display: inline-block;
		margin-right: 5rpx;
		color: #ff4d4f;
		font-size: 28rpx;
		font-family: SimSun,sans-serif;
		line-height: 1;
		content: "*";
	}
	.cu-form-group+.cu-form-group{
		border: none;
	}
	.cu-form-group{
		min-height: 80rpx;
	}
	.cu-form-group uni-input{
		font-size: 28rpx;
	}
	.topTitle {
		width: 100%;
		position: absolute;
		top: 0;
		color: #ffffff;
	}
	.cu-form-group uni-picker .picker{
		font-size: 24rpx;
	}
	.cu-form-group uni-picker::after{
		font-family: cuIcon;
		display: block;
		content: "\e79b";
		position: absolute;
		font-size: 56rpx;
		color: #8799a3;
		line-height: 50px;
		width: 30px;
		text-align: center;
		top: 0rpx;
		bottom: 0;
		right: -10rpx;
		margin: auto;
	}

	.bg-cyan {
		background-color: rgba(28, 187, 180, 0.2);
		color: #1cbbb4;
		font-size: 20rpx !important;
	}
</style>