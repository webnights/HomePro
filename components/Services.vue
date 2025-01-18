<template>
	<div class='services sm:pb-[150px] py-[64px]' id='services'>
		<div class='container'>
			<div>
				<Heading
				:title="'Our Services'"
				:description="'You have problems with leaking pipes, broken tiles, lost keys or want to tidy up the trees around you, of course you need our help!'"
				:styles="'text-center mx-auto text-dark'"
				/>
				<div
				 class='flex flex-wrap sm:mt-[95px] mt-[40px] sm:justify-between justify-center sm:gap-y-[64px] gap-y-8'
				 >
					<ServicesCard
					v-for='(card, index) in props.services'
					:key='index'
					:card = 'card'
					/>
					<MoreService/>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang='ts' setup>
const props = defineProps(['services']);
</script>
