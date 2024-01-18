<script lang="ts" setup>
	import {
		AccordionContent,
		AccordionHeader,
		AccordionItem,
		AccordionRoot,
		AccordionTrigger,
	} from "radix-vue"
	import { PhPlus, PhMinus } from "@phosphor-icons/vue"

	const { topics } = defineProps(["topics"])
</script>

<template>
	<AccordionRoot :defaultValue="'1'" type="single" :collapsible="true">
		<template v-for="topic in topics" :key="topic.id">
			<AccordionItem class="group overflow-hidden" :value="topic.id">
				<AccordionHeader class="flex">
					<AccordionTrigger
						class="group flex-1 flex items-center justify-between py-4 outline-offset-4 outline-none"
					>
						<span
							class="text-lg text-text font-bold group-hover:text-button-background transition-colors group-focus-within:text-button-background"
							>{{ topic.title }}</span
						>

						<span
							class="p-1 group-data-[state=closed]:bg-button-background rounded-full group-data-[state=open]:bg-button-background-focus transition-colors"
						>
							<ph-plus
								:size="12"
								color="#fff"
								weight="bold"
								class="group-data-[state=open]:sr-only group-data-[state=closed]:animate-rotateShow"
							/>
							<ph-minus
								:size="12"
								color="#fff"
								weight="bold"
								class="group-data-[state=closed]:sr-only group-data-[state=open]:animate-rotateShow"
							/>
						</span>
					</AccordionTrigger>
				</AccordionHeader>

				<AccordionContent
					class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
				>
					<div class="py-4">
						<p class="text-base text-muted leading-6">
							{{ topic.description }}
						</p>
					</div>
				</AccordionContent>
			</AccordionItem>
		</template>
	</AccordionRoot>
</template>
