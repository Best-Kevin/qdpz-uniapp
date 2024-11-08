<template>
	<view class="contaier">
		<!-- 自定义顶部 -->
		<cu-custom bgColor="bg-gdBlue" :isBack="true">
			<block slot="backText"></block>
			<block class="text-lg" slot="content">新增计划</block>
		</cu-custom>
		
		<!-- 表单 -->
		<view class="mainBox">
			<view class="cu-list menu" style="border-bottom: 3rpx solid #EEEEEE;">
				<view class="cu-item">
					<view class="content">
						<text class="text-black text-bold">浇筑信息</text>
					</view>
				</view>
			</view>
			<form>
				<view class="cu-form-group">
					<view class="title">计划名称</view>
					<input placeholder="请填写计划名称" value="" name="input"></input>
				</view>
				
				<view class="cu-form-group">
					<view class="title">供应商单位</view>
					<picker @change="PickerChange" :value="index" :range="picker">
						<view class="picker" style="color: #555555;">
							{{index>-1?picker[index]:'请选择'}}
						</view>
					</picker>
				</view>
				
				<view class="cu-form-group">
					<view class="title">要求供应时间</view>
					<picker @change="PickerChange" :value="index" :range="picker">
						<view class="picker" style="color: #555555;">
							{{index>-1?picker[index]:'请选择'}}
						</view>
					</picker>
				</view>
				
				<view class="cu-form-group">
					<view class="title">计划浇筑部位</view>
					<picker @change="PickerChange" :value="index" :range="picker">
						<view class="picker" style="color: #555555;">
							{{index>-1?picker[index]:'请选择'}}
						</view>
					</picker>
				</view>
				
			</form>
		</view>
		
		<view class="mainBox">
			<view class="cu-list menu" style="border-bottom: 3rpx solid #EEEEEE;">
				<view class="cu-item">
					<view class="content">
						<text class="text-black text-bold">混凝土信息</text>
					</view>
					<view class="action"style="position: relative;">
						<text style="padding-right: 30rpx;" class="text-black text-sm text-bold">X1</text>
						<text @click="addList()" style="font-size: 38rpx;position: absolute;bottom: -6rpx;right: -16rpx;" class="text-green cuIcon-roundadd text-bold"></text>
					</view>
				</view>
			</view>
			<form>
				<view v-for="(item,indexs) in listData" :key="indexs">
					<view class="cu-list menu">
						<view class="cu-item">
							<view class="content">
								<text class="text-black text-bold">1#混凝土</text>
							</view>
							<view class="action"style="position: relative;">
								<text @click="removeList()" style="font-size: 38rpx;position: absolute;bottom: -24rpx;right: -16rpx;" class="text-red cuIcon-roundclose text-bold"></text>	
							</view>
						</view>
					</view>
					<view class="cu-form-group">
						<view class="title">标号</view>
						<picker @change="PickerChange" :value="index" :range="picker">
							<view class="picker" style="color: #555555;">
								{{index>-1?picker[index]:'请选择标号'}}
							</view>
						</picker>
					</view>
					<view class="cu-form-group">
						<view class="title">预算量</view>
						<input placeholder="请填写预算量" value="" name="input"></input>
					</view>
				</view>
			</form>
			
			<view style="padding: 12rpx 5rpx 24rpx" class="text-lg text-black text-bold text-right">合计预算量：<text class="text-blue">00m³</text></view>
		</view>
		
		
		<view class="mainBox">
			<view class="cu-list menu" style="border-bottom: 3rpx solid #EEEEEE;">
				<view class="cu-item">
					<view class="content">
						<text class="text-black text-bold">收货人</text>
					</view>
				</view>
			</view>
			<form>
				<view class="cu-form-group">
					<view class="title">请选择</view>
					<picker @change="PickerChange" :value="index" :range="picker">
						<view class="picker" style="color: #555555;">
							{{index>-1?picker[index]:'请选择'}}
						</view>
					</picker>
				</view>
			</form>
		</view>
		
		<!-- 附件 -->
		<view class="mainBox">
			<view class="cu-list menu" style="border-bottom: 3rpx solid #EEEEEE;">
				<view class="cu-item">
					<view class="content">
						<text class="text-black text-bold">附件</text>
					</view>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">验证码</view>
				<button class='sm cu-btn bg-blue shadow'>上传附件</button>
			</view>
		</view>
		
		<view class="bottomBox">
			<view class="bottomBtn">
				<view class="noBtn">拒绝</view>
				<view @click="goIndex3()" class="yesBtn">同意并填写预算量</view>
			</view>
		</view>
		
		<view style="width: 1px; height: 200rpx;"></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				picker: ['选项一', '选项二', '选项三'],
				
				listData:[
					{
						
					}
				]
			}
		},
		methods: {
			//页面跳转
			goIndex2(){
				uni.navigateTo({
					url:'index2'
				})
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			addList(){
				this.listData.push({})
			},
			removeList(){
				this.listData.pop()
			}
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
	
	.bottomBox{
		width: 750rpx;
		height: 160rpx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		box-shadow: 0px -8rpx 4px #f2f2f2;
		.bottomBtn{
			width: 90%;
			height: 72rpx;
			line-height: 72rpx;
			margin: 20rpx auto;
			border-radius: 10rpx;
			overflow: hidden;
			display: flex;
			justify-content: space-around;
			
			view{
				width: 50%;
				text-align: center;
				color: #FFFFFF;
			}
			.noBtn{
				background-color: #B6D5FF;
			}
			.yesBtn{
				background-color: #1378FF;
			}
		}
	}
</style>
