<template>
	<div :class="[props.styles, 'max-w-[550px]']">
		<h2 class='sm:text-[52px] text-[24px] font-bold leading-[1.2] sm:mb-[24px] mb-[12px]'>{{props.title}}</h2>
		<p :class= "['text-gray-text', props.text]" >{{ props.description }}</p>
	</div>
</template>

<script lang='ts' setup>
const props = defineProps(['title', 'description', 'styles', 'text'])
</script>

