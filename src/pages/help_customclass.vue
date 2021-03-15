<template>
  <div align="center">
    <q-resize-observer @resize="onResize" />
    <div class="shadow-1" style="max-width:1280px">
      <div v-show="innerWidth >= 950">
        <div align="left" class="q-px-md">
          <router-link to="manual">คู่มือการใช้งาน</router-link>&nbsp;>
          <router-link to="tutorial01a">เรียนรู้การใช้งาน</router-link>&nbsp;>&nbsp;เลือกเรียนเอง
        </div>
      </div>
      <div style="width:100%;max-width:900px ; margin:auto;">
        <div v-show="innerWidth < 950">
          <div align="left" class style="max-width:1280px; width:90%">
            <router-link to="manual">คู่มือ</router-link>&nbsp;>
            <router-link to="tutorial01a">เรียนรู้</router-link>&nbsp;>&nbsp;เลือกเรียนเอง
          </div>
        </div>

        <div class="text-h3 cl1 q-py-md" align="center">การเลือกเรียนแบบกำหนดเอง</div>

        <div class="q-py-md q-px-sm">
          <img src="../statics/custom01.png" alt />
        </div>
        <div class="row">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">1</div>
          </div>
          <div class="col self-start label">กดปุ่ม "เลือกบทเรียน"</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption2">2</div>
          </div>
          <div class="col self-start label">
            คุณครูสามารถเลือกทักษะที่ต้องการสอนได้อย่างอิสระ โดยสามารถเลือกได้ทั้ง
            คำศัพท์ ไวยากรณ์ การอ่าน การเขียน การออกเสียง และ การพูดและการฟัง
          </div>
        </div>
        <div class="q-py-md q-px-sm">
          <img src="../statics/custom02.png" alt />
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">3</div>
          </div>
          <div class="col self-start label">
            ในกรณีนี้ เราจะยกตัวอย่าง ถ้าคุณครูต้องการเลือกเรียน ไวยากรณ์ คุณครูสามารถ
            กดเลือกไวยากรณ์ได้เลย
          </div>
        </div>
        <div class="q-py-md q-px-sm">
          <img src="../statics/custom03.png" alt />
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">4</div>
          </div>
          <div class="col self-start label">
            ในหน้านี้จะมีหัวข้อของไวยากรณ์ ให้คุณครูได้เลือกทั้ง 16 บท ในกรณีนี้ สมมุติว่า
            คุณครูต้องการสอนบทที่ 3 Articles a, an, the , Zero Article คุณครูสามารถคลิกเลือกหัวข้อบทที่ 3 ได้เลย
          </div>
        </div>

        <div class="q-py-md q-px-sm">
          <img src="../statics/custom04.png" alt />
        </div>

        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption2">5</div>
          </div>
          <div class="col self-start label q-pr-sm">
            คุณครูสามารถเลือกการสอน และแบบฝึกหัดทั้งหมด ในทักษะไวยากรณ์ บทที่ 3
            โดยคุณครูสามารถเลือกสอนได้ตามต้องการ โดยการคลิกเข้าหัวข้อที่ต้องการ
          </div>
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
            <q-btn disable size="18px" round class="bg1 text-white text-h4" unelevated rounded>
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
      popupTran: false,
      innerWidth: null,
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

    homeBtn() {
      this.$router.push("/tutorial01a");
    },
    backBtn() {
      this.$router.push("/game");
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