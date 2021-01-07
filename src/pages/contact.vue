<template>
  <div>
    <q-resize-observer @resize="onResize" />
    <div class="row">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <div class="q-pa-lg">
          <div
            :class="$q.platform.is.desktop ? 'q-px-xl q-pt-xl q-mt-md' : ''"
            class="relative-position"
          >
            <div><b>ติดต่อทีมงาน</b></div>
            <!-- ที่อยู่บริษัท -->
            <div class="row">
              <span style="width:40px">
                <q-icon size="20px" name="fas fa-map-marker-alt" />
              </span>

              <span class="cursor-pointer col">
                <span
                  onclick="window.open('https://www.google.com/maps/place/%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B8%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B9%87%E0%B8%81%E0%B8%8B%E0%B9%8C/@13.7487136,100.5470682,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29ec3baece621:0xfc8b407be8f878bb!8m2!3d13.7487136!4d100.5492569', '_blank')"
                  >1673/26 อาคารวิทยุคอมเพล็กซ์ ถนนเพชรบุรีตัดใหม่ แขวงมักกะสัน
                  เขตราชเทวี กรุงเทพฯ 10400</span
                >
              </span>
            </div>
            <!-- เบอร์โทรศัพท์ -->
            <div>
              <div class="row">
                <span class="q-pr-md" style="width:40px">
                  <q-icon size="20px" name="fas fa-phone-alt" />
                </span>
                <a
                  style="text-decoration: none;"
                  class="text-black"
                  href="tel:02-026-0177"
                  >02-026-0177</a
                >
                <div class="q-ml-sm">
                  (สำหรับนักเรียน)
                </div>
              </div>
              <div class="row">
                <span style="width:40px"> </span>
                <a
                  style="text-decoration: none; "
                  class="text-black"
                  href="tel:02-252-2489"
                  >02-252-2489</a
                >
                <div class="q-ml-sm">
                  (สำหรับโรงเรียน)
                </div>
              </div>
            </div>
            <!-- EMAIL -->
            <div class="row">
              <span style="width:40px">
                <q-icon size="20px" name="fas fa-envelope" />
              </span>
              <span class="cursor-pointer">
                <span
                  lass="text-white"
                  onclick="window.open('https://info.winnerenglish@gmail.com', '_blank')"
                  >info.winnerenglish@gmail.com</span
                >
              </span>
            </div>
            <!-- facebook -->
            <div class="row">
              <span style="width:40px">
                <q-icon size="20px" name="fab fa-facebook-square" />
              </span>
              <span
                class="cursor-pointer"
                onclick="window.open('https://www.facebook.com/WinnerEng', '_blank')"
                >www.facebook.com/WinnerEng</span
              >
            </div>
            <!-- LINE -->
            <div class="row">
              <span style="width:40px">
                <q-icon size="20px" name="fab fa-line" />
              </span>
              <span
                class="cursor-pointer"
                onclick="window.open('http://line.me/ti/p/%40Winner_QA', '_blank')"
                >@Winner_QA</span
              >
            </div>
            <!-- google map -->
            <div class="q-mt-md">
              <div align="center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5014670103938!2d100.54693251520547!3d13.74860539034953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f9adf53533b%3A0x1fbefba3c62206f3!2sEdutech%20Innovation!5e0!3m2!1sth!2sth!4v1609923598885!5m2!1sth!2sth"
                  frameborder="0"
                  style="border-radius:5px;border:0;width:100%;max-width:600px;height:300px"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  class="shadow-2"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12 relative-position">
        <q-img
          class="relative-position bg-block"
          style="height:calc(100vh - 58px)"
          src="
            ../statics/image/contactUs/bgContact.png
          "
        >
          <div
            align="center"
            class="absolute-center bg-white shadow-4 txcl1"
            style="width:90%;max-width:460px;height:620px;border-radius:5px"
          >
            <div style="width:fit-content" class="full-width">
              <div
                align="left"
                class=" q-pt-md text-black"
                style="width:95%;max-width:365px"
              >
                <b>ส่งข้อความถึงเรา</b>
              </div>
              <!-- ชื่อ -->
              <div class="q-mt-md">
                <q-input
                  outlined
                  dense
                  v-model="name"
                  label-slot=""
                  style="width:95%;max-width:365px;font-size:16px"
                >
                  <template v-slot:label>
                    <div
                      style="font-size:18px;top:3px"
                      class="relative-position"
                    >
                      ชื่อ
                    </div>
                  </template>
                </q-input>
              </div>
              <!-- เบอร์โทรศัพท์ -->
              <div class="q-my-md">
                <q-input
                  outlined
                  dense
                  v-model="tel"
                  label-slot
                  style="width:95%;max-width:365px"
                >
                  <template v-slot:label>
                    <div
                      style="font-size:18px;top:3px"
                      class="relative-position"
                    >
                      เบอร์โทรศัพท์
                    </div>
                  </template>
                </q-input>
              </div>
              <!-- อีเมล -->
              <div>
                <q-input
                  outlined
                  dense
                  v-model="email"
                  label-slot
                  style="width:95%;max-width:365px;"
                >
                  <template v-slot:label>
                    <span style="font-size:18px">อีเมล</span>
                  </template>
                </q-input>
              </div>
              <!-- ช่องทางการติดต่อกลับ -->
              <div class="q-mt-md q-mb-sm">
                <div
                  align="left"
                  style="width:95%;max-width:365px;font-size:20px"
                >
                  ช่องทางที่ต้องการให้ติดต่อกลับ
                </div>
                <div style="width:95%;max-width:365px" class="row">
                  <div>
                    <q-radio
                      style="font-size:20px"
                      color="black"
                      v-model="contactWith"
                      val="email"
                      label="อีเมล"
                    />
                  </div>
                  <div class="q-ml-lg">
                    <q-radio
                      style="font-size:20px"
                      color="black"
                      v-model="contactWith"
                      val="telephone"
                      label="เบอร์โทรศัพท์"
                    />
                  </div>
                </div>
              </div>
              <div>
                <q-select
                  style="width:95%;max-width:365px"
                  outlined
                  dense
                  v-model="titleCase"
                  :options="caseList"
                  label-slot
                >
                  <template v-slot:label>
                    <span style="font-size:18px">กรุณาเลือกหัวข้อ</span>
                  </template>
                </q-select>
              </div>
              <div class="q-mt-md">
                <q-input
                  v-model="detail"
                  outlined=""
                  type="textarea"
                  style="width:95%;max-width:365px;font-size:18px"
                />
              </div>
              <div class="q-mt-md">
                <q-btn
                  rounded
                  class="bgcl1 text-white"
                  label="ส่งข้อมูล"
                  style="width:95%;max-width:365px;font-size:16px"
                />
              </div>
            </div>
          </div>
        </q-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      tel: "",
      email: "",
      detail: "",
      contactWith: "email",
      titleCase: "ขอรายละเอียดโปรแกรมเพิ่มเติม",
      caseList: [
        "ขอรายละเอียดโปรแกรมเพิ่มเติม",
        "สนใจซื้อโปรแกรมเรียนออนไลน์",
        "สนใจร่วมธุรกิจ/ตัวแทนจำหน่าย",
        "สอบถามเกี่ยวกับการใช้งาน",
        "อื่นๆ"
      ],
      innerWidth: "",
      innerHeight: ""
    };
  },
  methods: {
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-block {
  background: #e7f7ff;
}
.txcl1 {
  color: #5c5c5c;
}
.bgcl1 {
  background: #3f51b5;
}
</style>
