<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  beforeCreate() {
    this.$router.push('/login');
  },
};
</script>
