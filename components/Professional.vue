<template>
	<div class="professional sm:py-[120px] py-[60px]" id='about_us'>
		<div class="container">
			<div
				class="flex sm:flex-row flex-col-reverse items-center justify-between gap-4 w-full"
			>
				<div class='flex flex-col sm:gap-[56px] gap-[32px]'>
					<Heading 
					:title = "'Professional for your home services'"
					:description = "'You need help for home care? We are home care professionals focused in the US region. We provide several services that support home services'"
					:styles = "'text-left text-dark'"
					/>
					<ul 
					
					v-if="services && services.professional"
					class='grid sm:grid-cols-2 grid-cols-1 sm:gap-x-[30px] gap-x-[20px] sm:gap-y-[32px] gap-y-[24px]'
					>
						<li 
						v-for="service in services.professional"
						class='flex items-center gap-[14px]'
						>
							<svg
								width="11"
								height="7"
								viewBox="0 0 18 13"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M17 1L6 12L1 7"
									stroke="#142257"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>

							<span class='text-primary-dark font-bold sm:text-[20px] text-[16px]'>{{ service.text }}</span>
						</li>
					</ul>
					<p class='text-white bg-blue p-[12px_32px] rounded-[24px] max-w-[440px]'>
						We already 24 hours fast services to help you. You can contact us at
						<a class='font-bold text-[20px]' href="tel:+78886175894">(888) 617-5894</a>
					</p>
				</div>
				<div class="max-w-[700px]">
					<img
						src="/images/professional/professional.png"
						alt="Рабочие на крыше"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const { data: services } = await useFetch(
	'/api/professional'
)
</script>
