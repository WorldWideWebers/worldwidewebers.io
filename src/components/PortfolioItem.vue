<template>
    <h1>{{ currentPortfolioItem.title }}</h1>
</template>
<script setup>
    import { usePortfolio } from '../composables/usePortfolio'

    const { currentPortfolioItem } = usePortfolio()
</script>
<style scoped></style>