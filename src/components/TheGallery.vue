<template>
  <div class="gallery">
    <h1 class="title">Gallery</h1>
    <kinesis-container v-for="img in images" :key="img.id">
      <kinesis-element :strength="12" type="depth">
        <img :src="img.resolutions.medium.url" alt="poster of the X-files" />
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TheGallery",
  created() {
    this.getImg();
  },
  data() {
    return {
      images: [],
    };
  },
  methods: {
    getImg() {
      axios
        .get("https://api.tvmaze.com/shows/430/images")
        .then((response) => {
          console.log(response.data);
          this.images = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/vars.scss";
.gallery {
  width: 80%;
  margin: 0 auto 3rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.title {
  font-family: $titleFont;
  margin: 3rem 0;
  text-align: center;
  width: 100%;
}

img {
  margin: 0.5rem;
  border-radius: 3px;
}
</style>
