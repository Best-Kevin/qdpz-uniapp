<template>
	<view class="mainBox bg-white">
		<view class="text-xxl" style="height: 486rpx; position: relative;">
			<image src='https://cdn.zhoukaiwen.com/login_top2.jpg' mode='widthFix' class='png' style='width:100%;height:486rpx'></image>
			<text @click="goBack" class="cuIcon-back" style="position: absolute; left: 40rpx;top: 100rpx;color: #000000;"></text>
			<image class="logoImg" src="../../static/logo.png"></image>
			<view class="logoName text-white text-bold text-xl">前端铺子</view>
		</view>
		
		<view class="padding text-center margin-top-xl">
			<view class="padding-xl radius shadow-warp bg-white margin-top">
				<view class="text-bold text-black text-xl">前端铺子</view>
				<view class="describe margin-top-sm">这是一段描述，「前端铺子」授权登录页面，UI模仿图鸟UI，感谢作者开源。</view>
				<button class="margin-top-lg bg-gradual-blue" type="primary" lang="zh_CN" @click="login()">授权登录</button>
				<button class="margin-top bg-gradual-red" type="warn" lang="zh_CN" @click="goBack()">我再看看</button>
				<view class="describe margin-top text-gray">授权信息仅用于测试小程序登录</view>
				<view class="describe margin-top-xs text-gray">头像和昵称仅用于测试数功能展示</view>
			</view>
		</view>
		
			
		
		<view class="bottom_bg">
			<image src="https://cdn.zhoukaiwen.com/login_bottom_bg.jpg" mode="widthFix"></image>
		</view>
		
	</view>
</template>

<script>
	import request from '@/common/request.js';
	import QQMapWX from "@/common/qqmap-wx-jssdk.js";
	export default {
		data() {
			return {
				encryptedData: '',
				phoneIv: ''
			};
		},
		onLoad() {
		},
		methods: {
			getUserProfile(){
				var that = this;
				return new Promise((resolve, reject) => {
					uni.getUserProfile({
						desc: '获取您的微信信息以授权小程序',
						success: userRes => {
							console.log('getUserProfile-res', userRes);
							resolve(userRes);
							that.UserProfileRes = userRes
						},
						fail: userErr => {
							uni.showToast({
								title: '授权失败',
								icon: 'error'
							});
							console.log('getUserProfile-err', userErr);
							reject(userErr);
						}
					});
				});
			},
			getLoginCode(){
				var that = this;
				return new Promise((resolve, reject) => {
					uni.login({
						provider: 'weixin',
						success: loginRes => {
							console.log('loginRes', loginRes);
							that.loginRes = loginRes
							resolve(loginRes);
						}
					});
				});
			},
			login(){
				var that = this;
				uni.showLoading({
					title: '加载中'
				})
				let userProFile = this.getUserProfile();
				let loginCode = this.getLoginCode();
				loginCode.then(code => {
						return code;
					}).then(logCode => {
						return new Promise((resolve, reject) => {
							userProFile.then(res => {				
									console.log('请求数据解析');
									uni.hideLoading();
								})
								.catch(err => {
									reject(err);
								});
						});
					})
					.then(res => {
						console.log('promise-res', res);
					})
					.catch(err => {
						console.log('userProfile-err', err);
					});
			},
			goBack(){
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mainBox{
		height: 100vh;
		.logoImg{
			width: 140rpx;
			height: 140rpx;
			border-radius: 50%;
			position: absolute;
			left: 50%;
			margin-left: -70rpx;
			top: 170rpx;
			display: block;
		}
		.logoName{
			width: 750rpx;
			position: absolute;
			left: 0;
			top: 340rpx;
			text-align: center;
		}
	}
	
	.bottom_bg{
		width: 750rpx;
		position: fixed;
		bottom: 0;
		image{
			width: 750rpx;
		}
	}
</style>
