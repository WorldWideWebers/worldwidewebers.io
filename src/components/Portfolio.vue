<template>
    <div id="content">
        <div id="portfolio-items">
            <div class="category">
                <h1>Enterprise applications</h1>
                <span>
                    <div v-for="item in enterprise" @click="setCurrentPortfolioItem(item.id)">
                        <img :src="getImageUrl(item.id)" :alt="item.title">
                        <p>{{ item.title }}</p>
                    </div>
                </span>
            </div>
            <div class="category">
                <h1>Non-enterprise applications</h1>
                <span>
                    <div v-for="item in nonEnterprise" @click="setCurrentPortfolioItem(item.id)">
                        <img :src="getImageUrl(item.id)" :alt="item.title">
                        <p>{{ item.title }}</p>
                    </div>
                </span>
            </div>
        </div>
    </div>
    <div id="overlay" v-if="currentPortfolioItem">
        <button @click="setCurrentPortfolioItem(null)">Close overlay</button>
        <PortfolioItem />
    </div>
</template>
<script setup>
import { usePortfolio } from '../composables/usePortfolio'
import PortfolioItem from '../components/PortfolioItem.vue'

const { enterprise, nonEnterprise, setPortfolioItem, currentPortfolioItem } = usePortfolio()

const getImageUrl = (id) => {
    return new URL(`../assets/screenshots/${id}.png`, import.meta.url).href
}

const setCurrentPortfolioItem = (id) => {
    setPortfolioItem(id)
}

</script>
<style scoped>
.category span {
    display: flex;
    gap: 1rem;
}

.category span div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.category div img {
    width: 300px;
}

#overlay {
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    background: black;
    opacity: .875;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>