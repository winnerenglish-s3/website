<template>
  <div>
    <q-resize-observer @resize="onResize" />
    <div class="bgbottomall q-pa-md text-white col-12" style="max-width:1280px">
      <div class="q-pl-md" style="width:100%;max-width:1200px;">
        <div class="text-left relative-position">
          <div>
            <span class="q-pr-md">
              <q-icon size="20px" name="fas fa-globe-asia" />
            </span>
            <span class="cursor-pointer">
              <span
                class="text-white"
                onclick="window.open('https://www.winner-english.com', '_blank')"
                >www.winner-english.com</span
              >
            </span>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-12 col-xs-12">
              <span class="q-pr-md">
                <q-icon size="20px" name="fas fa-phone-alt" />
              </span>
              <a
                class="text-white"
                style="text-decoration: none; "
                href="tel:02-026-0177"
                >02-026-0177</a
              >
              (สำหรับนักเรียน)
            </div>
            <div class="col-md col-sm-12 col-xs-12">
              <span class="q-pr-md">
                <q-icon size="20px" name="fas fa-phone-alt" />
              </span>
              <a
                class="text-white"
                style="text-decoration: none; "
                href="tel:02-252-2489"
                >02-252-2489</a
              >
              (สำหรับโรงเรียน)
            </div>
          </div>
          <div>
            <span class="q-pr-md">
              <q-icon size="20px" name="fab fa-facebook-square" />
            </span>
            <span
              class="cursor-pointer"
              onclick="window.open('https://www.facebook.com/WinnerEng', '_blank')"
              >www.facebook.com/WinnerEng</span
            >
          </div>
          <div>
            <span class="q-pr-md">
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
          <div class="row">
            <span class="q-pr-md">
              <q-icon size="20px" name="fas fa-map-marker-alt" />
            </span>

            <span class="cursor-pointer col">
              <span
                lass="text-white"
                onclick="window.open('https://www.google.com/maps/place/%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B8%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B9%87%E0%B8%81%E0%B8%8B%E0%B9%8C/@13.7487136,100.5470682,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29ec3baece621:0xfc8b407be8f878bb!8m2!3d13.7487136!4d100.5492569', '_blank')"
                >1673/26 อาคารวิทยุคอมเพล็กซ์ ถนนเพชรบุรีตัดใหม่ แขวงมักกะสัน
                เขตราชเทวี กรุงเทพฯ 10400</span
              >
            </span>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerWidth: null,
      innerHeight: null
    };
  },
  methods: {
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    }
  }
};
</script>
