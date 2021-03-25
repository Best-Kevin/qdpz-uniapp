<template>
	<view class="components-ancube">
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

		<view class="box">
			<view class="cube">
				<view class="front" style="background-image: linear-gradient(45deg, #f43f3b, #ec008c);"></view>
				<view class="back" style="background-image: linear-gradient(45deg, #ff7612, #ff571c);"></view>
				<view class="left" style="background-image: linear-gradient(45deg, #7FD02B, #9ddb47);"></view>
				<view class="right" style="background-image: linear-gradient(45deg, #9000ff, #5e00ff);"></view>
				<view class="top" style="background-image: linear-gradient(45deg, #6F68DF, #ec008c);"></view>
				<view class="bottom" style="background-image: linear-gradient(45deg, #0070FF, #19CF8A);"></view>

				<view class="in-front"></view>
				<view class="in-back"></view>
				<view class="in-left"></view>
				<view class="in-right"></view>
				<view class="in-top"></view>
				<view class="in-bottom"></view>
			</view>
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
	.components-ancube {
		margin: 0;
		width: 100%;
		height: 100vh;
		color: #fff;
		background: linear-gradient(45deg, #00F5D4, #01BEFF);
	}

	@keyframes rotate {
		0% {
			transform: rotateX(0deg) rotateY(0deg);
		}

		100% {
			transform: rotateX(360deg) rotateY(360deg);
		}
	}

	.box {
		margin: 250rpx;
		perspective: 1000px;
	}

	.cube {
		width: 100px;
		height: 100px;
		position: relative;
		transform: rotateX(-41deg) rotateY(-63deg);
		transform-style: preserve-3d;
		animation: rotate 20s infinite linear;
	}

	.cube>view {
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 200px;
		font-size: 40px;
		font-weight: bold;
		color: #FFFFFF;
		background: rgba(0, 245, 212, .6);
		border: 1px solid #FFFFFF;
		position: absolute;
		top: 0;
		left: 0;
		transition: transform 5s ease-in;
	}

	.front {
		transform: translateZ(100px)
	}

	.back {
		transform: translateZ(-100px) rotateY(-180deg)
	}

	.left {
		transform: translateX(-100px) rotateY(-90deg)
	}

	.right {
		transform: translateX(100px) rotateY(90deg)
	}

	.top {
		transform: translateY(-100px) rotateX(90deg)
	}

	.bottom {
		transform: translateY(100px) rotateX(-90deg);
	}

	.cube>span {
		display: block;
		width: 100px;
		height: 100px;
		border: 1px solid black;
		background-color: #666666;
		position: absolute;
		top: 50px;
		left: 50px;
	}

	.in-front {
		transform: translateZ(50px);
	}

	.in-back {
		transform: translateZ(-50px) rotateY(180deg);
	}

	.in-left {
		transform: translateX(50px) rotateY(90deg);
	}

	.in-right {
		transform: translateX(-50px) rotateY(-90deg);
	}

	.in-top {
		transform: translateY(50px) rotateX(90deg);
	}

	.in-bottom {
		transform: translateY(-50px) rotateX(-90deg);
	}
</style>
