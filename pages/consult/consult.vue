<template>
	<view class="news">
		<view class="new_item" v-for="item in news" :key="item.goods_id" @click="goDetail(item.goods_id)">
			<image
				:src="item.goods_small_logo? item.goods_small_logo:'https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg'">
			</image>
			<view class="title">
				<text class="title_info">新春快乐就是大幅减少了肯定放假啦空手</text>
				<text class="price">价格：{{item.goods_price}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: [],
				QueryParams: {
					query: '',
					cid: '',
					pagenum: 10,
					pagesize: 10
				},
				totalPages: 1,
			}
		},
		methods: {
			async getNews(stopPullDownRefresh) {
				const res = await this.$http({
					url: '/goods/search',
					data: this.QueryParams
				})
				// console.log(res)
				this.news = [...this.news, ...res.data.message.goods]
				// console.log(this.news)

				stopPullDownRefresh && stopPullDownRefresh()

				const {
					total
				} = res.data.message

				this.totalPages = Math.ceil(total / this.QueryParams.pagesize)
			},
			goDetail(goods_id) {
				// console.log(goods_id)
				uni.navigateTo({
					url: '/pages/news/news?goods_id='+goods_id
				})
			}
		},
		onLoad() {
			this.getNews()
		},
		onReachBottom() {
			// console.log('触底了！')
			if (this.QueryParams.pagenum >= this.totalPages) return
			this.QueryParams.pagenum++
			this.getNews()
		},
		onPullDownRefresh() {
			// console.log('下拉')
			this.news = []
			this.QueryParams.pagenum = 10
			this.getNews(() => {
				uni.stopPullDownRefresh();
			})
		}
	}
</script>

<style lang="scss">
	.news {
		padding: 10rpx;

		view:last-child {
			border: 0;
		}

		.new_item {
			display: flex;
			height: 200rpx;
			padding: 20rpx 0;
			border-bottom: 1rpx solid $themeColor;



			image {
				width: 280rpx;
				height: 200rpx;
			}

			.title {
				padding: 10rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.title_info {}

				.price {
					font-size: 25rpx;
				}
			}
		}
	}
</style>
