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
          <!-- ข้อความส่วนแรก ทักษะทั้งหมด DESKTOP -->
          <div
           v-if="innerWidth > 1007"
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
                  <!-- <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class="txcl1"
                  >
                    <u class="cursor-pointer">ดูตัวอย่างวิดีโอ</u>
                  </div> -->
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
                  <!-- <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class="txcl1"
                  >
                    <u class="cursor-pointer">ดูตัวอย่างวิดีโอ</u>
                  </div> -->
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
                  <!-- <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class="txcl1"
                  >
                    <u class="cursor-pointer">ดูตัวอย่างวิดีโอ</u>
                  </div> -->
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
                  <!-- <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class="txcl1"
                  >
                    <u class="cursor-pointer">ดูตัวอย่างวิดีโอ</u>
                  </div> -->
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
                  <!-- <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class="txcl1"
                  >
                    <u class="cursor-pointer">ดูตัวอย่างวิดีโอ</u>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          <!-- ข้อความส่วนแรก ทักษะทั้งหมด MOBILE -->
          <div
          v-if="innerWidth < 1008"
          style="margin-top:-150px"
          class="relative-position bgbottommb row justify-centers"
        > 
          <div
            class="row absolute-bottom"
            v-if="innerWidth < 1008"
            style="width:100%;max-width:1200px;"
          >
           
            <div class="self-center bgblue1 col-12">
              
              <div style="width:100% ">
                <q-carousel
                  swipeable
                  animated
                  v-model="skillSlide"
                  navigation
                  infinite
                  autoplay
                  control-color="primary"
                  style="width:100%;height:500px"
                  transition-prev="slide-right"
                  transition-next="slide-left"
                >
                  <q-carousel-slide :name="1">
                    <div style="margin-top:50px;height:370px" class="boxmb q-pa-md shadow-3 brd-radius">
                      <div
                  class="q-pa-md relative-position"
                  align="center"
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
                      เรียนรู้คำศัพท์ใหม่ๆ กว่า 3,000 คำ
                      พร้อมฝึกฝนและทบทวนความแม่นยำ
                      ผ่านแบบฝึกหัดคำศัพท์ที่หลากหลาย
                    </div>
                  </div>
                  <!-- <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class="txcl1"
                  >
                    <u class="cursor-pointer">ดูตัวอย่างวิดีโอ</u>
                  </div> -->
                </div>
                    </div>
                  </q-carousel-slide>
                    <q-carousel-slide :name="2">
                    <div style="margin-top:50px;height:370px" class="boxmb q-pa-md shadow-3 brd-radius">
                      <div
                  class="q-pa-md relative-position"
                  align="center"
                 
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
                      เข้าใจหลักไวยากรณ์กว่า 200 หัวข้อ
                      สอดคล้องตามตัวชี้วัดหลักสูตรแกนกลาง
                      ผ่าน VDO Animation ช่วยให้การเรียน
                      เข้าใจง่ายและไม่น่าเบื่ออีกต่อไป
                    </div>
                  </div>
                  <!-- <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class="txcl1"
                  >
                    <u class="cursor-pointer">ดูตัวอย่างวิดีโอ</u>
                  </div> -->
                </div>
                    </div>
                  </q-carousel-slide>
                    <q-carousel-slide :name="3">
                    <div style="margin-top:50px;height:370px" class="boxmb q-pa-md shadow-3 brd-radius">
                      <div
                  class="q-pa-md relative-position"
                  align="center"
                
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
                      เปิดโลกการอ่านด้วยเนื้อเรื่อง ที่มีความ
                      หลากหลาย พร้อมตัวช่วยคำศัพท์เสริม
                      ที่ทำให้การอ่านสนุก เพลิดเพลิน และเข้าใจง่ายมากขึ้น
                    </div>
                  </div>
                  <!-- <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class="txcl1"
                  >
                    <u class="cursor-pointer">ดูตัวอย่างวิดีโอ</u>
                  </div> -->
                </div>
                    </div>
                  </q-carousel-slide>
                    <q-carousel-slide :name="4">
                    <div style="margin-top:50px;height:370px" class="boxmb q-pa-md shadow-3 brd-radius">
                      <div
                  class="q-pa-md relative-position"
                  align="center"
                 
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
                      ฝึกการแต่งประโยคภาษาอังกฤษตาม 
                      คำศัพท์และหลักโครงสร้างไวยากรณ์
                      ที่ถูกต้อง ช่วยเพิ่มความเข้าใจของนักเรียน
                      ด้วยระบบการตรวจสอบความถูกต้อง
                    </div>
                  </div>
                  <!-- <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class="txcl1"
                  >
                    <u class="cursor-pointer">ดูตัวอย่างวิดีโอ</u>
                  </div> -->
                </div>
                    </div>
                  </q-carousel-slide>
                    <q-carousel-slide :name="5">
                    <div style="margin-top:50px;height:370px" class="boxmb q-pa-md shadow-3 brd-radius">
                      <div
                  class="q-pa-md relative-position"
                  align="center"
                 
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
                      นักเรียนจะได้ฝึกการฟังและการพูดเทียบเสียงเจ้าของภาษาผ่าน VDO จำลอง 
                      สถานการณ์ต่างๆในชีวิตประจำวัน ช่วยให้
                      มั่นใจในการใช้ภาษามากยิ่งขึ้น
                    </div>
                  </div>
                  <!-- <div
                    :class="$q.platform.is.desktop ? 'absolute-bottom' : ''"
                    class="txcl1"
                  >
                    <u class="cursor-pointer">ดูตัวอย่างวิดีโอ</u>
                  </div> -->
                </div>
                    </div>
                  </q-carousel-slide>
                  
                 
                </q-carousel>
              </div>
            </div>
          </div>
        </div>
        <!-- ข้อความส่วนสอง โครงสร้างบทเรียน-->
          <div class="row reverse q-py-md q-mb-lg" style="width:90%;max-width:1200px;">
            <div
              class="self-center row justify-center col-md-6 col-sm-12 col-xs-12 text-left q-pa-md"
            >
              <div class="q-py-md">
                <div class="text-h4  titile q-py-md">
                  โครงสร้างบทเรียนของ Winner Discovery
                </div>
                <span
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;โครงสร้างบทเรียนแบ่งออกเป็น 12 Level ตามระดับความยาก
                    โดยแต่ละ Level จะมีเนื้อหาให้เลือกเรียนมากถึง 16 Unit แต่ละ
                    Unit สามารถเรียนรู้ได้ครบทุกทักษะ
                  </dd></span
                ><br />
                <span class="block q-mt-sm"
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เรามีการทดสอบวัดระดับภาษา (Placement Test) เพื่อจัด Level
                  ที่เหมาะสมให้กับนักเรียนทุกคน
                  ซึ่งจะช่วยพัฒนาทักษะภาษาอังกฤษ
                  ของนักเรียนแต่ละคนที่มีพื้นฐานแตกต่างกันได้อย่างมีประสิทธิภาพ
                 
                </span>
              </div>
            </div>
            <div class="self-center col-md-6 col-sm-12 col-xs-12 q-px-md">
              <q-img :src="graph" style="max-width:500px;" />
            </div>
          </div>
          <!-- ข้อความส่วนสาม ระดับการเรียนรู้-->
          <div
            :class="$q.platform.is.desktop ? 'q-py-md q-my-xl' : ''"
            class="row q-mb-lg"
            style="width:90%;max-width:1200px;"
          >
            <div class="q-pa-md col-md-4 col-sm-12 col-xs-12 " :class="$q.platform.is.mobile?'row':''">
              <div :class="$q.platform.is.mobile?'col-xs-4 col-sm-4 col-md-12 q-pr-md ':''">
                <q-img src="../statics/i-basic.png" :style="$q.platform.is.desktop?'width:180px':'width:80px'"></q-img>
              </div>
              <div :class="$q.platform.is.mobile?'col-xs col-sm col-md-12':'q-mt-md'">
                <span class="block" :align="$q.platform.is.mobile && innerWidth < 1024?'left':''"><b>Basic</b></span
                ><br class="desktop-only" />
                <span class="block" :align="$q.platform.is.mobile?'left':''">
                  เนื้อหาเหมาะสำหรับนักเรียนวัย 6-10 ปี<br class="desktop-only" />
                  ที่ต้องการปูพื้นฐานทักษะภาษาอังกฤษ<br class="desktop-only" />
                  พร้อมทั้งพัฒนาทักษะการใช้เทคโนโลยี
                </span> 
              </div>
              <div :class="$q.platform.is.mobile?'col-12 ':'q-mt-md'" class="txcl1">
                <u :class="$q.platform.is.mobile?'row':'cursor-pointer'">
                  <div class="col-4"></div>
                  <div>
                    <a href="../statics/pdf/lv1-2.pdf" download>ดูตัวอย่าง</a>
                  </div>
                </u>
              </div>
            </div>
            <div class="q-pa-md col-md-4 col-sm-12 col-xs-12 q-px-md" :class="$q.platform.is.mobile?'row':''">
              <div :class="$q.platform.is.mobile?'col-xs-4 col-sm-4 col-md-12 q-pr-md ':''">
                <q-img
                  src="../statics/i-intermediate.png"
                  :style="$q.platform.is.desktop?'width:180px':'width:80px'"
                ></q-img>
              </div>
              <div :class="$q.platform.is.mobile?'col-xs col-sm col-md-12':'q-mt-md'">
                <span class="block" :align="$q.platform.is.mobile && innerWidth < 1024?'left':''"><b>Intermediate</b></span
                ><br class="desktop-only"  />
                <span class="block" :align="$q.platform.is.mobile?'left':''">
                  เนื้อหาเหมาะสำหรับนักเรียนวัย 8-12 ปี <br class="desktop-only"  />
                  เสริมความมั่นใจ ต่อยอดการเรียนรู้ทักษะ<br class="desktop-only"  />
                  ภาษาอังกฤษอย่างมีประสิทธิภาพ
                </span>
              </div>
              <div :class="$q.platform.is.mobile?'col-12 ':'q-mt-md'" class="txcl1">
                <u :class="$q.platform.is.mobile?'row':'cursor-pointer'">
                  <div class="col-4"></div>
                   <a href="../statics/pdf/lv5-6.pdf" download>ดูตัวอย่าง</a>
                  </u>
              </div>
            </div>
            <div class="q-pa-md col-md-4 col-sm-12 col-xs-12" :class="$q.platform.is.mobile?'row':''">
              <div :class="$q.platform.is.mobile?'col-xs-4 col-sm-4 col-md-12 q-pr-md ':''">
                <q-img
                  src="../statics/i-advance.png"
                  :style="$q.platform.is.desktop?'width:180px':'width:80px'"
                ></q-img>
              </div>
             <div :class="$q.platform.is.mobile?'col-xs col-sm col-md-12':'q-mt-md'">
                <span class="block" :align="$q.platform.is.mobile && innerWidth < 1024?'left':''"><b>Advance</b></span
                ><br class="desktop-only"   />
                <span class="block" :align="$q.platform.is.mobile?'left':''">
                  เนื้อหาเหมาะสำหรับนักเรียนวัย 10-15 ปี<br class="desktop-only"   />
                  พัฒนาภาษาอังกฤษระดับสูงควบคู่กับ <br class="desktop-only"   />
                  กระบวนการ Self-Learning
                </span>
              </div>
              <div :class="$q.platform.is.mobile?'col-12 ':'q-mt-md'" class="txcl1">
                <u :class="$q.platform.is.mobile?'row':'cursor-pointer'">
                  <div class="col-4"></div>
                   <a href="../statics/pdf/lv9-10.pdf" download>ดูตัวอย่าง</a>
                  </u>
              </div>
            </div>
          </div>
          <!-- ข้อความส่วนสี่ สมัครทดสอบ placement-->
          <div  v-if="innerWidth > 1007" class="row justify-center q-my-xl q-mb-lg">
            <q-img
              style="width:100%;max-width:800px;height:500px"
              src="../statics/image/discovery/register.png"
              class="relative-position"
            >
            <div class="row full-width full-height transparent">
              <div class="row col justify-center text-primary">
                <div class="self-start text-h3 titile  q-mt-sm">วัดระดับภาษา ฟรี!!<br><div class="text-h5">สอบถามข้อมูลเพิ่มเติม</div></div>
                <div class="self-end q-mb-lg" style="font-size:21px">ข้อมูลส่วนบุคคลที่ท่านให้ บริษัทจะนำไปใช้เพื่อการติดต่อ <br>
                และการให้บริการแก่ท่าน ท่านสามารถอ่านข้อมูลเพิ่มเติม<br>
                <u class="cursor-pointer" @click="openNewWindows(policyOrCondition = 'policy')">นโยบายความเป็นส่วนตัว</u> | <u class="cursor-pointer" @click="openNewWindows(policyOrCondition = 'condition')">เงื่อนไขและข้อตกลงในการใช้บริการ</u></div>
              </div>

              <!-- Form สำหรับการกรอกข้อมูล สำหรับจอใหญ่ -->
              <div class="col txcl2 q-pl-sm fontn" >
                <div align="left" class="q-mt-sm">
                  <div style="font-size:16px">ชื่อ-นามสกุล (ผู้ปกครอง)</div>
                  <div><q-input ref="name" class="no-padding" :rules="[val => val.length > 0]" outlined v-model="name" dense bg-color="white" style="width:350px"/></div>
                </div>
                <div align="left" class="q-mt-sm">
                  <div style="font-size:16px">เบอร์โทรศัพท์ (ผู้ปกครอง)</div>
                  <div><q-input mask="##########" ref="tel" class="no-padding" :rules="[val => val.length > 0]" outlined v-model="tel" dense bg-color="white" style="width:350px"/></div>
                </div>
                <div align="left" class="q-mt-sm">
                  <div style="font-size:16px">อีเมล (ผู้ปกครอง)</div>
                  <div><q-input ref="email" class="no-padding" :rules="[val => val.length > 0]" outlined v-model="email" dense bg-color="white" style="width:350px"/></div>
                </div>
                <div align="left" class="q-mt-sm">
                  <div style="font-size:16px">จังหวัด</div>
                  <div><q-select ref="province" class="no-padding" :rules="[val => val.length > 0]" outlined v-model="province" dense bg-color="white" style="width:350px" :options="provinceList" label="กรุณาเลือกจังหวัด" /></div>
                </div>
                 <div align="left" class="q-mt-sm">
                  <div style="font-size:16px">ระดับชั้นที่กำลังศึกษา (ผู้เรียน)</div>
                  <div><q-select ref="studentClass" class="no-padding" :rules="[val => val.length > 0]" outlined v-model="studentClass" dense bg-color="white" style="width:350px" :options="studentList" label="กรุณาเลือกระดับชั้น" /></div>
                </div>
                <div class="q-mt-md">
                  <q-btn unelevated rounded class="bgcl1 text-white" label="ส่งข้อมูล" @click="sendData()" style="width:200px;font-size:20px" />
                </div>
              </div>
              <!-- จบ Form สำหรับกรอกข้อมูล -->
            </div>
            </q-img>
          </div>
          <!-- Form สำหรับกรอกข้อมูลสำหรับจอเล็ก -->
           <div  v-if="innerWidth < 1008" class="q-my-xl q-mb-lg q-pa-md bg-block fontn">
              <div class="text-primary">
                <div class=" text-h4 titile  q-mb-md">วัดระดับภาษา ฟรี!!<br><div class="text-h5">สอบถามข้อมูลเพิ่มเติม</div></div>
              </div>
              <div class="txcl2 q-pl-sm">
                <div align="center" style="max-width:400px;width:100%" class="q-mt-sm ">
                  <div style="font-size:20px" align="left">ชื่อ-นามสกุล (ผู้ปกครอง)</div>
                  <div><q-input ref="name" class="no-padding" :rules="[val => val.length > 0]" outlined v-model="name" dense bg-color="white" /></div>
                </div>
                <div align="center" style="max-width:400px;width:100%" class="q-mt-sm">
                  <div style="font-size:20px" align="left">เบอร์โทรศัพท์ (ผู้ปกครอง)</div>
                  <div><q-input ref="tel" class="no-padding" :rules="[val => val.length > 0]" outlined v-model="tel" mask="##########" dense bg-color="white" /></div>
                </div>
                <div align="center" style="max-width:400px;width:100%" class="q-mt-sm">
                  <div style="font-size:20px" align="left">อีเมล (ผู้ปกครอง)</div>
                  <div><q-input ref="email" class="no-padding" :rules="[val => val.length > 0]" outlined v-model="email" dense bg-color="white" /></div>
                </div>
                <div align="center" style="max-width:400px;width:100%" class="q-mt-sm">
                  <div style="font-size:20px" align="left">จังหวัด</div>
                  <div><q-select ref="province" class="no-padding" :rules="[val => val.length > 0]" outlined v-model="province" dense bg-color="white"  :options="provinceList" label="กรุณาเลือกจังหวัด" /></div>
                </div>
                 <div align="center" style="max-width:400px;width:100%" class="q-mt-sm">
                  <div style="font-size:20px" align="left">ระดับชั้นที่กำลังศึกษา (ผู้เรียน)</div>
                  <div><q-select ref="studentClass" class="no-padding" :rules="[val => val.length > 0]" outlined v-model="studentClass" dense bg-color="white"  :options="studentList" label="กรุณาเลือกระดับชั้น" /></div>
                </div>
                <div class="q-my-lg">
                  <q-btn unelevated rounded class="bgcl1 text-white" label="ส่งข้อมูล" @click="sendData()" style="width:200px;font-size:20px" />
                </div>
              </div>
              <div class="q-mb-lg txcl1" style="font-size:16px">ข้อมูลส่วนบุคคลที่ท่านให้ บริษัทจะนำไปใช้เพื่อการติดต่อ <br>
                และการให้บริการแก่ท่าน ท่านสามารถอ่านข้อมูลเพิ่มเติม<br>
                <u class="cursor-pointer" @click="openNewWindows(policyOrCondition = 'policy')">นโยบายความเป็นส่วนตัว</u> | <u class="cursor-pointer" @click="openNewWindows(policyOrCondition = 'condition')">เงื่อนไขและข้อตกลงในการใช้บริการ</u></div>
          </div>
          <!-- Form สำหรับกรอกข้อมูลสำหรับจอเล็ก -->
          <!-- ข้อความส่วนที่ห้า ความสามารถของ winner DESKTOP-->
          <div v-if="innerWidth > 1007" class="row q-py-md q-mb-lg" style="width:90%;max-width:1200px;">
            <div
              class="self-center row col-md-12 col-sm-12 col-xs-12 text-left"
            >
              <div
                class=" text-h4 cl1 titile q-py-md full-width"
                align="center"
              >
                ความสามารถของ Winner Discovery
              </div>
              <div class="q-py-md row q-pa-md col-md-6 col-sm-12 col-xs-12">
                <q-icon class="round" size="25px" name="fab fa-react" />
                <span class="col q-px-sm">
                  <div class="titilebold clblue2">ครบทุกทักษะ</div>
                  <div>
                    เราครอบคลุมทุกทักษะภาษาอังกฤษไม่ว่าจะเป็น คำศัพท์
                    ไวยากรณ์
                    ฟัง พูด อ่าน และเขียน ให้เด็ก ๆ ได้ฝึกฝนจนเกิด
                    ความชำนาญและสามารถนำไปใช้ได้จริงในชีวิตประจำวัน
                  </div>
                </span>
              </div>
              <div class="q-py-md q-pa-md  row col-md-6 col-sm-12 col-xs-12">
                <q-icon class="round" size="25px" name="fas fa-brain" />
                <div class="col q-px-sm">
                  <div class="titilebold clblue2">เรียนรู้ได้ด้วยตัวเอง</div>
                  <div>
                    ด้วยระบบที่ไม่ซับซ้อน และมีฟังก์ชันสนับสนุนการเรียน
                    นักเรียนสามารถเรียนรู้ได้ด้วยตนเองแม้ไม่มีผู้สอน
                  </div>
                </div>
              </div>
              <div class="q-py-md q-pa-md row col-md-6 col-sm-12 col-xs-12">
                <q-icon class="round" size="25px" name="fas fa-cogs" />
                <div class="col q-px-sm">
                  <div class="titilebold clblue2">
                    จัดรูปแบบการเรียนของคุณ
                  </div>
                  <div>
                    นักเรียนสามารถเลือกหัวข้อการเรียนที่ตรงกับหลักสูตรของ
                    ตนเองได้อย่างตรงประเด็น และตรงตามมาตราฐานการศึกษา
                    ที่ควรได้รับภายในโรงเรียน
                  </div>
                </div>
              </div>
              <div class="q-py-md q-pa-md row col-md-6 col-sm-12 col-xs-12">
                <q-icon class="round" size="25px" name="far fa-gem" />
                <div class="col q-px-sm">
                  <div class="titilebold clblue2">สนุกกับการเรียน</div>
                  <div>
                    ด้วยระบบการเรียนที่นำ แอนิเมชั่นตัวการ์ตูน
                    วิดีโอภาพเคลื่อนไหว และ ระบบเสียงมาช่วยสอน
                    นักเรียนจะได้สัมผัสกับการเรียนรู้
                    ที่สนุกและต่างจากหนังสือทั่วไป
                  </div>
                </div>
              </div>
            </div>
          </div>
        <!-- ข้อความส่วนที่ห้า ความสามารถของ winner MOBILE-->
           <div
          v-if="innerWidth < 1008"
          class=" relative-position row justify-centers"
        > 
        <div
                class=" text-h4 cl1 titile  full-width"
                align="center"
              >
                ความสามารถของ Winner Discovery
              </div>
          <div class=""
            v-if="innerWidth < 1008"
            style="width:100%;max-width:1200px;"
          >
           
            <div class="self-center bgblue1 col-12">
              
              <div style="width:100% ">
                <q-carousel
                  swipeable
                  animated
                  v-model="abilitySlide"
                  navigation
                  infinite
                  autoplay
                  control-color="primary"
                  style="width:100%;height:450px"
                  transition-prev="slide-right"
                  transition-next="slide-left"
                >
                  <q-carousel-slide :name="1">
                    <div style="height:370px" class="boxmb shadow-3 brd-radius">
                      <div
                  class="q-pa-md relative-position"
                  align="center"
                
                >
                  <div>
                   <q-icon style="width:80px;height:80px" class="round" size="45px" name="fab fa-react" />
                  </div>
                  <div class="col q-mt-md">
                    <div><b>ครบทุกทักษะ</b></div>
                    <div>
                    เราครอบคลุมทุกทักษะภาษาอังกฤษไม่ว่าจะเป็น คำศัพท์
                    ไวยากรณ์
                    ฟัง พูด อ่าน และเขียน ให้เด็ก ๆ ได้ฝึกฝนจนเกิด
                    ความชำนาญและสามารถนำไปใช้ได้จริงในชีวิตประจำวัน
                    </div>
                  </div>
                
                </div>
                    </div>
                  </q-carousel-slide>
                    <q-carousel-slide :name="2">
                    <div style="height:370px" class="boxmb  shadow-3 brd-radius">
                      <div
                  class="q-pa-md relative-position"
                  align="center"
                  
                >
                  <div>
                   <q-icon style="width:80px;height:80px" class="round" size="45px" name="fas fa-brain" />
                  </div>
                  <div class="col q-mt-md">
                    <div><b>เรียนรู้ได้ด้วยตัวเอง</b></div>
                    <div>
                      ด้วยระบบที่ไม่ซับซ้อน และมีฟังก์ชันสนับสนุนการเรียน
                    นักเรียนสามารถเรียนรู้ได้ด้วยตนเองแม้ไม่มีผู้สอน
                    </div>
                  </div>
                 
                </div>
                    </div>
                  </q-carousel-slide>
                    <q-carousel-slide :name="3">
                    <div style="height:370px" class="boxmb  shadow-3 brd-radius">
                      <div
                  class="q-pa-md relative-position"
                  align="center"
                 
                >
                  <div>
                   <q-icon style="width:80px;height:80px" class="round" size="45px" name="fas fa-cogs" />
                  </div>
                  <div class="col q-mt-md">
                    <div><b>จัดรูปแบบการเรียนของคุณ</b></div>
                    <div>
                     นักเรียนสามารถเลือกหัวข้อการเรียนที่ตรงกับหลักสูตรของ
                    ตนเองได้อย่างตรงประเด็น และตรงตามมาตราฐานการศึกษา
                    ที่ควรได้รับภายในโรงเรียน
                    </div>
                  </div>
                
                </div>
                    </div>
                  </q-carousel-slide>
                    <q-carousel-slide :name="4">
                    <div style="height:370px" class="boxmb  shadow-3 brd-radius">
                      <div
                  class="q-pa-md relative-position"
                  align="center"
                 
                >
                  <div>
                    <q-icon style="width:80px;height:80px" class="round" size="45px" name="far fa-gem" />
                  </div>
                  <div class="col q-mt-md">
                    <div><b>สนุกกับการเรียน</b></div>
                    <div>
                     ด้วยระบบการเรียนที่นำ แอนิเมชั่นตัวการ์ตูน
                    วิดีโอภาพเคลื่อนไหว และ ระบบเสียงมาช่วยสอน
                    นักเรียนจะได้สัมผัสกับการเรียนรู้
                    ที่สนุกและต่างจากหนังสือทั่วไป
                    </div>
                  </div>
                </div>
                    </div>
                  </q-carousel-slide>
                </q-carousel>
              </div>
            </div>
          </div>
        </div>
          <!-- ข้อความส่วนที่หก Promotion-->
         
            <q-img style="height:400px" class="bg-block relative-position" src="../statics/image/discovery/bgPromotion.png">
            <div class="shadow-5 absolute-center bg-white" :style="innerWidth > 750 ?'width:90%;max-width:900px;height:250px':'width:90%;max-width:330px;height:350px'" style="border-radius:10px">
              <div class=" absolute-center full-width full-height" :class="innerWidth > 750 ?'q-pt-xl':'q-pt-md'">
                  <div class="txcl2" :class="innerWidth > 750 ?'text-h4':'text-h5'"><b>มอบความรู้เป็นของขวัญสุดพิเศษ<br v-if="innerWidth < 750 "/> กับโปรโมชั่นต้อนรับปี 2021</b></div>
                 
                    <span class="block txcl4" :class="innerWidth > 750  ?'text-h4 q-my-md':'text-h5 q-my-xl'"><b>จากราคา <strike>2,400</strike> ลดเหลือเพียง<br v-if="innerWidth < 750" /> <span class="txcl3 text-h2"><b>1,200 บาท</b></span> เท่านั้น !<sup>*</sup></b></span>
                  <div class="txcl2" :class="innerWidth > 750  ?'text-h4':'text-h5'">*ระยะเวลาโปรโมชั่น <br v-if="innerWidth < 750" /> 1 มกราคม 2564 - 31 มกราคม 2564 นี้เท่านั้น!</div>
              </div>
            </div>
            </q-img>
          

        </div>
        <app-footer></app-footer>
      </div>
    </div>
  </q-page>
</template>

<script>
import { db } from "../router";
import appFooter from "../components/footer.vue";
export default {
   components: {
    appFooter
  },
  data() {
    return {
      graph: "../statics/image/discovery/graph.png",
      discoveryFunction: "../statics/image/discovery/discovery-function.png",
      vocabulary: "../statics/image/discovery/vocabulary.png",
      grammar: "../statics/image/discovery/grammar.png",
      reading: "../statics/image/discovery/reading.png",
      writing: "../statics/image/discovery/writing.png",
      conversation: "../statics/image/discovery/conversation.png",
      skillSlide: 1, //slide ทักษะทั้งหมด
      abilitySlide: 1, //slide ความสามารถของโปรแกรม
      innerWidth: window.innerWidth, //ความกว้างหน้า
      innerHeight: window.innerHeight, //ความสูงหน้าจอ
      policyOrCondition:"", //เปิดนโยบายหรือเงื่อนไข
      name:"", //ชื่อผู้ปกครอง
      tel:"", //เบอร์โทรผู้ปกครอง
      email:"", //อีเมล์ผู้ปกครอง
      studentClass:"", //ชั้นเรียนที่เลือก
      province:"", //จังหวัดที่เลือก
      studentList:['ไม่ระบุ',
'ป.1',
'ป.2',
'ป.3',
'ป.4',
'ป.5',
'ป.6',
'ม.1',
'ม.2',
'ม.3',
'ม.4',
'ม.5',
'ม.6',
'ปวช.',
'ปวส.',
'ปริญญาตรี',
], //ชั้นเรียนทั้งหมด
    
      provinceList:['กระบี่',
'กรุงเทพมหานคร',
'กาญจนบุรี',
'กาฬสินธุ์',
'กำแพงเพชร',
'ขอนแก่น',
'จันทบุรี',
'ฉะเชิงเทรา',
'ชลบุรี',
'ชัยนาท',
'ชัยภูมิ',
'ชุมพร',
'เชียงราย',
'เชียงใหม่',
'ตรัง',
'ตราด',
'ตาก',
'นครนายก',
'นครปฐม',
'นครพนม',
'นครราชสีมา',
'นครศรีธรรมราช',
'นครสวรรค์',
'นนทบุรี',
'นราธิวาส',
'น่าน',
'บึงกาฬ',
'บุรีรัมย์',
'ปทุมธานี',
'ประจวบคีรีขันธ์',
'ปราจีนบุรี',
'ปัตตานี',
'พระนครศรีอยุธยา',
'พะเยา',
'พังงา',
'พัทลุง',
'พิจิตร',
'พิษณุโลก',
'เพชรบุรี',
'เพชรบูรณ์',
'แพร่',
'ภูเก็ต',
'มหาสารคาม',
'มุกดาหาร',
'แม่ฮ่องสอน',
'ยโสธร',
'ยะลา',
'ร้อยเอ็ด',
'ระนอง',
'ระยอง',
'ราชบุรี',
'ลพบุรี',
'ลำปาง',
'ลำพูน',
'เลย',
'ศรีสะเกษ',
'สกลนคร',
'สงขลา',
'สตูล',
'สมุทรปราการ',
'สมุทรสงคราม',
'สมุทรสาคร',
'สระแก้ว',
'สระบุรี',
'สิงห์บุรี',
'สุโขทัย',
'สุพรรณบุรี',
'สุราษฎร์ธานี',
'สุรินทร์',
'หนองคาย',
'หนองบัวลำภู',
'อ่างทอง',
'อำนาจเจริญ',
'อุดรธานี',
'อุตรดิตถ์',
'อุทัยธานี',
'อุบลราชธานี',
], //จังหวัดทั้งหมด
      
    };
  },
  methods: {
    sendData(){
      //ปุ่มสำหรับส่งข้อมูล
      let resultData = {
        name: this.name,
        tel: this.tel,
        email: this.email,
        province : this.province,
        studentClass: this.studentClass
      }
      console.log(resultData);
      db.collection("level").get().then(doc=>{
        console.log(doc.size);
      })
    },
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    },
    //เปิดหน้าใหม่ นโยบาย or เงื่อนไข บริษัท
    openNewWindows(){
      if (this.policyOrCondition == "policy") {
        //ถ้าเลือกนโยบาย
         window.open("/policy")
      }else{
        //ถ้าเลือกเงื่อนไข
         window.open("/condition")
      }
    
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
.txcl2{
  color: #5C5C5C;
}
.txcl3{
  color: #FF7E36;
}
.txcl4{
  color: #3183DF;
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
.boxmb {
  border-radius: 10px;
  max-width: 300px;
  background: #FFFFFF;
  height: 300px;
}
.fontn{
  font-family: "Times New Roman", Times, serif;
}
</style>
