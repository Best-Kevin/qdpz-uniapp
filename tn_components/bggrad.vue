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

		<view class="container padding-top">
			<text>渐变背景变化</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Custom: this.Custom
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.components-bggrad {
		margin: 0;
		width: 100%;
		height: 100vh;
		color: #fff;
		background: linear-gradient(45deg, #00F5D4, #01BEFF, #9A5CE5, #F15BB5);
		background-size: 500% 500%;
		animation: gradientBG 15s ease infinite;
	}

	@keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}

		50% {
			background-position: 100% 50%;
		}

		100% {
			background-position: 0% 50%;
		}
	}

	.container {
		width: 100%;
		position: absolute;
		text-align: center;
	}
</style>
