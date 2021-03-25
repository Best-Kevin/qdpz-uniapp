<!-- 关于作者 -->
<template>
  <view class="about">

    <canvas canvas-id="bubble" :style="'width:' + width + 'px;height:' + height + 'px'" class="like-fx"></canvas>
    <like-fx ref="likeFx" :width="width" :height="height"></like-fx>
	
	<view class="titleZ text-center align-center">
		<text class="text-bold">关于作者</text>
		<view class="contentZ">
			<text class="text-xl">项目作者:周凯文，一名6年经验乌黑秀发的九零后web前端程序员，坐标西安，自研项目：「宅家学IT」、「易凯科技」</text>
		</view>
	</view>
	
	<view class="titleZ text-center align-center margin-top-xl">
		<text class="text-bold">想学习？有需求？有项目？</text>
		<view class="contentZ margin-top-lg">
			<text class="text-xl text-bold">「宅家学」</text>
			<text class="text-xl">：软件技术开发培训（实战项目），1至4个月课程可随意选择，课程包含：UI设计、Web前端、Java后台等，挑战万元月薪，快来宅家学吧～</text>
		</view>
		<view class="contentZ" style="margin-top: 40rpx;">
			<text class="text-xl text-bold">「易凯科技」</text>
			<text class="text-xl">：承接电商/OA/分销/财务/进销存/ERP系统/H5页面/网站建设/小程序/公众号/App定制开发/名片设计...</text>
		</view>
	</view>
	
    <button class='' open-type="contact">
      <image src='../../static/logo.png' class='share-img png round shadow-lg bg-white' mode='aspectFit'>
      </image>
    </button>
  </view>
</template>

<script>
  import LikeFx from '@/components/likeFx/likeFx.vue'
  export default {
    components: {
      LikeFx
    },
    data() {
      return {
        animation_timer: null, // 动画定时器
        width: 375,
        height: 1920
      }
    },
    onLoad() {
      this._startLikeAnimation();
    },
    onShareAppMessage() {
      return {
        title: '快来和我们玩转软件开发吧～',
        path: '/pages/about/about?from=share'
      }
    },
    methods: {
      _startLikeAnimation() {
        this.animation_timer = setInterval(() => {
          this.$refs.likeFx.likeClick()
        }, 300)
      }
    }
  }
</script>

<style scoped>
	.titleZ{
		width: 750rpx;
		font-size: 52rpx;
		margin-top: 60rpx;
	}
	.contentZ{
		width: 650rpx;
		margin: 10rpx auto 0;
		text-align: left;
	}
  .about-bg {
    background-size: cover;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    color: #fff;
  }

  .edit-fixed {
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 1024;
    box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0.1);
  }

  .detail-imgs image {
    width: 100%;
    float: left;
    /* height:400rpx; 不定高了*/
    border: 0;
    padding: 0;
    margin: 0
  }

  .share-img {
    position: fixed;
    padding: 10rpx;
    width: 100rpx;
    height: 100rpx;
    /* top: 680rpx; */
    bottom: 200rpx;
    right: 20rpx;
    z-index: 1024;
    opacity: 0.8;
    box-shadow: 0rpx 8rpx 30rpx 0rpx rgba(0, 0, 0, 0.3);
    border: none;
  }

  .about {
    margin: 0;
    width: 100%;
    height: 100vh;
	padding-top: 20%;
    color: #fff;
    background: linear-gradient(-120deg, #F15BB5, #9A5CE5, #01BEFF, #00F5D4);
    /* background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a); */
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

  .container {
    width: 100%;
    position: absolute;
    text-align: center;
  }

  .like-fx {
    position: fixed;
    right: 0;
    z-index: 1024;
    pointer-events: none;
    /* background-color: red; */
  }
</style>
