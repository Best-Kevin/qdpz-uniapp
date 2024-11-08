<template>
  <view>
	  <cu-custom class="navBox" bgColor="bg-gradual-blue" :isBack="true">
	  	<block slot="backText">返回</block>
	  	<block slot="content">在线选座</block>
	  </cu-custom>
	  
    <anil-seat 
      title="皮皮鲁与鲁西西之罐头小人"
      info="2021年10月22日 国语 奇幻 喜剧 儿童"
      room-name="5号厅"
      :seat-data="seatData" 
      :max="4" 
      @confirm="onConfirmSeat">
    </anil-seat>
  </view>
</template>

<script>
  import anilSeat from '@/components/anil-seat/components/anil-seat/anil-seat.vue'
  import {
  	seatData
  } from '@/common/seat-data.js'
  export default {
	components: {anilSeat},
    data() {
      return {
        seatData: seatData
      };
    },
    methods: {
      onConfirmSeat (items) {
        console.log(items)
      }
    }
  }
</script>

<style lang="scss">
page {
  background-color: #eee;
  height: 100%;
}
</style>
