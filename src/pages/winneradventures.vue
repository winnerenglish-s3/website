<template>
  <q-page>
    <div align="center">
      <q-resize-observer @resize="onResize" />
      <q-card>
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
              <div class="row" style="width:100%;max-width:1000px">
                <div class="col-12 q-pa-md">
                  <q-btn
                    push
                    class="btn bgbrown text-white text-h5 text-bold"
                    style="max-width:500px;width:100%;"
                    label="Winner Adventures"
                    onclick="window.open('https://app.winner-english.com', '_blank')"
                  />
                </div>
                <div class="col-12 q-pa-md">
                  <q-btn
                    push
                    class="btn bgbrown text-white text-h5 text-bold"
                    style="max-width:500px;width:100%;"
                    label="Adventures Plus"
                    onclick="window.open('https://adventures-plus.web.app', '_blank')"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card>
      <!-- <div align="center" v-if="innerWidth < 1024" class="loginadventures">
        <div class="row justify-center q-pt-xl">
          <q-img
            src="../statics/image/loginadventures/name-adventures.png"
            style="max-width:700px;"
          />
        </div>
        <div class="row q-pa-md">
          <div class="col-12 q-pt-xl">
            <div>
              <q-btn
                push
                no-caps
                class="q-my-sm btnmb bgbrown text-white"
                label="WINNER ADVENTURES"
                @click="comingSoon()"
              />
            </div>
          </div>
          <div class="col-12">
            <div>
              <q-btn
                push
                no-caps
                class="q-my-sm btnmb bgbrown text-white"
                label="Adventures Plus"
                @click="comingSoon()"
              />
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    };
  },
  methods: {
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    },
    comingSoon() {
      this.$q.dialog({
        title: "ไม่สามารถใช้งานได้",
        message: "ระบบนี้จะสามารถใช้ได้เฉพาะช่วงเวลาเปิดเทอมเท่านั้น",
      });
    },
  },
};
</script>

<style  scoped>
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
</style>