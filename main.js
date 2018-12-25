import Vue from 'vue'
import vueCustomElement from 'vue-custom-element'
import 'document-register-element/build/document-register-element'
import Lightbox from 'vue-my-photos'

import PhotoGallery from './PhotoGallery'

Vue.use(vueCustomElement)
Vue.component('lightbox', Lightbox)

Vue.customElement('photo-gallery', PhotoGallery)
