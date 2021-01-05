<template>
  <q-page>
    <q-resize-observer @resize="onResize" />
    <div align="center">
      <div class="shadow-1" style="max-width:1280px">
        <div>
          <!-- ส่วนบน รูปปก -->
          <div v-if="innerWidth > 1023" class="bghome"></div>
          <!-- ข้อความ หัวข้อหลัก -->
          <div class="q-pt-md" style="width:90%;max-width: 1200px">
            <span v-if="innerWidth > 1023" class="text-h1 cl1 titile"
              >WINNER ENGLISH</span
            >
            <span
              v-if="innerWidth < 1024"
              style="font-size:calc(35px + 2vw);"
              class="cl1 titile"
              >WINNER ENGLISH</span
            >
            <br />
            <div class="q-py-sm q-px-md q-pb-xl">
              <div class="font" style="max-width: 1000px;">
                <span
                  >นวัตกรรมการเรียนภาษาอังกฤษอัจฉริยะแบบครบวงจร
                  ช่วยสนับสนุนการเรียนการสอนของคุณครูและนักเรียนในโรงเรียน<br />
                  ด้วยบรรยากาศห้องเรียนดิจิทัลที่ทันสมัย
                  และช่วยพัฒนาการเรียนรู้ด้วยตนเองของนักเรียนแบบออนไลน์
                </span>
              </div>
            </div>
          </div>
          <!-- winner English เหมาะสมกับใคร-->
          <div class="row reverse q-py-md" style="width:95%;max-width:1200px;">
            <div class="self-center col-md-6 col-sm-12 col-xs-12">
              <q-img :src="home2" style="max-width:700px;" />
            </div>
            <div
              class="self-center row justify-center col-md-6 col-sm-12 col-xs-12 text-left q-pa-md"
            >
              <div>
                <div class="cl1 titilecenter desktop-only">
                  Winner English เหมาะกับใคร ?
                </div>
                <div class="cl1 titilecenter mobile-only q-mt-md">
                  Winner English<br />
                  เหมาะกับใคร ?
                </div>
                <span
                  >Winner English
                  เหมาะกับนักเรียนระดับชั้นประถมศึกษาและมัธยมศึกษา ตอนต้น คือ
                  ช่วงอายุ 6-15 ปี เนื่องจากแพลตฟอร์มการเรียนการสอนของ Winner
                  English เป็นการเรียนภาษาอังกฤษแบบออนไลน์ที่จะต้องเรียนกับ
                  อุปกรณ์เทคโนโลยี
                  ช่วงวัยที่เหมาะสมและมีสมาธิในการเรียนรู้ผ่านระบบ
                  ออนไลน์จึงอยู่ในช่วงอายุ 6 ปี ขึ้นไป
                  และเนื้อหาที่ได้รับการพัฒนาสำหรับ นักเรียนวัยนี้โดยเฉพาะ
                  สอดคล้องตามหลักสูตรแกนกลางกระทรวงศึกษาธิการ
                  เพื่อปูพืนฐานภาษาอังกฤษให้นักเรียนสามารถนำไปใช้ได้จริงในโรงเรียน<br />
                  และการใช้ชีวิตประจำวันอย่างมั่นใจ</span
                >
              </div>
            </div>
          </div>
          <!-- ทำไมต้องเรียน winnner English -->
          <div class="row q-py-md q-mb-lg" style="width:90%;max-width:1200px;">
            <div
              class="self-center row col-md-12 col-sm-12 col-xs-12 text-left"
            >
              <div
                class=" text-h4 cl1 titile q-py-md full-width desktop-only"
                align="center"
              >
                ทำไมต้องเลือกเรียน Winner English ?
              </div>
              <div class=" text-h4 cl1 titile q-py-md full-width mobile-only">
                ทำไมต้องเลือกเรียน <br />
                Winner English ?
              </div>
              <div class="q-py-md row col-md-4 col-sm-12 col-xs-12">
                <q-img
                  :style="
                    $q.platform.is.desktop
                      ? 'width:80px;height:80px'
                      : 'width:60px;height:60px'
                  "
                  src="../statics/image/icon1.png"
                ></q-img>
                <span
                  :class="
                    $q.platform.is.desktop ? 'col q-px-sm' : 'col q-px-md'
                  "
                >
                  <div>
                    เนื้อหาตรงตามหลักสูตรแกนกลาง<br />
                    ผ่านการนำเสนอบทเรียนที่ต่อยอด<br />
                    การเรียนรู้ในโรงเรียน
                  </div>
                </span>
              </div>
              <div class="q-py-md row col-md-4 col-sm-12 col-xs-12">
                <q-img
                  :style="
                    $q.platform.is.desktop
                      ? 'width:80px;height:80px'
                      : 'width:60px;height:60px'
                  "
                  src="../statics/image/icon2.png"
                ></q-img>
                <span
                  :class="
                    $q.platform.is.desktop ? 'col q-px-sm' : 'col q-px-md'
                  "
                >
                  <div>
                    เรียนได้ไม่จำกัด ทุกที่ ทุกเวลา<br />
                    เพียงเชื่อมต่ออินเตอร์เน็ต<br />
                    ไม่ต้องดาวน์โหลดโปรแกรม
                  </div>
                </span>
              </div>
              <div class="q-py-md row col-md-4 col-sm-12 col-xs-12">
                <q-img
                  :style="
                    $q.platform.is.desktop
                      ? 'width:80px;height:80px'
                      : 'width:60px;height:60px'
                  "
                  src="../statics/image/icon3.png"
                ></q-img>
                <span
                  :class="
                    $q.platform.is.desktop ? 'col q-px-sm' : 'col q-px-md'
                  "
                >
                  <div>
                    Practice-based Learning<br />
                    เรียนรู้ทักษะภาษาอังกฤษ<br />ผ่านการฝึกฝนและลงมือทำ
                  </div>
                </span>
              </div>
              <div class="q-py-md row col-md-4 col-sm-12 col-xs-12">
                <q-img
                  :style="
                    $q.platform.is.desktop
                      ? 'width:80px;height:80px'
                      : 'width:60px;height:60px'
                  "
                  src="../statics/image/icon4.png"
                ></q-img>
                <span
                  :class="
                    $q.platform.is.desktop ? 'col q-px-sm' : 'col q-px-md'
                  "
                >
                  <div>
                    การวัดผลแม่นยำ <br />สามารถติดตามและรายงานผล<br />
                    การเรียนรายบุคคลได้แบบ Real-time
                  </div>
                </span>
              </div>
              <div class="q-py-md row col-md-4 col-sm-12 col-xs-12">
                <q-img
                  :style="
                    $q.platform.is.desktop
                      ? 'width:80px;height:80px'
                      : 'width:60px;height:60px'
                  "
                  src="../statics/image/icon5.png"
                ></q-img>
                <span
                  :class="
                    $q.platform.is.desktop ? 'col q-px-sm' : 'col q-px-md'
                  "
                >
                  <div>
                    เรียนครบทุกทักษะภาษาอังกฤษ <br />ฟัง พูด อ่าน เขียน คำศัพท์
                    ไวยากรณ์
                  </div>
                </span>
              </div>
              <div class="q-py-md row col-md-4 col-sm-12 col-xs-12">
                <q-img
                  :style="
                    $q.platform.is.desktop
                      ? 'width:80px;height:80px'
                      : 'width:60px;height:60px'
                  "
                  src="../statics/image/icon6.png"
                ></q-img>
                <span
                  :class="
                    $q.platform.is.desktop ? 'col q-px-sm' : 'col q-px-md'
                  "
                >
                  <div>
                    สอบวัดระดับภาษา (placement Test) ช่วยให้เนื้อหาเหมาะสมกับ<br />
                    พื้นฐานนักเรียนแต่ละคน
                  </div>
                </span>
              </div>
            </div>
          </div>
          <!-- สำหรับผู้ปกครอง และนักเรียน-->
          <div class="row q-py-md" style="width:90%;max-width:1200px;">
            <div class="self-center col-md-6 col-sm-12 col-xs-12">
              <q-img :src="home3" style="max-width:500px;" />
            </div>
            <div
              class="self-center row justify-center col-md-6 col-sm-12 col-xs-12 text-left q-pa-md q-px-lg"
            >
              <div>
                <div class="cl1 titilecenter desktop-only">
                  สำหรับผู้ปกครอง และนักเรียน
                </div>
                <div class="cl1 titilecenter mobile-only">
                  สำหรับผู้ปกครอง<br />
                  และนักเรียน
                </div>
                <span
                  >โปรแกรมเรียนภาษาอังกฤษออนไลน์ที่สามารถจัดรูปแบบเรียนรู้<br />
                  และทำแบบฝึกหัดได้ด้วยตนเอง เรียนรู้ได้ทุกที่ ทุกเวลา สนุก
                  เข้าใจง่าย ด้วยรูปแบบ VDO Animation และเทคโนโลยี Gamification
                </span>
                <div class="q-py-lg">
                  <q-btn
                    unelevated
                    to="/adventures"
                    rounded
                    class="bgcl1 text-white"
                  >
                    <span class="text-h5">เรียนรู้เพิ่มเติม</span>
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
          <!-- สำหรับคุณครู และโรงเรียน-->
          <div class="row reverse q-pt-md" style="width:90%;max-width:1200px;">
            <div class="self-center col-md-6 col-sm-12 col-xs-12 q-px-md">
              <q-img :src="home4" style="max-width:500px;" />
            </div>
            <div
              class="self-center row justify-center col-md-6 col-sm-12 col-xs-12 text-left q-pa-md q-px-lg"
            >
              <div>
                <div class="cl1 titilecenter">สำหรับคุณครู และโรงเรียน</div>
                <span class="desktop-only"
                  >แพลตฟอร์มห้องเรียนดิจิทัลภาษาอังกฤษ ผ่านเรื่องราวการผจญภัย<br />
                  ที่สนุกสนาม กระตุ้นพัฒนาการเรียนรู้ของนักเรียน พร้อมระบบช่วย
                  สนับสนุนการสอนของคุณครูอย่างมีประสิทธิภาพ
                </span>
                <span class="mobile-only"
                  >แพลตฟอร์มห้องเรียนดิจิทัลภาษาอังกฤษ
                  ผ่านเรื่องราวการผจญภัยที่สนุกสนาม
                  กระตุ้นพัฒนาการเรียนรู้ของนักเรียนพร้อมระบบ
                  ช่วยสนับสนุนการสอนของคุณครูอย่างมีประสิทธิภาพ
                </span>
                <div class="q-py-lg">
                  <q-btn
                    unelevated
                    to="/o-net"
                    rounded
                    class="bgcl1 text-white"
                  >
                    <span class="text-h5">เรียนรู้เพิ่มเติม</span>
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ความคิดเห็น PC -->
        <div class="q-pt-md">
          <div
            style="margin-bottom:-100px"
            v-if="innerWidth > 1007"
            class="text-h3 cl1 q-py-xl"
          >
            ความคิดเห็นของผู้ใช้
          </div>
        </div>
        <div
          v-if="innerWidth > 1007"
          style="max-width:1280px"
          class="relative-position bgbottom row justify-center"
        >
          <!-- ความคิดเห็น PC -->
          <div class="row" style="width:100%;max-width:1200px;">
            <div class="self-center col-4">
              <div style="margin-top:160px" class="box q-pa-md">
                <div
                  class="q-pa-sm"
                  style="max-width:130px;border-radius:100px;background: #e7f7ff;margin-top:-80px;"
                >
                  <q-img :src="testimonial1" style="width:100%;" />
                </div>

                <div class="q-py-md">
                  <div>
                    <span class="font cl1">คุณครูศรีวิกร จำปามูล</span>
                  </div>

                  <div class="q-py-lg">
                    <div>
                      <q-img :src="message" style="max-width:50px;" />
                    </div>
                  </div>
                  <div>
                    <span class="titilebold q-px-sm">วินเนอร์ อิงลิช</span>
                    <span
                      >สะดวก ทันสมัย ช่วยให้
                      นักเรียนพัฒนาการเรียนรู้ด้วยตนเอง</span
                    >
                  </div>
                </div>
              </div>
              <div style="margin-top:-65px;color: #e7f7ff;">
                <q-icon size="100px" name="fas fa-sort-down" />
              </div>
            </div>
            <div class="self-center col-4">
              <div style="margin-top:160px;" class="box q-pa-md">
                <div
                  class="q-pa-sm"
                  style="max-width:130px;border-radius:100px;background: #e7f7ff;margin-top:-80px;"
                >
                  <q-img :src="testimonial2" style="width:100%;" />
                </div>
                <div class="q-py-md">
                  <div>
                    <span class="font cl1">คุณครูวันดี โชคสมกิจ</span>
                  </div>

                  <div class="q-py-lg">
                    <div>
                      <q-img :src="message" style="max-width:50px;" />
                    </div>
                  </div>
                  <div>
                    <span class="titilebold q-px-sm">วินเนอร์ อิงลิช</span>
                    <span
                      >ช่วยให้นักเรียนได้ครบทุกทักษะภาษาอังกฤษครูก็ได้รับประโยชน์จากการใช้สื่อใหม่ๆ</span
                    >
                  </div>
                </div>
              </div>
              <div style="margin-top:-65px;color: #e7f7ff;">
                <q-icon size="100px" name="fas fa-sort-down" />
              </div>
            </div>

            <div class="self-center col-4">
              <div style="margin-top:160px" class="box q-pa-md">
                <div
                  class="q-pa-sm"
                  style="max-width:130px;border-radius:100px;background: #e7f7ff;margin-top:-80px;"
                >
                  <q-img :src="testimonial3" style="width:100%;" />
                </div>
                <div class="q-py-md">
                  <div>
                    <span class="font cl1">น้องจิน</span>
                  </div>

                  <div class="q-py-lg">
                    <div>
                      <q-img :src="message" style="max-width:50px;" />
                    </div>
                  </div>
                  <div>
                    <span>การเรียน</span>
                    <span class="titilebold q-px-sm">วินเนอร์ อิงลิช</span>
                    <span>ทำให้วิชาภาษาอังกฤษสนุกขึ้น ง่ายขึ้น</span>
                  </div>
                </div>
              </div>
              <div style="margin-top:-65px;color: #e7f7ff;">
                <q-icon size="100px" name="fas fa-sort-down" />
              </div>
            </div>
            <div style="height:100px " class="col-12"></div>
          </div>
        </div>

        <div
          v-if="innerWidth < 1008"
          class="relative-position bgbottommb row justify-center"
        >
          <!-- ความคิดเห็น Mobile -->
          <div
            class="row absolute-bottom"
            v-if="innerWidth < 1008"
            style="width:100%;max-width:1200px;"
          >
            <!-- ความคิดเห็น Mobile -->
            <div class="self-center bgblue1 col-12">
              <div class="bgblue1 text-h3 text-white q-pt-lg q-pb-lg">
                ความคิดเห็นของผู้ใช้
              </div>
              <div style="width:100% ">
                <q-carousel
                  swipeable
                  animated
                  v-model="slide"
                  navigation
                  infinite
                  autoplay
                  control-color="primary"
                  class="bgblue1"
                  style="width:100%;height:500px"
                  transition-prev="slide-right"
                  transition-next="slide-left"
                >
                  <q-carousel-slide :name="1">
                    <div style="margin-top:50px;" class="boxmb q-pa-md">
                      <div
                        class="q-pa-sm"
                        style="max-width:120px;border-radius:100px;background: #e7f7ff;margin-top:-80px;"
                      >
                        <q-img :src="testimonial1" style="width:100%;" />
                      </div>

                      <div>
                        <div>
                          <span class="font cl1">คุณครูศรีวิกร จำปามูล</span>
                        </div>

                        <div class="q-py-sm">
                          <div>
                            <q-img :src="message" style="max-width:50px;" />
                          </div>
                        </div>
                        <div>
                          <span class="titilebold q-px-sm"
                            >วินเนอร์ อิงลิช</span
                          >
                          <span
                            >สะดวก ทันสมัย ช่วยให้
                            นักเรียนพัฒนาการเรียนรู้ด้วยตนเอง</span
                          >
                        </div>
                      </div>
                    </div>
                    <div style="margin-top:-65px;color: #e7f7ff;">
                      <q-icon size="100px" name="fas fa-sort-down" />
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide :name="2">
                    <div style="margin-top:50px;" class="boxmb q-pa-md">
                      <div
                        class="q-pa-sm"
                        style="max-width:120px;border-radius:100px;background: #e7f7ff;margin-top:-80px;"
                      >
                        <q-img :src="testimonial2" style="width:100%;" />
                      </div>

                      <div>
                        <div>
                          <span class="font cl1">คุณครูวันดี โชคสมกิจ</span>
                        </div>

                        <div class="q-py-sm">
                          <div>
                            <q-img :src="message" style="max-width:50px;" />
                          </div>
                        </div>
                        <div>
                          <span class="titilebold q-px-sm"
                            >วินเนอร์ อิงลิช</span
                          >
                          <span
                            >ช่วยให้นักเรียนได้ครบทุกทักษะภาษาอังกฤษ
                            ครูก็ได้รับประโยชน์จากการใช้สื่อการสอนใหม่ๆ</span
                          >
                        </div>
                      </div>
                    </div>
                    <div style="margin-top:-65px;color: #e7f7ff;">
                      <q-icon size="100px" name="fas fa-sort-down" />
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide :name="3">
                    <div style="margin-top:50px;" class="boxmb q-pa-md">
                      <div
                        class="q-pa-sm"
                        style="max-width:120px;border-radius:100px;background: #e7f7ff;margin-top:-80px;"
                      >
                        <q-img :src="testimonial3" style="width:100%;" />
                      </div>

                      <div>
                        <div>
                          <span class="font cl1">น้องจิน</span>
                        </div>

                        <div class="q-py-sm">
                          <div>
                            <q-img :src="message" style="max-width:50px;" />
                          </div>
                        </div>
                        <div>
                          <span>
                            การเรียน
                            <span class="titilebold q-px-xs"
                              >วินเนอร์ อิงลิช</span
                            >
                            <span>ทำให้วิชาภาษาอังกฤษสนุกขึ้น ง่ายขึ้น</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div style="margin-top:-65px;color: #e7f7ff;">
                      <q-icon size="100px" name="fas fa-sort-down" />
                    </div>
                  </q-carousel-slide>
                </q-carousel>
              </div>
            </div>
          </div>
        </div>
        <!-- ส่วนล่าง -->
        <app-footer></app-footer>
      </div>
    </div>
  </q-page>
</template>

<script>
import appFooter from "../components/footer.vue";
export default {
  data() {
    return {
      home2: "../statics/image/home2.png",
      home3: "../statics/image/home3.png",
      home4: "../statics/image/home4.png",
      home5: "../statics/image/home5.png",
      testimonial1: "../statics/image/testimonial1.png",
      testimonial2: "../statics/image/testimonial2.png",
      testimonial3: "../statics/image/testimonial3.png",
      message: "../statics/image/message.png",
      slide: 1,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  },
  components: {
    appFooter
  },
  methods: {
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    }
  }
};
</script>

<style scoped>
.box {
  border-radius: 10px;
  max-width: 300px;
  background: #e7f7ff;
  height: 450px;
}
.boxmb {
  border-radius: 10px;
  max-width: 300px;
  background: #e7f7ff;
  height: 350px;
}
.bgcl1 {
  background: #3f51b5;
}
.cl1 {
  color: #3f51b5;
}
</style>
