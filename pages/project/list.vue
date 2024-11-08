<!-- 项目展示 -->
<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">项目展示</block>
		</cu-custom>
		
		<u-notice-bar mode="horizontal" type="primary" :list="list"></u-notice-bar>
		
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">项目展示</text>
				<text class="text-ABC text-blue">curriculum</text>
			</view>
		</view>
		
		<view class="cu-card case no-card">
			<view @click="goProject(item.id)" class="cu-item shadow" v-for="(item, index) in projectList" :key="index">
				<view class="image">
					<image :src="item.img" mode="widthFix"></image>
					<view class="cu-tag bg-gradual-orange">{{ item.type | typeF }}</view>
					<view class="cu-bar bg-shadeBottom">
						<text class="text-cut">{{ item.content }}</text>
					</view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="margin-lr flex-sub">
							<view class="item-name text-bold text-grey text-lg">{{ item.title }}</view>
							<view class="text-gray text-df flex justify-between">
								{{ item.createdAt | formatDate }}
								<view class="text-gray text-df">
									<text class="cuIcon-attentionfill margin-lr-xs"></text>
									{{ item.seeNum }}
									<text class="cuIcon-appreciatefill margin-lr-xs"></text>
									{{ item.likesNum }}
									<text class="cuIcon-share margin-lr-xs"></text>
									{{ item.commentNum }}
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
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				list:[
					'开源项目均可商用，如有需要请移步至Git或联系作者，微信：280224091'
				],
				projectList: []
			}
		},
		watch: {

		},
		mounted() {
			this.getData();
		},
		methods: {
			getData() {
				console.log('数据加载');
				let opts = {
					url: 'api/project/list',
					method: 'get'
				};
				uni.showLoading({
					title: '加载中'
				});
				request.httpRequest(opts).then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.statusCode == 200) {
						this.projectList = res.data.data;
					} else {
						this.projectList = [];
					}
				});
			},
			goProject(id){
				uni.navigateTo({
					url: 'project?id='+id
				})
			}
		},
		filters: {
			formatDate(value) {
				if (value == undefined) {
					return;
				}
				// let date = new Date(value * 1000);
				let date = new Date(value);
				//时间戳为10位需*1000，时间戳为13位的话不需乘1000
				let y = date.getFullYear();
				let MM = date.getMonth() + 1;
				MM = MM < 10 ? ('0' + MM) : MM; //月补0
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d; //天补0
				let h = date.getHours();
				h = h < 10 ? ('0' + h) : h; //小时补0
				let m = date.getMinutes();
				m = m < 10 ? ('0' + m) : m; //分钟补0
				let s = date.getSeconds();
				s = s < 10 ? ('0' + s) : s; //秒补0
				// return y + '-' + MM + '-' + d; //年月日	 + ' ' + h + ':' + m
				return y + '-' + MM + '-' + d; //年月日时分秒
			},
			typeF(value) {
				if (!value) {
					return;
				}
				if(value == 2){
					return 'Gitee开源'
				}
				if(value == 3){
					return '可商用'
				}
				if(value == 4){
					return '商业项目'
				}
				if(value == 5){
					return '付费模板'
				}
				if(value == 6){
					return '仅供参考'
				}
				if(value == 7){
					return '其他类型'
				}
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
