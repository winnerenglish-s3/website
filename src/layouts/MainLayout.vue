<template >
  <q-layout view="lHh Lpr lFf">
    <q-resize-observer @resize="onResize" />
    <div v-if="innerWidth > 1023">
      <q-header class="bg-white q-py-xs">
        <q-toolbar class="row justify-center">
          <div class="row justify-between" style="width:100%;max-width: 1200px;">
            <div class="self-center row">
              <router-link
                to="/"
                @click="tab = 'home'"
                :class="{'clblue1':tab == 'home','text-blue-grey-10':tab != 'home',}"
              >
                <div class="self-center q-px-md" @click="tab = 'home'">
                  <q-img src="../statics/image/logo-winner.png" style="width:100px;" />
                </div>
              </router-link>
              <div class="self-center">
                <q-tabs class="titilebold" align="justify" narrow-indicator dense v-model="tab">
                  <router-link
                    class="text-decoration"
                    :class="{'clblue1':tab == 'home','text-blue-grey-10':tab != 'home',}"
                    to="/"
                    @click="tab = 'home'"
                  >
                    <q-tab name="home">
                      <span>หน้าแรก</span>
                    </q-tab>
                  </router-link>
                  <router-link
                    class="text-decoration"
                    :class="{'clblue1':tab == 'discovery','text-blue-grey-10':tab != 'discovery',}"
                    to="/discovery"
                    @click="tab = 'discovery'"
                  >
                    <q-tab name="discovery">
                      <span>คอร์สออนไลน์</span>
                    </q-tab>
                  </router-link>

                  <router-link
                    class="text-decoration"
                    :class="{'clblue1':tab == 'adventures','text-blue-grey-10':tab != 'adventures',}"
                    to="/adventures"
                    @click="tab = 'adventures'"
                  >
                    <q-tab name="adventures">
                      <span>คอร์สสําหรับโรงเรียน</span>
                    </q-tab>
                  </router-link>

                  <router-link
                    class="text-decoration"
                    :class="{'clblue1':tab == 'onet','text-blue-grey-10':tab != 'onet',}"
                    to="/o-net"
                    @click="tab ='onet'"
                  >
                    <q-tab name="onet">
                      <span>คอร์สติว O-NET</span>
                    </q-tab>
                  </router-link>

                  <router-link
                    class="text-decoration"
                    :class="{'clblue1':tab == 'aboutus','text-blue-grey-10':tab != 'aboutus',}"
                    to="/aboutus"
                    @click="tab ='aboutus'"
                  >
                    <q-tab name="aboutus">
                      <span>เกี่ยวกับเรา</span>
                    </q-tab>
                  </router-link>
                </q-tabs>
              </div>
            </div>
            <!--   v-if="tab =='home'||tab =='discovery'||tab =='adventures'||tab =='onet'" -->
            <div class="self-center q-px-sm">
              <q-btn
                push
                unelevated
                class="q-px-md bgblue2 text-white"
                rounded
                @click="login()"
                to="/loginhome"
              >
                <span class="text-h5 text-white">เข้าสู่ระบบ</span>
              </q-btn>
            </div>
          </div>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
    <div v-if="innerWidth < 1024">
      <q-header class="bg-white q-py-xs">
        <q-toolbar class="row justify-center">
          <div class="row" style="width:100%;max-width: 1200px;">
            <div>
              <div class="self-center">
                <q-btn
                  flat
                  @click="leftDrawerOpen = !leftDrawerOpen"
                  class="clblue1"
                  round
                  size="lg"
                  dense
                  icon="menu"
                />
              </div>
            </div>
            <div class="self-center q-pr-xl col text-center">
              <router-link
                to="/"
                @click="tab = 'home'"
                :class="{'clblue1':tab == 'home','text-blue-grey-10':tab != 'home',}"
              >
                <div class="self-center" @click="tab = 'home'">
                  <q-img src="../statics/image/logo-winner.png" style="width:100px;" />
                </div>
              </router-link>
            </div>
          </div>
        </q-toolbar>
      </q-header>
      <q-drawer
        v-model="leftDrawerOpen"
        :width="300"
        :breakpoint="1023"
        overlay
        bordered
        content-class="bg-white"
      >
        <q-scroll-area class="fit">
          <div align="center">
            <div class="q-pt-md q-pb-sm">
              <q-img src="../statics/image/logo-winner.png" style="width:100px;" />
            </div>
            <q-separator />
          </div>
          <q-list class="text-body1">
            <q-item
              clickable
              v-ripple
              to="/"
              @click="tab = 'home',leftDrawerOpen = false"
              :class="{'clblue1':tab == 'home','text-blue-grey-7':tab !='home'}"
            >
              <q-item-section class="font q-px-md q-py-sm">หน้าแรก</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-ripple
              to="/discovery"
              @click="tab = 'discovery',leftDrawerOpen = false"
              :class="{'clblue1':tab == 'discovery','text-blue-grey-7':tab !='discovery'}"
            >
              <q-item-section class="font q-px-md q-py-sm">คอร์สออนไลน์</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-ripple
              to="/adventures"
              @click="tab = 'adventures',leftDrawerOpen = false"
              :class="{'clblue1':tab == 'adventures','text-blue-grey-7':tab !='adventures'}"
            >
              <q-item-section class="font q-px-md q-py-sm">คอร์สสําหรับโรงเรียน</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-ripple
              to="/o-net"
              @click="tab = 'onet',leftDrawerOpen = false"
              :class="{'clblue1':tab == 'onet','text-blue-grey-7':tab !='onet'}"
            >
              <q-item-section class="font q-py-sm q-px-md">คอร์สติว O-NET</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-ripple
              to="/aboutus"
              @click="tab = 'aboutus',leftDrawerOpen = false"
              :class="{'clblue1':tab == 'aboutus','text-blue-grey-7':tab !='aboutus'}"
            >
              <q-item-section class="font q-py-sm q-px-md">เกี่ยวกับเรา</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-ripple
              to="/loginhome"
              @click="tab = 'login',leftDrawerOpen = false"
              :class="{'clblue1':tab == 'login','text-blue-grey-7':tab !='login'}"
            >
              <q-item-section class="font q-py-sm q-px-md">เข้าสู่ระบบ</q-item-section>
            </q-item>
            <q-separator />
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";

export default {
  name: "MainLayout",
  components: {
    EssentialLink,
  },

  data() {
    return {
      tab: "home",
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      leftDrawerOpen: false,
    };
  },
  methods: {
    home() {
      this.$router.params = "/";
    },

    login() {
      this.tab = "login";
    },
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    },
  },
  watch: {
    "$route.name": function (data) {
      if (data == "home") {
        this.tab = "home";
      } else if (data == "discovery") {
        this.tab = "discovery";
      } else if (data == "adventures") {
        this.tab = "adventures";
      } else if (data == "o-net") {
        this.tab = "onet";
      } else if (data == "login") {
        this.tab = "login";
      }
    },
  },
  mounted() {
    if (this.$route.name == "home") {
      this.tab = "home";
    } else if (this.$route.name == "discovery") {
      this.tab = "discovery";
    } else if (this.$route.name == "adventures") {
      this.tab = "adventures";
    } else if (this.$route.name == "o-net") {
      this.tab = "onet";
    } else if (this.$route.name == "loginhome") {
      this.tab = "login";
    } else if (this.$route.name == "admin") {
      this.tab = "admin";
    } else if (
      this.$route.name == "tutorial01a" ||
      this.$route.name == "login" ||
      this.$route.name == "vocab" ||
      this.$route.name == "voting" ||
      this.$route.name == "grammar" ||
      this.$route.name == "language" ||
      this.$route.name == "phonics" ||
      this.$route.name == "translation" ||
      this.$route.name == "reading" ||
      this.$route.name == "user" ||
      this.$route.name == "score" ||
      this.$route.name == "file" ||
      this.$route.name == "game" ||
      this.$route.name == "manual" ||
      this.$route.name == "faq"
    ) {
      this.tab = "adventures";
    }
  },
};
</script>
<style  scoped>
.text-decoration {
  text-decoration: none;
}
.cltext {
  color: #6e6b6b;
}
</style>

// style="opacity: 0.85;"