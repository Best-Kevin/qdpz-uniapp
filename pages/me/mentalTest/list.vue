<template>
	<view class="warp">
		<view class="status_bar">
			<!-- 导航栏 -->
		</view>
		<view class="title b-fontw7">
			答题测试
		</view>

		<view class="nav-box b-card">
			<view class="nav-bar-box">
				<view class="nav-bar-item" v-for='(item,index) in list' :key='index' :class="{'nav-bar-item-check':index == current,
				'nav-bar-left':index == 0 && current == index,
				'nav-bar-center':index > 0 && index < list.length-1 && current == index ,
				'nav-bar-right':index == list.length-1 && current == index}" @click="change(index)">
					<view class="">

					</view>
					<view class="" style="flex: 1;text-align: center;">
						<view class="nav-bar-title">
							{{item.name}}
							<view class="title-line" v-show="index == current">

							</view>
						</view>
					</view>
					<view class="nav-bar-line" v-if="index<list.length-1 && index != current && index != current-1">
					</view>
					<view class="">
					</view>

				</view>
			</view>

			<view class="nav-content-box">
				<view class="">
					<view class="nav-content-title b-fontw6">
						「每日更新」Web开发面试题
					</view>
					<view class="nav-content-text b-flex-item-cent">
						<text class="b-traiangle"></text>
						<text>题目总数</text>
						<text class="nav-content-line"></text>
						<text class="b-fontw6">25</text>
					</view>
					<view class="nav-content-text b-flex-item-cent">
						<text class="b-traiangle"></text>
						<text>已答数量</text>
						<text class="nav-content-line"></text>
						<text class="b-fontw6">7</text>
					</view>
				</view>
				<view class="">
					<view class="img">
						<view class="img-refresh">
							更换答题
						</view>
					</view>
				</view>
			</view>

			<view class="nav-btn-box">
				<view class="nav-btn b-fontw6 bg-gradual-blue" @click="goIndex(1)">
					继续答题
				</view>
			</view>
		</view>
		
		<view class="bannerBox">
			<image mode="widthFix" src="http://cdn.zhoukaiwen.com/Banner4.jpg"></image>
		</view>

		<view>
			<view class="cu-bar bg-white margin-top-xs">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">技术测试</text>
					<text class="text-ABC text-blue">psychology</text>
				</view>
			</view>

			<view v-for="(item, index) in dataL.data1" :key='index' class="cu-list menu sm-border margin-bottom" style="box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
				<view class="cu-item">
					<view class="content padding-tb-sm">
						<view class="text-lg">
							<text class="cuIcon-text text-blue margin-right-xs"></text>
							{{item.name}}
						</view>
						<view class="text-gray text-df margin-top-xs">
							<text class="cuIcon-hotfill margin-right-xs"></text>
							已有{{item.num}}位小伙伴已答题
						</view>
					</view>
					<view class="action">
						<button v-if="item.isAnswer != 2" @click="goIndex(item.id)"
							class="cu-btn round bg-gradual-blue shadow">前往答题</button>
						<button v-if="item.isAnswer == 2" @click="goIndex(item.id)"
							class="cu-btn round bg-gradual-orange shadow">已经答题</button>
					</view>
				</view>
			</view>

			<view class="cu-bar bg-white margin-top-xs">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">其他测试</text>
					<text class="text-ABC text-blue">psychology</text>
				</view>
			</view>
			<view v-for="(item, index) in dataL.data2" :key='index' class="cu-list menu sm-border margin-bottom" style="box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
				<view class="cu-item">
					<view class="content padding-tb-sm">
						<view class="text-lg">
							<text class="cuIcon-text text-blue margin-right-xs"></text>
							{{item.name}}
						</view>
						<view class="text-gray text-df margin-top-xs">
							<text class="cuIcon-hotfill margin-right-xs"></text>
							已有{{item.num}}位小伙伴已答题
						</view>
					</view>
					<view class="action">
						<button v-if="item.isAnswer != 2" @click="goIndex(item.id)"
							class="cu-btn round bg-gradual-blue shadow">前往答题</button>
						<button v-if="item.isAnswer == 2" @click="goIndex(item.id)"
							class="cu-btn round bg-gradual-orange shadow">已经答题</button>
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
				list: [{
					name: '技术'
				}, {
					name: '心理'
				}, {
					name: '娱乐'
				}, {
					name: '其他'
				}],
				current: 0,
				dataL: {
					data1: [{
						id: '1',
						name: '测测你的web前端技术水平～',
						num: '31',
						isAnswer: 1
					}],
					data2: [{
						id: '2',
						name: '[心理测评]国际标准版测试题目',
						num: '48',
						isAnswer: 1
					}]
				},
			};
		},
		onLoad() {
			console.log(this.dataL)
		},
		watch: {

		},
		methods: {
			goIndex(mid) {
				uni.navigateTo({
					url: 'index?mid=' + mid
				})
			},
			change(index) {
				this.current = index;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.b-fontw6 {
		font-weight: 600;
	}

	.b-fontw7 {
		font-weight: 700;
	}

	.b-card {
		background-color: #fefefe;
		border-radius: 20rpx;
		box-shadow: 2rpx 2rpx 4rpx #efeef3;
	}

	.b-traiangle {
		display: inline-block;
		width: 0rpx;
		height: 0rpx;
		border-width: 10rpx;
		border-style: solid;
		border-color: transparent transparent transparent #5bc5f9;
		border-radius: 2rpx;
	}

	.b-flex-item-cent {
		display: flex;
		align-items: center;
	}

	.warp {
		color: #404e75;
		min-height: 100vh;
		background: url(https://zhoukaiwen.com/img/learnImg/background2.jpg) no-repeat;
		background-size: cover;
		background-attachment: fixed;
		padding: 30rpx;

		/* 导航栏 */
		.status_bar {
			width: 100%;
			height: 36px;
		}

		.title {
			font-size: 36rpx;
		}

		.nav-box {
			margin-top: 40rpx;

			.nav-prompt-box {
				width: 100%;
				position: relative;

				.nav-prompt {
					width: calc(100% - 60rpx);
					position: absolute;
					top: -54rpx;
					font-size: 28rpx;
					font-weight: 600;
					background-color: #4CD964;
					color: #f9f9f9;
					background-image: linear-gradient(-90deg, #906cf0, #3f5aef);
					margin: 0 30rpx;
					border-radius: 20rpx;
					padding: 10rpx 20rpx;
				}
			}

			.nav-bar-box {
				display: flex;
				align-items: center;
				justify-content: space-around;

				.nav-bar-item {
					background-color: #f7f7f9;
					flex: 1;
					height: 100rpx;
					font-size: 28rpx;
					font-weight: 600;
					color: #8d94ae;
					display: flex;
					justify-content: center;
					align-items: center;

					.nav-bar-line {
						width: 0;
						height: 30rpx;
						border-left: 2rpx solid #d9d9db;
					}

					&:nth-child(1) {
						border-radius: 20rpx 0 0 0;
					}

					&:nth-last-child(1) {
						border-radius: 0 20rpx 0 0;
					}

					.nav-bar-title {
						position: relative;
						height: 100rpx;
						line-height: 100rpx;

						.title-line {
							position: absolute;
							width: 30rpx;
							height: 0rpx;
							bottom: 2rpx;
							left: calc(50% - 15rpx);
							border-bottom: 2rpx solid #5fc4fa;
						}

						.nav-bar-title-angle {
							position: absolute;
							width: 0rpx;
							height: 0rpx;
							border-width: 20rpx;
							border-style: solid;
							border-color: #6660f4 transparent transparent transparent;
							border-radius: 2rpx;
							top: 0rpx;
							left: calc(50% - 20rpx);
						}
					}
				}

				.nav-bar-item-check {
					width: calc(25% + 100rpx);
					color: #54c8fb;
					// background-color: #fefefe;
					background-repeat: no-repeat;
					background-size: 100% 100%;
				}

				.nav-bar-left {
					background-image: url(https://zhoukaiwen.com/img/learnImg/icon-nav-left.png);
				}

				.nav-bar-center {
					background-image: url(https://zhoukaiwen.com/img/learnImg/icon-nav-center.png);
				}

				.nav-bar-right {
					background-image: url(https://zhoukaiwen.com/img/learnImg/icon-nav-right.png);
				}

				.nav-bar-item-line {
					border-right: 2rpx solid #54c8fb;
				}
			}

			.nav-content-box {
				padding: 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.nav-content-title {
					font-size: 28rpx;
					color: #3d4c6d;
					line-height: 60rpx;
				}

				.nav-content-text {
					font-size: 24rpx;
					color: #8d93a3;
					line-height: 48rpx;

					.nav-content-line {
						display: inline-block;
						width: 0;
						height: 16rpx;
						border-left: 2rpx solid #8d93a3;
						margin: 0 16rpx;
					}
				}

				.img {
					width: 160rpx;
					height: 200rpx;
					background-color: #5bc5f9;
					border-radius: 10rpx;
					position: relative;
					overflow: hidden;
					background-image: url(http://cdn.zhoukaiwen.com/vue.jpg);
					width: 80px;
					height: 100px;
					background-size: 100%;
					background-repeat: no-repeat;

					.img-refresh {
						position: absolute;
						bottom: 0;
						left: 0;
						width: 100%;
						color: #FFFFFF;
						font-size: 20rpx;
						padding: 6rpx 10rpx;
						background-color: rgba(0, 0, 0, 0.3);
						text-align: center;
					}
				}
			}

			.nav-btn-box {
				padding: 30rpx;

				.nav-btn {
					width: 100%;
					height: 80rpx;
					border-radius: 100rpx;
					// background-color: #5bc5f9;
					text-align: center;
					line-height: 80rpx;
					color: #fffafe;
					font-size: 28rpx;
					box-shadow: 2rpx 2rpx 2rpx #efeef3;
					// background-image: linear-gradient();
				}
			}
		}
	}
	.bannerBox {
		width: 100%;
		margin: 30rpx 0 25rpx 0;
		image {
			width: 100%;
			border-radius: 12rpx;
		}
	}
</style>
