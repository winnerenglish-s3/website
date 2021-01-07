<template>
  <q-page>
    <q-resize-observer @resize="onResize" />
    <div align="center ">
      <div class="shadow-1 desktop-only" style="max-width:1280px; margin:auto;">
        <div>
          <!-- ส่วนบน รูปปก -->
          <div v-if="innerWidth > 1023" class="bghotel"></div>
          <!-- ข้อความ หัวข้อหลัก -->
          <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <img
                src="../statics/athotel01.png"
                :style="
                  innerWidth > 1023 ? 'width:70%' : 'width:50%;min-width:350px'
                "
                :class="innerWidth < 1024 ? 'q-pt-md' : ''"
                alt
              />
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div
                style="width:70%; margin:auto;"
                :class="innerWidth > 1023 ? 'q-pt-xl' : 'q-pt-md'"
              >
                <div align="left">
                  <b>ภาษาอังกฤษสำหรับมืออาชีพ</b>
                </div>
                <div align="left">
                  ด้วยบทเรียนที่มีถึง 9 ตำแหน่งในธุรกิจโรงแรม ทำให้คุณหรือ
                  พนักงานในโรงแรมของคุณ พัฒนา ทักษะภาษาอังกฤษได้ในระดับมืออาชีพ
                  ซึ่งส่งผลต่อการพัฒนางานบริการในโรงแรม และความก้าวหน้าในอาชีพ
                </div>
              </div>
            </div>
          </div>
          <div style="height:50px;"></div>
          <div :class="innerWidth < 1024 ? 'q-pt-md' : 'q-pt-xl'">
            <img
              src="../statics/hoteldata.png"
              style="width:60%;max-width:750px;min-width:460px"
              alt
            />
          </div>
          <div style="height:50px;"></div>

          <div class="row">
            <div class="col-md-4 col-sm-12 col-xs-12">
              <div>
                <img src="../statics/checkbig.png" alt />
              </div>
              <div>
                <b>ใช้งานได้จริง</b>
              </div>
              <div style="width:300px; margin:auto;">
                คำศัพท์ ประโยค บทสนทนา ทุกอย่างที่เราสอน
                คุณสามารถนำไปใช้งานจริงได้
              </div>
            </div>
            <div
              class="col-md-4 col-sm-12 col-xs-12"
              :class="innerWidth < 1024 ? 'q-py-lg' : ''"
            >
              <div>
                <img src="../statics/checkbig.png" alt />
              </div>
              <div>
                <b>ครบถ้วน</b>
              </div>
              <div style="width:300px; margin:auto;">
                9 ตำแหน่งหลักในธุรกิจโรงแรม คุณสามารถเรียนตั้งแต่คำศัพท์
                จนถึงบทสนทนาในแต่ละตำแหน่งในโรงแรม
              </div>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
              <div>
                <img src="../statics/checkbig.png" alt />
              </div>
              <div>
                <b>วัดผลได้</b>
              </div>
              <div style="width:300px; margin:auto;">
                ระบบ HR Section ทำให้ทีม HR ของบริษัทสามารถกำหนดค่า KPI
                ของพนักงานได้อย่างสะดวก
              </div>
            </div>
          </div>
          <div style="height:100px;"></div>
          <!-- ส่วนล่าง -->
        </div>
        <app-footer></app-footer>
      </div>
      <div align="center " class="mobile-only">
        <div class="cl1 titile" style="font-size:calc(35px + 2vw);">
          Winner @hotel
        </div>
        <div>
          โปรแกรมการเรียนการสอนภาษาอังกฤษอัจฉริยะแบบครบวงจรสำหรับธุรกิจโรงแรม
        </div>
        <div class="q-pt-md">
          <img src="../statics/athotel01.png" style="width:80%" alt />
        </div>
        <div style="width:80%; margin:auto;" class="q-pt-md">
          <div align="left">
            <b>ภาษาอังกฤษสำหรับมืออาชีพ</b>
          </div>
          <div align="left">
            ด้วยบทเรียนที่มีถึง 9 ตำแหน่งในธุรกิจโรงแรม ทำให้คุณหรือ
            พนักงานในโรงแรมของคุณ พัฒนา ทักษะภาษาอังกฤษได้ในระดับมืออาชีพ
            ซึ่งส่งผลต่อการพัฒนางานบริการในโรงแรม และความก้าวหน้าในอาชีพ
          </div>
        </div>
        <div class="row">
          <div class="col-12 q-pt-md">
            <div>
              <img src="../statics/checkbig.png" alt />
            </div>
            <div>
              <b>ใช้งานได้จริง</b>
            </div>
            <div style="width:300px; margin:auto;">
              คำศัพท์ ประโยค บทสนทนา ทุกอย่างที่เราสอน
              คุณสามารถนำไปใช้งานจริงได้
            </div>
          </div>
          <div class="col-12 q-pt-md">
            <div>
              <img src="../statics/checkbig.png" alt />
            </div>
            <div>
              <b>ครบถ้วน</b>
            </div>
            <div style="width:300px; margin:auto;">
              9 ตำแหน่งหลักในธุรกิจโรงแรม คุณสามารถเรียนตั้งแต่คำศัพท์
              จนถึงบทสนทนาในแต่ละตำแหน่งในโรงแรม
            </div>
          </div>
          <div class="col-12 q-pt-md">
            <div>
              <img src="../statics/checkbig.png" alt />
            </div>
            <div>
              <b>วัดผลได้</b>
            </div>
            <div style="width:300px; margin:auto;">
              ระบบ HR Section ทำให้ทีม HR ของบริษัทสามารถกำหนดค่า KPI
              ของพนักงานได้
            </div>
          </div>
        </div>
        <div style="height:50px;"></div>
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
      graph: "../statics/image/discovery/graph.png",
      discoveryFunction: "../statics/image/discovery/discovery-function.png",
      vocabulary: "../statics/image/discovery/vocabulary.png",
      grammar: "../statics/image/discovery/grammar.png",
      reading: "../statics/image/discovery/reading.png",
      writing: "../statics/image/discovery/writing.png",
      conversation: "../statics/image/discovery/conversation.png",
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
.round {
  border-radius: 100px;
  background: #e7f7ff;
  color: #027be1;
  width: 50px;
  height: 50px;
}
.bgcl1 {
  background: #3f51b5;
}
.box {
  font-size: calc(26px + 0.2vw);
}
</style>
