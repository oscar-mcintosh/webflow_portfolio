<template>
    <!-- <header class="header" id="header"> -->
        <nav class="nav container" :class="{ 'hidden': isScrolling }">
            <NuxtLink to="/" class="nav__logo animate">
            <span class="link__name">Home</span>
            </NuxtLink>
            <div :class="{ 'show-menu': isNavMenuVisible }" class="nav__menu" id="nav-menu">
                <ul  class="nav__list grid">
                    <li class="nav__item" @click="closeNavMenu">
                    <NuxtLink to="/" class="nav__link animate">
                        <i class="ri-home-5-line"></i>Home
                    </NuxtLink>
                    </li>
                    <li class="nav__item" @click="closeNavMenu">
                    <NuxtLink to="#skills" class="nav__link animate">
                        <i class="ri-trophy-line"></i>Experience
                    </NuxtLink>
                    </li>
                    <li class="nav__item" @click="closeNavMenu">
                    <NuxtLink to="#projects" class="nav__link animate">
                        <i class="ri-gallery-line"></i>Projects
                    </NuxtLink>
                    </li>
                    <li class="nav__item" @click="closeNavMenu">
                        <NuxtLink to="https://github.com/oscar-mcintosh" target="_blank" class="nav__link animate">
                            <i class="ri-github-line"></i>Github
                        </NuxtLink>
                    </li>
                    <li class="nav__item" @click="closeNavMenu">
                    <NuxtLink to="#contact" class="nav__link animate">
                        <i class="ri-chat-3-line"></i>Contact
                    </NuxtLink>
                    </li>
                </ul>
                <div  @click="closeNavMenu" class="nav__close" id="nav-close">
                    <i class="ri-close-line"></i>
                </div>
            </div>
            <div class="nav__buttons">

                 <ColorToggle />

                <div @click="openNavMenu" class="nav__toggle" id="nav-toggle">
                    <i class="ri-menu-line"></i>
                </div>
            </div>
        </nav>
    <!-- </header>   -->
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import gsap from 'gsap';


    const isNavMenuVisible = ref(false);

    const openNavMenu = () => {
        isNavMenuVisible.value = true;
    };

    const closeNavMenu = () => {
        isNavMenuVisible.value = false;
    };
    const isScrolling = ref(false);
        let scrollTimeout = null;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);

      isScrolling.value = true;

      scrollTimeout = setTimeout(() => {
        isScrolling.value = false;
      }, 500);
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
            const animateNavLinks = () => {
    // Select all your navigation links
        const navLinks = document.querySelectorAll('.animate'); // Replace with your class

        // Use GSAP to animate the links
        gsap.from(navLinks, {
        duration: 1, // Animation duration in seconds
        y: -100, // Move 100px on the y-axis (negative value moves upwards)
        opacity: 0, // Optional: Fade in during the animation
        stagger: 0.2 // Optional: Stagger the animation for a nicer effect
        });
    };
    animateNavLinks();

      
      
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

</script>

<style scoped>
    .hidden {
    transform: translateY(-100%);
    display: none;
    }

</style>