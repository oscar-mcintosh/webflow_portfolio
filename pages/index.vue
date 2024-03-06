<template>
    <main class="main">
        <section class="home section" id="home">
            <div class="home__container container grid section__border">
                <div class="home__data grid">
                    <h1 class="home__title">
                        <!-- Oscar McIntosh<br> -->
                       <span class="home__title-1 home-title">Oscar</span> <span class="home__title-2 home-title">Mcintosh</span>
                    </h1>
                    <div class="home__blob grid">
                        <div class="home__perfil">
                            <img src="~/assets/images/portfolio_pic.webp" alt="picture of man staring" />
                        </div>
                    </div>
                    <ul class="home__social">
                        <a href="https://www.linkedin.com/in/oscar-mcintosh/" target="_blank" class="home__social-link">
                                    <span class="link__name">Linkedin</span>
                            <i class="ri-linkedin-box-line"></i>
                        </a>
                        <a href="https://github.com/oscar-mcintosh" target="_blank" class="home__social-link">
                                    <span class="link__name">Github</span>
                            <i class="ri-github-line"></i>
                        </a>
                    </ul>
                </div>
                <div class="home__info">

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
                        Hello! My name is Oscar McIntosh. I'm an experienced Frontend Web Developer based in the heart of Lincoln, Nebraska, with a passion for crafting beautiful and functional websites. With six years of hands-on experience under my belt, I've honed my skills in HTML, CSS, JavaScript, and Vue.js to perfection.
                    </p>
                    <p class="about__description">
                        My specialization lies in Webflow, where I bring creativity and precision together to bring concepts to life. From sleek designs to seamless user experiences, I thrive on turning visions into reality, pixel by pixel.
                    </p>
                    <p class="about__description">
                        Beyond coding, I'm well-versed in the intricacies of SEO, leveraging tools like Google Analytics and Tag Manager to optimize website performance and drive organic traffic. I believe in the power of data-driven decisions, ensuring that every aspect of a project is strategically crafted for success.
                    </p>
                    <p class="about__description">
                        In every project I undertake, my goal is simple: to create web experiences that not only meet but exceed expectations. Whether it's a personal blog or a corporate website, I approach each task with enthusiasm, attention to detail, and a commitment to excellence.
                    </p>
                    <p class="about__description">
                        Let's collaborate and transform your digital presence into something truly extraordinary.
                    </p>
                    <a href="#contact" class="button">Contact Me</a>
                </div>
            </div>
         </section>

        <!--==================== EXPERIENCE ====================-->
        <section class="skills section" id="skills">
            <h2 class="section__title">Experience</h2>
            <span class="section__subtitle"></span>

            <div class="skills__container container grid section__border">

                <div class="skills__content">
                    <h3 class="skills__title">
                        <i class="ri-braces-line"></i>Frontend Developer
                    </h3>
                    <div class="skills__info">
                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="~/assets/images/html-1.svg" alt="skills image">
                            </div>
                            <h3 class="skills__name">HTML</h3>
                            <span class="skills__subtitle"></span>
                        </div>
                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="~/assets/images/css-3.svg" alt="skills image">
                            </div>
                            <h3 class="skills__name">CSS</h3>
                            <span class="skills__subtitle"></span>
                        </div>
                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="~/assets/images/logo-javascript.svg" alt="skills image">
                            </div>
                            <h3 class="skills__name">Javascript</h3>
                            <span class="skills__subtitle"></span>
                        </div>
                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="~/assets/images/vue-9.svg" alt="skills image">
                            </div>
                            <h3 class="skills__name">Vue JS</h3>
                            <span class="skills__subtitle"></span>
                        </div>

                    </div>
                </div>

                <div class="skills__content">
                    <h3 class="skills__title">
                        <i class="ri-database-2-line"></i>CMS' and other tools
                    </h3>
                    <div class="skills__info">
                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="~/assets/images/git-icon.svg" alt="skills image">
                            </div>
                            <h3 class="skills__name">GIT</h3>
                            <span class="skills__subtitle"></span>
                        </div>
                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="~/assets/images/wordpress-icon-1.svg" alt="skills image">
                            </div>
                            <h3 class="skills__name">Wordpress</h3>
                            <span class="skills__subtitle"></span>
                        </div>
                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="~/assets/images/webflow-icon.svg" alt="skills image">
                            </div>
                            <h3 class="skills__name">Webflow</h3>
                            <span class="skills__subtitle"></span>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <!--==================== PROJECTS ====================-->
        <section class="projects section" id="projects">
            <h2 class="section__title">Projects</h2>
            <span class="section__subtitle">Most recent personal projects</span>
            <div class="projects__container container grid">
                <article v-for="(project, idx) in projectStore.projects"
                        :key="idx">
                    <ProjectCard :project="project" />
                </article>
            </div>
        </section>



    </main>
</template>

<script setup>
    import { useProjectStore } from '/stores/projectStore';
    import gsap from 'gsap'; 
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    const projectStore = useProjectStore();

    const getProject =  projectStore.getProject();

    useHead({
        title: 'TwoFortyTwo | Home',
        meta: [
            { name: 'description', 
            content: 'Experienced, Webflow, Frontend, Web Developer in Lincoln, Nebraska, crafting engaging online experiences. Transforming designs into seamless, responsive websites. Let\'s bring your digital vision to life! Contact me for expert frontend website development.'
            }
        ],
        meta: [
            { name: 'keywords', 
            content: 'Webflow, Frontend, Web Developer, Lincoln, Nebraska.'
            }
        ]

    })
const main = ref();
let ctx;

onMounted(() => {
  const fadeInElements = () => {
    const image = document.querySelector('.home__perfil'); // Select the image element
    const text = document.querySelectorAll('.home-title'); // Select the text element
    
    // Use GSAP to fade in the image and text
    gsap.from(image, {
      duration: 1.5,
      opacity: 0,
      ease: "power2.out"
    });

    gsap.from(text, {
      duration: 1.6,
      ease: "power2.out",
      opacity: 0,
      delay: 0.8 // Adding a slight delay for a staggered effect
    });
  };


  fadeInElements(); // Trigger the fading in of elements

});

</script>

<style scoped>
article{
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

</style>