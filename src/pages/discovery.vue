<template>
  <q-page>
    <q-resize-observer @resize="onResize" />
    <div align="center">
      <div class="shadow-1" style="max-width:1280px">
        <div>
          <!-- ส่วนบน รูปปก -->
          <div v-if="innerWidth > 1023" class="bgdiscovery"></div>
          <!-- ข้อความ หัวข้อหลัก -->

          <div class="q-pt-md" style="width:90%;max-width: 1200px">
            <span v-if="innerWidth > 1023" class="text-h1 cl1 titile"
              >WINNER DISCOVERY</span
            >
            <span
              v-if="innerWidth < 1024"
              style="font-size:calc(35px + 2vw);"
              class="cl1 titile"
              >WINNER DISCOVERY</span
            >
            <br />
            <div class="q-py-sm q-px-sm q-pb-xl" style="max-width:800px">
              <span class="font"
                >โปรแกรมเรียนภาษาอังกฤษออนไลน์สำหรับนักเรียนในระดับชั้นประถมศึกษาและมัธยมศึกษาตอนต้น
                สามารถใช้ได้ทั้ง Windows และ Mac</span
              >
              <br />
            </div>
          </div>
          <!-- ข้อความส่วนแรก ทักษะทั้งหมด-->
          <div
            class="row justify-center q-pt-md q-mb-xl "
            style="width:90%;max-width:1200px;"
          >
            <div class="self-center q-px-md q-mb-lg" align="left">
              <div class="row justify-center">
                <div
                  class="q-pa-md relative-position"
                  align="center"
                  :style="
                    $q.platform.is.desktop ? 'width:370px;height:350px' : ''
                  "
                >
                  <div>
                    <q-img
                      src="../statics/i-vocab.png"
                      style="width:80px"
                    ></q-img>
                  </div>
                  <div class="col q-mt-md">
                    <div><b>คำศัพท์</b></div>
                    <div>
                      เรียนรู้คำศัพท์ใหม่ๆ กว่า 3,000 คำ<br />
                      พร้อมฝึกฝนและทบทวนความแม่นยำ<br />
                      ผ่านแบบฝึกหัดคำศัพท์ที่หลากหลาย
                    </div>
                  </div>
                  <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class=" cursor-pointer txcl1"
                  >
                    <u>ดูตัวอย่างวิดีโอ</u>
                  </div>
                </div>
                <div
                  class="q-pa-md relative-position"
                  align="center"
                  style="width:370px;height:350px"
                >
                  <div>
                    <q-img
                      src="../statics/i-grammar.png"
                      style="width:80px"
                    ></q-img>
                  </div>
                  <div class="col q-mt-md">
                    <div><b>ไวยากรณ์</b></div>
                    <div>
                      เข้าใจหลักไวยากรณ์กว่า 200 หัวข้อ<br />
                      สอดคล้องตามตัวชี้วัดหลักสูตรแกนกลาง<br />
                      ผ่าน VDO Animation ช่วยให้การเรียน<br />
                      เข้าใจง่ายและไม่น่าเบื่ออีกต่อไป
                    </div>
                  </div>
                  <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class=" cursor-pointer txcl1"
                  >
                    <u>ดูตัวอย่างวิดีโอ</u>
                  </div>
                </div>
                <div
                  class="q-pa-md relative-position"
                  align="center"
                  :style="
                    $q.platform.is.desktop ? 'width:370px;height:350px' : ''
                  "
                >
                  <div>
                    <q-img
                      src="../statics/i-reading.png"
                      style="width:80px"
                    ></q-img>
                  </div>
                  <div class="col q-mt-md">
                    <div><b>การอ่าน</b></div>
                    <div>
                      เปิดโลกการอ่านด้วยเนื้อเรื่อง ที่มีความ<br />
                      หลากหลาย พร้อมตัวช่วยคำศัพท์เสริม<br />
                      ที่ทำให้การอ่านสนุก และเข้าใจง่ายมากขึ้น
                    </div>
                  </div>
                  <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class=" cursor-pointer txcl1"
                  >
                    <u>ดูตัวอย่างวิดีโอ</u>
                  </div>
                </div>
              </div>
              <div
                :class="$q.platform.is.desktop ? 'q-mt-lg' : ''"
                class="row justify-center"
              >
                <div
                  class="q-pa-md relative-position"
                  align="center"
                  style="width:370px;height:350px"
                >
                  <div>
                    <q-img
                      src="../statics/i-writing.png"
                      style="width:80px"
                    ></q-img>
                  </div>
                  <div class="col q-mt-md">
                    <div><b>การเขียน</b></div>
                    <div>
                      ฝึกการแต่งประโยคภาษาอังกฤษตาม <br />
                      คำศัพท์และหลักโครงสร้างไวยากรณ์ที่ <br />
                      ถูกต้อง ช่วยเพิ่มความเข้าใจของนักเรียน<br />
                      ด้วยระบบการตรวจสอบความถูกต้อง
                    </div>
                  </div>
                  <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class=" cursor-pointer txcl1"
                  >
                    <u>ดูตัวอย่างวิดีโอ</u>
                  </div>
                </div>
                <div
                  class="q-pa-md relative-position"
                  align="center"
                  style="width:370px;height:350px"
                >
                  <div>
                    <q-img
                      src="../statics/i-litten.png"
                      style="width:80px"
                    ></q-img>
                  </div>
                  <div class="col q-mt-md">
                    <div><b>การพูด และการฟัง</b></div>
                    <div>
                      นักเรียนจะได้ฝึกการฟังและการพูดเทียบ<br />
                      เสียงเจ้าของภาษาผ่าน VDO จำลอง <br />
                      สถานการณ์ต่างๆในชีวิตประจำวัน ช่วยให้<br />
                      มั่นใจในการใช้ภาษามากยิ่งขึ้น
                    </div>
                  </div>
                  <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class=" cursor-pointer txcl1"
                  >
                    <u>ดูตัวอย่างวิดีโอ</u>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ข้อความส่วนสอง โครงสร้างบทเรียน-->
          <div class="row q-py-md q-mb-lg" style="width:90%;max-width:1200px;">
            <div class="self-center col-md-6 col-sm-12 col-xs-12 q-px-md">
              <q-img :src="graph" style="max-width:500px;" />
            </div>
            <div
              class="self-center row justify-center col-md-6 col-sm-12 col-xs-12 text-left q-pa-md"
            >
              <div class="q-py-md">
                <div class="text-h4 cl1 titile q-py-md">
                  โครงสร้างบทเรียนของ Winner Discovery
                </div>
                <span
                  >เรามีการวัดระดับทางภาษาให้กับนักเรียนทุกคน เพื่อหา Level
                  ที่เหมาะสมกับนักเรียนแต่ละคน
                  ซึ่งจะช่วยพัฒนาทักษะภาษาอังกฤษอย่างมีประสิทธิภาพสูงสุด
                  โดยบทเรียนทั้งหมดถูกแบ่งออกเป็น 12 Level ตามระดับความยาก
                  และในแต่ละ Level ยังมี unit ให้เลือกถึง 16 unit</span
                >
              </div>
            </div>
          </div>
          <!-- ข้อความส่วนสาม ระดับการเรียนรู้-->
          <div
            class="row q-py-md q-my-xl q-mb-lg"
            style="width:90%;max-width:1200px;"
          >
            <div class="q-pa-md col-md-4 col-sm-12 col-xs-12">
              <div>
                <q-img src="../statics/i-basic.png" style="width:180px"></q-img>
              </div>
              <div class="q-mt-md">
                <span><b>Basic</b></span
                ><br />
                <span>
                  เนื้อหาเหมาะสำหรับนักเรียนวัย 6-10 ปี<br />
                  ที่ต้องการปูพื้นฐานทักษะภาษาอังกฤษ<br />
                  พร้อมทั้งพัฒนาทักษะการใช้เทคโนโลยี
                </span>
              </div>
              <div class="txcl1 q-mt-md cursor-pointer"><u>ดูตัวอย่าง</u></div>
            </div>
            <div class="q-pa-md col-md-4 col-sm-12 col-xs-12 q-px-md">
              <div>
                <q-img
                  src="../statics/i-intermediate.png"
                  style="width:180px"
                ></q-img>
              </div>
              <div class="q-mt-md">
                <span><b>Intermediate</b></span
                ><br />
                <span class="block">
                  เนื้อหาเหมาะสำหรับนักเรียนวัย 8-12 ปี <br />
                  เสริมความมั่นใจ ต่อยอดการเรียนรู้ทักษะ<br />
                  ภาษาอังกฤษอย่างมีประสิทธิภาพ
                </span>
              </div>
              <div class="txcl1 q-mt-md cursor-pointer"><u>ดูตัวอย่าง</u></div>
            </div>
            <div class="q-pa-md col-md-4 col-sm-12 col-xs-12">
              <div>
                <q-img
                  src="../statics/i-advance.png"
                  style="width:180px"
                ></q-img>
              </div>
              <div class="q-mt-md">
                <span><b>Advance</b></span
                ><br />
                <span>
                  เนื้อหาเหมาะสำหรับนักเรียนวัย 10-15 ปี<br />
                  พัฒนาภาษาอังกฤษระดับสูงควบคู่กับ <br />
                  กระบวนการ Self-Learning
                </span>
              </div>
              <div class="txcl1 q-mt-md cursor-pointer">
                <u>ดูตัวอย่าง</u>
              </div>
            </div>
          </div>
          <!-- ข้อความส่วนสี่ ทดสอบ placement-->
          <div class="row q-my-xl q-mb-lg">
            <q-img
              style="width:100%;height:520px"
              src="../statics/bg-placement.png"
              class="relative-position"
            >
              <div
                class="row justify-center items-center brd-radius bg-white absolute-center shadow-3"
                style="width:90%;max-width:480px;height:350px"
                cover
              >
                <div class="relative-position" style="width:100%">
                  <div class="fixed-top q-mt-xl q-px-sm">
                    <div
                      class="txcl1 titile"
                      :style="$q.platform.is.desktop ? 'font-size:36px' : ''"
                    >
                      <b>อยากทราบระดับภาษาอังกฤษ<br />ของคุณหรือไม่?</b>
                    </div>
                    <div class="text-black">
                      สอบวัดระดับภาษาออังกฤษฟรีไม่มีค่าใช้จ่ายเพิ่มเติม
                    </div>
                  </div>
                  <div class="q-my-xl fixed-bottom">
                    <q-btn
                      dense
                      class="bgcl1 btn-radius"
                      style="font-size:22px;width:260px"
                      >สนใจทดสอบวัดระดับ คลิ๊ก</q-btn
                    >
                  </div>
                </div>
              </div>
            </q-img>
          </div>
          <!-- ข้อความส่วนที่ห้า ความสามารถของ winner-->
          <div class="row q-py-md q-mb-lg" style="width:90%;max-width:1200px;">
            <div
              class="self-center row col-md-12 col-sm-12 col-xs-12 text-left"
            >
              <div
                class=" text-h4 cl1 titile q-py-md full-width"
                align="center"
              >
                ความสามารถของ Winner Discovery
              </div>
              <div class="q-py-md row col-md-6 col-sm-12 col-xs-12">
                <q-icon class="round" size="25px" name="fab fa-react" />
                <span class="col q-px-sm">
                  <div class="titilebold clblue2">ครบทุกทักษะ</div>
                  <div>
                    เราครอบคลุมทุกทักษะภาษาอังกฤษไม่ว่าจะเป็น คำศัพท์
                    ไวยากรณ์<br />
                    ฟัง พูด อ่าน และเขียน ให้เด็ก ๆ ได้ฝึกฝนจนเกิดความชำนาญ
                    และสามารถนำไปใช้ได้จริงในชีวิตประจำวัน
                  </div>
                </span>
              </div>
              <div class="q-py-md q-pl-md row col-md-6 col-sm-12 col-xs-12">
                <q-icon class="round" size="25px" name="fas fa-brain" />
                <div class="col q-px-sm">
                  <div class="titilebold clblue2">เรียนรู้ได้ด้วยตัวเอง</div>
                  <div>
                    ด้วยระบบที่ไม่ซับซ้อน และมีฟังก์ชันสนับสนุนการเรียน<br />
                    นักเรียนสามารถเรียนรู้ได้ด้วยตนเองแม้ไม่มีผู้สอน
                  </div>
                </div>
              </div>
              <div class="q-py-md row col-md-6 col-sm-12 col-xs-12">
                <q-icon class="round" size="25px" name="fas fa-cogs" />
                <div class="col q-px-sm">
                  <div class="titilebold clblue2">
                    จัดรูปแบบการเรียนของคุณ
                  </div>
                  <div>
                    นักเรียนสามารถเลือกหัวข้อการเรียนที่ตรงกับหลักสูตรของตนเองได้อย่างตรงประเด็น
                    และ ตรงตามมาตราฐานการศึกษาที่ควรได้รับ<br />
                    ภายในโรงเรียน
                  </div>
                </div>
              </div>
              <div class="q-py-md q-pl-md row col-md-6 col-sm-12 col-xs-12">
                <q-icon class="round" size="25px" name="far fa-gem" />
                <div class="col q-px-sm">
                  <div class="titilebold clblue2">สนุกกับการเรียน</div>
                  <div>
                    ด้วยระบบการเรียนที่นำ แอนิเมชั่นตัวการ์ตูน
                    วิดีโอภาพเคลื่อนไหว และ ระบบเสียงมาช่วยสอน
                    นักเรียนจะได้สัมผัสกับการเรียนรู้<br />
                    ที่สนุกและต่างจากหนังสือทั่วไป
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ข้อความส่วนที่หก box three-->
          <div
            class="row  justify-center q-py-md q-mb-xl"
            style="width:90%;max-width:1200px;"
          >
            <div class="col-md-4 col-sm-12 col-xs-12">
              <div
                style="width:300px;height:350px"
                class="  q-ma-md shadow-3 bg-block brd-radius"
              ></div>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
              <div
                style="width:300px;height:350px"
                class="  q-ma-md shadow-3 bg-block brd-radius"
              ></div>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
              <div
                style="width:300px;height:350px"
                class="  q-ma-md shadow-3 bg-block brd-radius"
              ></div>
            </div>
          </div>
          <!-- รูปภาพ สไลด์ -->
          <!-- <div>
            <div style="width:100%">
              <q-carousel
                animated
                control-color="primary"
                v-model="slide"
                swipeable
                navigation
                infinite
                autoplay
                class="text-white bgbottomall"
                style="width:100%;height:550px"
                transition-prev="slide-right"
                transition-next="slide-left"
              >
                <q-carousel-slide class="relative-position" :name="1">
                  <div
                    style="height:400px;margin-top:-20px;margin-left:-16px;margin-right:-16px"
                    class="bgbottomall"
                  ></div>
                  <div
                    style="height:154px;margin-left:-16px;margin-right:-16px"
                    class="bggrey1"
                  ></div>
                  <div
                    style="width:100%"
                    class="absolute-center row reverse justify-center"
                  >
                    <div
                      style="max-width:500px;"
                      class="self-start text-left col-md-6 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">VOCABULARY</div>
                        <span
                          >เรียนรู้คำศัพท์ต่าง ๆ และส่งเสริมทักษะความจำ
                          โดยการทำโจทย์ที่นำคำศัพท์มาทบทวนซ้ำจากแบบฝึกหัดที่หลากหลาย
                          เช่น ฝึกสะกดคำให้ถูกต้อง เป็นต้น</span
                        >
                      </div>
                    </div>
                    <div
                      class="self-center col-md-5 col-sm-12 col-xs-12 q-py-lg"
                    >
                      <q-img
                        v-if="innerWidth <= 1023"
                        :src="vocabulary"
                        style="max-width:400px;"
                      />
                      <q-img
                        v-if="innerWidth > 1023"
                        :src="vocabulary"
                        style="max-width:500px;"
                      />
                    </div>
                  </div>
                </q-carousel-slide>

                <q-carousel-slide class="relative-position" :name="2">
                  <div
                    style="height:400px;margin-top:-20px;margin-left:-16px;margin-right:-16px"
                    class="bgbottomall"
                  ></div>
                  <div
                    style="height:154px;margin-left:-16px;margin-right:-16px"
                    class="bggrey1"
                  ></div>
                  <div
                    style="width:100%"
                    class="absolute-center row reverse justify-center"
                  >
                    <div
                      style="max-width:500px;"
                      class="self-start text-left col-md-6 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">GRAMMAR</div>
                        <span
                          >นักเรียนจะได้นำความรู้จากบทเรียนไวยากรณ์มาประยุกต์ใช้จริงในแบบฝึกหัด
                          เพื่อต่อยอดความเข้าใจในการเรียนของตนเองให้มากยิ่งขึ้น</span
                        >
                      </div>
                    </div>
                    <div
                      class="self-center col-md-5 col-sm-12 col-xs-12 q-py-lg"
                    >
                      <q-img
                        v-if="innerWidth <= 1023"
                        :src="grammar"
                        style="max-width:400px;"
                      />
                      <q-img
                        v-if="innerWidth > 1023"
                        :src="grammar"
                        style="max-width:500px;"
                      />
                    </div>
                  </div>
                </q-carousel-slide>

                <q-carousel-slide class="relative-position" :name="3">
                  <div
                    style="height:400px;margin-top:-20px;margin-left:-16px;margin-right:-16px"
                    class="bgbottomall"
                  ></div>
                  <div
                    style="height:154px;margin-left:-16px;margin-right:-16px"
                    class="bggrey1"
                  ></div>
                  <div
                    style="width:100%"
                    class="absolute-center row reverse justify-center"
                  >
                    <div
                      style="max-width:500px;"
                      class="self-statr text-left col-md-6 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">READING</div>
                        <span
                          >เรามีเนื้อเรื่องหลากหลายแนว ที่มีทั้งความสนุกและสาระ
                          ให้เลือกอ่านตามความสนใจ
                          โดยแต่ละเนื้อเรื่องจะมีคำศัพท์เสริมที่ช่วยให้นักเรียนเข้าใจคำศัพท์ที่ไม่รู้จัก</span
                        >
                      </div>
                    </div>
                    <div
                      class="self-center col-md-5 col-sm-12 col-xs-12 q-py-lg"
                    >
                      <q-img
                        v-if="innerWidth <= 1023"
                        :src="reading"
                        style="max-width:400px;"
                      />
                      <q-img
                        v-if="innerWidth > 1023"
                        :src="reading"
                        style="max-width:500px;"
                      />
                    </div>
                  </div>
                </q-carousel-slide>

                <q-carousel-slide class="relative-position" :name="4">
                  <div
                    style="height:400px;margin-top:-20px;margin-left:-16px;margin-right:-16px"
                    class="bgbottomall"
                  ></div>
                  <div
                    style="height:154px;margin-left:-16px;margin-right:-16px"
                    class="bggrey1"
                  ></div>
                  <div
                    style="width:100%"
                    class="absolute-center row reverse justify-center"
                  >
                    <div
                      style="max-width:500px;"
                      class="self-statr text-left col-md-6 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">WRITING</div>
                        <span
                          >นักเรียนจะได้ฝึกแต่งประโยคในบริบทที่แตกต่าง
                          ด้วยระบบตรวจสอบความถูกต้องของแบบฝึกหัดที่ช่วยให้นักเรียนมีความเข้าใจและสามารถแต่งประโยคครั้งต่อไปได้ดีขึ้น</span
                        >
                      </div>
                    </div>
                    <div
                      class="self-center col-md-5 col-sm-12 col-xs-12 q-py-lg"
                    >
                      <q-img
                        v-if="innerWidth > 1023"
                        :src="writing"
                        style="max-width:500px;"
                      />
                      <q-img
                        v-if="innerWidth <= 1023"
                        :src="writing"
                        style="max-width:400px;"
                      />
                    </div>
                  </div>
                </q-carousel-slide>

                <q-carousel-slide class="relative-position" :name="5">
                  <div
                    style="height:400px;margin-top:-20px;margin-left:-16px;margin-right:-16px"
                    class="bgbottomall"
                  ></div>
                  <div
                    style="height:154px;margin-left:-16px;margin-right:-16px"
                    class="bggrey1"
                  ></div>
                  <div
                    style="width:100%"
                    class="absolute-center row reverse justify-center"
                  >
                    <div
                      style="max-width:500px;"
                      class="self-statr text-left col-md-6 col-sm-12 col-xs-12 q-px-md"
                    >
                      <div class="q-px-sm">
                        <div class="text-h4 boxtitile">
                          LISTENING & SPEAKING
                        </div>
                        <span
                          >นักเรียนจะได้ฝึกการฟังและการพูด
                          จากวิดีโอสถานการณ์จริง เริ่มจากบทสนทนาง่ายๆ
                          จนถึงบทสนทนาที่ใช้งานได้จริงสำหรับการทำงานในอนาคต</span
                        >
                      </div>
                    </div>
                    <div
                      class="self-center col-md-5 col-sm-12 col-xs-12 q-py-lg"
                    >
                      <q-img
                        v-if="innerWidth > 1023"
                        :src="conversation"
                        style="max-width:500px;"
                      />
                      <q-img
                        v-if="innerWidth <= 1023"
                        :src="conversation"
                        style="max-width:400px;"
                      />
                    </div>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>
          </div> -->
          <!-- สนใจเรียน -->
          <!-- <div>
            <div class="q-py-md">
              <div
                v-if="innerWidth > 1022"
                class="row shadow-2 q-my-lg"
                style="width:90%;max-width:1200px;"
              >
                <div
                  style="height:400px"
                  class="self-center col-md-4 col-sm-12 col-xs-12 bggrey1"
                >
                  <div class="clblue1 text-h4 titilebold q-py-lg">
                    ทดลองเรียนฟรี
                  </div>
                  <div class="row" style="width:250px">
                    <span class="q-py-xs">
                      <span class="q-px-sm">
                        <q-icon
                          class="color-grey-7"
                          size="10px"
                          name="fas fa-circle"
                        />
                      </span>
                      <span>ไม่มีค่าใช้จ่าย</span>
                    </span>
                    <span class="q-py-xs">
                      <span class="q-px-sm">
                        <q-icon
                          class="color-grey-7"
                          size="10px"
                          name="fas fa-circle"
                        />
                      </span>
                      <span>เรียนได้ทุกที่ ทุกเวลา</span>
                    </span>

                    <span class="q-py-xs">
                      <span class="q-px-sm">
                        <q-icon
                          class="color-grey-7"
                          size="10px"
                          name="fas fa-circle"
                        />
                      </span>
                      <span>เรียนครบทุกทักษะ</span>
                    </span>
                  </div>
                </div>
                <div
                  style="height:400px"
                  class="self-center col-md-4 col-sm-12 col-xs-12 bggrey2"
                >
                  <div class="clblue1 titilebold text-h4 q-py-lg">1 Level</div>
                  <div class="row" style="width:280px">
                    <span class="q-py-xs">
                      <span class="q-px-sm">
                        <q-icon
                          class="color-grey-7"
                          size="10px"
                          name="fas fa-circle"
                        />
                      </span>
                      <span>
                        1,200 บาท (ปกติ
                        <span style="color:red;text-decoration:line-through">
                          <span style="color:grey">2,400</span>
                        </span>
                        บาท)
                      </span>
                    </span>
                    <span class="q-py-xs">
                      <span class="q-px-sm">
                        <q-icon
                          class="color-grey-7"
                          size="10px"
                          name="fas fa-circle"
                        />
                      </span>
                      <span>เนื้อหา 16 unit</span>
                    </span>
                    <span class="q-py-xs">
                      <span class="q-px-sm">
                        <q-icon
                          class="color-grey-7"
                          size="10px"
                          name="fas fa-circle"
                        />
                      </span>
                      <span>เรียนครบทุกทักษะ</span>
                    </span>
                    <span class="q-py-xs">
                      <span class="q-px-sm">
                        <q-icon
                          class="color-grey-7"
                          size="10px"
                          name="fas fa-circle"
                        />
                      </span>
                      <span>ทดสอบวัดระดับ</span>
                    </span>
                    <span class="q-py-xs">
                      <span class="q-px-sm">
                        <q-icon
                          class="color-grey-7"
                          size="10px"
                          name="fas fa-circle"
                        />
                      </span>
                      <span>เรียนได้ทุกที่ ทุกเวลา</span>
                    </span>
                  </div>
                </div>
                <div
                  style="height:400px"
                  class="bgblue self-center col-md-4 col-sm-12 col-xs-12 text-white text-h3 relative-position"
                >
                  <div class="absolute-center" style="width:100%;">
                    <div>สนใจเรียน</div>
                    <div>
                      ติดต่อ:
                      <a
                        class="text-white phone"
                        style="text-decoration: none; border-bottom: 2px solid white;"
                        href="tel:084-323-2206"
                        >084-323-2206</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          <!-- จอเล็กสุด -->
          <!-- <div style="width:90%;max-width:700px" v-if="innerWidth < 1023">
              <div class="q-pb-md">
                <div class="row">
                  <q-card
                    class="my-card"
                    style="width:100%;border-radius: 20px;"
                  >
                    <div>
                      <div
                        class="bgblue text-white q-py-lg"
                        style="border-top-left-radius: 20px;border-top-right-radius: 20px"
                      >
                        <span
                          style="width:100%"
                          class="titilebold text-h4 q-px-sm"
                          >ทดลองเรียนฟรี</span
                        >
                      </div>
                    </div>
                    <div class="col bggrey1">
                      <div
                        class="row q-py-md q-pl-md text-h5"
                        style="max-width:300px;"
                      >
                        <span class="q-py-xs">
                          <span class="q-px-sm">
                            <q-icon
                              class="color-grey-7"
                              size="10px"
                              name="fas fa-circle"
                            />
                          </span>

                          <span class="box">ไม่มีค่าใช้จ่าย</span>
                        </span>
                        <span class="q-py-xs">
                          <span class="q-px-sm">
                            <q-icon
                              class="color-grey-7"
                              size="10px"
                              name="fas fa-circle"
                            />
                          </span>
                          <span class="box">เรียนได้ทุกที่ ทุกเวลา</span>
                        </span>

                        <span class="q-py-xs">
                          <span class="q-px-sm">
                            <q-icon
                              class="color-grey-7"
                              size="10px"
                              name="fas fa-circle"
                            />
                          </span>
                          <span class="box">เรียนครบทุกทักษะ</span>
                        </span>
                      </div>
                    </div>
                  </q-card>
                </div>
              </div>
              <div class="q-pt-md">
                <div class="row">
                  <q-card
                    class="my-card"
                    style="width:100%;border-radius: 20px;"
                  >
                    <div>
                      <div
                        class="bgblue text-white q-py-lg"
                        style="border-top-left-radius: 20px;border-top-right-radius: 20px"
                      >
                        <span
                          style="width:100%"
                          class="titilebold text-h4 q-px-sm"
                          >คอร์สเรียน 1 Level</span
                        >
                      </div>
                    </div>
                    <div class="col bggrey1">
                      <div
                        class="row q-py-md text-h5 q-pl-md"
                        style="max-width:300px;"
                      >
                        <span class="q-py-xs">
                          <span class="q-px-sm">
                            <q-icon
                              class="color-grey-7"
                              size="10px"
                              name="fas fa-circle"
                            />
                          </span>

                          <span class="box">
                            1,200 บาท (ปกติ
                            <span
                              style="color:red;text-decoration:line-through"
                            >
                              <span style="color:grey">2,400</span>
                            </span>
                            บาท)
                          </span>
                        </span>
                        <span class="q-py-xs">
                          <span class="q-px-sm">
                            <q-icon
                              class="color-grey-7"
                              size="10px"
                              name="fas fa-circle"
                            />
                          </span>
                          <span class="box">เนื้อหา 16 unit</span>
                        </span>
                        <span class="q-py-xs">
                          <span class="q-px-sm">
                            <q-icon
                              class="color-grey-7"
                              size="10px"
                              name="fas fa-circle"
                            />
                          </span>
                          <span class="box">เรียนครบทุกทักษะ</span>
                        </span>
                        <span class="q-py-xs">
                          <span class="q-px-sm">
                            <q-icon
                              class="color-grey-7"
                              size="10px"
                              name="fas fa-circle"
                            />
                          </span>
                          <span class="box">ทดสอบวัดระดับ</span>
                        </span>
                        <span class="q-py-xs">
                          <span class="q-px-sm">
                            <q-icon
                              class="color-grey-7"
                              size="10px"
                              name="fas fa-circle"
                            />
                          </span>
                          <span class="box">เรียนได้ทุกที่ ทุกเวลา</span>
                        </span>
                      </div>
                    </div>
                  </q-card>
                </div>
              </div>
            </div>
          </div>
          <div
            style="height:250px"
            v-if="innerWidth > 700 && innerWidth < 1023"
            class="relative-position q-my-md"
          >
            <div class="absolute-center" style="width:100%">
              <div class="fontphone clblue1 titilebold">
                สนใจเรียนติดต่อ:
                <a
                  class="clblue1 phone"
                  style="text-decoration: none; border-bottom: 2px solid #3f51b5;"
                  href="tel:084-323-2206"
                  >084-323-2206</a
                >
              </div>
            </div>
          </div>
          <div
            style="height:250px"
            v-if="innerWidth < 700"
            class="relative-position q-my-md"
          >
            <div class="absolute-center" style="width:100%">
              <div class="fontphone clblue1 titilebold">
                <div>สนใจเรียน</div>
                <div>
                  ติดต่อ:
                  <a
                    class="clblue1 phone"
                    style="text-decoration: none; border-bottom: 2px solid #3f51b5;"
                    href="tel:084-323-2206"
                    >084-323-2206</a
                  >
                </div>
              </div>
            </div>
          </div> -->
          <!-- ส่วนล่าง -->
        </div>
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
      graph: "../statics/image/discovery/graph.png",
      discoveryFunction: "../statics/image/discovery/discovery-function.png",
      vocabulary: "../statics/image/discovery/vocabulary.png",
      grammar: "../statics/image/discovery/grammar.png",
      reading: "../statics/image/discovery/reading.png",
      writing: "../statics/image/discovery/writing.png",
      conversation: "../statics/image/discovery/conversation.png",
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
  }
};
</script>

<style scoped>
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
.txcl1 {
  color: #3f51b5;
}
.bg-block {
  background: #e7f7ff;
}
.box {
  font-size: calc(26px + 0.2vw);
}
.btn-radius {
  border-radius: 50px;
}
.brd-radius {
  border-radius: 10px;
}
</style>
