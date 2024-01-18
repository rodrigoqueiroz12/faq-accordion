<script lang="ts" setup>
	import TheAccordion from "./TheAccordion.vue"

	const topics = [
		{
			id: 1,
			title: "What is Frontend Mentor, and how will it help me?",
			description:
				"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
		},
		{
			id: 2,
			title: "Is Frontend Mentor free?",
			description:
				"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
		},
		{
			id: 3,
			title: "Can I use Frontend Mentor projects in my portfolio?",
			description:
				"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
		},
		{
			id: 4,
			title: "How can I get help if I'm stuck on a challenge?",
			description:
				"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
		},
	]
</script>

<template>
	<div class="flex flex-col px-8 pb-6">
		<the-accordion :topics="topics" />
	</div>
</template>
