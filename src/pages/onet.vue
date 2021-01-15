<template>
  <q-page>
    <div align="center">
      <q-resize-observer @resize="onResize" />
      <div align="center">
        <div class="shadow-1" style="max-width:1280px">
          <div>
            <!-- ส่วนบน รูปปก -->
            <div v-if="innerWidth > 1023" class="bgonet"></div>
            <div>
              <!-- ข้อความ หัวข้อหลัก -->
              <div class="q-pt-md" style="width:90%;max-width: 1200px">
                <span v-if="innerWidth > 1023" class="text-h1 cl1 titile"
                  >WINNER O-NET</span
                >
                <span
                  v-if="innerWidth < 1024"
                  style="font-size:calc(35px + 2vw);"
                  class="cl1 titile"
                  >WINNER O-NET</span
                >
                <br />
                <div class="q-pt-sm q-px-md q-pb-md">
                  <span class="font">
                    โปรแกรมติวข้อสอบ สำหรับนักเรียนระดับชั้นประถมศึกษาปีที่ 6
                    ที่กำลังเตรียมความพร้อมในการสอบ o-net
                  </span>
                </div>
              </div>
            </div>
            <!-- รูปภาพ สไลด์ -->
            <div class="row" style="width:90%;max-width: 1200px">
              <div style="width:100%">
                <q-carousel
                  v-if="innerWidth > 600"
                  swipeable
                  animated
                  v-model="slide"
                  infinite
                  autoplay
                  style="height: 500px ;"
                  transition-prev="slide-right"
                  transition-next="slide-left"
                  control-color="primary"
                  navigation
                >
                  <q-carousel-slide class="relative-position" :name="1">
                    <span>
                      <q-img
                        class="absolute-center"
                        style=";max-width:800px;"
                        src="../statics/image/onet/onet-1.png"
                      />
                    </span>
                  </q-carousel-slide>
                  <q-carousel-slide class="relative-position" :name="2">
                    <span>
                      <q-img
                        class="absolute-center"
                        style="width:100%;max-width:800px;"
                        src="../statics/image/onet/onet-2.png"
                      />
                    </span>
                  </q-carousel-slide>
                  <q-carousel-slide class="relative-position" :name="3">
                    <span>
                      <q-img
                        class="absolute-center"
                        style="width:100%;max-width:800px;"
                        src="../statics/image/onet/onet-3.png"
                      />
                    </span>
                  </q-carousel-slide>
                </q-carousel>
              </div>
              <div style="width:100%">
                <q-carousel
                  v-if="innerWidth < 600"
                  swipeable
                  animated
                  v-model="slide"
                  infinite
                  autoplay
                  style="height: 300px ;"
                  transition-prev="slide-right"
                  transition-next="slide-left"
                >
                  <q-carousel-slide class="relative-position" :name="1">
                    <span>
                      <q-img
                        class="absolute-center"
                        style=";max-width:800px;"
                        src="../statics/image/onet/onet-1.png"
                      />
                    </span>
                  </q-carousel-slide>
                  <q-carousel-slide class="relative-position" :name="2">
                    <span>
                      <q-img
                        class="absolute-center"
                        style="width:100%;max-width:800px;"
                        src="../statics/image/onet/onet-2.png"
                      />
                    </span>
                  </q-carousel-slide>
                  <q-carousel-slide class="relative-position" :name="3">
                    <span>
                      <q-img
                        class="absolute-center"
                        style="width:100%;max-width:800px;"
                        src="../statics/image/onet/onet-3.png"
                      />
                    </span>
                  </q-carousel-slide>
                </q-carousel>
              </div>
            </div>
            <!-- ข้อความส่วนแรก เตรียมตัวให้พร้อมกับการสอบ-->
            <div class="row" style="width:90%;max-width:1200px;">
              <div
                v-if="innerWidth > 1023"
                class="self-center col-md-6 col-sm-12 col-xs-12 q-px-md q-pt-md"
              >
                <q-img
                  src="../statics/image/onet/onet-4.png"
                  style="max-width:450px;"
                />
              </div>
              <div
                class="self-center row justify-center col-md-6 col-sm-12 col-xs-12 text-left q-pa-md q-px-lg"
              >
                <div>
                  <div class="text-h4 cl1 titile q-pb-md">
                    เตรียมความพร้อมในการสอบ O-net
                  </div>
                  <span>
                    ในระยะเวลา 16 ชั่วโมงเพื่อเตรียมความพร้อมก่อนลงสนามสอบ
                    นักเรียนจะได้ตะลุยโจทย์และเจาะลึกแนวข้อสอบในทุก ๆ
                    วิชาอย่างเข้มข้น นอกจากนี้
                    เราจะสอนวิธีการทำข้อสอบและสอนวิเคราะห์ข้อสอบในแต่ละข้อให้นักเรียนสามารถทำโจทย์ได้และเข้าใจโจทย์มากยิ่งขึ้น
                  </span>
                </div>
              </div>
            </div>
            <!-- ข้อความส่วนที่สอง พัฒนาการที่เห็นผลจากนักเรียน-->
            <div class="row q-pt-md" style="width:90%;max-width:1200px;">
              <div
                v-if="innerWidth < 1023"
                class="self-center col-md-6 col-sm-12 col-xs-12"
              >
                <q-img
                  src="../statics/image/onet/onet5.png"
                  style="max-width:450px;"
                />
              </div>
              <div
                class="self-center row justify-center col-md-6 col-sm-12 col-xs-12 text-left q-pt-md q-px-lg"
              >
                <div>
                  <div class="text-h4 cl1 titile q-pb-lg">
                    ความสำเร็จของ winner O-net
                  </div>
                  <span>
                    นักเรียนระดับชั้นประถมศึกษาปีที่ 6
                    ที่ติวเข้มด้วยโปรแกรมของเรา
                    มีผลคะแนนในการสอบพัฒนาสูงขึ้นอย่างเห็นได้ชัด
                    วัดผลจากค่าเฉลี่ยของทุกเรียนในปี 2561 เพิ่มขึ้นร้อยละ 10.81
                    เมื่อเทียบกับการสอบในปี 2560
                  </span>
                </div>
              </div>
              <div
                v-if="innerWidth > 1022"
                class="self-center col-md-6 col-sm-12 col-xs-12"
              >
                <q-img
                  src="../statics/image/onet/onet5.png"
                  style="max-width:500px;"
                />
              </div>
            </div>

            <!-- สนใจโปรแกรม -->
            <div
              v-if="innerWidth > 700"
              style="height:250px  "
              class="relative-position clblue1"
            >
              <span class="text-h3 absolute-center" style="width:100%">
                <div class="q-py-md">
                  สนใจโปรแกรมติดต่อ:
                  <a
                    class="clblue1 phone"
                    style="text-decoration: none; border-bottom: 2px solid #3f51b5;"
                    href="tel:02-252-2489"
                  >02-252-2489</a>
                </div>
              </span>
            </div>
            <div
              v-if="innerWidth < 700"
              style="height:250px "
              class="relative-position clblue1 q-mb-md"
            >
              <div
                style="width:100%"
                class="fontphone absolute-center clblue1 titilebold"
              >
                <div>
                  <div>สนใจเรียน</div>
                  <div>
                    ติดต่อ:
                    <a
                      class="clblue1 phone"
                      style="text-decoration: none; border-bottom: 2px solid #3f51b5;"
                      href="tel:02-252-2489"
                    >02-252-2489</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- ส่วนล่าง -->
          </div>
          <app-footer></app-footer>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import appFooter from "../components/footer.vue";
export default {
  data() {
    return {
      slide: 1,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    };
  },
  components: {
    appFooter,
  },
  methods: {
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    },
  },
};
</script>

<style scoped>
.box {
  border-radius: 10px;
  max-width: 300px;
  background: #e7f7ff;
  height: 400px;
}
.boxmb {
  border-radius: 10px;
  max-width: 300px;
  background: #e7f7ff;
  height: 300px;
}
.bgcl1 {
  background: #3f51b5;
}
.cl1 {
  color: #3f51b5;
}
</style>
