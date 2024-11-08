<!-- 客户项目 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">客户定制</block>
		</cu-custom>
		<view class="wrap">
			<view class="page-box">
				<view class="order" v-for="(res, index) in dataList" :key="res.id">
					<view class="top">
						<view class="left">
							<uni-text class="cuIcon-titles text-blue"></uni-text>
							<view class="store">{{ res.store }}</view>
							<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
						</view>
						<view class="right">
							<view class='cu-tag radius light bg-blue'>{{res.id}}</view>
						</view>
					</view>
					<view class="item">
						<view class="left">
							<image :src="res.goodsUrl" mode="aspectFill"></image>
						</view>
						<view class="content">
							<view class="title u-line-2 text-bold">{{ res.title }}</view>
							<view class="type">{{ res.describe }}</view>
							<view class="delivery-time">时间： {{ res.time }}</view>
						</view>
					</view>
					<u-line color="#f1f1f1" margin="24rpx 0 15rpx 0"></u-line>
					<view class="bottom">
						<view class="bottom_left">
							<text class="text-blue">研发进度：</text>
							<view class="progressBox">
								<u-line-progress :percent="res.progre" :active-color="activeColor"
								:striped="true" :stripedActive="true"></u-line-progress>
							</view>
						</view>
						
						<view class="btnBox">
							<!-- <view class="exchange btn">分享课程</view> -->
							<view @click="goClass" class="evaluate btn">查看项目</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 输入密码访问 -->
		<view class="cu-modal" :class="modalName ? 'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">输入密码访问</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view class="cu-form-group">
						<view class="title">密码：</view>
						<input v-model="lookPswd" placeholder="请输入密码" name="input"></input>
					</view>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="lookBtn">确定</button>
		
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
			percent: 50,
			activeColor: '#0081ff',
			striped: false,
			stripedActive: false,
			
			modalName: false,
			lookPswd: '',
			orderList: [[], [], [], []],
			dataList: [
				{
					id: 'wx202110200093',
					store: '建筑类工单项目',
					progre: 100,
					goodsUrl: 'http://cdn.zhoukaiwen.com/web2.jpg',
					title: '工单项目',
					describe: '暂无描述',
					time: '2021年10月18日'
				}
			],
			current: 0,
			tabsHeight: 0,
			dx: 0,
		};
	},
	onLoad() {
		
	},
	computed: {
		// 价格小数
		priceDecimal() {
			return val => {
				if (val !== parseInt(val)) return val.slice(-2);
				else return '00';
			};
		},
		// 价格整数
		priceInt() {
			return val => {
				if (val !== parseInt(val)) return val.split('.')[0];
				else return val;
			};
		}
	},
	methods: {
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target
		},
		hideModal(e) {
			this.modalName = null
		},
		goClass(){
			this.modalName = true;
			
		},
		lookBtn(){
			if(this.lookPswd == 'zkw0809'){
				console.log('密码正确')
				uni.navigateTo({
					url: 'workOrder/index3'
				})
			}else{
				uni.showToast({
					title: '密码不正确，无法访问！',
					icon: 'none'
				});
				
			}
		},
		// 总价
		totalPrice(item) {
			let price = 0;
			item.map(val => {
				price += parseFloat(val.price);
			});
			return price.toFixed(2);
		},
		// tab栏切换
		change(index) {
			this.swiperCurrent = index;
		},
		transition({ detail: { dx } }) {
			this.$refs.tabs.setDx(dx);
		},
		animationfinish({ detail: { current } }) {
			this.$refs.tabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
		}
	}
};
</script>

<style lang="scss" scoped>
/* #ifndef H5 */
page {
	height: 100%;
	background-color: #f2f2f2;
}
/* #endif */
</style>

<style lang="scss" scoped>
	
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 34rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
			.progressBox{
				width: 150rpx;
				float: right;
			}
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 260rpx;
				height: 190rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 45rpx;
			}
			.type {
				margin: 6rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				line-clamp: 3;
				-webkit-box-orient: vertical;
			}
			.delivery-time {
				color: #0081ff;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		line-height: 70rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.bottom_left{
			display: flex;
			align-items: center;
			.progressBox{
				width: 150rpx;
				float: right;
			}
		}
		.btnBox{
			width: 150rpx;
			display: flex;
			justify-content: space-between;
			.btn {
				line-height: 52rpx;
				width: 140rpx;
				border-radius: 12rpx;
				border: 2rpx solid $u-tips-color;
				font-size: 26rpx;
				text-align: center;
				color: $u-tips-color;
			}
			.evaluate {
				color: $u-type-primary;
				border-color: $u-type-primary;
			}
		}
	}
}
.centre {
	text-align: center;
	margin: 200rpx auto;
	font-size: 32rpx;
	image {
		width: 300rpx;
		border-radius: 50%;
		margin: 0 auto;
	}
	.tips {
		font-size: 24rpx;
		color: #999999;
		margin-top: 20rpx;
	}
	.btn {
		margin: 80rpx auto;
		width: 200rpx;
		border-radius: 32rpx;
		line-height: 64rpx;
		color: #ffffff;
		font-size: 26rpx;
		background: linear-gradient(270deg, #1cbbb4 0%, #0081ff 100%);
	}
}
.wrap {
	display: flex;
	flex-direction: column;
	height: calc(100vh - var(--window-top));
	width: 100%;
}
.swiper-box {
	flex: 1;
}
.swiper-item {
	height: 100%;
}
</style>

