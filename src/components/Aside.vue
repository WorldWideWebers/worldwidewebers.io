<template>
    <img id="logo" src="../assets/logo-outline.png" />
    <p id="company-name">WorldWideWebers</p>
    <p>Father-and-son development team specializing in web and hybrid applications &mdash; with decades of full-stack experience.</p>
    <p>Our main focus is mentorship, so we offer competitive rates.</p>
    <div id="logos">
        <a href="https://vuejs.org/" target="_blank"><img src="../assets/vue-logo.png" /></a>
        <a href="https://angular.io/" target="_blank"><img src="../assets/angular.png" /></a>
        <a href="https://dotnet.microsoft.com/en-us/" target="_blank"><img src="../assets/dotnet-logo.png" /></a>
        <a href="https://firebase.google.com/" target="_blank"><img src="../assets/firebase-logo.png" /></a>
        <a href="https://ionicframework.com/" target="_blank"><img src="../assets/ionic-logo.png" /></a>
    </div>
    <div id="contact">
        <a href="tel:7632185933">
            <ion-icon name="call"></ion-icon>
        </a>
        <a href="mailto:admin@worldwidewebers.io">
            <ion-icon name="mail"></ion-icon>
        </a>
        <a href="https://github.com/WorldWideWebers">
            <ion-icon name="logo-github"></ion-icon>
        </a>
    </div>
</template>
<script setup>

</script>
<style scoped>
#logo {
    width: 250px;
    margin-bottom: 1rem;
}

p {
    text-align: center;
    width: 80%;
    margin-top: 0;
}

#company-name {
    border: 3px double white;
    border-left: none;
    border-right: none;
    padding: .25rem 0;
}

#logos {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
}

#logos img {
    height: 50px;
    align-self: end;
}

#contact {
    display: flex;
    gap: 1rem;
}

#contact a {
    background: white;
    color: #383D71;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .3s all;
}

#contact a:hover {
    background: #383D71;
    color: white;
}
</style>