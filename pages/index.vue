<template>
  <main class="main">
    <!--==================== HOME ====================-->

    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="hero-content">
          <div class="home__container">
            <div class="home__info">
              <div class="home__info-content">
                <p class="home__title-1">Oscar McIntosh</p>
                <h1 class="home__title home__title-1">FrontEnd</h1>
                <h1 class="home__title home__title-1">Web Developer</h1>
                <p class="home__title-1">Webflow Professional</p>
                <NuxtLink to="#about" class="button">LEARN MORE</NuxtLink>
              </div>
            </div>
          </div>
          <div class="social-links">
            <a
              href="https://www.linkedin.com/in/oscar-mcintosh"
              class="social-link"
              target="_blank"
              aria-label="Visit my LinkedIn page"
              ><i class="ri-linkedin-box-line"></i
            ></a>
            <a
              href="https://github.com/oscar-mcintosh"
              class="social-link"
              target="_blank"
              aria-label="Visit my GitHub page"
              ><i class="ri-github-line"></i
            ></a>
          </div>
        </div>
      </div>
    </section>

    <!--==================== ABOUT ====================-->

    <section class="about section" id="about">
      <div class="about__container container grid section__border">
        <div class="about__data">
          <h2 class="section__title">
            About <span>Me</span>
            <span class="section__subtitle"></span>
          </h2>
          <p class="about__description">
            Hello! My name is Oscar McIntosh. I'm a Freelance and Contract
            Frontend, Webflow, Web Developer based in the heart of Lincoln,
            Nebraska, and passion for crafting beautiful and functional
            websites. With six years of hands-on experience under my belt, I've
            honed my skills in HTML, CSS, JavaScript, and Vue.js.
          </p>
          <p class="about__description">
            My specialization lies in Webflow, where I bring creativity and
            precision together to bring concepts to life. From sleek designs to
            seamless user experiences, I thrive on turning visions into reality,
            pixel by pixel.
          </p>
          <p class="about__description">
            Beyond coding, I'm well-versed in the intricacies of SEO, leveraging
            tools like Google Analytics and Tag Manager to optimize website
            performance and drive organic traffic. I believe in the power of
            data-driven decisions, ensuring that every aspect of a project is
            strategically crafted for success.
          </p>
          <p class="about__description">
            In every project I undertake, my goal is simple: to create web
            experiences that not only meet but exceed expectations. Whether it's
            a personal blog or a corporate website, I approach each task with
            enthusiasm, attention to detail, and a commitment to excellence.
          </p>
          <p class="about__description">
            Let's collaborate and transform your digital presence into something
            truly extraordinary.
          </p>
          <!-- <a href="#contact" class="button">Contact Me</a> -->
        </div>
        <div class="custom-link wow">
          <NuxtLink to="/resume" class="button">
            <b>VIEW RESUME</b>
          </NuxtLink>
          <button @click="downloadResume" class="button download-button">
            <b>DOWNLOAD RESUME</b>
          </button>
        </div>
      </div>
    </section>

    <!--==================== SKILLS ====================-->
    <section class="skills section" id="skills">
      <div class="skills__container container grid section__border">
        <h2 class="section__title">Skills</h2>
        <span class="section__subtitle"></span>

        <div class="skills__content" data-animate="fadeup">
          <h3 class="skills__title">
            <i class="ri-braces-line"></i>Frontend Developer
          </h3>
          <div class="skills__info">
            <div class="skills__data">
              <div class="skills__blob">
                <img src="~/assets/images/html-1.svg" alt="skills image" />
              </div>
              <h3 class="skills__name">HTML</h3>
              <span class="projects__subtitle">Seven years</span>
            </div>
            <div class="skills__data">
              <div class="skills__blob">
                <img src="~/assets/images/css-3.svg" alt="skills image" />
              </div>
              <h3 class="skills__name">CSS</h3>
              <span class="projects__subtitle">Seven years</span>
            </div>
            <div class="skills__data">
              <div class="skills__blob">
                <img
                  src="~/assets/images/logo-javascript.svg"
                  alt="skills image"
                />
              </div>
              <h3 class="skills__name">Javascript</h3>
              <span class="projects__subtitle">Seven years</span>
            </div>
            <div class="skills__data">
              <div class="skills__blob">
                <img src="~/assets/images/vue-9.svg" alt="skills image" />
              </div>
              <h3 class="skills__name">Vue JS</h3>
              <span class="projects__subtitle">Five years</span>
            </div>
          </div>
        </div>

        <div class="skills__content" data-animate="fadeup">
          <h3 class="skills__title">
            <i class="ri-database-2-line"></i>CMS' and other tools
          </h3>
          <div class="skills__info">
            <div class="skills__data">
              <div class="skills__blob">
                <img src="~/assets/images/git-icon.svg" alt="skills image" />
              </div>
              <h3 class="skills__name">GIT</h3>
              <span class="projects__subtitle">Three years</span>
            </div>
            <div class="skills__data">
              <div class="skills__blob">
                <img
                  src="~/assets/images/wordpress-icon-1.svg"
                  alt="skills image"
                />
              </div>
              <h3 class="skills__name">Wordpress</h3>
              <span class="projects__subtitle">Four years</span>
            </div>
            <div class="skills__data">
              <div class="skills__blob">
                <img
                  src="~/assets/images/webflow-icon.svg"
                  alt="skills image"
                />
              </div>
              <h3 class="skills__name">Webflow</h3>
              <span class="projects__subtitle">Five years</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--==================== SERVICES ====================-->
    <!-- <section id="experience2">
      <div class="video-bg"></div>
      <div class="container">
        <div class="col-lg-6 wow fadeIn services-intro" data-wow-delay="0.2s">
          <h6 class="section__subtitle">How we can be helpful</h6>
          <h2 class="services-title section__title">
            UX/UI design & web development
          </h2>
        </div>

        <div class="services-row grid projects__container skills__info">
          <div class="service-card wow fadeIn" data-wow-delay="0s">
            <div class="skills__blob2 border-center-demo">
              <img src="~/assets/images/vue-9.svg" alt="skills image" />
            </div>

            <div class="content-box border-center-demo">
              <div class="flex ai-center">
                <small>01</small><span></span>
                <h4>WEB DEVELOPMENT</h4>
              </div>
              <ul>
                <li>
                  <i class="ri-settings-2-line"></i>Vue.js & Nuxt.js Development
                </li>
                <li><i class="ri-settings-2-line"></i>Responsive Web Design</li>
                <li><i class="ri-settings-2-line"></i>API Integration</li>
                <li>
                  <i class="ri-settings-2-line"></i>Performance Optimization
                </li>
                <li>
                  <i class="ri-settings-2-line"></i>Cross-browser Compatibility
                </li>
              </ul>
            </div>
          </div>

          <div class="service-card wow fadeIn" data-wow-delay="0.05s">
            <div class="skills__blob2 border-center-demo">
              <img src="~/assets/images/webflow-icon.svg" alt="skills image" />
            </div>

            <div class="content-box border-center-demo">
              <div class="flex ai-center">
                <small>02</small><span></span>
                <h4>WEBFLOW EXPERT</h4>
              </div>
              <ul>
                <li>
                  <i class="ri-settings-2-line"></i>Custom Webflow Development
                </li>
                <li>
                  <i class="ri-settings-2-line"></i>CMS Setup & Integration
                </li>
                <li><i class="ri-settings-2-line"></i>Custom Interactions</li>
                <li><i class="ri-settings-2-line"></i>E-commerce Solutions</li>
                <li>
                  <i class="ri-settings-2-line"></i>Client Training & Support
                </li>
              </ul>
            </div>
          </div>

          <div class="service-card wow fadeIn" data-wow-delay="0.10s">
            <div class="skills__blob2 border-center-demo">
              <img
                src="~/assets/images/google-search-ads.svg"
                alt="skills image"
              />
            </div>

            <div class="content-box border-center-demo">
              <div class="flex ai-center">
                <small>03</small><span></span>
                <h4>SEO & ANALYTICS</h4>
              </div>
              <ul>
                <li>
                  <i class="ri-settings-2-line"></i>Technical SEO Implementation
                </li>
                <li>
                  <i class="ri-settings-2-line"></i>Google Analytics Setup
                </li>
                <li>
                  <i class="ri-settings-2-line"></i>Keyword Research & Strategy
                </li>
                <li>
                  <i class="ri-settings-2-line"></i>Performance Monitoring
                </li>
                <li>
                  <i class="ri-settings-2-line"></i>Conversion Rate Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!--==================== PORTFOLIO ====================-->

    <section class="works section" id="portfolio">
      <div class="container section__border">
        <div class="row">
          <div class="col-12 wow fadeIn projects-intro">
            <h6 class="section__subtitle">SMOOTH INTERFACE INTERACTION</h6>
            <h2 class="section__title">My selected works and portfolio</h2>
          </div>
          <!-- end col-12 -->
          <div class="col-12">
            <div>
              <ProjectFilter />
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>

    <!--==================== CONTACT ====================-->
    <section class="contact section" id="contact">
      <ContactForm />
    </section>

    <ScrollToTop />
  </main>
</template>

<script setup>
import { useProjectStore } from "/stores/projectStore";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Start hero background animation immediately when GSAP is available
// This runs before the component mounts, so the animation starts as soon as possible
if (typeof window !== "undefined") {
  // Use requestAnimationFrame to ensure DOM is ready
  requestAnimationFrame(() => {
    gsap.to(".hero-bg", {
      scale: 1,
      duration: 1.5,
      ease: "power2.out",
    });
  });
}
const { $posthog } = useNuxtApp();
if ($posthog) {
  const posthog = $posthog();
  posthog.capture("<event_name>");
}
const projectStore = useProjectStore();

// Initialize projects on mount
onMounted(async () => {
  if (!projectStore.isInitialized) {
    await projectStore.fetchAllProjects();
  }

  // Initialize other animations
  // Create a master timeline for content animations
  const masterTl = gsap.timeline({
    defaults: { ease: "power2.out" },
  });

  // Initial states for content elements
  gsap.set(".home__info-content p", { y: 20 });
  gsap.set(".home__info-content h1", { y: 20 });
  gsap.set(".home__info-content .button", { y: 20 });
  gsap.set(".social-link", { y: -10 });

  // Content animations with slight delay to let hero-bg start first
  masterTl
    .to(
      ".home__info-content p",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      },
      0.2 // Start after hero-bg begins
    )
    .to(
      ".home__info-content h1",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      },
      0.4
    )
    .to(
      ".home__info-content .button",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      0.6
    )
    .to(
      ".social-link",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      },
      0.8
    );

  // Scroll animations for fadeIn elements
  const fadeInElements = document.querySelectorAll(".fadeIn");
  fadeInElements.forEach((element) => {
    const delay = element.getAttribute("data-wow-delay")
      ? parseFloat(element.getAttribute("data-wow-delay"))
      : 0;

    // Set initial state and clear any existing animations
    gsap.set(element, { opacity: 0, y: 30, clearProps: "all" });

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });
  });

  // Scroll animations for content boxes
  const contentBoxes = document.querySelectorAll(".content-box");
  contentBoxes.forEach((box) => {
    gsap.set(box, { opacity: 0, y: 30, clearProps: "all" });

    gsap.to(box, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: box,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });
  });

  // Scroll animations for skills content (same as filter-item animation)
  const skillsContent = document.querySelectorAll(".skills__content");
  skillsContent.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  });

  // Scroll animations for section titles and subtitles (same as filter-item animation)
  const sectionTitles = document.querySelectorAll(
    ".section__title, .section__subtitle"
  );
  sectionTitles.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  });

  // Scroll animations for projects filter navigation (same as filter-item animation)
  const projectsFilterNav = document.querySelectorAll(
    ".projects-gallery-filter-nav"
  );
  projectsFilterNav.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  });

  // Special handling for intro section
  const introElements = document.querySelectorAll(".intro .wow");
  introElements.forEach((element, index) => {
    gsap.set(element, { opacity: 0, y: 30, clearProps: "all" });

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: index * 0.2, // Stagger the animations
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });
  });

  // Cleanup function
  onBeforeUnmount(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    masterTl.kill();
  });
});

useHead({
  title: "Web Developer & Webflow Developer in Lincoln, NE",
  meta: [
    {
      name: "description",
      content:
        "Professional frontend web developer and Webflow expert based in Lincoln, NE. Specializing in responsive web design and custom development.",
    },
    {
      name: "keywords",
      content:
        "Frontend Web Developer Lincoln NE, Webflow Developer Lincoln NE, Custom Web Development Lincoln, Responsive Web Design Lincoln NE, SEO strategist Lincoln NE",
    },
  ],
});
</script>

<style scoped>
article {
  margin-bottom: 30px;
}
.home__title-1 {
  animation: fade 1s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
}

.content-box,
.fadeIn {
  will-change: transform, opacity;
}

/* Disable conflicting CSS animations for hero elements */
.hero-bg,
.home__info-content p,
.home__info-content h1,
.home__info-content .button,
.social-link {
  /* Only disable CSS animations, allow GSAP to control */
  animation: none !important;
  -webkit-animation: none !important;
}

/* Allow GSAP to control these elements */
.hero-bg,
.home__info-content p,
.home__info-content h1,
.home__info-content .button,
.social-link {
  will-change: transform, opacity;
  transform-origin: center center;
}

/* Hide content initially to prevent flash */
.home__info-content p,
.home__info-content h1,
.home__info-content .button,
.social-link {
  opacity: 0;
}

/* Hide skills content initially for animation */
.skills__content {
  opacity: 0;
  transform: translateY(50px);
}

/* Hide section titles and subtitles initially for animation */
.section__title,
.section__subtitle {
  opacity: 0;
  transform: translateY(50px);
}

/* Hide projects filter nav initially for animation */
.projects-gallery-filter-nav {
  opacity: 0;
  transform: translateY(50px);
}

/* .custom-link {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
} */

/* .button {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: var(--accent-color);
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.button:hover {
  background: #333;
  transform: translateY(-2px);
}
 */
.download-button {
  background: var(--accent-color);
}

.download-button:hover {
  background: var(--accent-color);
}

.hero {
  position: relative;
  height: 100vh;
  background-color: #1a1a1a;
  color: #fff;
  overflow: hidden;
  /* display: flex; */
  align-items: center;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url("~/assets/images/twofourtwo_hero.webp") center center no-repeat;
  background-size: cover;
  z-index: 1;
  transform: scale(1.1); /* Initial state - starts scaled up */
  transform-origin: center center;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  /* padding: 2rem 0; */
}

/* Override container margin for hero section to match other sections */
.hero .container {
  margin-inline: 1.5rem;
}

/* Responsive overrides to match other sections */
@media screen and (min-width: 576px) {
  .hero .container {
    margin-inline: 3.5rem;
  }
}

@media screen and (min-width: 1048px) {
  .hero .container {
    margin-inline: auto;
    /* padding: 0 15%; */
    /* margin-inline: 15rem; */
  }
}

.hero-content h1 {
  /* margin-bottom: 3rem; */
}

.hero-content .subtitle {
  display: block;
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
}

.hero-content .title {
  display: block;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.1;
}

.hero-text {
  margin-bottom: 3rem;
}

.hero-text .small-text {
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 1rem;
}

.hero-text .main-text {
  font-size: 1.2rem;
  max-width: 600px;
}

.social-links {
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 3;
}

.social-link {
  color: var(--accent-color);
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #00e1d0;
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    justify-content: center;
    text-align: left;
    gap: 2rem;
    /* padding: 1rem 0; */
  }

  .hero-content .title {
    font-size: 3rem;
  }

  .hero-text {
    text-align: left;
  }

  .social-links {
    display: none;
    position: relative;
    left: 0;
    top: 0;
    transform: none;
    flex-direction: row;
    justify-content: center;
    margin-top: 2rem;
  }

  .home__info-content {
    text-align: center;
  }

  .home__info-content h1 {
    /* margin-bottom: 1rem; */
  }

  .home__info-content p {
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 0.5rem 0;
    gap: 1.5rem;
  }

  .home__info-content h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .home__info-content p {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .social-links {
    margin-top: 1rem;
    display: none;
  }
}

/* .content-box ul li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.content-box ul li i {
  color: var(--accent-color);
  font-size: 1.1rem;
} */

/* Fix for nav height variable issue */
.nav {
  height: calc(var(--header-height) + 1.5rem) !important;
}

.hero-content h1 {
  /* margin-bottom: 2rem; */
}

/* Legacy grid class - no longer needed */
.bd-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}

.about__img {
  width: 280px;
  border-radius: 0.5rem;
  justify-self: center;
}
</style>
