<!-- 项目展示 -->
<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">商业项目</block>
		</cu-custom>
		
		<u-notice-bar mode="horizontal" type="primary" :list="list"></u-notice-bar>
		
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">商业项目</text>
				<text class="text-ABC text-blue">curriculum</text>
			</view>
		</view>
		
		<view class="cu-card case no-card">
		
			<view @click="goProject" class="cu-item shadow" v-for="(item, index) in projectList" :key="index">
				<view class="image">
					<image :src="item.imgUrl" mode="widthFix"></image>
					<view class="cu-tag bg-gradual-orange">可商用</view>
					<view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{item.type}}</text></view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="margin-lr flex-sub">
							<view class="item-name text-grey text-lg">{{item.name}}</view>
							<view class="text-gray text-sm flex justify-between">
								{{item.time}}
								<view class="text-gray text-sm">
									<text class="cuIcon-attentionfill margin-lr-xs"></text> {{item.user[0].read}}
									<text class="cuIcon-appreciatefill margin-lr-xs"></text> {{item.user[0].like}}
									<text class="cuIcon-shopfill margin-lr-xs"></text> {{item.user[0].use}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		
		</view>
		
	</view>
</template>

<script>
	import proData from "@/common/projectData.js";
	export default {
		data() {
			return {
				list:[
					'实战项目均为作者制作，可商用，如有需要请联系作者购买，微信：280224091'
				],
				projectList: proData
			}
		},
		watch: {

		},
		mounted() {
			
		},
		methods: {
			goProject(){
				uni.navigateTo({
					url: 'project'
				})
			}
		}
	}
</script>

<style scoped>
	.item-name {
		margin-bottom: 15rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
</style>
