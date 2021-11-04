<template>
  <div id="nav">
    <router-link to="/">About</router-link> |
    <router-link to="/cast">Cast</router-link> |
    <router-link to="/episodes">Episodes</router-link> |
    <router-link to="/gallery">Gallery</router-link> |
  </div>
  <router-view :key="$route.fullPath" />
</template>

<style lang="scss">
@import "@/assets/scss/vars.scss";

html {
  background: $dark;
}

#app {
  font-family: $font;
  background: $dark;
  color: $light;
  min-height: 100vh;
}

#nav {
  padding: 2rem;
  font-family: $titleFont;

  a {
    font-weight: bold;
    color: $light;
    text-decoration: none;

    &.router-link-exact-active {
      color: $color;
    }
  }

  a:hover {
    text-decoration: underline;
  }
}
</style>
