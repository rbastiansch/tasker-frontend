<template>
  <div class="login">
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="text" v-model="email" name="email" />
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="email" v-model="password" name="password" />
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
  methods: {
    login() {
      const { email, password } = this;
      login(email, password)
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response);
        });
    },
  },
};
</script>
