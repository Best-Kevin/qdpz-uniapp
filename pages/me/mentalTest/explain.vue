<!-- 积分规则说明 -->
<template>
	<view class="contaier">
		<view class="text-xl text-black text-bold margin-bottom-sm">如何获得积分</view>
		<view class="text-df text-gray margin-bottom-sm">
			1、在线答题，使用宅家学小程序进入进行答题，题目不定期进行更新，您可根据筛选类别，选择题目进行相应的答题操作；
		</view>
		<view class="text-df text-gray margin-bottom-sm">
			2、每周答题完成后的首次分享至微信好友即可获得10积分，如不分享既视为放弃获得10积分；
		</view>
		<view class="text-df text-gray margin-bottom-sm">
			3、每人每月最多可获得40积分，超出40积分无法再获得；
		</view>
		
		<view class="text-xl text-black text-bold margin-bottom-sm margin-top-xl">积分兑换规则</view>
		<view class="text-df text-gray margin-bottom-sm">
			1、兑换商品至个人中心，访问「积分商城」板块；
		</view>
		<view class="text-df text-gray margin-bottom-sm">
			2、领取礼品后将自动清除兑换该礼品积分；
		</view>
		<view class="text-df text-gray margin-bottom-sm">
			3、我们将以邮递的形式将礼品送到您身边；
		</view>
		
		<view class="text-xl text-black text-bold margin-bottom-sm margin-top-xl">积分有效期</view>
		<view class="text-df text-gray margin-bottom-sm">
			1、积分将在每年的12月31日24时清空，请及时使用；
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				getHeight: '',
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.contaier{
		padding: 30rpx;
		line-height: 150%;
	}
</style>
