<template>
	<view class="contaier">
		<view class="text-xxl" style="height: 770rpx; position: relative;">
			<image src='https://zhoukaiwen.com/img/wccQQP.png' mode='widthFix' class='png'
				style='width:100%;height:486rpx'></image>
			<text @click="goBack" class="cuIcon-back"
				style="position: absolute; left: 40rpx;top: 70rpx;color: #000000;"></text>
				
			<view style="width: 100% ;position: absolute; top: 150rpx;">
				<view class="titleImg margin-tb-xs">
					<view class="titleZi">
						<text class="cuIcon-favor margin-right-sm"></text>
						摄 / 影 / 师 / 精 / 选
						<text class="cuIcon-favor margin-left-sm"></text>
					</view>
				</view>
				
				<view style="position: relative;">
					<swiper class="card-swiper" :current='cardCur' :circular="true" vertical="true"
						:autoplay="false" duration="500" interval="5000" @change="cardSwiper">
						<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
							<view class="swiper-item image-banner">
								<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
							</view>
						</swiper-item>
					</swiper>
					<view class="indication">
					    <block v-for="(item,index) in swiperList" :key="index">
					        <view @click="clickItem(index)" class="spot" :class="cardCur == index ? 'active': '' ">
								{{item.text}}
							</view>
					    </block>
					</view>
				</view>
			</view>
		</view>

		
		<view class="image-piccapsule" style="background-image: url(https://cdn.zhoukaiwen.com/jiaonangtu.png);">
			<view class="image-capsule">
				<text class="photographer">趣滑摄影师认证入口</text>
				<text class="photographerS1">无门槛</text>
				<text class="photographerS2">极速认证</text>
			</view>
		</view>
		
		<view class="cu-bar bg-white margin-top-xs solid-bottom">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">最新照片</text>
				<text class="text-ABC text-blue">NewPhoto</text>
			</view>
		</view>
		<view class="cu-list menu-avatar margin-bottom">
			<view class="cu-item" @click="goTimeLine">
				<view class="cu-avatar radius lg" style="background-image:url(https://cdn.zhoukaiwen.com/aoshan.jpg);"></view>
				<view class="content">
					<view class="text-shadow text-black text-bold">鳌山滑雪场</view>
					<view class="text-gray text-sm flex">
						<text>更新3313张照片</text>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">1天前</view>
				</view>
			</view>
			
			<view class="cu-item" @click="goTimeLine">
				<view class="cu-avatar radius lg" style="background-image:url(https://cdn.zhoukaiwen.com/fulong.png);"></view>
				<view class="content">
					<view class="text-shadow text-black text-bold">富龙滑雪场</view>
					<view class="text-gray text-sm flex">
						<text>更新1832张照片</text>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">3天前</view>
				</view>
			</view>
			
			<view class="cu-item" @click="goTimeLine">
				<view class="cu-avatar radius lg" style="background-image:url(https://cdn.zhoukaiwen.com/aoshan.jpg);"></view>
				<view class="content">
					<view class="text-shadow text-black text-bold">可可托海滑雪场</view>
					<view class="text-gray text-sm flex">
						<text>更新823张照片</text>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">1周前</view>
				</view>
			</view>
			
			<view class="cu-item" @click="goTimeLine">
				<view class="cu-avatar radius lg" style="background-image:url(https://cdn.zhoukaiwen.com/fulong.png);"></view>
				<view class="content">
					<view class="text-shadow text-black text-bold">将军山滑雪场</view>
					<view class="text-gray text-sm flex">
						<text>更新3313张照片</text>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">1个月前</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				cardCur: 0,
				towerStart: 0,
				direction: '',
				swiperList: [{
					id: 0,
					type: 'image',
					text:'卡通制作人',
					url: 'https://cdn.zhoukaiwen.com/kt1.jpg'
				}, {
					id: 1,
					type: 'image',
					text:'小红书趣图',
					url: 'https://zhoukaiwen.com/img/qh/kt3.jpg',
				}, {
					id: 2,
					type: 'image',
					text:'A顶合照',
					url: 'https://zhoukaiwen.com/img/qh/he1.jpg'
				}, {
					id: 3,
					type: 'image',
					text:'摄影师小杰',
					url: 'https://zhoukaiwen.com/img/qh/he2.jpg'
				}, {
					id: 3,
					type: 'image',
					text:'摄影叉烧饭',
					url: 'https://zhoukaiwen.com/img/qh/wxt1.jpg'
				}, {
					id: 3,
					type: 'image',
					text:'缆车抓拍',
					url: 'https://zhoukaiwen.com/img/qh/he3.jpg'
				}],
			}
		},
		computed: {

		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// this.getData();
		},
		methods: {
			getData() {
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
					if (res.statusCode == 200) {
						this.curriculum = res.data.data;
					}
				});
			},
			seeImg(imgUrl) {
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
			cardSwiper(e) {
			  this.cardCur = e.detail.current
			},
			clickItem(index){
				 this.cardCur = index;
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
			goTimeLine(){
				uni.navigateTo({
					url: './timeLine'
				})
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.titleImg{
		position: relative;
		display: flex;
		height: 62px;
		font-size: 23px;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		background-image: url(https://tnuiimage.tnkjapp.com/title_bg/title44.png);
		background-size: cover;
		.titleZi{
			-webkit-background-clip: text;
			color: transparent;
			background-image: repeating-linear-gradient(45deg, #e03997, #FECE12);
		}
	}
	/* 自定义导航栏内容 end */
	/* 轮播文案在外 start*/
	.card-swiper {
	      height: 500rpx !important;
	      width: 520rpx;
	      border-radius: 20rpx;
	      overflow: hidden;
	    }
	  
	    .card-swiper swiper-item {
	      height: 650rpx;
		  width: 100% !important;
	      box-sizing: border-box;
	      padding: 0rpx;
	      border-radius: 20rpx;
	      overflow: hidden;
		  left: 20rpx !important;
	    }
	  
	    .card-swiper swiper-item .swiper-item {
	      width: 100% !important;
	      display: block;
	      height: 100%;
	      border-radius: 0rpx;
	      transform: scale(1);
	      transition: all 0.2s ease-in 0s;
	      overflow: hidden;
	    }
	  
	    .card-swiper swiper-item.cur .swiper-item {
	      transform: none;
	      transition: all 0.2s ease-in 0s;
	    }
	  
	    .image-banner{
	      display: flex;
	      align-items: center;
	      justify-content: center;
	    }
	    .image-banner image{
	      width: 100%;
	      height: 100%;
	    }
	    /* 轮播指示点 start*/
	    .indication{
	      z-index: 9999;
	      width: 100%;
	      height: 36rpx;
	      position: absolute;
	      display:inline-block;
	      flex-direction:row;
	      align-items:center;
	      justify-content:center;
	    }
	    
	    .spot{
	      color: #0081ff;
	      background-color: #cce6ff;
	      opacity: 1;
	      width: 170rpx;
	      height: 70rpx;
		  line-height: 75rpx;
	      border-radius: 20rpx;
	      margin: 18rpx -30rpx !important;
	      left: 590rpx;
	      right: 0;
	      top: -520rpx;
	      position: relative;
		  text-align: center;
		  font-size: 28rpx;
		  font-weight: 600;
	    }
	    
	    .spot.active{
	      color: #FFFFFF;
	      opacity: 1;
	      background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
	    }
		// 结束
		
		.image-piccapsule{
			background-size: cover;
			background-repeat: no-repeat;
			background-position: top;
			border-radius: 10px 10px 0 0;
			.image-capsule{
				padding: 55px 0px;
				font-size: 20px;
				font-weight: 300;
				position: relative;
				.photographer{
					position: absolute;
					color: #FFFFFF;
					left: 105rpx;
					top: 62rpx;
					font-size: 38rpx;
					letter-spacing: 4rpx;
					font-weight: 500;
					vertical-align: text-bottom;
					opacity: .85;
				}
				.photographerS1,.photographerS2{
					position: absolute;
					color: #FFFFFF;
					font-size: 28rpx;
					opacity: .7;
					font-weight: 500;
				}
				.photographerS1{
					left: 160rpx;
					bottom: 30rpx;
				}
				.photographerS2{
					left: 300rpx;
					bottom: 30rpx;
				}
			}
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
		background-color: #000000;
		border-radius: 10rpx;
		overflow: hidden;
		position: relative;
	}

	.demo-price {
		position: absolute;
		right: 20rpx;
		top: 20rpx;
		background: rgba(0, 0, 0, .5);
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
		background: rgba(0, 0, 0, .5);
		padding: 12rpx;
		text-align: center;
		color: #EEEEEE;
		overflow: hidden;
		/*超出部分隐藏*/
		white-space: nowrap;
		/*不换行*/
		text-overflow: ellipsis;
		/*超出部分文字以...显示*/
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
