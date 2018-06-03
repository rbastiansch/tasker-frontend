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
        <button class="button is-link" type="button" v-on:click="saveProject">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createProject, getProject, updateProject } from '@/services/projects';

export default {
  name: 'ProjectItem',
  props: ['id'],
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
  mounted() {
    this.loadProject();
  },
  methods: {
    saveProject() {
      const { title, description, tasks } = this;
      const user = this.user;
      const data = { title, description, user, tasks };
      const { token } = this;
      const { id } = this;
      if (!id) {
        createProject(token, data)
          .then(() => {
            Object.assign(this.$data, this.$options.data());
            this.$router.go(-1);
          }).catch((err) => {
            // eslint-disable-next-line
            console.error(err);
          });
      } else {
        updateProject(token, id, data);
      }
    },
    loadProject() {
      if (!this.id) {
        return;
      }
      const { token, id } = this;
      getProject(token, id)
        .then((response) => {
          const { title, description } = response.data.project;
          this.title = title;
          this.description = description;
        });
    },
  },
};
</script>
