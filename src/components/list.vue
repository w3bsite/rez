<template>
  <div>
    list component<br />
    <div class="container" v-for="(u, i) in localuserslist" :key="i">
      <div>
        {{ u.id }}
      </div>
      <div>
        {{ u.name }}
      </div>
      <div>
        {{ u.lastname }}
      </div>
      <div>
        {{ u.country }}
      </div>
      <div>
        {{ u.date }}
      </div>
      {{ u.flag }}
    </div>
  </div>
</template>

<script>
export default {
  props: { userslist: { type: Array } },
  data() {
    return {
      // users: JSON.parse(localStorage.getItem("userdata")),
      localuserslist: [],
    };
  },
  mounted() {
    if (localStorage.localuserslist) {
      this.localuserslist = JSON.parse(localStorage.getItem("userdata"));
    }
    // this.localuserslist = JSON.parse(localStorage.getItem("userdata"));
  },
  watch: {},
};
</script>

<style>
</style>