<template>
  <div align="center">
    <q-resize-observer @resize="onResize" />
    <div class="shadow-1" style="max-width:1280px">
      <div v-show="innerWidth >= 950">
        <div align="left" class="q-px-md">
          <router-link to="manual">คู่มือการใช้งาน</router-link>&nbsp;>
          <router-link to="tutorial01a">เรียนรู้การใช้งาน</router-link>&nbsp;>&nbsp;การเขียน
        </div>
      </div>
      <div style="width:100%;max-width:900px ; margin:auto;">
        <div v-show="innerWidth < 950">
          <div align="left" class style="max-width:1280px; width:90%">
            <router-link to="manual">คู่มือ</router-link>&nbsp;>
            <router-link to="tutorial01a">เรียนรู้</router-link>&nbsp;>&nbsp;การเขียน
          </div>
        </div>

        <div class="text-h3 cl1 q-py-md" align="center">การเขียน</div>
        <div align="center">การเข้าสู่บทเรียน การเขียน มีดังนี้</div>
        <div class="q-py-md q-px-sm">
          <img src="../statics/translation/tran1.png" alt />
        </div>
        <div class="row">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">1</div>
          </div>
          <div class="col self-start label">กดปุ่ม "เริ่มภารกิจ"</div>
        </div>
        <div class="q-py-md q-px-sm">
          <img src="../statics/translation/tran2.png" alt />
        </div>
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

        <div class="q-pt-md q-px-sm">
          <img src="../statics/translation/tran3.png" alt />
        </div>
        <div align="center" @click="openTran()" class="cursor-pointer q-py-sm cl1">
          <u>ตัวอย่างหน้าแบบฝึกหัดของนักเรียน</u>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption2">4</div>
          </div>
          <div class="col self-start label">แสดงความก้าวหน้าในการทำแบบฝึกหัดของนักเรียนแบบกราฟ</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption2">5</div>
          </div>
          <div class="col self-start label q-pr-sm">
            เวลาที่เหลือในการทำแบบฝึกหัดนี้ นักเรียนไม่จำเป็นต้องทำโจทย์จนครบทุกข้อทุกคน แต่ขอให้พยายามทำในกรอบเวลาที่จัดให้ เพื่อทำให้การเรียนครบถ้วนทันตามหลักสูตร แต่ถ้าคุณครูเห็นว่า นักเรียนส่วนใหญ่ยังทำแบบฝึกหัดไม่ทัน
            คุณครูสามารถต่อเวลาเพิ่มได้อีก 2 นาที โดยจะมีหน้าต่างขึ้นมาถามตอนก่อนหมดเวลา 30 วินาที
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption2">6</div>
          </div>
          <div class="col self-start label">ตรวจสอบนักเรียนที่ทำแบบฝึกหัดเสร็จ</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">7</div>
          </div>
          <div
            class="col self-start label q-pr-sm"
          >กดเพื่อดูความก้าวหน้าของนักเรียนในรูปแบบตารางรายชื่อ สามารถดูเพิ่มเติมได้ที่ข้อ 9-13</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">8</div>
          </div>
          <div
            class="col self-start label"
          >กดปุ่ม "จบภารกิจ" เมื่อคุณครูเห็นว่านักเรียนในห้องทำแบบฝึกหัดเสร็จก่อนหมดเวลา จะไปที่ขั้นตอนที่ 14 อัตโนมัติ</div>
        </div>
        <div class="q-mt-md q-px-md" align="left">
          <i>ความก้าวหน้าของนักเรียนในรูปแบบตารางรายชื่อจากข้อ 7</i>
        </div>
        <div class="q-py-md q-px-sm">
          <img src="../statics/translation/tran4.png" alt />
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption2">9</div>
          </div>
          <div
            class="col self-start label"
          >แสดงความก้าวหน้าในการทำแบบฝึกหัดของนักเรียนแบบตารางรายชื่อ</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption2">10</div>
          </div>
          <div class="col self-start label">เวลาสำหรับการทำแบบฝึกหัด</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption2">11</div>
          </div>
          <div class="col self-start label">ตรวจสอบนักเรียนที่ทำเเบบฝึกหัดเสร็จ</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">12</div>
          </div>
          <div
            class="col self-start label"
          >กดเพื่อ ดูแสดงความก้าวหน้าของนักเรียนในรูปแบบกราฟ สามารถดูเพิ่มเติมได้ที่ข้อ 4-8</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">13</div>
          </div>
          <div
            class="col self-start label"
          >กกดปุ่ม "จบภารกิจ" เมื่อคุณครูเห็นว่านักเรียนในห้องทำแบบฝึกหัดเสร็จก่อนหมดเวลา จะไปขั้นตอน 14 อัตโนมัติ</div>
        </div>
        <div class="q-py-md q-px-sm">
          <img src="../statics/translation/tran5.png" alt />
        </div>
        <div class="row">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption2">14</div>
          </div>
          <div class="col self-start label">เนื้อหาสำหรับอธิบาย ของแบบฝึกหัด แต่งประโยค</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">15</div>
          </div>
          <div
            class="col self-start label"
          >กดปุ่ม "ดูคะแนน" เมื่อคุณครูอธิบายเนื้อหาของแบบฝึกหัด แต่างประโยค เสร็จสิ้น</div>
        </div>
        <div class="q-py-md q-px-sm">
          <img src="../statics/translation/tran6.png" alt />
        </div>
        <div class="row">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">16</div>
          </div>
          <div
            class="col self-start label q-pr-sm"
          >ถ้าคุณครูต้องการให้นักเรียนเรียนใหม่อีกครั้ง คุณครูสามารถกด "ทำอีกครั้ง" ได้ โดยคะแนนที่นักเรียนได้ทำไปแล้วในแบบฝึกหัดนี้จะไม่มีการบันทึกใดๆ ทั้งสิ้น</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">17</div>
          </div>
          <div class="col self-start label">กดปุ่ม "สรุปคะแนน"</div>
        </div>
        <div class="q-py-md q-px-sm">
          <img src="../statics/translation/tran7.png" alt />
        </div>
        <div class="row">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption2">18</div>
          </div>
          <div class="col self-start label">ตรวจสอบคะแนนของนักเรียนในบทเรียน การเขียน</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">19</div>
          </div>
          <div class="col self-start label">กดปุ่ม "ภารกิจถัดไป"</div>
        </div>
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

      <!-- dialog translation -->
      <q-dialog v-model="popupTran">
        <div class="bg3 q-pt-md" style="width:100%;max-width:950px ; margin:auto;">
          <div class="q-px-md">
            <div class="row">
              <div class="col-11 self-center label2">แบบฝึกหัด Translation ของนักเรียน</div>
              <div class="col-1" align="right">
                <q-icon
                  @click="closeTran()"
                  class="cursor-pointer"
                  style="font-size:calc(40px + 0.5vw)"
                  name="fas fa-times"
                />
              </div>
            </div>
            <div class="q-pb-md" align="center">
              <img src="../statics/translation/popup-translation.png" alt />
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
      popupTran: false,
      innerWidth: window.innerWidth,
      innerheigth: window.innerheigth
    };
  },
  components: {
    appFooter
  },
  methods: {
    openTran() {
      this.popupTran = true;
    },
    closeTran() {
      this.popupTran = false;
    },
    onResize(x) {
      return (this.innerWidth = x.width), (this.innerheigth = x.height);
    },
    nextBtn() {
      this.$router.push("/phonics");
    },
    homeBtn() {
      this.$router.push("/tutorial01a");
    },
    backBtn() {
      this.$router.push("/reading");
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