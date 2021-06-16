<!-- 项目展示 -->
<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">项目展示</block>
		</cu-custom>
		<view class="content">
			<view class="titleName">{{projectList[isIndex].title}}</view>
			<view class="titleOther">
				<span style="margin-right: 10rpx;">{{projectList[isIndex].author}}</span>
				<span>{{projectList[isIndex].time}}</span>
			</view>
			
			<view class="explainBox">
				<view class="explainItem">
					项目名称：<span>{{projectList[isIndex].introduceText.projName}}</span>
				</view>
				<view class="explainItem">
					项目技术：<span>{{projectList[isIndex].introduceText.projSkill}}</span>
				</view>
				<view class="explainItem">
					项目描述：<span>{{projectList[isIndex].introduceText.projDescribe}}</span>
				</view>
				<view class="explainItem">
					是否商用：<span>{{projectList[isIndex].introduceText.commercial}}</span>
				</view>
				<view class="explainItem">
					项目价格：<span>{{projectList[isIndex].introduceText.projPrice}}</span>
				</view>
				<view class="explainItem">
					链接地址：<span>{{projectList[isIndex].introduceText.projUrl}}</span>
				</view>
			</view>
			
			<view class="imgBox">
				<image v-for="(item, index) in projectList[isIndex].introduceImg" :key="index" mode="aspectFit" :src="item"></image>
			</view>
			
		</view>
	</view>
</template>

<script>
	import proData from "@/common/projectData.js";
	export default {
		data() {
			return {
				isIndex: 0,
				projectList: proData,
				content: '',
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
			
		},
		methods: {
			
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
