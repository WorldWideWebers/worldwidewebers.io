<template>
    <div id="portfolio-item">
        <h1>{{ currentPortfolioItem.title }}</h1>
        <p id="blurb">{{ currentPortfolioItem.blurb }}</p>
        <h2>Technologies:</h2>
        <div id="technologies">
            <a href="https://vuejs.org/" target="_blank"><img src="../assets/vue-logo.png" /></a>
            <a href="https://angular.io/" target="_blank"><img src="../assets/angular.png" /></a>
            <a href="https://dotnet.microsoft.com/en-us/" target="_blank"><img src="../assets/dotnet-logo.png" /></a>
            <a href="https://firebase.google.com/" target="_blank"><img src="../assets/firebase-logo.png" /></a>
            <a href="https://ionicframework.com/" target="_blank"><img src="../assets/ionic-logo.png" /></a>
        </div>
        <h2>Links:</h2>
        <div id="links">
            <a class="circle-button"><ion-icon name="link-outline"></ion-icon></a>
            <a class="circle-button"><ion-icon name="logo-github"></ion-icon></a>
        </div>
    </div>
</template>
<script setup>
import { usePortfolio } from '../composables/usePortfolio'

const { currentPortfolioItem } = usePortfolio()
</script>
<style scoped>
#portfolio-item {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    width: 50%;
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
</style>