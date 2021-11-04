<template>
  <div class="home">
    <div class="mainInfos">
      <h1 class="title">{{ infos.name }}</h1>
      <h2>
        {{ infos.premiered.slice(0, -6) }} - {{ infos.ended.slice(0, -6) }}
      </h2>

      <p>Status : {{ infos.status }}</p>

      <kinesis-container>
        <kinesis-element :strength="12" type="depth">
          <img
            :src="img"
            alt="a poster of The X-Files with agent Mulder and agent Scully"
          />
        </kinesis-element>
      </kinesis-container>
    </div>

    <div class="about">
      <h2 class="title">About</h2>
      <!--
        data received contains "<p>" and "</p>",
        substring(3) removes "<p>"
        slice(0, -4) removes "</p>"
      -->
      <p>{{ infos.summary.substring(3).slice(0, -4) }}</p>
      <p>
        This is a tv show from the {{ infos.network.country.name }}. It aired in
        the network {{ infos.network.name }} and is rated an average of
        {{ infos.rating.average }}/10.
      </p>
      <h3 class="title">Genres</h3>
      <ul class="genres">
        <li class="genre" v-for="genre in infos.genres" :key="genre">
          {{ genre }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TheHome",
  created() {
    this.getInfos();
    this.getImg();
  },
  data() {
    return {
      infos: [],
      img: "",
    };
  },
  methods: {
    getInfos() {
      axios
        .get("https://api.tvmaze.com/shows/430")
        .then((response) => {
          console.log(response.data);
          return (this.infos = response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getImg() {
      axios
        .get("https://api.tvmaze.com/shows/430/images")
        .then((response) => {
          console.log(response.data[2]);
          this.img = response.data[2].resolutions.medium.url;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/vars.scss";

.home {
  width: 80%;
  margin: 0 auto;
}

.mainInfos {
  text-align: center;
}

.title {
  font-family: $titleFont;
  margin-top: 3rem;
}

.about {
  margin: 2rem 0;
}

.genres {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}

.genres li {
  width: fit-content;
  list-style: none;
  margin-right: 1rem;
}

img {
  border-radius: 3px;
}
</style>
