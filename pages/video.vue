<!-- 查看视频 -->
<template>
	<view class="container">
		<view class="MainBox">
			<!-- 此处为“腾讯视频插件” -->
			<!-- 小程序没有影视音证书就无法上线视频播放相关功能，必须要使用腾讯视频插件，您如果是做demo不考虑上线，可以使用<video>标签 -->
			<txv-video :vid="videoUrl" playerid="txv1"></txv-video>
			
			<view class="cssBox" style="position: relative;">
				
				<view class="leftBox">
					<view class="margin-bottom-sm">
						<text class="text-bold text-xl">第一节课·测试数据</text>
					</view>
					<view>
						<view class="fl margin-right text-df text-gray">
							<u-icon name="play-circle" style="margin-right: 5rpx;"></u-icon>
							<text>11.2w</text>
						</view>
					
						<view class="fl margin-right text-df text-gray">
							<u-icon name="order" style="margin-right: 5rpx;"></u-icon>
							<text>1852</text>
						</view>
					
						<view class="fl margin-right text-df text-gray">
							<u-icon name="clock" style="margin-right: 6rpx;"></u-icon>
							<text>2020-11-18</text>
						</view>
						<view style="clear: both;"></view>
					
					</view>
				</view>
				
				<button hover-class='none' class='rightBox' open-type="share">
					<u-icon label-color="#2979ff" label-size="26" margin-top="12" label-pos="bottom" label="分享一下" name="share" color="#2979ff" size="54"></u-icon>
				</button>
				
				

			</view>

			<view class="cssBox">
				<view class="margin-bottom-sm">
					<text class="text-bold text-lg">简介：</text>
				</view>
				<text class="text-df">这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频</text>
			</view>
			
			<view class="cssBox">
				<view class="margin-bottom-sm flex justify-between">
					<text class="text-bold text-lg">选择课程：</text>
					<text class="text-gray text-df">共5节课/当前播放：第2节</text>
				</view>
				<view class="courseBox flex justify-around">
					<view>第一课 初识uniapp</view>
					<view class="active">第二课 项目工具及搭建</view>
					<view>第三课 案例分析</view>
					<view>第四课 制作项目</view>
					<view>第五课 打包上线</view>
				</view>
			</view>

			<view class="cssBox">
				<view class="margin-bottom-sm">
					<text class="text-bold text-lg">相关推荐</text>
				</view>
				<view class="cu-card article no-card">
					
					<view class="cu-item shadow">
						<view class="content" style="padding: 0;">
							<image src="http://cdn.zhoukaiwen.com/web2.jpg" mode="aspectFill"></image>
							<view class="desc">

								<view class="list_title">
									测试标题测试标题测试标题
								</view>

								<view class="list_content"> 折磨生出苦难苦难又会加剧折磨凡间这无穷的循环将有我来终结真正的恩典因不完整而美丽因情感而真诚因脆弱而自由</view>
								<view class="flex justify-between">
									<view class="cu-tag bg-grey light sm round">
										<u-icon name="play-circle" style="margin-right: 2rpx;"></u-icon>
										1000阅读量
									</view>
									<view class="cu-tag bg-grey light sm round">
										<u-icon name="clock" style="margin-right: 5rpx;"></u-icon>
										2020-11-03
									</view>
								</view>
							</view>
						</view>
					</view>
					
					<view class="cu-item shadow">
						<view class="content" style="padding: 0;">
							<image src="http://cdn.zhoukaiwen.com/web2.jpg" mode="aspectFill"></image>
							<view class="desc">
					
								<view class="list_title">
									标题标题标题标题
								</view>
					
								<view class="list_content"> 折磨生出苦难苦难又会加剧折磨凡间这无穷的循环将有我来终结真正的恩典因不完整而美丽因情感而真诚因脆弱而自由</view>
								<view class="flex justify-between">
									<view class="cu-tag bg-grey light sm round">
										<u-icon name="play-circle" style="margin-right: 2rpx;"></u-icon>
										1000阅读量
									</view>
									<view class="cu-tag bg-grey light sm round">
										<u-icon name="clock" style="margin-right: 5rpx;"></u-icon>
										2020-11-03
									</view>
								</view>
							</view>
						</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>


	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				videoUrl: 'x3032spkh1m',
				getData:[
					{
						title: 'uniapp开发',
						studyNum: '335',
						review: '35',
						time: '2020-12-11',
						synopsis: 'uni-app是一个使用Vue.js开发跨平台个人文库应用的前端框架,开发者编写一套代码,可编译到的iOS,安卓,H5,小程序等多个平台。',
						item: [
							{
								title: "第一课",
								name: "初识uniapp",
								vidUrl: 'x3032spkh1m'
							}
						]
					}
				]
			}
		},
		onLoad() {
			
		},
		// 分享小程序
		onShareAppMessage(res) {
			return {
				title: '零基础学习IT知识，直指万元高薪！'
			};
		},
		methods: {
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #f2f5f9;
	}

	.MainBox {
		width: 750rpx;

		video {
			width: 750rpx;
		}
	}

	.cssBox {
		padding: 20rpx 30rpx;
		background-color: #FFFFFF;
		margin-bottom: 15rpx;
	}
	.rightBox{
		width: 150rpx;
		height: 100%;
		position: absolute;
		right: 20rpx;
		top: 0;
		text-align: center;
		line-height: 120rpx;
		padding: 0;
		background: none;
	}

	.list_title {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		font-size: 30rpx;
		font-weight: 600;
		color: #333333;
	}

	.list_content {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		word-break: break-all;
		font-size: 28rpx;
		color: #888;
	}
	
	.courseBox{
		    display: flex;
		    flex-wrap: wrap;
		    justify-content: space-between;
			margin-left: -10px;
		view{
			width: 240rpx;
			height: 58rpx;
			border: 2rpx solid #909399;
			text-align: center;
			line-height: 58rpx;
			-webkit-border-radius: 6px;
			border-radius: 12rpx;
			margin:10rpx 0 20rpx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
			word-break: break-all;
			font-size: 24rpx;
			color: #909399;
			padding: 0 6rpx;
		}
		.active{
			border: 2rpx solid #2979ff;
			background-color: #2979ff;
			color: #FFFFFF;
		}
	}
	.courseBox::after {
	    content: "";
		flex: auto; 
	}
	.courseBox>view {
		margin-left: 10px;
		margin-bottom: 10px;
		width: -webkit-calc((100% - 10px*3)/ 3);
		width: calc((100% - 10px*3)/ 3);
	}
	button::after {
		border: none;
		padding: 0;
	}
</style>
