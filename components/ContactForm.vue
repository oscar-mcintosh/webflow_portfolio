<template>
    <div class="contact__container container grid section__border">
        <div class="contact__content">
            <h3 class="contact__title">
                <i class="ri-chat-3-line"></i>Talk to me
            </h3>
            <div class="contact__info">
                <!-- <div class="contact__data">
                    <span class="contact__data-title">Phone</span>
                    <span class="contact__data-info"></span>
                </div> -->
                <!-- <div class="contact__data">
                    <span class="contact__data-title">Email</span>
                    <span class="contact__data-info">oscarmcintosh1@gmail.com</span>

                </div> -->

            </div>
        </div>
        <div class="contact__content">
            <h3 class="contact__title">
                <i class="ri-send-plane-line"></i>If you have a porject or need help, contact me.
            </h3>
            <form name="contact" netlify method="POST" data-netlify-recaptcha="true" data-netlify="true" class="contact__form" id="contact-form">
                <div class="contact__form-div">
                    <label class="contact__form-tag">Name</label>
                    <input type="text" name="name" required placeholder="Your name" class="contact__form-input" id="contact-name">
                </div>
                <div class="contact__form-div">
                    <label class="contact__form-tag">Email</label>
                    <input type="text" name="email" required placeholder="Your email" class="contact__form-input" id="contact-email">
                </div>
                <div class="contact__form-div contact__form-area">
                    <label class="contact__form-tag">Project</label>
                    <textarea name="message" placeholder="Your message" id="contact-project" class="contact__form-input"></textarea>
                </div>
                <div data-netlify-recaptcha="true"></div>
                <button type="submit" class="contact__button">
                    Submit <i class="ri-arrow-right-up-line"></i>
                </button>
                
            </form>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
