<template>
	<view class="user_info_content">
		<view class="user_info_wrap">
			<button class="loginBtn" type="default" @click="login" v-if="!hasUserInfo">登录</button>

			<view class="user_info_wrap" v-else>
				<image :src="userInfo.avatarUrl" mode="" class="user_bg"></image>
				<view class="userinfo">
					<image class="user_icon" :src="userInfo.avatarUrl" mode=""></image>
					<view class="user_name" mode="">{{userInfo.nickName}}</view>
				</view>
			</view>
		</view>
		<view class="user_list_content">
			<view class="user_list_main">
				<navigator>
					<view class="store_num">0</view>
					<view class="store_name">收藏的店铺</view>
				</navigator>
				<navigator>
					<view class="store_num">0</view>
					<view class="store_name">收藏的商品</view>
				</navigator>
				<navigator>
					<view class="store_num">0</view>
					<view class="store_name">关注的商品</view>
				</navigator>
				<navigator>
					<view class="store_num">0</view>
					<view class="store_name">我的足迹</view>
				</navigator>
			</view>
			<view class="order_wrap">
				<view class="order_title">我的订单</view>
				<view class="order_content">
					<navigator>
						<view class="order_name">全部订单</view>
					</navigator>
					<navigator>
						<view class="iconfont icon-fukuantongzhi"></view>
						<view class="order_name">待付款</view>
					</navigator>
					<navigator url="/pages/order/index?type=3">
						<view class="iconfont icon-receipt-address"></view>
						<view class="order_name">待收货</view>
					</navigator>
					<navigator>
						<view class="iconfont icon-tuihuotuikuan_dianpu"></view>
						<view class="order_name">退款/退货</view>
					</navigator>
				</view>
			</view>
		</view>

		<view class="footer_info">
			<view class="address_set">收货地址管理</view>
			<view class="app_info_wrap">
				<view class="app_info_item">
					<text>联系客服</text>
					<text>131-452-000</text>
				</view>
				<navigator>
					<view class="app_info_item">意见反馈</view>
				</navigator>
				<view class="app_info_item">关于我们</view>
			</view>
			<view class="app_info_recommend">把应用推荐给他人</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				userInfo: {},
				hasUserInfo: false
			}
		},
		methods: {
			login() {
				uni.getUserProfile({
					desc: '登录',
					success: (res) => {
						// console.log(res)
						this.userInfo = res.userInfo
						// console.log(this.userInfo)

						this.hasUserInfo = true
					}
				})

			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #eee;
	}

	.user_info_content {
		position: relative;

		.user_info_wrap {
			height: 45vh;
			overflow: hidden;
			background-color: $themeColor;

			.loginBtn {
				width: 90%;
				margin-top: 100rpx;
			}

			.user_info_wrap {
				.user_bg {
					height: 50vh;
					width: 100%;
					filter: blur(10rpx);
				}

				.userinfo {
					position: absolute;
					left: 50%;
					transform: translate(-50%);
					top: 10%;
					text-align: center;

					image {}

					.user_icon {
						width: 150rpx;
						height: 150rpx;
						border-radius: 50%;
					}

					.user_name {
						margin-top: 20rpx;
						color: white;
					}
				}
			}
		}

		.user_info_wrap {
			height: 45vh;
			overflow: hidden;
			background-color: $themeColor;

			.loginBtn {
				width: 80%;
				margin-top: 100rpx;
			}

			.user_info_wrap {
				.user_bg {
					height: 50vh;
					width: 100%;
					filter: blur(10rpx);
				}

				.userinfo {
					position: absolute;
					left: 50%;
					transform: translate(-50%);
					top: 10%;
					text-align: center;

					image {}

					.user_icon {
						width: 150rpx;
						height: 150rpx;
						border-radius: 50%;
					}

					.user_name {
						margin-top: 20rpx;
						color: white;
					}
				}
			}
		}

		.user_list_content {
			color: #666;

			.user_list_main {

				position: absolute;
				display: flex;
				justify-content: space-around;
				width: 90%;
				background-color: white;
				bottom: -25rpx;
				left: 37rpx;
				padding: 10rpx 0;

				.store_num {
					text-align: center;
					color: $themeColor;
				}

				.store_name {
					text-align: center;
					font-size: 26rpx;
					color: #666;
				}
			}

			.order_wrap {
				box-sizing: border-box;
				width: 90%;
				position: absolute;
				bottom: -180rpx;
				left: 37rpx;

				.order_title {
					background-color: white;
					align-items: center;
					padding: 10rpx;
					font-size: 30rpx;
					color: #666;
					border-bottom: 1rpx solid #eee;
				}

				.order_content {
					display: flex;
					justify-content: space-around;
					background-color: white;
					font-size: 30rpx;
					padding: 20rpx;
				}
			}
		}

		.footer_info {
			position: absolute;
			bottom: -540rpx;
			left: 37rpx;
			width: 90%;

			.address_set {
				box-sizing: border-box;
				background-color: white;
				width: 100%;
				padding: 10rpx;
				margin: 20rpx 0;
				color: #666;
				font-size: 30rpx;
			}

			.app_info_wrap {
				color: #666;
				font-size: 30rpx;

				.app_info_item {
					box-sizing: border-box;
					padding: 10rpx;
					border-bottom: 1rpx solid #ccc;
					background-color: white;
				}
			}

			.app_info_recommend {
				margin-top: 20rpx;
				box-sizing: border-box;
				padding: 10rpx;
				background-color: white;
				color: #666;
				font-size: 30rpx;
			}
		}
	}
</style>
