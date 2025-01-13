<template>
	<div class='footer-nav text-white text-left'>
		<h6 class='mb-5 font-bold text-[24px]'>{{ props.title }}</h6>
		<ul class='flex flex-col gap-4'>
			<li
			v-for='item in props.navigation'
			class='text-[20px]'
			:key='item.name'
			
			>
				<NuxtLink :to='item.link'>{{ item.name }}</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script lang='ts' setup>
const props = defineProps(['title', 'navigation'])
</script>

