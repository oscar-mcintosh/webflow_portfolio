<template>
  <div>
    <div v-if="isLoading" class="loading-container">
      <Spinner />
    </div>

    <template v-else>
      <div class="projects-gallery-filter-nav container">
        <button
          v-for="category in uniqueCategories"
          :key="category"
          :class="[
            'btn btn-outline-secondary',
            { active: activeCategory === category },
          ]"
          @click="filterProjects(category)"
        >
          {{ category }}
        </button>
      </div>

      <div class="projects__container container grid">
        <template v-if="filteredProjects.length > 0">
          <article
            v-for="(project, index) in filteredProjects"
            :key="index"
            class="col-md-6 filter-item project"
            data-animate="fadeup"
          >
            <NuxtLink :to="`/projects/${project.id}`" class="projects__link">
              <img
                :src="project.image"
                :alt="project.name"
                class="projects__img"
              />
              <!-- <i class="ri-arrow-right-circle-line projects__icon"></i> -->
            </NuxtLink>

            <div class="project__info">
              <h3 class="projects__title" :style="{ color: project.bg_color }">
                {{ project.name }}
              </h3>
              <!-- <p class="projects__subtitle">
                {{ project.subtitle }}
              </p> -->
              <div class="custom-link">
                <NuxtLink
                  :to="`/projects/${project.id}`"
                  class="link"
                  :style="{ '--project-color': project.bg_color }"
                >
                  <!-- <div class="lines"><span></span> <span></span></div> -->
                  View Project
                </NuxtLink>
              </div>
            </div>

            <!-- <ProjectCard :project="project"/> -->
          </article>
        </template>
        <div v-else-if="!projectStore.isInitialized" class="no-projects">
          Loading projects...
        </div>
        <div v-else class="no-projects">No projects found</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from "vue";
import { useProjectStore } from "/stores/projectStore";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const projectStore = useProjectStore();
const activeCategory = ref("All");

const uniqueCategories = computed(() => {
  if (!projectStore.allProjects || projectStore.allProjects.length === 0) {
    return ["All"];
  }

  const categories = new Set();
  projectStore.allProjects.forEach((project) => {
    if (Array.isArray(project.category)) {
      project.category.forEach((cat) => categories.add(cat));
    } else {
      categories.add(project.category);
    }
  });
  return ["All", ...categories];
});

const filterProjects = (category) => {
  activeCategory.value = category;
};

const filteredProjects = computed(() => {
  if (!projectStore.allProjects || projectStore.allProjects.length === 0) {
    return [];
  }

  const activeCategoryValue = activeCategory.value;
  if (activeCategoryValue === "All") {
    return projectStore.allProjects;
  } else {
    return projectStore.allProjects.filter((project) => {
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
  if (activeCategoryValue === "All") {
    return false;
  } else {
    if (Array.isArray(project.category)) {
      return project.category.includes(activeCategoryValue);
    } else {
      return project.category === activeCategoryValue;
    }
  }
};

// Add loading state handling
const isLoading = computed(() => {
  // Only show spinner when actively loading projects, not when they're just not initialized
  return projectStore.isProjectLoading;
});

onMounted(() => {
  // Wait for next tick to ensure DOM is ready
  nextTick(() => {
    // Only setup animations if projects are loaded
    if (projectStore.allProjects.length > 0) {
      setupScrollAnimations();
    }
  });
});

// Watch for project store initialization
watch(
  () => projectStore.isInitialized,
  (isInitialized) => {
    if (isInitialized && projectStore.allProjects.length > 0) {
      nextTick(() => {
        setupScrollAnimations();
      });
    }
  },
  { immediate: true }
);

const setupScrollAnimations = () => {
  // Kill only our component's triggers to prevent duplicates
  ScrollTrigger.getAll()
    .filter((t) => t.vars?.id?.startsWith?.("project-filter-"))
    .forEach((t) => t.kill());

  // Wait a bit for DOM to be fully rendered
  setTimeout(() => {
    // Animate the filter nav itself
    const nav = document.querySelector(".projects-gallery-filter-nav");
    if (nav) {
      gsap.set(nav, { opacity: 0, y: -30 });
      gsap.to(nav, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          id: "project-filter-nav",
          trigger: nav,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });
    }

    // Select all filter items
    const items = document.querySelectorAll(".filter-item");

    if (items.length === 0) {
      console.warn("No filter items found for animation");
      return;
    }

    items.forEach((item, index) => {
      // Set initial state
      gsap.set(item, { opacity: 0, y: 50 });

      // Check if element is already in viewport
      const rect = item.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInViewport) {
        // Animate immediately if already in view
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
        });
      } else {
        // Otherwise, animate on scroll
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            id: `project-filter-item-${index}`,
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        });
      }
    });
  }, 100); // Small delay to ensure DOM is ready
};

// Watch for changes in filtered projects to re-setup animations
watch(
  filteredProjects,
  (newProjects) => {
    if (newProjects.length > 0) {
      // Use nextTick to ensure DOM updates are complete
      nextTick(() => {
        // Reset opacity and position for all items
        gsap.set(".filter-item", { opacity: 0, y: 50 });
        // Re-setup animations with a small delay
        setTimeout(() => {
          setupScrollAnimations();
        }, 50);
      });
    }
  },
  { flush: "post" }
);
</script>

<style scoped>
.projects__img {
  border-radius: 10px;
}

.projects-gallery-filter-nav {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  margin: 50px 0;
  opacity: 0;
  transform: translateY(-30px);
  will-change: transform, opacity;
}

.btn-outline-secondary.active {
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
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  box-shadow: none !important;
  outline: 0 !important;
  text-transform: capitalize;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
  margin-top: 60px;
  will-change: transform, opacity;
}

.link {
  border-bottom: 2px solid;
  border-color: var(--project-color);
  color: var(--text-color);
  padding: 5px;
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

/* Add some spacing between items for better scroll experience */
.projects__container {
  padding: 2rem 0;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.no-projects {
  text-align: center;
  padding: 2rem;
  color: var(--text-color);
}

.project__info {
  margin-top: 10px;
}
</style>
