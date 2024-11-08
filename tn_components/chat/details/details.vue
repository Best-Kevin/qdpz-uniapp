<template>
	<view>
		<view class="top">
			<view class="blessing">
				{{blessing}}
			</view>
			<view class="money">
				{{money}}
			</view>
			<view class="face" :style="{'border-radius':radius}">
				<image src="https://zhoukaiwen.com/img/qdpz/face/face_11.jpg"></image>
			</view>
			<view class="username">
				{{username}}的红包
			</view>
		</view>
		<view class="info">
			已领取{{receivedNumber}}/{{SumNumber}}个，共{{receivedMoney}}/{{SumMoney}}元
		</view>
		<view class="list">
			<view class="row" v-for="(row,index) in receivedList" :key="index">
				<view class="left">
					<image :src="row.face"></image>
				</view>
				<view class="right">
					<view class="r1">
						<view class="username">
							{{row.username}}
						</view>
						<view class="money">
							{{row.money}}元
						</view>
					</view>
					<view class="r2">
						<view class="time">
							{{row.time}}
						</view>
						<view class="lucky" v-if="row.islucky">
							手气王
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				blessing:"恭喜发财",
				money:0.01,
				username:"大黑哥",
				receivedNumber:8,
				SumNumber:10,
				receivedMoney:5.43,
				SumMoney:10,
				receivedList:[
					{username:"大黑哥", face:"https://zhoukaiwen.com/img/qdpz/face/face_6.jpg",time:"2019-04-12 12:54:12",money:0.01,islucky:false},
					{username:"路人甲", face:"https://zhoukaiwen.com/img/qdpz/face/face_5.jpg",time:"2019-04-12 12:54:13",money:1.82,islucky:true},
					{username:"高级黑", face:"https://zhoukaiwen.com/img/qdpz/face/face_4.jpg",time:"2019-04-12 12:55:10",money:0.23,islucky:false},
					{username:"低级黑", face:"https://zhoukaiwen.com/img/qdpz/face/face_3.jpg",time:"2019-04-12 12:56:10",money:0.56,islucky:false},
					{username:"大明哥", face:"https://zhoukaiwen.com/img/qdpz/face/face_2.jpg",time:"2019-04-12 12:56:15",money:0.96,islucky:false},
					{username:"小姐姐", face:"https://zhoukaiwen.com/img/qdpz/face/face_1.jpg",time:"2019-04-12 12:56:17",money:1.02,islucky:false},
					{username:"大哥哥", face:"https://zhoukaiwen.com/img/qdpz/face/face_7.jpg",time:"2019-04-12 12:56:19",money:0.05,islucky:false},
					{username:"抢红包", face:"https://zhoukaiwen.com/img/qdpz/face/face_8.jpg",time:"2019-04-12 12:56:22",money:0.78,islucky:false}
				],
				//动画效果
				radius:'100% 100% 0 0'
				
			};
		},
		onPageScroll(e) {
			//e.scrollTop;
			if(e.scrollTop>100){return;}
			let radiusTmp = 100 - e.scrollTop;
			this.radius = radiusTmp+'% '+radiusTmp+'% 0 0';
		}
	}
</script>

<style lang="scss">
	view{
		display: flex;
		flex-wrap: wrap;
	}
	.top{
		width: 100%;
		background-color: #cf3c35;
		flex-wrap: wrap;
		.blessing,.money{
			width: 100%;
			color: #f8d757;
			padding: 20upx 0;
			justify-content: center;
			font-size: 34upx;
		}
		.money{
			font-size: 100upx;
		}
		.face{
			background-color: #fff;
			justify-content: center;
			width: 100%;
			height: 130upx;
			margin-top: 65upx;
			border-radius: 100% 100% 0 0;
			transition: border-radius .15s;
			image{
				width: 130upx;
				height: 130upx;
				border-radius: 100%;
				margin-top: -65upx;
			}
		}
		.username{
			width: 100%;
			justify-content: center;
			background-color: #fff;
			margin-top: -50upx;
			font-size: 38upx;
		}
	}
	.info{
		margin-top: 30upx;
		width: 100%;
		height: 50upx;
		padding-left: 4%;
		font-size: 28upx;
		color: #999;
		border-bottom: solid 1upx #dfdfdf;
	}
	.list{
		width: 100%;
		.row{
			width: 92%;
			padding: 0 4%;
			height: 120upx;
			border-bottom: solid 1upx #dfdfdf;
			justify-content:flex-start;
			flex-wrap: nowrap;
			.left{
				flex-shrink: 0;
				width: 100upx;
				height: 120upx;
				justify-content: flex-start;
				align-items: center;
				image{
					width: 80upx;
					height: 80upx;
					border-radius: 100%;
				}
			}
			.right{
				width: 100%;
				height: 150upx;
				
				.r1{
					width: 100%;
					height: 75upx;
					justify-content: space-between;
					align-items: center;
					font-size: 34upx;
				}
				.r2{
					width: 100%;
					height: 75upx;
					justify-content: space-between;
					font-size: 26upx;
					.time{
						color: #8F8F94;
					}
					.lucky{
						padding: 3upx 8upx;
						border-radius: 5upx;
						background-color: #F8D757;
						align-items: center;
						height: 30upx;
						font-size: 24upx;
						color: #CF3C35;
					}
				}
			}
		}
	}
</style>
