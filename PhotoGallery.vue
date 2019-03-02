<template>
    <div class="photo-gallery">
        <div class="photo-main">
            <img
                class="photo-main-image"
                v-if="mainImage"
                @click="showLightbox(mainImage.name)"
                :src="mediumDir + mainImage.name"
            />
        </div>
        <div
            class="photo-thumbnails"
            v-if="randomThumbs"
        >
            <img
                class="photo-thumbnail"
                v-for="image in randomThumbs"
                :key="image.name"
                @click="showLightbox(image.name)"
                :src="thumbnailDir + image.name"
            />
        </div>
        <lightbox
            id="mylightbox"
            ref="lightbox"
            :images="images"
            :directory="imagesDir"
            :timeoutDuration="5000"
        />
    </div>
</template>

<script>
    import fetch from 'node-fetch'
    import LightBox from 'vue-my-photos'

    export default {
        name: "PhotoGallery",
        components: {
            'lightbox': LightBox,
        },
        data() {
            return {
                images: []
            }
        },
        props: {
            hideMainImage: {
                type: Boolean,
                default: false,
            },
            imagesDir: {
                type: String,
                default: "/images/",
            },
        },
        computed: {
            mainImage() {
                if (this.hideMainImage || this.images.length === 0) {
                    return false
                }
                return this.randomImage()
            },
            mediumDir() {
                return this.imagesDir + '_medium/'
            },
            randomThumbs() {
                if (this.images.length === 0) {
                    return false
                }
                let thumbs = []
                for (let i=0; (i<5 && i < this.images.length); i++) {
                    thumbs.push(this.randomImage())
                }
                return thumbs
            },
            thumbnailDir() {
                return this.imagesDir + '_thumbs/'
            },
        },
        methods: {
            getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max))
            },
            randomImage() {
                return this.images[this.getRandomInt(this.images.length-1)]
            },
            showLightbox(imageName) {
                this.$refs.lightbox.show(imageName)
            },
        },
        mounted() {
            fetch(this.imagesDir + 'manifest.json')
                .then(res => res.json())
                .then(json => this.images = json)
        },
    }
</script>

<style>
    .photo-gallery {
        max-width: 555px;
    }
    .photo-main {
        display: flex;
        justify-content: space-evenly;
        cursor: pointer;
    }
    .photo-main-image {
        max-width: 100%;
        align-self: center;
    }
    .photo-thumbnails {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .photo-thumbnail {
        cursor: pointer;
    }

    /* Include vue-my-photos css here since otherwise it won't work */
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .9);
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 200;
        color: rgba(255,255,255,0.8);
    }
    .lightbox-close {
        position: fixed;
        z-index: 210;
        right: 0;
        top: 0;
        padding: 1rem;
        font-size: 1.7rem;
        cursor: pointer;
        width: 4rem;
        height: 4rem;
        color: white;
    }
    .lightbox-main {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        width: 100%;
        height: 100%;
    }
    .lightbox-arrow {
        padding: 0 2rem;
        cursor: pointer;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        padding: 0 2rem;
        height: 100%;
        width: 2rem;
        z-index: 100;
    }
    .lightbox-arrow-right { right: 0;
    }
    .lightbox-arrow-left { left: 0;
    }
    .lightbox-image-container {
        -webkit-box-flex: 1;
        width: 20%;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .lightbox-image {
        width: 100%;
        height: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }
    .lightbox-caption {
        position: absolute;
        bottom: 15px;
        width: 100%;
        z-index: 100;
        text-align: center;
        text-shadow: 1px 1px 3px rgb(26, 26, 26);
    }
    .lightbox-caption span {
        border-radius: 12px;
        background-color: rgba(0, 0, 0, .6);
        padding: 2px 10px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .lightbox-slide-enter-active,
    .lightbox-slide-leave-active {
        transition: all 0.4s ease;
    }
    .lightbox-slide-enter {
        -webkit-transform: translateX(100px);
        -ms-transform: translateX(100px);
        transform: translateX(100px);
        opacity: 0;
    }
    .lightbox-slide-leave-to {
        -webkit-transform: translateX(-100px);
        -ms-transform: translateX(-100px);
        transform: translateX(-100px);
        opacity: 0;
    }
    .lightbox-fade-enter-active,
    .lightbox-fade-leave-active {
        transition: all 0.4s ease;
    }
    .lightbox-fade-enter,
    .lightbox-fade-leave-to {
        opacity: 0;
    }

</style>
