<template>
  <nav class="breadcrumb">
    <ul>
      <li v-for="(folder, index) in folders" :key="index">
        <a href="#" @click="navigateTo(index)">{{ folder }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BreadcrumbNav',
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  computed: {
    folders() {
      return this.path.split('/').filter(folder => folder);
    },
  },
  methods: {
    navigateTo(index) {
      const newPath = this.folders.slice(0, index + 1).join('/');
      this.$emit('navigate', newPath);
    },
  },
};
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
}
.breadcrumb ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.breadcrumb li {
  margin-right: 8px;
}
.breadcrumb a {
  text-decoration: none;
  color: blue;
}
.breadcrumb a:hover {
  text-decoration: underline;
}
</style>
