<template>
	<view class="goods_detail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
			indicator-active-color="#b50e03">
			<swiper-item v-for="(item,index) in goodspics" :key='index'>
				<image
					:src="item.pics_mid? item.pics_mid:'https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg'">
				</image>
			</swiper-item>
		</swiper>

		<view class="goods_content">
			<view class="goods_info">
				<view class="goods_price">￥{{goodsDetail.goods_price}}</view>
				<view class="goods_name">{{goodsDetail.goods_name}}</view>
				<view class="goods_num">库存：{{goodsDetail.goods_number}}</view>
			</view>

			<view class="goods_introduce_content">
				<view class="introduce_title">
					详情介绍
				</view>
				<rich-text :nodes="goodsDetail.goods_introduce"></rich-text>
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import request from '../../util/request.js'
	import uniGoodsNav from '../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav'

	export default {
		components: {
			uniGoodsNav
		},
		data() {
			return {
				goodsDetail: [],
				goodspics: [],
				goods_name: '',
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 0,
					infoBackgroundColor: '#ff0000',
					infoColor: "#fff"
				}, {
					icon: 'cart',
					text: '购物车',
				 info: 0
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			async getGoodsDetail(goods_id) {
				const res = await this.$http({
					url: "/goods/detail",
					data: {
						goods_id
					}
				})
				console.log(res);

				this.goodsDetail = res.data.message

				this.goodspics = res.data.message.pics
				this.goods_name = res.data.message.goods_name
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				// console.log(e)
				this.options[2].info++
			}
		},
		onLoad(options) {
			// console.log(options)
			const {
				goods_id
			} = options
			this.getGoodsDetail(goods_id)
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #eee;

		.goods_detail {
			swiper {
				height: 700rpx;

				swiper-item {
					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.goods_content {
				padding-bottom: 100rpx;

				.goods_info {
					background-color: white;
					padding: 40rpx 15rpx;

					.goods_price {
						color: $themeColor;
						padding-bottom: 10rpx;
						font-size: 45rpx;
					}

					.goods_name {
						font-size: 30rpx;
						line-height: 50rpx;
					}

					.goods_num {
						font-size: 25rpx;
						color: #ccc;
						float: right;
					}
				}
			}

			.goods_introduce_content {
				.introduce_title {
					background-color: white;
					margin-top: 10rpx;
					padding: 15rpx 15rpx 20rpx 15rpx;
					border-bottom: 1rpx solid #eee;
				}
			}
			
			.goods_nav{
				position: fixed;
				bottom: 0;
				width: 100%;
			}
		}
	}
</style>
