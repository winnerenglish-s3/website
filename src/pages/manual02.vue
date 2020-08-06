<template>
  <div>
    <div align="center">
      <q-card style="max-width:1920px">
        <q-resize-observer @resize="onResize" />
        <div class="bg" v-show="innerWidth>=1000">
          <div style="max-width:1200px">
            <div class="text-center text-h3 cl1 q-pt-xl">ปัญหาการใช้งาน</div>
            <div style="width:100%;height:852px" class="row">
              <div class="col self-end relative-position q-px-md">
                <div class="absolute-bottom-right">
                  <q-img src="../statics/02-1.png" alt class style="width:calc(400px + 5vw)" />
                </div>
              </div>
              <div class="col-7 q-pa-md">
                <div
                  style="margin-top:calc(80px - 2vw );width:100%;max-width:900px "
                  class="q-pt-xl"
                >
                  <q-img class="relative-position" style src="../statics/boad.png">
                    <span
                      class="absolute-center text-subtitle2"
                      style="width:calc(100% - 10%) ;margin-left:30px"
                    >
                      <div>
                        <div class="q-py-md" align="center">
                          <q-btn
                            style="height:70px;border-radius: 10px; max-width:800px;width:90%"
                            class="bg1 text-white"
                          >
                            <div class="text-h4">ปัญหาการเรียนการสอน</div>
                          </q-btn>
                        </div>
                        <div class="q-py-md" align="center">
                          <q-btn
                            style=" border-radius: 10px; max-width:800px;width:90% ;height:70px
          "
                            class="bg1 text-white"
                          >
                            <div class="text-h4">ปัญหาอื่นๆ</div>
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
      </q-card>
    </div>
    <!-- mobile -->
    <div
      class="bg-Mb q-pb-md"
      v-show="innerWidth<1000"
      style="min-height:100vh; max-hieght:fit-content"
    >
      <div class="q-pt-md">
        <div class="text-center text-h4 cl1 q-py-xl">ปัญหาการใช้งาน</div>
        <div align="center" class="q-pl-xl">
          <img
            src="../statics/02-1.png"
            style="width:100% ; max-width:200px; margin-bottom: -6px;"
            alt
          />
        </div>
        <div class="q-px-lg" align="center">
          <div class="bg2" style=" width:100%;max-width:400px; border-radius: 10px;">
            <div align="center">
              <q-btn style="width:290px; border-radius: 10px;" class="bg1 text-white q-mt-lg">
                <div class="f18 q-py-md">ปัญหาการเรียนการสอน</div>
              </q-btn>
            </div>
            <div align="center">
              <q-btn style="width:290px;border-radius: 10px;" class="bg1 text-white q-my-lg">
                <div class="f18 q-py-md">ปัญหาอื่นๆ</div>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerWidth: window.innerWidth,
      innerheigth: window.innerheigth
    };
  },
  methods: {
    onResize(x) {
      return (this.innerWidth = x.width), (this.innerheigth = x.height);
    }
  }
};
</script>

<style >
</style>