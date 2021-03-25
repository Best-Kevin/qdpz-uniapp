<template>
	<view class="wrap">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">{{pageName}}</block>
		</cu-custom>
		
		<u-notice-bar mode="horizontal" type="primary" :list="listBar"></u-notice-bar>
		
		<u-waterfall v-model="flowList" ref="uWaterfall">
			<template v-slot:left="{leftList}">
				<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="seeImg(item.image)">
					<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
					<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
					<view class="demo-title">
						{{item.title}}
					</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">
							版权保护
						</view>
						<view class="demo-tag-text">
							{{item.type}}
						</view>
					</view>
					<view class="demo-shop">
						作品来源：{{item.shop}}
					</view>
					<!-- <u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)"></u-icon> -->
				</view>
			</template>
			<template v-slot:right="{rightList}">
				<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="seeImg(item.image)">
					<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
					<view class="demo-title">
						{{item.title}}
					</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">
							版权保护
						</view>
						<view class="demo-tag-text">
							{{item.type}}
						</view>
					</view>
					<view class="demo-shop">
						作品来源：{{item.shop}}
					</view>
					<!-- <u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)"></u-icon> -->
				</view>
			</template>
		</u-waterfall>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
	</view>
</template>

<script>
	import imgData from "@/common/uiImg.js";
	export default {
		data() {
			return {
				pageName:'全部设计',
				listBar:[
					'APP/PC端设计图均有实体项目，如有需要请联系作者。注：Logo模版均有版权保护，请勿盗用，违者必究！'
				],
				loadStatus: 'loadmore',
				flowList: [],
				list: null
			}
		},
		onLoad(option) {
			console.log(option.type)
			if(option.type == 0){
				this.list = imgData[0].appImg;
				this.pageName = 'APP设计';
			}else if(option.type == 1){
				this.list = imgData[0].pcImg;
				this.pageName = 'PC端设计';
			}else if(option.type == 2){
				this.list = imgData[0].logoImg;
				this.pageName = 'Logo设计';
			}else{
				this.list = imgData[0].posterImg;
				this.pageName = '海报设计';
			};
			this.addRandomData();
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		methods: {
			addRandomData() {
				for (let i = 0; i < 8; i++) {
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			remove(id) {
				this.$refs.uWaterfall.remove(id);
			},
			seeImg(imgUrl){
				// console.log(imgUrl)
				// 预览图片
				uni.previewImage({
					urls: [imgUrl],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							// console.log('okokok');
						},
						fail: function(err) {
							// console.log('err');
						}
					}
				});
			}
		}
	}
</script>

<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: rgb(240, 240, 240);
	}
</style>

<style lang="scss" scoped>
	.demo-warter {
		border-radius: 8px;
		margin: 10px 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-primary;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}
</style>
