<template>
  <q-page>
    <div align="center">
      <q-resize-observer @resize="onResize" />
      <q-card v-if="innerWidth > 1023">
        <div class="loginadventures">
          <div>
            <div class="relative-position">
              <div class="row justify-center q-pb-lg q-pa-md">
                <q-img
                  class="q-mt-lg"
                  src="../statics/image/loginadventures/name-adventures.png"
                  style="max-width:700px;"
                />
              </div>
            </div>
            <div align="center">
              <div class="row" style="width:100%;max-width:1000px;height:400px">
                <div class="col-12">
                  <a
                    href="https://app.winner-english.com"
                    target="_blank"
                    style="text-decoration:none;"
                  >
                    <q-btn
                      push
                      class="q-my-sm btn text-white row transparent "
                      style="width:210px;height:50px;margin-top:20px"
                    >
                      <span>
                        <q-img
                          class="q-my-md z-top"
                          style="width:220px;margin-top:-20px"
                          src="../statics/image/loginadventures/lessonAdventure.png"
                        />
                      </span>
                    </q-btn>
                  </a>
                </div>
                <div class="col-12 self-end">
                  <a
                    href="https://adventures-plus.web.app/"
                    target="_blank"
                    style="text-decoration:none;"
                  >
                    <q-btn
                      push
                      class="q-my-sm btn bgbrown2 text-white"
                      size="25px"
                      style="width:300px"
                      ><div class="itimfont">ระบบผู้ช่วยครู</div></q-btn
                    >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card>
      <div align="center" v-if="innerWidth < 1024" class="loginadventures">
        <div class="row justify-center q-pt-xl">
          <q-img
            src="../statics/image/loginadventures/name-adventures.png"
            style="max-width:700px;"
          />
        </div>
        <div class="row q-pa-md">
          <div class="col-12">
            <div>
              <a
                v-if="!btnMB"
                href="https://mainapp.winner-english.com/"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-btn class="q-my-sm btnmb text-white bgbrown2" push>
                  <div>
                    <q-img
                      src="../statics/image/logindiscovery/vector.png"
                      style="width:48px;margin-left:20px;margin-top:-5px"
                      class="z-top absolute-left"
                    ></q-img>
                  </div>
                  <div class="itimfont">บทเรียน</div></q-btn
                >
              </a>
              <q-btn
                v-if="btnMB"
                :class="{ 'bg-grey': btnMB == false, bgbrown2: btnMB != false }"
                push
                class="q-my-sm btnmb text-white"
              >
                <div class="itimfont">บทเรียน</div>
              </q-btn>
            </div>
          </div>
          <div class="col-12">
            <div>
              <a
                v-if="!btnMB"
                href="https://tas.winner-english.com/"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-btn push class="q-my-sm btnmb bgbrown2 text-white"
                  ><div class="itimfont">ระบบผู้ช่วยครู</div></q-btn
                >
              </a>
              <q-btn
                v-if="btnMB"
                :class="{ 'bg-grey': btnMB == false, bgbrown2: btnMB != false }"
                push
                class="q-my-sm btnmb text-white"
                ><div class="itimfont">ระบบผู้ช่วยครู</div></q-btn
              >
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
      btnMB: false,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  },
  methods: {
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    },
    comingSoon() {
      this.$q.dialog({
        title: "ไม่สามารถใช้งานได้",
        message: "ระบบนี้จะสามารถใช้ได้เฉพาะช่วงเวลาเปิดเทอมเท่านั้น"
      });
    }
  }
};
</script>

<style scoped>
.btn {
  border-radius: 10px;
  width: 450px;
}
.btnmb {
  font-size: calc(25px + 0.2vw);
  border-radius: 10px;
  max-width: 450px;
  width: 100%;
}
.boxpc {
  border-radius: 20px;
  min-height: 347px;
}
.boxmb {
  border-radius: 20px;
  width: 100%;
  max-width: 385px;
}
.bgbrown2 {
  background-color: #a04e05;
}
</style>
