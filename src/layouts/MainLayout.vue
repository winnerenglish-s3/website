<template>
  <q-layout view="lHh Lpr lFf">
    <q-resize-observer @resize="onResize" />
    <div v-if="innerWidth > 1023">
      <q-header class="bg-white q-py-xs">
        <q-toolbar class="row justify-center">
          <div class="row justify-between" style="width: 100%; max-width: 1200px">
            <div class="self-center row">
              <router-link
                to="/"
                @click="tab = 'home'"
                :class="{
                  clblue1: tab == 'home',
                  'text-blue-grey-10': tab != 'home',
                }"
              >
                <div class="self-center q-px-sm" @click="tab = 'home'">
                  <q-img src="../statics/image/logo-winner.png" style="width: 100px" />
                </div>
              </router-link>
              <div class="self-center">
                <q-tabs
                  class="titilebold"
                  align="justify"
                  narrow-indicator
                  dense
                  v-model="tab"
                >
                  <!-- หน้าแรก -->
                  <router-link
                    class="text-decoration"
                    :class="{
                      clblue1: tab == 'home',
                      'text-blue-grey-10': tab != 'home',
                    }"
                    to="/"
                    @click="tab = 'home'"
                  >
                    <q-tab name="home">
                      <span>หน้าแรก</span>
                    </q-tab>
                  </router-link>
                  <!-- นักเรียน -->
                  <router-link
                    class="text-decoration"
                    :class="{
                      clblue1: tab == 'discovery',
                      'text-blue-grey-10': tab != 'discovery',
                    }"
                    to=""
                  >
                    <q-tab
                      name="discovery"
                      @mouseover="(selectStudent = true), (select = false)"
                      @click="selectStudent = false"
                    >
                      <span>สำหรับนักเรียน</span>

                      <q-menu v-model="selectStudent" @mouseleave="selectStudent = false">
                        <q-list align="center" style="width: 200px">
                          <q-item to="/discovery" clickable v-close-popup>
                            <q-item-section><b>Winner English</b></q-item-section>
                          </q-item>
                          <q-separator />
                          <q-item to="/tutor" @click="tab = 'adventures'" v-close-popup>
                            <q-item-section><b>Winner Tutor</b></q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-tab>
                  </router-link>
                  <!-- โรงเรียน -->
                  <router-link
                    class="text-decoration"
                    :class="{
                      clblue1: tab == 'adventures',
                      'text-blue-grey-10': tab != 'adventures',
                    }"
                    to=""
                  >
                    <q-tab
                      name="adventures"
                      @mouseover="(select = true), (selectStudent = false)"
                      @click="select = false"
                    >
                      <span>สําหรับโรงเรียน</span>
                      <q-menu v-model="select" @mouseleave="select = false">
                        <q-list align="center" style="width: 200px">
                          <q-item to="/adventures" clickable v-close-popup>
                            <q-item-section><b>Winner Adventures</b></q-item-section>
                          </q-item>
                          <q-separator />
                          <q-item to="/o-net" @click="tab = 'adventures'" v-close-popup>
                            <q-item-section><b>Winner O-net</b></q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-tab>
                  </router-link>
                  <!-- ธุรกิจ -->
                  <router-link
                    class="text-decoration"
                    :class="{
                      clblue1: tab == 'hotel',
                      'text-blue-grey-10': tab != 'hotel',
                    }"
                    to="/hotel"
                    @click="tab = 'hotel'"
                  >
                    <q-tab name="hotel">
                      <span>สำหรับธุรกิจ</span>
                    </q-tab>
                  </router-link>
                  <!-- ร่วมธุรกิจ -->
                  <!-- <router-link
                    class="text-decoration"
                    :class="{
                      clblue1: tab == 'businesshare',
                      'text-blue-grey-10': tab != 'businesshare'
                    }"
                    to="/businesshare"
                    @click="tab = 'businesshare'"
                  >
                    <q-tab name="businesshare">
                      <span>สนใจร่วมธุรกิจ</span>
                    </q-tab>
                  </router-link> -->
                  <!-- ติดต่อเรา -->
                  <router-link
                    class="text-decoration"
                    :class="{
                      clblue1: tab == 'contact',
                      'text-blue-grey-10': tab != 'contact',
                    }"
                    to="/contact"
                    @click="tab = 'contact'"
                  >
                    <q-tab name="contact">
                      <span>ติดต่อเรา</span>
                    </q-tab>
                  </router-link>

                  <!-- <router-link
                    class="text-decoration"
                    :class="{
                      clblue1: tab == 'onet',
                      'text-blue-grey-10': tab != 'onet'
                    }"
                    to="/o-net"
                    @click="tab = 'onet'"
                  >
                    <q-tab name="onet">
                      <span>คอร์สติว O-NET</span>
                    </q-tab>
                  </router-link> -->

                  <!-- <router-link
                    class="text-decoration"
                    :class="{
                      clblue1: tab == 'hotel',
                      'text-blue-grey-10': tab != 'hotel'
                    }"
                    to="/hotel"
                    @click="tab = 'hotel'"
                  >
                    <q-tab name="hotel">
                      <span>คอร์สสำหรับโรงแรม</span>
                    </q-tab>
                  </router-link> -->
                </q-tabs>
              </div>
            </div>
            <!--   v-if="tab =='home'||tab =='discovery'||tab =='adventures'||tab =='onet'" -->
            <div class="self-center q-px-xs">
              <q-btn
                push
                unelevated
                class="q-px-xs bgblue2 text-white"
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
          <div class="row" style="width: 100%; max-width: 1200px">
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
                :class="{
                  clblue1: tab == 'home',
                  'text-blue-grey-10': tab != 'home',
                }"
              >
                <div class="self-center" @click="tab = 'home'">
                  <q-img src="../statics/image/logo-winner.png" style="width: 100px" />
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
              <q-img src="../statics/image/logo-winner.png" style="width: 100px" />
            </div>
            <q-separator />
          </div>
          <q-list class="text-body1">
            <q-item
              clickable
              v-ripple
              to="/"
              @click="(tab = 'home'), (leftDrawerOpen = false)"
              :class="{
                clblue1: tab == 'home',
                'text-blue-grey-7': tab != 'home',
              }"
            >
              <q-item-section class="font q-px-md q-py-sm">หน้าแรก</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-ripple
              to="/discovery"
              @click="(tab = 'discovery'), (leftDrawerOpen = false)"
              :class="{
                clblue1: tab == 'discovery',
                'text-blue-grey-7': tab != 'discovery',
              }"
            >
              <q-item-section class="font q-px-md q-py-sm">สำหรับนักเรียน</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              v-ripple
              @click="tab = 'adventures'"
              :class="{
                clblue1: tab == 'adventures',
                'text-blue-grey-7': tab != 'adventures',
              }"
            >
              <q-item-section class="font">
                <q-expansion-item
                  v-model="expanded"
                  :v-if="leftDrawerOpen == false ? (expanded = false) : null"
                  label="สำหรับโรงเรียน"
                >
                  <q-separator />
                  <q-list align="left" style="width: 100%">
                    <q-item to="/adventures" @click="leftDrawerOpen = false">
                      <q-item-section>Winner Adventures</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item
                      to="/o-net"
                      @click="(tab = 'adventures'), (leftDrawerOpen = false)"
                    >
                      <q-item-section>Winner O-net</q-item-section>
                    </q-item>
                  </q-list>
                </q-expansion-item>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-ripple
              to="/hotel"
              @click="(tab = 'hotel'), (leftDrawerOpen = false)"
              :class="{
                clblue1: tab == 'hotel',
                'text-blue-grey-7': tab != 'hotel',
              }"
            >
              <q-item-section class="font q-py-sm q-px-md">สำหรับธุรกิจ</q-item-section>
            </q-item>
            <!-- <q-separator />
            <q-item
              clickable
              v-ripple
              to="/businesshare"
              @click="(tab = 'businesshare'), (leftDrawerOpen = false)"
              :class="{
                clblue1: tab == 'businesshare',
                'text-blue-grey-7': tab != 'businesshare'
              }"
            >
              <q-item-section class="font q-py-sm q-px-md"
                >สนใจร่วมธุรกิจ</q-item-section
              >
            </q-item> -->
            <q-separator />
            <q-item
              clickable
              v-ripple
              to="/contact"
              @click="(tab = 'contact'), (leftDrawerOpen = false)"
              :class="{
                clblue1: tab == 'contact',
                'text-blue-grey-7': tab != 'contact',
              }"
            >
              <q-item-section class="font q-py-sm q-px-md">ติดต่อเรา</q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-ripple
              to="/loginhome"
              @click="(tab = 'login'), (leftDrawerOpen = false)"
              :class="{
                clblue1: tab == 'login',
                'text-blue-grey-7': tab != 'login',
              }"
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
      expanded: false,
      select: false,
      tab: "home",
      innerWidth: null,
      innerHeight: null,
      leftDrawerOpen: false,
      selectStudent: false,
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
        this.tab = "adventures";
      } else if (data == "login") {
        this.tab = "login";
      } else if (data == "hotel") {
        this.tab = "hotel";
      } else if (data == "contact") {
        this.tab == "contact";
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
      this.tab = "adventures";
    } else if (this.$route.name == "loginhome") {
      this.tab = "login";
    } else if (this.$route.name == "admin") {
      this.tab = "admin";
    } else if (this.$route.name == "hotel") {
      this.tab = "hotel";
    } else if (this.$route.name == "contact") {
      this.tab = "contact";
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
<style scoped>
.text-decoration {
  text-decoration: none;
}
.cltext {
  color: #6e6b6b;
}
</style>

// style="opacity: 0.85;"
