<template>
	<view>
		<scroll-view style="height: 800rpx;" scroll-y="true" class="padding-top-sm">
			<template v-if="!informData.length">
				<u-empty text="当前暂无公告信息" mode="news"></u-empty>
			</template>
			<view v-if="!noticeInfo">
				<block v-for="(item, index) in informData" :key="index">
					<view class="cu-bar padding solid" @click="clickInfo(item)">
						<view class="margin-left-sm" style="width: 440rpx;">
							<view class="text-df text-cut">{{ item.title }}</view>
							<view class="text-gray text-sm">
								<view class="text-cut">{{ item.content }}</view>
							</view>
						</view>
						<text class="action"><text class="text-blue text-xs">查看</text></text>
					</view>
				</block>
			</view>
			<view class="padding-sm" v-if="noticeInfo">
				<view class="text-left margin-xs text-bold">{{ informInfo.title }}</view>
				<view class="text-content info">{{ informInfo.content }}</view>
				<view class="text-right text-df margin-top">发布时间：{{ informInfo.date || '暂无' }}</view>
				<view class="text-center margin-sm" @click="noticeInfo = false"><text class="cu-btn bg-green sm radius">返回</text></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
var _this;
export default {
	props: {
		noticeShow: false
	},
	data() {
		return {
			noticeInfo: false,
			informData: [
				{
					title: '郑州暴雨后人间百态',
					content:
						'7月20日，河南省多地遭遇极端强降雨，持续强降雨造成道路、地铁等公共设施被淹，人员被困。有人被困商场，市民组成“人墙”喊口号合力救援；有人被困洪水抱树求救，社区工作人员扔条幅救援；行人不慎被水冲走，市民湍急水流中将人救下……众人在暴雨中积极自救和互助，每一个画面都让人动容。',
					date: '今天08:50 '
				},
				{
					title: '郑州暴雨期间酒店竟涨价10倍至2、3千元！希岸酒店道歉称系加盟店所为',
					content:
						'7月22日，希岸酒店总部就郑州高铁站涨价10倍一事发布致歉声明称，此次事件是该加盟店不遵守总部规定所致，酒店将积极配合相关部门监督检查，向该客人表示歉意。',
					date: ''
				}
			],
			informInfo: {}
		};
	},
	onLoad() {
		/* this.xx = uni.getStorageSync("xx"); */
	},
	mounted() {
		_this = this;
	},

	methods: {
		clickInfo(item) {
			this.noticeInfo = true;
			this.informInfo = item;
		}
	}
};
</script>

<style>
.info {
	text-indent: 2em;
	font-size: 28upx;
	text-align: justify;
}
</style>
