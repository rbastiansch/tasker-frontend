<template>
  <div v-if="hasToken">
  <ListProject />
  </div>
</template>

<script>
import ListProject from './ListProject';

export default {
  name: 'Home',
  components: {
    ListProject,
  },
  computed: {
    hasToken() {
      return this.$store.state.token;
    },
  },
  mounted() {
    if (!this.hasToken) {
      this.$router.push('/login');
    }
  },
};
</script>
