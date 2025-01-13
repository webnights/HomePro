<template>
	<div class='footer pt-[50px] bg-[#15B2F5]'>
		<div class='container'>

			<div>

				<StayConnected
				/>

				<div class='flex justify-between gap-3 flex-wrap py-[60px]'>

					<div class='max-w-[460px] flex flex-col sm:gap-[42px] gap-[24px] sm:mb-0 mb-[20px]'>
						<img class='max-w-[220px]' src="/images/icons/logo_footer.svg" alt="Логотип футер">
						<p class='text-white'>Home Pro is your premier destination for top-notch smart home service and repair. </p>
						<Socials/>
					</div>
					<div class='flex sm:gap-[100px] gap-[60px] '>
						<FooterNav
						:title = "'Company'"
						:navigation = 'companyNav'
						/>
						<FooterNav
						:title = "'Legal'"
						:navigation = 'legalNav'
						/>
					</div>

				</div>

				<div>
					<span class='text-white text-center w-full py-[20px] border-t-[1px] border-white block'>
						©2023 HomePro . All rights reserved
					</span>
				</div>
			</div>

		</div>
	</div>
</template>

<script setup lang='ts'>
	const companyNav = [
		{
			name: "About us",
			link: "#about_us"
		},
		{
			name: "Services",
			link: "#services"
		},
		{
			name: "Our Blog",
			link: "#our_blog"
		},
		{
			name: "Contact",
			link: "#contact"
		}
	]
	const legalNav = [
		{
			name: "Terms",
			link: "#"
		},
		{
			name: "Privacy",
			link: "#"
		},
		{
			name: "Cookies",
			link: "#"
		},
		{
			name: "License",
			link: "#"
		}
	]
</script>

