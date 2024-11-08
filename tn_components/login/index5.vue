<!-- 顶部蓝色 -->
<template>
	<view class="contaier">
		<view class="top-bg">
			<view class="text-white text-bold text-xxxl">前端铺子</view>
			<view class="margin-top-xs text-white">欢迎使用，请先登录</view>
		</view>
		
		<view class="input-box padding-lr">
			<form>
				<view class="cu-form-group margin-top">
					<view class="title">邮件</view>
					<input placeholder="两字短标题" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">输入框</view>
					<input placeholder="三字标题" name="input"></input>
				</view>
				<view class="cu-form-group solid-bottom">
					<view class="title">验证码</view>
					<input placeholder="输入框带个按钮" name="input"></input>
					<button class='cu-btn bg-login-zl shadow'>验证码</button>
				</view>
			</form>
		</view>
		
		<view class="padding margin-top-xs">
			<button class="cu-btn block round bg-login-zl margin-tb-sm lg">立即登录</button>
			<view class="text-gray flex justify-between padding-lr-sm">
				<text>注册账号</text>
				<text>忘记密码</text>
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

		}
	};
</script>
<style lang="scss" scoped>
	.contaier{
		height: 100vh;
		background-color: #ffffff;
	}
	.top-bg{
		width: 750rpx;
		background-image: url(https://cdn.zhoukaiwen.com/head-bg.png);
		height: 480rpx;
		background-size: 100%;
		background-repeat: no-repeat;
		text-align: center;
		padding-top: 170rpx;
	}
	.bg-login-zl {
		background-image: linear-gradient(45deg, #727CFB, #46D0ED);
		color: #ffffff;
	}
</style>
