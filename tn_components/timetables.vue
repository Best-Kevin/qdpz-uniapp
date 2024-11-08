<!-- 证件识别 -->
<template>
	<view>
		<cu-custom class="navBox" bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">课程表</block>
		</cu-custom>
		
		<view class="container">
			<view>
				<!-- 顶部星期 -->
				<view class="flex p-xs mb-sm padding-left-xxl bg-gray">
					<view class="solid-left flex-sub text-grey padding-tb-sm margin-lr-xs text-center">星期一</view>
					<view class="flex-sub text-grey padding-tb-sm margin-lr-xs text-center">星期二</view>
					<view class="flex-sub text-grey padding-tb-sm margin-lr-xs text-center">星期三</view>
					<view class="flex-sub text-grey padding-tb-sm margin-lr-xs text-center">星期四</view>
					<view class="flex-sub text-grey padding-tb-sm margin-lr-xs text-center">星期五</view>
				</view>
				<!-- 左侧节数 -->
				<view class="bg-gray solid-top leftNum">
					<view class="flex align-start">
						<view class="flex-sub text-grey padding-sm text-center margin-xs">一</view>
					</view>
					<view class="flex align-start">
						<view class="flex-sub text-grey padding-sm text-center margin-xs">二</view>
					</view>
					<view class="flex align-start">
						<view class="flex-sub text-grey padding-sm text-center margin-xs">三</view>
					</view>
					<view class="flex align-start">
						<view class="flex-sub text-grey padding-sm text-center margin-xs">四</view>
					</view>
				</view>
				
				<!-- 早上课程 -->
				<view class="bg-white">
					<view class="flex solid-bottom align-start">
						<view class="flex-sub bg-gradual-orange padding-sm text-center margin-xs radius">语文</view>
						<view class="flex-sub bg-gradual-blue padding-sm text-center margin-xs radius">数学</view>
						<view class="flex-sub bg-gradual-green padding-sm text-center margin-xs radius">微机</view>
						<view class="flex-sub bg-gradual-pink padding-sm text-center margin-xs radius">体育</view>
						<view class="flex-sub bg-gradual-purple padding-sm text-center margin-xs radius">地理</view>
					</view>
					<view class="flex solid-bottom align-start">
						<view class="flex-sub bg-gradual-orange padding-sm text-center margin-xs radius">化学</view>
						<view class="flex-sub bg-gradual-blue padding-sm text-center margin-xs radius">语文</view>
						<view class="flex-sub bg-gradual-green padding-sm text-center margin-xs radius">物理</view>
						<view class="flex-sub bg-gradual-pink padding-sm text-center margin-xs radius">英语</view>
						<view class="flex-sub bg-gradual-purple padding-sm text-center margin-xs radius">生物</view>
					</view>
					<view class="flex solid-bottom align-start">
						<view class="flex-sub bg-gradual-orange padding-sm text-center margin-xs radius">英语</view>
						<view class="flex-sub bg-gradual-blue padding-sm text-center margin-xs radius">生物</view>
						<view class="flex-sub bg-gradual-green padding-sm text-center margin-xs radius">体育</view>
						<view class="flex-sub bg-gradual-pink padding-sm text-center margin-xs radius">音乐</view>
						<view class="flex-sub bg-gradual-purple padding-sm text-center margin-xs radius">数学</view>
					</view>
					<view class="flex solid-bottom align-start">
						<view class="flex-sub bg-gradual-orange padding-sm text-center margin-xs radius">物理</view>
						<view class="flex-sub bg-gradual-blue padding-sm text-center margin-xs radius">地理</view>
						<view class="flex-sub bg-gradual-green padding-sm text-center margin-xs radius">历史</view>
						<view class="flex-sub bg-gradual-pink padding-sm text-center margin-xs radius">化学</view>
						<view class="flex-sub bg-gradual-purple padding-sm text-center margin-xs radius">语文</view>
					</view>
				</view>
				
				<!-- 午休 -->
				<view class="bg-gray text-grey solid-top solid-bottom centerBox text-center">午休时间</view>
				
				<!-- 左侧节数 -->
				<view class="bg-gray solid-top leftNum">
					<view class="flex align-start">
						<view class="flex-sub text-grey padding-sm text-center margin-xs">四</view>
					</view>
					<view class="flex align-start">
						<view class="flex-sub text-grey padding-sm text-center margin-xs">五</view>
					</view>
					<view class="flex align-start">
						<view class="flex-sub text-grey padding-sm text-center margin-xs">六</view>
					</view>
				</view>
				
				<view class="bg-white">
					<view class="flex solid-bottom align-start">
						<view class="flex-sub bg-gradual-orange padding-sm text-center margin-xs radius">体育</view>
						<view class="flex-sub bg-gradual-blue padding-sm text-center margin-xs radius">音乐</view>
						<view class="flex-sub bg-gradual-green padding-sm text-center margin-xs radius">历史</view>
						<view class="flex-sub bg-gradual-pink padding-sm text-center margin-xs radius">生物</view>
						<view class="flex-sub bg-gradual-purple padding-sm text-center margin-xs radius">地理</view>
					</view>
					<view class="flex solid-bottom align-start">
						<view class="flex-sub bg-gradual-orange padding-sm text-center margin-xs radius">化学</view>
						<view class="flex-sub bg-gradual-blue padding-sm text-center margin-xs radius">语文</view>
						<view class="flex-sub bg-gradual-green padding-sm text-center margin-xs radius">物理</view>
						<view class="flex-sub bg-gradual-pink padding-sm text-center margin-xs radius">英语</view>
						<view class="flex-sub bg-gradual-purple padding-sm text-center margin-xs radius">生物</view>
					</view>
					<view class="flex solid-bottom align-start">
						<view class="flex-sub bg-gradual-orange padding-sm text-center margin-xs radius">英语</view>
						<view class="flex-sub bg-gradual-blue padding-sm text-center margin-xs radius">生物</view>
						<view class="flex-sub bg-gradual-green padding-sm text-center margin-xs radius">体育</view>
						<view class="flex-sub bg-gradual-pink padding-sm text-center margin-xs radius">音乐</view>
						<view class="flex-sub bg-gradual-purple padding-sm text-center margin-xs radius">数学</view>
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
				
			}
		},
		watch: {

		},
		onReady() {
			
		},
		mounted() {

		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100%;
		.leftNum{
			width: 90rpx;
			float: left;
		}
		.centerBox{
			width: 750rpx;
			height: 74rpx;
			line-height: 74rpx;
		}
	}
</style>
