 	
<template>
	<div v-if='info'>
		<Hero :advantages='info.hero'/>
		<Professional :services='info.professional'/>
		<Services :services='info.services'/>
		<Friendly :friendly='info.friendly'/>
		<HowWorks :works='info.worker'/>
		<Testimonials :testimonials='info.testimonials'/>
		<Blog :blog='info.blog'/>
		<FAQ :FAQ='info.FAQ'/>
		<LetsTalk/>
	</div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: 'Home Pro',
  ogTitle: 'Home Pro',
  description: 'Home Pro - make your home with us!',
})
const {data: info} = await useFetch("/api/main");
</script>

