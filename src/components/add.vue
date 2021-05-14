<template>
  <div class="container">
    <button
      class="btn btn-primary fixed"
      style="right: 100px; top: 200ox"
      @click="() => (cardshow = !cardshow)"
    >
      فرم کاربر
    </button>
    <!-- addNew -->
    <div class="container card p-5" v-show="cardshow == true">
      <h3>کاربر جدید</h3>
      <p>با تکمیل فرم زیر کاربر مورد نظر خود را تعریف کنید.</p>
      <form @submit.prevent="adduserItem">
        <!-- name -->
        <div class="form-group">
          <label for="name">نام</label>
          <input
            v-model="formdata.name"
            type="text"
            class="form-control"
            id="un"
            name="name"
          />
        </div>
        <!-- lastName -->
        <div class="form-group">
          <label for="lastname">نام خانوادگی</label>
          <input
            v-model="formdata.lastname"
            type="text"
            class="form-control"
            id="ln"
            name="lastname"
          />
        </div>
        <!-- birthLocation -->
        <div class="form-group">
          <label for="country">کشور محل تولد</label>
          <select
            v-model="formdata.country"
            class="form-control"
            id="country"
            name="country"
          >
            <option v-for="(loc, i) in country" :key="i">
              {{ loc.name }}
            </option>
          </select>
        </div>
        <!-- <div class="form-group">
          <label for="country">کشور محل تولد</label>
          <input
            v-model="formdata.country"
            type="text"
            class="form-control"
            id="country"
            name="country"
          />
        </div> -->
        <datePicker
          v-model="formdata.date"
          format="YYYY"
          display-format="dddd jDD jMMMM jYYYY "
        ></datePicker>
        <button type="submit" class="btn btn-primary my-3">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
export default {
  components: { datePicker: VuePersianDatetimePicker },
  name: "addNew",
  data() {
    return {
      cardshow: true,
      date: "",
      formdata: { id: "", name: "", lastname: "", country: "", date: "" },
      userdata: [],
      newuser: [],
      country: [],
    };
  },
  mounted() {
    this.$api().then((r) => (this.country = r.data));
  },
  methods: {
    adduserItem: function () {
      //   this.userdata.push(this.formdata);
      this.formdata.id = Math.floor(Math.random() * 100);
      this.newuser = this.formdata;

      this.$emit("add-user-event", this.newuser);
      // localStorage.setItem("userdata", JSON.stringify(this.newuser));

      this.formdata = { id: "", name: "", lastname: "", country: "", date: "" };

      setTimeout(
        () =>
          this.$route.name == "ListUser"
            ? null
            : this.$router.push({ name: "ListUser" }),
        2000
      );
      setTimeout(() => (this.cardshow = false), 2100);
    },
  },
  computed: {},
};
</script>

<style>
</style>