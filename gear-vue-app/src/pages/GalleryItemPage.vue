<template>
  <div class='page-wrapper'>
    <header>
      Details
    </header>
    <div v-if="this.itemData">
      <h2>Gear constructed for {{this.itemData.wrestler}}</h2>
      <div class="photo-container">
      <div :key="photo.index" v-for="photo in this.itemData.gallery_photo_items" class="detail-page-photo">
        <img :src="photo">
      </div>
      </div>
    </div>
    <div v-else>
      Loading details...
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'GalleryItemPage',
    data: () => ({
      itemData: null
    }),
    mounted() {
      this.getItemDetails()
    },
    methods: {
        async getItemDetails() {
          const res = await axios.get(`http://localhost:8000/galleryitems/${this.$route.params.galleryitem_id}`)
          this.itemData = res.data
      },
    }
  }
</script>