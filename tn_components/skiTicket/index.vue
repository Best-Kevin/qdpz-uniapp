<!-- 特惠雪票 -->
<template>
	<view style="padding-bottom: 150rpx;">
		<view class="mainBox bg-white">
			<view @click="goBack" class="text-xl text-bold" style="position: fixed; left: 40rpx;top: 100rpx;color: #000000;">
				<text class="cuIcon-back"></text>
			</view>
			<view class="scBox padding">
				<view class="scTitle bg-gradual-blue">· 使用须知 ·</view>
				<view class="margin-top">
					<view class="text-blue text-df text-bold">趣滑用户平台下单</view>
					<view class="text-black text-smdf margin-top-xxs">点击下方按钮购票，使用【趣滑小程序】下单后，凭商家短信凭证码换票入园</view>
				</view>
				<view class="margin-top-sm">
					<view class="text-blue text-df text-bold">预定限制</view>
					<view class="text-black text-smdf margin-top-xxs">本产品仅限成人预定，儿童请自行到华山冰雪世界滑雪场购票</view>
				</view>
				<view class="margin-top-sm">
					<view class="text-blue text-df text-bold">门票说明</view>
					<view class="text-black text-smdf margin-top-xxs">滑雪票含：雪鞋、雪板、雪仗，节假日不可用</view>
				</view>
				<view class="margin-top-sm">
					<view class="text-blue text-df text-bold">使用时间</view>
					<view class="text-black text-smdf margin-top-xxs">2022-04-23 至 2022-12-31</view>
				</view>
			</view>
		</view>
		
		<!-- 底部按钮 -->
		<view class="bottomBox" style="z-index: 98;">
			<view class="priceNum">
				<image class="checkOutLogo" src="https://cdn.zhoukaiwen.com/qh_logo_tm2.png" mode="widthFix"></image>
				<view class="checkOutName text-smdf text-shadow text-bold"></view>
			</view>
			<view @tap="showModal" data-target="bottomModal" class="checkOut">选择购买</view>
		</view>
		
		
		<!-- 底部弹窗 -->
		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''" @tap="hideModal" style="z-index: 99;">
			<view class="cu-dialog" @tap.stop="" style="position: relative;padding-top: 15rpx;">
				<view class="modalColseBtn text-blue" @tap="hideModal">
					<text class="cuIcon-close"></text>
				</view>
				<view class="cu-card article no-card">
					<view class="cu-item padding-top-sm shadow solid-bottom"
						style="padding-bottom: 20rpx !important;">
						<view class="content">
							<image src="https://cdn.zhoukaiwen.com/qh_th_share2.jpg" mode="aspectFill"></image>
							<view class="desc padding-tb-xs">
								<view class="text-cut text-black text-bold text-df flex justify-between padding-right-xs">
									华山冰雪世界
								</view>
								<view v-if="ticketIndex == -1" class="text-sm text-left text-blue">
									请选择票种
								</view>
								<view v-if="ticketIndex != -1" class="text-sm text-left text-blue">
									<text class="text-grey margin-right-sm">原价：<text style="text-decoration:line-through;">￥{{ticketList[ticketIndex].Yprice ? ticketList[ticketIndex].Yprice : '0'}}</text></text>
									优惠价：￥<text class="text-bold text-lgx">{{ticketList[ticketIndex].price ? ticketList[ticketIndex].price : '0'}}</text>
								</view>
								
								<view v-if="ticketIndex == -1" class="text-left text-sm">
									请选择：<view class="cu-tag bg-blue light sm round" style="margin-top: -6rpx;">票种</view>
								</view>
								<view v-if="ticketIndex != -1" class="text-left text-sm">
									已选：<view class="cu-tag bg-blue light sm round" style="margin-top: -6rpx;">{{ticketList[ticketIndex].name}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-bar bg-white">
					<view class="action">
						<text class="cuIcon-titles text-blue"></text>
						<text class="text-lg text-bold">票种</text>
					</view>
				</view>
				<view class="ticketBox padding-lr bg-white text-left">
					<view @click="ticketBtn(index)" :class="ticketIndex == index? 'bg-blue':'' " v-for="(item,index) in ticketList" :key="index" class='cu-tag radius'>{{item.name}}</view>
				</view>
				<view v-if="ticketList[ticketIndex].state" class="text-grey padding-lr padding-tb-xs text-left">使用说明：{{ticketList[ticketIndex].state}}</view>
				<view class="cu-bar bg-white">
					<view class="action">
						<text class="cuIcon-titles text-blue"></text>
						<text class="text-lg text-bold">购买数量</text>
					</view>
					<view class="action">
						<u-number-box v-model="value" :min="1" :max="100"></u-number-box>
					</view>
				</view>
				<view class="padding padding-bottom-lg bg-white">
					<view @click="goPay" class="bg-blue padding-sm radius text-center">
						立即购买
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				ticketIndex: -1,
				ticketList:[
					{
						name:'周末票',
						Yprice: '209',
						price: '199',
						state: '仅限周末使用，非节假日'
					},
					{
						name:'周内票',
						Yprice: '139',
						price: '119',
						state: '仅限周内使用，非节假日'
					},
					{
						name:'开业特惠票',
						Yprice: '109',
						price: '88',
						state: '2020-11-15 至 2020-12-31内使用'
					}
				],
				pageHeight: '',
				modalName: null,
				value: 1
			}
		},
		onLoad() {
			// var pageWidth = uni.getSystemInfoSync().windowWidth;
			// this.pageHeight = 3462 / (1600 / pageWidth)
			// console.log(pageWidth)
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			ticketBtn(index){
				if(this.ticketIndex == index){
					return this.ticketIndex = -1;
				}
				this.ticketIndex = index;
			},
			goPay(){
				uni.navigateTo({
					url: 'pay'
				})
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	};
</script>

<style>
	page{
		background: #D8F2FF !important;
	}
</style>

<style lang="scss" scoped>
	
	.ticketBox{
		.cu-tag {
			margin: 0 30rpx 20rpx 0 !important;
		}
	}
	
	.bottomBox {
		width: 710rpx;
		height: 90rpx;
		border-radius: 100rpx;
		position: fixed;
		bottom: 30rpx;
		left: 20rpx;
		background-image: linear-gradient(45deg, #222222, #333333);
		color: #ffffff;
		padding: 0 20rpx 0 23rpx;
		// display: flex;
		// justify-content: space-between;
		z-index: 9999;
	
		.priceNum {
			width: 160rpx;
			height: 90rpx;
			line-height: 72rpx;
			float: left;
			padding: 10rpx 6rpx;
			position: relative;
			.checkOutLogo {
				width: 130rpx;
				position: absolute;
				bottom: 0rpx;
				left: 0rpx;
				border-radius: 0 0 0 14rpx;
			}
			.checkOutName{
				position: absolute;
				bottom: 28rpx;
				right: -38rpx;
				color: #FFECEA;
			}
		}
	
		.checkOut {
			float: right;
			width: 490rpx;
			text-align: center;
			background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
			color: #ffffff;
			height: 60rpx;
			line-height: 60rpx;
			padding: 0 25rpx;
			border-radius: 100rpx;
			margin-top: 15rpx;
		}
	}
	
	.modalColseBtn{
		z-index: 999;
		position: absolute;
		right: 26rpx;
		top: 20rpx;
		font-size: 36rpx;
		font-weight: 600;
	}
	.mainBox {
		background: url('https://cdn.zhoukaiwen.com/qh_th_bg13.jpg') no-repeat;
		width: 750rpx;
		height: 1420rpx;
		background-size: cover;
		box-sizing: border-box;
		padding-top: 700rpx;
		position: relative;
		.scBox {
			width: 670rpx;
			// height: 500rpx;
			position: absolute;
			top: 900rpx;
			background: rgba(255, 255, 255, .5);
			left: 40rpx;
			border-radius: 20rpx;
			
			.scTitle {
				width: 220rpx;
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				border-radius: 120rpx;
				color: #fff;
				font-weight: 900;
				font-size: 28rpx;
				position: absolute;
				left: calc(50% - 110upx);
				top: -25rpx;
			}
		}
	}
</style>
