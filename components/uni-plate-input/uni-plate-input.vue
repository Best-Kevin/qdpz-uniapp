/**
* @author minisola
* @version 20190814
*/
<template>
	<view class="so-mask">
		<view class="so-plate animation-scale-up">
			<view class="so-plate-head">
				<view class="so-plate-type">
					<radio-group @change="typeChange">
						<label>
							<radio value="1" :checked="type===1" />
							普通车牌
						</label>
						<label>
							<radio value="2" :checked="type===2" />
							新能源车牌
						</label>
					</radio-group>
				</view>
			</view>
			<view class="so-plate-body">
				<view class="so-plate-word" :class="{ active: currentInputIndex == 0 }" @tap="inputSwitch" data-index="0">
					<text>{{ currentInputValue[0] }}</text>
				</view>
				<view class="so-plate-word" :class="{ active: currentInputIndex == 1 }" @tap="inputSwitch" data-index="1">
					<text>{{ currentInputValue[1] }}</text>
				</view>
				<view class="so-plate-dot"></view>
				<view class="so-plate-word" :class="{ active: currentInputIndex == 2 }" @tap="inputSwitch" data-index="2">
					<text>{{ currentInputValue[2] }}</text>
				</view>
				<view class="so-plate-word" :class="{ active: currentInputIndex == 3 }" @tap="inputSwitch" data-index="3">
					<text>{{ currentInputValue[3] }}</text>
				</view>
				<view class="so-plate-word" :class="{ active: currentInputIndex == 4 }" @tap="inputSwitch" data-index="4">
					<text>{{ currentInputValue[4] }}</text>
				</view>
				<view class="so-plate-word" :class="{ active: currentInputIndex == 5 }" @tap="inputSwitch" data-index="5">
					<text>{{ currentInputValue[5] }}</text>
				</view>
				<view class="so-plate-word" :class="{ active: currentInputIndex == 6 }" @tap="inputSwitch" data-index="6">
					<text>{{ currentInputValue[6] }}</text>
				</view>
				<view class="so-plate-word" :class="{ active: currentInputIndex == 7 }" @tap="inputSwitch" v-if="type == 2" data-index="7">
					<text>{{ currentInputValue[7] }}</text>
				</view>
			</view>
			<view class="so-plate-foot">
				<view class="so-plate-keyboard"  :style="{height:keyboardHeight}">
					<view id="keyboard">
						<block v-if="inputType == 1">
							<view hover-class="hover" class="so-plate-key" v-for="el of provinceText" :key="el" :data-value="el" @tap="chooseKey">{{ el }}</view>
						</block>
						<block v-if="inputType == 1">
							<text class="so-plate-key fill-block"></text>
						</block>
						<block v-if="inputType >= 3">
							<view hover-class="hover" class="so-plate-key" v-for="el of numberText" :key="el" :data-value="el" @tap="chooseKey">{{ el }}</view>
						</block>
						<block v-if="inputType >= 2">
							<view hover-class="hover" class="so-plate-key" v-for="el of wordText" :key="el" :data-value="el" @tap="chooseKey">{{ el }}</view>
						</block>
						<block v-if="inputType == 3">
							<text v-for="el of fillBlock" :key="el.num" class="so-plate-key fill-block"></text>
						</block>
						<block v-if="inputType == 4">
							<view hover-class="hover" class="so-plate-key" v-for="el of lastWordText" :key="el" :data-value="el" @tap="chooseKey">{{ el }}</view>
						</block>
							<text v-if="inputType == 4" class="so-plate-key fill-block"></text>
					</view>
				</view>
				<view class="so-plate-btn-group">
					<view>
						<button class="so-plate-btn so-plate-btn--cancel" @tap="$emit('close')">取消</button>
					</view>
					<view>
						<button class="so-plate-btn so-plate-btn--delete" @tap="deleteKey">删除</button>
						<button class="so-plate-btn so-plate-btn--submit" @tap="exportPlate">完成</button>
						
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	name: 'uni-plate-input',
	data() {
		return {
			type: 1, //车牌类型
			currentInputIndex: 0, //当前编辑的输入框
			currentInputValue: ['', '', '', '', '', '', ''],
			fillBlock:[{num:11},{num:12},{num:13},{num:14},{num:15},{num:16}],  //避免:key报错
			keyboardHeightInit:false,
			keyboardHeight:'auto',
			provinceText: [
				'粤',
				'京',
				'冀',
				'沪',
				'津',
				'晋',
				'蒙',
				'辽',
				'吉',
				'黑',
				'苏',
				'浙',
				'皖',
				'闽',
				'赣',
				'鲁',
				'豫',
				'鄂',
				'湘',
				'桂',
				'琼',
				'渝',
				'川',
				'贵',
				'云',
				'藏',
				'陕',
				'甘',
				'青',
				'宁',
				'新'
			],
			numberText: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
			wordText: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
			lastWordText: ['挂', '港', '学', '领', '警']
		};
	},
	props: {
		plate: {
			type: String
		}
	},
	computed: {
		//输入框类型
		inputType() {
			switch (this.currentInputIndex) {
				case 0:
					return 1;
					break;
				case 1:
					return 2;
					break;
				case 2:
					return 3;
					break;
				case 3:
					return 3;
					break;
				case 4:
					return 3;
					break;
				case 5:
					return 3;
					break;
				case 6:
					return this.type==2 ? 3 :4 ;
					break;
				case 7:
					return 4;
					break;
				default:
					return 1;
					break;
			}
		}
	},
	watch:{
		currentInputIndex:function(n,o){
			if(!this.keyboardHeightInit) return
				this.$nextTick(()=>{
					this.changeKeyboardHeight()
				})
		}
	},
	methods: {
		//车牌类型切换
		typeChange(e) {
			this.$emit("typeChange",e.detail.value);
			const {value} = e.detail;
			this.type = parseInt(value)
			this.currentInputIndex = 0
			if(value==1){
				this.currentInputValue = ['','','','','','','']
			}else{
				this.currentInputValue = ['','','','','','','','']
			}
		},
		inputSwitch(e) {
			const { index } = e.currentTarget.dataset;
			this.currentInputIndex = parseInt(index);
		},
		chooseKey(e) {
			const { value } = e.currentTarget.dataset;
			this.$set(this.currentInputValue, this.currentInputIndex, value);
			if(this.type==1 && this.currentInputIndex<6){
				this.currentInputIndex++
			}
			if(this.type==2 && this.currentInputIndex<7){
				this.currentInputIndex++
			}
		},
		deleteKey(){
				this.$set(this.currentInputValue,this.currentInputIndex,'')
				if(this.currentInputIndex!=0) this.currentInputIndex--
		},
		exportPlate(){
			const plate = this.currentInputValue.join('')
			let err = false
			if(this.type===1&&plate.length!=7){
				err = true
			}else if(this.type===2&&plate.length!=8){
				err = true
			}
			if(err) return uni.showToast({
				title:'请输入完整的车牌号码',
				icon:'none'
			})
			
			this.$emit('export',plate)
		},
		changeKeyboardHeight(){
			const that = this
			const query = uni.createSelectorQuery().in(this);
			query.select('#keyboard').boundingClientRect();
			query.exec(function(res) {
				if(res&&res[0]){
					that.keyboardHeight = res[0].height + uni.upx2px(30) + 'px'
					that.keyboardHeightInit = true
				}
			});
		}
	},
	mounted() {
		// console.log(this.plate);
		const plateKey = this.plate.split('')
		if(plateKey.length===7){
			this.type=1
		}else if(plateKey.length===8){
			this.type=2
		}
		if(plateKey.length===7 || plateKey.length===8){
			this.currentInputValue = plateKey
			this.currentInputIndex = plateKey.length-1
		}

		setTimeout(() => {  //在动画结束之后才开始获取
			this.$nextTick(()=>{
				this.changeKeyboardHeight()
			})
		}, 500);
	}
};
</script>
<style scoped lang="less">
@import './uni-plate-input';
</style>
