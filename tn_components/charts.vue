<template>
	<view>
		<u-notice-bar mode="horizontal" type="primary" :list="list"></u-notice-bar>

		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">仪表盘</text>
				<text class="text-ABC text-blue">GaugeCharts</text>
			</view>
		</view>
		<view class="chartsMain">
			<canvas canvas-id="canvasGauge" id="canvasGauge" class="charts"></canvas>
		</view>


		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">折线图</text>
				<text class="text-ABC text-blue">LineCharts</text>
			</view>
		</view>
		<view class="chartsMain">
			<canvas canvas-id="canvasArea" id="canvasArea" class="charts" @touchstart="touchArea"></canvas>
		</view>

		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">圆环图</text>
				<text class="text-ABC text-blue">ringCharts</text>
			</view>
		</view>
		<view class="chartsMain">
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchRing"></canvas>
		</view>

		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">饼状图</text>
				<text class="text-ABC text-blue">PieCharts</text>
			</view>
		</view>
		<view class="chartsMain">
			<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie"></canvas>
		</view>

		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">柱状图</text>
				<text class="text-ABC text-blue">ColumnCharts</text>
			</view>
		</view>
		<view class="chartsMain">
			<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas>
		</view>

		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">雷达图</text>
				<text class="text-ABC text-blue">RadarCharts</text>
			</view>
		</view>
		<view class="chartsMain">
			<canvas canvas-id="canvasRadar" id="canvasRadar" class="charts"></canvas>
		</view>

		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">漏斗图</text>
				<text class="text-ABC text-blue">FunnelCharts</text>
			</view>
		</view>
		<view class="chartsMain">
			<canvas canvas-id="canvasFunnel" id="canvasFunnel" class="charts"></canvas>
		</view>

		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">词云图</text>
				<text class="text-ABC text-blue">DataCharts</text>
			</view>
		</view>
		<view class="chartsMain">
			<canvas canvas-id="canvasData" id="canvasData" class="charts"></canvas>
		</view>

	</view>
</template>

<script>
	// 图表
	import uCharts from "@/components/u-charts/u-charts.js";
	var _self;
	var canvaRing = null;
	var canvaArea = null;
	var canvaGauge = null;
	var canvaPie = null;
	var canvaColumn = null;
	var canvaFunnel = null;
	var canvaWord = null;

	export default {
		data() {
			return {
				list:[
					'图表目前均使用：《uCharts高性能跨端图表》，小程序如需接入Echarts等其他图表，敬请期待作者更新...'
				],
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,

				// 词云图
				"cyData": {
					"series": [{
						"name": "Vue.js",
						"textSize": 28
					}, {
						"name": "JavaScript",
						"textSize": 30
					}, {
						"name": "微信小程序",
						"textSize": 20
					}, {
						"name": "支付宝小程序",
						"textSize": 20
					}, {
						"name": "头条小程序",
						"textSize": 20
					}, {
						"name": "抖音小程序",
						"textSize": 25
					}, {
						"name": "App开发",
						"textSize": 30
					}]
				},

				// 漏斗图
				"Funnel": {
					"series": [{
						"name": "一班",
						"data": 50
					}, {
						"name": "二班",
						"data": 30
					}, {
						"name": "三班",
						"data": 20
					}, {
						"name": "四班",
						"data": 18
					}, {
						"name": "五班",
						"data": 8
					}]
				},

				// 柱状图
				"Column": {
					"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
					"series": [{
						"name": "前端学习量",
						"data": [15, {
							"value": 20,
							"color": "#f04864"
						}, 45, 37, 43, 34]
					}, {
						"name": "后台学习量",
						"data": [30, {
							"value": 40,
							"color": "#facc14"
						}, 25, 14, 34, 18]
					}]
				},


				// 仪表盘
				gaugeWidth: 15,
				chartData: {
					categories: [{
						value: 0.2,
						color: '#2fc25b'
					}, {
						value: 0.8,
						color: '#f04864'
					}, {
						value: 1,
						color: '#1890ff'
					}],
					series: [{
						name: '完成率',
						data: 0.85
					}]
				},

				// 圆环图
				"Ring": {
					"series": [{
						"name": "一班",
						"data": 50
					}, {
						"name": "二班",
						"data": 30
					}, {
						"name": "三班",
						"data": 20
					}, {
						"name": "四班",
						"data": 18
					}, {
						"name": "五班",
						"data": 8
					}]
				},
				// 饼状图
				"Pie": {
					"series": [{
						"name": "一班",
						"data": 50
					}, {
						"name": "二班",
						"data": 30
					}, {
						"name": "三班",
						"data": 20
					}, {
						"name": "四班",
						"data": 18
					}, {
						"name": "五班",
						"data": 8
					}]
				},

				// 雷达图
				radar: {
					categories: ['html/css', 'JavaScript', 'Vue.js', 'react.js', 'angular.js', 'jQuery'],
					series: [{
						name: '熟悉度',
						data: [95, 88, 80, 60, 40, 95]
					}]
				},
				// 折线图
				Area: {
					categories: ['6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					series: [{
						name: '学习前端',
						data: [100, 80, 95, 150, 112, 132, 151],
						color: '#facc14'
					}, {
						name: '学习后台',
						data: [70, 40, 65, 100, 44, 68, 78],
						color: '#2fc25b'
					}, {
						name: '学习设计',
						data: [35, 20, 25, 37, 4, 20, 39],
						color: '#1890ff'
					}]
				}


			};
		},
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(420);
			this.getServerData();
		},
		computed: {

		},
		mounted() {

		},
		methods: {
			getServerData() {
				_self.showArea("canvasArea", this.chartData);
				_self.showRadar("canvasRadar", this.chartData);
				_self.showRing("canvasRing", this.Ring);
				_self.showGauge("canvasGauge", this.Gauge);
				_self.showPie("canvasPie", this.Pie);
				_self.showColumn("canvasColumn", this.Column);
				_self.showFunnel("canvasFunnel", this.Column);
				_self.showData("canvasData", this.Data);
			},

			// 词云图
			showData(canvasId, chartData) {
				canvaWord = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'word',
					background: '#ffffff',
					pixelRatio: _self.pixelRatio,
					series: _self.cyData.series,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						word: {
							type: 'normal'
						}
					}
				});
			},


			// 漏斗图
			showFunnel(canvasId, chartData) {
				canvaFunnel = new uCharts({
					$this: this,
					canvasId: canvasId,
					type: 'funnel',
					fontSize: 11,
					// padding: [15, 15, 0, 15],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 0,
					},
					background: '#FFFFFF',
					pixelRatio: this.pixelRatio,
					series: this.Funnel.series,
					animation: true,
					width: this.cWidth * this.pixelRatio,
					height: this.cHeight * this.pixelRatio,
					dataLabel: true,
					extra: {
						funnel: {
							border: true,
							borderWidth: 2,
							borderColor: '#FFFFFF'
						}
					},
				})
			},
			// 柱状图
			showColumn(canvasId, chartData) {
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					legend: true,
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					categories: _self.Column.categories,
					series: _self.Column.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							type: 'group',
							width: _self.cWidth * _self.pixelRatio * 0.45 / _self.Column.categories.length
						}
					}
				});
			},
			touchColumn(e) {
				canvaColumn.showToolTip(e, {
					format: function(item, category) {
						if (typeof item.data === 'object') {
							return category + ' ' + item.name + ':' + item.data.value
						} else {
							return category + ' ' + item.name + ':' + item.data
						}
					}
				});
			},

			// 仪表盘
			showGauge(canvasId, chartData) {
				canvaGauge = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'gauge',
					fontSize: 11,
					legend: false,
					title: {
						name: Math.round(_self.chartData.series[0].data * 100) + '%',
						color: _self.chartData.categories[1].color,
						fontSize: 25 * _self.pixelRatio,
						offsetY: 50 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: _self.chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio,
						offsetY: -50 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					},
					extra: {
						gauge: {
							type: 'default',
							width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
							startAngle: 0.75,
							endAngle: 0.25,
							startNumber: 0,
							endNumber: 100,
							splitLine: {
								fixRadius: 0,
								splitNumber: 10,
								width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
								color: '#FFFFFF',
								childNumber: 5,
								childWidth: _self.gaugeWidth * 0.4 * _self.pixelRatio, //仪表盘背景的宽度
							},
							pointer: {
								width: _self.gaugeWidth * 0.8 * _self.pixelRatio, //指针宽度
								color: 'auto'
							}
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: _self.chartData.categories,
					series: _self.chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
				});
			},

			// 圆环图
			showRing(canvasId, chartData) {
				canvaRing = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'ring',
					fontSize: 11,
					legend: true,
					extra: {
						pie: {
							offsetAngle: -45,
							ringWidth: 30 * _self.pixelRatio,
							lableWidth: 15
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: _self.Ring.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					disablePieStroke: true,
					dataLabel: true,
				});
			},
			touchRing(e) {
				canvaRing.showToolTip(e, {
					format: function(item) {
						return item.name + ':' + item.data
					}
				});
			},

			// 饼状图
			showPie(canvasId, chartData) {
				canvaPie = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					legend: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: _self.Pie.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {
							lableWidth: 15
						}
					},
				});
			},
			touchPie(e) {
				canvaPie.showToolTip(e, {
					format: function(item) {
						return item.name + ':' + item.data
					}
				});
			},

			// 折线图
			showArea(canvasId, chartData) {
				canvaArea = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'area',
					fontSize: 11,
					legend: true,
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: _self.Area.categories,
					series: _self.Area.series,
					animation: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 8
					},
					yAxis: {
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 5,
						min: 10,
						max: 180,
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						area: {
							type: 'straight',
							opacity: 0.2,
							addLine: true,
							width: 2
						}
					}
				});
			},
			touchArea(e) {
				canvaArea.showToolTip(e, {
					format: function(item, category) {
						return item.name + ' ' + category + ' ' + ':' + item.data
					}
				});
			},

			// 雷达图
			showRadar(canvasId, chartData) {
				var canvaRadar = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'radar',
					fontSize: 11,
					padding: [40, 15, 30, 15],
					legend: {
						show: false
					},
					colors: ['#14bcff'],
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					dataLabel: true,
					categories: _self.radar.categories,
					series: _self.radar.series,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						radar: {
							max: 100, //雷达数值的最大值
							opacity: 0.6,
							labelColor: '#333333'
						}
					}
				});
			},
			// ucharts end

		}
	};
</script>

<style lang="scss" scoped>
	.chartsMain {
		width: 750rpx;
		height: 450rpx;
		padding-top: 15rpx;
		background: #fff;
		margin-bottom: 24rpx;
		border-top: 2rpx solid #f2f2f2;
		.charts {
			width: 750rpx;
			height: 450rpx;
			box-sizing: border-box;
		}
	}
</style>
