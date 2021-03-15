<template>
  <div align="center">
    <q-resize-observer @resize="onResize" />
    <div class="shadow-1" style="max-width:1280px">
      <div v-show="innerWidth >= 950">
        <div align="left" class="q-px-md">
          <router-link to="manual">คู่มือการใช้งาน</router-link>&nbsp;>
          <router-link to="tutorial01a">เรียนรู้การใช้งาน</router-link>&nbsp;>&nbsp;คะแนน
        </div>
      </div>
      <div style="width:100%;max-width:900px ; margin:auto;">
        <div v-show="innerWidth < 950">
          <div align="left" class style="max-width:1280px; width:90%">
            <router-link to="manual">คู่มือ</router-link>&nbsp;>
            <router-link to="tutorial01a">เรียนรู้</router-link>&nbsp;>&nbsp;คะแนน
          </div>
        </div>

        <div class="text-h3 cl1 q-py-md" align="center">คะแนน</div>
        <div align="center">หน้าคะแนน มีรายละเอียดและวิธี ดังนี้</div>
        <div class="q-py-md q-px-sm">
          <img src="../statics/score/score01.png" alt />
        </div>
        <div class="row">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">A</div>
          </div>
          <div class="col self-start label">
            กดปุ่ม “คะแนนทบทวน” สามารถเข้าไปตรวจสอบคะแนนทบทวนของนักเรียน โดยคุณครูสามารถเลือกดู “ทบทวนคำศัพท์” หรือ “ทบทวนไวยากรณ์” โดยสามารถดูข้อมูล เพิ่มเติมได้ที่
            <span
              class="cursor-pointer cl1"
              @click="reportLink()"
            >
              <u>คะแนนทบทวน</u>
            </span>
          </div>
        </div>

        <div class="row q-py-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">B</div>
          </div>
          <div class="col self-start label">
            กดปุ่ม “คะแนนเก็บ” สามารถเข้าไปคำนวณและตรวจสอบคะแนนของนักเรียนได้ โดยคุณครู สามารถจัดการเลือกคำนวณคะแนน ในแต่ละทักษะได้ตามดุลยพินิจของคุณครู โดยสามารถดูข้อมูล เพิ่มเติมได้ที่
            <span
              class="cursor-pointer cl1"
              @click="scoreLink()"
            >
              <u>คะแนนเก็บ</u>
            </span>
          </div>
        </div>

        <div class="row">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">C</div>
          </div>
          <div class="col self-start label">
            กดปุ่ม “คะแนนแบบฝึกหัด / ทักษะ” สามารถเข้าไปตรวจสอบคะแนนของนักเรียน โดยคุณครูสามารถเลือกดู “แยกตามแบบฝึกหัด” หรือ “แยกตามทักษะ” ของแต่ละ บท ได้ โดยสามารถดูข้อมูล เพิ่มเติมได้ที่
            <span
              class="cursor-pointer cl1"
              @click="exerciseScore()"
            >
              <u>คะแนนแบบฝึกหัด / ทักษะ</u>
            </span>
          </div>
        </div>

        <div class="row q-py-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">D</div>
          </div>
          <div class="col self-start label">
            กดปุ่ม “คะแนนทดสอบก่อนเรียน / หลังเรียน” สามารถเข้าไปตรวจสอบคะแนนทดสอบ ก่อนเรียน และ หลังเรียน ของนักเรียนได้ โดยสามารถดูข้อมูล เพิ่มเติมได้ที่
            <span
              class="cursor-pointer cl1"
              @click="prePostLink()"
            >
              <u>คะแนนทดสอบก่อนเรียน / หลังเรียน</u>
            </span>
          </div>
        </div>

        <!-- คะแนนทบทวน  -->
        <div class="q-py-lg q-px-sm" id="scoreReport">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:200px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >คะแนนทบทวน</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/score/score02.png" alt />

            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">1</div>
              </div>
              <div class="col self-start label">เลือก ชั้น/ห้อง</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">2</div>
              </div>
              <div class="col self-start label">เลือก รูปแบบคะแนน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">3</div>
              </div>
              <div class="col self-start label">ตารางคะแนนทบทวน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">4</div>
              </div>
              <div class="col self-start label">กดปุ่มเพื่อพิมพ์</div>
            </div>
          </div>
        </div>

        <!-- คะแนนเก็บ -->
        <div class="q-py-lg q-px-sm" id="scoreLink">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:120px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >คะแนนเก็บ</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/score/score04.png" alt />

            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">1</div>
              </div>
              <div class="col self-start label">เลือก ชั้น/ห้อง</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">2</div>
              </div>
              <div class="col self-start label">ใส่ คะแนนเต็ม ที่ต้องการ</div>
            </div>

            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">3</div>
              </div>
              <div class="col self-start label">เลือก “บทเดียว” หรือ “หลายบท” ที่ต้องการมาคำนวณคะแนน</div>
            </div>

            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">4</div>
              </div>
              <div class="col self-start label">เลือก ทักษะที่เก็บคะแนน</div>
            </div>

            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">5</div>
              </div>
              <div class="col self-start label">ตารางคะแนนเก็บ</div>
            </div>

            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">6</div>
              </div>
              <div class="col self-start label">กดปุ่มเพื่อพิมพ์</div>
            </div>
          </div>
        </div>

        <!-- คะแนนแบบฝึกหัด / ทักษะ -->
        <div class="q-py-lg q-px-sm" id="exerciseScore">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:280px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >คะแนนแบบฝึกหัด / ทักษะ</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/score/score06.png" alt />

            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">1</div>
              </div>
              <div class="col self-start label">เลือก ชั้น/ห้อง</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">2</div>
              </div>
              <div class="col self-start label">เลือก บทที่</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">3</div>
              </div>
              <div class="col self-start label">เลือก รูปแบบคะแนน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">4</div>
              </div>
              <div class="col self-start label">ตารางคะแนนแบบฝึกหัด / ทักษะ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">5</div>
              </div>
              <div class="col self-start label">กดปุ่มเพื่อพิมพ์</div>
            </div>
          </div>
        </div>

        <!-- คะแนนทดสอบก่อนเรียน / หลังเรียน -->
        <div class="q-py-lg q-px-sm" id="prePostLink">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="max-width:400px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >คะแนนทดสอบก่อนเรียน / หลังเรียน</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/score/score07.png" alt />

            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">1</div>
              </div>
              <div class="col self-start label">เลือก ชั้น/ห้อง</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">2</div>
              </div>
              <div class="col self-start label">เลือก รูปแบบคะแนน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">3</div>
              </div>
              <div class="col self-start label">ตารางคะแนนทดสอบก่อนเรียน / หลังเรียน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">4</div>
              </div>
              <div class="col self-start label">กดปุ่มเพื่อพิมพ์</div>
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
      innerWidth: null,
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
    exerciseScore() {
      document.getElementById("exerciseScore").scrollIntoView();
    },
    prePostLink() {
      document.getElementById("prePostLink").scrollIntoView();
    },

    onResize(x) {
      return (this.innerWidth = x.width), (this.innerheigth = x.height);
    },
    nextBtn() {
      this.$router.push("/file");
    },
    homeBtn() {
      this.$router.push("/tutorial01a");
    },
    backBtn() {
      this.$router.push("/user");
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
