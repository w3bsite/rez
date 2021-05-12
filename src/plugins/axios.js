import axios from "axios";
import Vue from "vue";

Vue.prototype.$url = "https://restcountries.eu";

Vue.prototype.$urlnews =
  "https://www.sargarme.com/wp-json/wp/v2/posts?category=55";

Vue.prototype.$api = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/all",
});

Vue.prototype.$axios = axios.create({});
