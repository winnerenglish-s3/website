<template>
  <div align="center">
    <q-resize-observer @resize="onResize" />
    <div class="shadow-1" style="max-width:1280px">
      <div v-show="innerWidth >= 950">
        <div align="left" class="q-px-md">
          <router-link to="manual">คู่มือการใช้งาน</router-link>&nbsp;>
          <router-link to="tutorial01a">เรียนรู้การใช้งาน</router-link>&nbsp;>&nbsp;การอ่าน
        </div>
      </div>
      <div style="width:100%;max-width:900px ; margin:auto;">
        <div v-show="innerWidth < 950">
          <div align="left" class style="max-width:1280px; width:90%">
            <router-link to="manual">คู่มือ</router-link>&nbsp;>
            <router-link to="tutorial01a">เรียนรู้</router-link>&nbsp;>&nbsp;การอ่าน
          </div>
        </div>

        <div class="text-h3 cl1 q-py-md" align="center">การอ่าน</div>
        <div align="center">การเข้าสู่บทเรียน การอ่าน มีดังนี้</div>
        <div class="q-py-md q-px-sm">
          <img src="../statics/reading/reading1.png" alt />
        </div>
        <div class="row">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">1</div>
          </div>
          <div class="col self-start label">กดปุ่ม "เริ่มภารกิจ"</div>
        </div>

        <!-- Reading -->
        <div class="q-py-md q-px-sm">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:150px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >อ่านออกเสียง</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/reading/reading2.png" alt />
            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">2</div>
              </div>
              <div class="col self-start label">อ่านคำสั่งให้ละเอียด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">3</div>
              </div>
              <div class="col self-start label">กดปุ่ม "ทำภารกิจ"</div>
            </div>
            <div class="q-py-md">
              <img src="../statics/reading/reading3.png" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">4</div>
              </div>
              <div
                class="col self-start label"
              >เวลาที่แนะนำสำหรับการเรียน แต่ระยะเวลาในการสอนจริงนั้น อาจจะแตกต่างจากเวลาที่แนะนำได้ ขึ้นอยู่กับดุลพินิจของคุณครูผู้สอน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">5</div>
              </div>
              <div
                class="col self-start label"
              >กดเพื่อ ฟังเสียงประโยค คุณครูควรจะให้นักเรียนอ่านพร้อมกัน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">6</div>
              </div>
              <div class="col self-start label">เนื้อหาของบทเรียน การอ่าน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">7</div>
              </div>
              <div class="col self-start label">กดเพื่อไปยังประโยคถัดไป</div>
            </div>
            <div class="q-py-md">
              <img src="../statics/reading/reading4.png" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">8</div>
              </div>
              <div class="col self-start label">สามารถกดกลับเพื่อดูประโยค ก่อนหน้านี้ได้</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">9</div>
              </div>
              <div class="col self-start label">กดปุ่มม "จบภารกิจ"</div>
            </div>

            <div class="q-py-md">
              <img src="../statics/reading/reading5.png" alt />
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">10</div>
              </div>
              <div
                class="col self-start label"
              >ถ้าคุณครูต้องการให้นักเรียนเรียนใหม่อีกครั้ง คุณครูสามารถกด "ทำภารกิจใหม่อีกครั้ง" ได้</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">11</div>
              </div>
              <div
                class="col self-start label"
              >ถ้าคุณครูต้องการให้นักเรียนเรียนในบทเรียนถัดไป คุณครูสามารถกด "ภารกิจถัดไป"</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">12</div>
              </div>
              <div
                class="col self-start label"
              >ถ้าคุณครูเห็นว่านักเรียนในห้องพร้อมใจกันออกเสียงและตั้งใจเรียน คุณครูสามารถให้คะแนนพิเศษได้ โดยกด "ให้เพิ่ม 10 XP แล้วทำภารกิจถัดไป" เมื่อกดให้คะแนนพิเศษแล้วระบบจะพาเข้าสู่บทเรียนถัดไปอัตโนมัติ</div>
            </div>
          </div>
        </div>
        <!-- Reading practice -->

        <div class="q-py-md q-px-sm">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:190px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >อ่านจับใจความ</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/reading/reading6.png" alt />
            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">13</div>
              </div>
              <div class="col self-start label">อ่านคำสั่งให้ละเอียด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">14</div>
              </div>
              <div class="col self-start label">กดปุ่ม "ทำภารกิจ"</div>
            </div>

            <div class="q-pt-md">
              <img src="../statics/reading/reading7.png" alt />
            </div>
            <div align="center" @click="openReading()" class="cursor-pointer q-py-sm cl1">
              <u>ตัวอย่างหน้าแบบฝึกหัดของนักเรียน</u>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">15</div>
              </div>
              <div class="col self-start label">
                เวลาที่เหลือในการทำแบบฝึกหัดนี้ นักเรียนไม่จำเป็นต้องทำโจทย์จนครบทุกข้อทุกคน แต่ขอให้พยายามทำในกรอบเวลาที่จัดให้ เพื่อทำให้การเรียนครบถ้วนทันตามหลักสูตร แต่ถ้าคุณครูเห็นว่า นักเรียนส่วนใหญ่ยังทำแบบฝึกหัดไม่ทัน
                คุณครูสามารถต่อเวลาเพิ่มได้อีก 2 นาที โดยจะมีหน้าต่างขึ้นมาถามตอนก่อนหมดเวลา 30 วินาที
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">16</div>
              </div>
              <div class="col self-start label">ตรวจสอบนักเรียนที่ทำเเบบฝึกหัดเสร็จ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">17</div>
              </div>
              <div class="col self-start label">แสดงความก้าวหน้าในการทำแบบฝึกหัดของนักเรียนแบบกราฟ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">18</div>
              </div>
              <div
                class="col self-start label"
              >กดเพื่อดูความก้าวหน้าของนักเรียนในรูปแบบตารางรายชื่อ สามารถดูเพิ่มเติมได้ที่ข้อ 20 - 24</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">19</div>
              </div>
              <div
                class="col self-start label"
              >กดปุ่ม "จบภารกิจ" เมื่อคุณครูเห็นว่านักเรียนในห้องทำแบบฝึกหัดเสร็จก่อนหมดเวลา จะไปที่ขั้นตอนที่ 25 อัตโนมัติ</div>
            </div>
            <div class="q-py-md">
              <div class="q-pb-md row">
                <div class="label">
                  <i>ความก้าวหน้าของนักเรียนในรูปแบบตารางรายชื่อจากข้อ 18</i>
                </div>
              </div>
              <img src="../statics/reading/reading8.png" alt />
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">20</div>
              </div>
              <div class="col self-start label">เวลาสำหรับการทำแบบฝึกหัด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">21</div>
              </div>
              <div class="col self-start label">ตรวจสอบนักเรียนที่ทำเเบบฝึกหัดเสร็จ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">22</div>
              </div>
              <div
                class="col self-start label"
              >แสดงความก้าวหน้าในการทำแบบฝึกหัดของนักเรียนแบบรายชื่อ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">23</div>
              </div>
              <div
                class="col self-start label"
              >กดเพื่อ ดูแสดงความก้าวหน้าของนักเรียนในรูปแบบกราฟ สมารถดูเพิ่มเติมได้ที่ข้อ 15-19</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">24</div>
              </div>
              <div
                class="col self-start label"
              >กดปุ่ม "จบภารกิจ" เมื่อคุณครูเห็นว่านักเรียนในห้องทำแบบฝึกหัดเสร็จก่อนหมดเวลา จะไปขั้นตอน 25 อัตโนมัติ</div>
            </div>

            <div class="q-py-md">
              <img src="../statics/reading/reading9.png" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">25</div>
              </div>
              <div class="col self-start label">คำแปลเนื้อเรื่องภาษาไทย</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">26</div>
              </div>
              <div class="col self-start label">เนื้อเรื่องภาษาอังกฤษ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">27</div>
              </div>
              <div
                class="col self-start label"
              >เมื่อคุณครูอธิบายเนื้อหาของแบบฝึกหัด อ่านจับใจความ เสร็จสิ้น กดปุ่ม "จบภารกิจ"</div>
            </div>
            <div class="q-py-md">
              <img src="../statics/reading/reading10.png" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">28</div>
              </div>
              <div
                class="col self-start label"
              >ถ้าคุณครูต้องการให้นักเรียนเรียนใหม่อีกครั้ง คุณครูสามารถกด "ทำอีกครั้ง" ได้ โดยคะแนนที่นักเรียนได้ทำไปแล้วในแบบฝึกหัดนี้จะไม่มีการบันทึกใดๆ ทั้งสิ้น</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">29</div>
              </div>
              <div class="col self-start label">กดปุ่ม "สรุปคะแนน"</div>
            </div>
          </div>
        </div>

        <!-- จบ -->

        <div class="q-py-md q-px-sm">
          <img src="../statics/reading/reading11.png" alt />
        </div>
        <div class="row">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption2">30</div>
          </div>
          <div class="col self-start label">ตรวจสอบคะแนนของนักเรียนในบทเรียน การอ่าน</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">31</div>
          </div>
          <div class="col self-start label">กดปุ่ม "ภารกิจถัดไป"</div>
        </div>
        <!-- navigator -->
        <div class="row q-my-xl q-px-sm">
          <div class="col-2" align="left">
            <q-btn
              @click="backBtn()"
              size="18px"
              round
              class="bg1 text-white text-h4"
              unelevated
              rounded
            >
              <i class="fas fa-chevron-left"></i>
            </q-btn>
          </div>
          <div class="col-8" align="center">
            <q-btn
              @click="homeBtn()"
              style="width:80%;max-width:450px; "
              class="cl3 bg1 text-h6"
              flat
              rounded
              label="การเรียนรู้การใช้งาน"
            />
          </div>
          <div class="col-2" align="right">
            <q-btn
              @click="nextBtn()"
              size="18px"
              round
              class="bg1 text-white text-h4"
              unelevated
              rounded
            >
              <i class="fas fa-chevron-right"></i>
            </q-btn>
          </div>
        </div>
      </div>

      <!-- dialog reading -->
      <q-dialog v-model="popupReading">
        <div class="bg3 q-pt-md" style="width:100%;max-width:950px ; margin:auto;">
          <div class="q-px-md">
            <div class="row">
              <div class="col-11 self-center label2">แบบฝึกหัด Reading Practice ของนักเรียน</div>
              <div class="col-1" align="right">
                <q-icon
                  @click="closeReading()"
                  class="cursor-pointer"
                  style="font-size:calc(40px + 0.5vw)"
                  name="fas fa-times"
                />
              </div>
            </div>
            <div class="q-pb-md" align="center">
              <img src="../statics/reading/popup-Reading.png" alt />
            </div>
          </div>
        </div>
      </q-dialog>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import appFooter from "../components/footer.vue";
export default {
  data() {
    return {
      popupReading: false,
      innerWidth: null,
      innerheigth: window.innerheigth
    };
  },
  components: {
    appFooter
  },
  methods: {
    openReading() {
      this.popupReading = true;
    },
    closeReading() {
      this.popupReading = false;
    },
    onResize(x) {
      return (this.innerWidth = x.width), (this.innerheigth = x.height);
    },
    nextBtn() {
      this.$router.push("/translation");
    },
    homeBtn() {
      this.$router.push("/tutorial01a");
    },
    backBtn() {
      this.$router.push("/grammar");
    }
  }
};
</script>

<style >
img {
  width: 100%;
  max-width: 900px;
}
</style>