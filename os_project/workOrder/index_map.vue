<template>
	<view class="contaier">
		<!-- 自定义顶部 -->
		<cu-custom bgColor="bg-gdBlue" :isBack="true">
			<block slot="backText"></block>
			<block class="text-lg" slot="content">粤A·3356D</block>
		</cu-custom>
		
		<view class="mapBox">
			<map id='map' :latitude="latitude" :longitude="longitude" :markers="covers" :style="{ width: '100%', height: mapHeight + 'px' }"
			 :scale="13" :polyline="polyline" style="height: 100%;">
			</map>
		</view>
		
		<!-- 左右布局 -->
		<view class="cardBox" v-for="(item,index) in plansList" :key="index">
			<view class="cardTitle">{{item.title}}</view>
			<view class="cu-list menu">
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">发货时间：</text>
					</view>
					<view class="action">
						<text class="text-balck text-df">{{item.time}}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">司机：</text>
					</view>
					<view class="action">
						<text class="text-balck text-df">李富贵</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">电话：</text>
					</view>
					<view class="action">
						<text class="text-balck text-df">18629559966</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">普通混凝土C30：</text>
					</view>
					<view class="action">
						<text class="text-balck text-df">30m³</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">收货人：</text>
					</view>
					<view class="action">
						<text class="text-balck text-df">张德彪</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">电话：</text>
					</view>
					<view class="action">
						<text class="text-balck text-df">18622553322</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">收货时间：</text>
					</view>
					<view class="action">
						<text class="text-balck text-df">{{item.time}}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">实际收货重量：</text>
					</view>
					<view class="action">
						<text class="text-balck text-df">30m³</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">实际偏差：</text>
					</view>
					<view class="action">
						<text class="text-balck text-df">1m³</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">阈值：</text>
					</view>
					<view class="action">
						<text class="text-balck text-df">{{item.time}}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">偏差结果：</text>
					</view>
					<view class="action">
						<text class="text-balck text-df">{{item.time}}</text>
					</view>
				</view>
			</view>
		</view>
		
		<view style="width: 1px; height: 50rpx;"></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				plansList:[{
					title: '32#公寓外墙浇筑采购计划',
					time: '2020-06-21 10:33:12',
				}],
				map:null,
				latitude: 34.263734,
				longitude: 108.934843,
			}
		},
		onReady() {
			// 创建map对象
			this.map = uni.createMapContext('map');
		},
		mounted() {
			
		},
		methods: {
			goIndex2(){
				uni.navigateTo({
					url:'index2'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.contaier{
		background-color: #F0F2F6;
	}
	.cardBox{
		width: 680rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		padding: 20rpx 25rpx;
		margin: 30rpx auto;
		position: relative;
		.cardTitle{
			color: #000000;
			font-size: 34rpx;
			font-weight: 500;
		}
	}
	
	
	.cu-list.menu>.cu-item {
		padding: 0 !important;
		min-height: 25rpx;
		margin-top: 16rpx !important;;
	}
	.cu-list+.cu-list {
	    margin: 0 !important;
	}
	.cu-list.menu>.cu-item .content {
	    font-size: 28rpx !important;
	}
	.cu-list.menu>.cu-item:after {
	    border: none;
	}
	.mapBox{
		width: 750rpx;
		height: 500rpx;
	}
</style>
