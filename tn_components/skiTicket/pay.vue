<!-- 核对订单 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">确认订单</block>
		</cu-custom>
		
		<u-notice-bar mode="horizontal" type="primary" :list="list"></u-notice-bar>
		
		<view class="cu-card dynamic isCard" >
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar margin-bottom-xs">
					<view class="cu-item">
						<view class="cu-avatar radius lg" style="background-image:url(https://qhskis-1251622451.cos.ap-chongqing.myqcloud.com/2022-04-19/small_d97e39992908dd2d2f3fd62de71ab97859873a29.png);"></view>
						<view class="content flex-sub">
							<view>华山滑雪场</view>
							<view class="text-gray text-sm flex justify-between">
								周末票
							</view>
						</view>
						<view class="action text-blue text-bold text-dflg" style="width: 150rpx;">
							￥78元
						</view>
					</view>
				</view>
				<view class="padding-lr">
					<view class="cu-form-group text-smdf" style="min-height: 85rpx; padding: 0;">
						<view class="title">姓名<text class="text-red text-bold">*</text></view>
						<input class="text-right" placeholder="请输入姓名" name="input"></input>
					</view>
					<view class="cu-form-group text-df" style="min-height: 85rpx; padding: 0;">
						<view class="title">联系方式<text class="text-red">*</text></view>
						<input class="text-right" placeholder="请输入您的电话" name="input"></input>
					</view>
				</view>
				<view class="text-gray text-sm padding solid-top">
					说明：提交前请确认手机号无误，支付后将收到商家短信凭证码。
				</view>
			</view>
		</view>
		
		<view class="bg-white padding-lr-sm padding-top-sm margin-top-sm cu-list menu sm-border card-menu">
			<text class="text-bold text-black text-lg">费用</text>
			
			<view class="cu-item" style="min-height: 90rpx; padding: 0;">
				<view class="content">
					<text class="text-grey text-smdf">购票数量</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">1张</text>
				</view>
			</view>
			
			<view class="cu-item" style="min-height: 90rpx; padding: 0;">
				<view class="content">
					<text class="text-grey text-smdf">订单金额</text>
				</view>
				<view class="action">
					<text class="text-black text-bold text-smdf">129.9元</text>
				</view>
			</view>
			
			<view class="cu-item" style="min-height: 90rpx; padding: 0;">
				<view class="content">
					<text class="text-grey text-smdf">优惠卷</text>
				</view>
				<view class="action">
					<text class="text-gray text-sm margin-right-xs">首次购买</text>
					<text class="text-orange text-bold text-smdf ">-10元</text>
				</view>
			</view>
		</view>
		
		<view class="bg-white padding-lr-sm cu-list menu sm-border card-menu" style="margin-top: 20rpx !important;">
			<view class="cu-item" style="padding: 0;">
				<view class="content">
					<text class="text-grey text-smdf">总计</text>
				</view>
				<view class="action">
					<text class="text-black text-bold text-df margin-right-xs">平台优惠</text>
					<text class="text-red text-smdf margin-right">￥10.00</text>
					<text class="text-black text-df margin-right-xs">
						小计
					</text>
					<text class="text-black text-bold text-lg">
						￥119.9
					</text>
					<view class="text-right text-xs text-orange margin-tb-xs">实付已满100元，返100趣滑积分</view>
				</view>
			</view>
		</view>
		
		<view class="margin-lr margin-top-sm text-gray text-sm">
			下载说明：支付成功后，订单信息可前往【我的】-【我的订单】中查看
		</view>
		
		<view class="cu-bar bg-white tabbar border shop">
			<view class="action text-red" style="width: 60% !important;">
				<text class="text-df">待支付：</text>
				<text class="text-lg text-bold">￥119.9</text>
			</view>
			<view @click="payment()" class="bg-green submit text-lg">去支付</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					'使用说明：使用【趣滑小程序】下单后，凭商家短信凭证码换票入园哦~'
				],
			};
		},
		methods: {
			payment(){
				uni.showToast({
					title: '请调用支付接口',
					duration: 1400,
					icon: 'none'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shop{
		position: fixed; 
		bottom: 0;
		width: 100%;
	}
</style>

