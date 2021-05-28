<template>
	<view class="components-bggrad">
		<tn-custom>
			<block slot="left">
				<!-- #ifdef MP-WEIXIN -->
				<navigator class='action border-custom' open-type="navigateBack" :delta="1" hover-class="none" :style="'width:' + Custom.width + 'px;height:' + Custom.height + 'px;margin-left:calc(750rpx - ' + Custom.right + 'px)'">
					<text class='cuIcon-back'></text>
					<text class='cuIcon-homefill'></text>
				</navigator>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<navigator class='action border-custom' open-type="navigateBack" :delta="1" hover-class="none" style="width: 174rpx;height: 64rpx;margin-left: 20rpx">
					<text class='cuIcon-back'></text>
					<text class='cuIcon-homefill'></text>
				</navigator>
				<!-- #endif -->
			</block>
		</tn-custom>

		<view class="container" :style="'height:calc(100% - ' + Custom.height*3 + 'px)'">
			<view class="box" v-if="showPage == 1">
				<p>
					<h3>欢迎加入我们！</h3>
				</p>
				<p>
					<text>为了给您提供专业的健康服务，我们已为您建立专属的档案。</text>
				</p>
				<p>
					<text>只需要1-2分钟完善信息，我们即可为您推荐适合的健康方案。</text>
				</p>
				<button class="blueBtn cu-btn bg-blue shadow lg">下一步</button>
				<!-- <image src="https://cdn.zhoukaiwen.com/icon-guide.png"></image> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Custom: this.Custom,
				showPage: 1,
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.components-bggrad {
		margin: 0;
		width: 100%;
		height: 100vh;
		background-color: #fff;
	}
	.container {
		width: 100%;
		position: absolute;
		text-align: center;
		text-align: left;
		background-image: url(https://cdn.zhoukaiwen.com/icon-guide.png);
		background-size: 70%;
		background-repeat: no-repeat;
		background-position: 50% 35%;
	}
	.box{
		padding: 20rpx 30rpx 10rpx 30rpx;
		font-size: 26rpx;
		color: #686b78;
		text-align: justify;
		h3{
			font-size: 38rpx;
			color: #333;
			margin-bottom: 10rpx;
		}
	}
	.blueBtn {
		width: 700rpx;
		margin: 50rpx auto;
		display: block;
		line-height: 80rpx;
		position: absolute;
		bottom: 30rpx;
	}
</style>
