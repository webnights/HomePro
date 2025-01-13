<template>
	<header class="sm:py-[28px] py-[18px] bg-primary-dark sticky top-0 z-10">
		<div class="container">
			<div class="flex justify-between items-center gap-5">
				<div>
					<NuxtLink to="#hero">
						<img
							class="md:min-w-[150px]"
							src="/images/icons/logo_header.svg"
							alt="Логотип"
						/>
					</NuxtLink>
				</div>
				<nav
					class="max-w-[480px] w-full md:flex hidden justify-between items-center text-white gap-3 font-bold"
				>
					<NuxtLink to="#about_us">About Us</NuxtLink>
					<NuxtLink to="#services">Services</NuxtLink>
					<NuxtLink to="#blog">Our Blog</NuxtLink>
					<NuxtLink to="#contact">Contact</NuxtLink>
				</nav>
				<div class="md:flex hidden items-center gap-2">
					<div class="w-[12px] h-[12px] bg-orange rounded-full"></div>
					<span class="font-bold text-white whitespace-nowrap"
						>24 Hour Services</span
					>
				</div>
				<div @click="toggleMenu" class="burger md:hidden block cursor-pointer">
					<img src="/images/icons/menu.svg" alt="" />
				</div>
			</div>
			<!-- Меню -->
			<div
				:class="`menu h-[100dvh] w-[70vw] top-0 right-0 fixed z-10 bg-primary-dark p-[18px_24px_36px_24px] in-fast duration-300  ${
					isMenuToggle ? 'translate-x-[0]' : 'translate-x-[100%]'
				}`"
			>
				<div
					class="flex items-center justify-between pb-[15px] border-b-[1px] border-gray-text"
				>
					<NuxtLink @click = 'toggleMenu' to="#hero">
						<img src="/images/icons/logo_header.svg" alt="" />
					</NuxtLink>
					<img
						@click="toggleMenu"
						src="/images/icons/close.svg"
						alt=""
						class="cursor-pointer"
					/>
				</div>
				<nav
					class="w-full flex flex-col gap-16 pt-[90px] items-center text-white font-bold"
				>
					<NuxtLink @click="toggleMenu" to="#about_us">About Us</NuxtLink>
					<NuxtLink @click="toggleMenu" to="#services">Services</NuxtLink>
					<NuxtLink @click="toggleMenu" to="#blog">Our Blog</NuxtLink>
					<NuxtLink @click="toggleMenu" to="#contact">Contact</NuxtLink>
				</nav>

				<div
					class="flex items-center gap-2 absolute bottom-[36px] left-[50%] translate-x-[-50%]"
				>
					<div class="w-[12px] h-[12px] bg-orange rounded-full"></div>
					<span class="font-bold text-white whitespace-nowrap"
						>24 Hour Services</span
					>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
const isMenuToggle = ref(false)
const toggleMenu = () => {
	isMenuToggle.value = !isMenuToggle.value
	console.log(isMenuToggle.value)
}
</script>
<style scoped></style>
