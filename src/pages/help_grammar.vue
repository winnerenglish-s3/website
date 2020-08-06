<template>
  <div align="center">
    <q-resize-observer @resize="onResize" />
    <div class="shadow-1" style="max-width:1280px">
      <div v-show="innerWidth >= 950">
        <div align="left" class="q-px-md">
          <router-link to="manual">คู่มือการใช้งาน</router-link>&nbsp;>
          <router-link to="tutorial01a">เรียนรู้การใช้งาน</router-link>&nbsp;>&nbsp;ไวยากรณ์
        </div>
      </div>
      <div style="width:100%;max-width:900px ; margin:auto;">
        <div v-show="innerWidth < 950">
          <div align="left" class style="max-width:1280px; width:90%">
            <router-link to="manual">คู่มือ</router-link>&nbsp;>
            <router-link to="tutorial01a">เรียนรู้</router-link>&nbsp;>&nbsp;ไวยากรณ์
          </div>
        </div>

        <div class="text-h3 cl1 q-py-md" align="center">ไวยากรณ์</div>
        <div align="center">การเข้าสู่บทเรียน ไวยากรณ์ มีดังนี้</div>
        <div class="q-py-md q-px-sm">
          <img src="../statics/grammar/grammar1.png" alt />
        </div>
        <div class="row">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">1</div>
          </div>
          <div class="col self-start label">กดปุ่ม “เริ่มภารกิจ”</div>
        </div>

        <!-- Grammar Lesson -->
        <div class="q-py-md q-px-sm">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:180px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >สอนไวยากรณ์</div>
            <div class="special q-pa-sm">
              <img src="../statics/grammar/grammar2.png" alt />

              <div class="row">
                <div class="col-1" style="width:50px" align="center">
                  <div class="caption2">2</div>
                </div>
                <div class="col self-start label">อ่านคำสั่งของภารกิจให้ละเอียด</div>
              </div>
              <div class="row q-pt-md">
                <div class="col-1" style="width:50px" align="center">
                  <div class="caption">3</div>
                </div>
                <div class="col self-start label">กดปุ่ม “ทำภารกิจ”</div>
              </div>
              <div class="q-py-md">
                <img src="../statics/grammar/grammar3.png" alt />
              </div>
              <div class="row">
                <div class="col-1" style="width:50px" align="center">
                  <div class="caption2">4</div>
                </div>
                <div class="col self-start label">
                  เนื้อหาของบทเรียน "Grammar Lesson" มีทั้งแบบภาพนิ่ง และ
                  แบบวิดีโอการสอน
                </div>
              </div>
              <div class="row q-pt-md">
                <div class="col-1" style="width:50px" align="center">
                  <div class="caption">5</div>
                </div>
                <div class="col self-start label">
                  เวลาที่แนะนำสำหรับการเรียน แต่ระยะเวลาในการสอนจริงนั้น
                  อาจจะแตกต่างจากเวลาที่แนะนำได้ ขึ้นอยู่กับดุลพิจนิจของคุณครูผู้สอน
                </div>
              </div>
              <div class="row q-pt-md">
                <div class="col-1" style="width:50px" align="center">
                  <div class="caption">6</div>
                </div>
                <div class="col self-start label">
                  เลือกหัวข้อสำหรับการเรียน คุณครูต้องเรียนหัวข้อที่มีสัญลักษณ์
                  <q-badge
                    color="red"
                    class="q-ma-xs"
                    style="position:relative;top:-5px; font-size:18px;"
                  >New</q-badge>ให้ครบถึงจะสามารถเลือกจบบทเรียนได้
                </div>
              </div>
              <div class="row q-pt-md">
                <div class="col-1" style="width:50px" align="center">
                  <div class="caption">7</div>
                </div>
                <div class="col self-start label">
                  ถ้าในหัวข้อเนื้อหามีสัญลักษณ์
                  <q-badge
                    color="red"
                    class="q-ma-xs"
                    style="position:relative;top:-5px; font-size:18px;"
                  >New</q-badge>เนื้อหาจะเป็นรูปแบบวีดีโอ
                  คุณครูสามารถกดเพื่อดูวีดีโอได้
                  แต่ถ้าไม่มีสัญลักษณ์
                  <q-badge
                    color="red"
                    class="q-ma-xs"
                    style="position:relative;top:-5px; font-size:18px;"
                  >New</q-badge>เนื้อหาจะเป็นรูปแบบสไลด์เท่านั้น
                </div>
              </div>
              <div class="row q-pt-md">
                <div class="col-1" style="width:50px" align="center">
                  <div class="caption">8</div>
                </div>
                <div class="col self-start label">
                  กดเพื่อ “จบภารกิจ” เมื่อคุณครูสอนเนื้อหาที่มีสัญลักษณ์
                  <q-badge
                    color="red"
                    class="q-ma-xs"
                    style="position:relative;top:-5px; font-size:18px;"
                  >New</q-badge>ครบแล้ว
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Grammar Action  -->
        <div class="q-py-xl q-px-sm">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:180px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >ถามตอบไวยากรณ์</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/grammar/grammar4.png" alt />
            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">9</div>
              </div>
              <div class="col self-start label">อ่านคำสั่งของภารกิจให้ละเอียด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">10</div>
              </div>
              <div class="col self-start label">กดปุ่ม “ทำภารกิจ”</div>
            </div>
            <div class="q-py-md">
              <img src="../statics/grammar/grammar5.png" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">11</div>
              </div>
              <div class="col self-start label">แสดงจำนวนนักเรียนที่ตอบเสร็จสิ้นในข้อปัจจุบัน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">12</div>
              </div>
              <div class="col self-start label">
                เวลาที่แนะนำสำหรับการทำแบบฝึกหัด แต่ระยะเวลาในการสอนจริงนั้น
                อาจจะแตกต่างจากเวลาที่แนะนำได้ ขึ้นอยู่กับดุลพินิจของคุณครูผู้สอน
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">13</div>
              </div>
              <div class="col self-start label">แถบแสดงข้อที่อยู่ปัจจุบัน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">14</div>
              </div>
              <div
                class="col self-start label"
              >คำถามของแบบฝึกหัด คุณครูควรอธิบายให้นักเรียนเข้าใจโจทย์เบื้องต้นก่อน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">15</div>
              </div>
              <div
                class="col self-start label"
              >กดปุ่ม “เริ่มทำ” เพื่อให้นักเรียนเริ่มทำแบบฝึกหัดข้อปัจจุบัน</div>
            </div>
            <div class="q-pt-md">
              <img src="../statics/grammar/grammar6.png" alt />
            </div>
            <div align="center" @click="openAction()" class="cursor-pointer q-py-sm cl1">
              <u>ตัวอย่างหน้าแบบฝึกหัดของนักเรียน</u>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">16</div>
              </div>
              <div class="col self-start label">
                กดปุ่ม "สิ้นสุดการทํา" เมื่อนักเรียนทําข้อเสร็จครบทุกคน โดยดูได้จากข้อ
                11. หรือขึ้นอยู่กับดุลพินิจของคุณครูผู้สอน ในข้อปัจจุบัน
              </div>
            </div>

            <div class="q-py-md">
              <img src="../statics/grammar/grammar7.png" alt />
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">17</div>
              </div>
              <div class="col self-start label">กราฟแสดงจำนวนนักเรียนที่ตอบในแต่ละตัวเลือก</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">18</div>
              </div>
              <div class="col self-start label">กดปุ่ม “เฉลยคำตอบ”</div>
            </div>
            <div class="q-py-md">
              <img src="../statics/grammar/grammar8.png" alt />
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">19</div>
              </div>
              <div class="col self-start label">แสดงตัวเลือกที่ถูกต้อง</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">20</div>
              </div>
              <div class="col self-start label">กดปุ่ม “คำอธิบาย”</div>
            </div>
            <div class="q-py-md">
              <img src="../statics/grammar/grammar9.png" alt />
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">21</div>
              </div>
              <div class="col self-start label">คำอธิบายของคำถามปัจจุบัน</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">22</div>
              </div>
              <div class="col self-start label">กดปุ่ม “ข้อถัดไป” ทำจนกระทั่งถึงข้อสุดท้าย</div>
            </div>
            <div class="q-py-md">
              <img src="../statics/grammar/grammar10.png" alt />
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">23</div>
              </div>
              <div class="col self-start label">ปุ่ม “ข้อถัดไป” จะเปลี่ยนเป็นปุ่ม “จบภารกิจ”</div>
            </div>
            <div class="q-py-md">
              <img src="../statics/grammar/grammar11.png" alt />
            </div>

            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">24</div>
              </div>
              <div class="col self-start label">
                กดเพื่อ ทำแบบฝึกหัดใหม่อีกครั้ง
                โดยคะแนนที่นักเรียนได้ทำไปแล้วในแบบฝึกหัดนี้จะไม่มี การบันทึกใดๆ
                ทั้งสิ้น
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">25</div>
              </div>
              <div class="col self-start label">กดปุ่ม “ภารกิจถัดไป”</div>
            </div>
          </div>
        </div>

        <!-- Fill in the blank -->
        <div class="q-py-md q-px-sm">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:180px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >เติมตำตอบ</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/grammar/grammar12.png" alt />

            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">26</div>
              </div>
              <div class="col self-start label">อ่านคำสั่งของภารกิจให้ละเอียด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">27</div>
              </div>
              <div class="col self-start label">กดปุ่ม “ทำภารกิจ”</div>
            </div>

            <div class="q-pt-md">
              <img src="../statics/grammar/grammar13.png" alt />
            </div>
            <div align="center" @click="openFillin()" class="cursor-pointer q-py-sm cl1">
              <u>ตัวอย่างหน้าแบบฝึกหัดของนักเรียน</u>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">28</div>
              </div>
              <div class="col self-start label">แสดงความก้าวหน้าในการทำแบบฝึกหัดของนักเรียนแบบกราฟ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">29</div>
              </div>
              <div class="col self-start label">
                เวลาที่เหลือในการทำแบบฝึกหัดนี้
                นักเรียนไม่จำเป็นต้องทำโจทย์จนครบทุกข้อทุกคน แต่ขอให้
                พยายามทำในกรอบเวลาที่จัดให้ เพื่อทำให้การเรียนครบถ้วนทันตามหลักสูตร
                แต่ถ้าคุณครูเห็นว่า นักเรียนส่วนใหญ่ยังทำแบบฝึกหัดไม่ทัน
                คุณครูสามารถต่อเวลาเพิ่มเติมได้อีก 2 นาที โดยจะมีหน้าต่าง
                ขึ้นมาถามตอนก่อนหมดเวลา 30 วินาที
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">30</div>
              </div>
              <div class="col self-start label">ตรวจสอบนักเรียนที่ทำแบบฝึกหัดเสร็จ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">31</div>
              </div>
              <div
                class="col self-start label"
              >กดเพื่อ ดูความก้าวหน้าของนักเรียนในรูปแบบตารางรายชื่อ สามารถดูเพิ่มเติมได้ที่ข้อ 33 - 37</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">32</div>
              </div>
              <div
                class="col self-start label"
              >กดปุ่ม “จบภารกิจ” เมื่อคุณครูเห็นว่านักเรียนในห้องทำแบบฝึกหัดเสร็จก่อนเวลาหมด จะไปที่ขั้นตอน 38 – 39 อัตโนมัติ</div>
            </div>
            <div class="q-py-md">
              <div class="q-mt-md q-px-md" align="left">
                <i>ความก้าวหน้าของนักเรียนในรูปแบบตารางรายชื่อจากข้อ 31</i>
              </div>
              <img src="../statics/grammar/grammar14.png" alt />
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">33</div>
              </div>
              <div class="col self-start label">เวลาสำหรับการทำแบบฝึกหัด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">34</div>
              </div>
              <div class="col self-start label">ตรวจสอบนักเรียนที่ทำแบบฝึกหัด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">35</div>
              </div>
              <div
                class="col self-start label"
              >แสดงความก้าวหน้าในการทำแบบฝึกหัดของนักเรียนแบบรายชื่อ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">36</div>
              </div>
              <div class="col self-start label">กดเพื่อ ดูความก้าวหน้าของนักเรียนในรูปแบบกราฟ</div>
            </div>

            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">37</div>
              </div>
              <div class="col self-start label">
                กดปุ่ม “จบแบบฝึกหัด”
                เมื่อคุณครูเห็นว่านักเรียนในห้องทำแบบฝึกหัดเสร็จก่อนหมดเวลา จะไปที่ขั้นตอน 38 - 39 อัตโนมัติ
              </div>
            </div>
            <div class="q-mt-md q-px-md" align="left">
              <i>สรุปคะแนนทั้งหมด จากข้อ 32 หรือข้อ 37</i>
            </div>
            <div>
              <img src="../statics/grammar/grammar15.png" alt />
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">38</div>
              </div>
              <div class="col self-start label">
                กดเพื่อ ทำแบบฝึกหัดใหม่อีกครั้ง
                โดยคะแนนที่นักเรียนได้ทำไปแล้วในแบบฝึกหัดนี้จะไม่มี การบันทึกใดๆ
                ทั้งสิ้น
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">39</div>
              </div>
              <div class="col self-start label">กดปุ่ม “ภารกิจถัดไป”</div>
            </div>
          </div>
        </div>

        <!-- Multiple choices -->

        <div class="q-py-md q-px-sm">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="width:180px;border-top-left-radius: 10px;border-top-right-radius: 10px;"
            >เลือกคำตอบ</div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/grammar/grammar16.png" alt />
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">40</div>
              </div>
              <div class="col self-start label">อ่านคำสั่งของภารกิจให้ละเอียด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">41</div>
              </div>
              <div class="col self-start label">กดปุ่ม “ทำภารกิจ”</div>
            </div>
            <div class="q-pt-md">
              <img src="../statics/grammar/grammar17.png" alt />
            </div>
            <div align="center" @click="openMulti()" class="cursor-pointer q-py-sm cl1">
              <u>ตัวอย่างหน้าแบบฝึกหัดของนักเรียน</u>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">42</div>
              </div>
              <div class="col self-start label">
                เวลาที่เหลือในการทำแบบฝึกหัดนี้
                นักเรียนไม่จำเป็นต้องทำโจทย์จนครบทุกข้อทุกคน แต่ขอให้
                พยายามทำในกรอบเวลาที่จัดให้ เพื่อทำให้การเรียนครบถ้วนทันตามหลักสูตร
                แต่ถ้าคุณครูเห็นว่า นักเรียนส่วนใหญ่ยังทำแบบฝึกหัดไม่ทัน
                คุณครูสามารถต่อเวลาเพิ่มเติมได้อีก 2 นาที โดย จะมีหน้าต่าง
                ขึ้นมาถามตอนก่อนหมดเวลา 30 วินาที
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">43</div>
              </div>
              <div class="col self-start label">ตรวจสอบนักเรียนที่ทำแบบฝึกหัดเสร็จ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">44</div>
              </div>
              <div class="col self-start label">แสดงความก้าวหน้าในการทำแบบฝึกหัดของนักเรียนแบบกราฟ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">45</div>
              </div>
              <div
                class="col self-start label"
              >กดเพื่อ ดูความก้าวหน้าของนักเรียนในรูปแบบตารางรายชื่อ สามารถดูเพิ่มเติมได้ที่ข้อ 47 - 51</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">46</div>
              </div>
              <div
                class="col self-start label"
              >กดปุ่ม “จบภารกิจ” เมื่อคุณครูเห็นว่านักเรียนในห้องทำแบบฝึกหัดเสร็จก่อนเวลาหมด จะไปที่ขั้นตอน 52 – 53 อัตโนมัติ</div>
            </div>
            <div class="q-py-md">
              <div class="q-mt-md q-px-md" align="left">
                <i>ความก้าวหน้าของนักเรียนในรูปแบบตารางรายชื่อจากข้อ 45</i>
              </div>

              <img src="../statics/grammar/grammar18.png" alt />
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">47</div>
              </div>
              <div class="col self-start label">เวลาสำหรับการทำแบบฝึกหัด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">48</div>
              </div>
              <div class="col self-start label">ตรวจสอบนักเรียนที่ทำแบบฝึกหัดเสร็จ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption2">49</div>
              </div>
              <div
                class="col self-start label"
              >แสดงความก้าวหน้าในการทำแบบฝึกหัดของนักเรียนแบบตารางรายชื่อ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">50</div>
              </div>
              <div class="col self-start label">กดเพื่อ ดูความก้าวหน้าของนักเรียนในรูปแบบกราฟ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">51</div>
              </div>
              <div class="col self-start label">
                กดปุ่ม “จบแบบฝึกหัด”
                เมื่อคุณครูเห็นว่านักเรียนในห้องทำแบบฝึกหัดเสร็จก่อนหมดเวลา จะไปที่ขั้นตอน 52 - 53 อัตโนมัติ
              </div>
            </div>
            <div class="q-py-md">
              <img src="../statics/grammar/grammar19.png" alt />
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">52</div>
              </div>
              <div
                class="col self-start label"
              >ถ้าคุณครูต้องการให้นักเรียนเรียนใหม่อีกครั้ง คุณครูสามารถกด "ทำอีกครั้ง" ได้ โดยคะแนนที่นักเรียนได้ทำไปแล้วในแบบฝึกหัดนี้จะไม่มีการบันทึกใดๆ ทั้งสิ้น</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width:50px" align="center">
                <div class="caption">53</div>
              </div>
              <div
                class="col self-start label"
              >ในกรณีที่แบบฝึกหัดสุดท้ายของ ไวยากรณ์ จะมีปุ่ม “สรุปคะแนน” ปรากฏขึ้น</div>
            </div>
          </div>
        </div>

        <!-- จบแบบฝึกหัด -->
        <div class="q-py-md q-px-sm">
          <img src="../statics/grammar/grammar20.png" alt />
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption2">54</div>
          </div>
          <div class="col self-start label">ตรวจสอบคะแนนของนักเรียนในบทเรียน ไวยากรณ์</div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width:50px" align="center">
            <div class="caption">55</div>
          </div>
          <div class="col self-start label">กดปุ่ม “ภารกิจถัดไป”</div>
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

      <!-- dialog fillin -->
      <q-dialog v-model="popupFillin">
        <div class="bg3 q-pt-md" style="width:100%;max-width:950px ; margin:auto;">
          <div class="q-px-md">
            <div class="row">
              <div class="col-11 self-center label2">แบบฝึกหัด Fill in the blank ของนักเรียน</div>
              <div class="col-1" align="right">
                <q-icon
                  @click="closeFillin()"
                  class="cursor-pointer"
                  style="font-size:calc(40px + 0.5vw)"
                  name="fas fa-times"
                />
              </div>
            </div>
            <div class="q-pb-md" align="center">
              <img src="../statics/grammar/popup-fill.png" alt />
            </div>
          </div>
        </div>
      </q-dialog>
      <!-- dialog action -->
      <q-dialog v-model="popupAction">
        <div class="bg3 q-pt-md" style="width:100%;max-width:950px ; margin:auto;">
          <div class="q-px-md">
            <div class="row">
              <div class="col-11 self-center label2">แบบฝึกหัด Grammar Action ของนักเรียน</div>
              <div class="col-1" align="right">
                <q-icon
                  @click="closeAction()"
                  class="cursor-pointer"
                  style="font-size:calc(40px + 0.5vw)"
                  name="fas fa-times"
                />
              </div>
            </div>
            <div class="q-pb-md" align="center">
              <img src="../statics/grammar/popup-Action.png" alt />
            </div>
          </div>
        </div>
      </q-dialog>
      <!-- dialog Multi -->
      <q-dialog v-model="popupMulti">
        <div class="bg3 q-pt-md" style="width:100%;max-width:950px ; margin:auto;">
          <div class="q-px-md">
            <div class="row">
              <div class="col-11 self-center label2">แบบฝึกหัด Multiple choice ของนักเรียน</div>
              <div class="col-1" align="right">
                <q-icon
                  @click="closeMulti()"
                  class="cursor-pointer"
                  style="font-size:calc(40px + 0.5vw)"
                  name="fas fa-times"
                />
              </div>
            </div>
            <div class="q-pb-md" align="center">
              <img src="../statics/grammar/popup-multiple.png" alt />
            </div>
          </div>
        </div>
      </q-dialog>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import appFooter from "../components/footer.vue";
export default {
  data() {
    return {
      popupFillin: false,
      popupMulti: false,
      popupAction: false,
      innerWidth: window.innerWidth,
      innerheigth: window.innerheigth
    };
  },
  components: {
    appFooter
  },
  methods: {
    openFillin() {
      this.popupFillin = true;
    },
    closeFillin() {
      this.popupFillin = false;
    },
    openMulti() {
      this.popupMulti = true;
    },
    closeMulti() {
      this.popupMulti = false;
    },
    openAction() {
      this.popupAction = true;
    },
    closeAction() {
      this.popupAction = false;
    },
    onResize(x) {
      return (this.innerWidth = x.width), (this.innerheigth = x.height);
    },
    nextBtn() {
      this.$router.push("/reading");
    },
    homeBtn() {
      this.$router.push("/tutorial01a");
    },
    backBtn() {
      this.$router.push("/vocab");
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
