<template>
	<view class="components-pano">
		<web-view :src="posterUrl"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				posterUrl: null,
			}
		},
		onLoad(option) {
			console.log(option)
			this.posterUrl = 'https://www.zhoukaiwen.com/poster/index.html#/pages/poster/edit-poster/index?id='+ option.id + '&name='+ option.name;
			console.log(this.posterUrl)
		},
		methods: {
			
		}
	}
</script>

<style scoped>

</style>
