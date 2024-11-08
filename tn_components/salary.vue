<!-- 薪资排行 -->
<template>
	<view>
		<view class="contaier" style="background-color: #FFFFFF;">
			<view class="top_bg">
				<view class="one_box">
					<!-- 第二名 -->
					<view class="top3">
						<view class="num_two">
							<image class="huangguan2" src="@/static/rank/two.png"></image>
							<image class="top3_head" src="http://cdn.zhoukaiwen.com/head2.jpg"></image>
							<!-- <view class="top_name">{{twoName}}</view> -->
							<view class="top_name">李*</view>
							<view class="top_sy">成都·18000<span>元/月</span></view>
						</view>
					</view>

					<!-- 第一名 -->
					<view class="top3">
						<view class="num_one">
							<image class="huangguan1" src="@/static/rank/one.png"></image>
							<image class="top3_head" src="http://cdn.zhoukaiwen.com/head1.jpg"></image>
							<!-- <view class="top_name" style="font-size: 30rpx;">{{oneName}}</view> -->
							<view class="top_name text-bold" style="font-size: 30rpx;">王 * 鑫</view>
							<view class="top_sy">北京·18000<span>元/月</span></view>
						</view>
					</view>

					<!-- 第三名 -->
					<view class="top3">
						<view class="num_three">
							<image class="huangguan2" src="@/static/rank/three.png"></image>
							<image class="top3_head" src="http://cdn.zhoukaiwen.com/head12.jpeg"></image>
							<view class="top_name">郭 * 杰</view>
							<view class="top_sy">西安·17500<span>元/月</span></view>
						</view>
					</view>
				</view>


				<view class="number_sy_box">
					<view class="number_sy_box_title">
						<text>宅家学·统计</text>
						<text style="position: absolute; right: 20rpx;z-index: 9999; font-size: 24rpx;color: #c3c3c3;">
							截止：{{nowTime}}
						</text>
					</view>
					<view class="number_sy_main">
						<view style="width: 50%; text-align: center; border-right: 1px solid #eee;">
							<view class="number_num1">11350元</view>
							<view class="danwei">平均月薪</view>
						</view>
						<view style="width: 50%; text-align: center; z-index: 9999;">
							<view class="number_num2">96.8%</view>
							<view class="danwei">就业率</view>
						</view>

						<image mode="widthFix" class="xiaoding_bg" src="@/static/rank/Intersect.png"></image>
					</view>
				</view>
			</view>

			<view class="rankList_box">
				<view class="rankItem" v-for="(item,index) in rankList" :key="index">
					<view class="rankIndex">
						<text>{{ index + 4 }}</text>
					</view>
					<view class="HeardBox">
						<image class="rankHeard" :src="item.headimgurl "></image>
					</view>

					<view class="NameBox">
						<!-- <view class="userName">{{item.name}}</view> -->
						<view class="userName text-bold">{{item.name}}</view>
						<view class="userPost text-gray">{{item.post}}</view>
						<view class="color_ccc">{{item.city}} ｜ <text class="text-blue">{{item.salary}}</text>元/月</view>
					</view>
					<view class="download_box">
						<image mode="widthFix" src="@/static/rank/download.png"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nowTime: '',
				rankList: [{
						headimgurl: 'http://cdn.zhoukaiwen.com/head4.jpg',
						name: '张 *',
						post: '全栈工程师',
						city: '深圳',
						salary: '17500'
					}, {
						headimgurl: 'http://cdn.zhoukaiwen.com/head5.jpg',
						name: '李 * 阳',
						post: 'Java后台工程师',
						city: '杭州',
						salary: '17000'
					}, {
						headimgurl: 'http://cdn.zhoukaiwen.com/head6.png',
						name: '吕 * 浩',
						post: 'Web前端工程师',
						city: '西安',
						salary: '16000'
					},
					{
						headimgurl: 'http://cdn.zhoukaiwen.com/head7.jpg',
						name: '张 * 鹏',
						post: 'Web前端工程师',
						city: '西安',
						salary: '15500'
					},
					{
						headimgurl: 'http://cdn.zhoukaiwen.com/head8.jpg',
						name: '李 * 静',
						post: 'Web前端工程师',
						city: '西安',
						salary: '15000'
					},
					{
						headimgurl: 'http://cdn.zhoukaiwen.com/head9.jpg',
						name: '周 * 德',
						post: 'Web前端工程师',
						city: '西安',
						salary: '14000'
					},
					{
						headimgurl: 'http://cdn.zhoukaiwen.com/head10.jpeg',
						name: '赵 *',
						post: 'Web前端工程师',
						city: '西安',
						salary: '13500'
					}
				]
			}
		},
		onLoad() {
			this.getTime();
		},
		methods: {
			getTime: function() {

				var date = new Date(),
					year = date.getFullYear(),
					month = date.getMonth() + 1,
					day = date.getDate(),
					hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
					minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
					second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				var timer = year + '-' + month + '-' + day + ' ' + hour + ':00';
				this.nowTime = timer
				console.log(this.nowTime);
			},
		},
		filters: {

		}
	}
</script>

<style lang="scss">
	.top_bg {
		width: 750rpx;
		height: 650rpx;
		background: url(http://cdn.zhoukaiwen.com/rank_bg.png) no-repeat;
		background-size: 750rpx;
		position: relative;
	}

	.one_box {
		width: 750rpx;
		height: 260rpx;
		position: absolute;
		left: 0;
		bottom: 110rpx;
		display: flex;
		justify-content: space-around;
	}

	.one_box .top3 {
		width: 210rpx;
		height: 280rpx;
	}

	.top_name {
		width: 100%;
		height: 55rpx;
		line-height: 60rpx;
		color: #f2f2f2;
		font-size: 26rpx;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.top_sy {
		width: 100%;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		color: rgba(255, 255, 255, .7);
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.top_sy span {
		font-size: 20rpx !important;
	}

	.num_one {
		position: relative;
	}

	.huangguan1 {
		width: 60px;
		height: 60px;
		position: absolute;
		right: -10rpx;
		top: -18*2rpx;
	}

	.num_one .top3_head {
		width: 150rpx;
		height: 150rpx;
		border-radius: 100%;
		margin: 15rpx 0 0 30rpx;
		border: 4rpx solid #ffdd3c;
	}

	.num_two {
		position: relative;
	}

	.huangguan2 {
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		right: 15rpx;
	}

	.num_two .top3_head {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
		margin: 45rpx 0 0 45rpx;
		border: 4rpx solid #bcdcdf;
	}

	.num_three {
		position: relative;
	}

	.huangguan2 {
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		right: 15rpx;
	}

	.num_three .top3_head {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
		margin: 45rpx 0 0 45rpx;
		border: 4rpx solid #e29d85;
	}

	// 第二块
	.number_sy_box {
		width: 700rpx;
		height: 210rpx;
		background-color: #FFFFFF;
		position: absolute;
		left: 25rpx;
		border-radius: 20rpx;
		bottom: -115rpx;
		z-index: 999;
		padding: 22rpx;
		box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.1)
	}

	.number_sy_box_title {
		color: #888888;
		// font-weight: 500;
		font-size: 28rpx;
		display: flex;
		z-index: 9999;
		justify-content: space-between;
	}

	.number_sy_main {
		width: 100%;
		height: 124rpx;
		padding-top: 20rpx;
		line-height: 52rpx;
		// background: red;
		display: flex;
		justify-content: space-around;
		position: relative;
	}

	.xiaoding_bg {
		position: absolute;
		right: -22rpx;
		bottom: -30rpx;
		width: 180rpx;
	}

	.number_num1 {
		font-size: 40rpx;
		font-weight: 500;
		color: #2fc04f;
	}

	.number_num2 {
		font-size: 40rpx;
		font-weight: 500;
		color: #4bac7f;
	}

	.danwei {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 26rpx;
		color: #c9c9c9;
	}

	// 列表
	.rankList_box {
		width: 750rpx;
		min-height: 200rpx;
		margin-top: 130rpx;
	}

	.rankItem:last-child {
		border: none;
	}

	.rankItem {
		width: 700rpx;
		height: 140rpx;
		margin: 0px auto;
		border-bottom: 1px solid #e9e9e9;
	}

	.rankIndex {
		width: 60rpx;
		height: 140rpx;
		line-height: 140rpx;
		text-align: center;
		color: #CCCCCC;
		font-size: 40rpx;
		float: left;
	}

	.HeardBox {
		width: 100rpx;
		height: 100rpx;
		margin: 20rpx;
		border-radius: 100%;
		overflow: hidden;
		float: left;
		margin-right: 25rpx;
		margin-left: 10rpx !important;
	}

	.HeardBox image {
		width: 100%;
		height: 100%;
	}

	.NameBox {
		width: 400rpx;
		height: 140rpx;
		float: left;
		padding-top: 10rpx;
		box-sizing: border-box;
	}

	.NameBox view {
		height: 50rpx;
		line-height: 70rpx;
	}

	.userName {
		min-width: 90rpx;
		font-size: 30rpx;
		float: left;
		margin-right: 20rpx;
	}

	.download_box {
		width: 80rpx;
		height: 140rpx;
		// background-color: red;
		float: right;

	}

	.download_box image {
		width: 45rpx;
		margin: 50rpx auto;
		display: block;
	}
</style>
