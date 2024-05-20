<template>
    <!-- <div> -->
    <a href="#"  id="scroll-up" class="material-scrolltop scrollup" type="button">
        <i class="ri-arrow-up-s-line"></i>
    </a>

    <!-- </div> -->
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 400 viewport height, add the show-scroll class to the NuxtLink with the scrollup class
  if (window.scrollY >= 350) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}

function scrollToTop(event) {
  event.preventDefault(); // Prevent default anchor behavior
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', scrollUp);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollUp);
});
</script>

<style lang="scss" scoped>

</style>