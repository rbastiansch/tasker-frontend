<template>
  <div class="login">
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" name="email" v-model="email" />
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="password" name="password"
               v-model="password" v-on:keyup.enter="login"
        />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-link" type="button" name="login" v-on:click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import login from '@/services/login';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    token() {
      return this.$store.state;
    },
  },
  methods: {
    login() {
      const { email, password } = this;
      login(email, password)
        .then((response) => {
          const { token } = response.data;
          const { _id } = response.data.user;
          const info = { token, _id };
          this.setLogin(info);
        });
    },
    setLogin(info) {
      this.$store.dispatch('signin', { info });
      this.$router.push('/');
    },
  },
};
</script>
