<template>
    <div class="seo-services">
        <div class="services-intro">
            <h6>COMPREHENSIVE SEO SERVICES</h6>
            <h2>Boost Your Online Visibility</h2>
            <p class="intro-text">Our comprehensive SEO and digital marketing services help small businesses in Lincoln and beyond reach their target audience and grow their online presence.</p>
        </div>

        <div class="services-grid">
            <div class="content-box">
                <div class="left"><small>01</small><span></span></div>
                <div class="right">
                    <h4>LOCAL SEO OPTIMIZATION</h4>
                    <p>Target local customers in Lincoln and surrounding areas with optimized content.</p>
                    <ul>
                        <li>Local keyword research</li>
                        <li>Google Maps optimization</li>
                        <li>Local business schema</li>
                        <li>Location-based content</li>
                    </ul>
                </div>
            </div>

            <div class="content-box">
                <div class="left"><small>02</small><span></span></div>
                <div class="right">
                    <h4>PERFORMANCE ANALYTICS</h4>
                    <p>Track and improve your website's performance with detailed insights.</p>
                    <ul>
                        <li>Traffic analysis</li>
                        <li>Conversion tracking</li>
                        <li>User behavior insights</li>
                        <li>Performance metrics</li>
                    </ul>
                </div>
            </div>

            <div class="content-box">
                <div class="left"><small>03</small><span></span></div>
                <div class="right">
                    <h4>TECHNICAL SEO</h4>
                    <p>Ensure your website follows SEO best practices and technical standards.</p>
                    <ul>
                        <li>Site structure optimization</li>
                        <li>Speed optimization</li>
                        <li>Mobile responsiveness</li>
                        <li>Schema markup</li>
                    </ul>
                </div>
            </div>

            <div class="content-box">
                <div class="left"><small>04</small><span></span></div>
                <div class="right">
                    <h4>CONTENT STRATEGY</h4>
                    <p>Develop engaging content that ranks well and converts visitors.</p>
                    <ul>
                        <li>Keyword research</li>
                        <li>Content planning</li>
                        <li>On-page optimization</li>
                        <li>Content performance tracking</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="cta-section">
            <h6>IMPROVE YOUR RANKINGS</h6>
            <h2>Ready to Boost Your Online Presence?</h2>
            <p>Let's develop a custom SEO strategy to help your business grow online.</p>
            <NuxtLink to="#contact" class="cta-button">Get Started</NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
.seo-services {
    padding: 40px 0;
}

.services-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 60px;

    h6 {
        font-size: 18px;
        font-weight: 300;
        margin-bottom: 20px;
        color: var(--title-color);
    }

    h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        color: var(--title-color);
        font-family: var(--title-font);
    }
}

.intro-text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-color);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

.content-box {
    display: flex;
    gap: 30px;
    background: var(--container-color);
    padding: 40px;
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    .left {
        position: relative;
        min-width: 60px;

        small {
            font-size: 48px;
            font-weight: 700;
            color: var(--title-color);
            opacity: 0.1;
        }

        span {
            position: absolute;
            left: 0;
            top: 50%;
            width: 30px;
            height: 2px;
            background: var(--title-color);
            transform: translateY(-50%);
        }
    }

    .right {
        h4 {
            font-size: 1.2rem;
            margin-bottom: 15px;
            color: var(--title-color);
        }

        p {
            font-size: 0.95rem;
            line-height: 1.5;
            color: var(--text-color);
            margin-bottom: 20px;
        }

        ul {
            list-style: none;
            padding: 0;

            li {
                font-size: 0.95rem;
                color: var(--text-color);
                margin-bottom: 10px;
                padding-left: 20px;
                position: relative;

                &:before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--title-color);
                }
            }
        }
    }
}

.cta-section {
    text-align: center;
    background: var(--container-color);
    padding: 60px 20px;
    border-radius: 10px;

    h6 {
        font-size: 18px;
        font-weight: 300;
        margin-bottom: 20px;
        color: var(--title-color);
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        color: var(--title-color);
    }

    p {
        font-size: 1.1rem;
        margin-bottom: 30px;
        color: var(--text-color);
    }
}

.cta-button {
    display: inline-block;
    padding: 15px 30px;
    background: var(--title-color);
    color: var(--body-color);
    text-decoration: none;
    border-radius: 5px;
    font-weight: 600;
    transition: background-color 0.3s ease;

    &:hover {
        background: var(--title-color-dark);
    }
}

@media screen and (max-width: 768px) {
    .services-intro {
        h2 {
            font-size: 2rem;
        }
    }

    .intro-text {
        font-size: 1rem;
        padding: 0 20px;
    }

    .content-box {
        flex-direction: column;
        padding: 30px;

        .left {
            margin-bottom: 20px;
        }
    }
}
</style>