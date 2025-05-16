<template>
  <div class="web-dev-services">
    <div class="services-intro">
      <h6>PROFESSIONAL WEBFLOW DEVELOPMENT</h6>
      <h2>Transform Your Digital Presence</h2>
      <p class="intro-text">
        Based in Lincoln, NE, we specialize in bringing your web design visions
        to life through expert WebFlow development. Our services are tailored
        for small businesses and designers who want to create stunning,
        functional websites without compromising on quality or performance.
      </p>
    </div>

    <div class="services-grid">
      <div class="content-box">
        <div class="left"><small>01</small><span></span></div>
        <div class="right">
          <h4>FAST & EFFICIENT DEVELOPMENT</h4>
          <p>
            WebFlow's visual development platform enables rapid deployment of
            professional websites.
          </p>
          <ul>
            <li>Visual development</li>
            <li>Rapid prototyping</li>
            <li>Quick deployment</li>
            <li>Cost-effective solutions</li>
          </ul>
        </div>
      </div>

      <div class="content-box">
        <div class="left"><small>02</small><span></span></div>
        <div class="right">
          <h4>SECURE & RELIABLE</h4>
          <p>
            Enterprise-grade infrastructure ensures your website is always
            secure and up-to-date.
          </p>
          <ul>
            <li>SSL security</li>
            <li>Regular updates</li>
            <li>Performance optimization</li>
            <li>Scalable hosting</li>
          </ul>
        </div>
      </div>

      <div class="content-box">
        <div class="left"><small>03</small><span></span></div>
        <div class="right">
          <h4>MOBILE-FIRST DESIGN</h4>
          <p>
            Every website we build is optimized for all devices and screen
            sizes.
          </p>
          <ul>
            <li>Responsive design</li>
            <li>Touch-friendly</li>
            <li>Cross-browser compatibility</li>
            <li>Performance focused</li>
          </ul>
        </div>
      </div>

      <div class="content-box">
        <div class="left"><small>04</small><span></span></div>
        <div class="right">
          <h4>LOCAL SUPPORT</h4>
          <p>
            As a Lincoln-based developer, we provide personalized support and
            face-to-face meetings.
          </p>
          <ul>
            <li>In-person consultations</li>
            <li>Quick response times</li>
            <li>Ongoing maintenance</li>
            <li>Training & documentation</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <h6>START YOUR PROJECT</h6>
      <h2>Ready to Transform Your Web Presence?</h2>
      <p>
        Let's discuss how we can help bring your web project to life with
        professional WebFlow development services.
      </p>
      <NuxtLink to="#contact" class="cta-button">Get Started</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.web-dev-services {
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
