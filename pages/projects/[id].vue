<template>
  <div class="projects section main">
    <div class="bg__image" v-if="projectStore.currentProject">
      <img :src="projectStore.currentProject.image" alt="" />
    </div>
    <div class="bg__blur" v-if="projectStore.currentProject"></div>
    <div
      class="project-details-section section-gap-tb-165"
      v-if="projectStore.currentProject"
    >
      <div class="project-details-box">
        <div class="container">
                     <!-- Project Navigation at the top -->
           <!-- <div class="project-navigation-top">
             <NuxtLink
               v-if="projectStore.previousProject"
               :to="`/projects/${projectStore.previousProject.id}`"
               class="nav-link prev"
             >
               <span class="arrow">←</span>
               <span class="text">Previous Project</span>
             </NuxtLink>
             
             <span v-else class="nav-link prev disabled">
               <span class="arrow">←</span>
               <span class="text">Previous Project</span>
             </span>
             
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
             
             <span v-else class="nav-link next disabled">
               <span class="text">Next Project</span>
               <span class="arrow">→</span>
             </span>
           </div> -->

          <div class="row project-layout">
            <div class="col-12 project-details">
              <div class="project-content-section pos-relative">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="default-content-style pos-relative">
                      <h2 class="title">
                        {{ projectStore.currentProject.name }}
                      </h2>
                      <p>{{ projectStore.currentProject.description }}</p>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 offset-xl-1">
                    <div class="project-sidebar">
                      <h3 class="title">Information</h3>
                      <ul class="project-sidebar-list-item">
                        <li class="project-sidebar-single-box">
                          <h6 class="title-text">Project Name:</h6>
                          <span class="text">{{
                            projectStore.currentProject.name
                          }}</span>
                        </li>
                        <li class="project-sidebar-single-box">
                          <h6 class="title-text">Preview Website:</h6>
                          <span class="text">
                            <a
                              :href="projectStore.currentProject.link"
                              target="_blank"
                              >{{ projectStore.currentProject.link }}</a
                            >
                          </span>
                        </li>
                        <li class="project-sidebar-single-box">
                          <h6 class="title-text">Technologies used:</h6>
                          <span class="text">
                            {{ projectStore.currentProject.technology }}
                          </span>
                        </li>

                        <li
                          class="project-sidebar-single-box"
                          v-if="projectStore.currentProject.github"
                        >
                          <h6 class="title-text">Github Link:</h6>
                          <span class="text">
                            <a
                              :href="projectStore.currentProject.github"
                              target="_blank"
                              >{{ projectStore.currentProject.github }}</a
                            >
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-hero-image">
              <img :src="projectStore.currentProject.fullPage" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="spinner" v-else-if="projectStore.isProjectLoading"
      ><Spinner
    /></span>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const projectStore = useProjectStore();

// Initialize the project data
onMounted(async () => {
  await projectStore.initializeProject(id);
});

definePageMeta({
  layout: "project",
});
</script>

<style scoped>
/* .spinner{
    position: absolute;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
} */
.main {
  margin-top: 1.5rem;
}
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.section {
  padding: 0;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

/* Project layout styles */
.project-layout {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 100px;
}

.project-details {
  flex: 1;
  min-width: 0; /* Prevents flex item from overflowing */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  /* background: rgba(var(--container-color), 0.2); */
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
  border: 1px solid transparent;
  background-clip: padding-box;
  padding: 60px 40px 75px 40px;
}

.project-hero-image {
  position: sticky;
  top: 100px;
  flex: 0 0 400px;
  height: 500px;
  overflow-y: auto;
  border: 2px solid var(--body-color);
  border-radius: 10px;
  margin: 0;
  scrollbar-width: thin;
  scrollbar-color: v-bind(
      "projectStore.currentProject?.bg_color || projectStore.defaultBgColor"
    )
    white;
}

.project-hero-image::-webkit-scrollbar {
  width: 8px;
}

.project-hero-image::-webkit-scrollbar-track {
  background: white;
  border-radius: 4px;
}

.project-hero-image::-webkit-scrollbar-thumb {
  background-color: v-bind(
    "projectStore.currentProject?.bg_color || projectStore.defaultBgColor"
  );
  border-radius: 4px;
}

.project-hero-image::-webkit-scrollbar-thumb:hover {
  background-color: v-bind(
    "projectStore.currentProject?.bg_color || projectStore.defaultBgColor"
  );
  opacity: 0.8;
}

.project-hero-image img {
  width: 100%;
  height: auto;
  min-height: 100%;
  object-fit: contain;
}

.bg__image,
.bg__blur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}

.bg__image {
  object-fit: cover;
  object-position: center;
}

.bg__blur {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  /* background-color: rgba(0, 0, 0, 0.5);
  z-index: 1; */
}

.pos-relative {
  position: relative;
}

.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  /* padding-right: 1.5rem;
    padding-left: 1.5rem; */
  margin-top: 0;
}

.section-tag {
  font-size: 18px;
  font-weight: 300;
  position: relative;
  display: inline-block;
  padding-left: 27px;
}

.section-tag::before {
  position: absolute;
  content: "||";
  top: 0;
  left: 0;
}

.default-content-style p {
  margin: 25px 0;
}

.sub-title {
  font-size: 30px;
  font-weight: 600;
  margin-top: 60px;
  margin-bottom: 30px;
}

/* .project-sidebar {
  background-color: var(--container-color);
  background: #252734;
  padding: 60px 40px 75px 40px;
  margin-top: 60px;
} */

.project-sidebar .title {
  font-size: 30px;
  color: var(--text-color);
  font-weight: 600;
  margin-bottom: 45px;
}

.project-sidebar .project-sidebar-single-box {
  padding: 25px 30px 25px 30px;
  border: 1px solid
    v-bind(
      "projectStore.currentProject?.bg_color || projectStore.defaultBgColor"
    );
  background: v-bind(
    "projectStore.currentProject?.bg_color || projectStore.defaultBgColor"
  );
  margin-bottom: 10px;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.project-sidebar .project-sidebar-single-box .title-text {
  font-size: 1.2rem;
  color: var(--text-color);
  /* color: rgb(26, 115, 232); */
  font-weight: var(--font-semi-bold);
  font-family: var(--title-font);
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.project-sidebar-single-box span,
.project-sidebar-single-box span a {
  color: #fff;
}

/* For medium devices */
@media screen and (max-width: 576px) {
  .project-sidebar .project-sidebar-single-box {
    padding: 25px 10px 25px 10px;
  }

  .project-sidebar {
    padding: 60px 30px 75px 30px;
  }
}

/* Responsive design for project layout */
@media screen and (max-width: 1024px) {
  .project-layout {
    flex-direction: column;
  }

  .project-hero-image {
    display: none;
  }
}

/**** Large Devices ****/
@media screen and (min-width: 1200px) {
  .project-hero-image {
    height: 800px;
  }
}

.project-navigation-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px 0;
  border-bottom: 1px solid var(--body-color);
}

.nav-logo-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.nav-logo-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.nav-logo-link:hover {
  transform: scale(1.1);
}

.nav-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.project-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  padding: 30px 0;
  border-top: 1px solid var(--body-color);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--text-color);
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: rgb(26, 115, 232);
}

.nav-link.disabled {
  color: var(--text-color-light);
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
}

.nav-link.disabled:hover {
  color: var(--text-color-light);
}

.nav-link .arrow {
  font-size: 20px;
}

.nav-link .text {
  font-size: 16px;
}

@media screen and (max-width: 576px) {
  .project-navigation-top,
  .project-navigation {
    flex-direction: column;
    gap: 20px;
  }

  .nav-logo-center {
    order: -1; /* Move logo to top on mobile */
    margin-bottom: 10px;
  }

  .nav-logo {
    width: 35px;
    height: 35px;
  }

  .nav-link {
    justify-content: center;
  }
}
</style>
