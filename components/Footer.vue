<template>
  <footer class="footer">
    <div class="footer__container container">
      <h1 class="footer__title"></h1>
      <p>Frontend Developer</p>

      <ul class="footer__list">
        <li>
          <nuxt-link to="/" class="footer__link">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#experience" class="footer__link">Experience</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#projects" class="footer__link">Projects</nuxt-link>
        </li>
      </ul>

      <ul class="footer__social">
        <li>
          <a href="www.linkedin.com/in/oscar-mcintosh" aria-label="Link to my linkedin page" target="_blank" class="footer__social-link">
            <i class="ri-linkedin-box-line"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/oscar-mcintosh/oscar-mcintosh" aria-label="Link to my github page" target="_blank" class="footer__social-link">
            <i class="ri-github-line"></i>
          </a>
        </li>
      </ul>

      <span class="footer__copy">
        &#169; Copyright twofortytwo 
      </span>
    </div>
  </footer>

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>