<template>
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="container">
      <div class="hero-content">
        <div class="home__container grid">
          <div class="home__info">
            <div class="home__info-content">
              <p class="home__title-1">Oscar McIntosh</p>
              <h1 data-text="Webflow" class="home__title home__title-1">
                Webflow
              </h1>
              <h1 data-text="Professional" class="home__title home__title-1">
                Professional
              </h1>
              <p class="home__title-1">Freelancer and subcontractor</p>
              <NuxtLink to="/about" class="button">LEARN MORE</NuxtLink>
            </div>
          </div>

          <!-- <div class="home__data grid">
                        <div class="home__blob">
                            <div class="home__perfil">
                                <img fetchpriority="high" src="~/assets/images/portfolio_pic.webp" alt="picture of man staring" />
                            </div>
                        </div>
                    </div> -->
        </div>

        <!-- <h1>
          <span class="subtitle">Full-Stack</span>
          <span class="title">Development Agency</span>
        </h1>
        <div class="hero-text">
          <p class="small-text">
            Мы не предлагаем маркетинг. Мы не даем копирайтинг.
          </p>
          <p class="main-text">
            Мы создаем визуальные и текстовые смыслы любой задаче, встроенной в
            жесткие рамки делового мира.
          </p>
        </div>
        <a href="#order" class="cta-button">ЗАКАЗАТЬ УСЛУГУ</a> -->
        <div class="social-links">
          <a href="#" class="social-link"><i class="ri-facebook-fill"></i></a>
          <a href="#" class="social-link"><i class="ri-instagram-line"></i></a>
          <a href="#" class="social-link"><i class="ri-telegram-fill"></i></a>
        </div>
      </div>
    </div>
  </section>

  <section class="intro">
    <div class="pattern-bg"></div>
    <div class="container">
      <div class="row">
        <div class="col-12 wow fadeIn">
          <h6>The Two Forty Two Dev</h6>
          <h2>Web Development, UI/UX, A.I</h2>
        </div>
        <!-- end col-12 -->
        <!-- <div class="col-lg-5 wow fadeIn">
          <h4>Two Forty Two Dev's.</h4>
        </div> -->
        <!-- end col-5 -->
        <div class="col-lg-7 wow fadeIn" data-wow-delay="0.10s">
          <p>
           Hello! My name is Oscar McIntosh. I'm a Freelance and Contract Frontend, Webflow, Web Developer based in the heart of Lincoln, Nebraska, and passion for crafting beautiful and functional websites. With six years of hands-on experience under my belt, I've honed my skills in HTML, CSS, JavaScript, and Vue.js.
          </p>
          <p>
          My specialization lies in Webflow, where I bring creativity and precision together to bring concepts to life. From sleek designs to seamless user experiences, I thrive on turning visions into reality, pixel by pixel.  
          </p>
          <div class="custom-link wow">
            <NuxtLink to="/resume" class="button">
              <!-- <div class="lines"><span></span> <span></span></div> -->
              <b>VIEW RESUME</b>
            </NuxtLink>
            <button @click="downloadResume" class="button download-button">
              <!-- <div class="lines"><span></span> <span></span></div> -->
              <b>DOWNLOAD RESUME</b>
            </button>
          </div>
          <!-- end custom-link -->
        </div>
        <!-- end col-7 -->
        <!-- <div class="col-12 wow fadeIn"> -->
        <div class="intro-image">
          <img
            src="~/assets/images/gear-icon.svg"
            alt="Computer illustration"       
          />
        </div>
        <!-- </div> -->
        <!-- end col-12 -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
  <!-- end intro -->

  <section class="services-content-block">
    <div class="video-bg"></div>
    <!-- end video-bg -->
    <div class="container">
      <div class="row">
        <div class="col-12 wow fadeIn">
          <h6>SMOOTH INTERFACE INTERACTION</h6>
          <h2>Creation of friendly web interface layout</h2>
        </div>
        <!-- end col-12 -->
        <div class="col-md-4 wow fadeIn" data-wow-delay="0s">
          <div class="content-box">
            <div class="left"><small>01</small><span></span></div>
            <!-- end left -->
            <div class="right">
              <h4>STRATEGY</h4>
              <p>Creativity for us something personal.</p>
              <ul>
                <li>UX strategy</li>
                <li>Concept development</li>
                <li>Content strategy</li>
                <li>Online marketting</li>
                <li>User testing &amp; research</li>
              </ul>
            </div>
            <!-- end right -->
          </div>
          <!-- end content-box -->
        </div>
        <!-- end col-4 -->
        <div class="col-md-4 wow fadeIn" data-wow-delay="0.05s">
          <div class="content-box">
            <div class="left"><small>02</small><span></span></div>
            <!-- end left -->
            <div class="right">
              <h4>UI-UX LAYOUT</h4>
              <p>Creativity for us something personal.</p>
              <ul>
                <li>User Interface</li>
                <li>Prototype development</li>
                <li>Content strategy</li>
                <li>Online research</li>
                <li>Layout wireframe</li>
              </ul>
            </div>
            <!-- end right -->
          </div>
          <!-- end content-box -->
        </div>
        <!-- end col-4 -->
        <div class="col-md-4 wow fadeIn" data-wow-delay="0.10s">
          <div class="content-box">
            <div class="left"><small>03</small><span></span></div>
            <!-- end left -->
            <div class="right">
              <h4>BACK-END DEV</h4>
              <p>Creativity for us something personal.</p>
              <ul>
                <li>CMS Development</li>
                <li>Back-end Prototype</li>
                <li>Coding strategy</li>
                <li>Beta testing</li>
                <li>Page builder</li>
              </ul>
            </div>
            <!-- end right -->
          </div>
          <!-- end content-box -->
        </div>
        <!-- end col-4 -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>

  <section class="works">
    <div class="container">
      <div class="row">
        <div class="col-12 wow fadeIn">
          <h6>SMOOTH INTERFACE INTERACTION</h6>
          <h2 data-text="Works">Our selected works and showcases</h2>
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
  <!-- end works -->

  <section class="work-with-us">
    <div class="container">
      <div class="row">
        <div class="col-12 wow fadeIn">
          <h6>START WORKING WITH US</h6>
          <h2 data-text="Hire us">
            So that's us. There's no other way to put it.
          </h2>
        </div>
        <!-- end col-12 -->
        <div class="col-lg-5 col-md-8 wow fadeIn">
          <h4>
            Do you have a project opportunity, or are you just a looking to get
            creative solutions?
          </h4>
          <div class="custom-link wow fadeIn">
            <a href="#">
              <div class="lines"><span></span> <span></span></div>
              <!-- end lines -->
              <b>GET STARTED</b></a
            >
          </div>
          <!-- end custom-link -->
        </div>
        <!-- end col-5 -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
</template>

<script setup>
import { useProjectStore } from "~/stores/projectStore";
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import html2pdf from 'html2pdf.js';

const projectStore = useProjectStore();

definePageMeta({
  name: "sndbx",
  path: "/sndbx",
  layout: "default"
});

const downloadResume = async () => {
  try {
    // Create a temporary iframe to load the resume page
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    document.body.appendChild(iframe);

    // Load the resume page in the iframe
    iframe.src = '/resume';
    
    // Wait for the iframe to load
    await new Promise((resolve) => {
      iframe.onload = resolve;
    });

    // Get the resume element from the iframe
    const resumeElement = iframe.contentDocument.querySelector('.resume-container');
    
    if (!resumeElement) {
      console.error('Resume element not found');
      return;
    }

    const opt = {
      margin: 1,
      filename: 'Oscar_McIntosh_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    await html2pdf().set(opt).from(resumeElement).save();
    
    // Clean up the iframe
    document.body.removeChild(iframe);
  } catch (error) {
    console.error('Error downloading resume:', error);
  }
};

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize projects on mount
onMounted(async () => {
  if (!projectStore.isInitialized) {
    await projectStore.fetchAllProjects();
  }

  // Set initial states before any animations
  gsap.set(".hero-bg", {
    scale: 1.1,
    opacity: 1,
  });

  gsap.set(".home__info-content p", {
    opacity: 0,
    y: 20,
  });

  gsap.set(".home__info-content h1", {
    opacity: 0,
    y: 20,
  });

  gsap.set(".home__info-content .button", {
    opacity: 0,
    y: 20,
  });

  gsap.set(".social-link", {
    opacity: 0,
    y: -10,
  });

  // Create a timeline for synchronized animations
  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
  });

  // Add animations to timeline
  tl.to(".hero-bg", {
    scale: 1,
    duration: 1.2,
    ease: "power2.out",
  })
    .to(
      ".home__info-content p",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
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
        ease: "power2.out",
      },
      "-=0.4"
    )
    .to(
      ".home__info-content .button",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
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
        ease: "power2.out",
      },
      "-=0.4"
    );

  // Setup scroll animations for content boxes
  const contentBoxes = document.querySelectorAll(".content-box");

  contentBoxes.forEach((box, index) => {
    gsap.fromTo(
      box,
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
          trigger: box,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  });

  // Setup scroll animations for fadeIn elements
  const fadeInElements = document.querySelectorAll(".fadeIn");

  fadeInElements.forEach((element, index) => {
    // Get the delay from data-wow-delay if it exists
    const delay = element.getAttribute("data-wow-delay")
      ? parseFloat(element.getAttribute("data-wow-delay")) * 0.1
      : 0;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  });
});
</script>

<style lang="css" scoped>
.hero {
  position: relative;
  min-height: 100vh;
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

.hero .container {
  position: relative;
  z-index: 2;
  padding: 2rem;
  height: 100vh;
  display: flex;
  align-items: center;
}

.hero-content {
  margin-top: 0;
  max-width: 800px;
  margin-left: 0;
  margin-right: auto;
  text-align: left;
}

.hero-content h1 {
  margin-bottom: 2rem;
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

header {
  transform: scale(1.5);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;
  transition-duration: 700ms;
  -webkit-transition-duration: 700ms;
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  -webkit-transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
}
header .left-side {
  width: 50%;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
  margin-left: 30px;
  z-index: 3;
}
header .left-side ul {
  margin: 0 auto;
  padding: 0;
}
header .left-side ul li {
  display: inline-block;
  margin: 0 10px;
  padding: 0;
  list-style: none;
}
header .left-side ul li a {
  font-size: 14px;
  color: #fff;
  font-family: "Fjalla One", sans-serif;
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -ms-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  padding-bottom: 6px;
  border-bottom: 2px solid transparent;
}
header .left-side ul li a:hover {
  padding-bottom: 1px;
  border-bottom: 2px solid #fff;
  text-decoration: none;
}
header .scroll-down {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
}
header .scroll-down small {
  width: 98px;
  display: inline-block;
  transform: rotate(-90deg);
  margin-bottom: 50px;
  color: #fff;
  font-family: "Fjalla One", sans-serif;
}
header .scroll-down span {
  display: block;
  height: 50px;
  position: relative;
  transform: translateX(-1px);
}
header .scroll-down span::before {
  -webkit-animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;
  -moz-animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;
  -o-animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;
  animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;
}
header .scroll-down span::before {
  position: absolute;
  top: 0px;
  left: 50%;
  margin-left: -0.5px;
  width: 1px;
  height: 70px;
  background: #fff;
  content: "";
}
header .sound {
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 3;
}
header .sound span {
  float: left;
  color: #fff;
  font-size: 14px;
  margin-right: 10px;
  font-family: "Fjalla One", sans-serif;
}
header .sound .equalizer {
  float: left;
}
header .sound .equalizer .holder {
  width: 23px;
  height: 20px;
  position: relative;
}

.row {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

@media (min-width: 992px) {
  .col-lg-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
}

@media (min-width: 768px) {
  .col-md-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-md-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}

@media only screen and (max-width: 1199px),
  only screen and (max-device-width: 1199px) {
  .work-with-us h2 {
    padding-right: 0;
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

.button {
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

.download-button {
  background: #333;
}

.download-button:hover {
  background: var(--accent-color);
}

.lines {
  margin-right: 10px;
}

.lines span {
  width: 20px;
  height: 2px;
  background: #fff;
  display: block;
  margin: 4px 0;
}

.intro {
  position: relative;
  padding: 100px 0;
  /* background-color: #1a1a1a; */
  overflow: hidden;
}

/* .pattern-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("~/assets/images/pattern-bg.svg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: 1;
} */

.intro .container {
  position: relative;
  z-index: 2;
}
</style>
