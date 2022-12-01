<template>
    <div id="portfolio-item">
        <h1>{{ currentPortfolioItem.title }}</h1>
        <p id="blurb">{{ currentPortfolioItem.blurb }}</p>
        <div id="screenshot-toggle">
            <button @click="toggleScreenshots('desktop')" :class="{activeToggleButton : screenshotToggle === 'desktop'}">Desktop</button>
            <button @click="toggleScreenshots('mobile')" :class="{activeToggleButton : screenshotToggle === 'mobile'}">Mobile</button>
        </div>
        <div id="screenshots">
            <div id="desktop-screenshots" v-if="screenshotToggle === 'desktop'" v-for="screenshot of currentPortfolioItem.screenshots.desktop">
                <img :src="getImageUrl(screenshot)" />
            </div>
            <div id="mobile-screenshots" v-if="screenshotToggle === 'mobile'" v-for="screenshot of currentPortfolioItem.screenshots.mobile">
                <img :src="getImageUrl(screenshot)" />
            </div>
        </div>
        <h2>Technologies:</h2>
        <div id="technologies">
            <a href="https://vuejs.org/" target="_blank" v-if="currentPortfolioItem.technologies.vue"><img
                    src="../assets/vue-logo.png" /></a>
            <a href="https://angular.io/" target="_blank" v-if="currentPortfolioItem.technologies.angular"><img
                    src="../assets/angular.png" /></a>
            <a href="https://dotnet.microsoft.com/en-us/" target="_blank"
                v-if="currentPortfolioItem.technologies.dotnet"><img src="../assets/dotnet-logo.png" /></a>
            <a href="https://firebase.google.com/" target="_blank"
                v-if="currentPortfolioItem.technologies.firebase"><img src="../assets/firebase-logo.png" /></a>
            <a href="https://ionicframework.com/" target="_blank" v-if="currentPortfolioItem.technologies.ionic"><img
                    src="../assets/ionic-logo.png" /></a>
        </div>
        <h2 v-if="currentPortfolioItem.publicLink || currentPortfolioItem.githubLink">Links:</h2>
        <div id="links">
            <a class="circle-button" v-if="currentPortfolioItem.publicLink" :href="currentPortfolioItem.publicLink">
                <ion-icon name="link-outline"></ion-icon>
            </a>
            <a class="circle-button" v-if="currentPortfolioItem.githubLink" :href="currentPortfolioItem.publicLink">
                <ion-icon name="logo-github"></ion-icon>
            </a>
        </div>
    </div>
</template>
<script setup>
import { usePortfolio } from '../composables/usePortfolio'
import { ref } from 'vue'

const { currentPortfolioItem } = usePortfolio()
const screenshotToggle = ref('desktop');

const getImageUrl = (id) => {
    return new URL(`../assets/screenshots/${id}.png`, import.meta.url).href
}

const toggleScreenshots = (val) => {
    screenshotToggle.value = val;
}

</script>
<style scoped>
#portfolio-item {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    width: 50%;
    overflow-y: scroll;
}

h1 {
    margin: 0;
    font-size: 2rem;
}

h2 {
    margin-top: 0;
}

#blurb {
    margin-top: 0;
}

#desktop-screenshots img {
    max-width: 100%;
}

#mobile-screenshots img {
    max-width: 250px;
}

#technologies {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

#technologies img {
    height: 50px;
    align-self: end;
}

#links {
    display: flex;
    gap: 1rem;
}

#screenshot-toggle {
    display: flex;
    gap: 1px;
    margin-bottom: 1rem;
}

#screenshot-toggle button {
    border: none;
    border-radius: none;
    width: 80px;
    padding: 10px 15px;
    transition: .3s;
}

.activeToggleButton {
    background: #383D71;
    color: white;
}
</style>