<template>
  <div>
    <!-- <header class="header" id="header">
      <NavBar />
    </header> -->
    <div>
      <div class="project-navigation-top">
        <NuxtLink
          v-if="projectStore.previousProject"
          :to="`/projects/${projectStore.previousProject.id}`"
          class="nav-link prev"
        >
          <span class="arrow">←</span>
          <span class="text">Previous Project</span>
        </NuxtLink>

        <!-- Center Logo -->
        <div class="nav-logo-center">
          <NuxtLink to="/" class="nav-logo-link">
            <img src="/assets/images/logo2.svg" alt="Logo" class="nav-logo" />
          </NuxtLink>
        </div>

        <NuxtLink
          v-if="projectStore.nextProject"
          :to="`/projects/${projectStore.nextProject.id}`"
          class="nav-link next"
        >
          <span class="text">Next Project</span>
          <span class="arrow">→</span>
        </NuxtLink>
      </div>
    </div>

    <main class="main">
      <slot />
    </main>
    <Footer :project-bg-color="projectStore.currentProject?.bg_color" />
  </div>
</template>

<script setup>
const projectStore = useProjectStore();
</script>

<style scoped>
.header {
  width: 100%;
  position: relative;
  /* position: fixed;
    top: 0; */
  /* bottom: 2rem; */
  z-index: var(--z-fixed);
  box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
}

/* Remove padding from footer container on project layout */
:deep(.footer__container) {
  padding: 0;
}

.project-navigation-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  border-bottom: 1px solid var(--body-color);
  box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
  background-color: var(--body-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.main {
  padding-top: 100px; /* Add padding to account for fixed navigation */
}
</style>
