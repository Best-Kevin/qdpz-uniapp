<template>
	<view class="contaier">
		<cu-custom bgColor="bg-gdBlue" :isBack="true">
			<block slot="backText">返回</block>
			<block class="text-lg" slot="content">结算</block>
		</cu-custom>
		<view class="topFixed" style="position: fixed;z-index: 9999;background-color: #FFFFFF;">
			<view class="topInputBox">
				<input class="topInput" type="text" placeholder="搜索"/>
			</view>
			
			<scroll-view scroll-x class="nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in navData" :key="index" @tap="tabSelect" :data-id="index">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
		</view>
		<view style="margin-top: 210rpx;">
			<!-- 左右布局 -->
			<view @click="goIndex()" class="cardBox" v-for="(item,index) in plansList" :key="index">
				<view style="position: absolute;right: 0; top: 0;" class='cu-tag sm radius light' :class="item.type == 1 ? 'bg-green': 'bg-blue' ">{{item.type == 1 ? '已通过': '审批中' }}</view>
				<view class="cardTitle">{{item.title}}</view>
				<view class="cu-list menu">
					<view class="cu-item">
						<view class="content">
							<text class="text-grey">供应商单位：</text>
						</view>
						<view class="action">
							<text class="text-balck text-df">{{item.supplier}}</text>
						</view>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="text-grey">要求供应时间：</text>
						</view>
						<view class="action">
							<text class="text-balck text-df">{{item.supplyTime}}</text>
						</view>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="text-grey">普通混凝土C30：</text>
						</view>
						<view class="action">
							<text class="text-balck text-df">{{item.c30}}</text>
						</view>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="text-grey">普通混凝土C35：</text>
						</view>
						<view class="action">
							<text class="text-balck text-df">{{item.c35}}</text>
						</view>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="text-grey">总计预算量：</text>
						</view>
						<view class="action">
							<text class="text-balck text-df">{{item.total}}</text>
						</view>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="text-grey">计划浇筑部位：</text>
						</view>
						<view class="action">
							<text class="text-balck text-df">{{item.position}}</text>
						</view>
					</view>
				</view>
				<view class="fgLine"></view>
				<view class="text-grey text-sm">{{item.time}} 来自：{{item.people}}</view>
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
					type: 1,
					supplier: '佛山市金鸿混凝土有限公司',
					supplyTime: '2021-06-21 10:33:12',
					c30: '20m³',
					c35: '15m³',
					total: '35m³',
					position: '承台',
					time: '2020-06-15',
					people: '技术部-李富贵'
				},
				{
					title: '33#公寓外墙浇筑采购计划',
					type: 2,
					supplier: '佛山市前端混凝土有限公司',
					supplyTime: '2021-08-21 10:33:12',
					c30: '20m³',
					c35: '15m³',
					total: '35m³',
					position: '承台',
					time: '2020-06-15',
					people: '技术部-李富贵'
				},
				{
					title: '33#公寓外墙浇筑采购计划',
					type: 2,
					supplier: '佛山市前端混凝土有限公司',
					supplyTime: '2021-08-21 10:33:12',
					c30: '20m³',
					c35: '15m³',
					total: '35m³',
					position: '承台',
					time: '2020-06-15',
					people: '技术部-李富贵'
				},
				{
					title: '33#公寓外墙浇筑采购计划',
					type: 2,
					supplier: '佛山市前端混凝土有限公司',
					supplyTime: '2021-08-21 10:33:12',
					c30: '20m³',
					c35: '15m³',
					total: '35m³',
					position: '承台',
					time: '2020-06-15',
					people: '技术部-李富贵'
				},
				{
					title: '33#公寓外墙浇筑采购计划',
					type: 2,
					supplier: '佛山市前端混凝土有限公司',
					supplyTime: '2021-08-21 10:33:12',
					c30: '20m³',
					c35: '15m³',
					total: '35m³',
					position: '承台',
					time: '2020-06-15',
					people: '技术部-李富贵'
				}],
				TabCur: 0,
				scrollLeft: 0,
				navData:[
					{
						name: '全部',
						id: 0
					},
					{
						name: '审批中',
						id: 1
					},
					{
						name: '已通过',
						id: 2
					},
					{
						name: '未通过',
						id: 3
					}
				]
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			goIndex(){
				uni.navigateTo({
					url:'index'
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
	
	.fgLine{
		width: 100%;
		height: 1px;
		background-color: #DDDDDD;
		margin: 20rpx auto;
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
	.topInputBox{
		background: linear-gradient(to bottom, #2695FE, #F0F2F6);
		width: 750rpx;
		height: 100rpx;
		padding-top: 10rpx;
		.topInput{
			width: 680rpx;
			height: 72rpx;
			line-height: 72rpx;
			margin: 0 auto;
			background: #fff;
			border-radius: 10rpx;
			text-align: center;
		}
	}
</style>
