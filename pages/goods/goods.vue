<template>
	<view>
		<goods-list :goodsList="goods"></goods-list>
		<view class="isDown" v-if="isDown">-------我是有底线的---------</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods_list/goods_list.vue'

	export default {
		data() {
			return {
				goods: [],
				QueryParams: {
					query: '',
					cid: '',
					pagenum: 1,
					pagesize: 10
				},
				totalPages: 1,
				isDown: false
			}
		},
		components: {
			"goods-list": goodsList
		},
		methods: {
			async getGoodsList(stopPullDownRefresh) {
				const res = await this.$http({
					url: '/goods/search',
					data: this.QueryParams
				})
				// console.log(res)
				this.goods = [...this.goods, ...res.data.message.goods]

				stopPullDownRefresh && stopPullDownRefresh()
 
				const {
					total
				} = res.data.message

				this.totalPages = Math.ceil(total / this.QueryParams.pagesize)
			},
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			// console.log('触底了！')
			if (this.QueryParams.pagenum >= this.totalPages) return this.isDown = true
			this.QueryParams.pagenum++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			// console.log('下拉')
			this.goods = []
			this.QueryParams.pagenum = 1
			this.isDown = false
			this.getGoodsList(() => {
				uni.stopPullDownRefresh();
			})
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background-color: #eee;
	}

	.isDown {
		width: 100%;
		height: 100%;
		line-height: 100rpx;
		text-align: center;
		font-size: 28rpx;
	}
</style>
