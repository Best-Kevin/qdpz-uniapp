<template>
	<view>
		<view>
			<drag-button :isDock="true" :existTabBar="true" @btnClick="btnClick" />
			<u-modal v-model="noticeShow" title="公告" confirm-text="我已阅读" width="80%"><inform-com></inform-com></u-modal>
		</view>
	</view>
</template>

<script>
// import dragButton from '@/components/drag-button';
import dragButton from './components/drag-button';
import informCom from './inform';
var _this;

export default {
	components: {
		dragButton,
		informCom
	},
	data() {
		return {
			noticeShow: false //公告显示
		};
	},
	onLoad() {
		console.log(this.$u.config.v);
	},
	mounted() {
		_this = this;
	},
	onPullDownRefresh() {},
	methods: {
		btnClick() {
			this.noticeShow = true;
		}
	}
};
</script>

<style>

</style>
