<template>
  <div align="center">
    <q-resize-observer @resize="onResize" />
    <div class="shadow-1" style="max-width:1280px">
      <div v-show="innerWidth >= 950">
        <div align="left" class="q-px-md">
          <router-link to="manual">คู่มือการใช้งาน</router-link>&nbsp;>
          <router-link to="tutorial01a">เรียนรู้การใช้งาน</router-link>&nbsp;>&nbsp;ข้อมูลผู้ใช้
        </div>
      </div>
      <div style="width:100%;max-width:900px ; margin:auto;">
        <div v-show="innerWidth < 950">
          <div align="left" class style="max-width:1280px; width:90%">
            <router-link to="manual">คู่มือ</router-link>&nbsp;>
            <router-link to="tutorial01a">เรียนรู้</router-link>&nbsp;>&nbsp;ข้อมูลผู้ใช้
          </div>
        </div>

        <div class="text-h3 cl1 q-py-md" align="center">ข้อมูลผู้ใช้</div>
        <div align="center">หน้าข้อมูลผู้ใช้มีวิธีการเปลี่ยนรหัสผ่านได้ ดังนี้</div>
        <div class="q-py-md q-px-sm">
          <img src="../statics/user.png" alt />
        </div>
        <!-- block #1 -->

        <div class="row">
          <div
            class="text-left q-pa-md"
          >คุณครูสามารถเปลี่ยนได้เฉพาะ รหัสผ่าน ถ้าต้องการเปลี่ยน ชื่อผู้ใช้งาน หรือ เบอร์โทรศัพท์ กรุณาติดต่อผู้ประสานงานโรงเรียน</div>
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">1</div>
          </div>
          <div class="col self-start label">กรอก “รหัสผ่านปัจจุบัน” ที่มีการใช้งานอยู่</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">2</div>
          </div>
          <div class="col self-start label">กรอก “รหัสผ่านใหม่”</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">3</div>
          </div>
          <div class="col self-start label">กรอก “ยืนยันรหัสผ่านใหม่” "</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">4</div>
          </div>
          <div class="col self-start label">กดปุ่ม “บันทึกข้อมูล”</div>
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
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import appFooter from "../components/footer.vue";
export default {
  data() {
    return {
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
      this.$router.push("/score");
    },
    homeBtn() {
      this.$router.push("/tutorial01a");
    },
    backBtn() {
      this.$router.push("/language");
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
