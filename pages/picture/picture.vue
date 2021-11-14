<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true">
			<view :class="active === index? 'active': ''" v-for="(item,index) in cates" :key="item.cat_id"
				@click="changeClick(index,e)">{{item.cat_name}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="itemInfo" v-for="(item,index) in rightMenu">
				<view class="item2Info" v-for="item2 in item.children">
					<image
						:src="item2.cat_icon === '/full/none.jpg'? 'https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg':item2.cat_icon">
					</image>
					<text>{{item2.cat_name}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				rightMenu: [],
				url: ''
			}
		},
		methods: {
			async getCateList() {
				const res = await this.$http({
					url: '/categories'
				})

				console.log(res)

				this.cates = res.data.message

				this.changeClick(0);
			},
			changeClick(index) {
				// console.log(index)

				this.active = index

				this.rightMenu = this.cates[index].children
			}
		},
		onLoad() {
			this.getCateList();
		},
	}
</script>

<style lang="scss">
	page {
		height: 100%;

		.pics {
			display: flex;
			height: 100%;

			.left {
				width: 180rpx;
				height: 100%;
				border-right: 1rpx solid #eee;

				view {
					height: 120rpx;
					line-height: 120rpx;
					font-size: 28rpx;
					text-align: center;
					border-top: 1rpx solid #eee;
				}
			}

			.right {
				height: 100%;
				width: 570rpx;
				padding: 10rpx;
				text-align: center;

				.itemInfo {

					image {
						width: 100%;
						border-radius: 10rpx;
					}

					text {
						font-size: 60rpx;
						line-height: 40rpx;
						color: $themeColor;
					}

					.item2Info {
						margin-bottom: 100rpx;
					}
				}
			}
		}

		.active {
			background-color: $themeColor;
			color: white;
		}
	}
</style>
