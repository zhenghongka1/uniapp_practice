<template>
	<view class="contact">
		<image src="../../static/gywmban.jpg" mode="widthFix"></image>
		<view class="info">
			<view @click="phone">联系电话：400-618-9999（点击拨打）</view>
			<view>小区：宇宙的中银河系的地球的中国的广东的深圳的龙岗区</view>
		</view>
		<map></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			phone() {
				uni.makePhoneCall({
					phoneNumber: '400-618-9999'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {

		image {
			width: 100%;
		}

		.info {
			padding: 20rpx;
			line-height: 100rpx;
			font-size: 30rpx;

			view:nth-child(1) {
				border-bottom: 1rpx solid #ccc;
				color: $themeColor;
			}
		}

		map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
