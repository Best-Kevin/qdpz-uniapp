<template>
	<view class="container">
		<view class="topBox">
			<cu-custom :isBack="true" bgColor="bg-shadeTop text-white" style="position: fixed; z-index: 9999999;">
				<block slot="backText">返回</block>
				<block slot="content"></block>
			</cu-custom>
			<image class="topImg" src="https://cdn.zhoukaiwen.com/banner-bg.d26093a6.png" mode="widthFix"></image>
			

			<view class="padding-lr">
				<view class="topHead cu-avatar round xl"
					style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);">
				</view>
				<view class="text-bold text-xl text-center margin-top text-white">Kevin Chou</view>
				<view class="text-bold text-sm text-center margin-top-sm text-white">这是前端铺子组件部分</view>
			</view>
		</view>

		<view style="padding-bottom:120rpx;">
			<view class="flex justify-between text-center padding-lr padding-tb-sm viewBox">
				<view class="flex flex-direction">
					<text class="margin-bottom-xs text-df">使用人数</text>
					<text class="text-bold text-xxl">1025</text>
				</view>
				<view class="flex flex-direction">
					<text class="margin-bottom-xs text-df">交易天数</text>
					<text class="text-bold text-xxl">45</text>
				</view>
				<view class="flex flex-direction">
					<text class="margin-bottom-xs text-df">剩余名额</text>
					<text class="text-bold text-xxl">35/50</text>
				</view>
			</view>
			<view class="padding-lr-sm text-sm viewBox">
				<text>{{ notesType == 0 || notesType == -1 ? notesData : notesDataClose}}</text>
				<text v-show="notesType != -1" @click="notesALl()" class="text-grey margin-left-xs text-bold">
					{{ notesType == 0 ? "收起": '展开'}}
				</text>
			</view>
			<view class="padding-sm flex justify-between viewBox">
				<view class='cu-tag radius light bg-cyan sm'>总资产：0.00 USDT</view>
				<view class='cu-tag radius light bg-cyan sm'>分润比例：10%</view>
			</view>

			<scroll-view scroll-x class="nav text-left margin-bottom-sm viewBox">
				<view class="cu-item" :class="index==TabCur?'text-yellow cur text-bold':''"
					v-for="(item,index) in navList" :key="index" @tap="tabSelect" :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
			
			

			<view class="page1 viewBox" v-show="TabCur == 0">
				<view class="charts_1">
					<view class="cu-bar" style="min-height: 45rpx;">
						<view class="action">
							<text class="text-dflg text-bold">累计收益额</text>
						</view>
						<view class="action padding-right-sm">
							<picker class="picker" @change="time1Change" :value="time1Index" :range="time1">
								<view class="text-grey text-sm">
									{{time1Index>-1?time1[time1Index]:'请选择'}}
									<u-icon class="margin-left-xs" name="arrow-down-fill" size="24"></u-icon>
								</view>
							</picker>
						</view>
					</view>
					<canvas canvas-id="charts_1" id="charts_1" class="charts" />
				</view>
				<view class="charts_2">
					<view class="cu-bar" style="min-height: 45rpx;">
						<view class="action">
							<text class="text-dflg text-bold">每日收益额</text>
						</view>
						<view class="action padding-right-sm">
							<picker class="picker" @change="time1Change" :value="time1Index" :range="time1">
								<view class="text-grey text-sm">
									{{time1Index>-1?time1[time1Index]:'请选择'}}
									<u-icon class="margin-left-xs" name="arrow-down-fill" size="24"></u-icon>
								</view>
							</picker>
						</view>
					</view>
					<canvas canvas-id="charts_2" id="charts_2" class="charts"/>
				</view>
			</view>
			
			<view class="page2 padding-lr-sm padding-top-sm pageBg padding-bottom" v-show="TabCur == 1">
				<view class="centerBox viewBox">
					<view class="flex justify-between padding-sm">
						<view class="flex justify-between flex-direction">
							<view>
								<text class="text-bold text-lg">BTCUSDT</text>
								<view class='cu-tag radius light bg-cyan sm margin-left-xs' style="margin-top: -8rpx;">xxxx</view>
							</view>
							<view class="text-bold">
								<text class="text-xs margin-top-xxs">仓位模式</text>
								<text class="text-xs margin-top-xxs margin-left-xs">5.00x</text>
							</view>
						</view>
						<view class="flex justify-between flex-direction text-right">
							<view>
								<text class="text-xs">盈亏</text>
							</view>
							<text class="text-lg text-bold margin-top-xxs text-red">-15.1525</text>
						</view>
					</view>
					
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">策略名称</text>
						</view>
						<text class="text-sm">-25.02525</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">交易标的</text>
						</view>
						<text class="text-sm">xxxxxx</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">持仓方向</text>
						</view>
						<text class="text-sm">-25.02525</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">未结盈亏</text>
						</view>
						<text class="text-sm">-25.02525</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">持仓均价</text>
						</view>
						<text class="text-sm">-25.02525</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">仓位</text>
						</view>
						<text class="text-sm">-25.02525</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">杠杆</text>
						</view>
						<text class="text-sm">-25.02525</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">持仓数量（颗）</text>
						</view>
						<text class="text-sm">28.65</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">开仓时间</text>
						</view>
						<text class="text-sm">2023/05/24 15:33:25</text>
					</view>
				</view>
				
				
					
			</view>
			
			<view class="page2 padding-lr-sm padding-top-sm pageBg padding-bottom" v-show="TabCur == 2">
				<view class="centerBox viewBox">
					<view class="flex justify-between padding-sm">
						<view class="flex justify-between flex-direction">
							<view>
								<text class="text-bold text-lg">BTCUSDT</text>
								<view class='cu-tag radius light bg-cyan sm margin-left-xs' style="margin-top: -8rpx;">xxxx</view>
							</view>
							<view class="text-bold">
								<text class="text-xs margin-top-xxs">仓位模式</text>
								<text class="text-xs margin-top-xxs margin-left-xs">5.00x</text>
							</view>
						</view>
						<view class="flex justify-between flex-direction text-right">
							<view>
								<text class="text-xs">盈亏</text>
							</view>
							<text class="text-lg text-bold margin-top-xxs text-green">+5.1525</text>
						</view>
					</view>
					
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">策略名称</text>
						</view>
						<text class="text-sm">xxxxxxxx</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">平仓价位</text>
						</view>
						<text class="text-sm">xxxxxxxx</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">净盈亏</text>
						</view>
						<text class="text-sm">xxxxxxxx</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">交易标的</text>
						</view>
						<text class="text-sm">xxxxxxxx</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">持仓方向</text>
						</view>
						<text class="text-sm">xxxxxxxx</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">未结盈亏</text>
						</view>
						<text class="text-sm">xxxxxxxx</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">持仓均价</text>
						</view>
						<text class="text-sm">xxxxxxxx</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">仓位</text>
						</view>
						<text class="text-sm">xxxxxxxx</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">杠杆</text>
						</view>
						<text class="text-sm">xxxxxxxx</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">持仓数量</text>
						</view>
						<text class="text-sm">xxxxxxxx</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">交易所</text>
						</view>
						<text class="text-sm">xxxxxxxx</text>
					</view>
					<view class="flex justify-between padding-lr-sm margin-top-xs">
						<view>
							<text class="text-sm text-bold">开仓时间</text>
						</view>
						<text class="text-sm">2023/05/24 15:33:25</text>
					</view>
				</view>
			</view>
		</view>


		<view class="bottomButton cu-bar topBg tabbar border shop ">
			<button class="action" open-type="contact">
				<view class="cuIcon-favor">
				</view> 订阅
			</button>
			<view @click="goUsePloy" class="btn-group">
				<button class="cu-btn bg-yellow shadow-blur margin-bottom-sm text-bold" style="width: 85%;">跟单</button>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '@/common/request.js';
	import uCharts from '@/components/u-charts-new/u-charts.js';
	var uChartsInstance = {};
	export default {
		data() {
			return {
				notesType: 1,	//字符超出为0，未超出-1，
				notesData:'这是一段数据加载的描述,这是一段数据加载的描述,这是一段数据加载的描述,这是一段数据加载的描述,这是一段数据加载的描述,这是一段数据加载的描述，这是一段数据加载的描述',
				notesDataClose:'这是一段数据加载的描述,这是一段数据加载的描述,这是一段一段数据...',	//数据请求后处理截取
				TabCur: 0,
				navList: [{
						name: '收益报表'
					},
					{
						name: '当前持仓'
					},
					{
						name: '历史持仓'
					}
				],
				cWidth: 750,
				cHeight: 400,
				
				time1Index: 1,
				time1:['7天','30天','90天']
			}
		},
		onShow() {
			
		},
		onLoad(option) {
			//这里的 750 对应 css .charts 的 width
			this.cWidth = uni.upx2px(750);
			//这里的 500 对应 css .charts 的 height
			this.cHeight = uni.upx2px(400);
			this.getServerData1();
			this.getServerData2();
		},
		methods: {
			notesALl(){
				if(this.notesType == 0){
					this.notesType = 1;
				}else{
					this.notesType = 0;
				}
			},
			time1Change(e){
				this.time1Index = e.detail.value;
			},
			goUsePloy(){
				uni.navigateTo({
					url:"detail"
				})
			},
			getServerData1() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
					let res = {
						categories: ["05/18", "05/19", "05/20", "05/21", "05/22", "05/23", "05/24"],
						series: [{
							name: "目标值",
							data: [35, 36, 31, 33, 13, 34, 24]
						}]
					};
					this.drawCharts1('charts_1', res);
				}, 500);
			},
			drawCharts1(id, data) {
				var that = this;
				const ctx = uni.createCanvasContext(id, this);
				uChartsInstance[id] = new uCharts({
					type: "area",
					context: ctx,
					width: that.cWidth,
					height: that.cHeight,
					categories: data.categories,
					series: data.series,
					animation: true,
					background: "#FFFFFF",
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#9A60B4"],
					padding: [15, 0, 0, 10],
					dataLabel: false,
					dataPointShape: false,
					enableScroll: false,
					fontSize:11,
					legend: {
						show: false,
					},
					xAxis: {
						disableGrid: true,
						fontSize:11,
						axisLineColor: '#333333', // 坐标轴轴线颜色
					},
					yAxis: {
						gridType: "dash",
						dashLength: 1,
						gridColor: '#333333',
						 data: [ // 多Y轴配置
							{
								axisLineColor: '#333333', // 坐标轴轴线颜色，默认#CCCCCC
								unit: '%', //Y轴刻度值后附加单位
							}
						  ]
					},
					extra: {
						area: {
							type: "curve",
							opacity: 0.3,
							addLine: true,
							width: 1,
							gradient: true,
							activeType: "hollow"
						},
						
					}
				});
			},

			getServerData2() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
					let res = {
						categories: ["05/18", "05/19", "05/20", "05/21", "05/22", "05/23", "05/24"],
						series: [{
							name: "成交量A",
							data: [
								{
									"value": 20, 
									"color": "#21B16C",
								},
								{
									"value": 25, 
									"color": "#21B16C",
								},
								{
									"value": -5, 
									"color": "#EF4649",
								}, 
								{
									"value": -12, 
									"color": "#EF4649",
								}, 
								{
									"value": 22, 
									"color": "#21B16C",
								},
								{
									"value": 30, 
									"color": "#21B16C",
								},
								{
									"value": -13, 
									"color": "#EF4649",
								}
							]
						}]
					};
					this.drawCharts2('charts_2', res);
				}, 500);
			},
			drawCharts2(id, data) {
				const ctx = uni.createCanvasContext(id, this);
				uChartsInstance[id] = new uCharts({
					type: "column",
					context: ctx,
					width: this.cWidth,
					height: this.cHeight,
					categories: data.categories,
					series: data.series,
					animation: true,
					background: "#FFFFFF",
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#9A60B4"],
					padding: [15, 0, 0, 10],
					enableScroll: false,
					fontSize:11,
					legend: {
						show: false
					},
					xAxis: {
						disableGrid: true,
						fontSize:11,
						axisLineColor: '#333333', // 坐标轴轴线颜色
					},
					yAxis: {
						gridType: "dash",
						dashLength: 1,
						gridColor: '#333333',
						data: [{
							min: -20,
							max: 40,
							axisLineColor: '#333333', // 坐标轴轴线颜色，默认#CCCCCC
						}],
						splitNumber: 6
					},
					opts:{
						series:{
							color: function (params) {
								if (data.series * 1 >= 0) {
								  return "#00E785";
								}
								return "red";
							},
						}
					},
					extra: {
						column: {
							type: "group",
							width: 30,
							activeBgColor: "#000000",
							// linearType: "custom"
						}
					}
				});
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #ffffff !important;
	}
	.viewBox{
		background-color: #f5f5f5;
		color: #333;
	}
	.pageBg{
		background-color: #ffffff;
	}
	.bottomButton {
		width: 750rpx;
		position: fixed;
		bottom: 0;
	}

	.topBox {
		position: relative;
		width: 100%;
		height: 400rpx;
		background: linear-gradient(to bottom, #020036, #101014);
		padding-top: 120rpx;
	}

	.topImg {
		width: 750rpx;
		position: absolute;
		top: 0;
	}

	.topTitle {
		width: 100%;
		position: absolute;
		top: 0;
		color: #ffffff;
	}

	.topHead {
		margin: 0 auto;
		display: block;
	}

	.bg-cyan {
		background-color: rgba(28, 187, 180, 0.2) !important;
		color: #1cbbb4;
		font-size: 20rpx !important;
	}

	.charts_1,
	.charts_2 {
		margin-bottom: 20rpx;
		width: 750rpx;
		height: 450rpx;
	}

	.charts {
		width: 750rpx;
		height: 400rpx;
	}

	.nav .cu-item {
		height: 64rpx;
		line-height: 64rpx;
		padding: 0;
		margin: 0 20rpx;
	}
	.picker::after{
		font-family: cuIcon;
		display: block;
		content: "\e79b";
		position: absolute;
		font-size: 56rpx;
		color: #8799a3;
		line-height: 45rpx;
		width: 30px;
		text-align: center;
		top: -6rpx;
		bottom: 0;
		right: -50rpx;
		margin: auto;
	}
	.centerBox{
		width: 100%;
		padding-bottom: 20rpx;
		border-radius: 18rpx;
	}
	
	/* //总高 - 中间 */
	.kite-classify-center {
		/* height: 85rpx; */
		width: 100%;
		padding: 10rpx 20rpx 20rpx 30rpx;
		margin: 10rpx 0 10rpx 0;
		display: flex;
		justify-content: space-between;
	}
	.kite-classify-row{
		height: 70rpx;
		width: 25% !important;
	}
	.picker::after{
		display: none;
	}
</style>