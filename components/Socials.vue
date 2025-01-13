<template>
	<div class='socials'>
		<ul class='flex items-center gap-5'>
			<li v-for='item in socials'>
				<NuxtLink :to='item.link'>
					<img :src="item.image" alt="">
				</NuxtLink>
			</li>
		</ul>

	</div>
</template>

<script lang='ts' setup>
import { Link } from '#build/components'

const socials = {
	youtube: {
		image: "/images/icons/youtube.svg",
		link:"#"
	},
	instagram: {
		image: "/images/icons/instagram.svg",
		link:"#"
	},
	facebook: {
		image: "/images/icons/facebook.svg",
		link:"#"
	},
	twitter: {
		image: "/images/icons/twitter.svg",
		link:"#"
	},
	mail: {
		image: "/images/icons/mail.svg",
		link:"#"
	},
}
</script>

