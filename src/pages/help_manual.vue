<template>
  <div align="center">
    <q-card style="max-width:1280px">
      <q-resize-observer @resize="onResize" />
      <div class="bg" v-show="innerWidth >= 1000">
        <div style="max-width:1200px">
          <div class="text-center text-h3 cl1 q-pt-xl">คู่มือการใช้งานสำหรับคุณครู</div>
          <div style="width:100%; height: calc(100vh - 160px)" class="row">
            <div class="col self-end relative-position q-px-md">
              <div class="absolute-bottom-right">
                <q-img src="../statics/operator.png" alt style="width:500px" />
              </div>
            </div>
            <div class="col-7 q-pa-md">
              <div style="margin-top:calc(80px - 2vw );width:100%;max-width:900px " class="q-pt-xl">
                <q-img class="relative-position" style src="../statics/boad.png">
                  <span
                    class="absolute-center text-subtitle2"
                    style="width:calc(100% - 10%) ;margin-left:30px"
                  >
                    <div>
                      <div class="q-py-md" align="center">
                        <q-btn
                          @click="tutorial01a()"
                          style="border-radius: 10px; max-width:800px;width:90%"
                          class="row bg1 text-white"
                        >
                          <div class="col-1 q-py-sm">
                            <q-icon
                              class="cursor-pointer"
                              style="font-size:calc(40px + 0.5vw)"
                              name="far fa-question-circle"
                            />
                          </div>
                          <div class="col-10 text-h4">เรียนรู้การใช้งาน</div>
                          <div class="col-1"></div>
                        </q-btn>
                      </div>
                      <div class="q-py-md" align="center">
                        <q-btn
                          @click="manual02()"
                          style=" border-radius: 10px; max-width:800px;width:90%"
                          class="row bg1 text-white"
                        >
                          <div class="col-1 q-py-sm">
                            <q-icon
                              class="cursor-pointer"
                              style="font-size:calc(40px + 0.5vw)"
                              name="fas fa-tools"
                            />
                          </div>
                          <div class="col-10 text-h4">ปัญหาการใช้งาน</div>
                          <div class="col-1"></div>
                        </q-btn>
                      </div>
                    </div>
                  </span>
                </q-img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- mobile -->

      <div
        class="bg-Mb q-pb-md"
        v-show="innerWidth < 1000"
        style="min-height:100vh; max-hieght:fit-content;margin-top:-40px"
      >
        <div class="q-pt-md">
          <div class="text-center text-h4 cl1 q-py-xl">คู่มือการใช้งานสำหรับคุณครู</div>
          <div class="absolute-center q-pt-xl">
            <div align="center">
              <img
                src="../statics/operator.png"
                style="width:100% ; max-width:250px; margin-bottom: -15px;"
                alt
              />
            </div>
            <div class="q-px-lg" align="center">
              <div class="bg2 q-px-lg" style=" width:100%;max-width:400px; border-radius: 10px;">
                <div align="center">
                  <q-btn
                    @click="tutorial01a()"
                    style="width:290px; border-radius: 10px;"
                    class="bg1 text-white q-mt-lg"
                  >
                    <div class="f18 q-py-md">เรียนรู้การใช้งาน</div>
                  </q-btn>
                </div>
                <div align="center">
                  <q-btn
                    @click="manual02()"
                    style="width:290px;border-radius: 10px;"
                    class="bg1 text-white q-my-lg"
                  >
                    <div class="f18 q-py-md">ปัญหาการใช้งาน</div>
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerWidth: null,
      innerheigth: window.innerheigth
    };
  },
  methods: {
    onResize(x) {
      return (this.innerWidth = x.width), (this.innerheigth = x.height);
    },
    tutorial01a() {
      this.$router.push("/tutorial01a");
    },
    manual02() {
      this.$router.push("/faq");
    }
  }
};
</script>

<style>
.cl1 {
  color: #3f51b5;
}
.bg1 {
  background: #3f51b5;
}
.f34 {
  font-size: 34px;
}
.f24 {
  font-size: 24px;
}
</style>
