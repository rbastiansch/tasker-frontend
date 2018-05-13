<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <label class="label">Project Name</label>
        <div class="control">
          <input class="input" type="text" v-model="title" />
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea class="textarea" v-model="description" />
        </div>
      </div>
      <div class="field">
        <button class="button" type="button" v-on:click="createProject">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createProject } from '@/services/projects';

export default {
  name: 'CreateProject',
  data() {
    return {
      title: '',
      description: '',
      tasks: [],
    };
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    createProject() {
      const { title, description, tasks } = this;
      const user = this.user;
      const data = { title, description, user, tasks };
      const { token } = this;
      createProject(token, data)
        .then(() => {
        }).catch((err) => {
          // eslint-disable-next-line
          console.error(err);
        });
    },
  },
};
</script>
