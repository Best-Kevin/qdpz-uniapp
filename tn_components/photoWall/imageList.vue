<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">2023年06月22日</block>
		</cu-custom>

		<view class="cu-list menu sm-border u-border-bottom">
			<view class="cu-item" style="min-height: 85rpx !important;">
				<view class="content">
					<text class="cuIcon-cameraaddfill text-blue" style="margin-right: 0 !important;"></text>
					<text class="text-grey text-df">优质摄影师</text>
				</view>
				<view class="action">
					<view class="cu-avatar-group">
						<view class="cu-avatar round sm"
							style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);">
						</view>
						<view class="cu-avatar round sm"
							style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);">
						</view>
						<view class="cu-avatar round sm"
							style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);">
						</view>
						<view class="cu-avatar round sm"
							style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);">
						</view>
						<view class="cu-avatar round sm"
							style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);">
						</view>
					</view>
				</view>
			</view>
		</view>

		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-blue cur text-shadow':''" v-for="(item,index) in timeList"
				:key="index" @tap="tabSelect" :data-id="index">
				<text :class="index==TabCur?'cuIcon-timefill':'cuIcon-time'" class="margin-right-xs"></text>
				{{item.time}}
			</view>
		</scroll-view>

		<view class="bg-white padding-sm padding-bottom">
			<view class="grid col-3 grid-square padding-bottom-xl">
				<view @click="seeImg(item,index)" class="bg-img" v-for="(item,index) in imgList" :key="index"
					:style="[{ backgroundImage:'url(' + item.url + ')' }]">
					<image v-show="!item.isBuy" @tap.stop="addBtnFun(item,index)" class="addDelBtn"
						src="https://cdn.zhoukaiwen.com/icon_wxz.svg" mode="widthFix"></image>
					<image v-show="item.isBuy" class="addOkBtn" src="https://cdn.zhoukaiwen.com/icon_xz.svg"
						mode="widthFix"></image>
				</view>
			</view>
		</view>

		<view class="bottomBox">
			<view class="priceNum">
				<view :class="animation" style="right: 215rpx !important; top: 18rpx !important;" class='cu-tag badge'>
					{{checkOutList.length}}
				</view>
				<image @click="showModal('bottomModal')" class="checkOutLogo"
					src="https://cdn.zhoukaiwen.com/qh_logo_tm2.png" mode="widthFix"></image>
				<view class="text-sm text-grey">原价：<text style="text-decoration:line-through;">￥299.00</text></view>
				<view class="text-smdf text-white">优惠价：<text class="text-df text-bold text-orange">￥99.00</text></view>
			</view>
			<view @click="okBtn" class="checkOut">购物车结算</view>
		</view>

		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog" style="padding-bottom: 100rpx;">
				<view class="cu-bar bg-white">
					<view v-if="checkOutList.length > 0" class="action text-blue" @tap="delImg"><text
							class="cuIcon-delete"></text>清空购物车</view>
					<view v-if="checkOutList.length < 1" class="action text-grey"><text
							class="cuIcon-delete"></text>清空购物车</view>
				</view>
				<view class="padding">
					<view v-if="checkOutList.length < 1" class="text-center padding-bottom-lg text-grey text-lg">请先添加照片
					</view>
					<view v-if="checkOutList.length > 0" class="grid col-3 grid-square">
						<view class="bg-img" v-for="(item,index) in checkOutList" :key="index"
							:style="[{ backgroundImage:'url(' + item.url + ')' }]">
							<text @click="delBtnFun(item,index)" class="cuIcon-roundclose DelBtn"></text>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				timeList: [{
						time: '8:00'
					},
					{
						time: '9:00'
					},
					{
						time: '10:00'
					},
					{
						time: '11:00'
					},
					{
						time: '12:00'
					},
					{
						time: '13:00'
					},
					{
						time: '14:00'
					},
					{
						time: '15:00'
					},
					{
						time: '16:00'
					}
				],
				imgList: [{
						id: 1,
						url: 'https://cdn.zhoukaiwen.com/kt1.jpg',
					},
					{
						id: 2,
						url: 'https://cdn.zhoukaiwen.com/kt2.jpg',
					},
					{
						id: 3,
						url: 'https://cdn.zhoukaiwen.com/kt3.jpg',
					},
					{
						id: 4,
						url: 'https://zhoukaiwen.com/img/qh/zkw2.jpg',
					},
					{
						id: 5,
						url: 'https://zhoukaiwen.com/img/qh/zkw3.jpg',
					},
					{
						id: 6,
						url: 'https://zhoukaiwen.com/img/qh/he1.jpg'
					},
					{
						id: 7,
						url: 'https://zhoukaiwen.com/img/qh/he2.jpg'
					},
					{
						id: 8,
						url: 'https://zhoukaiwen.com/img/qh/he3.jpg'
					},
					{
						id: 9,
						url: 'https://zhoukaiwen.com/img/qh/he4.jpg'
					},
					{
						id: 10,
						url: 'https://zhoukaiwen.com/img/qh/kw4.jpg'
					},
					{
						id: 11,
						url: 'https://zhoukaiwen.com/img/qh/kw2.jpg'
					},
					{
						id: 12,
						url: 'https://zhoukaiwen.com/img/qh/wxt1.jpg'
					},
					{
						id: 13,
						url: 'https://zhoukaiwen.com/img/qh/dd1.jpg'
					},
					{
						id: 14,
						url: 'https://zhoukaiwen.com/img/qh/dd2.jpg'
					}
				],
				checkOutList: [

				],
				modalName: null,
				animation: null,
			};
		},
		onLoad() {

		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			addBtnFun(item, index) {
				console.log(item, index)
				this.$set(this.imgList[index], 'isBuy', 'isBuy')
				console.log(this.imgList)
				this.checkOutList.push(item)

				// 底部tag闪烁
				this.animation = 'animation-shake';
				setTimeout(() => {
					this.animation = '';
				}, 500)
			},
			delBtnFun(item, index) {
				const delId = item.id
				console.log(this.imgList)
				let obj = this.imgList.find(item => item.id == delId);
				this.$delete(obj, 'isBuy')
				console.log(obj)

				this.checkOutList.splice(index, 1);

				// 底部tag闪烁
				this.animation = 'animation-shake';
				setTimeout(() => {
					this.animation = '';
				}, 500)

				if (this.checkOutList.length == 0) {
					this.modalName = null
				}
			},
			showModal(type) {
				if (this.modalName == 'bottomModal') {
					this.modalName = null
				} else {
					this.modalName = type
				}
			},
			hideModal(e) {
				this.modalName = null
			},
			delImg() {
				this.checkOutList = [];
				for (let i = 0; i < this.imgList.length; i++) {
					this.$delete(this.imgList[i], 'isBuy')
				}
				this.modalName = null;
			},
			// 预览图片 - 预览前加水印 防止下载
			seeImg(item, index) {
				uni.previewImage({
					urls: [item.url],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片','收藏'],
						success: function(data) {
							// console.log('okokok');
						},
						fail: function(err) {
							// console.log('err');
						}
					}
				});
			},
			okBtn(){
				uni.showToast({
					title: '没有更多的页面了！',
					icon: 'none'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/colorui/animation.css";

	image {
		will-change: transform
	}

	.bottomBox {
		width: 710rpx;
		height: 90rpx;
		border-radius: 100rpx;
		position: fixed;
		bottom: 30rpx;
		left: 20rpx;
		background-image: linear-gradient(45deg, #222222, #333333);
		color: #ffffff;
		padding: 0 20rpx 0 150rpx;
		display: flex;
		justify-content: space-between;
		z-index: 9999;

		.priceNum {
			display: flex;
			flex-flow: column;
			justify-content: space-around;
			padding: 10rpx 6rpx;
			position: relative;

			.checkOutLogo {
				width: 112rpx;
				position: absolute;
				bottom: 0rpx;
				left: -125rpx;
				border-radius: 0 0 0 14rpx;
			}
		}

		.checkOut {
			background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
			color: #ffffff;
			height: 60rpx;
			line-height: 60rpx;
			padding: 0 25rpx;
			border-radius: 100rpx;
			margin-top: 15rpx;
		}
	}

	.addDelBtn,
	.addOkBtn {
		position: absolute;
		right: 15rpx;
		top: 15rpx;
		width: 40rpx !important;
		height: 40rpx !important;
	}

	.DelBtn {
		position: absolute;
		right: 10rpx !important;
		top: 10rpx !important;
		left: auto !important;
		bottom: auto !important;
		font-size: 40rpx !important;
		color: #FFFFFF !important;
	}
</style>
