<template>
  <view class="components-anloading">
    <tn-custom>
      <block slot="left">
        <!-- #ifdef MP-WEIXIN -->
        <navigator class='action border-custom' open-type="navigateBack" :delta="1" hover-class="none" :style="'width:' + Custom.width + 'px;height:' + Custom.height + 'px;margin-left:calc(750rpx - ' + Custom.right + 'px)'">
          <text class='cuIcon-back'></text>
          <text class='cuIcon-homefill'></text>
        </navigator>
        <!-- #endif -->
        <!-- #ifdef H5 -->
        <navigator class='action border-custom' open-type="navigateBack" :delta="1" hover-class="none" style="width: 174rpx;height: 64rpx;margin-left: 20rpx">
          <text class='cuIcon-back'></text>
          <text class='cuIcon-homefill'></text>
        </navigator>
        <!-- #endif -->
      </block>
    </tn-custom>

    <view class="hex-border">
      <view class="hexagons">
        <view class="hexagon"></view>
        <view class="hexagon"></view>
        <view class="hexagon"></view>
        <view class="hexagon"></view>
        <view class="hexagon"></view>
        <view class="hexagon"></view>
        <view class="hexagon"></view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        Custom: this.Custom
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .components-anloading {
    margin: 0;
    width: 100%;
    height: 100vh;
    color: #fff;
    background: linear-gradient(45deg, #0fd850, #f9f047);
  }

  .hex-border {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    width: 170px;
    height: 170px;
    border: 2px solid rgba(235, 237, 241, 0.8);
    border-radius: 100%;
  }

  .hex-border::before {
    content: "";
    position: absolute;
    width: 174px;
    height: 174px;
    border: 2px solid #f77062;
    border-radius: 100%;
    box-sizing: border-box;
    clip-path: inset(0px 135px 135px 0px);
    -webkit-clip-path: inset(0px 135px 135px 0px);
    top: -4px;
    left: -4px;
    animation: rotateSmall 2s linear infinite;
    z-index: 2;
  }

  .hex-border::after {
    content: "";
    position: absolute;
    width: 174px;
    height: 174px;
    border: 2px solid #fe5196;
    border-radius: 100%;
    box-sizing: border-box;
    top: -4px;
    left: -4px;
    clip-path: inset(0px 30px 30px 0px);
    -webkit-clip-path: inset(0px 30px 30px 0px);
    animation: rotateLarge 1.6s linear infinite;
  }

  .hexagons {
    position: relative;
    border-radius: 100%;
    padding: 5%;
    top: 30px;
    left: 35px;
  }

  .hexagon {
    position: absolute;
    width: 40px;
    height: 23px;
    background-color: #fe5196;
    transform: scale(1.02);
    transform-origin: center;
  }

  .hexagon::before {
    content: "";
    position: absolute;
    top: -11.5px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 11.5px solid #fe5196;
  }

  .hexagon::after {
    content: "";
    position: absolute;
    top: 23px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 11.5px solid #fe5196;
  }

  .hexagon:nth-child(1) {
    animation: animateHex 3s infinite;
  }

  .hexagon:nth-child(2) {
    left: 53px;
    animation: animateHex 3s 0.2s infinite;
  }

  .hexagon:nth-child(3) {
    left: -13px;
    top: 46px;
    animation: animateHex 3s 1s infinite;
  }

  .hexagon:nth-child(4) {
    left: 31px;
    top: 46px;
    animation: animateHex 3s 1.2s infinite;
  }

  .hexagon:nth-child(5) {
    left: 75px;
    top: 46px;
    animation: animateHex 3s 0.4s infinite;
  }

  .hexagon:nth-child(6) {
    top: 84px;
    animation: animateHex 3s 0.8s infinite;
  }

  .hexagon:nth-child(7) {
    left: 53px;
    top: 84px;
    animation: animateHex 3s 0.6s infinite;
  }

  @keyframes rotateSmall {
    100% {
      transform: rotate(1turn);
    }
  }

  @keyframes rotateLarge {
    0% {
      clip-path: inset(0px 30px 30px 0px);
      -webkit-clip-path: inset(0px 30px 30px 0px);
    }

    50% {
      clip-path: inset(0px 150px 150px 0px);
      -webkit-clip-path: inset(0px 150px 150px 0px);
    }

    100% {
      transform: rotate(1turn);
      clip-path: inset(0px 30px 30px 0px);
      -webkit-clip-path: inset(0px 30px 30px 0px);
    }
  }

  @keyframes animateHex {
    0% {
      transform: scale(1.02);
    }

    20%,
    50% {
      transform: scale(0.6);
      opacity: 0;
    }

    65% {
      transform: scale(1.02);
      opacity: 1;
    }
  }
</style>
