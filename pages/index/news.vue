<!-- TabBar 文章资讯 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">文章资讯</block>
		</cu-custom>

		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index == TabCur?'text-blue cur':''" v-for="(item,index) in navTop" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{item.title}}
			</view>
		</scroll-view>
		
		<view class="cu-card article no-card">
			<view class="cu-item shadow borderBottom" v-for="(item, index) in newsList" :key="index" @click="goNews(item.id)">
				<view class="title"><view class="text-cut">{{item.title}}</view></view>
				<view class="content">
					<image :src="item.tImg" mode="aspectFit"></image>
					<view class="desc">
						<view class="text-content">{{item.introduceText}}</view>
						<view class="margin-top-xs">
							<view class="text-gray light sm round fl">{{item.time}}</view>
							<view class="text-gray light sm round fr">
								<text class="text-gray cuIcon-mark" style="font-size: 34rpx;"></text>
								<text>{{item.read}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		

	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				newsList: '',
				navTop:[
					{
						id: 1,
						title: '全部'
					},
					{
						id: 2,
						title: 'UI设计'
					},
					{
						id: 3,
						title: 'Web前端'
					},
					{
						id: 4,
						title: 'Java后台'
					},
					{
						id: 5,
						title: '面试精选'
					},
					{
						id: 6,
						title: '技术前沿'
					},
					{
						id: 7,
						title: '更多资讯'
					}
				]
			};
		},
		mounted() {
			this.getData();
		},
		methods: {
			getData() {
				let opts = {
					url: 'json/newsList.json',
					method: 'get'
				};
				uni.showLoading({
					title: '加载中'
				});
				request.httpRequest(opts).then(res => {
					// console.log(res);
					uni.hideLoading();
					if (res.statusCode == 200) {
						this.newsList = res.data.data;
						console.log(this.newsList);
					} else {
						console.log('数据请求错误～');
					}
				});
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			goNews(id){
				uni.navigateTo({
					url: '../news/news?id='+ id,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.borderBottom{
		border-bottom: 1px solid #f2f2f2;
	}
</style>
