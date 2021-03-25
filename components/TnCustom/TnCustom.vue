<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
        <view class="left-action" v-if="!isBack">
        	<slot name="left"></slot>
        </view>
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
    name: 'TnCustom',
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		computed: {
			style() {
				const StatusBar= this.StatusBar;
				const CustomBar= this.CustomBar;
				const bgImage = this.bgImage;
				const style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
      isLeft: {
        type: [Boolean, String],
        default: false
      },
			bgImage: {
				type: String,
				default: ''
			},
		},
		methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
  .cu-bar .left-action {
  	font-size: 30rpx;
  }
  .TN_navbg {
      margin: 0; 
      /* width: 100%; 
      height: 100vh; */ 
      color: #fff; 
    background: linear-gradient(45deg,#F15BB5, #9A5CE5, #01BEFF,#00F5D4); 
      background-size: 500% 500%; 
      animation: gradientBG 15s ease infinite; 
  } 
   
  @keyframes gradientBG { 
      0% { 
          background-position: 0% 50%; 
      } 
      50% { 
          background-position: 100% 50%; 
      } 
      100% { 
          background-position: 0% 50%; 
      } 
  }
</style>
