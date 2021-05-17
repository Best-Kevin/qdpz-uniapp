<template>
	<view class="qiun-columns">
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">行政区域图</text>
				<text class="text-ABC text-blue">District</text>
			</view>
		</view>

		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasMap" id="canvasMap" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio"
			 :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchMap"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasMap" id="canvasMap" class="charts" @touchstart="touchMap"></canvas>
			<!--#endif-->
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import {
		isJSON
	} from '@/components/u-charts/checker.js';
	var _self;
	var canvaMap = null;

	export default {
		data() {
			return {
				city: '',
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				textarea: '',
			}
		},
		onLoad() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(750);
			this.getServerData();
		},
		methods: {
			getServerData() {
				uni.request({
					url: 'https://cdn.zhoukaiwen.com/dataV.json',
					// url: 'http://192.168.5.105:8080/jeecg-boot/south/southGoverUser/loginVerify/ceshi',
					data: {},
					success: function(res) {
						let cMap = {
							series: []
						};
						cMap.series =res.data.features;
						console.log(res.data)
						_self.showMap("canvasMap", cMap);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
				});
			},
			showMap(canvasId, chartData) {
				canvaMap = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'map',
					fontSize: 11,
					padding: [0, 0, 0, 0],
					legend: {
						show: false
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						map: {
							border: true,
							borderWidth: 1,
							borderColor: '#666666',
							fillOpacity: 0.6
						}
					}
				});
			},
			touchMap(e) {
				canvaMap.showToolTip(e, {
					format: function(item) {
						console.log(item.properties)
						_self.city = item.properties.name;
						return `${item.properties.name} ：只可以一行的文本`
					}
				});
				// if(_self.city == '榆林市'){
				// 	_self.district = mapData_yl;
				// }else if(_self.city == '延安市'){
				// 	_self.district = mapData_ya;
				// }
				// this.getServerData();
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 750upx;
		background-color: #FFFFFF;

	}

	.charts {
		width: 750upx;
		height: 750upx;
		padding: 30rpx 0;
		background-color: #FFFFFF;
	}
</style>
