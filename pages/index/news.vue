<!-- 文章资讯 -->
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
			<view class="cu-item shadow borderBottom" @click="goNews">
				<view class="title"><view class="text-cut">来，一起手撕32个大厂高频面试编程题</view></view>
				<view class="content">
					<image src="http://cdn.zhoukaiwen.com/5a97516eada18453046c61a263f41ef9.jpg"
					 mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content">作为前端开发，JS是重中之重，总结下32个手写JS问题，这些都是高频面试题，希望对你能有所帮助。</view>
						<view class="margin-top-xs">
							<view class="text-gray light sm round fl">2020年11月03日</view>
							<view class="text-gray light sm round fr">
								<text class="text-gray cuIcon-mark" style="font-size: 34rpx;"></text>
								<text>11</text>
							</view>
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
				navTop:[
					{
						id: 1,
						title: 'UI设计'
					},
					{
						id: 2,
						title: 'Web前端'
					},
					{
						id:3,
						title: 'Java后台'
					},
					{
						id:4,
						title: '面试精选'
					},
					{
						id:5,
						title: '技术前沿'
					},
					{
						id:6,
						title: '更多资讯'
					}
				]
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			goNews(){
				uni.navigateTo({
					url: '../news/news'
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
