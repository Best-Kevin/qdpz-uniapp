<template>
	<view class="components-bgcolor">
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
			<text>纯色渐变背景</text>
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
	.components-bgcolor {
		margin: 0;
		width: 100%;
		height: 100vh;
		color: #fff;
		overflow: hidden;
		animation: color-loop 18s infinite;
	}

	@keyframes color-loop {
		0% {
			background: #F15BB5;
		}

		25% {
			background: #00F5D4;
		}

		50% {
			background: #01BEFF;
		}

		75% {
			background: #9A5CE5;
		}

		100% {
			background: #F15BB5;
		}
	}

	.container {
		width: 100%;
		position: absolute;
		text-align: center;
	}
	
</style>
