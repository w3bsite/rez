<template>
  <div class="container">
    <add v-on:add-user-event="adduserItem"></add>

    <div class="card bg-primary text-white">
      <!-- <div class="card bg-dark text-white" v-for="(u, i) in users" :key="i">
        {{ u }}
      </div> -->
    </div>
    <div class="card bg-secondary text-white">
      <!-- <List ></List> -->
      <br />
      <router-view :userslist="users"></router-view>
    </div>
  </div>
</template>

<script>
import add from "../components/add.vue";
// import List from "../components/list.vue";
export default {
  name: "User",
  components: { add },
  data() {
    return { users: [] };
  },
  methods: {
    adduserItem(newuser) {
      this.users = [...this.users, newuser];
      localStorage.setItem("userdata", JSON.stringify(this.users));
      this.users = JSON.parse(localStorage.getItem("userdata"));
    },
  },
};
</script>

<style>
</style>