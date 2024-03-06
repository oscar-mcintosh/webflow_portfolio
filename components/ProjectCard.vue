<template>
    <NuxtLink :to="`/projects/${project.id}`" class="projects__link">
        <img :src="project.image" :alt="project.name" class="projects__img"> 
        <!-- <i class="ri-arrow-right-circle-line projects__icon"></i> -->
    </NuxtLink>

<div class="project__info">
    <NuxtLink :to="`/projects/${project.id}`" class="link">

        <h3 class="projects__title">{{ project.name }}</h3>
    </NuxtLink>
    <NuxtLink :to="`/projects/${project.id}`" class="button">
        View
    </NuxtLink>
</div>

    <!-- <span class="projects__subtitle">{{ project.subtitle }}</span> -->

</template>

<script setup>
const { project } = defineProps(['project'])


</script>

<style >
.project-hero-image{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.project__info h3{
    color: var(--text-color);
    /* color: rgb(26,115,232); */
}

.link:hover{
    color: rgb(26,115,232);

}

.project__info{
    display: inline-block;
}
</style>