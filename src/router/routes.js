import User from "../views/User.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: User,
    children: [
      {
        path: "/user/add",
        name: "AddUser",
        component: () => import("../components/add"),
      },
      {
        path: "/user/list",
        name: "ListUser",
        component: () => import("../components/list"),
      },
      {
        path: "/user/edit/:userId",
        name: "EditUser",
        component: () => import("../components/edit"),
      },
    ],
  },
];

export default routes;
