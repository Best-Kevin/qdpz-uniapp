<template>
	<view class="contaier">
		<cu-custom class="navBox" bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">便捷查询</block>
		</cu-custom>
		
		
		<view class="nav-box">
			<view class="" v-for="(item,index) in navList" :class="{active:navIndex==index}" @click="tabClick(index)">
				{{item}}
			</view>
		</view>
		<view class="page-body">
			<map class="map" id="myMap" ref="myMap" style="width:100%;height:65vh" @markertap="markertap" :latitude="latitude" :longitude="longitude"
			 :markers="covers" :scale="scale" :show-location="show_location" :enable-traffic="isTraffic"></map>
		</view>
		<!-- 操作 -->
		<view class="operation">
			<view class="operation-item" @click="refresh">
				<u-icon name="reload" color="#999" size="40"></u-icon>
				<view>刷新</view>
			</view>
			<view class="operation-item" @click="getLocation">
				<image :src="e_zhongxin" mode=""></image>
				<view>中心</view>
			</view>
			<view class="operation-item" @click="traffic">
				<image :src="e_lukuang" mode=""></image>
				<view>路况</view>
			</view>
		</view>
		<view class="gas-station">
			<view class="gas-station-arrow" @click="upView" style="padding: 24rpx;" @touchmove="handletouchmove" @touchstart="handletouchstart"
			 @touchend="handletouchend">
				<u-icon v-if="showList" color="#999" name="arrow-down" size="40"></u-icon>
				<u-icon v-else name="arrow-up" color="#999" size="40"></u-icon>
			</view>

			<view class="search-box" style="padding: 16rpx 30rpx;">
				<u-search bg-color="FFFFFF" border-color="#F0F0F0" height="80" placeholder="查找附近地点,如加油站,超市等" action-text="取消"
				 v-model="keywords" shape="round" :show-action="actionShow" @custom="seachCancel" @search="search"></u-search>
			</view>

			<view class="station-list" :style="{ height: `${showList ? 860 : initHeight}rpx` }" >
				<scroll-view scroll-y="true" :style="{ height: `${showList ? 830 : initHeight}rpx` }">
					<view class="item" v-for="item in stationList" :key="item.id">
						<view class="item-img">
							<image :src="item.photos.length<=0?placeholder:item.photos[0].url" mode=""></image>
						</view>
						<view class="item-info">
							<view class="item-title">{{ item.name }}</view>
							<view class="item-nav">
								<view>距离:<text>{{ item.distance/1000 |formatLatlon}}km</text></view>
								<view>电话:<text>{{ item.tel || '暂无'}}</text></view>
								<view class="btn-nav" @click="navClick(item.location,item.address)">导航</view>
							</view>
							<view>地址:{{ item.address || '暂无'}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import GeocodeUtils from '../common/geocode-utils.js'
	export default {
		data() {
			return {
				navList: ['加油站', '停车场', '厕所', '超市'],
				markerImg: [
					'../static/poi/gasstation.png',
					'../static/poi/parking.png',
					'../static/poi/wc.png',
					'../static/poi/shop.png'
				],
				initHeight:340,
				navIndex: 0,
				map: '',
				latitude: 34.34127,
				longitude: 108.93984,
				scale: 12,
				covers: [],
				isTraffic: false,
				show_location: false,
				keywords: '',
				stationList: [],
				showList: false,
				actionShow: false,
				flag: 0,
				e_zhongxin: '',
				e_lukuang: '',
				placeholder: '../static/morent.png',
			}
		},
		onReady() {
			this.map = uni.createMapContext('myMap');
		},
		onLoad() {
			this.e_zhongxin = '../static/poi/e_zhongxin.png';
			this.e_lukuang = '../static/poi/e_lukuang.png';
			this.keywords = this.navList[this.navIndex]
		},
		mounted() {
			this.getLocation();
		},
		filters: {
			formatLatlon(val) {
				if (typeof(val) === "number") {
					return parseFloat(val).toFixed(2)
				}
				return 0.00;
			}
		},
		methods: {
			markertap(e) {
				let {
					markerId
				} = e.detail;
				let item = this.covers.find(v => v.id === markerId);
				if (item && item.vehicleNo) {
					uni.navigateTo({
						url: `./realTimeMonitoringDetail?vehicleNo=${item.vehicleNo}`
					});
				}
			},
			tabClick(index) {
				this.navIndex = index;
				this.keywords = this.navList[index]
				this.covers = [];
				this.getPoiAround()
			},
			navClick(location, address) {
				console.log(location)
				uni.openLocation({
					latitude: parseFloat(location.split(',')[1]),
					longitude: parseFloat(location.split(',')[0]),
					address: address,
					success: function() {
						console.log('success');
					},
					fail(err) {
						console.log("错误", err);
					}
				});
			},
			getPoiAround() {
				GeocodeUtils.getPoiAround(this.latitude, this.longitude, this.keywords, data => {
					console.log(data.markers)
					console.log(data.poisData)
					this.stationList = [];
					this.covers = [];
					data.poisData.forEach(data => {
						this.stationList.push(data);
						this.covers.push({
							latitude: data.location.split(',')[1],
							longitude: data.location.split(',')[0],
							iconPath: this.markerImg[this.navIndex],
							width: 30,
							height: 30,
							// callout: {
							// 	content: this.huanhang(data.name),
							// 	color: '#0707f7',
							// 	fontSize: 12,
							// 	textAlign: 'center',
							// 	display: 'ALWAYS',
							// 	boxShadow: '5px 5px 10px #aaa',
							// 	borderRadius: 2,
							// 	padding: 8,
							// },
							label: {
								content: this.huanhang(data.name),
								color: '#000000',
								fontSize: 12,
								textAlign: 'center',
								x:-40
							}
						});
					})
					this.map.includePoints({
						points: this.covers,
						padding: [50, 50, 50, 50]
					});
				})
			},
			getLocation() {
				uni.getLocation({
					type: 'wgs84',
					success: res => {
						let {
							latitude,
							longitude
						} = res;
						// 设置中心
						this.latitude = latitude;
						this.longitude = longitude;
						this.getPoiAround()
						// 地图聚焦
						let offset = 0.005;
						let points = [{
								latitude: latitude + offset,
								longitude: longitude + offset
							},
							{
								latitude: latitude - offset,
								longitude: longitude - offset
							}
						];
						this.map.includePoints({
							points
						});
					}
				});
				this.show_location = true;
			},
			refresh(){
				this.getPoiAround();
			},
			//路况
			traffic() {
				this.isTraffic = !this.isTraffic;
			},
			upView() {
				this.showList = !this.showList;
			},
			search() {
				this.actionShow = true;
				let value = this.keywords;
				if (!value) {
					uni.showToast({
						title: '查询内容不能为空！',
						icon: 'none'
					});
					return false;
				}
				this.getPoiAround()
			},
			seachCancel() {
				this.actionShow = false;
			},
			handletouchmove(event) {
				// console.log(event)
				if (this.flag !== 0) {
					return;
				}
				let currentX = event.touches[0].pageX;
				let currentY = event.touches[0].pageY;
				let tx = currentX - this.lastX;
				let ty = currentY - this.lastY;
				let text = '';
				this.mindex = -1;
				//左右方向滑动
				if (Math.abs(tx) > Math.abs(ty)) {
					if (tx < 0) {
						text = '向左滑动';
						console.log('向左滑动');
						this.flag = 1;
						//	this.getList();  //调用列表的方法
					} else if (tx > 0) {
						text = '向右滑动';
						console.log('向右滑动');
						this.flag = 2;
					}
				} else {
					//上下方向滑动
					if (ty < 0) {
						text = '向上滑动';
						console.log('向上滑动');
						this.flag = 3;
						// 调整盒子高低
						uni.getSystemInfo({
							success: res => {
								this.showList = true;
							}
						});
						//	this.getList();  //调用列表的方法
					} else if (ty > 0) {
						text = '向下滑动';
						console.log('向下滑动');
						this.flag = 4;
						// 调整盒子高低
						uni.getSystemInfo({
							success: res => {
								this.showList = false;
							}
						});
					}
				}
				//将当前坐标进行保存以进行下一次计算
				this.lastX = currentX;
				this.lastY = currentY;
				this.text = text;
			},
			handletouchstart(event) {
				// console.log(event)
				this.lastX = event.touches[0].pageX;
				this.lastY = event.touches[0].pageY;
			},
			handletouchend(event) {
				this.flag = 0;
				this.text = '没有滑动';
			},
			huanhang(s) {
				var re = '';
				var length = s.length;
				for (var i = 0, j = 1; i < length; i++, j++) {
					re += s[i];
					if (j && j % 6 == 0) {
						re += '\n';
					}
				}
				return re;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.nav-box {
		display: flex;
		text-align: center;
		height: 80rpx;
		align-items: center;
		border-bottom: 1px solid #gray;
		box-shadow: -1rpx 4rpx 10rpx rgba(2, 90, 221, 0.17);

		view {
			flex: 1;
			font-size: 28rpx;
		}

		.active {
			color: #334BE7;
			font-weight: bold;
		}
	}

	.operation {
		width: 85rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: -1rpx 4rpx 16rpx rgba(2, 90, 221, 0.17);
		border-radius: 10rpx;
		position: absolute;
		bottom: 580rpx;
		right: 21rpx;
		padding-top: 10rpx;
		z-index: 10;

		&-item {
			text-align: center;
			margin-bottom: 10rpx;

			view {
				font-size: 30rpx;
				font-family: SourceHanSansCN-Medium;
				line-height: 32rpx;
				color: rgba(102, 102, 102, 1);
			}
		}

		&-item:nth-child(1) {
			margin-bottom: 24rpx;

			image {
				width: 40rpx;
				height: 32rpx;
			}
		}

		&-item:nth-child(2) {
			margin-bottom: 10rpx;

			image {
				width: 39rpx;
				height: 39rpx;
			}
		}

		&-item:nth-child(3) {
			margin-bottom: 15rpx;

			image {
				width: 42rpx;
				height: 22rpx;
			}
		}
	}

	.gas-station {
		width: 100%;
		background: rgba(255, 255, 255, 1);
		box-shadow: 8rpx 0 24rpx rgba(57, 111, 250, 0.23);
		opacity: 1;
		border-radius: 20rpx 20rpx 0 0;
		position: absolute;
		bottom: 0;
		z-index: 100;

		&-arrow {
			display: flex;
			justify-content: center;
		}

		.station-list {
			padding: 0rpx 22rpx;
			transition: all 0.3s;
			overflow: hidden;

			.item {
				display: flex;
				margin-top: 10rpx;

				.item-img {
					flex-shrink: 0;

					image {
						width: 150rpx;
						height: 150rpx;
						border-radius: 10rpx;
						border: 1px solid #f2f2f2;
					}
				}

				.item-info {
					width: 100%;
					padding: 5rpx 15rpx;

					text {
						color: #334BE7;
					}

					.item-title {
						font-size: 28rpx;
						font-weight: bold;
					}

					view:nth-child(2) {
						margin-top: 5rpx;
						font-size: 24rpx;
					}

					view:nth-child(3) {
						margin-top: 10rpx;
						font-size: 24rpx;
					}

					.item-nav {
						display: flex;
						justify-content: space-between;
						align-items: center;

						.btn-nav {
							width: 100rpx;
							height: 45rpx;
							line-height: 45rpx;
							text-align: center;
							border: 1px solid #334BE7;
							border-radius: 10rpx;
							color: #334BE7;
							font-size: 24rpx;
						}
					}
				}
			}

		}
	}
</style>
