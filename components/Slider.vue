<template>
	<div
		class="slider border-t-[1px] pt-[20px] border-gray-soft max-w-[1000px] w-[100%] relative overflow-hidden mx-auto h-[450px]"
	>
		<div
			v-if="slides && slides.testimonials"
			class="slider__wrapper flex items-center w-[100%] in-fast duration-300"
			:style="`transform: translateX(-${currentIndex * 100}%)`"
		>
			<SliderSlide
				v-for="(slide, index) in slides.testimonials"
				:key="index"
				:slide="slide"
			/>
		</div>

		<!-- Slider Navigation -->

		<!-- Arrows -->
		<img
			@click="prevSlide"
			class="absolute left-0 sm:top-[20%] top-[85%] translate-y-[-50%] bg-gray-soft p-4 rounded-full hover:bg-blue ease-in duration-300 cursor-pointer"
			src="/images/icons/slider_arrow.svg"
			alt="Стрелка слайдера"
		/>
		<img
			@click="nextSlide"
			class="absolute right-0 sm:top-[20%] top-[85%] translate-y-[-50%] scale-[-1] bg-gray-soft p-4 rounded-full hover:bg-blue ease-in duration-300 cursor-pointer"
			src="/images/icons/slider_arrow.svg"
			alt="Стрелка слайдера"
		/>

		<ul class="flex gap-1 justify-center mt-[60px]" v-if="slides.testimonials">
			<li
				v-for="(item, index) in slides.testimonials"
				:class="[
					'w-[12px] h-[12px] rounded-full bg-gray-soft in-fast duration-300',
					currentIndex === index ? 'slide--active' : '',
				]"
			></li>
		</ul>
	</div>

	<!-- Pagination -->
</template>

<script lang="ts" setup>
const currentIndex = ref(0)
const nextSlide = () => {
	// if(currentIndex.value < slides.value.testimonials.length-1){
	// 	console.log(currentIndex.value)
	// }
	const length = slides.value?.testimonials.length
	currentIndex.value = (++currentIndex.value + length) % length
}
const prevSlide = () => {
	// if(currentIndex.value > 0){
	// }
	const length = slides.value?.testimonials.length
	currentIndex.value = (--currentIndex.value + length) % length
}

const { data: slides } = await useFetch(
	'/api/testimonials'
)
</script>

<style scoped>
.slide--active {
	@apply w-[40px] bg-blue rounded-[24px];
}
</style>
