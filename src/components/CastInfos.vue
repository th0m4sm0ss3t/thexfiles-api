<template>
  <div class="cast">
    <h2 class="title">Cast infos</h2>
    <div
      class="card"
      style="width: 20rem"
      v-for="person in castInfos"
      :key="person.id"
    >
      <kinesis-container>
        <h3 class="card-title name">{{ person.person.name }}</h3>
        <h4 class="card-subtitle mb-2 text-muted">
          {{ person.person.birthday }}
        </h4>
        <h4 class="card-subtitle mb-2 text-muted">
          {{ person.person.country.name }}
        </h4>
        <kinesis-element :strength="12" type="depth">
          <img
            :src="person.person.image.medium"
            class="card-img-top"
            :alt="person.person.name"
          />
        </kinesis-element>
        <kinesis-element :strength="10">
          <div class="card-body">
            <h4 class="card-title">{{ person.character.name }}</h4>
          </div>
        </kinesis-element>
      </kinesis-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CastInfos",
  created() {
    this.getCast();
  },
  data() {
    return {
      castInfos: [],
    };
  },
  methods: {
    async getCast() {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/shows/430/cast"
        );
        console.log(response.data);
        this.castInfos = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/vars.scss";

.cast {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.title {
  width: 100%;
  text-align: center;
  font-family: $titleFont;
  margin: 3rem 0;
  color: $light;
}

.card {
  margin: 1rem;
}

.card-title {
  color: $dark;
}

.card-subtitle {
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
}

.card-img-top {
  width: 70%;
  position: relative;
  left: 15%;
  border-radius: 3px;
}

.name {
  color: $color;
  font-family: $titleFont;
  text-align: center;
  padding: 1rem 0;
}
</style>
