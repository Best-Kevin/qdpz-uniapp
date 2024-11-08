<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">鳌山滑雪场</block>
		</cu-custom>
		
		<view class="cu-bar bg-white">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">2021年</text>
				<text class="text-ABC text-blue">TimeLine</text>
			</view>
		</view>
		
		<view>
			<view class="bg-white padding-lr padding-bottom-sm text-bold text-black">十一月</view>
			<view class="bg-white padding-lr padding-bottom-sm">
				<view class="grid col-3 grid-square">
					<view @click="goImgList" class="bg-img" v-for="(item,index) in imgList" :key="index" :style="[{ backgroundImage:'url(' + item.url + ')' }]">
						<view class="imageBgBlack">
							<view class="text-sm text-white">{{item.imgWeek}}</view>
							<view class="text-white" style="font-size: 60rpx;margin: 6rpx 0 6rpx 0;">{{item.imgToday}}</view>
							<view class="text-sm text-white">{{item.imgNum}}张</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view>
			<view class="bg-white padding-lr padding-bottom-sm text-bold text-black">十月</view>
			<view class="bg-white padding-lr padding-bottom-sm">
				<view class="grid col-3 grid-square">
					<view @click="goImgList" class="bg-img" v-for="(item,index) in imgList" :key="index" :style="[{ backgroundImage:'url(' + item.url + ')' }]">
						<view class="imageBgBlack">
							<view class="text-sm text-white">{{item.imgWeek}}</view>
							<view class="text-white" style="font-size: 60rpx;margin: 6rpx 0 6rpx 0;">{{item.imgToday}}</view>
							<view class="text-sm text-white">{{item.imgNum}}张</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view>
			<view class="bg-white padding-lr padding-bottom-sm text-bold text-black">九月</view>
			<view class="bg-white padding-lr padding-bottom-sm">
				<view class="grid col-3 grid-square">
					<view @click="goImgList" class="bg-img" v-for="(item,index) in imgList" :key="index" :style="[{ backgroundImage:'url(' + item.url + ')' }]">
						<view class="imageBgBlack">
							<view class="text-sm text-white">{{item.imgWeek}}</view>
							<view class="text-white" style="font-size: 60rpx;margin: 6rpx 0 6rpx 0;">{{item.imgToday}}</view>
							<view class="text-sm text-white">{{item.imgNum}}张</view>
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
				imgList:[
					{
						imgTime:'2022-06-02',
						imgNum:'2245',
						imgWeek:'星期一',
						imgToday:'05',
						url:'https://cdn.zhoukaiwen.com/kt1.jpg',
					},
					{
						imgTime:'2022-06-03',
						imgNum:'3362',
						imgWeek:'星期二',
						imgToday:'06',
						url:'https://cdn.zhoukaiwen.com/kt2.jpg',
					},
					{
						imgTime:'2022-06-04',
						imgNum:'1522',
						imgWeek:'星期三',
						imgToday:'07',
						url:'https://cdn.zhoukaiwen.com/kt3.jpg',
					},
					{
						imgTime:'2022-06-05',
						imgNum:'996',
						imgWeek:'星期四',
						imgToday:'08',
						url:'https://zhoukaiwen.com/img/qh/he3.jpg',
					},
					{
						imgTime:'2022-06-06',
						imgNum:'2526',
						imgWeek:'星期五',
						imgToday:'09',
						url:'https://zhoukaiwen.com/img/qh/wxt1.jpg',
					}
				],
			};
		},
		methods: {
			goImgList(){
				uni.navigateTo({
					url: './imageList'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.imageBgBlack{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.5);
		position: absolute;
		text-align: center;
		display: flex;
		flex-flow: column;
		justify-content: center;
	}
</style>
