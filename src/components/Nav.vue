<template>
  <ul id="menu" class="d-none d-sm-flex">
    <li
      v-for="item in menuItems"
      :key="item.url"
      :data-menuanchor="item.url"
      class="active"
    >
      <a :href="`#${item.url}`">{{ item.title }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["menuItems"],
};
</script>
<style  scoped>
#menu {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 70;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  letter-spacing: 1px;
  font-size: 1.1em;
}
#menu li {
  display: inline-block;
  margin: 10px 0;
  position: relative;
}
#menu a {
  text-decoration: none;
  font-weight: bold;
  color: #000;
  padding: 0 1.1em 1.1em 1.1em;
}
#menu li.active a:after,
#menu li a:hover:after {
  content: "";
  margin: 0 1.1em 0 1.1em;
  height: 2px;
  background: #000;
  display: block;
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  display: block;
}
</style>