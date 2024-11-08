<template>
	<view class='contents'>
		<web-view :src="webViewUrl" @message="message"></web-view>
	</view>
</template>

<script>
	var touchs = [];
	var content = null;
	import Handwriting from "../common/signature.js"
	export default {
		data() {
			return {
				webViewUrl: '',
				editText: '',
				isShow: 'edit',
				dataInfo: {},
				lineColor: 'black',
				slideValue: 50,
				handwriting: '',
				selectColor: 'black',
				color: '',
				showimg: '',
				share_popup: false,
				editValue: '',
				editId: 4,
				editFlag: false,
				editFlagInd: '',
				editArr: [{
						id: 2,
						type: 'img',
						url: 'http://tmp/wx882474815048b124.o6zAJs6zLBrqHZ6rE0r60_jbIB-I.iJl90E6G2DmW54aff795486e1f09393fe05826536b54.png',
						width: 375,
						height: 250,
						active: false,
						top: 0,
						left: 0,
					},
					{
						id: 3,
						type: 'text',
						text: '这是一段文字',
						color: '#ffffff',
						width: 50,
						height: 50,
						active: false,
						top: 300,
						left: 100,
						radius: 0,
						rotate: 0,
					},
				], //数组
				imgRotate: 0,
				shapeBox: 'tx',
			}
		},
		onShow() {
			this.dataInfo = uni.getStorageSync("userInfo")
			// this.webViewUrl='http://192.168.5.119:8080/?url='+this.dataInfo.src
			this.webViewUrl = 'https://www.zhoukaiwen.com/proj/imageEditor/index.html'
			console.log(this.dataInfo)
		},
		onLoad() {
			this.handwriting = new Handwriting({
				lineColor: this.lineColor,
				slideValue: this.slideValue, // 0, 25, 50, 75, 100
				canvasName: 'handWriting',
			})
		},
		methods: {
			message(e) {
				console.log(e)
				let imgData = e.detail.data[0].imgData
				this.saveImageToPhotosAlbum(imgData)
			},
			saveImageToPhotosAlbum(imgData) {
				// let base64=this.img_.replace(/^data:image\/\w+;base64,/, "");//去掉data:image/png;base64,
				let filePath = wx.env.USER_DATA_PATH + '/hym_pay_qrcode.png';
				uni.getFileSystemManager().writeFile({
					filePath: filePath, //创建一个临时文件名
					data: imgData, //写入的文本或二进制数据
					encoding: 'base64', //写入当前文件的字符编码
					success: res => {
						uni.saveImageToPhotosAlbum({
							filePath: filePath,
							success: function(res2) {
								// 	title: '保存成功',
								uni.showToast({
									title: '图片保存成功',
									icon: 'none'
								})
								console.log('保存成功');
							},
							fail: function(err) {
								console.log(err.errMsg);
								uni.showToast({
									title: '图片保存失败',
									icon: 'none'
								})
							}
						})
					},
					fail: err => {
						console.log(err)
						uni.showToast({
							title: '图片保存失败',
							icon: 'none'
						})
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	
</style>
