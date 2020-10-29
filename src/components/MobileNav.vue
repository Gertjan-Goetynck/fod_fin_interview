<template>
  <v-bottom-navigation fixed class="d-flex d-sm-none">
    <v-btn
      v-for="item in menuItems"
      :key="item.url"
      :value="item.url"
      :href="`#${item.url}`"
    >
      <span>{{ item.title }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  props: ["menuItems"],

  data: () => ({ value: "recent" }),
};
</script>
<style scoped>
a {
  display: block;
}
</style>