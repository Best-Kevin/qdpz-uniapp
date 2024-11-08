<!-- 课程班级 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">{{show == 1 ? '报名学习' : '需求制定' }}</block>
		</cu-custom>
		
		<!-- 报名学习 -->
		<view class="cu-timeline" v-if="show == 1">
			<view class="cu-time">
				<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
				<text class='text-xl margin-left'>学习IT开发</text>
			</view>
			<view class="cu-item text-blue">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-blue">学习前端</view>
						<view class="cu-tag line-blue">web</view>
					</view>
					<view class="margin-top">授课方式：视频课程+老师指导</view>
					<view class="margin-top-sm">课程时间：3个月左右</view>
					<view class="margin-top-sm">毕业薪资：不低于 ¥6000</view>
					<view class="margin-top-sm">课程费用：3000元/人</view>
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-blue">学习后台</view>
						<view class="cu-tag line-blue">Java</view>
					</view>
					<view class="margin-top">授课方式：视频课程+老师指导</view>
					<view class="margin-top-sm">课程时间：3个月左右</view>
					<view class="margin-top-sm">毕业薪资：不低于 ¥8000</view>
					<view class="margin-top-sm">课程费用：5000元/人</view>
				</view>
			</view>
			
			<view class="cu-item text-blue">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-blue">学习UI设计</view>
						<view class="cu-tag line-blue">UI</view>
					</view>
					<view class="margin-top">授课方式：视频课程 + 老师指导</view>
					<view class="margin-top-sm">课程时间：2个月左右</view>
					<view class="margin-top-sm">毕业薪资：不低于 ¥6000</view>
					<view class="margin-top-sm">课程费用：3000元/人</view>
				</view>
			</view>
			
			<view class="cu-time">
				<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
				<text class='text-xl margin-left'>毕业考试</text>
			</view>
			<view class="cu-item text-blue">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-blue">毕业考试</view>
						<view class="cu-tag line-blue">三试</view>
					</view>
					<view class="margin-top">对于学习完成的同学进行最后笔试/机试/面试，通过后方可毕业</view>
				</view>
			</view>
			<view class="cu-time">
				<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
				<text class='text-xl margin-left'>简历协助</text>
			</view>
			<view class="cu-item text-blue">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-blue">简历制作</view>
						<view class="cu-tag line-blue">Offer</view>
					</view>
					<view class="margin-top">协助面试，总结面试问题，模拟面试，入职后问题解决</view>
				</view>
			</view>
			<view class="cu-time" style="padding-bottom: 140rpx;">
				<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
				<text class='text-xl margin-left'>完成学习</text>
			</view>
		</view>
		
		<!-- 需求制定 -->
		<view class="wrap" v-if="show == 2">
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#0081ff" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false"
				 swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<!-- 第一页 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<!-- UI设计 -->
						<view class="cu-timeline">
							<view class="cu-time">
								<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
								<text class='text-xl margin-left'>需求沟通</text>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">无原型</view>
										<view class="cu-tag line-blue">原型设计</view>
									</view>
									<view class="margin-top">没有原型，也就是没有业务流程图，无法设计UI图，请先提供完整业务原型，或前往沟通洽谈，原型付费设计：100+元/页（不谈价）</view>
								</view>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">有原型</view>
										<view class="cu-tag line-blue">沟通设计风格</view>
									</view>
									<view class="margin-top">请提供表述完整的原型图，确定设计风格、主题颜色、配色要求等，如难以表述，可提供相关案例图片作为设计参考</view>
								</view>
							</view>
							<view class="cu-time">
								<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
								<text class='text-xl margin-left'>需求评估</text>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">设计时长</view>
										<view class="cu-tag line-blue">评估用时</view>
									</view>
									<view class="margin-top">设计时间我们会根据需求给予及相关流程进行评估，例如：业务流程/原型设计完善，且页面数量在20页内，设计时间约为7个工作日（参考）</view>
								</view>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">已确认需求</view>
										<view class="cu-tag line-blue">评估价格</view>
									</view>
									<view class="margin-top">根据提供的UI设计需求，双方沟通讨论，并对UI设计需求的合理性和可行性分析，确认无误后，包含图标设计，UI设计价格为：200-500元/页</view>
								</view>
							</view>

							<view class="cu-time">
								<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
								<text class='text-xl margin-left'>支付定金</text>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">付款方式</view>
										<view class="cu-tag line-blue">50%定金</view>
									</view>
									<view class="margin-top">设计需求确认后，客户需要支付（支持多种付款方式）最终报价费用的50%作为定金，并提供确认人员的电话及邮箱</view>
								</view>
							</view>

							<view class="cu-time">
								<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
								<text class='text-xl margin-left'>相关设计</text>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">UI设计</view>
										<view class="cu-tag line-blue">首页稿确认</view>
									</view>
									<view class="margin-top">收到定金后，根据最终沟通的设计需求，首页首先进行效果图设计，且将首页UI图发送客户初步确认</view>
								</view>
							</view>
							<view class="cu-time" style="padding-bottom: 320rpx;">
								<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
								<text class='text-xl margin-left'>完成设计交付</text>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 第二页 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<!-- 小程序/App开发 -->
						<view class="cu-timeline">
							<view class="cu-time">
								<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
								<text class='text-xl margin-left'>需求沟通</text>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">项目选型</view>
										<view class="cu-tag line-blue">小程序</view>
									</view>
									<view class="margin-top">
										<view>类型：首先确认需要设计开发的小程序类型，例如：工具类、电商类、内容资讯类、生活服务类、游戏娱乐类等。</view>
										<view class="margin-top-sm">资质：如果是个人资质，那么限制很多（许多功能无法上线），有个体工商营业执照，或者企业资质是最好的。同时有已认证好的公众号也可以直接复用资质给小程序账号</view>
									</view>
								</view>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">项目选型</view>
										<view class="cu-tag line-blue">APP</view>
									</view>
									<view class="margin-top">App项目如上架iOS的App
										Store，首先需要注册苹果开发者账号（需99美金认证），申请发布证书、AppID、Profiles，制作的应用需和企业经营范围相符，个人资质无法制作商业项目。另：安卓无任何限制。</view>
								</view>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">服务器</view>
										<view class="cu-tag line-blue">自购/租赁</view>
									</view>
									<view class="margin-top">
										<view>如果您没有服务器，可自行上阿里云或腾讯云购买，更或者我们协助您购买（因为云服务器购买需要实名认证，而服务器我们只能替您配置好并存放项目，服务器的拥有权还是您的，如果有需求，可提供代管理）</view>
										<view class="margin-top-sm">阿里云建议使用支付宝账号进行注册然后绑定手机号，并完成实名认证。</view>
									</view>
								</view>
							</view>

							<view class="cu-time">
								<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
								<text class='text-xl margin-left'>需求评估</text>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">相关功能点</view>
										<view class="cu-tag line-blue">功能评估</view>
									</view>
									<view class="margin-top">根据功能点及相关实现难点，给予评估报价，实现包括：“原型流程、UI设计、后台开发、前端开发、项目上线”，如果能提供原型流程图，是最好的</view>
								</view>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">开发时长</view>
										<view class="cu-tag line-blue">时间评估</view>
									</view>
									<view class="margin-top">开发时长往往取决于小程序/App类型或相关功能点，一般小程序/App开发上线时长在：2-3个月</view>
								</view>
							</view>

							<view class="cu-time">
								<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
								<text class='text-xl margin-left'>付款模式</text>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">定金支付</view>
										<view class="cu-tag line-blue">5-4-1</view>
									</view>
									<view class="margin-top">客户在项目开始着手开发前，支付最终报价费用的50%作为定金，并以541形式收取（定金50%，上线40%，确认无误10%）</view>
								</view>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">付款方式</view>
										<view class="cu-tag line-blue">多种</view>
									</view>
									<view class="margin-top">支持多种类型付款方式：微信、支付宝、转账等，可提供电子发票（不含税费）</view>
								</view>
							</view>

							<view class="cu-time">
								<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
								<text class='text-xl margin-left'>注意事项</text>
							</view>
							<view class="cu-item text-blue" style="padding-bottom: 320rpx;">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">注意事项</view>
										<view class="cu-tag line-blue">请阅读</view>
									</view>
									<view class="margin-top">如开展项目后，需要额外增加功能，需要再次评估并额外支付新功能款项</view>
								</view>
							</view>

						</view>
					</scroll-view>
				</swiper-item>

				<!-- 第三页 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<!-- 网站开发 -->
						<view class="cu-timeline">
							<view class="cu-time">
								<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
								<text class='text-xl margin-left'>需求沟通</text>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">网站类型</view>
										<view class="cu-tag line-blue">PC</view>
									</view>
									<view class="margin-top">
										<view>网站分企业官网、品牌网站、营销网站、电商网站、门户网站等等，我们主要开发企业官网、官网建设，主要展示企业形象、企业产品和业务、新闻资讯、公司联系信息等。企业网站建设的普遍意义是企业对外宣传交流的窗口</view>
									</view>
								</view>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">网站需求</view>
										<view class="cu-tag line-blue">PC</view>
									</view>
									<view class="margin-top">
										<view>需要确定开发静态官网还是全套，如果是全套，可以先浏览“实战项目”，里面有需要官网案例。</view>
									</view>
								</view>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">服务器</view>
										<view class="cu-tag line-blue">自购/租赁</view>
									</view>
									<view class="margin-top">
										<view>如果您没有服务器，可自行上阿里云或腾讯云购买，更或者我们协助您购买（因为云服务器购买需要实名认证，而服务器我们只能替您配置好并存放项目，服务器的拥有权还是您的，如果有需求，可提供代管理）</view>
										<view class="margin-top-sm">阿里云建议使用支付宝账号进行注册然后绑定手机号，并完成实名认证。</view>
									</view>
								</view>
							</view>

							<view class="cu-time">
								<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
								<text class='text-xl margin-left'>需求评估</text>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">功能点</view>
										<view class="cu-tag line-blue">报价</view>
									</view>
									<view class="margin-top">
										<view>根据功能点和相关实现难点，给予评估报价，实现包括：“原型流程、UI设计、后台开发、前端开发、项目上线”，如果能提供原型流程图，是最好的</view>
									</view>
								</view>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">开发时长</view>
										<view class="cu-tag line-blue">确认时长</view>
									</view>
									<view class="margin-top">
										<view>开发时长取决于官网设计类型和相关功能点，一般官网开发上线时长约为：1个月内</view>
									</view>
								</view>
							</view>

							<view class="cu-time">
								<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
								<text class='text-xl margin-left'>付款模式</text>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">定金支付</view>
										<view class="cu-tag line-blue">5-4-1</view>
									</view>
									<view class="margin-top">客户在项目开始着手开发前，支付最终报价费用的50%作为定金，并以541形式收取（定金50%，上线40%，确认无误10%）</view>
								</view>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">付款方式</view>
										<view class="cu-tag line-blue">多种</view>
									</view>
									<view class="margin-top">支持多种类型付款方式：微信、支付宝、转账等，可提供电子发票（不含税费）</view>
								</view>
							</view>

							<view class="cu-time">
								<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
								<text class='text-xl margin-left'>注意事项</text>
							</view>
							<view class="cu-item text-blue" style="padding-bottom: 320rpx;">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">注意事项</view>
										<view class="cu-tag line-blue">请阅读</view>
									</view>
									<view class="margin-top">如开展项目后，需要额外增加功能，需要再次评估并额外支付新功能款项</view>
								</view>
							</view>
						</view>

					</scroll-view>
				</swiper-item>

				<!-- 第四页 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<!-- 网站开发 -->
						<view class="cu-timeline">
							<view class="cu-time">
								<text class='cuIcon-selection text-white text-lg bg-blue round padding-xs'></text>
								<text class='text-xl margin-left'>解决方案+项目源码（已上线）</text>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">智慧物业解决方案</view>
										<view class="cu-tag line-blue">包含原型</view>
									</view>
									<view class="margin-top">
										<view>项目案例：西安多家物业公司</view>
										<view class="margin-top-sm">包含资料：智慧社区/物业/小区：PPT（多个）、智慧物业解决方案、功能规划书、业务规划书、可经营项目分析、项目营销方案、市场营销计划书、物业呼叫中心建设方案、智慧小区建设方案等</view>
										<view class="margin-top-sm">包含软件：智慧物业管理系统、物业人员App、业主App、业主小程序</view>
										<view class="margin-top-sm">包含功能：基础配置、企业管理、门禁管理、通知公告、故障报修、物业缴费、停车管理、财务管理、快递代收、家政服务、巡更管理、违法随手怕、教育服务等</view>
										<view class="margin-top-sm">价格：点击 [业务咨询]，价格面议</view>
									</view>
								</view>
							</view>
							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">平安校园项目方案</view>
										<view class="cu-tag line-blue">包含原型</view>
									</view>
									<view class="margin-top">
										<view>项目依托已架设的硬件设备及后台人脸识别服务、车辆信息服务、重点人群数据库、地图数据库等，完成对辖区内目标学校周边可疑人员、车辆的追踪、定位和分析。对“护学岗”工作人员的位置信息追踪，确保护学行动顺利开展。通过摄像头视频及各位置数据的分析，达到有效的预警，以减少针对幼儿、青少年的拐卖、群体事件和交通事故的发生。</view>
										<view class="margin-top-sm">价格：点击 [业务咨询]，价格面议</view>
									</view>
								</view>
							</view>

							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">停车场/智慧停车解决方案</view>
										<view class="cu-tag line-blue">包含原型</view>
									</view>
									<view class="margin-top">
										<view>基于小区/商业/路边停车场的建设方案，包含PPT、功能表及功能描述、痛点解决方案、支付相关方案、AI车辆识别等</view>
										<view class="margin-top-sm">价格：点击 [业务咨询]，价格面议</view>
									</view>
								</view>
							</view>

							<view class="cu-item text-blue">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">旧物回收解决方案</view>
										<view class="cu-tag line-blue">包含原型</view>
									</view>
									<view class="margin-top">
										<view>基于旧物回收建设的软件系统及项目资料，功能包含商家入驻、一键下单、积分商城、权限管理、分佣管理、新闻资讯、车辆管理等模块及业务介绍</view>
										<view class="margin-top-sm">价格：点击 [业务咨询]，价格面议</view>
									</view>
								</view>
							</view>

							<view class="cu-item text-blue" style="padding-bottom: 320rpx;">
								<view class="content">
									<view class="cu-capsule radius">
										<view class="cu-tag bg-blue">更多项目方案</view>
										<view class="cu-tag line-blue">业务咨询</view>
									</view>
									<view class="margin-top">
										<view></view>
										<view class="margin-top-sm">了解更多请点击 [业务咨询]</view>
									</view>
								</view>
							</view>

						</view>
					</scroll-view>
				</swiper-item>

			</swiper>
		</view>
		
		<!-- 资讯按钮 -->
		<view class="cu-bar bg-white tabbar shop shadow edit-fixed">
			<button class="action text-gray text-shadow">
				<view class='cuIcon-community text-gray'>
				</view>
			</button>
			<view class="action text-gray text-shadow">
				<text class="text-sm">169人已咨询</text>
			</view>
			<view class='bg-gradual-blue submit margin-left-xl text-xl'>
				<button class='button-no' open-type="contact" @contact="handleContact">
					<text class='text-white'>业务咨询</text>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: 1,
				current: 0,
				list: [{
						name: 'UI设计'
					},
					{
						name: '小程序/App'
					},
					{
						name: '网站开发'
					},
					{
						name: '行业解决方案'
					}
				],
				swiperCurrent: 0,
				dx: 0,
			};
		},
		onLoad(option) {
			console.log(option.mid)
			if(option.mid == 1){
				this.show = 1;
			}else{
				this.show = 2;
			}
		},
		methods: {
			// tab栏切换
			change(index) {
				this.swiperCurrent = index;
			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		}
	};
</script>

<style lang="scss" scoped>
	/* #ifndef H5 */
	page {
		height: 100%;
		background-color: #f2f2f2;
	}

	/* #endif */
</style>

<style lang="scss" scoped>
	.cu-timeline .cu-time {
		width: 100%;
		text-align: left;
		padding: 20rpx 0 20rpx 37rpx;
		font-size: 26rpx;
		color: #888;
		display: block;
	}

	.text-red,
	.line-red,
	.lines-red {
		color: #FF3434;
	}

	.margin-avatar {
		margin-left: -15rpx;
	}

	.margin-avatar-bottom {
		margin-bottom: 150rpx;
	}

	.line-blue-tuniao::after {
		border-color: #0070ff !important;
		color: #0070ff;
	}

	.resume {
		/* background: #f1f1f1; */
		padding-top: 10rpx;
		border-radius: 6rpx;
		display: block;
		color: #666;
		line-height: 1.6;
	}

	.resume+.resume {
		margin-top: 20rpx;
	}

	.resume2 {
		padding-top: 10rpx;
		border-radius: 6rpx;
		display: block;
		color: #666;
		line-height: 1.6;
	}

	.edit {
		position: fixed;
		width: 100rpx;
		height: 100rpx;
		bottom: 250rpx;
		right: 30rpx;
		z-index: 1;
		opacity: 0.8;
		border: 1px solid #189eff;
		border-radius: 100rpx;
		box-shadow: 0rpx 0rpx 6rpx rgba(24, 158, 255, 1);
		padding: 20rpx;
	}

	.love {
		position: fixed;
		width: 100rpx;
		height: 100rpx;
		bottom: 550rpx;
		right: 30rpx;
		z-index: 1024;
		opacity: 0.8;
		border: 1px solid #189eff;
		border-radius: 100rpx;
		box-shadow: 0rpx 0rpx 6rpx rgba(24, 158, 255, 1);
		padding: 20rpx;
	}

	.bg-img-cont {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		height: 350rpx;
	}

	.share-png {
		width: 100rpx;
		height: 100rpx;
		margin: 0 auto;
	}

	.share-wechat {
		width: 35rpx;
		height: 35rpx;
		margin: 0 10rpx -4rpx 0;
		opacity: 0.5;
	}

	.button-no::after {
		border: none;
	}

	.title-pyq {
		background-image: -webkit-linear-gradient(0deg, #1b6cff, #1ca5ff);
		/*1B6CFF 1B42FF*/
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		opacity: 0.5;
	}

	.edit-fixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0.1);
	}

	.button-no {
		border: none;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0);
	}

	.centre {
		text-align: center;
		margin: 200rpx auto;
		font-size: 32rpx;

		image {
			width: 300rpx;
			border-radius: 50%;
			margin: 0 auto;
		}

		.tips {
			font-size: 24rpx;
			color: #999999;
			margin-top: 20rpx;
		}

		.btn {
			margin: 80rpx auto;
			width: 200rpx;
			border-radius: 32rpx;
			line-height: 64rpx;
			color: #ffffff;
			font-size: 26rpx;
			background: linear-gradient(270deg, #1cbbb4 0%, #0081ff 100%);
		}
	}

	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
	}

	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		height: 100%;
	}
</style>
