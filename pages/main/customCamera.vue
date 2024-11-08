<template>
	<view class='contents'>
		<view style="position: relative;width: 100%;height: 750rpx;">
			<camera :device-position="device" :flash="flash" @error="error"
				style="position: absolute;top: 0;left: 0; width: 100%; height: 750rpx;">
				<cover-view v-show="syShow" class="textInfo">
					<cover-view class="textInfoTile">示例Demo</cover-view>
					<cover-view class="topItem">拍摄时间：{{nowTime}}</cover-view>
					<cover-view class="topItem">天气：{{weather}}℃</cover-view>
					<cover-view class="topItem">拍摄人：{{userName}}</cover-view>
					<cover-view class="topItem">地点：{{address}}</cover-view>
				</cover-view>
				<cover-image @click="xzBtn" class="xzImg" src="https://cdn.zhoukaiwen.com/xz.png"></cover-image>
				<cover-image @click="sgdBtn" class="sgdImg" :src="sgdUrl"></cover-image>
			</camera>
		</view>
		<view class="syBtns">
			<button @click="()=>{syShow=true}">带水印</button>
			<button @click="()=>{syShow=false}">无水印</button>
		</view>
		<!-- 路线和拍照 -->
		<!-- <view  @tap="a" @longtap="b">拍照</view> -->
		<view class="cameraBtn" @click="takePhoto">
			<view class="cameraBtn2"></view>
		</view>
		<view class="bottomBtn">
			<view class="btn" @click="goBack">取消</view>
			<view class="btn" @click="goAlbum">相册</view>
		</view>
	</view>
</template>

<script>
	import QQMapWX from "../../common/qqmap-wx-jssdk.js";
	var content = null;
	// //获取系统信息
	uni.getSystemInfo({
		success: function(res) {
			console.log('系统信息:', res)
		},
	})
	export default {
		data() {
			return {
				signImage: '',
				imgSrc: '',
				syShow: true,
				getHeight: '600',
				device: 'back', //前置或后置摄像头，值为front, back
				flash: 'off', //闪光灯，值为auto, on, off
				nowTime: '', //日期
				userName: 'Admin',
				weather: '32',
				address: '', //当前地址信息
				sgdUrl: 'https://cdn.zhoukaiwen.com/sgd.png',
				imgList: [{
					src: "https://cdn.zhoukaiwen.com/angular.jpg"
				}],
				imgListData: '',

				rreportShow: false, //选择照片备注内容弹窗

				src: '',
				w: '',
				h: ''
			}
		},
		onShow() {
			this.getTime();
			var qqmapsdk;
			var that = this;
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);

					qqmapsdk = new QQMapWX({
						key: "662BZ-2EAR6-M34S7-M4NPO-HFV3F-QEBTV" //自己申请的key
					});
					qqmapsdk.reverseGeocoder({
						location: {
							latitude: res.latitude,
							longitude: res.longitude
						},
						success(addressRes) {
							console.log('位置：', addressRes)
							that.address = addressRes.result.address;
						},
						fail(res) {}
					});
				}
			});
			uni.request({
				url: 'http://wthrcdn.etouch.cn/weather_mini?city=西安',
				method: 'GET',
				success: res => {
					console.log('天气信息：', res.data.data);
					this.weather = res.data.data.forecast[0].type + '  ' + res.data.data.wendu;
				},
				fail: () => {
					this.openmsg("警告", "天气接口获取失败")
				},
				complete: () => {}
			});
		},
		methods: {
			a() {
				console.log('aaa');
			},
			b() {
				console.log('bbb');
			},
			goBack(){
				uni.navigateBack({
				    delta: 1
				});
			},
			// 调相册
			goAlbum() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'], //这要注意，camera掉拍照，album是打开手机相册
					success: (res) => {
						let data = {
							src: res.tempFilePaths[0],
							nowTime: this.nowTime,
							weather: this.weather,
							userName: this.userName,
							address: this.address
						};
						uni.setStorageSync("userInfo", data)
						uni.navigateTo({
							url: "../../tn_components/imageEditor",
						});
						console.log(res, 123);
						// const tempFilePaths = res.tempFilePaths;
					}
				});
			},
			// 点击拍照
			takePhoto() {
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
					quality: 'high',
					success: (res) => {
						console.log(res)
						// this.src = res.tempImagePath //照片
						let data = {
							src: res.tempImagePath,
							nowTime: this.nowTime,
							weather: this.weather,
							userName: this.userName,
							address: this.address,
							syShow: this.syShow,
						};
						uni.setStorageSync("userInfo", data)
						uni.navigateTo({
							url: "../../tn_components/imageEditor",
							// url: "./photo",
						});
					}
				});
			},
			error(e) {
				console.log(e.detail);
			},
			getTime: function() {
				var date = new Date(),
					year = date.getFullYear(),
					month = date.getMonth() + 1,
					day = date.getDate(),
					hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
					minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
					second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				var timer = year + '年' + month + '月' + day + '日' + hour + ':' + minute + ':' + second;
				this.nowTime = timer;

				console.log('获取时间', this.nowTime);
			},

			history() {
				uni.navigateTo({
					url: 'timeline'
				})
			},

			xzBtn() {
				if (this.device == 'front') {
					this.device = 'back'
				} else {
					this.device = 'front'
				}
			},
			sgdBtn() {
				if (this.flash == 'off') {
					this.flash = 'on'
					this.sgdUrl = 'https://cdn.zhoukaiwen.com/sgd_on.png'
				} else {
					this.flash = 'off'
					this.sgdUrl = 'https://cdn.zhoukaiwen.com/sgd.png'
				}
			},
		},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			//获得Canvas的上下文
			content = uni.createCanvasContext('firstCanvas')
			//设置线的颜色
			content.setStrokeStyle("#000")
			//设置线的宽度
			content.setLineWidth(5)
			//设置线两端端点样式更加圆润
			content.setLineCap('round')
			//设置两条线连接处更加圆润
			content.setLineJoin('round')
		},



	}
</script>

<style lang="scss">
	.contents {
		width: 100vw;
		height: 100vh;
		background-color: #000000;
	}

	// 水印按钮
	.syBtns {
		margin-top: 30rpx;
		display: flex;
		justify-content: space-around;

		button {
			width: 150rpx;
			background-color: skyblue;
			padding: 10rpx;
			height: 70rpx;
			line-height: 60rpx;
			color: #FFFFFF;
			border-radius: 10rpx;

		}
	}

	// 水印
	.textInfo {
		position: absolute;
		top: 10rpx;
		left: 10rpx;
		width: 350rpx;
		box-sizing: border-box;
		color: #EEEEEE;
		font-size: 16rpx;
		background-color: #393631;
		opacity: .8;
		border-radius: 10rpx;
		overflow: hidden;

		.textInfoTile {
			height: 30rpx;
			text-align: center;
			line-height: 30rpx;
			background-color: #394668;
			margin-bottom: 15rpx;
		}

		.topItem {
			padding-left: 30rpx;
			width: 100%;
			white-space: pre-wrap;
			margin-bottom: 15rpx;
		}
	}

	// 拍照按钮
	.cameraBtn {
		width: 120rpx;
		height: 120rpx;
		line-height: 120rpx;
		border: 6rpx #FFFFFF solid;
		border-radius: 50%;
		padding: 8rpx;
		position: absolute;
		left: calc(50% - 60rpx);
		bottom: 200rpx;
	}

	.cameraBtn2 {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: #FFFFFF;
		text-align: center;
		color: #007AFF;
	}

	// 切换镜头按钮
	.xzImg {
		width: 52rpx;
		height: auto;
		position: absolute;
		right: 44rpx;
		bottom: 580rpx;
	}

	// 灯光按钮
	.sgdImg {
		width: 40rpx;
		height: auto;
		position: absolute;
		right: 50rpx;
		bottom: 450rpx;
	}

	// 取消按钮
	.bottomBtn {
		width: 100%;
		height: 150rpx;
		padding-bottom: 15rpx;
		position: absolute;
		bottom: 0;
		left: 0;
		text-align: center;
		display: flex;
		justify-content: space-between;

		.btn {
			width: 30%;
			height: 150rpx;
			font-size: 34rpx;
			color: #FFFFFF;
			line-height: 150rpx;
		}
	}
</style>
