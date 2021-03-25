<!-- 证件识别 -->
<template>
	<view>
		<cu-custom class="navBox" bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">证件识别</block>
		</cu-custom>

		<view class="container">
			<u-notice-bar mode="horizontal" type="primary" :list="list"></u-notice-bar>

			<view class="cu-bar bg-white margin-top-xs">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">请拍摄并上传您的身份证照片</text>
					<text class="text-ABC text-blue">Driving license</text>
				</view>
			</view>

			<view class="uploadBox">
				<view style="width: 47%;">
					<view class="uploadItem">
						<view class="imgBox imgEx1">
							<view class="leftTop"></view>
							<view class="leftTop2"></view>
							<view class="leftbottom"></view>
							<view class="leftbottom2"></view>
							<view class="rightTop"></view>
							<view class="rightTop2"></view>
							<view class="rightbottom"></view>
							<view class="rightbottom2"></view>
						</view>
						<image class="imgUrl" :src="imgUrl1"></image>
					</view>
					<view @click="uploadImg1" class="leftBtn text-white text-lg text-center">拍摄正面</view>
				</view>

				<view style="width: 47%;">
					<view class="uploadItem">
						<view class="imgBox imgEx2">
							<view class="leftTop"></view>
							<view class="leftTop2"></view>
							<view class="leftbottom"></view>
							<view class="leftbottom2"></view>
							<view class="rightTop"></view>
							<view class="rightTop2"></view>
							<view class="rightbottom"></view>
							<view class="rightbottom2"></view>
						</view>
						<image class="imgUrl" :src="imgUrl2"></image>
					</view>
					<view @click="uploadImg1" class="leftBtn text-white text-lg text-center">拍摄反面</view>
				</view>
			</view>

			<view class="cu-bar bg-white margin-top">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">识别内容核对</text>
					<text class="text-ABC text-blue">distinguish</text>
				</view>
			</view>

			<view class="distinguishBox">
				<view>
					<text class="text-bold disLabel">姓名：</text>
					<text>刘德华</text>
				</view>
				<view>
					<text class="text-bold disLabel">民族：</text>
					<text>汉</text>
				</view>
				<view>
					<text class="text-bold disLabel">居住地：</text>
					<text>陕西省西安市</text>
				</view>
				<view>
					<text class="text-bold disLabel">身份证号：</text>
					<text>610104196511090809</text>
				</view>
			</view>

			<view class="cu-bar bg-white margin-top">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">拍摄要求须知</text>
					<text class="text-ABC text-blue">requirement</text>
				</view>
			</view>

			<view class="requirement">
				<view>
					<text class="text-gray">请上传大陆公民持有的本人有效身份证；</text>
				</view>
				<view>
					<text class="text-gray">拍摄时确保身份证</text>
					<text class="text-red">边框完整，</text>
					<text class="text-red">字体清晰，</text>
					<text class="text-red">亮度均匀；</text>
				</view>

				<view class="errorBox">
					<view class="item1">
						<image class="iconImg" src="../static/discern/ok.png" mode="widthFix"></image>
					</view>
					<view class="item2">
						<image class="iconImg" src="../static/discern/no.png" mode="widthFix"></image>
					</view>
					<view class="item3">
						<image class="iconImg" src="../static/discern/no.png" mode="widthFix"></image>
					</view>
					<view class="item4">
						<image class="iconImg" src="../static/discern/no.png" mode="widthFix"></image>
					</view>
				</view>
			</view>

			<view class="submitBtn">提交认证</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'隐私说明：请按要求上传真实的证件照片，您所上传的行驶证仅用于平台账户绑定，请放心上传'
				],
				// ../static/me/zjx_me_bg6.jpg
				imgUrl1: '',
				imgUrl2: ''
			}
		},
		watch: {

		},
		onReady() {
			// 获取屏幕高度
			uni.getSystemInfo({
				success: res => {
					console.log(res.windowHeight)
				}
			});
		},
		mounted() {

		},
		methods: {
			//头像上传
			uploadImg1() {
				uni.chooseImage({
					count: 1,
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						console.log(chooseImageRes);
						uni.showToast({
							icon: 'none',
						    title: '上传成功，暂无接口预览',
						    duration: 2000
						});
						return false;
						uni.uploadFile({
							url: this.action, //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							header: {
								"Content-Type": "multipart/form-data",
								'X-Access-Token': uni.getStorageSync('token'),
							},
							success: (uploadFileRes) => {
								this.form.userBaseInfo.headPhoto = JSON.parse(uploadFileRes.data).message
							}
						});
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100%;
	}

	.uploadBox {
		padding: 15rpx 20rpx 40rpx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;

		.leftBtn {
			width: 100%;
			height: 75rpx;
			line-height: 75rpx;
			background-color: #007aec;
			border-radius: 0 0 12rpx 12rpx;
		}

		.uploadItem {
			width: 100%;
			height: 255rpx;
			background-color: #f1f7ff;
			border-radius: 15rpx;
			padding: 30rpx;
			position: relative;

			.imgUrl {
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
			}

			.imgBox {
				width: 100%;
				height: 100%;
				position: relative;
			}

			.imgEx1 {
				background: url(../static/discern/ex1.png);
				background-size: 82%;
				background-repeat: no-repeat;
				background-position: center;
			}

			.imgEx2 {
				background: url(../static/discern/ex2.png);
				background-size: 82%;
				background-repeat: no-repeat;
				background-position: center;
			}

			.leftTop {
				height: 28rpx;
				width: 4rpx;
				background-color: #007aec;
				position: absolute;
				left: 0;
			}

			.leftTop2 {
				height: 4rpx;
				width: 28rpx;
				background-color: #007aec;
				position: absolute;
				top: 0;
			}

			.leftbottom {
				height: 28rpx;
				width: 4rpx;
				background-color: #007aec;
				position: absolute;
				bottom: 0;
			}

			.leftbottom2 {
				height: 4rpx;
				width: 28rpx;
				background-color: #007aec;
				position: absolute;
				bottom: 0;
			}

			.rightTop {
				height: 28rpx;
				width: 4rpx;
				background-color: #007aec;
				position: absolute;
				right: 0;
			}

			.rightTop2 {
				height: 4rpx;
				width: 28rpx;
				background-color: #007aec;
				position: absolute;
				right: 0;
				top: 0;
			}

			.rightbottom {
				height: 28rpx;
				width: 4rpx;
				background-color: #007aec;
				position: absolute;
				right: 0;
				bottom: 0;
			}

			.rightbottom2 {
				height: 4rpx;
				width: 28rpx;
				background-color: #007aec;
				position: absolute;
				right: 0;
				bottom: 0;
			}
		}
	}

	.distinguishBox {
		padding: 5rpx 30rpx 20rpx;
		background: white;

		view {
			margin-bottom: 20rpx;
		}
	}

	.disLabel {
		text-align-last: justify;
		text-align: justify;
		text-justify: distribute-all-lines;
		min-width: 142rpx;
		display: inline-block;
		margin-right: 5rpx;
	}

	.requirement {
		padding: 10rpx 30rpx 26rpx;
		background: white;

		view {
			margin-bottom: 10rpx;
		}

		.errorBox {
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;

			view {
				width: 23%;
				height: 100rpx;
			}

			.item1 {
				background-image: url(../static/discern/yes.png);
				background-repeat: no-repeat;
				background-size: 100%;
				position: relative;
			}

			.item2 {
				background-image: url(../static/discern/error1.png);
				background-repeat: no-repeat;
				background-size: 100%;
				position: relative;
			}

			.item3 {
				background-image: url(../static/discern/error2.png);
				background-repeat: no-repeat;
				background-size: 100%;
				position: relative;
			}

			.item4 {
				background-image: url(../static/discern/error3.png);
				background-repeat: no-repeat;
				background-size: 100%;
				position: relative;
			}

			.iconImg {
				width: 60rpx;
				position: absolute;
				bottom: -10px;
				left: 50%;
				margin-left: -30rpx;
			}
		}
	}

	.submitBtn {
		width: 90%;
		height: 90rpx;
		background: #007aec;
		line-height: 90rpx;
		margin: 50rpx auto;
		text-align: center;
		font-size: 34rpx;
		color: #fff;
		border-radius: 12rpx;
	}
</style>
