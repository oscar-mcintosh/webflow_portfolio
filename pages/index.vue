<template>
  <main class="main">
    <!--==================== HOME ====================-->
    <!-- 
    <section class="home section" id="home">
      <div class="container">
        <div class="home__container grid">
          <div class="home__info">
            <div class="home__info-content">
              <p class="home__title-1">Webflow Professional</p>
              <h1 data-text="Oscar" class="home__title home__title-1">Oscar</h1>
              <h1 data-text="McIntosh" class="home__title home__title-1">
                McIntosh
              </h1>
              <p class="home__title-1">Freelancer and subcontractor</p>
            </div>
          </div>

          <div class="home__data grid">
            <div class="home__blob">
              <div class="home__perfil">
                <img
                  fetchpriority="high"
                  src="~/assets/images/portfolio_pic.webp"
                  alt="picture of man staring"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="home__social-wrap">
          <div class="image-half-round-shape"></div>
          <ul class="home__social">
            <li class="home__social-link">
              <a
                href="www.linkedin.com/in/oscar-mcintosh"
                aria-label="Visit my linkedin page"
                target="_blank"
              >
                <i class="ri-linkedin-box-line"></i>
              </a>
            </li>

            <li class="wave-btn">
              <div class="ripple"><i class="ri-arrow-down-s-line"></i></div>
            </li>
            <li class="home__social-link">
              <a
                href="https://github.com/oscar-mcintosh"
                aria-label="Visit my Github page"
                target="_blank"
              >
                <i class="ri-github-line"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section> -->

    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="hero-content">
          <div class="home__container grid">
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
            <a href="#" class="social-link"><i class="ri-facebook-fill"></i></a>
            <a href="#" class="social-link"
              ><i class="ri-instagram-line"></i
            ></a>
            <a href="#" class="social-link"><i class="ri-telegram-fill"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!--==================== ABOUT ====================-->
    <section class="intro" id="about">
      <!-- <div class="pattern-bg"></div> -->
      <div class="container">
        <div class="wow fadeIn wow fadeIn projects-intro">
          <h6>The Two Forty Two Dev</h6>
          <h2>Custom Web Technology to Meet Your Digital Needs</h2>
        </div>

        <div class="intro-content">
          <div class="intro-text wow" data-wow-delay="0.10s">
            <p>
              Hello! My name is Oscar McIntosh. I'm a Freelance and Contract
              Frontend, Webflow, Web Developer based in the heart of Lincoln,
              Nebraska, and passion for crafting beautiful and functional
              websites. With six years of hands-on experience under my belt,
              I've honed my skills in HTML, CSS, JavaScript, and Vue.js.
            </p>
            <p>
              My specialization lies in Webflow, where I bring creativity and
              precision together to bring concepts to life. From sleek designs
              to seamless user experiences, I thrive on turning visions into
              reality, pixel by pixel.
            </p>
            <p>
              Let's collaborate and transform your digital presence into
              something truly extraordinary.
            </p>

            <div class="custom-link wow">
              <NuxtLink to="/resume" class="button">
                <b>VIEW RESUME</b>
              </NuxtLink>
              <button @click="downloadResume" class="button download-button">
                <b>DOWNLOAD RESUME</b>
              </button>
            </div>
          </div>
          
          <div class="intro-image wow" data-wow-delay="0.15s">
            <img
              src="~/assets/images/computer-image.svg"
              alt="Computer illustration"
            />
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end intro -->

    <!-- <section class="about section" id="about">
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
          <a href="#contact" class="button">Contact Me</a>
        </div>
      </div>
    </section> -->

    <!--==================== SERVICES ====================-->
    <section class="services-content-block" id="experience2">
      <div class="video-bg"></div>
      <!-- end video-bg -->
      <div class="container">
        <div class="col-lg-6 wow fadeIn services-intro" data-wow-delay="0.2s">
          <h6>How we can be helpful</h6>
          <h2 class="services-title">UX/UI design & web development</h2>
        </div>

        <div class="services-row">
          <div class="service-card wow fadeIn" data-wow-delay="0s">
            <div class="skills__blob2">
              <img src="~/assets/images/vue-9.svg" alt="skills image" />
            </div>

            <div class="content-box">
              <div class="flex ai-center">
                <small>01</small><span></span>
                <h4>WEB DEVELOPMENT</h4>
              </div>
              <p>Building modern, responsive web applications.</p>
              <ul>
                <li>
                  <i class="ri-settings-2-line"></i>Vue.js & Nuxt.js
                  Development
                </li>
                <li>
                  <i class="ri-settings-2-line"></i>Responsive Web Design
                </li>
                <li><i class="ri-settings-2-line"></i>API Integration</li>
                <li>
                  <i class="ri-settings-2-line"></i>Performance Optimization
                </li>
                <li>
                  <i class="ri-settings-2-line"></i>Cross-browser
                  Compatibility
                </li>
              </ul>
            </div>
          </div>

          <div class="service-card wow fadeIn" data-wow-delay="0.05s">
            <div class="skills__blob2">
              <img
                src="~/assets/images/webflow-icon.svg"
                alt="skills image"
              />
            </div>

            <div class="content-box">
              <div class="flex ai-center">
                <small>02</small><span></span>
                <h4>WEBFLOW EXPERTISE</h4>
              </div>
              <p>Creating stunning websites with Webflow.</p>
              <ul>
                <li>
                  <i class="ri-settings-2-line"></i>Custom Webflow Development
                </li>
                <li>
                  <i class="ri-settings-2-line"></i>CMS Setup & Integration
                </li>
                <li><i class="ri-settings-2-line"></i>Custom Interactions</li>
                <li>
                  <i class="ri-settings-2-line"></i>E-commerce Solutions
                </li>
                <li>
                  <i class="ri-settings-2-line"></i>Client Training & Support
                </li>
              </ul>
            </div>
          </div>

          <div class="service-card wow fadeIn" data-wow-delay="0.10s">
            <div class="skills__blob2">
              <img
                src="~/assets/images/google-search-ads.svg"
                alt="skills image"
              />
            </div>

            <div class="content-box">
              <div class="flex ai-center">
                <small>03</small><span></span>
                <h4>SEO & ANALYTICS</h4>
              </div>
              <p>Optimizing websites for maximum visibility.</p>
              <ul>
                <li>
                  <i class="ri-settings-2-line"></i>Technical SEO
                  Implementation
                </li>
                <li>
                  <i class="ri-settings-2-line"></i>Google Analytics Setup
                </li>
                <li>
                  <i class="ri-settings-2-line"></i>Keyword Research &
                  Strategy
                </li>
                <li>
                  <i class="ri-settings-2-line"></i>Performance Monitoring
                </li>
                <li>
                  <i class="ri-settings-2-line"></i>Conversion Rate
                  Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>

    <!--==================== PORTFOLIO ====================-->

    <section class="works" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-12 wow fadeIn projects-intro">
            <h6>SMOOTH INTERFACE INTERACTION</h6>
            <h2>My selected works and portfolio</h2>
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

    <!-- <section class="projects section" id="portfolio">
      <h2 class="section__title">Portfolio</h2>
      <span class="section__subtitle"></span>
      <div>
        <ProjectFilter />
      </div>
    </section> -->

    <!--==================== SKILLS ====================-->
    <!-- <section class="skills section" id="experience">
      <h2 class="section__title">Experience</h2>
      <span class="section__subtitle"></span>

      <div class="skills__container container grid section__border">
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
              <span class="projects__subtitle">Five years</span>
            </div>
            <div class="skills__data">
              <div class="skills__blob">
                <img src="~/assets/images/css-3.svg" alt="skills image" />
              </div>
              <h3 class="skills__name">CSS</h3>
              <span class="projects__subtitle">Five years</span>
            </div>
            <div class="skills__data">
              <div class="skills__blob">
                <img
                  src="~/assets/images/logo-javascript.svg"
                  alt="skills image"
                />
              </div>
              <h3 class="skills__name">Javascript</h3>
              <span class="projects__subtitle">Five years</span>
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
    </section> -->

    <!--==================== SKILLS2 UI FOR LARGER SCREENS ====================-->
    <!-- <section class="skills2 section" id="experience2">
      <h2 class="section__title">Experience</h2>
      <span class="section__subtitle"></span>

      <div class="container flex section__border">
        <div class="skills__content" data-animate="fadeup">
          <h3 class="skills__title">
            <i class="ri-braces-line"></i>Frontend Developer
          </h3>
          <div class="skills__info2 p-t">
            <div class="skills__data2">
              <div class="skills__data p-l">
                <h3 class="skills__name">HTML</h3>
                <span class="projects__subtitle">Five years</span>
              </div>
              <div class="skills__blob2 s1">
                <img src="~/assets/images/html-1.svg" alt="skills image" />
              </div>
            </div>
            <div class="skills__data2">
              <div class="skills__data">
                <h3 class="skills__name">CSS</h3>
                <span class="projects__subtitle">Five years</span>
              </div>
              <div class="skills__blob2 s2">
                <img
                  src="~/assets/images/interface-icon.svg"
                  alt="skills image"
                />
              </div>
            </div>
            <div class="skills__data2">
              <div class="skills__data">
                <h3 class="skills__name">Javascript</h3>
                <span class="projects__subtitle">Five years</span>
              </div>
              <div class="skills__blob2 s3">
                <img
                  src="~/assets/images/logo-javascript.svg"
                  alt="skills image"
                />
              </div>
            </div>
            <div class="skills__data2">
              <div class="skills__data p-l">
                <h3 class="skills__name">Vue JS</h3>
                <span class="projects__subtitle">Five years</span>
              </div>
              <div class="skills__blob2 s4">
                <img src="~/assets/images/vue-9.svg" alt="skills image" />
              </div>
            </div>
          </div>
        </div>
        <div class="skills__blob-large">
          <div class="skills__blob-inset">
            <div class="skills__blob-inset-img">
              <img src="~/assets/images/logo2.svg" alt="242 logo" />
            </div>
          </div>
        </div>

        <div class="skills__content" data-animate="fadeup">
          <h3 class="skills__title">
            <i class="ri-database-2-line"></i>CMS' and other tools
          </h3>
          <div class="skills__info2 p-t">
            <div class="skills__data2">
              <div class="skills__blob2 s5">
                <img src="~/assets/images/git-icon.svg" alt="skills image" />
              </div>
              <div class="skills__data p-r">
                <h3 class="skills__name">GIT</h3>
                <span class="projects__subtitle">Three years</span>
              </div>
            </div>
            <div class="skills__data2">
              <div class="skills__blob2 s6">
                <img
                  src="~/assets/images/wordpress-icon-1.svg"
                  alt="skills image"
                />
              </div>
              <div class="skills__data p-l">
                <h3 class="skills__name">Wordpress</h3>
                <span class="projects__subtitle">Four years</span>
              </div>
            </div>
            <div class="skills__data2">
              <div class="skills__blob2 s7">
                <img
                  src="~/assets/images/webflow-icon.svg"
                  alt="skills image"
                />
              </div>
              <div class="skills__data p-r p-l">
                <h3 class="skills__name">Webflow</h3>
                <span class="projects__subtitle">Five years</span>
              </div>
            </div>

            <div class="skills__data2 p-r">
              <div class="skills__blob2 s8">
                <img
                  src="~/assets/images/google-search-ads.svg"
                  alt="skills image"
                />
              </div>
              <div class="skills__data">
                <h3 class="skills__name">SEO</h3>
                <span class="projects__subtitle">Five years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

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

  // Create a master timeline for all animations
  const masterTl = gsap.timeline({
    defaults: { ease: "power2.out" },
  });

  // Initial states
  gsap.set(".hero-bg", { scale: 1.1, opacity: 1 });
  gsap.set(".home__info-content p", { opacity: 0, y: 20 });
  gsap.set(".home__info-content h1", { opacity: 0, y: 20 });
  gsap.set(".home__info-content .button", { opacity: 0, y: 20 });
  gsap.set(".social-link", { opacity: 0, y: -10 });

  // Hero section animations
  masterTl
    .to(".hero-bg", {
      scale: 1,
      duration: 1.2,
    })
    .to(
      ".home__info-content p",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.8"
    )
    .to(
      ".home__info-content h1",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.4"
    )
    .to(
      ".home__info-content .button",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      "-=0.4"
    )
    .to(
      ".social-link",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.4"
    );

  // Scroll animations for fadeIn elements
  const fadeInElements = document.querySelectorAll(".fadeIn");
  fadeInElements.forEach((element) => {
    const delay = element.getAttribute("data-wow-delay")
      ? parseFloat(element.getAttribute("data-wow-delay"))
      : 0;

    // Set initial state
    gsap.set(element, { opacity: 0, y: 30 });

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
    gsap.set(box, { opacity: 0, y: 30 });

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

  // Special handling for intro section
  const introElements = document.querySelectorAll(".intro .wow");
  introElements.forEach((element, index) => {
    gsap.set(element, { opacity: 0, y: 30 });

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

.custom-link {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

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
  background: #333;
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
}

/* .hero-content {
  margin-top: 0;
  max-width: 800px;
  margin-left: 0;
  margin-right: auto;
  text-align: left;
} */

.hero-content h1 {
  margin-bottom: 3rem;
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
    margin-top: 0;
    text-align: left;
  }

  .hero-content .title {
    font-size: 3rem;
  }

  .hero-text {
    text-align: left;
  }

  .social-links {
    position: relative;
    left: 0;
    top: 0;
    transform: none;
    flex-direction: row;
    justify-content: center;
    margin-top: 2rem;
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
  margin-bottom: 2rem;
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
