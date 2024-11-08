<template>
	<view class="contaier">
		<cu-custom class="navBox" bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">海报设计工具</block>
		</cu-custom>
		
		<view class="u-search-box">
			<view class="u-search-inner">
				<u-icon name="search" color="#909399" :size="28"></u-icon>
				<text class="u-search-text">搜索相关关键词如：西藏</text>
			</view>
		</view>
		
		<view class="cu-bar bg-white">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue">快捷入口</text>
				<text class="bg-blue"></text>
			</view>
		</view>
		
		<!-- 云盘图片 -->
		<scroll-view scroll-x="true" class="ypPicBox">
			<view class="ypItem" v-for="(item, index) in ypTemplate" :key="index">
				<image :src="item.src"></image>
				<view class="ypName">{{item.name}}</view>
			</view>
		</scroll-view>
		
		
		<view class="cu-bar bg-white margin-top">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue">海报类型</text>
				<text class="bg-blue"></text>
				<!-- last-child选择器-->
			</view>
			<view class="padding">
				<text>查看全部</text>
				<text class='cuIcon-right'></text>
			</view>
		</view>
		
		<scroll-view scroll-x="true" class="kite-classify-scroll">
			<view class="kite-classify-cell shadow margin-xs" v-for="(item, index) in curriculum" :key="index" @longpress="seeImg(item.image)" @click="editImg(item.id,item.name)">
				<!-- <u-lazy-load threshold="-450" border-radius="10" :image="item.url" :index="index"></u-lazy-load> -->
				<image :src="item.url" mode="scaleToFill"></image>
				<text class="demo-price">测试免费</text>
				<view class="demo-title">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		
		<view class="cu-bar bg-white margin-top">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue">海报类型2</text>
				<text class="bg-blue"></text>
				<!-- last-child选择器-->
			</view>
			<view class="padding">
				<text>查看全部</text>
				<text class='cuIcon-right'></text>
			</view>
		</view>
		
		<scroll-view scroll-x="true" class="kite-classify-scroll">
			<view class="kite-classify-cell shadow margin-xs" v-for="(item, index) in curriculum" :key="index"  @longpress="seeImg(item.image)" @click="editImg(item.id,item.name)">
				<image :src="item.url" mode="scaleToFill"></image>
				<text class="demo-price">测试免费</text>
				<view class="demo-title">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				curriculum: [{
						name: '宅家学IT - 海报设计',
						shop: '3元',
						type: '最新免费模板',
						image: 'https://zhoukaiwen.com/img/Design/poster/zjx_hb.png'
					},
				],
				ypTemplate: [{
					name: '迎新春',
					src: 'https://zhoukaiwen.com/img/Design/logo/psketch1.png',
				},
				{
					name: '邀请函',
					src: 'https://zhoukaiwen.com/img/Design/logo/psketch2.png',
				},
				{
					name: '电商模版',
					src: 'https://zhoukaiwen.com/img/Design/logo/psketch3.png',
				},
				{
					name: '人才招聘',
					src: 'https://zhoukaiwen.com/img/Design/logo/psketch4.png',
				},
				{
					name: '餐饮美食',
					src: 'https://zhoukaiwen.com/img/Design/logo/psketch7.png',
				}]
			}
		},
		computed: {
			
		},
		onLoad() {
			this.getData();
		},
		methods: {
			getData(){
				console.log('数据加载')
				let opts = {
					type: 2, 	//1为数据接口；2为静态资源请求
					url: 'json/posterListX.json',
					method: 'get'
				};
				uni.showLoading({
					title: '加载中'
				})
				request.httpRequest(opts).then(res => {
					console.log(res);
					uni.hideLoading();
					if(res.statusCode == 200){
						this.curriculum = res.data.data;
					}
				});
			},
			seeImg(imgUrl){
				// console.log(imgUrl)
				// 预览图片
				uni.previewImage({
					urls: [imgUrl],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							// console.log('okokok');
						},
						fail: function(err) {
							// console.log('err');
						}
					}
				});
			},
			editImg(id,name){
				uni.navigateTo({
					url: 'posterImg?id='+id+'&name='+name
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ypPicBox{
		background-color: #FFFFFF;
		width: 100%;
		padding: 10rpx 10rpx 20rpx 10rpx;
		overflow: hidden;
		white-space: nowrap;
		.ypItem{
			display: inline-block;
			width: 150rpx;
			margin: 0 20rpx;
			image{
				width: 150rpx;
				height: 150rpx;
				border-radius: 12rpx;
			}
			.ypName{
				width: 150rpx;
				height: 40rpx;
				padding-top: 10rpx;
				line-height: 40rpx;
				text-align: center;
				font-weight: 500;
			}
		}
	}
	.u-search-box {
		padding: 18rpx 30rpx;
	}
	
	.u-search-inner {
		background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 16rpx;
	}
	
	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}
	
	
	// 横滑海报
	.kite-classify-scroll {
		width: 100%;
		padding: 10rpx;
		overflow: hidden;
		white-space: nowrap;
		background-color: #ffffff;
	}
	.kite-classify-cell {
		display: inline-block;
		width: 280rpx;
		border-radius: 10rpx;
		overflow: hidden;
		position: relative;
	}
	.demo-price{
		position: absolute;
		right: 20rpx;
		top: 20rpx;
		background: rgba(0,0,0,.5);
		padding: 8rpx 12rpx;
		border-radius: 10rpx;
		color: #EEEEEE;
		font-size: 22rpx;
	}
	.demo-title {
		width: 100%;
		font-size: 26rpx;
		position: absolute;
		bottom: 0rpx;
		left: 0rpx;
		background: rgba(0,0,0,.5);
		padding: 12rpx;
		text-align: center;
		color: #EEEEEE;
		overflow: hidden;		/*超出部分隐藏*/
		white-space: nowrap;	/*不换行*/
		text-overflow:ellipsis;	/*超出部分文字以...显示*/
	}
	.demo-tag {
		padding: 10rpx;
		display: flex;
		justify-content: space-around;
	}
	
	.demo-tag-owner {
		background-color: $u-type-primary;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}
	
	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}
</style>
