<script lang="ts" setup>
	import BaseCard from "../../components/BaseCard.vue"
	import TheHeader from "./TheHeader.vue"
	import TheContent from "./TheContent.vue"
</script>

<template>
	<base-card custom-classes="w-full md:w-[36.7rem] shadow-faq-shadow">
		<template #header>
			<the-header />
		</template>

		<template #default>
			<the-content />
		</template>
	</base-card>
</template>
