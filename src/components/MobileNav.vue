<template>
  <v-bottom-navigation
    fixed
    grow
    :hide-on-scroll="true"
    class="d-flex d-sm-none"
    style="margin-top: 56px"
  >
    <v-btn
      v-for="item in menuItems"
      :key="item.url"
      :value="item.url"
      :href="`#${item.url}`"
      style="height: 100%"
    >
      <span>{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
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
.v-btn--active {
  color: #00a2a2 !important;
}
</style>