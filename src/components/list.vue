<template>
  <div>
    <ul class="pagination justify-content-center" style="margin: 20px 0">
      <li v-for="p in itotalpages" :key="p" class="page-item">
        <button class="page-link" @click="pageNumber = p">{{ p }}</button>
      </li>
    </ul>
    <div class="container">
      <h2>جدول کاربران</h2>

      <table class="table table-bordered">
        <thead>
          <tr>
            <th>ردیف</th>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>سن کاربر</th>
            <th>کشور</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(u, i) in paginatedData" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ u.name }}</td>
            <td>{{ u.lastname }}</td>
            <td>{{ now - u.date }}</td>

            <td>{{ u.country }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import moment from "jalali-moment";
export default {
  props: { userslist: { type: Array } },
  data() {
    return {
      // users: JSON.parse(localStorage.getItem("userdata")),
      localuserslist: [],
      pageNumber: 1,
      limit: 5,
      size: 10,
    };
  },
  mounted() {
    if (localStorage.localuserslist) {
      this.localuserslist = JSON.parse(localStorage.getItem("userdata"));
    }
    // this.localuserslist = JSON.parse(localStorage.getItem("userdata"));
  },
  methods: {},

  computed: {
    now: function () {
      return moment(moment.now()).format("YYYY");
    },
    // calculating  the range of games to show in a page (ipage,ilimt)
    // first argument in the range - start
    ipage() {
      return (this.pageNumber - 1) * this.limit;
    },
    // secound argument in the range - end
    ilimit() {
      return this.ipage + this.limit;
    },
    paginatedData() {
      return this.userslist.slice(this.ipage, this.ilimit);
    },
    // number of games
    itotal() {
      if (this.userslist) {
        return this.userslist.length;
      } else {
        return null;
      }
    },
    // number of pages
    itotalpages() {
      return this.itotal ? Math.ceil(this.itotal / this.limit) : null;
    },
  },
};
</script>

<style>
</style>