import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.css" ;  // bootstrap 5 css
import "bootstrap/dist/js/bootstrap.bundle.js" ;  // bootstrap 5 css




// import HomeNav from '@/components/navs/HomeNav.vue';
// import HeroContent from '@/components/hero/HeroContent.vue';
// import GetStartedForm from '@/components/forms/GetStartedForm.vue';
// import HomeSection from '@/components/home-section/HomeSection.vue';
// import HomeSectionHeadings from '@/components/home-section/HomeSectionHeadings.vue';
// import BaseAccordion from '@/components/ui/accordion/BaseAccordion.vue';
// import Footer from '@/components/footer/Footer.vue';

createApp(App).use(store).use(router).mount('#app')
