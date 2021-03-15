<template>
  <q-page>
    <div>
      <q-img src="../../public/img-tutor.png">
        <q-card
          class="no-padding absolute-center"
          :class="$q.platform.is.mobile ? 'bg-card-mobile' : 'card-radius bg-card'"
          style="max-width: 550px; width: 100%"
        >
          <q-card-section
            :class="
              $q.platform.is.mobile
                ? 'text-color-mobile'
                : 'text-color-desktop text-weight-bold'
            "
          >
            <div align="center" style="font-size: 2.8vh">ลงทะเบียนเรียน Winner Tutor</div>
            <div align="center" style="font-size: 2.6vh">
              รับสิทธิ์ทดสอบวัดระดับภาษาฟรีได้แล้ววันนี้
            </div>
            <div align="center" class="q-pt-sm">
              <q-btn
                dense
                style="
                  border-radius: 30px;
                  background-color: #9b115e;
                  color: white;
                  font-size: 2vh;
                "
                label="ลงทะเบียนเรียน คลิก!!"
                class="q-px-md"
              ></q-btn>
            </div>
          </q-card-section>
        </q-card>
      </q-img>
    </div>

    <div
      align="center"
      class="q-mt-xl text-weight-bold"
      style="font-size: 48px; color: #9b115e; letter-spacing: 1px"
    >
      WINNER TUTOR
    </div>
    <p align="center" class="q-px-md" style="font-size: 3.5vh">
      คอร์สเรียนภาษาอังกฤษออนไลน์ แบบสอนสด พร้อมติวเตอร์ผู้เชี่ยวชาญ
    </p>
    <p align="center" class="q-px-md" style="font-size: 3.5vh">
      เรียนสนุก เข้าใจง่าย ด้วยดิจิทัลแฟลตฟอร์มที่ทันสมัยจาก Winner English
    </p>

    <!-- Desktop Card -->
    <div
      class="row q-gutter-lg desktop-only justify-center"
      style="padding-left: 5%; padding-right: 5%"
    >
      <div style="width: 300px" v-for="(item, index) in skillList" :key="index">
        <q-card class="q-pa-md shadow-10" style="border-radius: 20px" align="center">
          <q-card-section>
            <q-img style="width: 65px" :src="item.img"></q-img>
          </q-card-section>
          <span v-html="item.content"></span>
        </q-card>
      </div>
    </div>

    <!-- Mobile Card -->

    <q-carousel
      animated
      v-model="slide"
      infinite
      :autoplay="true"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      style="height: 270px"
      navigation
      control-color="primary"
      swipeable
      class="mobile-only"
    >
      <q-carousel-slide v-for="(item, index) in skillList" :key="index" :name="index + 1">
        <q-card>
          <q-card-section align="center">
            <div align="center">
              <q-img style="width: 80px" :src="item.img"></q-img>
              <div align="center" v-html="item.content"></div>
            </div>
          </q-card-section>
        </q-card>
      </q-carousel-slide>
    </q-carousel>

    <!-- Desktop Graph -->
    <div class="row desktop-only q-px-xl q-py-xl">
      <div class="col-6">
        <q-img style="width: 70%" src="../../public/graph.png"></q-img>
      </div>
      <div class="col-6">
        <div style="color: #9b115e; font-size: 36px" class="text-weight-bolder">
          โครงสร้างบทเรียนของ Winnner Tutor
        </div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Winner Tutor
          พัฒนาเนื้อหาวิชาภาษาอังกฤษตรงตามตัวชี้วัด หลักสูตรแกนกลางกระทรวงศึกษาธิการ
          โดยโครงสร้างบทเรียนแบ่งออก เป็น 12 Level ตามระดับความยาก โดยแต่ละ Level
          จะมีเนื้อหาให้เลือก เรียนมากถึง 16 Unit แต่ละ Unit สามารถเรียนรู้ได้ครบทุกทักษะ
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เรามีการทดสอบวัดระดับภาษา (Placement Test)
          เพื่อจัด Level ที่เหมาะสมให้กับนักเรียนทุกคน ซึ่งจะช่วยพัฒนาทักษะภาษาอังกฤษ
          ของนักเรียนแต่ละคนที่มีพื้นฐานแตกต่างกันได้อย่างมี ประสิทธิภาพ
        </p>
      </div>
    </div>

    <!-- Mobile Graph -->

    <div class="mobile-only q-pa-lg">
      <div
        style="color: #3f51b5; font-size: 30px"
        align="center"
        class="text-weight-bold"
      >
        โครงสร้างบทเรียนของ<br />
        Winnner Discovery
      </div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Winner Tutor
        พัฒนาเนื้อหาวิชาภาษาอังกฤษตรงตามตัวชี้วัด หลักสูตรแกนกลางกระทรวงศึกษาธิการ
        โดยโครงสร้างบทเรียนแบ่งออก เป็น 12 Level ตามระดับความยาก โดยแต่ละ Level
        จะมีเนื้อหาให้เลือก เรียนมากถึง 16 Unit แต่ละ Unit สามารถเรียนรู้ได้ครบทุกทักษะ
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เรามีการทดสอบวัดระดับภาษา (Placement Test)
        เพื่อจัด Level ที่เหมาะสมให้กับนักเรียนทุกคน ซึ่งจะช่วยพัฒนาทักษะภาษาอังกฤษ
        ของนักเรียนแต่ละคนที่มีพื้นฐานแตกต่างกันได้อย่างมี ประสิทธิภาพ
      </p>

      <q-img style="width: 100%" src="../../public/graph.png"></q-img>
    </div>

    <!-- เด็กสามคน  desktop -->
    <div class="row q-pa-lg desktop-only">
      <div class="col-md-4 col-xs-12" align="center">
        <q-img src="../../public/t1.png" style="width: 180px"></q-img>
        <div class="text-weight-bold q-pt-md">Basic</div>
        <div>
          เนื้อหาเหมาะสำหรับนักเรียนวัย 6-10 ปี
          <br />ที่ต้องการปูพื้นฐานทักษะภาษาอังกฤษ<br />
          พร้อมทั้งพัฒนาทักษะการใช้เทคโนโลยี
        </div>
        <div
          class="q-py-md cursor-pointer"
          style="text-decoration: underline; color: #9b115e"
        >
          ดูตัวอย่าง
        </div>
      </div>
      <div class="col-md-4 col-xs-12" align="center">
        <q-img src="../../public/t2.png" style="width: 180px"></q-img>
        <div class="text-weight-bold q-pt-md">Intermediate</div>
        <div>
          เนื้อหาเหมาะสำหรับนักเรียนวัย 6-10 ปี
          <br />ที่ต้องการปูพื้นฐานทักษะภาษาอังกฤษ<br />
          พร้อมทั้งพัฒนาทักษะการใช้เทคโนโลยี
        </div>
        <div
          class="q-py-md cursor-pointer"
          style="text-decoration: underline; color: #9b115e"
        >
          ดูตัวอย่าง
        </div>
      </div>
      <div class="col-md-4 col-xs-12" align="center">
        <q-img src="../../public/t3.png" style="width: 180px"></q-img>
        <div class="text-weight-bold q-pt-md">Advanced</div>
        <div>
          เนื้อหาเหมาะสำหรับนักเรียนวัย 6-10 ปี
          <br />ที่ต้องการปูพื้นฐานทักษะภาษาอังกฤษ<br />
          พร้อมทั้งพัฒนาทักษะการใช้เทคโนโลยี
        </div>
        <div
          class="q-py-md cursor-pointer"
          style="text-decoration: underline; color: #9b115e"
        >
          ดูตัวอย่าง
        </div>
      </div>
    </div>

    <!-- เด็กสามคน mobile -->
    <div class="mobile-only">
      <div class="row q-px-lg">
        <div style="width: 130px">
          <q-img src="../../public/t1.png" style="width: 100%"></q-img>
        </div>
        <div class="col q-px-md">
          <div class="text-weight-bold">Basic</div>
          <div>
            เนื้อหาเหมาะสำหรับนักเรียนวัย 6-10 ปีที่ต้องการปูพื้นฐานทักษะ
            ภาษาอังกฤษพร้อมทั้งพัฒนา ทักษะการใช้เทคโนโลยี
          </div>
          <div
            class="q-py-md cursor-pointer"
            style="text-decoration: underline; color: #9b115e"
          >
            ดูตัวอย่าง
          </div>
        </div>
      </div>

      <div class="row q-px-lg q-py-lg">
        <div style="width: 130px">
          <q-img src="../../public/t2.png" style="width: 100%"></q-img>
        </div>
        <div class="col q-px-md">
          <div class="text-weight-bold">Intermediate</div>
          <div>
            เนื้อหาเหมาะสำหรับนักเรียนวัย 8-12 ปี เสริมความมั่นใจ ต่อยอด
            การเรียนรู้ทักษะภาษาอังกฤษ อย่างมีประสิทธิภาพ
          </div>
          <div
            class="q-py-md cursor-pointer"
            style="text-decoration: underline; color: #9b115e"
          >
            ดูตัวอย่าง
          </div>
        </div>
      </div>

      <div class="row q-px-lg">
        <div style="width: 130px">
          <q-img src="../../public/t3.png" style="width: 100%"></q-img>
        </div>
        <div class="col q-px-md">
          <div class="text-weight-bold">Advance</div>
          <div>
            เนื้อหาเหมาะสำหรับนักเรียนวัย 10-15 ปี พัฒนาภาษาอังกฤษ
            ระดับสูงควบคู่กับกระบวนการ Self-Learning
          </div>
          <div
            class="q-py-md cursor-pointer"
            style="text-decoration: underline; color: #9b115e"
          >
            ดูตัวอย่าง
          </div>
        </div>
      </div>
    </div>

    <!-- course info desktop -->

    <q-img src="../../public/course-info.png" class="desktop-only">
      <div class="absolute-center transparent text-white">
        <div align="center" style="font-size: 36px">รายละเอียดคอร์สเรียน</div>
        <div align="center" class="font-size:20px">
          คอร์สเรียน 1 Level ประกอบด้วย 16 Units ใช้เวลาเรียน 4 เดือน
        </div>
        <div align="center" class="font-size:20px">
          เรียน 2 ครั้ง/สัปดาห์ ครั้งละ 50 นาที
        </div>

        <div class="row justify-between q-pt-md" style="width: 900px">
          <!-- Private -->
          <div class="col-5 bg-white q-pa-xs">
            <q-img style="width: 100%" src="../../public/course2.png"></q-img>
            <div class="row justify-between q-pa-md">
              <div class="text-black">
                <span class="text-weight-bold" style="color: #434343">
                  คอร์ส 1 เดือน
                </span>
                <div style="font-size: 20px">(จำนวนครั้งที่เรียน 8 ครั้ง)</div>
              </div>
              <div class="text-black q-px-md">
                <span class="text-weight-bold">3700</span> บาท
              </div>
            </div>
            <q-separator></q-separator>
            <div
              class="row justify-between q-pa-md relative-position"
              style="overflow: hidden"
            >
              <div
                style="
                  background-color: #9b115e;
                  width: 80px;
                  height: 20px;
                  right: -20px;
                  top: 8px;
                "
                align="center"
                floating
                class="text-body1 absolute ribbon"
              >
                ลด 20%
              </div>

              <div class="text-black">
                <span class="text-weight-bold"> คอร์ส 4 เดือน </span>
                <div style="font-size: 20px">(จำนวนครั้งที่เรียน 32 ครั้ง)</div>
              </div>
              <div class="text-black q-px-md">
                <span class="" style="font-size: 22px; text-decoration-line: line-through"
                  >14,700</span
                >
                <span class="text-weight-bolder" style="color: #9b115e"> 12,200</span> บาท
              </div>
            </div>

            <div align="center" class="q-pb-md">
              <q-btn
                dense
                style="border-radius: 20px; background-color: #9b115e; font-size: 20px"
                label="เพิ่มเพื่อน"
                icon="fab fa-line"
                class="q-px-lg"
              ></q-btn>
            </div>
          </div>
          <!-- Group -->
          <div class="col-5 bg-white q-pa-xs">
            <q-img style="width: 100%" src="../../public/course1.png"></q-img>
            <div class="row justify-between q-pa-md">
              <div class="text-black">
                <span class="text-weight-bold" style="color: #434343">
                  คอร์ส 1 เดือน
                </span>
                <div style="font-size: 20px">(จำนวนครั้งที่เรียน 8 ครั้ง)</div>
              </div>
              <div class="text-black q-px-md">
                <span class="text-weight-bold">2,200</span> บาท
              </div>
            </div>
            <q-separator></q-separator>
            <div
              class="row justify-between q-pa-md relative-position"
              style="overflow: hidden"
            >
              <div
                style="
                  background-color: #9b115e;
                  width: 80px;
                  height: 20px;
                  right: -20px;
                  top: 8px;
                "
                align="center"
                floating
                class="text-body1 absolute ribbon"
              >
                ลด 20%
              </div>

              <div class="text-black">
                <span class="text-weight-bold"> คอร์ส 4 เดือน </span>
                <div style="font-size: 20px">(จำนวนครั้งที่เรียน 32 ครั้ง)</div>
              </div>
              <div class="text-black q-px-md">
                <span class="" style="font-size: 22px; text-decoration-line: line-through"
                  >8,800</span
                >
                <span class="text-weight-bolder" style="color: #9b115e"> 7,000</span> บาท
              </div>
            </div>
            <div align="center" class="q-pb-md">
              <q-btn
                dense
                style="border-radius: 20px; background-color: #9b115e; font-size: 20px"
                label="เพิ่มเพื่อน"
                icon="fab fa-line"
                class="q-px-lg"
              ></q-btn>
            </div>
          </div>
        </div>
      </div>
    </q-img>

    <!-- Course Info Mobile -->

    <div class="mobile-only">
      <q-img src="../../public/course-info.mobile.png" class="">
        <div class="absolute text-white transparent" style="width: 100%">
          <div align="center" style="font-size: 36px">รายละเอียดคอร์สเรียน</div>
          <div align="center" class="font-size:20px">
            คอร์สเรียน 1 Level ประกอบด้วย 16 Units ใช้เวลาเรียน 4 เดือน
          </div>
          <div align="center" class="font-size:20px">
            เรียน 2 ครั้ง/สัปดาห์ ครั้งละ 50 นาที
          </div>
          <!-- Private -->
          <div class="q-pa-xs bg-white rounded-borders">
            <q-img style="width: 100%" src="../../public/course2.png"></q-img>
            <div class="row justify-between q-pa-md">
              <div class="text-black">
                <span class="text-weight-bold" style="color: #434343">
                  คอร์ส 1 เดือน
                </span>
                <div style="font-size: 20px">(จำนวนครั้งที่เรียน 8 ครั้ง)</div>
              </div>
              <div class="text-black q-px-md">
                <span class="text-weight-bold">3700</span> บาท
              </div>
            </div>
            <q-separator></q-separator>
            <div
              class="row justify-between q-pa-md relative-position"
              style="overflow: hidden"
            >
              <div
                style="
                  background-color: #9b115e;
                  width: 80px;
                  height: 20px;
                  right: -20px;
                  top: 8px;
                "
                align="center"
                floating
                class="text-body1 absolute ribbon"
              >
                ลด 20%
              </div>

              <div class="text-black">
                <span class="text-weight-bold"> คอร์ส 4 เดือน </span>
                <div style="font-size: 20px">(จำนวนครั้งที่เรียน 32 ครั้ง)</div>
              </div>
              <div class="text-black q-px-md">
                <span class="" style="font-size: 22px; text-decoration-line: line-through"
                  >14,700</span
                >
                <span class="text-weight-bolder" style="color: #9b115e"> 12,200</span> บาท
              </div>
            </div>
          </div>
          <div style="height: 40px"></div>
          <!-- Group -->
          <div class="bg-white q-pa-xs rounded-borders">
            <q-img style="width: 100%" src="../../public/course1.png"></q-img>
            <div class="row justify-between q-pa-md">
              <div class="text-black">
                <span class="text-weight-bold" style="color: #434343">
                  คอร์ส 1 เดือน
                </span>
                <div style="font-size: 20px">(จำนวนครั้งที่เรียน 8 ครั้ง)</div>
              </div>
              <div class="text-black q-px-md">
                <span class="text-weight-bold">2,200</span> บาท
              </div>
            </div>
            <q-separator></q-separator>
            <div
              class="row justify-between q-pa-md relative-position"
              style="overflow: hidden"
            >
              <div
                style="
                  background-color: #9b115e;
                  width: 80px;
                  height: 20px;
                  right: -20px;
                  top: 8px;
                "
                align="center"
                floating
                class="text-body1 absolute ribbon"
              >
                ลด 20%
              </div>

              <div class="text-black">
                <span class="text-weight-bold"> คอร์ส 4 เดือน </span>
                <div style="font-size: 20px">(จำนวนครั้งที่เรียน 32 ครั้ง)</div>
              </div>
              <div class="text-black q-px-md">
                <span class="" style="font-size: 22px; text-decoration-line: line-through"
                  >8,800</span
                >
                <span class="text-weight-bolder" style="color: #9b115e"> 7,000</span> บาท
              </div>
            </div>
          </div>
        </div>
      </q-img>
    </div>

    <!-- How to Register DESKTOP / MOBILE  -->
    <div
      align="center"
      style="color: #9b115e; font-size: 36px"
      class="q-py-lg text-weight-bold"
    >
      วิธีสมัครเรียน
    </div>
    <div class="row q-py-lg" style="padding-left: 5%; padding-right: 5%">
      <div
        class="col-xs-6 col-md"
        v-for="(item, index) in registerHowto"
        :key="index"
        align="center"
      >
        <q-img style="width: 85px" :src="item.img"></q-img>
        <div>{{ item.content }}</div>
      </div>
    </div>

    <div class="row items-center q-px-lg">
      <div class="col-md-6 col-xs-12">
        <q-img src="../../public/r6.png"></q-img>
      </div>
      <div class="col-md-6 col-xs-12">
        <h4 align="center" class="text-weight-bold">ลงทะเบียนเรียน Winner Tutor</h4>
        <h4 align="center" class="text-weight-bold">
          รับสิทธิ์ทดสอบวัดระดับภาษาฟรีได้แล้ววันนี้
        </h4>
        <div align="center">
          <q-btn
            dense
            style="
              border-radius: 30px;
              background-color: #9b115e;
              color: white;
              font-size: 2.5vh;
            "
            label="ลงทะเบียนเรียน คลิก!!"
            class="q-px-md"
          ></q-btn>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <div style="height: 50px"></div>

    <div class="q-pa-md text-white" style="background-color: #9b115e">
      <div class="q-pl-md" style="width: 100%; max-width: 1200px">
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
              <a class="text-white" style="text-decoration: none" href="tel:02-026-0177"
                >02-026-0177</a
              >
              (สำหรับนักเรียน)
            </div>
            <div class="col-md col-sm-12 col-xs-12">
              <span class="q-pr-md">
                <q-icon size="20px" name="fas fa-phone-alt" />
              </span>
              <a class="text-white" style="text-decoration: none" href="tel:02-252-2489"
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
                >1673/26 อาคารวิทยุคอมเพล็กซ์ ถนนเพชรบุรีตัดใหม่ แขวงมักกะสัน เขตราชเทวี
                กรุงเทพฯ 10400</span
              >
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      registerHowto: [
        {
          img: require("../../public/r1.png"),
          content: "1. ลงทะเบียนเรียน",
        },
        {
          img: require("../../public/r2.png"),
          content: "2. สอบวัดระดับ",
        },
        {
          img: require("../../public/r3.png"),
          content: "3. เลือกคอร์สเรียน",
        },
        {
          img: require("../../public/r4.png"),
          content: "4. ชำระเงิน",
        },
        {
          img: require("../../public/r5.png"),
          content: "5. พร้อมเริ่มเรียน",
        },
      ],
      skillList: [
        {
          img: require("../../public/skill1.png"),
          content: "เรียนครบทุกทักษะ<br />ภาษาอังกฤษ",
        },
        {
          img: require("../../public/skill2.png"),
          content: "บทเรียนทันสมัย<br />(Digital Contents)",
        },
        {
          img: require("../../public/skill3.png"),
          content: "เรียนสนุกด้วย<br />Gamification",
        },
        {
          img: require("../../public/skill4.png"),
          content: "เหมาะสำหรับ<br />เด็กอายุ 7-15 ปี",
        },
        {
          img: require("../../public/skill5.png"),
          content: "ติดตามผลการเรียน<br />ได้แบบ Real-time",
        },
        {
          img: require("../../public/skill6.png"),
          content: "สอนสด แบบออนไลน์<br />เลือกเวลาเรียนได้",
        },
        {
          img: require("../../public/skill7.png"),
          content: "เลือกเรียนแบบเดี่ยว<br />หรือแบบกลุ่มได้",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-card {
  background-color: rgba(255, 255, 255, 0.4);
}
.bg-card-mobile {
  background-color: rgba(0, 0, 0, 0.4);
}
.card-radius {
  border-radius: 20px;
}
.text-color-desktop {
  color: #5c5c5c;
}
.text-color-mobile {
  color: white;
}

.ribbon {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
}
</style>
