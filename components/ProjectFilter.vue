<template>
  <div>
    <div class="projects-gallery-filter-nav container">
      <button
        v-for="category in uniqueCategories"
        :key="category"
        :class="['btn btn-outline-secondary', { active: activeCategory === category }]"
        @click="filterProjects(category)"
      >
        {{ category }}
      </button>
    </div>

    <div class="projects__container container grid section__border">
      <article
        v-for="(project, index) in filteredProjects"
        :key="index"
        class="col-md-6 filter-item project"
        data-animate="fadeup"
      >
      <NuxtLink :to="`/projects/${project.id}`" class="projects__link">
        <img :src="project.image" :alt="project.name" class="projects__img"> 
        <!-- <i class="ri-arrow-right-circle-line projects__icon"></i> -->
      </NuxtLink>

      <div class="project__info">
          <NuxtLink :to="`/projects/${project.id}`" class="link">

              <h3 class="projects__title">{{ project.name }}</h3>
          </NuxtLink>
          <p class="projects__subtitle">{{ project.subtitle }}</p>

          <NuxtLink :to="`/projects/${project.id}`" class="link">
              View Project
          </NuxtLink>
      </div>

        <!-- <ProjectCard :project="project"/> -->
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProjectStore } from '/stores/projectStore';

const projectStore = useProjectStore();
const activeCategory = ref('All');

const uniqueCategories = computed(() => {
  const categories = new Set();
  projectStore.projects.forEach(project => {
    if (Array.isArray(project.category)) {
      project.category.forEach(cat => categories.add(cat));
    } else {
      categories.add(project.category);
    }
  });
  return ['All', ...categories];
});


const filterProjects = (category) => {
  activeCategory.value = category;
};
const filteredProjects = computed(() => {
  const activeCategoryValue = activeCategory.value;
  if (activeCategoryValue === 'All') {
    return projectStore.projects;
  } else {
    return projectStore.projects.filter(project => {
      if (Array.isArray(project.category)) {
        return project.category.includes(activeCategoryValue);
      } else {
        return project.category === activeCategoryValue;
      }
    });
  }
});

const isFiltered = (project) => {
  const activeCategoryValue = activeCategory.value;
  if (activeCategoryValue === 'All') {
    return false;
  } else {
    if (Array.isArray(project.category)) {
      return project.category.includes(activeCategoryValue);
    } else {
      return project.category === activeCategoryValue;
    }
  }
};
</script>


<style scoped>
  .projects__img{
    border-radius: 10px;
  }

  .projects-gallery-filter-nav {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 10px;
  }


  .btn-outline-secondary.active{
      color: #fff;
      background-color: var(--text-color);
      border-color: var(--text-color);
      font-weight: var(--font-semi-bold);
  }

    .btn {
        display: inline-block;
        font-weight: 400;
        line-height: 1.5;
        color: var(--text-color);
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        background-color: transparent;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        border-radius: .25rem;
        box-shadow: none !important;
        outline: 0 !important;
        text-transform: capitalize;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    }

    .btn-outline-secondary {
        padding: 12.5px 35px;
        border-radius: 30px;
        border-color: var(--text-color);
        font-family: var(--title-font);
    }

    .btn-outline-secondary:active {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }
    .transition {
    transition: opacity 0.4s ease-in-out;
    opacity: 1;
    }

/* Slowly fade out filtered items */
.filter-item:not(.transition) {
  transition: opacity 0.3s ease-in-out;
  opacity: 1;
}
    .filter-item {
        opacity: 1;
        transition: opacity 0.3s ease;
        margin-top: 60px;
          /* animation: filter 2s ease-in; */
    }

    @keyframes filter {
        0%{
            opacity: 0
        }

        50%{
            opacity: 0;
        }

        100%{
            opacity: 1;
        }
    }

@media screen and (min-width: 600px) {

  .projects-gallery-filter-nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
}



}

</style>