<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goodsList" :key="" item.goods_id>
			<image
				:src="item.goods_small_logo? item.goods_small_logo:'https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg'"
				mode="widthFix"></image>
			<view class="price">
				<text>{{item.goods_price}}</text>
				<text>￥9999</text>
			</view>
			<view class="goods_name">
				{{item.goods_name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['goodsList'],

		data() {
			return {

			};
		},
		}
	
</script>

<style lang="scss">
	.goods_list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 10rpx;

		.goods_item {
			width: 355rpx;
			box-sizing: border-box;
			background-color: white;
			padding: 15rpx;
			margin: 10rpx 0;
			text-align: center;

			image {
				width: 80%;
				height: 150rpx;
			}

			.price {
				color: $themeColor;
				font-size: 35rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 25rpx;
					margin-left: 10rpx;
					text-decoration: line-through;
				}
			}

			.goods_name {
				font-size: 32rpx;
				margin-bottom: 50rpx;
				display: -webkit-box;
				overflow: hidden;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
		}
	}
</style>
