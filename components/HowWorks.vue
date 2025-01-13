<template>
	<div class="works sm:py-[160px] py-[60px]">
		<div class="container">
			<div class="flex flex-wrap sm:gap-20 items-start">
				<!-- Картинка с flex-1 -->
				<div class="sm:flex-1 object-cover sm:ml-[-70px] sm:mb-0 mb-6">
					<img src="/images/worker/1.png" alt="Работник" class="rounded-lg">
				</div>

				<!-- Текст с flex-1 -->
				<div class="flex-1">
					<Heading
						:title="'How HomePro works?'"
						:styles="'text-dark text-left sm:mb-[60px] mb-[24px]'"
					/>
					<ul class='flex flex-col gap-[40px]' v-if="jobs && jobs.worker">
						<li v-for="(job, index) in jobs.worker" :key="index">
							<WorkerRaw :job="job" :id="index" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const { data: jobs } = await useAsyncData('jobs', () => $fetch('https://webnights.github.io/apis/HomePro/worker.json'));
// const { data: jobs } = await useFetch('https://webnights.github.io/apis/HomePro/worker.json');
</script>
