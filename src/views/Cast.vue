<template>
  <div class="cast">
    <CastInfos />
  </div>
</template>

<script>
// @ is an alias to /src
import CastInfos from "@/components/CastInfos.vue";

export default {
  name: "Home",
  components: {
    CastInfos,
  },
};
</script>
