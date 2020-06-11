<template>
	<div class="swiper-list">
		<transition-group tag='ul' name='img'>
			<li v-for='(item, index) in imgList' :key='item.url' v-show='index===mark'>
				<div class="swiper-item" :style="{backgroundImage: 'url('+item.url+')'}"></div>
			</li>
		</transition-group>
	</div>
</template>

<script>

	export default {
		name: 'SwiperGradient',
		props: {
			imgList: Array,
			default: () => []
		},

		data() {
			return {
				mark: 0,
			}
		},

		created() {
			this.play();
		},

		methods: {
			autoPlay() {
				if (this.mark < this.imgList.length-1) {
					this.mark++;
				} else {
					this.mark = 0;
				}
			},

			play() {
				setInterval(this.autoPlay, 3000)
			}
		}
	}

</script>



<style scoped lang="scss">
	.swiper-list, .swiper-list ul {
		position: relative;
		width: 100%;
		height: 100%;		
	}

	ul, li {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.swiper-list ul li {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.swiper-item {
		background-position: 0px;
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		height: 100%;
	}

	.img-enter-active,.img-leave-active {
		transition: opacity 4s;
	}

	.img-enter,.img-leave-to {
		opacity: 0;
	}

	.img-enter-to,.img-leave {
		opacity: 1;
	}
</style>
