<template>
  <view class="sel-seat">
    <!-- top -->
    <view class="seat-head">
      <text class="sh-title">{{ title }}</text>
      <text class="sh-info">{{ info }}</text>
    </view>
    <!-- main -->
    <view class="seat-main">
      <movable-area :style="'height:'+(seatRow*40+350)+'rpx;'" class="vm-area">
        <movable-view :style="'width: 750rpx;height:'+(seatRow*40+350)+'rpx;'" :inertia="true" :scale="true" :scale-min="0.95"
				 :scale-max="2" direction="all" @change="onMove" @scale="onScale">
          <view class="sm-title">
          	<text class="text">{{ roomName }}</text>
          </view>
          <view class="sm-screen">
            <text class="text">银幕中央</text>
          </view>
          <view class="sm-line-center"></view>
          <!-- seat content -->
          <view v-for="(item,index) in seatArray" :key="index" 
            class="sm-cell" :style="'width:'+boxWidth+'px;height:'+seatSize+'px'">
          	<view v-for="(seat,col) in item" :key="col" class="dp-ib" :style="'width:'+seatSize+'px;height:'+seatSize+'px'"
          	 @click="handleChooseSeat(index,col)">
          		<image v-if="seat.type===0" class="sm-icon" src="https://zhoukaiwen.com/img/icon/seat/unselected.png" mode="aspectFit"></image>
          		<image v-else-if="seat.type===1" class="sm-icon" src="https://zhoukaiwen.com/img/icon/seat/selected.png" mode="aspectFit"></image>
          		<image v-else-if="seat.type===2" class="sm-icon" src="https://zhoukaiwen.com/img/icon/seat/bought.png" mode="aspectFit"></image>
          	</view>
          </view>
          <view class="sm-line-index" :style="'left: '+(10-moveX/scale)+'px;'">
          	<text class="text" :style="'height:'+seatSize+'px;'" v-for="(m,mindex) in mArr"
          	 :key="mindex">{{m}}</text>
          </view>
        </movable-view>
      </movable-area>
      <view class="fix-tips" v-if="showTis">
      	<view class="v-tips">
      		<image :style="'width:'+seatSize+'px;height:'+seatSize+'px'" src="https://zhoukaiwen.com/img/icon/seat/unselected.png" mode="aspectFit"></image>
          <text class="text">可选</text>
      	</view>
      	<view class="v-tips">
      		<image :style="'width:'+seatSize+'px;height:'+seatSize+'px'" src="https://zhoukaiwen.com/img/icon/seat/bought.png" mode="aspectFit"></image>
          <text class="text">不可选</text>
      	</view>
      	<view class="v-tips">
      		<image :style="'width:'+seatSize+'px;height:'+seatSize+'px'" src="https://zhoukaiwen.com/img/icon/seat/selected.png" mode="aspectFit"></image>
          <text class="text">选中</text>
      	</view>
      </view>
    </view>
    <!-- foot -->
    <view class="seat-foot">
      <view class="sf-recommend" v-if="SelectNum === 0">
        <text class="text">推荐选座</text>
        <view class="sfr-tag" v-for="num in Math.min(max, 6)" :key="num"
          @click="smartChoose(num+1)">
          <text class="text">{{ num+1 }}人</text>
        </view>
      </view>
      <view class="sf-arselect" v-else>
        <text class="text">已选</text>
        <scroll-view scroll-x="true">
          <view class="scr-wrap">
            <view class="sfr-selt" v-for="(optItem,optindex) in optArr" :key="optItem.SeatCode"
              @click="handleChooseSeat(optItem.rowIndex, optItem.colIndex)">
              <!-- <image src="https://zhoukaiwen.com/img/icon/seat/close.png" class="sfr-close"></image> -->
              <text class="text">{{optItem.RowNum+'排'+optItem.ColumnNum+'座'}}</text>
              <text class="price">￥{{ optItem.Price || '' }}</text>
              <view class="sfr-close">X</view>
            </view>
          </view>
        </scroll-view>
      </view>
      <view class="f-btn" :class="{disabled: SelectNum === 0 }" @click="buySeat">
        <text class="text">{{SelectNum === 0 ? '请选座位' : `￥ ${aPrice} 确认座位`}}</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"anil-seat",
    props: {
      seatData: {
        type: Array
      },
      max: {
        type: Number,
        default: 4
      },
      title: {
        type: String,
        default: ''
      },
      info: {
        type: String,
        default: ''
      },
      roomName: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        scaleMin:1,//h5端为解决1无法缩小问题，设为0.95
        boxWidth: 400, //屏幕宽度px
        space: ' ', //空格
        seatArray: [], //影院座位的二维数组,-1为非座位，0为未购座位，1为已选座位(绿色),2为已购座位(红色),一维行，二维列
        seatRow: 0, //影院座位行数
        seatCol: 0, //影院座位列数
        seatSize: 0, //座位尺寸
        SelectNum: 0, //选择座位数
        moveX: 0, //水平移动偏移量
        scale: 1, //放大倍数
        minRow: 0, //从第几行开始排座位
        minCol: 0, //从第几列开始排座位
        showTis: true, //显示选座提示
        seatList: [], //接口获取的原始位置
        mArr: [], //排数提示
        optArr: [], //选中的座位数组。
        isWXAPP:false,
      };
    },
		computed: {
			aPrice() {
        let totalAmount = ''
        if (this.optArr && this.optArr.length) {
          totalAmount = this.optArr.map(item => Number(item.Price)).reduce((prev, curr) => prev + curr)
        }
				return totalAmount
			},
			rpxNum() {
				return this.boxWidth / 750
			},
			pxNum() {
				return 750 / this.boxWidth
			},
		},
		created() {
			//获取宽度
			uni.getSystemInfo({
				success: (e) => {
					this.boxWidth = e.screenWidth
					//#ifdef H5
					this.scaleMin = 0.95
					//#endif
				}
			})
			this.initData()
		},
		methods: {
			initData: function() {
				let arr = this.seatData
				//假数据说明：SeatCode座位编号，RowNum-行号，ColumnNum-纵号，YCoord-Y坐标，XCoord-X坐标，Status-状态
				let row = 0
				let col = 0
				let minCol = parseInt(arr[0].XCoord)
				let minRow = parseInt(arr[0].YCoord)
				for (let i of arr) {
					minRow = parseInt(i.YCoord) < minRow ? parseInt(i.YCoord) : minRow
					minCol = parseInt(i.XCoord) < minCol ? parseInt(i.XCoord) : minCol
					row = parseInt(i.YCoord) > row ? parseInt(i.YCoord) : row
					col = parseInt(i.XCoord) > col ? parseInt(i.XCoord) : col
				}
				this.seatList = arr
				this.seatRow = row - minRow + 1
				this.seatCol = col - minCol + 3
				this.minRow = minRow
				this.minCol = minCol - 1

				this.initSeatArray()
			},
			//初始座位数组
			initSeatArray: function() {
				let seatArray = Array(this.seatRow).fill(0).map(() => Array(this.seatCol).fill({
					type: -1,
					SeatCode: '',
					RowNum: '',
					ColumnNum: ''
				}));
				this.seatArray = seatArray
				this.seatSize = this.boxWidth > 0 ?
					parseInt(parseInt(this.boxWidth, 10) / (this.seatCol + 1), 10) :
					parseInt(parseInt(414, 10) / (this.seatCol + 1), 10)
				this.initNonSeatPlace();
			},
			//初始化是座位的地方
			initNonSeatPlace: function() {
				let seat = this.seatList.slice()
				let arr = this.seatArray.slice()
				for (let num in seat) {
					let status = 2 //-1为非座位，0为未购座位，1为已选座位(绿色),2为已购座位(红色)
					if (seat[num].Status === 0) {
						status = 0
					} else if (seat[num].Status === -1) {
						status = -1
					}
					arr[parseInt(seat[num].YCoord) - this.minRow][parseInt(seat[num].XCoord) - this.minCol] = {
						type: status,
						SeatCode: seat[num].SeatCode,
						RowNum: seat[num].RowNum,
						ColumnNum: seat[num].ColumnNum,
						Price: seat[num].Price,
					}
				}
				this.seatArray = arr.slice()
				let mArr = []
				for (let i in arr) {
					let m = ''
					for (let n of arr[i]) {
						if (n.SeatCode) {
							m = n.RowNum
						}
					}
					if (m) {
						mArr.push(m)
					} else {
						mArr.push('')
					}
				}
				this.mArr = mArr
			},
			//放大缩小事件
			onScale: function(e) {
				this.showTis = false
				// this.moveX=-e.detail.x
				let w = this.boxWidth * 0.5
				let s = 1 - e.detail.scale
				this.moveX = w * s
				this.scale = e.detail.scale
				if (s > 0 || s === 0) {
					this.showTis = true
				}
			},
			//移动事件
			onMove: function(e) {
				this.showTis = false
				this.moveX = e.detail.x
			},
			//重置座位
			resetSeat: function() {
				this.SelectNum = 0
				this.optArr = []
				//将所有已选座位的值变为0
				let oldArray = this.seatArray.slice();
				for (let i = 0; i < this.seatRow; i++) {
					for (let j = 0; j < this.seatCol; j++) {
						if (oldArray[i][j].type === 1) {
							oldArray[i][j].type = 0
						}
					}
				}
				this.seatArray = oldArray;
			},
			//选定且购买座位
			buySeat: function() {
				if (this.SelectNum === 0) return;
				// let oldArray = [];
				// for (let i = 0; i < this.seatRow; i++) {
				// 	for (let j = 0; j < this.seatCol; j++) {
				// 		if (this.seatArray[i][j].type === 1) {
				// 			oldArray.push(this.seatArray[i][j])
				// 		}
				// 	}
				// }
        // console.log(this.optArr)
        this.$emit('confirm', this.optArr)
			},
			//处理座位选择逻辑
			handleChooseSeat: function(row, col) {
        console.log(row, col)
				let seatValue = this.seatArray[row][col].type;
				let newArray = this.seatArray;
				//如果是已购座位，直接返回
				if (seatValue === 2 || seatValue === -1) return
				//如果是已选座位点击后变未选
				if (seatValue === 1) {
					newArray[row][col].type = 0
					this.SelectNum--
					this.getOptArr(newArray[row][col], 0)
				} else if (seatValue === 0) {
          if (this.SelectNum >= this.max) {
            return uni.showToast({
              title: '一次最多选择' + this.max + '张',
              icon: 'none'
            })
          }
          newArray[row][col].rowIndex = row
          newArray[row][col].colIndex = col
					newArray[row][col].type = 1
					this.SelectNum++
					this.getOptArr(newArray[row][col], 1)
				}
				//必须整体更新二维数组，Vue无法检测到数组某一项更新,必须slice复制一个数组才行
				this.seatArray = newArray.slice();
			
			},
			//处理已选座位数组
			getOptArr: function(item, type) {
        console.log(item)
				let optArr = this.optArr
				if (type === 1) {
					optArr.push(item)
				} else if (type === 0) {
					let arr = []
					optArr.forEach(v => {
						if (v.SeatCode !== item.SeatCode) {
							arr.push(v)
						}
					})
					optArr = arr
				}
				this.optArr = optArr.slice()
			},
			//推荐选座,参数是推荐座位数目，
			smartChoose: function(num) {
				// console.log('num===', num)
				// 先重置
				this.resetSeat()
				//找到影院座位水平垂直中间位置的后一排
				let rowStart = parseInt((this.seatRow - 1) / 2, 10) + 1;
				//先从中间排往后排搜索
				let backResult = this.searchSeatByDirection(rowStart, this.seatRow - 1, num);
				if (backResult.length > 0) {
					this.chooseSeat(backResult);
					this.SelectNum += num
					return
				}
				//再从中间排往前排搜索
				let forwardResult = this.searchSeatByDirection(rowStart - 1, 0, num);
				if (forwardResult.length > 0) {
					this.chooseSeat(forwardResult);
					this.SelectNum += num
					return
				}
				//提示用户无合法位置可选
        // #ifdef H5
				alert('无合法位置可选!')
        // #endif
			},
			
			//搜索函数,参数:fromRow起始行，toRow终止行,num推荐座位数
			searchSeatByDirection: function(fromRow, toRow, num) {
				/*
				 * 推荐座位规则
				 * (1)初始状态从座位行数的一半处的后一排的中间开始向左右分别搜索，取离中间最近的，如果满足条件，
				 *    记录下该结果离座位中轴线的距离，后排搜索完成后取距离最小的那个结果座位最终结果，优先向后排进行搜索，
				 *    后排都没有才往前排搜，前排逻辑同上
				 *
				 * (2)只考虑并排且连续的座位，不能不在一排或者一排中间有分隔
				 *
				 * */

				/*
				 * 保存当前方向搜索结果的数组,元素是对象,result是结果数组，offset代表与中轴线的偏移距离
				 * {
				 *   result:Array([x,y])
				 *   offset:Number
				 * }
				 *
				 */
				let currentDirectionSearchResult = [];

				let largeRow = fromRow > toRow ? fromRow : toRow,
					smallRow = fromRow > toRow ? toRow : fromRow;

				for (let i = smallRow; i <= largeRow; i++) {
					//每一排的搜索,找出该排里中轴线最近的一组座位
					let tempRowResult = [],
						minDistanceToMidLine = Infinity;
					for (let j = 0; j <= this.seatCol - num; j++) {
						//如果有合法位置
						if (this.checkRowSeatContinusAndEmpty(i, j, j + num - 1)) {
							//计算该组位置距离中轴线的距离:该组位置的中间位置到中轴线的距离
							let resultMidPos = parseInt((j + num / 2), 10);
							let distance = Math.abs(parseInt(this.seatCol / 2) - resultMidPos);
							//如果距离较短则更新
							if (distance < minDistanceToMidLine) {
								minDistanceToMidLine = distance;
								//该行的最终结果
								tempRowResult = this.generateRowResult(i, j, j + num - 1)
							}
						}
					}
					//保存该行的最终结果
					currentDirectionSearchResult.push({
						result: tempRowResult,
						offset: minDistanceToMidLine
					})
				}

				//处理后排的搜索结果:找到距离中轴线最短的一个
				//注意这里的逻辑需要区分前后排，对于后排是从前往后，前排则是从后往前找
				let isBackDir = fromRow < toRow;
				let finalReuslt = [],
					minDistanceToMid = Infinity;
				if (isBackDir) {
					//后排情况,从前往后
					currentDirectionSearchResult.forEach((item) => {
						if (item.offset < minDistanceToMid) {
							finalReuslt = item.result;
							minDistanceToMid = item.offset;
						}
					});
				} else {
					//前排情况，从后往前找
					currentDirectionSearchResult.reverse().forEach((item) => {
						if (item.offset < minDistanceToMid) {
							finalReuslt = item.result;
							minDistanceToMid = item.offset;
						}
					})
				}

				//直接返回结果
				return finalReuslt
			},

			/*辅助函数，判断每一行座位从i列到j列是否全部空余且连续
			 *
			 */
			checkRowSeatContinusAndEmpty: function(rowNum, startPos, endPos) {
				let isValid = true;
				for (let i = startPos; i <= endPos; i++) {
					if (this.seatArray[rowNum][i].type !== 0) {
						isValid = false;
						break;
					}
				}
				return isValid
			},
			//辅助函数：返回每一行的某个合理位置的座位数组
			generateRowResult: function(row, startPos, endPos) {
				let result = [];
				for (let i = startPos; i <= endPos; i++) {
					result.push([row, i])
				}
				return result
			},
			//辅助函数:智能推荐的选座操作
			chooseSeat: function(result) {
				let opt = this.optArr
				let oldArray = this.seatArray.slice();
				for (let i = 0; i < result.length; i++) {
					//选定座位
          oldArray[result[i][0]][result[i][1]].rowIndex = result[i][0]
          oldArray[result[i][0]][result[i][1]].colIndex = result[i][1]
					oldArray[result[i][0]][result[i][1]].type = 1
					this.optArr.push(oldArray[result[i][0]][result[i][1]])
				}
				this.seatArray = oldArray;
			},
		}
  }
</script>

<style lang="scss">
.sel-seat {
  display: flex;
  flex-direction: column;
  width: 100%;
  .seat-head {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 20rpx 30rpx;
    position: relative;
    z-index: 5;
    .sh-title {
      font-size: 32rpx;
      font-weight: bold;
      color: #333333;
    }
    .sh-info {
      font-size: 24rpx;
      color: #999999;
      margin-top: 10rpx;
    }
  }
  .seat-main {
    width: 100%;
    position: relative;
    padding: 10rpx;
    .vm-area {
      width: 750rpx;
    }
    .sm-title {
      background-color: #dddddd;
      width: 380rpx;
      height: 34rpx;
      transform: perspective(34rpx) rotateX(-10deg);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 2;
      .text {
        font-size: 24rpx;
        color: #333333;
      }
    }
    .sm-screen {
      width: 100rpx;
      height: 30rpx;
      border: 1rpx solid #cccccc;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 48rpx auto 0;
      border-radius: 4rpx;
      position: relative;
      z-index: 1;
      .text {
        font-size: 20rpx;
        color: #999999;
      }
    }
    .sm-line-center {
      height: 610rpx;
      width: 0;
      border: 1rpx dashed #e5e5e5;
      position: fixed;
      left: 50%;
      top: 0;
      display: block;
      z-index: 0;
      transform: translateX(-50%);
    }
    .fix-tips {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24rpx;
      position: fixed;
      bottom: 220rpx;
      left: 0;
      width: 100%;
      z-index: 1;
      padding: 20rpx;
      .v-tips {
        display: flex;
        align-items: center;
        color: #999;
        margin: 0 10rpx;
        .text {
          margin-left: 10rpx;
        }
      }
    }
    // seat style
    .sm-cell {
      display: flex;
      margin-top: 20rpx;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 2;
      .sm-icon {
        width: 100%;
        height: 100%;
      }
    }
    .sm-line-index {
      position: fixed;
      top: 114rpx;
      left: 20rpx;
      border-radius: 14rpx;
      overflow: hidden;
      background-color: rgba($color: #000000, $alpha: 0.3);
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 20rpx;
      width: 30rpx;
      .text {
        font-size: 24rpx;
        color: #ffffff;
        width: 100%;
        text-align: center;
        margin-top: 20rpx;
      }
    }
  }
  .seat-foot {
	width: 100%;
    background-color: #ffffff;
    padding: 20rpx 30rpx;
    position: fixed;
    z-index: 5;
	bottom: 10rpx;
    .sf-recommend {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 20rpx;
      .text {
        font-size: 28rpx;
        color: #666666;
      }
      .sfr-tag {
        width: 110rpx;
        height: 60rpx;
        border-radius: 4rpx;
        border: 1rpx solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20rpx;
      }
    }
    .sf-arselect {
      @extend .sf-recommend;
      .text {
        font-size: 24rpx;
        color: #666666;
      }
      .price {
        font-size: 20rpx;
        color: red;
      }
      .scr-wrap {
        display: flex;
        white-space: nowrap;
      }
      .sfr-selt {
        min-width: 130rpx;
        height: 60rpx;
        border-radius: 4rpx;
        border: 1rpx solid #ccc;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin-left: 20rpx;
        position: relative;
        margin-left: 20rpx;
        padding-left: 10rpx;
        .sfr-close {
          position: absolute;
          right: 6rpx;
          top: 10rpx;
          font-size: 20rpx;
          color: #999;
        }
      }
    }
    .f-btn {
      background-color: #F45664;
      width: 100%;
      height: 90rpx;
      line-height: 90rpx;
      text-align: center;
      border-radius: 10rpx;
      .text {
        color: #ffffff;
        font-size: 36rpx;
      }
      &.disabled {
        opacity: .8;
      }
    }
  }
}
</style>
