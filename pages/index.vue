<template>
    <main class="main">
        <!--==================== HOME ====================-->

        <section class="home section" id="home">
            <div class="container">
                <div class="home__container grid">
                    <div class="home__info">
                        <div class="home__info-content">
                            <p class="home__title-1">Webflow Professional</p>
                            <h1 data-text="Oscar" class="home__title home__title-1">Oscar</h1>
                            <h1 data-text="McIntosh" class="home__title home__title-1">McIntosh</h1>
                            <p class="home__title-1">Freelancer and subcontractor</p>
                        </div>
                    </div>

                    <div class="home__data grid">
                        <div class="home__blob">
                            <div class="home__perfil">
                                <img fetchpriority="high" src="~/assets/images/portfolio_pic.webp" alt="picture of man staring" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="home__social-wrap">
                    <div class="image-half-round-shape"></div>
                    <ul class="home__social">
                        <li class="home__social-link">
                            <a href="www.linkedin.com/in/oscar-mcintosh" aria-label="Visit my linkedin page" target="_blank">
                                <i class="ri-linkedin-box-line"></i>
                            </a>
                        </li>
                        
                        <li class="wave-btn">
                            <div class="ripple"><i class="ri-arrow-down-s-line"></i></div>

                        </li>
                        <li class="home__social-link">
                            <a href="https://github.com/oscar-mcintosh" aria-label="Visit my Github page" target="_blank">
                                <i class="ri-github-line"></i>
                            </a>
                        </li>


                    </ul>
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
                        Hello! My name is Oscar McIntosh. I'm a Freelance and Contract Frontend, Webflow, Web Developer based in the heart of Lincoln, Nebraska, and passion for crafting beautiful and functional websites. With six years of hands-on experience under my belt, I've honed my skills in HTML, CSS, JavaScript, and Vue.js.
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

        <!--==================== PORTFOLIO ====================-->

        <section class="projects section" id="portfolio">
            <h2 class="section__title">Portfolio</h2>
            <span class="section__subtitle"></span>
            <div>
                    <ProjectFilter />
            </div>

        </section>


        <!--==================== SKILLS ====================-->
        <section class="skills section" id="experience">
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
                                <img src="~/assets/images/html-1.svg" alt="skills image">
                            </div>
                            <h3 class="skills__name">HTML</h3>
                            <span class="projects__subtitle">Five years</span>
                        </div>
                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="~/assets/images/css-3.svg" alt="skills image">
                            </div>
                            <h3 class="skills__name">CSS</h3>
                            <span class="projects__subtitle">Five years</span>
                        </div>
                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="~/assets/images/logo-javascript.svg" alt="skills image">
                            </div>
                            <h3 class="skills__name">Javascript</h3>
                            <span class="projects__subtitle">Five years</span>
                        </div>
                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="~/assets/images/vue-9.svg" alt="skills image">
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
                                <img src="~/assets/images/git-icon.svg" alt="skills image">
                            </div>
                            <h3 class="skills__name">GIT</h3>
                            <span class="projects__subtitle">Three years</span>
                        </div>
                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="~/assets/images/wordpress-icon-1.svg" alt="skills image">
                            </div>
                            <h3 class="skills__name">Wordpress</h3>
                            <span class="projects__subtitle">Four years</span>
                        </div>
                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="~/assets/images/webflow-icon.svg" alt="skills image">
                            </div>
                            <h3 class="skills__name">Webflow</h3>
                            <span class="projects__subtitle">Five years</span>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <!--==================== SKILLS2 UI FOR LARGER SCREENS ====================-->
        <section class="skills2 section" id="experience2">
            <h2 class="section__title">Experience</h2>
            <span class="section__subtitle"></span>

            <div class=" container flex section__border">
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
                                <img src="~/assets/images/html-1.svg" alt="skills image">
                            </div>
                        </div>
                        <div class="skills__data2">
                            <div class="skills__data">
                                <h3 class="skills__name">CSS</h3>
                                <span class="projects__subtitle">Five years</span>
                            </div>
                            <div class="skills__blob2 s2">
                                <img src="~/assets/images/css-3.svg" alt="skills image">
                            </div>
                        </div>
                        <div class="skills__data2">
                            <div class="skills__data">
                                <h3 class="skills__name">Javascript</h3>
                                <span class="projects__subtitle">Five years</span>
                            </div>
                            <div class="skills__blob2 s3">
                                <img src="~/assets/images/logo-javascript.svg" alt="skills image">
                            </div>
                        </div>
                        <div class="skills__data2">
                            <div class="skills__data p-l">
                                <h3 class="skills__name">Vue JS</h3>
                                <span class="projects__subtitle">Five years</span>
                            </div>
                            <div class="skills__blob2 s4">
                                <img src="~/assets/images/vue-9.svg" alt="skills image">
                            </div>
                        </div>

                    </div>
                </div>
                    <div class="skills__blob-large">
                        <div class="skills__blob-inset">
                            <div class="skills__blob-inset-img">
                                <img src="~/assets/images/logo2.svg" alt="242 logo">
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
                                <img src="~/assets/images/git-icon.svg" alt="skills image">
                            </div>
                            <div class="skills__data p-r">
                                <h3 class="skills__name">GIT</h3>
                                <span class="projects__subtitle">Three years</span>
                            </div>

                        </div>
                        <div class="skills__data2">
                            <div class="skills__blob2 s6">
                                <img src="~/assets/images/wordpress-icon-1.svg" alt="skills image">
                            </div>
                            <div class="skills__data p-l">
                                <h3 class="skills__name">Wordpress</h3>
                                <span class="projects__subtitle">Four years</span>
                            </div>
                        </div>
                        <div class="skills__data2">
                            <div class="skills__blob2 s7">
                                <img src="~/assets/images/webflow-icon.svg" alt="skills image">
                            </div>
                            <div class="skills__data p-r p-l">
                                <h3 class="skills__name">Webflow</h3>
                                <span class="projects__subtitle">Five years</span>
                            </div>
                        </div>

                         <div class="skills__data2 p-r">
                            <div class="skills__blob2 s8">
                                <img src="~/assets/images/google-search-ads.svg" alt="skills image">
                            </div>
                            <div class="skills__data">
                                <h3 class="skills__name">SEO</h3>
                                <span class="projects__subtitle">Five years</span>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </section>



        <!--==================== CONTACT ====================-->
         <section class="contact section" id="contact">
            <h2 class="section__title">Contact Me</h2>
            <ContactForm/>
         </section>


        <ScrollToTop/>
    </main>
</template>

<script setup>
    import { useProjectStore } from '/stores/projectStore';
    import gsap from 'gsap'; 
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);
    const { $posthog } = useNuxtApp()
    if ($posthog) {
        const posthog = $posthog()
        posthog.capture('<event_name>')
    }
    const projectStore = useProjectStore();

    const getProject =  projectStore.getProject();

    useHead({
        title: 'Web Developer & Webflow Developer in Lincoln, NE',
        meta: [
            { name: 'description', 
            content: 'Professional frontend web developer and Webflow expert based in Lincoln, NE. Specializing in responsive web design and custom development.'
            }
        ],
        meta: [
            { name: 'keywords', 
            content: 'Frontend Web Developer Lincoln NE, Webflow Developer Lincoln NE, Custom Web Development Lincoln, Responsive Web Design Lincoln NE, SEO strategist Lincoln NE'
            }
        ]

    })
const main = ref();
let ctx;

onMounted(() => {
  const fadeInElements = () => {
    // const image = document.querySelector('.home__perfil'); 
    const text = document.querySelectorAll('.home__title-1'); // Select the text element
    

    gsap.from(text, {
      duration: 2,
      ease: "power4.out",
      y: 65,
      stagger: 0.2,
      delay: 0.3 // Adding a slight delay for a staggered effect
    });
  };


  fadeInElements(); // Trigger the fading in of elements

});

</script>

<style scoped>
article{
    margin-bottom: 30px;
}
/* .home__perfil{
    animation: fadeIn 1s ease-in-out
} */

.home__title-1{
    animation: fade 1s ease-in-out
}

@keyframes fadeIn{
    0%{
        opacity: 0;
    }
}

@keyframes fade{
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    /* 75%{
        opacity: 0;
    } */
    100%{
        opacity: 1;
    }
}

</style>