<template>
	<div class='lets-talk cliped-section pt-[40px] bg-primary-dark sm:bg-[url("/images/letsTalk/home.png")] bg-[url("/images/letsTalk/home_phone.png")] bg-no-repeat sm:bg-right-bottom bg-[0_120%] bg-contain' id='contact'>

		<div class='container'>

			<div class='flex gap-8 sm:justify-between justify-center items-center lg:flex-nowrap flex-wrap'>
				<CallUsBlock
				:styles="'sm:items-start sm:text-left items-center text-center'"
				:text="'Already to improve or repair your home? Let’s Talk! '"
				/>
				<img class='max-w-[740px] w-[100%]' src="/images/letsTalk/man.png" alt="Мужчина">
			</div>

		</div>

	</div>
</template>

<script setup lang='ts'>

</script>
<style scoped>
	@media(max-width: 1024px){
		.cliped-section{
		clip-path: polygon(0 0, 20% 0, 22% 2%, 74% 2%, 76% 0, 100% 0, 100% 100%, 0 100%) !important;
	}
	}
	.cliped-section{
		clip-path: polygon(0 0, 10% 0, 12% 5%, 40% 5%, 42% 0, 100% 0, 100% 100%, 0 100%);
	}
</style>

