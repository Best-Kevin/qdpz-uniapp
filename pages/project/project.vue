<!-- 项目展示 -->
<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">项目展示</block>
		</cu-custom>
		<view class="content" v-if="projectList.length > 0">
			<view class="titleName">{{projectList[isIndex].title}}</view>
			<view class="titleOther">
				<span style="margin-right: 10rpx;">{{projectList[isIndex].author}}</span>
				<span>{{projectList[isIndex].time}}</span>
			</view>
			
			<view class="explainBox">
				<view class="explainItem">
					<span>{{projectList[isIndex].introduceText[0]}}</span>
				</view>
				<view class="explainItem">
					<span>{{projectList[isIndex].introduceText[1]}}</span>
				</view>
				<view class="explainItem">
					<span>{{projectList[isIndex].introduceText[2]}}</span>
				</view>
				<view class="explainItem">
					<span>{{projectList[isIndex].introduceText[3]}}</span>
				</view>
				<view class="explainItem">
					<span>{{projectList[isIndex].introduceText[4]}}</span>
				</view>
				<view class="explainItem">
					<span>{{projectList[isIndex].introduceText[5]}}</span>
				</view>
			</view>
			
			<view class="imgBox">
				<image v-for="(item, index) in projectList[isIndex].introduceImg" :key="index" mode="aspectFit" :src="item"></image>
			</view>
			
		</view>
	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				isIndex: 0,
				projectList: [],
			}
		},
		watch: {

		},
		onLoad(option) {
			
			console.log(option.proId)
			this.isIndex = option.proId;
			console.log(this.projectList)
		},
		mounted() {
			this.getData()
		},
		methods: {
			getData() {
				console.log('数据加载')
				let opts = {
					url: 'json/project.json',
					method: 'get'
				};
				uni.showLoading({
					title: '加载中'
				})
				request.httpRequest(opts).then(res => {
					console.log(res);
					uni.hideLoading();
					if(res.statusCode == 200){
						this.projectList = res.data.data;
						console.log(this.projectList)
					}else{
						
					}
				});
			},
		}
	}
</script>

<style scoped>
	.content{
		padding: 30rpx;
	}
	.titleName{
		text-align: center;
		font-size: 36rpx;
		color: #333;
		margin-bottom: 15rpx;
	}
	.titleOther{
		text-align: center;
		font-size: 26rpx;
		color: #8799a3;
		margin-bottom: 15rpx;
	}
	.imgBox image{
		width: 90%;
		margin: 20rpx auto;
		display: block;
	}
	.explainBox{
		color: #8799a3;
	}
	.explainItem{
		margin-bottom: 16rpx;
	}
</style>
