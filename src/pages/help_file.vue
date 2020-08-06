<template>
  <div align="center">
    <q-resize-observer @resize="onResize" />
    <div class="shadow-1" style="max-width:1280px">
      <div v-show="innerWidth >= 950">
        <div align="left" class="q-px-md">
          <router-link to="manual">คู่มือการใช้งาน</router-link>&nbsp;>
          <router-link to="tutorial01a">เรียนรู้การใช้งาน</router-link>&nbsp;>&nbsp;แฟ้มข้อมูล
        </div>
      </div>
      <div style="width:100%;max-width:900px ; margin:auto;">
        <div v-show="innerWidth < 950">
          <div align="left" class style="max-width:1280px; width:90%">
            <router-link to="manual">คู่มือ</router-link>&nbsp;>
            <router-link to="tutorial01a">เรียนรู้</router-link>&nbsp;>&nbsp;แฟ้มข้อมูล
          </div>
        </div>

        <div class="text-h3 cl1 q-py-md" align="center">แฟ้มข้อมูล</div>
        <div align="center">หน้าแฟ้มข้อมูล มีรายละเอียดและวิธี ดังนี้</div>
        <div class="q-py-md q-px-sm">
          <img src="../statics/file/file01.png" alt />
        </div>
        <div class="row">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">A</div>
          </div>
          <div class="col self-start label">
            กดปุ่ม “แผนการสอน” สามารถเข้าไปตรวจสอบแผนการสอนในแต่ละระดับชั้นได้ โดยสามารถดูข้อมูล เพิมเติมได้ที่
            <span
              class="cursor-pointer cl1"
              @click="reportLink()"
            >
              <u>แผนการสอน</u>
            </span>
          </div>
        </div>

        <div class="row q-py-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">B</div>
          </div>
          <div class="col self-start label">
            กดปุ่ม “รายชื่อนักเรียน” สามารถเข้าไปตรวจสอบรายชื่อนักเรียน รหัสผู้ใช้งาน และรหัสผ่านของนักเรียน ในแต่ละระดับชั้นได้ โดยสามารถดูข้อมูล เพิมเติมได้ที่
            <span
              class="cursor-pointer cl1"
              @click="scoreLink()"
            >
              <u>รายชื่อนักเรียน</u>
            </span>
          </div>
        </div>

        <div class="row">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">C</div>
          </div>
          <div class="col self-start label">
            กดปุ่ม “คู่มือช่วยเหลือ” สามารถเข้าไปเรียนรู้การใช้งาน และวิธีแก้ปัญหาการใช้งานในเบื้องต้นได้ โดย สามารถดูข้อมูลเพิ่มเติมได้ที่
            <span
              class="cursor-pointer cl1"
              @click="prePostLink()"
            >
              <u>คู่มือช่วยเหลือ</u>
            </span>
          </div>
        </div>

        <!-- แผนการสอน  -->
        <div class="q-py-lg q-px-sm" id="scoreReport">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:160px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >แผนการสอน</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/file/file02.png" alt />

            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">1</div>
              </div>
              <div class="col self-start label">กดเพื่อ กลับหน้าแฟ้มข้อมูล</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">2</div>
              </div>
              <div class="col self-start label">เลือก ชั้น/ห้อง</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">3</div>
              </div>
              <div class="col self-start label">กดเพื่อดาวน์โหลดแผนการสอน</div>
            </div>
          </div>
        </div>

        <!-- รายชื่อนักเรียน -->
        <div class="q-py-lg q-px-sm" id="scoreLink">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:160px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >รายชื่อนักเรียน</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/file/file03.png" alt />

            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">1</div>
              </div>
              <div class="col self-start label">กดเพื่อ กลับหน้าแฟ้มข้อมูล</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">2</div>
              </div>
              <div class="col self-start label">เลือก ชั้น/ห้อง</div>
            </div>

            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">3</div>
              </div>
              <div class="col self-start label">ตารางรายชื่อนักเรียน</div>
            </div>

            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">4</div>
              </div>
              <div class="col self-start label">กดปุ่มเพื่อพิมพ์</div>
            </div>
          </div>
        </div>

        <!-- คู่มือช่วยเหลือ -->
        <div class="q-py-lg q-px-sm" id="prePostLink">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:280px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >คู่มือช่วยเหลือ</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/file/file05.jpg" alt />

            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">1</div>
              </div>
              <div
                class="col self-start label"
              >กดปุ่ม "เรียนรู้การใช้งาน" กรณีไม่ทราบวิธีหรือขั้นตอนการใช้โปรแกรม Winner Adventures</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">2</div>
              </div>
              <div
                class="col self-start label"
              >กดปุ่ม "ปัญหาการใช้งาน" กรณีพบปัญหาการใช้งาน แล้วต้องการแก้ไขปัญหาในเบื้องต้น</div>
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
                class="bg1 text-white text-h4"
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
      innerWidth: window.innerWidth,
      innerheigth: window.innerheigth
    };
  },
  components: {
    appFooter
  },
  methods: {
    reportLink() {
      document.getElementById("scoreReport").scrollIntoView();
    },
    scoreLink() {
      document.getElementById("scoreLink").scrollIntoView();
    },
    prePostLink() {
      document.getElementById("prePostLink").scrollIntoView();
    },

    onResize(x) {
      return (this.innerWidth = x.width), (this.innerheigth = x.height);
    },
    nextBtn() {
      this.$router.push("/game");
    },
    homeBtn() {
      this.$router.push("/tutorial01a");
    },
    backBtn() {
      this.$router.push("/score");
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
