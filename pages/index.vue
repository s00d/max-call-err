<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div v-text="$t('welcome')"></div>
  </div>
</template>
<script setup lang="ts">
import {useI18n, useHead, useNuxtApp} from "#imports";
import {genJsonLd, genJsonLdScript} from "../composables/genJsonLd";
const { $i18n } = useNuxtApp();


const jsonLdScript = computed(() => {
  const pageJsonLd = genJsonLd();
  return genJsonLdScript(
    [
      pageJsonLd,
    ],
  );
});

useHead({
  title: $i18n.t("test.test.title"),
  meta: [
    { name: 'description', content:  $i18n.t("test.test.title") }
  ],
  script: [
    jsonLdScript.value,
  ],
});

</script>
