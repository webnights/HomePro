<template>
	<div class="blog sm:pb-[100px] pb-[60px] pt-[60px]" id='blog'>
		<div class="container">
			<Heading
				:title="'Explore Insights in Our Blog'"
				:description="'Find lots of insights and information on our blog. Explore, learn, and get inspired today.'"
				:styles="'text-center mx-auto max-w-[800px] mb-12'"
				:text="'max-w-[500px] mx-auto'"
			/>

			<div class="flex flex-wrap gap-2 sm:justify-between justify-center">
				<BlogCard
					v-for="(card, index) in props.blog.slice(0, blogLength)"
					:card="card"
					:key="index"
				/>
			</div>
		</div>
		<span
			v-if='blogToggleWord === "View More"'
			@click="showAllBlog"
			class="font-bold text-blue mt-10 block text-center sm:text-[24px] text-[18px] cursor-pointer"
			>{{ blogToggleWord }}
			</span
		>
		<span
			v-if='blogToggleWord === "Hide"'
			@click="hidePartBlog"
			class="font-bold text-blue mt-10 block text-center sm:text-[24px] text-[18px] cursor-pointer"
			>{{ blogToggleWord }}
			</span
		>
	</div>
</template>

<script lang="ts" setup>
const blogToggleWord = ref('View More');
const blogLength = ref(3)
const showAllBlog = () => {
	blogLength.value = 6;
	blogToggleWord.value = 'Hide'
}
const hidePartBlog = () =>{
	blogLength.value = 3;
	blogToggleWord.value = ('View More')
}
const props = defineProps(['blog'])
console.log(props.blog)
</script>
