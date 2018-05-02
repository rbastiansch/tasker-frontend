<template>
  <div v-if="hasToken">You are logged successfully</div>
</template>

<script>
export default {
  name: 'Home',
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
