<template>
	<view class="warp">
		<!-- 金币收集 -->
		<view class="exchange-box">
			<view class="title">
				<image style="width: 50rpx;height: 50rpx;" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
				<view style="line-height: 50rpx;margin: 0 10rpx;">可用金币：
					<u-count-to :start-val="total_start" :end-val="total" color='#fff' font-size='36'></u-count-to>
				</view>
				<view class="exchange-btn">去兑换</view>
			</view>
			
			<view class="content">
				<view class="sign-box" style="left: 100rpx;top: 30rpx;" :class="{'addAnimation':receive}">
					<view class="sign-content" >
						<text class="sign-title">签到</text>
						<view class="sign-garden">
							+3
						</view>
					</view>
				</view>
				<view class="sign-box" style="left: 300rpx;top: 0rpx;" :class="{'addAnimation':receive}">
					<view class="sign-content">
						<text class="sign-title">打卡</text>
						<view class="sign-garden">
							+3
						</view>
					</view>
				</view>
				<view class="sign-box" style="left: 600rpx;top: 60rpx;" :class="{'addAnimation':receive}">
					<view class="sign-content">
						<text class="sign-title">历程</text>
						<view class="sign-garden">
							+3
						</view>
					</view>
				</view>
				
				<view class="footer-box" @click="toReceive">
					<view class="footer-outer">
						<view class="footer-inside b-fontw">
							<text>点击</text>
							<text>领取</text>
						</view>
					</view>
				</view>
				
			</view>
		</view>
	
		<!-- 连续签到 -->
		<view class="signIn-box b-card">
			<view class="signIn-heard">
				<view class="title">
					<view class="title-today b-fontw">
						已连续签到<text style="color: #00c657;margin: 0 4rpx;">1</text>天
					</view>
					<view class="title-tomorrow">
						明日签到可获得10金币
					</view>
				</view>
				<!-- <view class="total b-fontw">
					<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
					<text>456</text>
				</view> -->
			</view>
			<view class="signIn-content b-flex-space">
				<view class="item">
					<view class="b-flex-space">
						<view class="item item-flex card" :class="{'card-check':true}">
							<text class="title">第1天</text>
							<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
							<text class="describe">10金币</text>
						</view>
						<view class="item item-flex card">
							<text class="title">第2天</text>
							<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
							<text class="describe">10金币</text>
						</view>
					</view>
					<view class="b-flex-space">
						<view class="item item-flex card">
							<text class="title">第5天</text>
														<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
							<text class="describe">10金币</text>
						</view>
						<view class="item item-flex card">
							<text class="title">第5天</text>
														<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
							<text class="describe">10金币</text>
						</view>
					</view>
				</view>
				<view class="item">
					<view class="b-flex-space">
						<view class="item item-flex card">
							<text class="title">第3天</text>
							<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
							<text class="describe">10金币</text>
						</view>
						<view class="item item-flex card">
							<text class="title">第4天</text>
							<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
							<text class="describe">10金币</text>
						</view>
					</view>
					<view class="b-flex-space">
						<view class="card" style="width: 100%;display: flex;justify-content: space-between;">
							<view class="" style="display: flex;flex-direction: column;">
								<text class="title">第7天</text>
								<text class="describe">神秘大礼包</text>
							</view>
							<image class="img" style="width: 120rpx;height: 110rpx;margin-top: 20rpx;" src="https://zhoukaiwen.com/img/clockImg/icon-gift.png" mode=""></image>
						</view>
					</view>
				</view>
				
			</view>
			
		</view>
	
		<!-- 任务 -->
		<view class="task-box b-card">
			<view class="title b-fontw">
				做任务赚金币
			</view>
			
			<view class="task-item b-flex-space">
				<view class="task-item-left b-flex-space">
					<image class="task-item-icon" src="https://zhoukaiwen.com/img/clockImg/icon-signs.png" mode=""></image>
					<view class="task-item-describe">
						<view class="title b-fontw">
							累计签到3天
						</view>
						<view class="text">
							连续签到3天额外获取20金币
						</view>
					</view>
				</view>
				<view class="task-item-btn">
					<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
					+20
				</view>
			</view>
			
			<view class="task-item b-flex-space">
				<view class="task-item-left b-flex-space">
					<image class="task-item-icon" src="https://zhoukaiwen.com/img/clockImg/icon-signs.png" mode=""></image>
					<view class="task-item-describe">
						<view class="title b-fontw">
							累计签到7天
						</view>
						<view class="text">
							连续签到7天额外获取50金币
						</view>
					</view>
				</view>
				<view class="task-item-btn">
					<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
					+50
				</view>
			</view>
			
			<view class="task-item b-flex-space">
				<view class="task-item-left b-flex-space">
					<image class="task-item-icon" src="https://zhoukaiwen.com/img/clockImg/icon-takeOut.png" mode=""></image>
					<view class="task-item-describe">
						<view class="title b-fontw">
							完成2单外卖订单
						</view>
						<view class="text">
							在线点单外卖配送2单
						</view>
					</view>
				</view>
				<view class="task-item-btn">
					<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
					+100
				</view>
			</view>
			<view class="task-item b-flex-space">
				<view class="task-item-left b-flex-space">
					<image class="task-item-icon" src="https://zhoukaiwen.com/img/clockImg/icon-since.png" mode=""></image>
					<view class="task-item-describe">
						<view class="title b-fontw">
							完成2单自提
						</view>
						<view class="text">
							线上下单，到店自提
						</view>
					</view>
				</view>
				<view class="task-item-btn">
					<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
					+150
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data () {
			return {
				receive: false,
				total_start: 0,
				total: 6562
			}
		},
		methods:{
			toReceive(){
				this.receive = true
				
				setTimeout(()=>{
					this.total_start = this.total
					this.total = this.total + 3
					this.receive = false
				},1800)
			}
		}
	}
</script>

<style lang="scss" scoped>
	$W: 140rpx;
	$titleSize: 32rpx;
	$signH: 80rpx;
	.b-card{
		margin: 30rpx;
		padding: 30rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		box-shadow: 2rpx 2rpx 10rpx #C0C0C0;
	}
	.b-flex-space{
		display: flex;
		justify-content: space-between;
	}
	.b-fontw{
		font-weight: 600;
	}
	@keyframes middles{
		from{
			transform: scale(1);
		}
		to{
			transform: scale(0);
		}
	}
	.addAnimation{
		animation: middles 0.5s linear;
	}
	.warp{
		// padding: 0 20rpx;
		.exchange-box{
			color: #F1F1F1;
			padding: 45px 0 0 0;
			background-image: url('https://cdn.zhoukaiwen.com/zjx_me_bg5.jpeg');
			width: 750rpx;
			height: 550rpx;
			.title{
				display: flex;
				height: 80rpx;
				align-items: center;
				font-size: 32rpx;
				font-weight: 600;
				.exchange-btn{
					margin-left: 20rpx;
					padding: 4rpx 20rpx;
					font-size: 24rpx;
					background-color: #999999;
					border-radius: 40rpx;
					color: #FFFFFF;
					opacity: 0.8;
				}
			}
			.content{
				height: 270rpx;
				margin-top: 40rpx;
				// background-color: rgba(0,0,0,0.6);
				position: relative;
				.sign-box{
					position: absolute;
					left: 20rpx;
					top: 30rpx;
					.sign-content{
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						.sign-title{
							font-size: 28rpx;
						}
						.sign-garden{
							width: $W/2;
							height: $W/2;
							border-radius: 50%;
							color: #444a62;
							font-weight: 600;
							background-color: rgba(255,255,255,0.9);
							display: flex;
							justify-content: center;
							align-items: center;
						}
					}
				}
				.footer-box{
					position: absolute;
					bottom: 0;
					left: 50%;
					margin-left: -$W/2;
					.footer-outer{
						width: $W;
						height: $W;
						padding: 10rpx;
						box-sizing: border-box;
						background-color: rgba(255,255,255,0.5);
						border-radius: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
						.footer-inside{
							width: 100%;
							height: 100%;
							background-color: rgba(255,255,255,0.9);
							border-radius: 50%;
							display: flex;
							font-size: 28rpx;
							color: #444a62;
							justify-content: center;
							align-items: center;
							flex-direction: column;
						}
					}
				}
				
			}
		}
	
		.signIn-box{
			.signIn-heard{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title{
					height: $signH;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.title-today{
						font-size: $titleSize;
					}
					.title-tomorrow{
						font-size: 24rpx;
						color: #C0C0C0;
					}
				}
				.total{
					height: $signH - 10;
					font-size: 32rpx;
					padding: 0 20rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 20rpx;
					border: 2rpx solid #C0C0C0;
					.img{
						width: 60rpx;
						height: 60rpx;
						margin-right: 10rpx;
					}
				}
			}
		
			.signIn-content{
				.item{
					width: calc( 50% - 10rpx);
					.img{
						height: 60rpx;
						width: 60rpx;
						margin: 6rpx 0;
					}
				}
				.item-flex{
					display: flex;
					flex-direction: column;
					// justify-content: center;
					align-items: center;
					
				}
				.card{
					height: 180rpx;
					padding:15rpx 24rpx;
					box-sizing: border-box;
					background-color: #f5f6fa;
					border-radius: 10rpx;
					margin-top: 20rpx;
					.title{
						font-size: 28rpx;
					}
					.describe{
						font-size: 20rpx;
						color: #C0C0C0;
					}
					.item-check{
						
					}
				}
				.card-check{
					color: #FFFFFF;
					// background-color: #444a62;
					background-color: #00c657;
					.describe{
						color: #FFFFFF;
					}
				}
				
			}
		}
	
		.task-box{
			.title{
				font-size: $titleSize ;
			}
			.task-item{
				margin: 60rpx 0;
				align-items: center;
				.task-item-left{
					align-items: center;
					.task-item-icon{
						width: 60rpx;
						height: 60rpx;
					}
					.task-item-describe{
						height: 80rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						margin-left: 30rpx;
						.title{
							font-size: 28rpx;
						}
						.text{
							font-size: 20rpx;
							color: #C0C0C0;
						}
					}
				}
				.task-item-btn{
					width: 160rpx;
					color: #FFFFFF;
					padding: 10rpx 20rpx;
					font-size: 28rpx;
					font-weight: 600;
					// background-color: #00c657;
					// background-image: linear-gradient( to left, #454c64,#262d47);
					background-image: linear-gradient( to top right, #06c852,#66e805);
					box-shadow: 2rpx 2rpx 10rpx #f5f6fa;
					border-radius: 40rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.img{
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
		}
	}
</style>
