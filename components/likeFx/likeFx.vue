<template>
  <view class="">
    <canvas canvas-id="bubble" :style="'width:' + width + 'px;height:' + height + 'px'" class="like-fx"></canvas>
  </view>
</template>

<script>
  export default {
    name: 'LikeFx',
    data() {
      return {
        queue: {},
        ctx: null,
        timer: 0
      }
    },
    props: {
      height: {
        type: Number,
        default: 1920
      },
      width: {
        type: Number,
        default: 375
      }
    },
    mounted() {
      this.ctx = uni.createCanvasContext("bubble")
      this.queue = {}
      console.log('likeFx mounted');
    },
    destroyed() {
      console.log('likeFx destoryed');
      this.clearTimer()
    },
    methods: {
      /**点赞 */
      likeClick() {

        const image = "/static/likeFx/" + this.getRandomInt(1, 33) + ".png";
        const anmationData = {
          id: new Date().getTime(),
          timer: 0,
          opacity: 0,
          pathData: this.generatePathData(),
          image: image,
          factor: {
            // speed: 0.0009, // 运动速度，值越小越慢
            // t: 0.4//  贝塞尔函数系数，当为0，就是从无到有，这时候屏幕高度也要调一下
            speed: 0.0006, // 运动速度，值越小越慢
            t: 0.6 //  贝塞尔函数系数，当为0，就是从无到有，这时候屏幕高度也要调一下
          }
        };
        if (Object.keys(this.queue).length > 0) {
          this.queue[anmationData.id] = anmationData;
        } else {
          this.queue[anmationData.id] = anmationData;
          this.bubbleAnimate();
        }
        
        // console.log(image, this.queue);
      },
      /**获取最大最小随机值 */
      getRandom(min, max) {
        return Math.random() * (max - min) + min;
      },
      /**获取最大最小之前随机值的整数 */
      getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      /**获取图片路径 */
      generatePathData() {
        let width = this.width,
          height = this.height;
        const p0 = {
          x: 0.72 * width,
          y: height
        };
        const p1 = {
          x: this.getRandom(0.22 * width, 0.33 * width),
          y: this.getRandom(0.5 * height, 0.75 * height)
        };
        const p2 = {
          x: this.getRandom(0, 0.88 * width),
          y: this.getRandom(0.25 * height, 0.5 * height)
        };
        const p3 = {
          x: this.getRandom(0, 0.88 * width),
          y: this.getRandom(0, 0.125 * height)
        };
        return [p0, p1, p2, p3];
      },
      /**更新图片的最新运动路径 */
      updatePath(data, factor) {
        const p0 = data[0];
        const p1 = data[1];
        const p2 = data[2];
        const p3 = data[3];

        const t = factor.t;

        /*计算多项式系数 （下同）*/
        const cx1 = 3 * (p1.x - p0.x);
        const bx1 = 3 * (p2.x - p1.x) - cx1;
        const ax1 = p3.x - p0.x - cx1 - bx1;

        const cy1 = 3 * (p1.y - p0.y);
        const by1 = 3 * (p2.y - p1.y) - cy1;
        const ay1 = p3.y - p0.y - cy1 - by1;

        const x = ax1 * (t * t * t) + bx1 * (t * t) + cx1 * t + p0.x;
        const y = ay1 * (t * t * t) + by1 * (t * t) + cy1 * t + p0.y;
        // console.log(data, x, y);
        return {
          x,
          y
        };
      },
      /**点赞动画 */
      bubbleAnimate() {
        let width = this.width,
          height = this.height;
        Object.keys(this.queue).forEach(key => {
          const anmationData = this.queue[+key];
          const {
            x,
            y
          } = this.updatePath(
            anmationData.pathData,
            anmationData.factor
          );
          const speed = anmationData.factor.speed;
          anmationData.factor.t += speed;

          var curWidth = 30;
          curWidth = (height - y) / 1.5;
          curWidth = Math.min(30, curWidth);

          var curAlpha = anmationData.opacity;
          curAlpha = y / (0.3 * height); //消失的高度适当调一下
          curAlpha = Math.min(1, curAlpha);
          this.ctx.globalAlpha = curAlpha;
          this.ctx.drawImage(anmationData.image, x - curWidth / 2, y, curWidth, curWidth);
          // this.ctx.setFillStyle('red')
          // this.ctx.fillRect(x - curWidth / 2, y, 50, 50)
          if (anmationData.factor.t > 1) {
            delete this.queue[anmationData.id];
          }
          if (y > height) {
            delete this.queue[anmationData.id];
          }
        });
        this.ctx.draw();
        if (Object.keys(this.queue).length > 0) {
          this.timer = setTimeout(() => {
            this.bubbleAnimate();
          }, 5);
        } else {
          this.clearTimer()
          this.ctx.draw(); // 清空画面
        }
      },
      clearTimer() {
        if (this.timer) {
          clearTimeout(this.timer)
        }
      }
    }
  }
</script>

<style lang="scss">
  .like-fx {
    position: fixed;
    right: 0;
    z-index: 1024;
    pointer-events: none;
    /* background-color: red; */
  }
</style>
