<template>
	<view class="container">
		<!-- <view class="text-xxl" style="position: fixed; left: 40rpx;top: 100rpx;color: black;z-index: 99;">
			<text @click="goBack" class="cuIcon-back" ></text>
		</view> -->
		
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">优选好物</block>
		</cu-custom>
		
		<!-- banner -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" style="height: 450rpx;" circular="true" indicator-dots="true" autoplay="true" interval="3500"
						duration="600">
						<swiper-item class="swiper-list" v-for="(item, index) in bannerList" :key="index">
							<view class="swiper-item uni-bg-red">
								<image class="swiper-img" :src="item.imageUrl" mode="aspectFill"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		
		<view class="padding radius bg-white">
			<view class="text-bold text-lg text-black">nitro滑雪鞋 2022-2023雪季新款 step on快穿 23雪季新款 step on快穿</view>
			<view class="margin-tb-sm">
				<view class='bg-blue cu-tag radius light sm margin-right-xs'>免押金</view>
				<view class='bg-cyan cu-tag radius light sm'>99新</view>
			</view>
			<view class="text-gray text-sm">
				<text class="margin-right-xs">242人租过</text>
				<text>18人收藏</text>
			</view>
			
			<view class="margin-tb-sm" style="position: relative;">
				<text class="text-orange text-bold text-xxl margin-right-xs">￥9.00 / </text>
				<text class="text-orange text-df margin-right-xs">日</text>
				<text class="text-gray text-sm" style="text-decoration:line-through;">市场价：￥3325</text>
				
				<view class="scoreBox">
					<text class="text-yellow text-xl text-bold">4.8</text>
					<view class="text-yellow text-xs flex justify-around">
						<uni-text class="text-yellow cuIcon-favorfill"></uni-text>
						<uni-text class="text-yellow cuIcon-favorfill"></uni-text>
						<uni-text class="text-yellow cuIcon-favorfill"></uni-text>
						<uni-text class="text-yellow cuIcon-favorfill"></uni-text>
						<uni-text class="text-yellow cuIcon-favorfill"></uni-text>
					</view>
					<text class="text-sm text-bold" style="color: #666666;">物品评分</text>
				</view>
			</view>
			
			<view class="bg-white">
				<view class="flex justify-around padding-sm solid serviceBox">
					<view class="text-gray">
						<image src='https://cdn.zhoukaiwen.com/zhengpin.svg' mode='widthFix'></image>
						<text>正品保证</text>
					</view>
					<view class="text-gray">
						<image src='https://cdn.zhoukaiwen.com/qianggou.svg' mode='widthFix'></image>
						<text>租期自由</text>
					</view>
					<view class="text-gray">
						<image src='https://cdn.zhoukaiwen.com/shandan.svg' mode='widthFix'></image>
						<text>质量保证</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="bg-white padding margin-top-sm">
			<text class="text-bold text-black">租赁流程</text>
			<view class="flex justify-between margin">
				<view class="text-center text-gray" style="position: relative;">
					<view class="procedureIcon">
						<uni-text class="cuIcon-shop"></uni-text>
					</view>
					<view class="margin-top-xs">挑选</view>
					<image class="rightIcon" src="https://cdn.zhoukaiwen.com/icon_right.svg" mode="widthFix"></image>
				</view>
				
				<view class="text-center text-gray" style="position: relative;">
					<view class="procedureIcon">
						<uni-text class="cuIcon-message"></uni-text>
					</view>
					<view class="margin-top-xs">沟通</view>
					<image class="rightIcon" src="https://cdn.zhoukaiwen.com/icon_right.svg" mode="widthFix"></image>
				</view>
				
				<view class="text-center text-gray" style="position: relative;">
					<view class="procedureIcon">
						<uni-text class="cuIcon-pick"></uni-text>
					</view>
					<view class="margin-top-xs">取货</view>
					<image class="rightIcon" src="https://cdn.zhoukaiwen.com/icon_right.svg" mode="widthFix"></image>
				</view>
				
				<view class="text-center text-gray" style="position: relative;">
					<view class="procedureIcon">
						<uni-text class="cuIcon-goods"></uni-text>
					</view>
					<view class="margin-top-xs">归还</view>
				</view>
			</view>
		</view>
		
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">物品信息</text>
				<text class="text-ABC text-blue">information</text>
			</view>
		</view>
		<view class="bg-white padding-lr padding-bottom text-df">
			<view class="padding-xs">
				<text class="text-grey" style="display: inline-block; width: 130rpx;letter-spacing: 1rpx;">品牌型号</text>
				<text class="text-black text-bold">burton Step on ION</text>
			</view>
			<view class="padding-xs">
				<text class="text-grey" style="display: inline-block; width: 130rpx;letter-spacing: 1rpx;">尺码</text>
				<text class="text-black text-bold">163</text>
			</view>
			<view class="padding-xs">
				<text class="text-grey" style="display: inline-block; width: 130rpx;letter-spacing: 1rpx;">成色</text>
				<text class="text-black text-bold">95新</text>
			</view>
			<view class="padding-xs">
				<text class="text-grey" style="display: inline-block; width: 130rpx;letter-spacing: 1rpx;">性别</text>
				<text class="text-black text-bold">男款</text>
			</view>
		</view>
		
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">细节图</text>
				<text class="text-ABC text-blue">Detail</text>
			</view>
		</view>
		<view class="bg-white padding">
			<view class="padding">
				<image src="https://zhoukaiwen.com/img/qh/dior.jpg" style="width: 100%;" mode="widthFix"></image>
			</view>
		</view>
		
		
		<view style="height: 150rpx; width: 1rpx;"></view>
		
		<view class="cu-bar bg-white tabbar border shop solid-top" style="position: fixed; bottom: 0;width: 100%; z-index: 9999;">
			<button class="action" open-type="share">
				<view class="cuIcon-share text-green">
					<view class="cu-tag badge"></view>
				</view> 分享
			</button>
			<view class="action text-orange">
				<view class="cuIcon-favorfill"></view> 已收藏
			</view>
			<view class="btn-group">
				<button open-type="contact" style="width: 80%;" class="cu-btn bg-gradual-blue round shadow-blur">沟通预约</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				bannerList: [{
						imageUrl: 'https://zhoukaiwen.com/img/qh/dior.jpg'
					},
					{
						imageUrl: 'https://zhoukaiwen.com/img/qh/dior.jpg'
					}
				]
			}
		},
		onLoad(option) {
			console.log(option.id)
		},
		onShow() {
			var that = this;
		},
		mounted() {
			
		},
		methods: {
			getData(id){
				let opts = {
					url: 'api/circle.Areas/info',
					method: 'get'
				};
				let params = {
					"circle_areas_id": id,
				}
				
				uni.showLoading({
					title: '加载中'
				})
				request.httpRequest(opts,params).then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.data.code == 200) {
						this.jlPplData = res.data.data;
					} else {
						uni.showToast({
							title: '数据错误！',
							icon: 'none',
							duration: 2000
						});
					}
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
	.swiper-box {
		flex: 1;
	}
	
	.swiper-item {
		height: 100%;
	}
	.scoreBox{
		position: absolute;
		right: 0;
		bottom: 0;
		width: 142rpx;
		height: 142rpx;
		border-radius: 20rpx;
		background-color: #f9f9f9;
		text-align: center;
		padding: 12rpx 10rpx;
		border: 3rpx solid #EEEEEE;
		display: flex;
		flex-flow: column;
		justify-content: space-between;
	}
	.serviceBox{
		border-radius: 25rpx;
		background-color: #f9f9f9; 
		margin: 30rpx auto 0;
		image{
			width: 42rpx;
			height: 42rpx;
			margin-right: 8rpx;
			vertical-align:middle;
			margin-top: -6rpx;
		}
	}
	.procedureIcon{
		width: 85rpx;
		height: 85rpx;
		line-height: 85rpx;
		text-align: center;
		border-radius: 50%;
		font-size: 48rpx;
		color: #666666;
		background-color: #EEEEEE;
	}
	.rightIcon{
		width: 36rpx;
		position: absolute;
		right: -38px;
		top: 25rpx;
	}
</style>
