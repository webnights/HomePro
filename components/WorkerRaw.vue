<template>
	<div class="worker__raw flex sm:flex-nowrap flex-wrap sm:items-start items-center sm:gap-6">
		<span class="text-[52px] text-gray-three font-bold sm:w-[55px] w-[80px] flex-shrink-0">
			{{ props.id + 1 }}.
		</span>
			<h4 class="font-bold sm:text-[24px] text-[20px] w-[160px] text-dark flex-shrink-0">
				{{ props.job.title }}
			</h4>
			<p class="text-gray-text sm:max-w-[420px] w-full">
				{{ props.job.description }}
			</p>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps(['job', 'id']);
</script>
