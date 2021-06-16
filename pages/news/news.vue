<!-- 新闻 详情 -->
<template>
	<view class="container">
		<view style="background-color: #FFFFFF;padding: 30rpx 30rpx 30rpx 30rpx;">
			<view class="titleBox text-xl text-black text-bold">{{getData.title}}</view>
			<view class="timeBox text-df text-gray margin-top-sm margin-bottom-sm">{{getData.createTime}}</view>
			<image mode="widthFix" :src="getData.url"></image>

			<!-- 中间文章区域 -->
			<view class="contentBox text-lg text-black margin-top-sm">
				<view v-html="getData.content"></view>
			</view>
		</view>
		
		<view v-if="getData.evaluateList" style="background-color: #FFFFFF;padding: 0rpx 30rpx 15rpx0rpx;margin: 25rpx 0 170rpx 0;">
			<view class="cu-bar justify-left bg-white">
				<view class="action border-title">
					<text class="text-lg text-bold text-blue">评论</text>
					<text class="bg-gradual-blue" style="width:3rem"></text>
				</view>
			</view>

			<view v-if="getData.evaluateList.length < 1" class="text-lg text-bold text-center margin-bottom-lg">暂无评论</view>

			<view v-if="getData.evaluateList.length > 0" class="cu-list menu-avatar comment solids-top">
				<view class="cu-item" v-for="(item,index) in getData.evaluateList">
					<view class="cu-avatar round" style="background-image:url(http://1.85.32.5:49000/daxiang/common/20200918181604.png);"></view>
					<view class="content">
						<view class="text-grey">{{item.userName}}</view>
						<view class="text-gray text-content text-df">
							{{item.describ}}
						</view>
						<view class="margin-top-sm flex justify-between">
							<view class="text-gray text-df">{{item.createTime}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部评论 -->
		<view class="bottomBox solids-top">
			<view class="cu-bar input">
				<input v-model="comment_input" @confirm="send_btn" confirm-type="send" class="solid" maxlength="300" cursor-spacing="10" placeholder="说说你的看法.."></input>
				<!-- <view class="action">
					<button style="background: transparent;" open-type="share" hover-class='none'>
						<text class="cuIcon-share text-grey"></text>
					</button>
				</view> -->
				<view class="action">
					<view class="cuIcon-appreciatefill text-grey" @click="praiseClick">
						<view class="cu-tag badge" style="top: 6rpx; right: 28rpx;">{{getData.praise || 0}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="safe-area-inset-bottom"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				getData: [],

				detailsId: '',
				
				comment_input:'',	//评论内容
				praiseType: 0, //1点赞  2取消点赞
			}
		},
		onLoad(option) {
			this.detailsId = option.detailsId;
			this.getDataFun();
		},
		methods: {
			onShareAppMessage(res) {
				return {
					title: '轻松一课，来看看吧～',
				}
			},
			getDataFun() {
				this.getData = {
					title: '来，一起手撕32个大厂高频面试编程题',
					createTime: '2020年11月03日',
					url: 'https://zhoukaiwen.com/img/kevinLogo.png',
					content: "来，一起手撕32个大厂高频面试编程题。1. 浏览器分类：浏览器：IE，Chrome，FireFox，Safari，Opera。内核：Trident，Gecko，Presto，Webkit。"
				};
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			},
			// 评论
			send_btn(){
				// console.log(this.comment_input);
				let optsList = {
					url: 'south/southEasyLessonEvaluate/xcx/evaluate',
					method: 'post'
				};
				let paramsList = {
					articleId: this.detailsId,
					describ: this.comment_input, 
				};
				request.httpTokenRequest(optsList, paramsList).then(res => {
					if (res.data.code === 200) {
						console.log(res.data);
						this.comment_input = '';
						this.getDataFun();
					}
				});
			},
			// 点赞
			praiseClick() {
				uni.showToast({
					title: '感谢参与',
					duration: 2000
				});
				if (this.praiseType == 1) {
					this.praiseType = 2;
				} else if (this.praiseType == 2) {
					this.praiseType = 1;
				} else {
					this.praiseType = 1;
				}

				// 提交点赞数据
				let opts = {
					url: `south/southEasyLesson/xcx/${this.detailsId}/type/${this.praiseType}`,
					method: 'post'
				};
				request.httpTokenRequest(opts).then(res => {
					console.log(res)
					if (res.data.code == 200) {
						this.getDataFun();
					}
				});

				console.log(this.detailsId);
				console.log(this.praiseType);
			}
		}
	}
</script>

<style lang="scss" scoped>
	button::after {
		border: none;
		background: transparent;
	}

	uni-button {
		background: transparent;
	}

	.container {
		background-color: #f2f2f2;
		width: 750rpx;

	}

	.solid {
		border-radius: 50rpx;
		text-indent: 12rpx;
	}

	image {
		width: 750rpx;
	}

	.bottomBox {
		width: 750rpx;
		position: fixed;
		left: 0;
		bottom: 0rpx;
	}
</style>
