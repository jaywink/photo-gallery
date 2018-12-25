<template>
    <div class="photo-gallery">
        <div class="photo-main">
            <img
                class="photo-main-image"
                v-if="mainImage"
                @click="showLightbox(mainImage.name)"
                :src="imagesDir + mainImage.name"
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
        computed: {
            imagesDir() {
                return "https://kakaravaara.fi/media/photogallery/"
            },
            mainImage() {
                if (this.images.length === 0) {
                    return false
                }
                return this.randomImage()
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

<style scoped>
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
</style>
