<template>
    <main>
        <aside>
            <Aside></Aside>
        </aside>
        <section id="content">
            <!-- <nav>
                <div>
                    <router-link to="/">
                        <span :class="{ activeNavLink: currentPage === 'portfolio' }"
                            @click="changeCurrentPage('portfolio')">Portfolio</span>
                    </router-link>
                    <router-link to="/documents">
                        <span :class="{ activeNavLink: currentPage === 'documents' }"
                            @click="changeCurrentPage('documents')">Documents</span>
                    </router-link>
                </div>
            </nav> -->
            <div id="router-container">
                <RouterView />
            </div>
        </section>
    </main>
</template>

<script setup>
import Aside from './components/Aside.vue'
import { ref } from 'vue'

const currentPage = ref('portfolio');
const changeCurrentPage = page => {
    currentPage.value = page;
}

</script>

<style scoped>
main {
    background: url('./assets/background.jpg');
    background-size: cover;
    display: flex;
    height: 100vh;
}

aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;
    background: black;
    color: white;
    opacity: .825;
    padding: 0 1rem;
}

#content {
    width: 100%;
}

nav {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin: 1rem;
}

nav span {
    margin-left: 1rem;
    color: white;
}

nav a {
    text-decoration: none;
}

.activeNavLink {
    color: #FFEC6E;
    transition: .3s all;
}

#router-container {
    padding: 1.5rem;
    padding-top: 0;
}

@media only screen and (max-width: 1000px) {
  main {
    flex-direction: column;
    width: 100%;
    height: initial;
  }

  aside {
    background: none;
    width: 100%;
    padding: 0;
    padding-top: 1rem;
  }

  #router-container {
    padding-bottom: 0;
  }
}
</style>
