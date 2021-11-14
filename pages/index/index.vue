<template>
	<view class="content">
		<swiper :indicator-dots="true" :autoplay="true" :interval="1800" :duration="1000"
			indicator-active-color="#b50e02" indicator-color="white">
			<swiper-item v-for="item in swipers" :key="item.goods_id">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>

		<view class="navBar">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="naviGator(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>

		<view class="recommendGoods">
			<view class="recommendTitles">推荐商品</view>
			<goods-list :goodsList="goods"></goods-list>
		</view>
		<view class="isDown" v-if="isDown">-------我是有底线的---------</view>

	</view>
</template>

<script>
	import goodsList from '../../components/goods_list/goods_list.vue'

	export default {

		data() {
			return {
				swipers: [],
				QueryParams: {
					query: '',
					cid: '',
					pagenum: 1,
					pagesize: 10
				},
				totalPages: 1,
				isDown: false,
				goods: [],
				navs: [{
						icon: 'iconfont icon-ziyuan',
						title: 'HK超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/connect/connect'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/picture/picture'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/stuVideo/stuVideo'
					},
				]

			}

		},
		onLoad() {
			this.getSwiper()
			this.getGoodsList();
		},
		components: {
			"goods-list": goodsList
		},
		methods: {
			async getSwiper() {
				const res = await this.$http({
					url: '/home/swiperdata'
				})

				// console.log(res)	
				this.swipers = res.data.message

			},

			async getGoodsList() {
				const res = await this.$http({
					url: '/goods/search',
					data: this.QueryParams
				})
				// console.log(res)
				this.goods = [...this.goods, ...res.data.message.goods]

				const {
					total
				} = res.data.message

				this.totalPages = Math.ceil(total / this.QueryParams.pagesize)
			},
			naviGator(url) {
				// console.log(url)
				uni.navigateTo({
					url
				})
			},
			onReachBottom() {
				// console.log('触底了！')
				if (this.QueryParams.pagenum >= this.totalPages) return this.isDown = true

				this.QueryParams.pagenum++
				this.getGoodsList()
			}
		}
	}
</script>

<style lang="scss">
	.content {
		width: 750rpx;
		height: 380rpx;

		image {
			height: 100%;
			width: 100%;
		}

		.navBar {
			display: flex;
			margin-top: 20rpx;

			.nav_item {
				flex: 1;
				font-size: 30rpx;
				text-align: center;
				padding-bottom: 50rpx;

				.iconfont {
					width: 120rpx;
					height: 120rpx;
					line-height: 120rpx;
					border-radius: 50%;
					margin: 10rpx auto;
					background: $themeColor;
					color: white;
				}
			}
		}

		.recommendGoods {
			background-color: #eee;
			overflow: hidden;
			padding-bottom: 100rpx;

			.recommendTitles {
				height: 100rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: white;
				letter-spacing: 40rpx;
				background-color: white;
				margin: 10rpx 0;
				color: $themeColor;
			}

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
		}

		.isDown {
			width: 100%;
			height: 100%;
			line-height: 100rpx;
			text-align: center;
			font-size: 28rpx;
		}
	}
</style>
