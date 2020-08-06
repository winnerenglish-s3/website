<template>
  <q-page>
    <q-resize-observer @resize="onResize" />
    <div align="center">
      <div class="shadow-1" style="max-width:1280px">
        <div>
          <!-- ส่วนบน รูปปก -->
          <div v-if="innerWidth > 1023" class="bgadventures"></div>
          <!-- ข้อความ หัวข้อหลัก -->
          <div class="q-pt-md" style="width:90%;max-width: 1200px">
            <span v-if="innerWidth > 1023" class="text-h1 cl1 titile">WINNER ADVENTURES</span>
            <span
              v-if="innerWidth < 1024"
              style="font-size:calc(35px + 2vw);"
              class="cl1 titile"
            >WINNER ADVENTURES</span>
            <br />
            <div class="q-py-sm q-px-md q-pb-xl">
              <span class="font">โปรแกรมการเรียนการสอนภาษาอังกฤษอัจฉริยะแบบครบวงจร สำหรับโรงเรียน</span>
            </div>
          </div>
          <div>
            <!-- ข้อความส่วนแรก จัดการกับห้องเรียนได้ง่าย-->
            <div class="row q-py-md" style="width:90%;max-width:1200px;">
              <div class="self-center col-md-6 col-sm-12 col-xs-12">
                <div class="q-px-md">
                  <q-img :src="adventures1" style="max-width:500px;" />
                </div>
              </div>
              <div
                class="self-center row justify-center col-md-6 col-sm-12 col-xs-12 text-left q-pa-md"
              >
                <div class>
                  <div class="text-h4 cl1 titile q-py-md">ความสามารถของ Winner Adventure</div>
                  <div class="q-py-md row">
                    <q-icon class="round" size="25px" name="fas fa-chalkboard-teacher" />
                    <span class="col q-px-sm">
                      <div class="titilebold clblue2">จัดการห้องเรียนได้ง่ายๆ แค่ปลายนิ้ว</div>
                      <div>คุณครูสามารถควบคุมการเรียนของนักเรียนได้ในทุก ๆ ขั้นตอน และตรวจสอบความคืบหน้าขณะเรียนได้ตลอดเวลา</div>
                    </span>
                  </div>
                  <div class="q-py-md row">
                    <q-icon class="round" size="25px" name="fas fa-user-graduate" />
                    <span class="col q-px-sm">
                      <div class="titilebold clblue2">เรียนอย่างพร้อมเพรียง</div>
                      <div>คุณครูสามารถจัดการห้องเรียน ให้นักเรียนทุกคนเข้าสู่บทเรียนหรือทำแบบฝึกหัดไปพร้อม ๆ กันได้ ในเวลาเดียวกัน</div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- ข้อความส่วนที่สอง ฟังก์ชั่นสำหรับนักเรียน-->
            <div class="row q-py-md" style="width:90%;max-width:1200px;">
              <div v-if="innerWidth < 1023 " class="self-center col-md-6 col-sm-12 col-xs-12">
                <div class="q-px-md">
                  <q-img :src="adventures2" style="max-width:500px;" />
                </div>
              </div>
              <div
                class="self-center row justify-center col-md-6 col-sm-12 col-xs-12 text-left q-pa-md"
              >
                <div class style="width:100%">
                  <div class="text-h4 cl1 titile q-py-md">ฟังก์ชั่นสำหรับนักเรียน</div>
                  <div class="q-py-md row">
                    <q-icon class="round" size="25px" name="fas fa-chalkboard-teacher" />
                    <span class="col q-px-sm">
                      <div class="titilebold clblue2">โครงสร้างบทเรียน</div>
                      <div>นักเรียนจะได้เรียนตามบทเรียนที่แบ่งออกเป็น 12 Level เพื่อให้เหมาะสมกับทักษะของแต่ละคน หลังจากทำการวัดระดับทักษะของตนเอง</div>
                    </span>
                  </div>
                  <div class="q-py-md row">
                    <q-icon class="round" size="25px" name="fab fa-react" />
                    <span class="col q-px-sm">
                      <div class="titilebold clblue2">ครบทุกทักษะ</div>
                      <div>นักเรียนจะได้เรียนรู้ทักษะภาษาอังกฤษในทุก ๆ ด้าน จากโปรแกรมของเราไม่ว่าจะเป็น คำศัพท์ ไวยากรณ์ ฟัง พูด อ่าน และเขียน</div>
                    </span>
                  </div>
                  <div class="q-py-md row">
                    <q-icon class="round" size="25px" name="far fa-gem" />
                    <span class="col q-px-sm">
                      <div class="titilebold clblue2">สนุกกับการเรียน</div>
                      <div>นักเรียนจะได้พบกับการเรียนรู้ในรูปแบบการผจญภัยแสนสนุก ที่ทุกคนมีส่วนรวมพร้อมสอดแทรกภาษาอังกฤษ ที่ช่วยเสริมสร้างทักษะทางภาษาให้ดียิ่งขึ้น</div>
                    </span>
                  </div>
                </div>
              </div>
              <div v-if="innerWidth > 1022" class="self-center col-md-6 col-sm-12 col-xs-12">
                <div class="q-px-md">
                  <q-img :src="adventures2" style="max-width:500px;" />
                </div>
              </div>
            </div>
            <!-- รูปภาพ สไลด์ -->
            <div>
              <q-carousel
                swipeable
                animated
                control-color="primary"
                v-model="slide"
                navigation
                infinite
                autoplay
                class="text-white"
                style="height: calc(520px + 4vw);"
                transition-prev="slide-right"
                transition-next="slide-left"
              >
                <q-carousel-slide class="relative-position" :name="1">
                  <div
                    style="height: calc(320px + 2vw);margin-top:-20px;margin-left:-16px;margin-right:-16px"
                    class="bgbottomall"
                  ></div>
                  <div
                    style="height: calc(200px + 2vw);margin-left:-16px;margin-right:-16px"
                    class="bggrey1"
                  ></div>
                  <div style="width:100%;" class="absolute-center row justify-center">
                    <div
                      v-if="innerWidth < 1023"
                      style="max-width:600px;"
                      class="self-statr text-left col-md-6 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">VOCABULARY</div>
                        <span>เรามีคำศัพท์หลายหมวดหมู่ให้นักเรียนได้เรียนรู้ และมีระบบออกเสียงคำศัพท์ที่ช่วยให้การสอนของคุณครูง่ายขึ้น</span>
                      </div>
                    </div>
                    <div class="self-center col-md-5 col-sm-12 col-xs-12 q-py-lg q-pb-xl">
                      <q-img
                        v-if="innerWidth < 600"
                        :src="adventuresvocabulary"
                        style="max-width:400px;"
                      />
                      <q-img
                        v-if="innerWidth >= 600"
                        :src="adventuresvocabulary"
                        style="max-width:550px;"
                      />
                    </div>
                    <div
                      v-if="innerWidth > 1022"
                      style="max-width:600px;"
                      class="self-statr text-left col-md-5 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">VOCABULARY</div>
                        <span>เรามีคำศัพท์หลายหมวดหมู่ให้นักเรียนได้เรียนรู้ และมีระบบออกเสียงคำศัพท์ที่ช่วยให้การสอนของคุณครูง่ายขึ้น</span>
                      </div>
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide class="relative-position" :name="2">
                  <div
                    style="height: calc(320px + 2vw);margin-top:-20px;margin-left:-16px;margin-right:-16px"
                    class="bgbottomall"
                  ></div>
                  <div
                    style="height: calc(200px + 2vw);margin-left:-16px;margin-right:-16px"
                    class="bggrey1"
                  ></div>
                  <div style="width:100%;" class="absolute-center row justify-center">
                    <div
                      v-if="innerWidth < 1023"
                      style="max-width:600px;"
                      class="self-statr text-left col-md-6 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">GRAMMAR</div>
                        <span>นอกจากการเนื้อหาในบทเรียน เรายังมีแบบฝึกหัดไวยากรณ์เพื่อเสริมทักษะและความเข้าใจให้กับนักเรียน</span>
                      </div>
                    </div>
                    <div class="self-center col-md-5 col-sm-12 col-xs-12 q-py-lg q-pb-xl">
                      <q-img
                        v-if="innerWidth < 600"
                        :src="adventuresgrammar"
                        style="max-width:400px;"
                      />
                      <q-img
                        v-if="innerWidth >= 600"
                        :src="adventuresgrammar"
                        style="max-width:550px;"
                      />
                    </div>
                    <div
                      v-if="innerWidth > 1022"
                      style="max-width:600px;"
                      class="self-statr text-left col-md-5 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">GRAMMAR</div>
                        <span>นอกจากการเนื้อหาในบทเรียน เรายังมีแบบฝึกหัดไวยากรณ์เพื่อเสริมทักษะและความเข้าใจให้กับนักเรียน</span>
                      </div>
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide class="relative-position" :name="3">
                  <div
                    style="height: calc(320px + 2vw);margin-top:-20px;margin-left:-16px;margin-right:-16px"
                    class="bgbottomall"
                  ></div>
                  <div
                    style="height: calc(200px + 2vw);margin-left:-16px;margin-right:-16px"
                    class="bggrey1"
                  ></div>
                  <div style="width:100%;" class="absolute-center row justify-center">
                    <div
                      v-if="innerWidth < 1023"
                      style="max-width:600px;"
                      class="self-statr text-left col-md-6 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">READING</div>
                        <span>เรามีเนื้อเรื่องที่หลากหลายให้นักเรียนได้ฝึกอ่าน ซึ่งแต่ละเรื่องจะมีคำศัพท์เสริมเตรียมไว้ให้ หากนักเรียนพบคำศัพท์ที่ตนเองไม่รู้จัก</span>
                      </div>
                    </div>
                    <div class="self-center col-md-5 col-sm-12 col-xs-12 q-py-lg q-pb-xl">
                      <q-img
                        v-if="innerWidth < 600"
                        :src="adventuresreading"
                        style="max-width:400px;"
                      />
                      <q-img
                        v-if="innerWidth >= 600"
                        :src="adventuresreading"
                        style="max-width:550px;"
                      />
                    </div>
                    <div
                      v-if="innerWidth > 1022"
                      style="max-width:600px;"
                      class="self-statr text-left col-md-5 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">READING</div>
                        <span>เรามีเนื้อเรื่องที่หลากหลายให้นักเรียนได้ฝึกอ่าน ซึ่งแต่ละเรื่องจะมีคำศัพท์เสริมเตรียมไว้ให้หากนักเรียนพบคำศัพท์ที่ตนเองไม่รู้จัก</span>
                      </div>
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide class="relative-position" :name="4">
                  <div
                    style="height: calc(320px + 2vw);margin-top:-20px;margin-left:-16px;margin-right:-16px"
                    class="bgbottomall"
                  ></div>
                  <div
                    style="height: calc(200px + 2vw);margin-left:-16px;margin-right:-16px"
                    class="bggrey1"
                  ></div>
                  <div style="width:100%;" class="absolute-center row justify-center">
                    <div
                      v-if="innerWidth < 1023"
                      style="max-width:600px;"
                      class="self-statr text-left col-md-6 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">WRITING</div>
                        <span>นักเรียนจะได้ฝึกแต่งประโยคที่ทุกคนมีส่วนรวม ทำให้ประโยคเรียงต่อเนื่องกันจนเป็นเรื่องราวที่สมบูรณ์จากคำศัพท์ที่กำหนดให้</span>
                      </div>
                    </div>
                    <div class="self-center col-md-5 col-sm-12 col-xs-12 q-py-lg q-pb-xl">
                      <q-img
                        v-if="innerWidth < 600"
                        :src="adventureswriting"
                        style="max-width:400px;"
                      />
                      <q-img
                        v-if="innerWidth >= 600"
                        :src="adventureswriting"
                        style="max-width:550px;"
                      />
                    </div>
                    <div
                      v-if="innerWidth > 1022"
                      style="max-width:600px;"
                      class="self-statr text-left col-md-5 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">WRITING</div>
                        <span>นักเรียนจะได้ฝึกแต่งประโยคที่ทุกคนมีส่วนรวม ทำให้ประโยคเรียงต่อเนื่องกันจนเป็นเรื่องราวที่สมบูรณ์จากคำศัพท์ที่กำหนดให้</span>
                      </div>
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide class="relative-position" :name="6">
                  <div
                    style="height: calc(320px + 2vw);margin-top:-20px;margin-left:-16px;margin-right:-16px"
                    class="bgbottomall"
                  ></div>
                  <div
                    style="height: calc(200px + 2vw);margin-left:-16px;margin-right:-16px"
                    class="bggrey1"
                  ></div>
                  <div style="width:100%;" class="absolute-center row justify-center">
                    <div
                      v-if="innerWidth < 1023"
                      style="max-width:600px;"
                      class="self-statr text-left col-md-6 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">PHONICS</div>
                        <span>เรียนวิธีการออกเสียงคำศัพท์ด้วยระบบเสียง ที่ช่วยให้คุณครูสามารถสอนวิธีออกเสียงให้กับนักเรียน ได้อย่างถูกต้องและแม่นยำ</span>
                      </div>
                    </div>
                    <div class="self-center col-md-5 col-sm-12 col-xs-12 q-py-lg q-pb-xl">
                      <q-img
                        v-if="innerWidth < 600"
                        :src="adventuresphonics"
                        style="max-width:400px;"
                      />
                      <q-img
                        v-if="innerWidth >= 600"
                        :src="adventuresphonics"
                        style="max-width:550px;"
                      />
                    </div>
                    <div
                      v-if="innerWidth > 1022"
                      style="max-width:600px;"
                      class="self-statr text-left col-md-5 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">PHONICS</div>
                        <span>เรียนวิธีการออกเสียงคำศัพท์ด้วยระบบเสียง ที่ช่วยให้คุณครูสามารถสอนวิธีออกเสียงให้กับนักเรียน ได้อย่างถูกต้องและแม่นยำ</span>
                      </div>
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide class="relative-position" :name="5">
                  <div
                    style="height: calc(320px + 2vw);margin-top:-20px;margin-left:-16px;margin-right:-16px"
                    class="bgbottomall"
                  ></div>
                  <div
                    style="height: calc(200px + 2vw);margin-left:-16px;margin-right:-16px"
                    class="bggrey1"
                  ></div>
                  <div style="width:100%;" class="absolute-center row justify-center">
                    <div
                      v-if="innerWidth < 1023"
                      style="max-width:600px;"
                      class="self-statr text-left col-md-6 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">LISTENING & SPEAKING</div>
                        <span>เรามีวิดีโอให้นักเรียนได้เห็นวิธีการสนทนาในเหตุกาณณ์จริง และนักเรียนจะได้ฝึกการสื่อสารโต้ตอบกันภายในห้องเรียน</span>
                      </div>
                    </div>
                    <div class="self-center col-md-5 col-sm-12 col-xs-12 q-py-lg q-pb-xl">
                      <q-img
                        v-if="innerWidth < 600"
                        :src="adventuresconversation"
                        style="max-width:400px;"
                      />
                      <q-img
                        v-if="innerWidth >= 600"
                        :src="adventuresconversation"
                        style="max-width:550px;"
                      />
                    </div>
                    <div
                      v-if="innerWidth > 1022"
                      style="max-width:600px;"
                      class="self-statr text-left col-md-5 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">LISTENING & SPEAKING</div>
                        <span>เรามีวิดีโอให้นักเรียนได้เห็นวิธีการสนทนาในเหตุกาณณ์จริง และนักเรียนจะได้ฝึกการสื่อสารโต้ตอบกันภายในห้องเรียน</span>
                      </div>
                    </div>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>
            <!-- ข้อความส่วนที่สาม ฟังก์ชั่นสำหรับคุณครู-->
            <div class="row q-pt-md" style="width:90%;max-width:1200px;">
              <div v-if="innerWidth < 1023" class="self-center col-md-6 col-sm-12 col-xs-12">
                <div class="q-px-md q-pt-xl">
                  <q-img :src="adventures3" style="max-width:500px;" />
                </div>
              </div>
              <div
                class="self-center row justify-center col-md-6 col-sm-12 col-xs-12 text-left q-pa-md"
              >
                <div style="width:100%" class>
                  <div class="text-h4 cl1 titile q-py-md">ฟังก์ชั่นสำหรับคุณครู</div>
                  <div class="q-py-md row">
                    <q-icon class="round" size="25px" name="fas fa-school" />
                    <span class="col q-px-sm">
                      <div class="titilebold clblue2">ห้องเรียนอัจฉริยะ</div>
                      <div>คุณครูสามารถติดตามพฤติกรรมการเรียน ของนักเรียนแต่ละคนขณะทำการสอนได้ตลอดเวลา ผ่านหน้าจอคอมพิวเตอร์ของตนเอง</div>
                    </span>
                  </div>
                  <div class="q-py-md row">
                    <span style="width:50px;height:50px" class="round q-pa-sm">
                      <q-img
                        src="../statics/image/adventures/classroom.svg"
                        style="width:35px;height:35px"
                      />
                    </span>
                    <span class="col q-px-sm">
                      <div class="titilebold clblue2">สนับสนุนการสอน</div>
                      <div>เรามีสื่อการสอนทุกอย่างจัดเตรียมเอาไว้ไม่ว่าจะเป็น เนื้อหา วิดีโอ รูปภาพ และเสียง ที่พร้อมสนับสนุนการสอนของคุณครูอย่างเต็มที่</div>
                    </span>
                  </div>
                  <div class="q-py-md row">
                    <q-icon class="round" size="25px" name="fas fa-star" />
                    <span class="col q-px-sm">
                      <div class="titilebold clblue2">จัดการคะแนนเก็บ</div>
                      <div>คุณครูสามารถกำหนดหรือปรับเปลี่ยนการให้คะแนนของนักเรียนในหัวข้อที่ตนเองทำการสอนได้ตามต้องการ</div>
                    </span>
                  </div>
                </div>
              </div>
              <div v-if="innerWidth > 1022" class="self-center col-md-6 col-sm-12 col-xs-12">
                <div class="q-px-md">
                  <q-img :src="adventures3" style="max-width:500px;" />
                </div>
              </div>
            </div>
            <!-- ข้อความส่วนที่สี่ สนใจโปรแกรม-->
            <div
              v-if="innerWidth > 700"
              style="height:250px  "
              class="relative-position clblue1 q-mb-md"
            >
              <div class="absolute-center text-h3" style="width:100%;position:relative;top:100px;">
                <div>
                  สนใจโปรแกรมติดต่อ:
                  <a
                    class="clblue1 phone"
                    style="text-decoration: none; border-bottom: 2px solid #3f51b5;"
                    href="tel:084-323-2206"
                  >084-323-2206</a>
                </div>
              </div>
            </div>
            <div
              v-if="innerWidth < 700"
              class="relative-position clblue1 q-mb-md"
              style="height:250px  "
            >
              <div style="width:100%;position:relative;top:50px;">
                <div class="fontphone clblue1 titilebold">
                  <div>
                    <div>สนใจโปรแกรม</div>
                    <div>
                      ติดต่อ:
                      <a
                        class="clblue1 phone"
                        style="text-decoration: none; border-bottom: 2px solid #3f51b5;"
                        href="tel:084-323-2206"
                      >084-323-2206</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ข้อความส่วนที่ห้า คู่มือการใช้งานสําหรับคุณครู -->
        <div style="height:200px;max-width:1280px " class="bgcl2 text-white relative-position">
          <span class="text-h4 absolute-center" style="width:100%">
            <div>
              <q-btn
                push
                to="/manual"
                unelevated
                rounded
                style="width:300px "
                class="bgblue text-white q-mb-sm q-py-sm"
              >
                <span class="fontteacher">คู่มือการใช้งานสําหรับคุณครู</span>
              </q-btn>
            </div>
          </span>
        </div>

        <!-- ส่วนล่าง -->
        <app-footer></app-footer>
      </div>
    </div>
  </q-page>
</template>

<script>
import appFooter from "../components/footer.vue";
export default {
  data() {
    return {
      adventures1: "../statics/image/adventures/adventures-1.png",
      adventures2: "../statics/image/adventures/adventures-2.png",
      adventuresvocabulary:
        "../statics/image/adventures/adventures-vocabulary.png",
      adventuresgrammar: "../statics/image/adventures/adventures-grammar.png",
      adventuresreading: "../statics/image/adventures/adventures-reading.png",
      adventureswriting: "../statics/image/adventures/adventures-writing.png",
      adventuresphonics: "../statics/image/adventures/adventures-phonics.png",
      adventuresconversation:
        "../statics/image/adventures/adventures-conversation.png",
      adventures3: "../statics/image/adventures/adventures-3.png",
      slide: 1,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  },
  components: {
    appFooter
  },
  methods: {
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    }
  },
  mounted() {
    console.clear();
  }
};
</script>

<style  scoped>
.round {
  border-radius: 100px;
  background: #e7f7ff;
  color: #027be1;
  width: 50px;
  height: 50px;
}
.bgcl1 {
  background: #3f51b5;
}
.bgcl2 {
  background: #304147;
}
.fontteacher {
  font-size: calc(25px + 0.2vw);
}
</style>