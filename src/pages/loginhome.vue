<template>
  <q-page>
    <div align="center">
      <q-resize-observer @resize="onResize" />
      <q-card v-if="innerWidth > 1023" style=";max-width: 1920px">
        <div class="loginhome">
          <div>
            <div style="height:240px"></div>
            <div class="relative-position">
              <div class="absolute-bottom row justify-center q-pb-lg">
                <q-img src="../statics/image/login/login-head.png" style="max-width:450px;" />
              </div>
            </div>

            <div align="center">
              <div class="row q-py-md" style="width:100%;max-width:1000px">
                <div class="col-3">
                  <transition
                    appear
                    enter-active-class="animated1 fadeInUp"
                    leave-active-class="animated1 flipOutY"
                  >
                    <q-img
                      v-if="cardDisable"
                      class="boxpc shadow-10"
                      src="../statics/image/login/disable.png"
                      style="width:220px;margin-top:-5px;margin-bottom:-5px;margin-left:-17px;margin-right:-17px"
                    />
                  </transition>
                  <transition appear enter-active-class="animated2 flipInY">
                    <q-btn
                      v-if="cardOpen"
                      to="/winnerdiscovery"
                      push
                      class="boxpc shadow-10 hvr-grow"
                    >
                      <q-img
                        src="../statics/image/login/winner-discovery.png"
                        style="width:220px;margin-top:-5px;margin-bottom:-5px;margin-left:-17px;margin-right:-17px"
                      />
                    </q-btn>
                  </transition>
                </div>

                <div class="col-3">
                  <transition
                    appear
                    enter-active-class="animated2 fadeInUp"
                    leave-active-class="animated1 flipOutY"
                  >
                    <q-img
                      v-if="cardDisable"
                      class="boxpc shadow-10"
                      src="../statics/image/login/disable.png"
                      style="width:220px;margin-top:-5px;margin-bottom:-5px;margin-left:-17px;margin-right:-17px"
                    />
                  </transition>
                  <transition appear enter-active-class="animated2 flipInY">
                    <q-btn
                      v-if="cardOpen"
                      to="/winneradventures"
                      push
                      class="boxpc shadow-10 hvr-grow"
                    >
                      <q-img
                        src="../statics/image/login/winner-adventures.png"
                        style="width:220px;margin-top:-5px;margin-bottom:-5px;margin-left:-17px;margin-right:-17px"
                      />
                    </q-btn>
                  </transition>
                </div>

                <div class="col-3">
                  <transition
                    appear
                    enter-active-class="animated3 fadeInUp"
                    leave-active-class="animated1 flipOutY"
                  >
                    <q-img
                      v-if="cardDisable"
                      class="boxpc shadow-10"
                      src="../statics/image/login/disable.png"
                      style="width:220px;margin-top:-5px;margin-bottom:-5px;margin-left:-17px;margin-right:-17px"
                    />
                  </transition>
                  <transition appear enter-active-class="animated2 flipInY">
                    <q-btn v-if="cardOpen" to="/winneronet" push class="boxpc shadow-10 hvr-grow">
                      <q-img
                        src="../statics/image/login/winner-onet.png"
                        style="width:220px;margin-top:-5px;margin-bottom:-5px;margin-left:-17px;margin-right:-17px"
                      />
                    </q-btn>
                  </transition>
                </div>

                <div class="col-3">
                  <transition
                    appear
                    enter-active-class="animated3 fadeInUp"
                    leave-active-class="animated1 flipOutY"
                  >
                    <q-img
                      v-if="cardDisable"
                      class="boxpc shadow-10"
                      src="../statics/image/login/disable.png"
                      style="width:220px;margin-top:-5px;margin-bottom:-5px;margin-left:-17px;margin-right:-17px"
                    />
                  </transition>
                  <transition appear enter-active-class="animated2 flipInY">
                    <q-btn v-if="cardOpen" to="/winnerwork" push class="boxpc shadow-10 hvr-grow">
                      <q-img
                        src="../statics/image/login/work.png"
                        style="width:220px;margin-top:-5px;margin-bottom:-5px;margin-left:-17px;margin-right:-17px"
                      />
                    </q-btn>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card>
      <div align="center" style="height:100vh" v-if="innerWidth < 1024" class="loginhome">
        <div style="width:90%">
          <div style="height:20px"></div>
          <div class="row justify-center q-pt-lg">
            <q-img src="../statics/image/login/login-head.png" style="max-width:450px;" />
          </div>
          <div class="row q-py-md q-px-md" style="width:100%;max-width:1000px">
            <div class="col-12">
              <transition appear enter-active-class="animated1 fadeInLeft">
                <q-btn to="/winnerdiscovery" push class="shadow-10 boxmb q-my-md hvr-grow">
                  <q-img
                    src="../statics/image/login/discovery-mobile.png"
                    style="width:400px;margin-top:-5px;margin-bottom:-5px;margin-left:-17px;margin-right:-17px"
                  />
                </q-btn>
              </transition>
            </div>
            <div class="col-12">
              <transition appear enter-active-class="animated2 fadeInLeft">
                <q-btn to="/winneradventures" push class="shadow-10 boxmb q-my-md hvr-grow">
                  <q-img
                    src="../statics/image/login/adventures-mobile.png"
                    style="width:400px;margin-top:-5px;margin-bottom:-5px;margin-left:-17px;margin-right:-17px"
                  />
                </q-btn>
              </transition>
            </div>
            <div class="col-12">
              <transition appear enter-active-class="animated3 fadeInLeft">
                <q-btn to="/winneronet" push class="shadow-10 boxmb q-my-md hvr-grow">
                  <q-img
                    src="../statics/image/login/onet-mobile.png"
                    style="width:400px;margin-top:-5px;margin-bottom:-5px;margin-left:-17px;margin-right:-17px"
                  />
                </q-btn>
              </transition>
            </div>
            <div class="col-12">
              <transition appear enter-active-class="animated3 fadeInLeft">
                <q-btn to="/winnerwork" push class="shadow-10 boxmb q-my-md hvr-grow">
                  <q-img
                    src="../statics/image/login/work-mobile.png"
                    style="width:400px;margin-top:-5px;margin-bottom:-5px;margin-left:-17px;margin-right:-17px"
                  />
                </q-btn>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      cardDisable: true,
      cardOpen: false,
    };
  },
  methods: {
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    },
    cardOne() {
      setTimeout(() => {
        this.cardDisable = false;
      }, 1500);
    },
    cardTwo() {
      setTimeout(() => {
        this.cardOpen = true;
      }, 2500);
    },
    comingSoon() {
      this.$q.dialog({
        title: "ไม่สามารถใช้งานได้",
        message: "ระบบนี้จะสามารถใช้ได้เฉพาะช่วงเวลาเปิดเทอมเท่านั้น",
      });
    },
  },
  mounted() {
    this.cardOne();
    this.cardTwo();
  },
};
</script>

<style  scoped>
.boxpc {
  border-radius: 20px;
  min-height: 300px;
}
.boxmb {
  border-radius: 20px;
  width: 100%;
  max-width: 385px;
}
.animated1 {
  animation-duration: 1s;
}
.animated2 {
  animation-duration: 1.5s;
}
.animated3 {
  animation-duration: 2s;
}
.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 5 5 2px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  transform: scale(1.1);
}
</style>