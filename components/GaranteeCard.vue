<template>
	<div class='garantee-card flex sm:flex-row sm:text-left text-center flex-col items-center sm:gap-[40px] gap-[20px] sm:max-w-[630px] max-w-full'>	
		<img :src="card.image" alt="">
		<div>
			<h6 class='text-white font-bold sm:text-[24px] text-[18px] mb-3'>{{ card.title }}</h6>
			<p class='text-gray-three'>{{ card.description }}</p>
		</div>
	</div>
</template>

<script lang='ts' setup>
const {card} = defineProps(['card'])
</script>
