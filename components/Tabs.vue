<template>
  <div class="tabs">
    <div class="tab-headers">
      <button class="tab__item"
        v-for="(tab, index) in tabs" 
        :key="index" 
        :class="{ active: activeTab === index }" 
        @click="activeTab = index"
      >
        {{ tab.title }}
      </button>
    </div>
    <div class="tab-content">
      <component :is="tabs[activeTab].component"></component>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Dynamically import components
const WebDevServices = defineAsyncComponent(() => import('~/components/WebDevServices.vue'))
const SeoServices = defineAsyncComponent(() => import('~/components/SeoServices.vue'))
// Define your tabs with titles and components
const tabs = ref([
  { title: 'Web Development', component: WebDevServices },
  { title: 'SEO', component: SeoServices }
])

const activeTab = ref(0)
</script>

<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.tab-headers {
  display: flex;
  justify-content: space-between;
  /* flex-wrap:wrap; */
  margin-bottom: 60px;
  width:100%;
  gap: 1rem;
}
.resume-tab .nav-item {
    width: 100%;
    margin-bottom: 35px;
}
.tab-headers button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  width: 100%;
  background: #f0f0f0;
  border-radius: 5px;
  font-size: var(--biggest-font-size);
  font-family: var(--title-font);
  /* display: block; */
  transition: background 0.3s;
}
.tab-headers button.active {
    background: var(--title-color);
      color: var(--body-color);
}
.tab-content {
  margin-top: 1rem;
  width: 100%;
}
</style>
