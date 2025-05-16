<template>
  <div class="projects section main">
    <div
      class="project-details-section section-gap-tb-165"
      v-if="projectStore.currentProject"
    >
      <div class="project-details-box">
        <div class="container">
          <div class="col-12">
            <div class="project-hero-image">
              <img :src="projectStore.currentProject.image" alt="" />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="project-content-section pos-relative">
                <!-- <div class="project-hero-image">
                                        <img :src="project.image" alt="">
                                    </div> -->

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
                        <span v-else></span>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="next_project">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="project-navigation">
                <NuxtLink
                  v-if="projectStore.previousProject"
                  :to="`/projects/${projectStore.previousProject.id}`"
                  class="nav-link prev"
                >
                  <span class="arrow">←</span>
                  <span class="text">Previous Project</span>
                </NuxtLink>
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
          </div>
        </div>
      </div>
    </div>
    <span class="spinner" v-else><Spinner /></span>
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

.pos-relative {
  position: relative;
}

.project-hero-image {
  margin: 40px 0 65px;
  overflow: hidden;
  border: 2px solid var(--body-color);
  border-radius: 10px;
}

.project-hero-image img {
  width: 100%;
  height: 100%;
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

.project-sidebar {
  background-color: var(--container-color);
  /* background: #252734; */
  padding: 60px 40px 75px 40px;
  margin-top: 60px;
}

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
  color: rgb(26, 115, 232);
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

/**** Large Devices ****/
@media screen and (min-width: 1200px) {
  .project-hero-image {
    height: 600px;
  }
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

.nav-link .arrow {
  font-size: 20px;
}

.nav-link .text {
  font-size: 16px;
}

@media screen and (max-width: 576px) {
  .project-navigation {
    flex-direction: column;
    gap: 20px;
  }

  .nav-link {
    justify-content: center;
  }
}
</style>
