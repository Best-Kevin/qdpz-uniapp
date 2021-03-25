<!-- 心灵保健 -->
<template>
	<view class="contaier" :style="{ minHeight: getHeight + 'px' }">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">答题测试</block>
		</cu-custom>
		
		<view class="bannerBox">
			<image class="ggBox" mode="widthFix" src="http://cdn.zhoukaiwen.com/Banner3.jpg"></image>
		</view>
		
		<!-- 答题主页面 -->
		<view class="padding">
			<view class="mainBox radius shadow-warp bg-white margin-top relative">
				<view class="userHeard cu-avatar lg round" style="background-image:url(http://cdn.zhoukaiwen.com/logo.png);"></view>
				<view v-show="hasData">
					<view class="animation-reverse shadow" :class="animation" data-class="slide-rights" v-if="DataList[num].serialNumber">
						<view class="mentalTitle text-xl text-black text-bold">
							<text>{{ DataList[num].serialNumber || '' }}</text>
							<text>、</text>
							<text>{{ DataList[num].title || '' }}</text>
						</view>
						<view class="mentalList" v-for="(item, index) in DataList[num].itemList" v-bind:class="{ mentalListActive: index == mentalListActive }"
						 @tap="Toggle(index)">
							<view class="indexBox text-shadow">{{ item.number || '' }}</view>
							{{ item.answer || '' }}
						</view>
					</view>

					<u-line color="#dddddd"></u-line>

					<view class="margin-top cu-progress radius striped active">
						<view class="bg-blue" :style="[{ width: loading ? progress + '%' : '' }]">{{  progress }}%</view>
					</view>
					<view class="explainMain">本测试仅提供参考，不会作为最终依据</view>
				</view>

				<view v-show="noData">
					<view class="text-center text-bold text-black text-xxl margin-tb-xl">您已答题，感谢参与</view>
					<view class="text-center margin-tb-lg text-lg">评测结果：您的基础很好，继续加油。</view>
					<view class="text-gray text-center margin-tb-lg text-lg">题库正在更新中...</view>
				</view>
			</view>
		</view>

		<view class="explain">
			<view class="integral">您当前积分：{{currentPoints}}分</view>
			<view @click="goExplain">
				<u-icon name="question-circle-fill" size="30"></u-icon>
				答题规则说明
			</view>
		</view>

		<!-- 遮罩层 -->
		<u-mask :show="show">
			<view class="warp">
				<view class="rect" @tap.stop>
					<view class="closeBtn">
						<u-icon @click="closeMask" name="close-circle-fill" color="#ccc" size="58"></u-icon>
					</view>

					<view class="closeImg">
						<image mode="aspectFit" src="http://cdn.zhoukaiwen.com/answerTrophy.png"></image>
					</view>
					<view class="text-black text-bold text-center">恭喜您！完成答题！</view>
					<view class="text-center margin-tb-lg text-gray">{{showMessage}}</view>

					<view style="width: 350rpx; margin: 50rpx auto 0;">
						<button v-if="isShare != 1" @click="shareBtn" open-type="share" class="cu-btn round bg-blue shadow" style="width: 100%;">分享获得10个积分</button>
						<button v-if="isShare == 1" open-type="share" class="cu-btn round bg-blue shadow" style="width: 100%;">分享给好友</button>
					</view>
				</view>
			</view>
		</u-mask>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				getHeight: '',
				loading: false,
				animation: '',

				mentalListActive: -1,
				noData: false,
				hasData: true,

				// 数据
				num: 0,
				DataList: [{
						serialNumber: '1',
						name: '',
						title: '下列元素中，为行内元素的是（ ）',
						itemList: [{
								number: 'A',
								answer: 'div'
							},
							{
								number: 'B',
								answer: 'span'
							},
							{
								number: 'C',
								answer: 'p'
							},
							{
								number: 'D',
								answer: 'h3'
							}
						]
					},
					{
						serialNumber: '2',
						name: '',
						title: '下列是设置边框的属性（）',
						itemList: [{
								number: 'A',
								answer: 'border-color'
							},
							{
								number: 'B',
								answer: 'box-sizing'
							},
							{
								number: 'C',
								answer: 'background'
							},
							{
								number: 'D',
								answer: 'visibility'
							}
						]
					},
					{
						serialNumber: '3',
						name: '',
						title: '在javascript里，下列选项中不属于数组方法的是（ ）',
						itemList: [{
								number: 'A',
								answer: 'sort()'
							},
							{
								number: 'B',
								answer: 'length()'
							},
							{
								number: 'C',
								answer: 'concat()'
							},
							{
								number: 'D',
								answer: 'reverse()'
							}
						]
					},
					{
						serialNumber: '4',
						name: '',
						title: '下列属性哪一个能够实现层的隐藏？',
						itemList: [{
								number: 'A',
								answer: 'display:fals'
							},
							{
								number: 'B',
								answer: 'display:hidden'
							},
							{
								number: 'C',
								answer: 'display:none'
							},
							{
								number: 'D',
								answer: 'display:“”'
							}
						]
					},
					{
						serialNumber: '5',
						name: '',
						title: '以下哪个单词不属于javascript关键字',
						itemList: [{
								number: 'A',
								answer: 'with'
							},
							{
								number: 'B',
								answer: 'parent'
							},
							{
								number: 'C',
								answer: 'class'
							},
							{
								number: 'D',
								answer: 'void'
							}
						]
					},
				],
				setData: {
					// {
					// 	"surveyId": 1,
					// 	"chooses": [{
					// 			"serialNumber": 1,
					// 			"number": 1
					// 		}
					// 	]
					// }
				},

				//进度条
				progress: 0,

				currentPoints: 0, //当前积分
				isShare: 3, //是否分享	0否 1是

				showMessage: '' //答题结果

			};
		},
		onShareAppMessage(res) {
			return {
				title: '我已完成答题，快来参与吧'
			};
		},
		onLoad() {
			const that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.getHeight = res.windowHeight;
				}
			});
			setTimeout(function() {
				that.loading = true;
			}, 300);

			this.getData();
		},
		watch: {
			progress(val) {
				console.log(this.progress + '% - 进度');

				if (this.progress == 100) {
					this.noData = true;
					this.hasData = false;
					setTimeout(() => {
						this.show = true;
					}, 1300);
				}
			}
		},
		methods: {
			getData() {
				this.progress = 0;
			},
			Toggle(index) {
				this.mentalListActive = index;
				console.log(this.num + 1);
				console.log('length:',this.DataList.length)
				this.progress = (100 / this.DataList.length) * (this.num + 1); //进度条

				if (this.progress < 100) {
					setTimeout(() => {
						this.animation = 'animation-slide-left';
						this.num++; //翻第二页
						setTimeout(() => {
							this.mentalListActive = -1;
							this.animation = '';
						}, 800);
					}, 300);
				} else {
					console.log('没有下一题了');
					this.show = true;
				}
			},
			// 弹窗消失
			closeMask() {
				this.show = false;
			},
			goExplain() {
				uni.navigateTo({
					url: './explain'
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import '@/colorui/animation.css';

	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		width: 480rpx;
		// height: 520rpx;
		border-radius: 20rpx;
		padding: 25rpx 25rpx 80rpx 25rpx;
		box-sizing: border-box;
		background-color: #fff;
	}

	.closeImg {
		width: 100%;
		height: 200rpx;
		margin: 10rpx auto 30rpx;

		image {
			height: 200rpx;
		}
	}

	.cu-bar .cu-avatar:first-child {
		margin-left: -11px;
	}

	.cu-bar {
		height: 90rpx !important;
	}

	.mainBox {
		padding: 60rpx 40rpx 20rpx 40rpx;
	}

	.explainMain {
		width: 100%;
		text-align: center;
		font-size: 24rpx;
		text-align: center;
		color: #999999;
		margin-top: 30rpx;
	}

	.userHeard {
		position: absolute;
		left: 50%;
		top: -50rpx;
		margin-left: -50rpx;
	}

	.mentalTitle {
		margin: 0 0 30rpx 0;
	}

	.mentalList {
		width: 100%;
		height: 78rpx;
		line-height: 78rpx;
		padding-right: 20rpx;
		border-radius: 12rpx;
		margin: 30rpx 0;
		overflow: hidden;
		border: 1px solid #dddddd;

		.indexBox {
			width: 70rpx;
			height: 78rpx;
			text-align: center;
			line-height: 78rpx;
			float: left;
			background-color: #dddddd;
			margin-right: 15rpx;
		}
	}

	.mentalListActive {
		width: 100%;
		height: 78rpx;
		line-height: 78rpx;
		padding-right: 20rpx;
		border: 1px solid #0081ff;
		border-radius: 12rpx;
		color: #0081ff;
		margin: 30rpx 0;
		font-weight: 600;
		background-image: url(http://cdn.zhoukaiwen.com/answerYes.png);
		background-repeat: no-repeat;
		background-size: 38rpx;
		background-position: right 30rpx center;

		.indexBox {
			background-color: #0081ff;
			color: #ffffff;
		}
	}

	.contaier {
		background-color: #f2f2f2;

		.bannerBox {
			width: 750rpx;

			image {
				width: 750rpx;
			}
		}

		.explain {
			width: 750rpx;
			// position: absolute;
			bottom: 40rpx;
			font-size: 24rpx;
			margin: 10rpx 0 40rpx 0;
			text-align: center;
			color: #999999;

			.integral {
				font-size: 30rpx;
				margin-bottom: 15rpx;
				color: #333333;
			}
		}
	}
</style>
