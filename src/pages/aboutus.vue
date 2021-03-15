<template>
  <q-page>
    <div align="center">
      <q-resize-observer @resize="onResize" />
      <div align="center">
        <div class="shadow-1" style="max-width:1280px">
          <div>
            <!-- ส่วนบน รูปปก -->
            <div v-if="innerWidth > 1023" class="bgabout"></div>
            <div>
              <!-- ข้อความ หัวข้อหลัก -->
              <div class="q-pt-md" style="width:90%;max-width: 1200px">
                <span v-if="innerWidth > 1023" class="text-h1 cl1 titile">Winner English</span>
                <span
                  v-if="innerWidth < 1024"
                  style="font-size:calc(35px + 2vw);"
                  class="cl1 titile"
                >Winner English</span>
                <br />
                <div class="q-pt-sm q-px-md q-pb-md" style="max-width:800px;">
                  <span
                    class="font"
                  >โปรแกรมการเรียนการสอนภาษาอังกฤษครบวงจร ที่ถูกพัฒนาขึ้นโดยทีมงานคนไทย เพื่อนักเรียนไทยโดยเฉพาะ เนื้อหาตรงกับหลักสูตรกระทรวง มีความสอดคล้อง เหมาะสมกับนักเรียนไทย</span>
                </div>
              </div>
            </div>

            <!-- ข้อความส่วนแรก เตรียมตัวให้พร้อมกับการสอบ-->
            <div class="row" style="width:90%;max-width:1200px;">
              <div
                class="self-center row justify-center col-md-6 col-sm-12 col-xs-12 text-left q-pa-md q-px-lg"
              >
                <div>
                  <div class="text-h4 cl1 titile q-pb-md">เราคือใคร?</div>
                  <span>บริษัท เอ็ดดูเทค อินโนเวชั่น จำกัด เป็นผู้พัฒนาโปรแกรมการเรียนการสอนภาษาอังกฤษ ในชื่อ Winner Advetures, Winner Discovery และ Winner O-Net โดยเรามีทีมงานทุกส่วนไม่ว่าจะเป็น ส่วนการออกแบบ ส่วนพัฒนาโปรแกรม ส่วนพัฒนาเนื้อหาการเรียนการสอน เรายังได้รับการส่งเสริมการลงทุนจาก BOI อีกด้วย</span>
                </div>
              </div>
              <div
                v-if="innerWidth > 1023"
                class="self-center col-md-6 col-sm-12 col-xs-12 q-px-md q-pt-md"
              >
                <q-img src="../statics/image/onet/onet5.png" style="max-width:450px;" />
              </div>
            </div>
            <!-- ข้อความส่วนที่สอง พัฒนาการที่เห็นผลจากนักเรียน-->
            <div class="row q-pt-xl" style="width:90%;max-width:1200px;">
              <div v-if="innerWidth > 1022" class="self-center col-md-6 col-sm-12 col-xs-12">
                <q-img src="../statics/image/art.jpg" style="max-width:300px;" />
              </div>
              <div
                class="self-center row justify-center col-md-6 col-sm-12 col-xs-12 text-left q-pt-md q-px-lg"
              >
                <div>
                  <div class="text-h4 cl1 titile q-pb-lg">มุมมองของผู้พัฒนา</div>
                  <div
                    v-if="innerWidth <= 1022"
                    class="self-center col-md-6 col-sm-12 col-xs-12"
                    align="center"
                  >
                    <q-img src="../statics/image/art.jpg" style="max-width:200px;" />
                  </div>
                  <span>
                    <div v-if="innerWidth <= 1022" align="center">
                      <span class="cl1" style="font-size:29px;">นาย ภควัต แข็งแรง</span>
                      <br />
                      <span style="font-size:24px">หัวหน้าทีมพัฒนาโปรแกรม Winner English</span>
                    </div>
                    <div v-if="innerWidth > 1022">
                      <span class="cl1" style="font-size:29px;">นาย ภควัต แข็งแรง</span>
                      <br />
                      <span style="font-size:24px">หัวหน้าทีมพัฒนาโปรแกรม Winner English</span>
                    </div>
                    <div class="q-pt-md">
                      ด้วยประสบการณ์ทำงานพัฒนา software มากกว่า 10 ปี เรามีความมุ่งมั่น ที่จะพัฒนา
                      Winner English ให้เป็นโปรแกรมเรียนภาษาอังกฤษที่ดีที่สุด และนักเรียนทุกคนรัก การเรียนภาษาอังกฤษ
                    </div>
                  </span>
                </div>
              </div>
            </div>

            <!-- สนใจโปรแกรม -->
            <div v-if="innerWidth > 700" style="height:250px  " class="relative-position clblue1">
              <span class="text-h3 absolute-center" style="width:100%">
                <div class="q-py-md">
                  สนใจโปรแกรมติดต่อ:
                  <a
                    class="clblue1 phone"
                    style="text-decoration: none; border-bottom: 2px solid #3f51b5;"
                    href="tel:084-323-2206"
                  >084-323-2206</a>
                </div>
              </span>
            </div>
            <div
              v-if="innerWidth < 700"
              style="height:250px "
              class="relative-position clblue1 q-mb-md"
            >
              <div style="width:100%" class="fontphone absolute-center clblue1 titilebold">
                <div>
                  <div>สนใจเรียน</div>
                  <div>
                    ติดต่อ:
                    <a
                      class="clblue1 phone"
                      style="text-decoration: none; border-bottom: 2px solid #3f51b5;"
                      href="tel:084-323-2206"
                    >084-323-2206</a>
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
      innerWidth: null,
      innerHeight: null,
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
