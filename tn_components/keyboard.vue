<template>
	<view>
		<cu-custom class="navBox" bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">自定义键盘</block>
		</cu-custom>

		<view class="bannerBg" @tap="plateShow = true">
			<image src="https://zhoukaiwen.com/img/keyboard.jpeg" mode="widthFix"></image>
			<view class="carNumBox">
				<view class="plate-box" :class="PageCur=='1'?'':'green'">
					<uni-label class="uni-label-pointer focus" id="input0" data-index="0">{{plateNo.substr(0,1)}}</uni-label>
					<uni-label class="uni-label-pointer" id="input1" data-index="1">{{plateNo.substr(1,1)}}</uni-label>
					<uni-label class="uni-label-pointer" id="input2" data-index="2">{{plateNo.substr(2,1)}}</uni-label>
					<uni-label class="uni-label-pointer" id="input3" data-index="3">{{plateNo.substr(3,1)}}</uni-label>
					<uni-label class="uni-label-pointer" id="input4" data-index="4">{{plateNo.substr(4,1)}}</uni-label>
					<uni-label class="uni-label-pointer" id="input5" data-index="5">{{plateNo.substr(5,1)}}</uni-label>
					<uni-label class="uni-label-pointer" id="input6" data-index="6">{{plateNo.substr(6,1)}}</uni-label>
					<uni-label class="uni-label-pointer" :class="PageCur=='1'?'xinnengyuan':''" id="input7" data-index="7">{{plateNo.substr(7,1)}}</uni-label>
				</view>
			</view>
		</view>
		<view style="margin-top: 110rpx;" class="cu-list menu">
			<view class="cu-item">
				<view class="content">
					<image src="https://zhoukaiwen.com/img/icon/carP.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">车牌号码</text>
				</view>
				<view class="action">
					<view v-if="PageCur=='1'" class="cu-tag round bg-blue light">{{plateNo | plateNoF}}</view>
					<view v-if="PageCur!='1'" class="cu-tag round bg-green light">{{plateNo | plateNoF}}</view>
				</view>
			</view>

			<view class="cu-item">
				<view class="content">
					<image src="https://zhoukaiwen.com/img/icon/car.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">车辆类型</text>
				</view>
				<view class="action">
					<text v-show="plateNo != ''" :class="PageCur=='1'?'text-blue':'text-green'">临停车辆</text>
				</view>
			</view>

			<view class="cu-item">
				<view class="content">
					<image src="https://zhoukaiwen.com/img/icon/clock2.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">入场时间</text>
				</view>
				<view class="action">
					<text v-show="plateNo != ''" :class="PageCur=='1'?'text-blue':'text-green'">2021年10月1日 13:33:44</text>
				</view>
			</view>

			<view class="cu-item">
				<view class="content">
					<image src="https://zhoukaiwen.com/img/icon/clock1.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">停车时长</text>
				</view>
				<view class="action">
					<text v-show="plateNo != ''" :class="PageCur=='1'?'text-blue':'text-green'">10小时05分33秒</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<image src="https://zhoukaiwen.com/img/icon/pay.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">停车费用</text>
				</view>
				<view class="action">
					<text v-show="plateNo != ''" :class="PageCur=='1'?'text-blue':'text-green'">共计：30元</text>
				</view>
			</view>
		</view>
		
		<view  class="cu-list menu">
			<view class="cu-item">
				<view class="content padding-tb-sm">
					<view class="text-lg">
						<text class="cuIcon-info text-blue margin-right-xs"></text> 停车规则
					</view>
					<view class="text-gray">
						当前空车位总数：1200
					</view>
					<view class="text-gray">
						当前时段：8:00 - 18:00，收费：6元/小时
					</view>
				</view>
			</view>
		</view>
		<uni-view class="padding flex flex-direction">
			<uni-button v-show="plateNo != ''" style="border-radius: 12rpx;" class="cu-btn margin-tb-sm lg" :class="PageCur=='1'?'bg-blue':'bg-green'">确认支付 ¥30.00</uni-button>
			<uni-button v-show="plateNo == ''" @tap="plateShow = true" style="border-radius: 12rpx;" class="cu-btn margin-tb-sm lg" :class="PageCur=='1'?'bg-blue':'bg-green'">输入车牌号</uni-button>
		</uni-view>

		<!-- 自定义键盘组件 -->
		<plate-input @typeChange="typeChange" v-if="plateShow" :plate="plateNo" @export="setPlate"
			@close="plateShow = false & close()" />
	</view>

</template>

<script>
	import plateInput from '@/components/uni-plate-input/uni-plate-input.vue';
	export default {
		components: {
			plateInput
		},
		data() {
			return {
				plateNo: '',
				plateShow: false,
				inputDisabled: true,
				PageCur: 1,
			};
		},
		onLoad() {},
		methods: {
			setPlate(plate) {
				console.log(plate)
				if (plate.length >= 7) this.plateNo = plate;
				this.plateShow = false;
			},
			typeChange(e) {
				console.log(e);
				this.PageCur = e;
				this.plateNo = '';
			},
			close(){
				this.PageCur = 1;
			}
		},
		filters:{
			plateNoF(val){
				if(val == ''){
					return '请先填写车辆号牌'
				}else{
					let arr = val.split('');
					arr.splice(2,0,' · ');
					return arr.join('')
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.bannerBg {
		width: 750rpx;
		position: relative;

		image {
			width: 750rpx;
		}

		.carNumBox {
			position: absolute;
			width: 650rpx;
			height: 180rpx;
			background-color: #ffffff;
			bottom: -90rpx;
			left: 50%;
			z-index: 9;
			margin-left: -325rpx;
			border-radius: 12rpx;
		}

		.plate-box {
			position: relative;
			width: 420rpx;
			height: 50rpx;
			padding: 24rpx;
			background: #2d66d8;
			box-sizing: content-box;
			margin: auto;
			border-radius: 10rpx;
			-webkit-transition: all 1s;
			transition: all 1s;
			margin-top: 42rpx;
		}

		.plate-box.green {
			background: -webkit-linear-gradient(#f8f8f8 20%, #16b235);
			background: linear-gradient(#f8f8f8 20%, #16b235);
			box-shadow: 0 0 4rpx 0 #ebebeb;
		}

		.plate-box::before {
			content: '';
			border: 2rpx solid #ffffff;
			position: absolute;
			top: 4rpx;
			left: 4rpx;
			width: 455rpx;
			border-radius: 10rpx;
			height: 86rpx;
		}

		.plate-box.green::before {
			border: 1px solid #000000;
		}

		.plate-box uni-label {
			position: relative;
			vertical-align: middle;
			display: inline-block;
			width: 50rpx;
			color: #fff;
			text-align: center;
			font-size: 50rpx;
			height: 50rpx;
			line-height: 50rpx;
			text-shadow: 0rpx 0rpx 2rpx #000;
		}

		.plate-box.green uni-label {
			color: #222;
			text-shadow: 0 0 1px #fff;
		}

		.plate-box uni-label.xinnengyuan::before {
			content: '';
			position: absolute;
			left: 12%;
			top: 12%;
			width: 76%;
			height: 76%;
			background-size: 100%;
			background-repeat: no-repeat;
			background-image: url(https://zhoukaiwen.com/img/icon/keyboard_icon.png);
		}

		.plate-box uni-label:nth-child(2) {
			margin-right: 20rpx;
		}

		.plate-box::after {
			content: '·';
			position: absolute;
			left: 126rpx;
			top: 30rpx;
			color: #fff;
			font-size: 50rpx;
			line-height: 40rpx;
		}

		.plate-box.green::after {
			content: '';
			position: absolute;
			left: 120rpx;
			top: 38rpx;
			width: 26rpx;
			height: 26rpx;
			background-size: 100%;
			background-repeat: no-repeat;
			background-image: url(https://zhoukaiwen.com/img/car_d_logo.png);
			background-repeat-x: no-repeat;
			background-repeat-y: no-repeat;
		}
	}

	.cu-form-group {
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		background-color: #ffffff;
		padding: 1upx 30upx;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
	}
</style>
