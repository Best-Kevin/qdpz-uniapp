<template>
	<view class="contaier">
		<!-- 进度器 - colorUi -->
		<view class="topBox">
			<view class="bg-white stepsBox">
				<view class="cu-steps">
					<view class="cu-item" :class="index>basics?'':'text-blue'" v-for="(item,index) in basicsList" :key="index">
						<text :class="'cuIcon-' + item.icon"></text> {{item.name}}
					</view>
				</view>
			</view>
		</view>
		
		<!-- 配送信息 -->
		<view class="cardBox">
			<view class="cardTitle">配送信息</view>
			<view class="navBox">
				<view class="navItem">
					<view class="navNum">8</view>
					<view class="navName">已收车</view>
				</view>
				<view class="navItem">
					<view class="navNum">6</view>
					<view class="navName">待收车</view>
				</view>
				<view class="navItem">
					<view class="navNum">14<text>m³</text></view>
					<view class="navName">已收总量</view>
				</view>
				<view class="navItem">
					<view class="navNum">26<text>m³</text></view>
					<view class="navName">已收车</view>
				</view>
			</view>
		</view>
		
		<!-- 订单信息 -左右布局 -->
		<view class="cardBox">
			<view class="cardTitle">订单信息</view>
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
		
		<!-- 订单详情 -->
		<!-- 切换 -->
		<view class="typeBox">
			<view @click="typeClick(0)" class="typeBtn" :class="typeNum == 0 ?'typeActive':''">已收货(8)</view>
			<view @click="typeClick(1)" class="typeBtn" :class="typeNum == 1 ?'typeActive':''">未收货(12)</view>
		</view>
		
		<!-- 订单数据 -->
		<view v-if="typeNum == 0">
			<view class="cardBox"  v-for="(item,index) in carList" :key="index">
				<view class="cu-list menu">
					<view class="cu-item">
						<view class="content">
							<text class="text-balck text-lg">{{item.carNum}}</text>
						</view>
						<view class="action">
							<text class="text-gray text-df">{{item.carTime}}</text>
						</view>
					</view>
				</view>
				<view class="carContentBox">
					<view class="carContentLeftBox">
						<view class="carContent">
							<view class="carTitle text-grey">发货标号：<text class="m0">{{item.grade}}</text></view>
							<view class="carTitle text-grey">偏差率：<text class="m1">{{item.deviation}}</text></view>
						</view>
						<view class="carContent">
							<view class="carTitle text-grey">发货算量：<text class="m0">{{item.issue}}</text></view>
							<view class="carTitle text-grey">实际算量：<text class="m0">{{item.actual}}</text></view>
						</view>
					</view>
					<view class="carContentRightBox">
						<view @click="goIndex2()" class='cu-tag radius light' :class="item.btnType == 1 ? 'bg-green': 'bg-orange' ">自动收货</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 未收货 -->
		<view v-if="typeNum == 1">
			<view class="cardBox2"  v-for="(item,index) in carList" :key="index">
				<text class="selectIcon lg text-green cuIcon-roundcheckfill"></text>
				<view class="cu-list menu">
					<view class="cu-item">
						<view class="content">
							<text class="text-balck text-lg">{{item.carNum}}</text>
						</view>
						<view class="action">
							<text class="text-gray text-df">{{item.carTime}}</text>
						</view>
					</view>
				</view>
				<view class="carContentBox2">
					<view class="carContentLeftBox">
						<view class="carContent">
							<view class="carTitle text-grey">发货标号：<text class="m0">{{item.grade}}</text></view>
							<view class="carTitle text-grey">偏差率：<text class="m1">{{item.deviation}}</text></view>
						</view>
						<view class="carContent">
							<view class="carTitle text-grey">发货算量：<text class="m0">{{item.issue}}</text></view>
							<view class="carTitle text-grey">实际算量：<text class="m0">{{item.actual}}</text></view>
						</view>
					</view>
					<view class="carContentRightBox">
						<text class="xl text-gray cuIcon-roundcheckfill"></text>
					</view>
				</view>
			</view>
		</view>
		
		<view style="width: 1px; height: 40rpx;"></view>
		
		<view v-if="typeNum == 1" class="bottomBox">
			<view class="leftBottom">
				<text class="xxl text-gray cuIcon-roundcheckfill"></text>
				<text class="margin-left-sm">全选</text>
			</view>
			<view class="rightBottom">
				<view>合计：<text class="text-blue">62m³</text></view>
				<button class="cu-btn round  bg-blue">确认收货</button>
			</view>
		</view>
		
		<view v-if="typeNum == 1" style="width: 1px; height: 160rpx;"></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				basicsList: [{
					icon: 'roundcheckfill',
					name: '1.下单'
				}, {
					icon: 'roundcheckfill',
					name: '2.确认'
				}, {
					icon: 'roundcheckfill',
					name: '3.发货'
				}, {
					icon: 'roundcheckfill',
					name: '4.收货'
				}, {
					icon: 'roundcheckfill',
					name: '5.结算'
				},],
				basics: 1,	//顶部在此控制进度
				
				// 订单信息 数据
				ordersList:[{
					title: '预计供应时间',
					content: '2020-04-23 10:33:33'
				},
				{
					title: '普通混凝土C30',
					content: '20m³'
				},
				{
					title: '普通混凝土C35',
					content: '15m³'
				},
				{
					title: '总计预算量',
					content: '35m³'
				},
				{
					title: '计划浇筑部位',
					content: '承台'
				}],
				
				// 切换控制
				typeNum: 0,
				carList:[{
					carNum: '粤A·CD323',
					carTime: '06/18 12:15:11',
					grade: 'C30',
					issue: '20m³',
					deviation: 1,
					actual: '22.2m³',
					btnType: 1
				},
				{
					carNum: '粤A·25262',
					carTime: '06/18 12:15:11',
					grade: 'C30',
					issue: '20m³',
					deviation: 2,
					actual: '22.2m³',
					btnType: 2
				},
				{
					carNum: '粤A·33696',
					carTime: '06/18 12:15:11',
					grade: 'C35',
					issue: '10m³',
					deviation: 1,
					actual: '34.2m³',
					btnType: 2
				}],
				checkbox: [{
					value: 'A',
					checked: true
				}, {
					value: 'B',
					checked: true
				}, {
					value: 'C',
					checked: false
				}],
			}
		},
		methods: {
			typeClick(index){
				this.typeNum = index;
			},
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
	.topBox{
		width: 100%;
		padding: 10rpx 40rpx 30rpx 40rpx;
		background-color: #2695FE;
		.stepsBox{
			padding: 5rpx 0 15rpx 0;
			border-radius: 5px;
		}
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
			margin-bottom: 20rpx;
		}
	}
	.cardBox2{
		width: 680rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		padding: 20rpx 25rpx 20rpx 100rpx;
		margin: 30rpx auto;
		position: relative;
		.cardTitle{
			color: #000000;
			font-size: 34rpx;
			font-weight: 500;
			margin-bottom: 20rpx;
		}
		.selectIcon{
			position: absolute;
			left: 30rpx;
			top: 50%;
			font-size: 40rpx;
			margin-top: -20rpx;
		}
	}
	.navBox{
		width: 100%;
		display: flex;
		justify-content: space-between;
		.navItem{
			border-right: 1px solid #DDDDDD;
			width: 25%;
			font-variant: discretionary-ligatures;
			margin-left: 20rpx;
			.navNum{
				font-size: 44rpx;
				color: #FF7316;
				font-weight: 500;
				margin-bottom: 10rpx;
				text{
					font-size: 28rpx;
				}
			}
			.navName{
				color: #333333;
				font-size: 24rpx;
			}
		}
		.navItem:last-child{
			border: none;
		} 
	}
	
	.cu-list.menu>.cu-item {
		padding: 0 !important;
		min-height: 25rpx;
	}
	.cu-list+.cu-list {
	    margin-top: 16rpx !important;;
	}
	.cu-list.menu>.cu-item .content {
	    font-size: 28rpx !important;
	}
	
	.typeBox{
		width: 680rpx;
		height: 50rpx;
		line-height: 50rpx;
		margin: 30rpx auto;
		display: flex;
		justify-content: flex-start;
		.typeBtn{
			font-size: 28rpx;
			color: #666666;
			margin-right: 30rpx;
		}
		.typeActive{
			font-size: 36rpx;
			color: #FF7316;
			font-weight: 500;
		}
	}
	.carContentBox{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 5rpx;
		.carContentLeftBox{
			width: 72%;
			display: flex;
			justify-content: space-between;
		}
		.carContent{
			.carTitle{
				margin: 16rpx 0;
				.m0{
					color: #000000;
				}
				.m1{
					color: red;
				}
				.m2{
					color: green;
				}
			}
		}
		.carContentRightBox{
			display: flex;
			align-items: center;
		}
	}
	.carContentBox2{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 5rpx;
		.carContentLeftBox{
			width: 85%;
			display: flex;
			justify-content: space-between;
		}
		.carContent{
			.carTitle{
				margin: 16rpx 0;
				.m0{
					color: #000000;
				}
				.m1{
					color: red;
				}
				.m2{
					color: green;
				}
			}
		}
		.carContentRightBox{
			display: flex;
			align-items: center;
		}
	}
	
	.bottomBox{
		width: 750rpx;
		height: 160rpx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		box-shadow: 0px -8rpx 4px #f2f2f2;
		display: flex;
		justify-content: space-between;
		padding: 0 40rpx;
		.leftBottom{
			width: 40%;
			font-size: 30rpx;
			padding-top: 40rpx;
		}
		.rightBottom{
			width: 60%;
			padding-top: 40rpx;
			display: flex;
			justify-content: space-around;
			button{
				margin-top: -13rpx;
				width: 50%;
			}
		}
	}
</style>
