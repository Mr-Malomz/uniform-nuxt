<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Composition v-if="composition" :data="composition">
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
          >{{composition.slots.items[0].parameters.miniTitle.value}}</h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >{{composition.slots.items[0].parameters.mainTitle.value}}</p>
          <p
            class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
          >{{composition.slots.items[0].parameters.description.value}}</p>
        </div>

        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div
              v-for="(feature, i) in composition.slots.items.slice(1)"
              :key="feature.name"
              class="relative"
            >
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <component :is="iconArray[i]" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p
                  class="ml-16 text-lg leading-6 font-medium text-gray-900"
                >{{ feature.parameters.title.value }}</p>
              </dt>
              <dd
                class="mt-2 ml-16 text-base text-gray-500"
              >{{ feature.parameters.description.value }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </Composition>
</template>

<script setup>
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon
} from "@heroicons/vue/outline";

const iconArray = [AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon];

const { $useComposition } = useNuxtApp();

const { data: compositionData } = await $useComposition({ slug: "items" });

const composition = computed(() => compositionData.value.composition)
</script>