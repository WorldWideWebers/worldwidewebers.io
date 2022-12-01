<template>
    <div class="category">
        <h1>Enterprise applications</h1>
        <span>
            <div v-for="item in enterprise" @click="setCurrentPortfolioItem(item.id)">
                <div v-if="item.visible">
                    <img :src="getImageUrl(item.id)" :alt="item.title">
                    <p>{{ item.title }}</p>
                </div>
            </div>
        </span>
    </div>
    <div class="category">
        <h1>Non-enterprise applications</h1>
        <span>
            <div v-for="item in nonEnterprise" @click="setCurrentPortfolioItem(item.id)">
                <div v-if="item.visible">
                    <img :src="getImageUrl(item.id)" :alt="item.title">
                    <p>{{ item.title }}</p>
                </div>
            </div>
        </span>
    </div>
    <div id="overlay" v-if="currentPortfolioItem">
        <button class="circle-button" id="overlay-close" @click="setCurrentPortfolioItem(null)">
            <ion-icon name="close-outline"></ion-icon>
        </button>
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
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: .875;
  }
}
.category span {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.category h1 {
    text-decoration: underline;
    animation: fadeIn .7s;
}

.category span div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .3s all;
    animation: fadeIn .7s;
}

.category span div:hover {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #FFEC6E, 0 0 40px #FFEC6E, 0 0 50px #FFEC6E, 0 0 60px #FFEC6E, 0 0 70px #FFEC6E;
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
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation: fadeIn .5s;
    overflow-y: scroll;
}

#overlay-close {
    position: fixed;
    top: 1rem;
    right: 1rem;
}

@media only screen and (max-width: 1000px) {
    .category h1 {
        text-align: center;
    }
    .category span {
        justify-content: center;
    }
}
</style>