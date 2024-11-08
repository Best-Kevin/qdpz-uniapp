<template>
	<view class="contaier">
		<!-- 自定义顶部 -->
		<cu-custom bgColor="bg-gdBlue" :isBack="true">
			<block slot="backText"></block>
			<block class="text-lg" slot="content">粤A·3356D</block>
		</cu-custom>
		
		<!-- 表单 -->
		<view class="mainBox">
			<scroll-view scroll-x class="nav">
				<view class="flex text-center">
					<view class="cu-item text-bold flex-sub" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in navData" :key="index" @tap="tabSelect" :data-id="index">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
			<form v-if="TabCur == 0">
				<view class="cu-form-group">
					<view class="title">进磅时间</view>
					<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
						<view class="picker">
							{{date}}
						</view>
					</picker>
				</view>
				
				<view class="cu-form-group">
					<view class="title">进磅重量</view>
					<input placeholder="请输入" value="0t" name="input"></input>
				</view>
				
				<view class="cu-form-group">
					<view class="title">出磅时间</view>
					<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
						<view class="picker">
							{{date}}
						</view>
					</picker>
				</view>
				
				<view class="cu-form-group">
					<view class="title">出磅重量</view>
					<input placeholder="请输入" value="0t" name="input"></input>
				</view>
				
				<view class="cu-form-group">
					<view class="title">实际收货算量</view>
					<input placeholder="请输入" value="0t" name="input"></input>
				</view>
			</form>
			
			<form v-if="TabCur == 1">
				<view class="cu-form-group">
					<view class="title">进磅时间</view>
					<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
						<view class="picker">
							{{date}}
						</view>
					</picker>
				</view>
				
				<view class="cu-form-group">
					<view class="title">进磅重量</view>
					<input placeholder="请输入" value="0t" name="input"></input>
				</view>
				
				<view class="cu-form-group">
					<view class="title">出磅时间</view>
					<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
						<view class="picker">
							{{date}}
						</view>
					</picker>
				</view>
				
				<view class="cu-form-group">
					<view class="title">出磅重量</view>
					<input placeholder="请输入" value="0t" name="input"></input>
				</view>
				
				<view class="cu-form-group">
					<view class="title">退料重量</view>
					<input placeholder="请输入" value="0t" name="input"></input>
				</view>
				
				<view class="cu-form-group">
					<view class="title">实际收货算量</view>
					<input placeholder="请输入" value="0t" name="input"></input>
				</view>
			</form>
		</view>
		<form>
			<view class="cu-form-group" style="background-color: #F0F2F6;">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view style="background-color: #CCCCCC;border-radius: 20rpx;" class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
		</form>
		
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-blue lg">提交</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				navData:[
					{
						name: '手动录入',
						id: 0
					},
					{
						name: '退料处理',
						id: 1
					},
				],
				date: '请选择',
				
				imgList: [],
			}
		},
		methods: {
			goIndex2(){
				uni.navigateTo({
					url:'index2'
				})
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '删除',
					content: '确定要删除吗？',
					cancelText: '取消',
					confirmText: '确认删除',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.contaier{
		background-color: #F0F2F6;
	}
	.mainBox{
		width: 680rpx;
		padding: 0 20rpx;
		background: #ffffff;
		margin: 30rpx auto;
		border-radius: 16rpx;
	}
	.cu-form-group input {
		text-align: right;
		padding: 0 !important;
	}
	
</style>
