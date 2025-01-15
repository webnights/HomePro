<template>
	<div class="friendly sm:px-[2rem] px-[1.5rem]">
		<div class='cliped-section bg-primary-dark sm:p-[64px] p-[30px] max-w-[1700px] mx-auto rounded-[24px]'>
			<div class="container ">
				<span class="w-full"></span>
				<div>
					<div
						class="flex flex-wrap items-center justify-between sm:pb-[60px] pb-[30px] border-b-[1px] border-gray-text"
					>
						<Heading
							:title="'Fast, Friendly, and Satisfaction Guarantee'"
							:styles="'sm:text-left text-center text-white max-w-[750px]'"
						/>
						<p class="sm:text-left text-center max-w-[600px] text-gray-three">
							No matter how big or small your work is, whether it's for the
							interior or exterior of your home, we are ready to serve and help
							you solve your home problems.
						</p>
					</div>

					<div
						v-if="garantee && garantee.friendly"
						class="flex flex-wrap gap-y-[60px] justify-between sm:pt-[60px] pt-[30px]"
					>
						<div v-for="(garanteeItem, index) in garantee.friendly">
							<GaranteeCard :card="garanteeItem" :key="index" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const { data: garantee } = await useFetch(
	'/api/garantee'
)

</script>

<style scoped>
	@media(max-width: 640px){
		.cliped-section{
		clip-path: none !important;
	}
	}
	.cliped-section{
		clip-path: polygon(0 0, 100% 0, 100% 10%, 98% 15%, 98% 85%, 100% 90%, 100% 100%, 0 100%, 0 90%, 2% 85%, 2% 15%, 0 10%);
	}
</style>
