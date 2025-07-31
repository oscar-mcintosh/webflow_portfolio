<template>
  <footer class="footer" :style="footerStyle">
    <div class="footer__container container">
      <h1 class="footer__title"></h1>
      <p>Frontend Developer</p>

      <ul class="footer__list">
        <li>
          <nuxt-link to="/" class="footer__link">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#experience" class="footer__link"
            >Experience</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="#projects" class="footer__link">Projects</nuxt-link>
        </li>
      </ul>

      <ul class="footer__social">
        <li>
          <a
            href="www.linkedin.com/in/oscar-mcintosh"
            aria-label="Link to my linkedin page"
            target="_blank"
            class="footer__social-link"
          >
            <i class="ri-linkedin-box-line"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/oscar-mcintosh/oscar-mcintosh"
            aria-label="Link to my github page"
            target="_blank"
            class="footer__social-link"
          >
            <i class="ri-github-line"></i>
          </a>
        </li>
      </ul>

      <span class="footer__copy"> &#169; Copyright twofortytwo </span>
    </div>
  </footer>
</template>

<script setup>
// Define props for the footer
const props = defineProps({
  projectBgColor: {
    type: String,
    default: null,
  },
});

// Compute the footer style based on whether we have a project background color
const footerStyle = computed(() => {
  if (props.projectBgColor) {
    return {
      backgroundColor: props.projectBgColor,
      paddingTop: "30px",
      paddingBottom: "30px",
    };
  }
  return {};
});
</script>

<style lang="scss" scoped></style>
