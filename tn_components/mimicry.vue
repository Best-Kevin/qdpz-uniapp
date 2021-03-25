<template>
	<view class="components-mimicry">
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

		<view class="padding-top-sl">
			<swiper class="card-swiper square-dot " circular="true" autoplay="true" interval="5000" duration="500" @change="bannerSwiper"
			 indicator-color="#1b6cff" indicator-active-color="#1b6cff">
				<!-- #ifdef H5 -->
				<swiper-item v-for="(item, index) in (bannerimg)" :key="'banner' + index" :class="[ bannerCur==index ? 'cur' : '' ]">
					<view class='swiper-item bg-img shadow-blur' :style="'background-image:url(' + item.url + ')'"></view>
				</swiper-item>
				<!-- #endif -->
				<!-- #ifndef H5 -->
				<swiper-item v-for="(item, index) in (bannerimg)" :key="index" :class="[ bannerCur==index ? 'cur' : '' ]">
					<view class='swiper-item bg-img shadow-blur' :style="'background-image:url(' + item.url + ')'"></view>
				</swiper-item>
				<!-- #endif -->
			</swiper>
		</view>


		<view class='grid col-4 padding-sm container'>
			<!-- #ifdef H5 -->
			<view class='padding-sm box' v-for="(item, index) in IconList" :key="'icon' + index">
				<view class="text-sl">
					<view :class="'img cuIcon-' + item.title + ' text-center text-' + item.color"></view>
				</view>
				<view class='margin-top-sm text-center text-grey'>{{item.name}}</view>
			</view>
			<!-- #endif -->
			<!-- #ifndef H5 -->
			<view class='padding-sm box' v-for="(item, index) in IconList" :key="index">
				<view class="text-sl">
					<view :class="'img cuIcon-' + item.title + ' text-center text-' + item.color"></view>
				</view>
				<view class='margin-top-sm text-center text-grey'>{{item.name}}</view>
			</view>
			<!-- #endif -->
		</view>

		<view class="">
			<view class="">
				<image class="banner-index" mode="aspectFit" src="https://s1.ax1x.com/2020/06/25/N01gkd.png">
				</image>
			</view>
		</view>

		<view class="title-header">
			<view class="title-text">
				口 / 碑 / 推 / 荐
			</view>
		</view>

		<view class="padding-sm">
			<view class="flex">
				<view class='flex-twice bg-white margin-xs bg-img shadow-blur radius-index solid mimicry' style="height:330rpx;background-image:url(https://s1.ax1x.com/2020/06/25/N03nBD.jpg)">
				</view>
				<view class='flex-sub radius margin-right-xs margin-left-sm'>
					<view class='flex-sub bg-white margin-top-xs bg-img shadow-blur radius-index solid mimicry' style="height:150rpx;background-image:url(https://s1.ax1x.com/2020/06/25/N03uHe.jpg)"></view>
					<view class='flex-sub bg-white margin-top bg-img shadow-blur radius-index solid mimicry' style="height:150rpx;background-image:url(https://s1.ax1x.com/2020/06/25/N03iN9.jpg)"></view>
				</view>
			</view>
		</view>

		<view class="title-header">
			<view class="title-text">
				特 / 价 / 清 / 货
			</view>
		</view>
		<view class="cu-card">
			<view class="cu-item bg-img mimicry" style="background-image:url(https://s1.ax1x.com/2020/06/25/N03MAH.jpg)">
				<view class="cardTitlebig">
					可我会像
				</view>
			</view>
		</view>

		<view class="cu-card" style="margin-top:-30rpx">
			<view class="cu-item bg-img mimicry" style="background-image:url(https://s1.ax1x.com/2020/06/25/N03mnO.jpg)">
				<view class="cardTitle">
					可我会像
				</view>
			</view>
			<view class="cu-item bg-img mimicry" style="background-image:url(https://s1.ax1x.com/2020/06/25/N03E1x.jpg)">
				<view class="cardTitle">
					可我会像
				</view>
			</view>
			<view class="cu-item bg-img mimicry" style="background-image:url(https://s1.ax1x.com/2020/06/25/N03Vc6.jpg)">
				<view class="cardTitle">
					可我会像
				</view>
			</view>
		</view>

		<view class="title-header">
			<view class="title-text">
				爆 / 款 / 靓 / 品
			</view>
		</view>

		<view class="padding-sm padding-bottom-index">

			<view class="margin-top">
				<view class="products-box">

					<!-- #ifdef H5 -->
					<view class="basis-df padding-xs" v-for="(item, index) in product" :key="'product' + index">
						<navigator url="/pages/product/product" hover-class="none">
							<view class="grid col-1 grid-square flex-sub">
								<view class="bg-img product-border shadow" :style="'background-image:url(' + item.url + ');'">
									<!-- <view class="cu-tag bg-red">
                                        <text class='icon-hotfill'> 爆款专区</text>
                                    </view> -->
								</view>
							</view>
							<view class="grid col-1 margin-bottom">
								<view class="">
									<view class="text-xl product-title tn-align">
										<text class='text-black index-title text-df name-title-a'>{{item.title}}</text>
									</view>
									<view class="text-xl product-price">
										<text class='text-red'>￥{{item.price}}</text>
										<text class='delete-price text-sm text-gray'>￥{{item.priceno}}</text>
										<!-- <text class='icon-goodsnew text-pink fr text-xl'></text> -->
									</view>
								</view>
							</view>
						</navigator>
					</view>
					<!-- #endif -->
					<!-- #ifndef H5 -->
					<view class="basis-df padding-xs" v-for="(item, index) in product" :key="index">
						<navigator url="/pages/product/product" hover-class="none">
							<view class="grid col-1 grid-square flex-sub">
								<view class="bg-img product-border shadow" :style="'background-image:url(' + item.url + ');'">
									<!-- <view class="cu-tag bg-red">
                                          <text class='icon-hotfill'> 爆款专区</text>
                                      </view> -->
								</view>
							</view>
							<view class="grid col-1 margin-bottom">
								<view class="">
									<view class="text-xl product-title tn-align">
										<text class='text-black index-title text-df name-title-a'>{{item.title}}</text>
									</view>
									<view class="text-xl product-price">
										<text class='text-red'>￥{{item.price}}</text>
										<text class='delete-price text-sm text-gray'>￥{{item.priceno}}</text>
										<!-- <text class='icon-goodsnew text-pink fr text-xl'></text> -->
									</view>
								</view>
							</view>
						</navigator>
					</view>
					<!-- #endif -->

				</view>
			</view>

		</view>


		<view class='cu-tabbar-height'></view>


		<view class="cu-bar tabbar foot tarbar-mimicry">
			<view class="action navbar__item -blue">
				<view class='cuIcon-home text-bold navbar__icon icon'>
				</view>
				<view class="cu-avatar sm round avatar -blue shadow"><text class="text-balck cuIcon-name text-sm" style="margin-bottom:-40px;font-size:20rpx;color:#303030">首页</text></view>
			</view>
			<view class="action navbar__item -orange">
				<view class='cuIcon-discover text-bold navbar__icon icon'>
				</view>
				<view class="cu-avatar sm round avatar -orange shadow"><text class="text-balck cuIcon-name text-sm" style="margin-bottom:-40px;font-size:20rpx;color:#303030">发现</text></view>
			</view>
			<view class="action navbar__item -yellow">
				<view class='cuIcon-cart text-bold navbar__icon icon'>
				</view>
				<view class="cu-avatar sm round avatar -yellow shadow"><text class="text-balck cuIcon-name text-sm" style="margin-bottom:-40px;font-size:20rpx;color:#303030">购物</text></view>
			</view>
			<view class="action navbar__item -purple">
				<view class='cuIcon-my text-bold navbar__icon icon'>
				</view>
				<view class="cu-avatar sm round avatar -purple shadow"><text class="text-balck cuIcon-name text-sm" style="margin-bottom:-40px;font-size:20rpx;color:#303030">你的</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Custom: this.Custom || {},
				bannerCur: 0, //当前banner的位置
				bannerimg: [{
					id: 0,
					url: 'https://s1.ax1x.com/2020/06/25/N01eoj.jpg'
				}, {
					id: 1,
					url: 'https://s1.ax1x.com/2020/06/25/N01AOS.png'
				}, {
					id: 2,
					url: 'https://s1.ax1x.com/2020/06/25/N01Veg.jpg'
				}, {
					id: 3,
					url: 'https://s1.ax1x.com/2020/06/25/N01ZwQ.jpg'
				}],
				product: [{
					title: '便捷充电式榨汁机 青色款',
					price: '199',
					priceno: '219',
					url: 'https://s1.ax1x.com/2020/06/25/N03A91.jpg'
				}, {
					title: '便捷充电式榨汁机 粉色款',
					price: '199',
					priceno: '219',
					url: 'https://s1.ax1x.com/2020/06/25/N03ZjK.jpg'
				}, {
					title: '家用冰箱 简约设计',
					price: '9999',
					priceno: '10499',
					url: 'https://s1.ax1x.com/2020/06/25/N03FhR.jpg'
				}, {
					title: '洗碗机 高效除菌',
					price: '1999',
					priceno: '2299',
					url: 'https://s1.ax1x.com/2020/06/25/N03QNd.jpg'
				}],
				IconList: [{
						title: 'camerafill',
						name: '小程序',
						color: 'blue'
					},
					{
						title: 'discoverfill',
						name: '小程序',
						color: 'cyan'
					},
					{
						title: 'shopfill',
						name: '小程序',
						color: 'pink'
					},
					{
						title: 'voicefill',
						name: '小程序',
						color: 'purple'
					},
					{
						title: 'clothesfill',
						name: '小程序',
						color: 'orange'
					},
					{
						title: 'communityfill',
						name: '小程序',
						color: 'mauve'
					},
					{
						title: 'github',
						name: '小程序',
						color: 'yellow'
					},
					{
						title: 'skinfill',
						name: '小程序',
						color: 'green'
					}
				]
			}
		},
		onShareAppMessage() {
			return {
				title: '新拟态'
			}
		},
		onShareTimeline() {
			return {
				title: '新拟态'
			}
		},
		methods: {
			bannerSwiper(e) {
				this.bannerCur = e.detail.current
			}
		}
	}
</script>

<style scoped>
	@import url("/tn_components/css/minicry.css");

	.components-mimicry {
		background-color: #F7FCFF;
	}
</style>
