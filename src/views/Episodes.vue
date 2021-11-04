<template>
  <div class="episode">
    <EpisodeList />
  </div>
</template>

<script>
// @ is an alias to /src
import EpisodeList from "@/components/EpisodeList.vue";

export default {
  name: "Home",
  components: {
    EpisodeList,
  },
};
</script>
