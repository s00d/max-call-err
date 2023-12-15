<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div v-text="$t('welcome')"></div>
  </div>
</template>
<script setup lang="ts">
import {useI18n, useHead, useNuxtApp} from "#imports";
const { $i18n } = useNuxtApp();

useHead({ title: $i18n.t("welcome") })

</script>
