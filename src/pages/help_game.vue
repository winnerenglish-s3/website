<template>
  <div align="center">
    <q-resize-observer @resize="onResize" />
    <div class="shadow-1" style="max-width:1280px">
      <div v-show="innerWidth >= 950">
        <div align="left" class="q-px-md">
          <router-link to="manual">คู่มือการใช้งาน</router-link>&nbsp;>
          <router-link to="tutorial01a">เรียนรู้การใช้งาน</router-link>&nbsp;>&nbsp;ระบบเกม
        </div>
      </div>
      <div style="width:100%;max-width:900px ; margin:auto;">
        <div v-show="innerWidth < 950">
          <div align="left" class style="max-width:1280px; width:90%">
            <router-link to="manual">คู่มือ</router-link>&nbsp;>
            <router-link to="tutorial01a">เรียนรู้</router-link>&nbsp;>&nbsp;ระบบเกม
          </div>
        </div>

        <div class="text-h3 cl1 q-py-md" align="center">ระบบเกม</div>
        <div
          align="center"
          class="q-px-sm"
        >โปรแกรม Winner Adventures มีการนําระบบเกม มาใช้เพื่อสร้างแรงจูงใจในการเรียนของนักเรียน</div>

        <!-- การทำภารกิจ  -->
        <div class="q-py-lg q-px-sm" id="scoreReport">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:160px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >การทำภารกิจ</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/game/game01.jpg" alt />
            <div
              class="q-pa-md"
              align="left"
            >ในการเรียนจะมีการโหวตภารกิจเพื่อทําภารกิจรับของรางวัลร่วมกันทั้งห้อง คะแนนแบบฝึกหัดที่นักเรียนทําได้จะแทนค่าเป็นเหรียญ เมื่อนักเรียนสะสมเหรียญจนสําเร็จตามที่ภารกิจกําหนด ทั้งห้องจะได้รับของรางวัลตามที่เลือกโหวต โดยของรางวัลมี 3 อย่างให้เลือก โดยมีทักษะความสามารถแตกต่างกัน ดังนี้</div>
            <div class="q-px-md" align="left"></div>

            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">1</div>
              </div>
              <div
                class="col self-start label"
              >"เรือ" บวกเหรียญพิเศษทันทีหลังจากทําแบบฝึกหัดเสร็จสิ้น</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">2</div>
              </div>
              <div
                class="col self-start label"
              >"คู่หู" จะช่วยลดราคาภารกิจที่ต้องทํา ให้น้อยลงจากราคาปกติ เพือช่วยสะสมเหรียญให้สําเร็จเร็วขึ้น</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">3</div>
              </div>
              <div
                class="col self-start label"
              >"สมบัติ" จะบวกเหรียญทันทีหลังจากที่ทําภารกิจสําเร็จ และจะใช้ได้เพียงครั้งเดียวเท่านั้น</div>
            </div>
          </div>
        </div>

        <!-- การตรวจสอบของรางวัลที่ได้รับ -->
        <div class="q-py-lg q-px-sm" id="scoreLink">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:280px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >การตรวจสอบของรางวัลที่ได้รับ</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/game/game02.jpg" alt />
            <div
              class="q-pa-md"
              align="left"
            >หลังจากที่เราได้รับของรางวัลจากการทําภารกิจ รางวัลจะแสดงอยู่ในหน้าหลักตามนี้</div>

            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">1</div>
              </div>
              <div class="col self-start label">สมบัติ แต่ละชิ้น จะถูกรวบรวมไว้ที่จุดนี้</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">2</div>
              </div>
              <div
                class="col self-start label"
              >เรือ จะอยู่ที่จุดนี้ โดยจะเปลี่ยนไปในแต่ละระดับที่ได้รับ</div>
            </div>

            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">3</div>
              </div>
              <div
                class="col self-start label"
              >คู่หู จะอยู่ทีจุดนี้ โดยจะเปลี่ยนไปในแต่ละระดับที่ได้รับ</div>
            </div>

            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">4</div>
              </div>
              <div class="col self-start label">ความสามารถของเรือในปัจจุบัน</div>
            </div>

            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">5</div>
              </div>
              <div class="col self-start label">ความสามารถของคู่หูในปัจจุบัน</div>
            </div>
          </div>
        </div>

        <!-- ระบบเลเวล -->
        <div class="q-py-lg q-px-sm" id="prePostLink">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:180px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >ระบบเลเวล</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/game/game03.jpg" alt />
            <div
              class="q-pa-md"
              align="left"
            >ในหน้าของนักเรียนจะมีแถบแสดงชื่อ เลเวล และยศของนักเรียน โดยรายละเอียดมีดังนี้</div>
            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">1</div>
              </div>
              <div class="col self-start label">แถบแสดงข้อมูลของนักเรียน</div>
            </div>

            <div class="q-py-md">
              <img src="../statics/game/game04.jpg" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">2</div>
              </div>
              <div class="col self-start label">ระดับยศของนักเรียน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">3</div>
              </div>
              <div class="col self-start label">เลเวลของนักเรียน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">4</div>
              </div>
              <div class="col self-start label">ชื่อของนักเรียน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">5</div>
              </div>
              <div
                class="col self-start label"
              >XP ของนักเรียนที่มีในปัจจุบัน จะได้รับมาจากคะแนนแบบฝึกหัดทีนักเรียนทําได้ และคะแนนการตั้งใจเรียน เมื่อ XP ของนักเรียนเต็มถึงระดับทีกําหนด เลเวลจะเพิมขึ้น 1 เลเวล</div>
            </div>
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
                class="cl3 bg1 text-h6"
                unelevated
                rounded
              >
                <i class="fas fa-chevron-right"></i>
              </q-btn>
            </div>
          </div>
        </div>

        <!-- ปุ่ม -->
      </div>

      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import appFooter from "../components/footer.vue";
export default {
  data() {
    return {
      popupSpelling: false,
      popupMulti: false,
      innerWidth: null,
      innerheigth: window.innerheigth
    };
  },
  components: {
    appFooter
  },
  methods: {
    onResize(x) {
      return (this.innerWidth = x.width), (this.innerheigth = x.height);
    },
    nextBtn() {
      this.$router.push("/customclass");
    },
    homeBtn() {
      this.$router.push("/tutorial01a");
    },
    backBtn() {
      this.$router.push("/file");
    }
  }
};
</script>

<style>
img {
  width: 100%;
  max-width: 900px;
}
</style>
