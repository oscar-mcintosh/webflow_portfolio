<template>
    <NuxtLink :to="`/projects/${project.id}`" class="projects__link">
        <img :src="project.image" :alt="project.name" class="projects__img"> 
        <!-- <i class="ri-arrow-right-circle-line projects__icon"></i> -->
    </NuxtLink>

    <NuxtLink :to="`/projects/${project.id}`" class="link">

        <h2 class="projects__title">{{ project.name }}</h2>
    </NuxtLink>

    <span class="projects__subtitle">{{ project.subtitle }}</span>

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

.projects__content h3{
    color: rgb(26,115,232);
}

.link:hover{
    color: rgb(26,115,232);

}
</style>