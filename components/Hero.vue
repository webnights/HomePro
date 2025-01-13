<template>
	<div
		class="hero bg-primary-dark sm:pb-[90px] sm:pt-[30px] py-[30px] relative rounded-b-[20px]"
		id='hero'
	>
		<!-- Маски -->

		<div class="px-[1rem]">
			<div class="flex md:justify-between justify-center items-center gap-6">
				<div class="relative">
					<img
						class="rounded-[24px] min-w-[260px] max-w-[410px] lg:block hidden"
						src="/images/hero/hero1.jpg"
						alt=""
					/>
					<div class="rounded-[24px] image_overlay absolute inset-0"></div>
				</div>

				<div class="flex-1 flex flex-col items-center">
					<div
						class="sm:text-[20px] text-[14px] text-gray-three font-bold flex gap-[14px] items-center justify-center mb-[14px]"
					>
						<span class="">Maintenances </span>
						<span class="w-[4px] h-[4px] rounded-full bg-gray-three"></span>
						<span>Repairs</span>
						<span class="w-[4px] h-[4px] rounded-full bg-gray-three"></span>
						<span>Improvements</span>
					</div>
					<CallUsBlock
					 :styles="'text-center items-center'"
					 :text="'Need improvement or repair your home? we can help!'"
					 />
					<ul
						v-if="advantages && advantages.hero"
						class="flex flex-wrap items-center justify-center xl:gap-x-[64px] gap-x-[20px] gap-y-[20px] xl:mt-[150px] mt-[80px]"
					>
						<li
							v-for="advantage in advantages.hero"
							class="flex items-center gap-4 leading-[130%] max-w-[170px]"
						>
							<img :src="advantage.icon" alt="" />
							<span
								class="text-white sm:text-[18px] text-[14px] font-semibold"
								>{{ advantage.text }}</span
							>
						</li>
					</ul>
				</div>
				<div class="relative">
					<img
						v-if="isMounted"
						class="rounded-[24px] min-w-[260px] max-w-[410px] lg:block hidden"
						src="/images/hero/hero2.jpg"
						alt=""
					/>
					<div
						class="rounded-[24px] image_overlay absolute inset-0 scale-x-[-1]"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { HeroData } from '@/types/types' // Импортируем тип
// const { data: advantages } = await useFetch<HeroData>(
// 	'https://webnights.github.io/apis/HomePro/'
// )
const { data: advantages } = await useAsyncData<HeroData>('advantages', ()=>
	$fetch('https://webnights.github.io/apis/HomePro/')
)
const isMounted = ref(false)
onMounted(() => {
	isMounted.value = true
})
</script>
<style scoped>
.image_overlay {
	background: rgb(19, 31, 75);
	background: linear-gradient(
		142deg,
		rgba(19, 31, 75, 0) 0%,
		rgba(19, 31, 75, 1) 100%
	);
}
</style>
