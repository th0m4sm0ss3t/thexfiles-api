<template>
  <div class="episodes">
    <h1 class="title">Episodes List</h1>
    <table>
      <thead>
        <tr class="tableNames">
          <th class="episodeSeason">Season</th>
          <th class="episodeAir">Air date</th>
          <th class="episodeNb">Episode number</th>
          <th class="episodeName">Episode name</th>
          <th class="episodeDuration">Episode duration</th>
          <th class="episodeSummary">Episode summary</th>
          <th class="episodeRating">Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="episode in episodeList" :key="episode.id">
          <td data-label="season">{{ episode.season }}</td>
          <td data-label="airdate">{{ episode.airdate }}</td>
          <td data-label="number">{{ episode.number }}</td>
          <td data-label="runtime">{{ episode.runtime }} minutes</td>
          <td data-label="name">"{{ episode.name }}"</td>
          <td data-label="summary">
            {{ episode.summary.substring(3).slice(0, -4) }}
          </td>
          <td data-label="rating">{{ episode.rating.average }}/10</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EpisodesList",
  created() {
    this.getEpisodes();
  },
  data() {
    return {
      episodeList: [],
    };
  },
  methods: {
    getEpisodes() {
      axios
        .get("https://api.tvmaze.com/shows/430/episodes")
        .then((response) => {
          console.log(response.data);
          this.episodeList = response.data;
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
.episodes {
  width: 90%;
  margin: 0 auto;
}

.title {
  font-family: $titleFont;
  margin-top: 3rem;
  text-align: center;
}

table {
  border: 2px solid $light;
  margin: 3rem 0;
}

th {
  border: 2px solid $dark;
  background: $light;
  color: $dark;
  font-family: $titleFont;
  padding: 0.8rem;
  text-align: center;
}

td {
  border: 2px solid $light;
  text-align: center;
  padding: 0.8rem;
}

/* Small screen */
@media only screen and (max-width: 800px) {
  thead {
    display: none;
  }
  tr {
    display: block;
    margin-bottom: 40px;
  }
  td {
    display: block;
    text-align: right;
  }
  td:before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
  }
}

</style>
