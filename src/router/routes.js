const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),

    children: [
      {
        path: "/",
        component: () => import("pages/home.vue"),
        name: "home"
      },
      {
        path: "/discovery",
        component: () => import("pages/discovery.vue"),
        name: "discovery"
      },
      {
        path: "/adventures",
        component: () => import("pages/adventures.vue"),
        name: "adventures"
      },
      {
        path: "/business",
        component: () => import("pages/business.vue"),
        name: "business"
      },
      {
        path: "/businesshare",
        component: () => import("pages/businesshare.vue"),
        name: "businesshare"
      },
      {
        path: "/contact",
        component: () => import("pages/contact.vue"),
        name: "contact"
      },
      {
        path: "/o-net",
        component: () => import("pages/onet.vue"),
        name: "o-net"
      },
      {
        path: "/aboutus",
        component: () => import("pages/aboutus.vue"),
        name: "aboutus"
      },
      {
        path: "/hotel",
        component: () => import("pages/hotel.vue"),
        name: "hotel"
      },
      {
        path: "/loginhome",
        component: () => import("pages/loginhome.vue"),
        name: "loginhome"
      },
      {
        path: "/winnerdiscovery",
        component: () => import("pages/winnerdiscovery.vue"),
        name: "winnerdiscovery"
      },
      {
        path: "/winneradventures",
        component: () => import("pages/winneradventures.vue"),
        name: "winneradventures"
      },
      {
        path: "/winneronet",
        component: () => import("pages/winneronet.vue"),
        name: "winneronet"
      },
      {
        path: "/winnerwork",
        component: () => import("pages/winnerwork.vue"),
        name: "winnerwork"
      },
      {
        path: "/manual",
        component: () => import("pages/help_manual.vue"),
        name: "manual"
      },
      {
        path: "/faq",
        component: () => import("pages/help_faq.vue"),
        name: "faq"
      },
      {
        path: "/tutorial01a",
        component: () => import("pages/help_tutorial01a.vue"),
        name: "tutorial01a"
      },
      {
        path: "/login",
        component: () => import("pages/help_login.vue"),
        name: "login"
      },

      {
        path: "/voting",
        component: () => import("pages/help_voting.vue"),
        name: "voting"
      },

      {
        path: "/vocab",
        component: () => import("pages/help_vocab.vue"),
        name: "vocab"
      },
      {
        path: "/grammar",
        component: () => import("pages/help_grammar.vue"),
        name: "grammar"
      },

      {
        path: "/reading",
        component: () => import("pages/help_reading.vue"),
        name: "reading"
      },
      {
        path: "/customclass",
        component: () => import("pages/help_customclass.vue"),
        name: "customclass"
      },
      {
        path: "/phonics",
        component: () => import("pages/help_phonics.vue"),
        name: "phonics"
      },
      {
        path: "/translation",
        component: () => import("pages/help_translation.vue"),
        name: "translation"
      },
      {
        path: "/language",
        component: () => import("pages/help_language.vue"),
        name: "language"
      },
      {
        path: "/user",
        component: () => import("pages/help_user.vue"),
        name: "user"
      },
      {
        path: "/score",
        component: () => import("pages/help_score.vue"),
        name: "score"
      },
      {
        path: "/file",
        component: () => import("pages/help_file.vue"),
        name: "file"
      },
      {
        path: "/game",
        component: () => import("pages/help_game.vue"),
        name: "game"
      },
      {
        path: "/admin",
        component: () => import("pages/admin.vue"),
        name: "admin"
      },
      {
        path: "/tutor",
        component: () => import("pages/tutor.vue"),
        name: "tutor"
      }
    ]
  },
  {
    path: "/policy",
    component: () => import("pages/policy.vue"),
    name: "policy"
  },
  {
    path: "/condition",
    component: () => import("pages/condition.vue"),
    name: "condition"
  },
  {
    path: "/thankyou",
    component: () => import("pages/thankyou.vue"),
    name: "thankyou"
  },
  {
    path: "/test",
    component: () => import("pages/test.vue"),
    name: "test"
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
