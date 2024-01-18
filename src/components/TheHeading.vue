<script lang="ts" setup>
	import desktopBackground from "/images/background-pattern-desktop.svg"
	import mobileBackground from "/images/background-pattern-mobile.svg"
</script>

<template>
	<div class="absolute top-0 left-0 w-full -z-10">
		<img
			:src="desktopBackground"
			alt=""
			class="w-full h-80 md:bg-pattern-desktop bg-cover"
		/>
		<img
			:src="mobileBackground"
			alt=""
			class="w-full h-80 bg-pattern-mobile bg-cover md:hidden"
		/>
	</div>
</template>
