<template>
	<div>
		<div :class="['flex flex-col gap-[24px]', props.styles]">
			<h1 class="font-extrabold text-white sm:max-w-[680px] max-w-[330px] leading-[1.2]">
				{{ props.text }}
			</h1>
			<ul class="flex items center gap-[45px]">
				<li class="flex items-center gap-[12px]">
					<svg
						width="18"
						height="13"
						viewBox="0 0 18 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M17 1L6 12L1 7"
							stroke="#15B2F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<span class="text-blue md:text-[20px] text-[14px]">Free Quotes</span>
				</li>
				<li class="flex items-center gap-[12px]">
					<svg
						width="18"
						height="13"
						viewBox="0 0 18 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M17 1L6 12L1 7"
							stroke="#15B2F5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<span class="text-blue md:text-[20px] text-[14px]"
						>100% Commitment-Free
					</span>
				</li>
			</ul>

			<CallUsButton />
		</div>

		<div></div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps(['styles','text'])
</script>
<style scoped>

h1 {
	font-size: calc(32px + (64 - 32) * ((100vw - 380px) / (1920 - 380)));
	word-wrap: break-word !important;
}
</style>
