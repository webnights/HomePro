<template>
	<div class='services__card flex flex-col gap-4 max-w-[300px] sm:text-left text-center '>
		<img class='max-w-[64px] sm:mx-0 mx-auto' :src="card.image" alt="">
		<h6 class='font-bold text-[24px] text-dark'>{{ card.title }}</h6>
		<p>{{ card.description }}</p>
	</div>
</template>

<script lang='ts' setup>
	const {card} = defineProps(['card']);
</script>

