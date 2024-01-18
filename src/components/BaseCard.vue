<script lang="ts" setup>
	import { twMerge as tw } from "tailwind-merge"

	const { customClasses } = defineProps(["customClasses"])

	const cardClasses = tw(
		"bg-card-background rounded-xl flex flex-col",
		customClasses
	)
</script>

<template>
	<div :class="cardClasses">
		<slot name="header"></slot>

		<slot></slot>
	</div>
</template>
