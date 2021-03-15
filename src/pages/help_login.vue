<template>
  <div align="center">
    <q-resize-observer @resize="onResize" />
    <q-card style="max-width:1280px">
      <div v-show="innerWidth >= 950">
        <div align="left" class="q-px-md">
          <router-link to="manual">คู่มือการใช้งาน</router-link>&nbsp;>
          <router-link to="tutorial01a">เรียนรู้การใช้งาน</router-link>&nbsp;>&nbsp;การเข้าสู่ระบบ
        </div>
      </div>
      <div>
        <div style="width:100%;max-width:900px ; margin:auto;">
          <div v-show="innerWidth < 950">
            <div align="left" class style="max-width:1280px; width:90%">
              <router-link to="manual">คู่มือ</router-link>&nbsp;>
              <router-link to="tutorial01a">เรียนรู้</router-link>&nbsp;>&nbsp;เข้าสู่ระบบ
            </div>
          </div>

          <div class="text-h3 cl1 q-py-md" align="center">การเข้าสู่ระบบ</div>
          <div align="center">การเข้าสู่ระบบ มีขั้นตอนตามลำดับ ดังนี้</div>
          <div class="q-py-md q-px-sm">
            <img src="../statics/01-1.jpg" alt />
          </div>
          <!-- block #1 -->
          <div class="row">
            <div class="col-1" style="width:50px" align="center">
              <div class="caption">1</div>
            </div>
            <div class="col self-start label">กรอก "รหัสผู้ใช้งาน"</div>
          </div>
          <div class="row q-pt-md">
            <div class="col-1" style="width:50px" align="center">
              <div class="caption">2</div>
            </div>
            <div class="col self-start label">กรอก "รหัสผ่าน"</div>
          </div>
          <div class="row q-pt-md">
            <div class="col-1" style="width:50px" align="center">
              <div class="caption">3</div>
            </div>
            <div class="col self-start label">เลือก "คุณครู"</div>
          </div>
          <div class="row q-pt-md">
            <div class="col-1" style="width:50px" align="center">
              <div class="caption">4</div>
            </div>
            <div class="col self-start label">กดปุ่ม "เข้าสู่ระบบ"</div>
          </div>

          <!-- block #2 -->
          <div class="q-py-md q-px-sm">
            <img src="../statics/01-2.jpg" alt />
          </div>
          <div class="row">
            <div class="col-1" style="width:50px" align="center">
              <div class="caption">5</div>
            </div>
            <div class="col self-start label">เลือก "ชั้น"</div>
          </div>
          <div class="row q-pt-md">
            <div class="col-1" style="width:50px" align="center">
              <div class="caption">6</div>
            </div>
            <div class="col self-start label">เลือก “ห้อง”</div>
          </div>
          <div class="row q-pt-md">
            <div class="col-1" style="width:50px" align="center">
              <div class="caption">7</div>
            </div>
            <div class="col self-start label">กดปุ่ม “ตกลง”</div>
          </div>

          <!-- block #3 -->
          <div class="q-py-md q-px-sm">
            <img src="../statics/01-3.png" alt />
          </div>
          <div class="row">
            <div class="col-1" style="width:50px" align="center">
              <div class="caption2">8</div>
            </div>
            <div class="col self-start label">จำนวนนักเรียนที่ยังไม่เข้าสู่ระบบ</div>
          </div>
          <div class="row q-pt-md">
            <div class="col-1" style="width:50px" align="center">
              <div class="caption">9</div>
            </div>
            <div
              class="col label self-start"
            >กดปุ่ม "ขึ้นเรือ" หากนักเรียนเข้าเรียนครบทุกคน ระบบจะนำเข้าสู่บทเรียน</div>
          </div>
          <!-- 
          <div class="q-pt-md  q-px-sm">
            <div align="left">
              <div
                class="bg4 cl3"
                align="center"
                style="width:100px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
              >กรณีพิเศษ</div>
            </div>
            <div class="special q-pa-sm">
              <div align="left">
                <div
                  class="q-pb-sm"
                >กรณีนักเรียนเข้าเรียนไม่ครบหรือมีความจำเป็นต้องนั่งเรียนกับเพื่อน</div>
          </div>-->
          <!-- block #4 -->
          <!-- <div class="q-py-md">
                <img src="../statics/01-4.jpg" alt />
              </div>
              <div class="row">
                <div class="col-1" style="width:50px" align="center">
                  <div class="caption2">10</div>
                </div>
                <div class="col self-start label">ตรวจสอบรายชื่อนักเรียนที่ยังไม่ได้เข้าระบบในตอนนี้</div>
              </div>
              <div class="row q-pt-md">
                <div class="col-1" style="width:50px" align="center">
                  <div class="caption">11</div>
                </div>
                <div class="col self-start label">กดปุ่ม "ถัดไป"</div>
          </div>-->

          <!-- block #5 -->
          <!-- <div class="q-py-md">
                <img src="../statics/01-5.jpg" alt />
              </div>
              <div class="row">
                <div class="col-1" style="width:50px" align="center">
                  <div class="caption">12</div>
                </div>
                <div class="col self-start label">กรณีนักเรียนที่ไม่มาเรียน เลือก "ขาดเรียน"</div>
              </div>
              <div class="row q-pt-md">
                <div class="col-1" style="width:50px" align="center">
                  <div class="caption">13</div>
                </div>
                <div
                  class="col label self-start"
                >กรณีนักเรียนที่ต้องนั่งเรียนคู่กับเพื่อน เลือกเลขที่นักเรียนที่จับคู่เพื่อเรียนพร้อมกัน</div>
              </div>
              <div class="row q-pt-md q-pb-md">
                <div class="col-1" style="width:50px" align="center">
                  <div class="caption">14</div>
                </div>
                <div class="col self-start label">กดปุ่ม "ตกลง" เพื่อเข้าสู่การเรียน</div>
              </div>
            </div>
          </div>-->

          <!-- navigator -->
          <div class="row q-my-xl q-px-sm">
            <div class="col-2" align="left">
              <q-btn
                disable
                size="18px"
                round
                class="bg-grey-7 text-white text-h4"
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
    </q-card>
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
      this.$router.push("/voting");
    },
    homeBtn() {
      this.$router.push("/tutorial01a");
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
