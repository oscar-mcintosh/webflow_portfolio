<template>
    <div class="about-page">
        <div class="hero-section">
            <div class="container">
                <h1 class="hero-title">WebFlow Development Services in Lincoln, NE</h1>
                <p class="hero-subtitle">Transforming small businesses and designers' visions into powerful web experiences</p>
            </div>
        </div>

        <div class="tabs">
            <div class="container section__border">
                <Tabs />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.about-page {
    padding-top: 80px;
}

.hero-section {
    text-align: center;
    padding: 60px 0;
    background-color: var(--container-color);
    margin-bottom: 40px;
}

.hero-title {
    font-size: 2.5rem;
    color: var(--title-color);
    margin-bottom: 1rem;
    font-family: var(--title-font);
}

.hero-subtitle {
    font-size: 1.2rem;
    color: var(--text-color);
    max-width: 600px;
    margin: 0 auto;
}

.tabs {
    padding-top: 40px;
}

@media screen and (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
        padding: 0 20px;
    }
}
</style>