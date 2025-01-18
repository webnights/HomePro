<template>
	<div class='slider__slide flex-shrink-0 flex-grow-0 basis-[100%] flex flex-col items-center'>
		<p class='text-center text-gray-text leading-[1.6] mb-10 max-w-[730px]'>{{ slide.text }}</p>
		<div class='flex gap-4 items-center'>
			<NuxtImg 
			width='76'
			height='76'
			format='webp'
			class='object-cover rounded-full' :src="slide.image" alt="" />
			<div>
				<span class='font-black text-[24px] block'>{{ slide.name }}</span>
				<img src="/images/icons/rate.svg" alt="Рейтинг">
			</div>
		</div>
	</div>
</template>

<script lang='ts' setup>
const {slide} = defineProps(['slide']);
</script>

