<template>
	<div class="FAQ sm:py-[200px] py-[40px]">
		<div class="container">
			<div class="flex justify-between items-start gap-8 lg:flex-nowrap flex-wrap">
				<Heading
					:title="'Frequently Asked Questions'"
					:description="'Still need help? Get Help Now'"
					:styles="'text-left'"
				/>

				<ul class="max-w-[840px]" v-if="questions && questions.FAQ">
					<li
						v-auto-animate
						@click="currentIndex = index"
						:class="[
							'flex flex-col gap-4 py-6 px-8 rounded-[24px]',
							currentIndex === index ? 'bg-gray-light' : '',
						]"
						v-for="(item, index) in questions.FAQ"
						:key="index"
					>
						<div class="flex justify-between">
							<h4 class="sm:text-[24px] text-[18px] font-bold text-dark">
								{{ item.title }}
							</h4>
							<img
								:class="[
									'max-w-[16px]',
									currentIndex === index ? 'rotate-180' : '',
								]"
								src="/images/icons/accordion_icon.svg"
								alt="Стрелка аккордиона"
							/>
						</div>
						<p v-if="index === currentIndex" class="text-[16px] text-[#737373]">
							{{ item.description }}
						</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const currentIndex = ref(0)

const { data: questions } = await useFetch(
	'/api/FAQ'
)
</script>
