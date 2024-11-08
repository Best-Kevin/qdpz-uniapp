<template>
	<view class="contaier">
		<!-- 左右布局 -->
		<view class="cardBox">
			<view class="cardTitle">计划信息</view>
			<view class="fgLine"></view>
			<view class="cu-list menu" v-for="(item,index) in ordersList" :key="index">
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">{{item.title}}</text>
					</view>
					<view class="action">
						<text class="text-balck text-df">{{item.content}}</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 左右布局 -->
		<view class="cardBox" v-for="(item,index) in plansList" :key="index">
			<view class="cardTitle">{{item.title}}</view>
			<view class="fgLine"></view>
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
		</view>
		
		<!-- 时间轴 -->
		<view class="cardBox">
			<view class="cardTitle">审批流程</view>
			<view class="fgLine"></view>
			<view class="cu-timeline">
				<view class="cu-time">发起申请</view>
				<view class="cu-item text-blue">
					<view class="margin-bottom-xs">
						<text class="text-black">工程部-李富贵</text>
					</view>
					<view class="text-gray text-sm">
						2021/05/16 12:33:31
					</view>
				</view>
				<view class="cu-time">审批人</view>
				<view class="cu-item text-blue">
					<view class="margin-bottom-xs">
						<text class="text-black">工程部-李富贵</text>
						<view class='cu-tag bg-green sm margin-left-xs'>已通过</view>
					</view>
					<view class="text-gray text-sm">
						2021/05/16 12:33:31
					</view>
				</view>
				<view class="cu-time">审批人</view>
				<view class="cu-item text-blue">
					<view class="margin-bottom-xs">
						<text class="text-black">项目经理-王亮</text>
						<view class='cu-tag bg-blue sm margin-left-xs'>审核中</view>
					</view>
					<view class="text-gray text-sm">
						2021/05/16 12:33:31
					</view>
				</view>
			</view>
		</view>
		
		<view class="bottomBox">
			<view class="bottomBtn">
				<view class="noBtn">拒绝</view>
				<view @click="goIndex3()" class="yesBtn">同意并填写预算量</view>
			</view>
		</view>
		
		<view style="width: 1px; height: 200rpx;"></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 订单信息 数据
				ordersList:[{
					title: '计划编号：',
					content: '20201061638848'
				},
				{
					title: '发起部门：',
					content: '工程部-李富贵'
				},
				{
					title: '发起时间：',
					content: '2020-06-16 13:33:13'
				},
				{
					title: '收货人：',
					content: '技术部-常峰'
				}],
				plansList:[{
					title: '32#公寓外墙浇筑采购计划',
					supplier: '佛山市金鸿混凝土有限公司',
					supplyTime: '2021-06-21 10:33:12',
					c30: '20m³',
					c35: '15m³',
					total: '35m³',
					position: '承台'
				}]
			}
		},
		methods: {
			goIndex3(){
				uni.navigateTo({
					url:'index3'
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
	.cu-timeline>.cu-item::after{
		background-color: #1cbbb4;
	}
	
	.bottomBox{
		width: 750rpx;
		height: 160rpx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		box-shadow: 0px -8rpx 4px #f2f2f2;
		.bottomBtn{
			width: 90%;
			height: 72rpx;
			line-height: 72rpx;
			margin: 20rpx auto;
			border-radius: 10rpx;
			overflow: hidden;
			display: flex;
			justify-content: space-around;
			
			view{
				width: 50%;
				text-align: center;
				color: #FFFFFF;
			}
			.noBtn{
				background-color: #B6D5FF;
			}
			.yesBtn{
				background-color: #1378FF;
			}
		}
	}
</style>
