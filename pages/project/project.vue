<!-- 新闻 详情 -->
<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">项目详情</block>
		</cu-custom>

		<view v-if="newsData.title">
			<view style="background-color: #FFFFFF;padding: 30rpx 30rpx 30rpx 30rpx;">
				<view class="titleBox text-xl text-black text-bold">{{newsData.title}}</view>
				<view class="timeBox text-df text-gray margin-top-sm margin-bottom-sm">
					{{newsData.author}} - {{newsData.createdAt | formatDate}} - {{newsData.type | typeF}}
				</view>
				<image mode="widthFix" :src="newsData.img"></image>

				<!-- 中间文章区域 -->
				<view class="contentBox text-lg text-black margin-top-sm margin-tb-lg">
					<view class="margin-top-sm" v-for="(item, index) in newsData.content.split('&')" v-html="item">
					</view>
				</view>
			</view>	
			<view class="cu-bar justify-left bg-white margin-top-sm">
				<view class="action border-title">
					<text class="text-lg text-bold text-blue">图片展示</text>
					<text class="bg-gradual-blue" style="width:3rem"></text>
				</view>
			</view>
			<view style="background-color: #FFFFFF;padding: 0rpx 30rpx 30rpx 30rpx;">

				<!-- 图片展示 · 多条 -->
				<image @click="previewImage(index)" v-for="(item, index) in newsData.imgList.split(',')" :key="index"
					mode="widthFix" :src="item"></image>

				<!-- 浏览、点赞、分享数 -->
				<view class="text-right text-df text-gray margin-top-sm margin-bottom-sm">
					<text class="text-gray cuIcon-attentionfill text-df" style="margin-right: 6rpx;"></text>
					<text class="text-df margin-right-sm" style="margin-top: 2rpx;">{{newsData.seeNum}}</text>
					<text class="text-gray cuIcon-appreciatefill text-df" style="margin-right: 6rpx;"></text>
					<text class="text-df margin-right-sm" style="margin-top: 2rpx;">{{newsData.likesNum}}</text>
					<text class="text-gray cuIcon-share text-df" style="margin-right: 6rpx;"></text>
					<text class="text-df" style="margin-top: 2rpx;">{{newsData.commentNum}}</text>
				</view>
			</view>
		</view>

		<view style="background-color: #FFFFFF;padding: 0rpx 30rpx 15rpx0rpx;margin: 25rpx 0 100rpx 0;">
			<view class="cu-bar justify-left bg-white">
				<view class="action border-title">
					<text class="text-lg text-bold text-blue">评论</text>
					<text class="bg-gradual-blue" style="width:3rem"></text>
				</view>
			</view>

			<!-- <view class="text-lg text-bold text-center margin-bottom-lg">暂无评论</view> -->

			<view class="cu-list menu-avatar comment solids-top">
				<view class="cu-item">
					<view class="cu-avatar round" style="background-image:url(https://cdn.zhoukaiwen.com/logo.png);">
					</view>
					<view class="content">
						<view class="text-grey">凯文童鞋</view>
						<view class="text-gray text-content text-df">
							评论功能暂未开启哦～
						</view>
						<view class="margin-top-xs flex justify-between">
							<view class="text-gray text-df">2021-12-05 09:46</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white tabbar border shop bottomBox">
			<button class="action" open-type="share">
				<view class="cuIcon-share text-green">
					<view class="cu-tag badge">{{newsData.commentNum}}</view>
				</view>
				分享
			</button>
			<button class="action" open-type="contact">
				<view class="cuIcon-service text-green">
					<view class="cu-tag badge"></view>
				</view>
				联系我们
			</button>
			<view class="btn-group">
				<button style="width: 80%;height: 70rpx;" @click="praiseClick(newsData.id)"
					class="cu-btn bg-gradual-blue round shadow-blur">
					<view class="cuIcon-appreciatefill text-white margin-right-xs"></view>
					赞一下吧
				</button>
			</view>
		</view>
		<view class="safe-area-inset-bottom"></view>
	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				newsData: [],
				requestStatus: false // 事件防抖
			}
		},
		onLoad(option) {
			console.log(option)
			this.getData(option.id);
		},
		onShareTimeline() {
			return {
				title: '「前端铺子」技术 # 案例 # 学习 # 提升，开发者者的聚集地！',
				imageUrl: 'https://cdn.zhoukaiwen.com/qdpz_share.jpg',
			}
		},
		methods: {
			// 获取详情
			getData(id) {
				console.log(id);
				uni.showLoading({
					title: '加载中'
				});
				let opts = {
					url: 'api/project/detail?id=' + id,
					method: 'get'
				};
				request.httpRequest(opts).then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.data.data.id) {
						this.newsData = res.data.data;
					} else {
						console.log('数据请求错误～');
					}
				});
			},
			// 点赞
			praiseClick(id) {
				console.log(id);
				if (this.requestStatus) { // 时间防抖：利用 return 终止函数继续运行
					return false;
				};
				this.requestStatus = true;
				uni.showLoading({
					title: '加载中'
				});
				let opts = {
					url: 'api/project/like?id=' + id,
					method: 'get'
				};
				request.httpRequest(opts).then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.data.code == 200) {
						this.newsData.likesNum++;
						uni.showToast({
							title: '点赞成功！感谢参与',
							duration: 2000
						});
						setTimeout(() => {
							// 模拟执行完毕，改变 requestStatus
							this.requestStatus = false;
						}, 2500);
					} else {
						console.log('数据请求错误～');
					}
				});
			},
			previewImage(index) {
				// 预览功能需要数组格式，具体查看uniapp文档：previewImage
				const seeImgList = this.newsData.imgList.split(',')
				uni.previewImage({
					current: index, //预览图片的下标
					urls: seeImgList //预览图片的地址，必须要数组形式，如果不是数组形式就转换成数组形式就可以
				})
			},
			onShareAppMessage (options) {
				// 自定义分享内容
				var shareObj = {
					title: this.newsData.title, // 小程序的名称
					path: '/pages/index/tabbar', // 默认是当前页面，必须是以‘/’开头的完整路径
					imageUrl: this.newsData.img //自定义图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
				};
				// 来自页面内的按钮的转发
				if (options.from == 'button') {
					console.log("来源于button");
					// 此处可以修改 shareObj 中的内容
					// shareObj.path = '/pages/xxx/xxx?id='id;
					this.shareFun(this.newsData.id)
				}
				// 返回shareObj
				return shareObj;
			},
			// 分享接口
			shareFun(id){
				console.log(id);
				uni.showLoading({
					title: '加载中'
				});
				let opts = {
					url: 'api/project/share?id=' + id,
					method: 'get'
				};
				request.httpRequest(opts).then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.data.code == 200) {
						this.newsData.commentNum++;
					} else {
						console.log('数据请求错误～');
					}
				});
			}
		},
		filters: {
			formatDate(value) {
				if (value == undefined) {
					return;
				}
				// let date = new Date(value * 1000);
				let date = new Date(value);
				//时间戳为10位需*1000，时间戳为13位的话不需乘1000
				let y = date.getFullYear();
				let MM = date.getMonth() + 1;
				MM = MM < 10 ? ('0' + MM) : MM; //月补0
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d; //天补0
				let h = date.getHours();
				h = h < 10 ? ('0' + h) : h; //小时补0
				let m = date.getMinutes();
				m = m < 10 ? ('0' + m) : m; //分钟补0
				let s = date.getSeconds();
				s = s < 10 ? ('0' + s) : s; //秒补0
				// return y + '-' + MM + '-' + d; //年月日
				return y + '-' + MM + '-' + d + ' ' + h + ':' + m; //年月日时分秒
			},
			typeF(value) {
				if (!value) {
					return;
				}
				if(value == 2){
					return 'Gitee开源'
				}
				if(value == 3){
					return '可商用'
				}
				if(value == 4){
					return '商业项目'
				}
				if(value == 5){
					return '付费模板'
				}
				if(value == 6){
					return '仅供参考'
				}
				if(value == 7){
					return '其他类型'
				}
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
