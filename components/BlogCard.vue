<template>
	<div
		@click="showTextToggle"
		class="blog__card flex-1 p-4 hover:shadow-[0px_0px_40px_0_#9EA3B5] rounded-[24px] duration-500 in-fast cursor-pointer"
	>
		<div>
			<NuxtImg
				width="430"
				height="300"
				format='webp'
				class="object-cover w-[430px] h-[300px] rounded-[24px] mb-6"
				:src="card.image"
				alt=""
			/>
		</div>
		<span class="block text-gray-text mb-4">{{
			new Date(card.date.year, card.date.month, card.date.day).toDateString()
		}}</span>
		<div>
			<h3
				class="text-dark font-bold sm:text-[32px] text-[20px] sm:mb-4 mb-3 leading-tight"
			>
				{{ card.title }}
			</h3>
			<p
				:class="[
					'sm:mb-6 mb-4text-gray-text duration-300 in-fast',
					isTextShow ? '' : 'line-clamp-3',
				]"
			>
				{{ card.text }}
			</p>
		</div>
		<ul class="flex gap-2">
			<li
				v-for="(attribute, index) in card.attributes"
				:key="index"
				class="text-[14px] text-gray-text py-2 px-4 rounded-[24px] bg-gray-light"
			>
				{{ attribute }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
const isTextShow = ref(false)
const showTextToggle = () => {
	isTextShow.value = !isTextShow.value
}
const { card } = defineProps(['card'])
</script>
