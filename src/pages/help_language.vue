<template>
  <div align="center">
    <q-resize-observer @resize="onResize" />
    <div class="shadow-1" style="max-width: 1280px">
      <div v-show="innerWidth >= 950">
        <div align="left" class="q-px-md">
          <router-link to="manual">คู่มือการใช้งาน</router-link>&nbsp;>
          <router-link to="tutorial01a">เรียนรู้การใช้งาน</router-link
          >&nbsp;>&nbsp;การพูดและฟัง
        </div>
      </div>
      <div style="width: 100%; max-width: 900px; margin: auto">
        <div v-show="innerWidth < 950">
          <div align="left" class style="max-width: 1280px; width: 90%">
            <router-link to="manual">คู่มือ</router-link>&nbsp;>
            <router-link to="tutorial01a">เรียนรู้</router-link>&nbsp;>&nbsp;การพูดและฟัง
          </div>
        </div>

        <div class="text-h3 cl1 q-py-md" align="center">การพูดและฟัง</div>
        <div align="center">การเข้าสู่บทเรียน การพูดและฟัง มีดังนี้</div>
        <div class="q-py-md q-px-sm">
          <img src="../statics/LTIPS/LTIPS1.png" alt />
        </div>
        <div class="row">
          <div class="col-1" style="width: 50px" align="center">
            <div class="caption">1</div>
          </div>
          <div class="col self-start label">กดปุ่ม "เริ่มภารกิจ"</div>
        </div>

        <!-- Language Tips -->
        <div class="q-py-md q-px-sm">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="
                width: 180px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
              "
            >
              เคล็ดลับภาษา
            </div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/LTIPS/LTIPS2.png" alt />
            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">2</div>
              </div>
              <div class="col self-start label">อ่านคำสั่งให้ละเอียด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">3</div>
              </div>
              <div class="col self-start label">กดปุ่ม "ทำภารกิจ"</div>
            </div>
            <div class="q-py-md">
              <img src="../statics/LTIPS/LTIPS3.png" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">4</div>
              </div>
              <div class="col self-start label">
                เวลาที่แนะนำสำหรับการเรียน แต่ระยะเวลาในการสอนจริงนั้น
                อาจจะแตกต่างจากเวลาที่แนะนำได้ ขึ้นอยู่กับดุลพินิจของคุณครูผู้สอน
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">5</div>
              </div>
              <div class="col self-start label">
                เนื้อหาของบทเรียน "เคล็ดลับภาษา" มีทั้งแบบภาพนิ่ง และแบบวิดีโอสอน
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">6</div>
              </div>
              <div class="col self-start label">
                เลือกหัวข้อสำหรับการเรียน หัวข้อที่เรียนไปแล้วจะแสดงเป็นสีเขียว
                คุณครูต้องเรียนให้ครบ ถึงจะสามารถเลือก "จบภารกิจ" ได้
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">7</div>
              </div>
              <div class="col self-start label">
                กรณีเนื้อหาเป็นภาพนิ่ง กดปุ่ม "เล่นเสียง" เพื่อฟังเสียงบรรยาย
                กรณีเนื้อหาเป็นวิดีโอ ปุ่มจะเปลี่ยนเป็น "เล่นวิดีโอ" กดเพื่อดูวิดีโอการสอน
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">8</div>
              </div>
              <div class="col self-start label">
                กด "จบภารกิจ" ปุ่มจะสามารถใช้งานได้ เมื่อคุณครูสอนเนื้อหาทุกหัวข้อครบแล้ว
                โดยสามารถสังเกตได้จากหัวข้อที่สอนไปแล้วจะเปลี่ยนเป็นสีเขียว
              </div>
            </div>
            <div class="q-py-md">
              <img src="../statics/LTIPS/LTIPS4.png" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">9</div>
              </div>
              <div class="col self-start label">
                ถ้าคุณครูต้องการให้นักเรียนเรียนใหม่อีกครั้ง คุณครูสามารถกด
                "ทำภารกิจใหม่อีกครั้ง" ได้
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">10</div>
              </div>
              <div class="col self-start label">
                ถ้าคุณครูต้องการให้นักเรียนเรียนในบทเรียนถัดไป คุณครูสามารถกด
                "ภารกิจถัดไป"
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">11</div>
              </div>
              <div class="col self-start label">
                ถ้าคุณครูเห็นว่านักเรียนในห้องพร้อมใจกันออกเสียงและตั้งใจเรียน
                คุณครูสามารถให้คะแนนพิเศษได้ โดยกด "ให้เพิ่ม 10 XP แล้วทำภารกิจถัดไป"
                เมื่อกดให้คะแนนพิเศษแล้วระบบจะพาเข้าสู่บทเรียนถัดไปอัตโนมัติ
              </div>
            </div>
          </div>
        </div>

        <!-- Dialog Practice -->
        <div class="q-py-md q-px-sm">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="
                width: 180px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
              "
            >
              เลือกคำตอบ
            </div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/LTIPS/LTIPS5.png" alt />
            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">12</div>
              </div>
              <div class="col self-start label">อ่านคำสั่งให้ละเอียด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">13</div>
              </div>
              <div class="col self-start label">กดปุ่ม "ทำภารกิจ"</div>
            </div>
            <div class="q-pt-md">
              <img src="../statics/LTIPS/LTIPS6.png" alt />
            </div>
            <div
              align="center"
              @click="openLanguage()"
              class="cursor-pointer q-py-sm cl1"
            >
              <u>ตัวอย่างหน้าแบบฝึกหัดของนักเรียน</u>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">14</div>
              </div>
              <div class="col self-start label">
                เวลาที่เหลือในการทำแบบฝึกหัดนี้
                นักเรียนไม่จำเป็นต้องทำโจทย์จนครบทุกข้อทุกคน
                แต่ขอให้พยายามทำในกรอบเวลาที่จัดให้
                เพื่อทำให้การเรียนครบถ้วนทันตามหลักสูตร แต่ถ้าคุณครูเห็นว่า
                นักเรียนส่วนใหญ่ยังทำแบบฝึกหัดไม่ทัน คุณครูสามารถต่อเวลาเพิ่มได้อีก 2 นาที
                โดยจะมีหน้าต่างขึ้นมาถามตอนก่อนหมดเวลา 30 วินาที
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">15</div>
              </div>
              <div class="col self-start label">ตรวจสอบนักเรียนที่ทำแบบฝึกหัดเสร็จ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">16</div>
              </div>
              <div class="col self-start label">
                แสดงความก้าวหน้าในการทำแบบฝึกหัดของนักเรียนแบบกราฟ
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">17</div>
              </div>
              <div class="col self-start label">
                กดเพื่อดูความก้าวหน้าของนักเรียนในรูปแบบตารางรายชื่อ
                สามารถดูเพิ่มเติมได้ที่ข้อ 19-23
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">18</div>
              </div>
              <div class="col self-start label">
                กดปุ่ม "จบภารกิจ"
                เมื่อคุณครูเห็นว่านักเรียนในห้องทำแบบฝึกหัดเสร็จก่อนหมดเวลา
                จะไปที่ขั้นตอนที่ 24-25 อัตโนมัติ
              </div>
            </div>
            <div class="q-mt-lg q-px-md" align="left">
              <i>ความก้าวหน้าของนักเรียนในรูปแบบตารางรายชื่อจากข้อ 17</i>
            </div>
            <img src="../statics/LTIPS/LTIPS7.png" alt />

            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">19</div>
              </div>
              <div class="col self-start label">เวลาสำหรับการทำแบบฝึกหัด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">20</div>
              </div>
              <div class="col self-start label">ตรวจสอบนักเรียนที่ทำเเบบฝึกหัดเสร็จ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">21</div>
              </div>
              <div class="col self-start label">
                แสดงความก้าวหน้าในการทำแบบฝึกหัดของนักเรียนแบบตารางรายชื่อ
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">22</div>
              </div>
              <div class="col self-start label">
                กดเพื่อ ดูแสดงความก้าวหน้าของนักเรียนในรูปแบบกราฟ
                สามารถดูเพิ่มเติมได้ที่ข้อ 14-18
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">23</div>
              </div>
              <div class="col self-start label">
                กดปุ่ม "จบภารกิจ"
                เมื่อคุณครูเห็นว่านักเรียนในห้องทำแบบฝึกหัดเสร็จก่อนหมดเวลา จะไปขั้นตอน
                24-25 อัตโนมัติ
              </div>
            </div>
            <div class="q-py-md">
              <img src="../statics/LTIPS/LTIPS8.png" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">24</div>
              </div>
              <div class="col self-start label">
                ถ้าคุณครูต้องการให้นักเรียนเรียนใหม่อีกครั้ง คุณครูสามารถกด "ทำอีกครั้ง"
                ได้ โดยคะแนนที่นักเรียนได้ทำไปแล้วในแบบฝึกหัดนี้จะไม่มีการบันทึกใดๆ
                ทั้งสิ้น
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">25</div>
              </div>
              <div class="col self-start label">
                ถ้าคุณครูต้องการให้นักเรียนเรียนในบทเรียนถัดไป คุณครูสามารถกด
                "ภารกิจถัดไป"
              </div>
            </div>
          </div>
        </div>

        <!-- Role play -->

        <div class="q-py-md q-px-sm">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="
                width: 180px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
              "
            >
              บทหนังสั้น
            </div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/LTIPS/LTIPS9.png" alt />
            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">26</div>
              </div>
              <div class="col self-start label">อ่านคำสั่งให้ัละเอียด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">27</div>
              </div>
              <div class="col self-start label">กดปุ่ม "ทำภารกิจ"</div>
            </div>
            <div class="q-py-md">
              <img src="../statics/LTIPS/LTIPS10.png" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">28</div>
              </div>
              <div class="col self-start label">
                กดเพื่อเรียนเนื้อหาแบบ "พูดพร้อมกันทั้งห้อง"
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">29</div>
              </div>
              <div class="col self-start label">
                กดเพื่อเรียนเนื้อหาแบบ "แบ่ง 2 กลุ่ม"
              </div>
            </div>
            <div class="q-mt-md q-px-sm" align="left">
              <i>กรณีเลือกเรียนแบบ "แบ่งกลุ่มพูด" จากข้อ 29</i>
            </div>
            <div class="q-pt-md">
              <img src="../statics/LTIPS/LTIPS11.png" alt />
            </div>
            <div align="center" @click="openRole()" class="cursor-pointer q-py-sm cl1">
              <u>ตัวอย่างหน้าแบบฝึกหัดของนักเรียน</u>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">30</div>
              </div>
              <div class="col self-start label">แสดงจำนวนนักเรียนที่เลือกเเล้ว</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">31</div>
              </div>
              <div class="col self-start label">แสดงจำนวนนักเรียนที่เลือกตัวละคร</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">32</div>
              </div>
              <div class="col self-start label">กดปุ่ม "เริ่มเล่นหนังสั้น"</div>
            </div>
            <div class="q-py-md">
              <img src="../statics/LTIPS/LTIPS12.png" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">33</div>
              </div>
              <div class="col self-start label">
                เวลาที่แนะนำสำหรับการเรียน แต่ระยะเวลาในการสอนจริงนั้น
                อาจจะแตกต่างจากเวลาที่แนะนำได้ ขึ้นอยู่กับดุลพินิจของคุณครูผู้สอน
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">34</div>
              </div>
              <div class="col self-start label">
                แสดงชื่อตัวละครที่พูดในประโยคปัจจุบัน
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">35</div>
              </div>
              <div class="col self-start label">ประโยคของตัวละคร</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">36</div>
              </div>
              <div class="col self-start label">
                กดเพื่อฟังเสียงประโยคสนทนา
                คุณครูควรจะให้นักเรียนฝึกพูดประโยคสนทนาตามตัวละครที่นักเรียนเลือก
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">37</div>
              </div>
              <div class="col self-start label">
                กดเพื่อไปยัง ประโยคถัดไป ทำจนกระทั่งถึงประโยคสุดท้าย
              </div>
            </div>
            <div class="q-py-md">
              <img src="../statics/LTIPS/LTIPS13.png" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">38</div>
              </div>
              <div class="col self-start label">
                สามารถกดเพื่อกลับไปดูประโยคสนทนาก่อนหน้านี้ได้
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">39</div>
              </div>
              <div class="col self-start label">
                ถ้าคุณครูต้องการให้นักเรียนเรียนในบทเรียนถัดไป คุณครูสามารถกด "จบภารกิจ"
              </div>
            </div>

            <div class="q-py-md">
              <img src="../statics/LTIPS/LTIPS14.png" alt />
            </div>
            <div class="row q-pb-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">40</div>
              </div>
              <div class="col self-start label">
                ถ้าคุณครูต้องการให้นักเรียนเรียนใหม่อีกครั้ง คุณครูสามารถกด
                "ทำภารกิจใหม่อีกครั้ง" ได้
              </div>
            </div>
            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">41</div>
              </div>
              <div class="col self-start label">
                ถ้าคุณครูต้องการให้นักเรียนเรียนในบทเรียนถัดไป คุณครูสามารถกด
                "ภารกิจถัดไป"
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">42</div>
              </div>
              <div class="col self-start label">
                กดให้คะแนนพิเศษ และเข้าสู่บทเรียนถัดไป
                ถ้าคุณครูเห็นว่านักเรียนในห้องพร้อมใจกันฝึกพูดประโยคสนทนาและตั้งใจเรียน
                คุณครูสามารถให้คะแนนพิเศศษได้
              </div>
            </div>
          </div>
        </div>
        <!-- Conversation -->
        <div class="q-py-md q-px-sm">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="
                width: 140px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
              "
            >
              ดูหนังสั้น
            </div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/LTIPS/LTIPS15.png" alt />

            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">43</div>
              </div>
              <div class="col self-start label">อ่านคำสั่งให้ละเอียด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">44</div>
              </div>
              <div class="col self-start label">กดปุ่ม "ทำภารกิจ"</div>
            </div>
            <div class="q-py-md">
              <img src="../statics/LTIPS/LTIPS16.png" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">45</div>
              </div>
              <div class="col self-start label">คุณครูพานักเรียนดูวิดีโอสนทนา</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">46</div>
              </div>
              <div class="col self-start label">กดปุ่ม "จบภารกิจ"</div>
            </div>
          </div>
        </div>
        <!-- Listening Practice -->

        <div class="q-py-md q-px-sm">
          <div align="left">
            <div
              class="bg4 cl3 q-px-md"
              align="center"
              style="
                width: 200px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
              "
            >
              ถามตอบหนังสั้น
            </div>
          </div>
          <div class="special q-pa-sm">
            <img src="../statics/LTIPS/LTIPS17.png" alt />
            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">47</div>
              </div>
              <div class="col self-start label">อ่านคำสั่งให้ละเอียด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">48</div>
              </div>
              <div class="col self-start label">กดปุ่ม "ทำภารกิจ"</div>
            </div>
            <div class="q-pt-md">
              <img src="../statics/LTIPS/LTIPS18.png" alt />
            </div>
            <div
              align="center"
              @click="openListening()"
              class="cursor-pointer q-py-sm cl1"
            >
              <u>ตัวอย่างหน้าแบบฝึกหัดของนักเรียน</u>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">49</div>
              </div>
              <div class="col self-start label">
                เวลาที่เหลือในการทำแบบฝึกหัดนี้
                นักเรียนไม่จำเป็นต้องทำโจทย์จนครบทุกข้อทุกคน
                แต่ขอให้พยายามทำในกรอบเวลาที่จัดให้
                เพื่อทำให้การเรียนครบถ้วนทันตามหลักสูตร แต่ถ้าคุณครูเห็นว่า
                นักเรียนส่วนใหญ่ยังทำแบบฝึกหัดไม่ทัน คุณครูสามารถต่อเวลาเพิ่มได้อีก 2 นาที
                โดยจะมีหน้าต่างขึ้นมาถามตอนก่อนหมดเวลา 30 วินาที
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">50</div>
              </div>
              <div class="col self-start label">ตรวจสอบนักเรียนที่ทำแบบฝึกหัดเสร็จ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">51</div>
              </div>
              <div class="col self-start label">
                แสดงความก้าวหน้าในการทำแบบฝึกหัดของนักเรียนแบบกราฟ
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">52</div>
              </div>
              <div class="col self-start label">
                กดเพื่อดูความก้าวหน้าของนักเรียนในรูปแบบตารางรายชื่อ
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">53</div>
              </div>
              <div class="col self-start label">
                กดปุ่ม "จบภารกิจ"
                เมื่อคุณครูเห็นว่านักเรียนในห้องทำแบบฝึกหัดเสร็จก่อนหมดเวลา
              </div>
            </div>
            <div class="q-py-md">
              <div class="text-h4 q-pb-md row">
                <div class="label2">
                  หน้าความก้าวหน้าของนักเรียนในรูปแบบตารางรายชื่อ (ปุ่มจากข้อ
                </div>
                <span class="caption3 q-mx-sm" align="center">55</span>)
              </div>
              <img src="../statics/LTIPS/LTIPS19.png" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">54</div>
              </div>
              <div class="col self-start label">เวลาสำหรับการทำแบบฝึกหัด</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">55</div>
              </div>
              <div class="col self-start label">ตรวจสอบนักเรียนที่ทำเเบบฝึกหัดเสร็จ</div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption2">56</div>
              </div>
              <div class="col self-start label">
                แสดงความก้าวหน้าในการทำแบบฝึกหัดของนักเรียนแบบตารางรายชื่อ
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">57</div>
              </div>
              <div class="col self-start label">
                กดเพื่อดูความก้าวหน้าของนักเรียนในรูปแบบกราฟ
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">58</div>
              </div>
              <div class="col self-start label">
                กดปุ่ม "จบภารกิจ"
                เมื่อคุณครูเห็นว่านักเรียนในห้องทำแบบฝึกหัดเสร็จก่อนหมดเวลา
              </div>
            </div>
            <div class="q-py-md">
              <img src="../statics/LTIPS/LTIPS20.png" alt />
            </div>
            <div class="row">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">59</div>
              </div>
              <div class="col self-start label">
                กดเพื่อทำแบบฝึกหัดใหม่อีกครั้ง
                โดยคะแนนที่นักเรียนได้ทำไปแล้วในแบบฝึกหัดนี้จะไม่มีการบันทึกใดๆ ทั้งสิ้น
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-1" style="width: 50px" align="center">
                <div class="caption">60</div>
              </div>
              <div class="col self-start label">กดปุ่ม "สรุปคะแนน"</div>
            </div>
          </div>
        </div>

        <!-- จบ -->

        <div class="q-py-md q-px-sm">
          <img src="../statics/LTIPS/LTIPS21.png" alt />
        </div>
        <div class="row">
          <div class="col-1" style="width: 50px" align="center">
            <div class="caption2">61</div>
          </div>
          <div class="col self-start label">
            ตรวจสอบคะแนนของนักเรียนในบทเรียน การฟังและพูด
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="col-1" style="width: 50px" align="center">
            <div class="caption">62</div>
          </div>
          <div class="col self-start label">กดปุ่ม "ภารกิจถัดไป"</div>
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
              style="width: 80%; max-width: 450px"
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

      <!-- dialog practice -->
      <q-dialog v-model="popupDialog">
        <div class="bg3 q-pt-md" style="width: 100%; max-width: 950px; margin: auto">
          <div class="q-px-md">
            <div class="row">
              <div class="col-11 self-center label2">
                แบบฝึกหัด Dialog Practice ของนักเรียน
              </div>
              <div class="col-1" align="right">
                <q-icon
                  @click="closeLanguage()"
                  class="cursor-pointer"
                  style="font-size: calc(40px + 0.5vw)"
                  name="fas fa-times"
                />
              </div>
            </div>
            <div class="q-pb-md" align="center">
              <img src="../statics/LTIPS/popup-practice.png" alt />
            </div>
          </div>
        </div>
      </q-dialog>
      <!-- dialog listening -->
      <q-dialog v-model="popupListening">
        <div class="bg3 q-pt-md" style="width: 100%; max-width: 950px; margin: auto">
          <div class="q-px-md">
            <div class="row">
              <div class="col-11 self-center label2">
                แบบฝึกหัด Listening Practice ของนักเรียน
              </div>
              <div class="col-1" align="right">
                <q-icon
                  @click="closeListening()"
                  class="cursor-pointer"
                  style="font-size: calc(40px + 0.5vw)"
                  name="fas fa-times"
                />
              </div>
            </div>
            <div class="q-pb-md" align="center">
              <img src="../statics/LTIPS/popup-Listening.png" alt />
            </div>
          </div>
        </div>
      </q-dialog>
      <!-- dialog role play -->
      <q-dialog v-model="popupRole">
        <div class="bg3 q-pt-md" style="width: 100%; max-width: 950px; margin: auto">
          <div class="q-px-md">
            <div class="row">
              <div class="col-11 self-center label2">แบบฝึกหัด Role play ของนักเรียน</div>
              <div class="col-1" align="right">
                <q-icon
                  @click="closeRole()"
                  class="cursor-pointer"
                  style="font-size: calc(40px + 0.5vw)"
                  name="fas fa-times"
                />
              </div>
            </div>
            <div class="q-pb-md" align="center">
              <img src="../statics/LTIPS/popup-role.png" alt />
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
      popupRole: false,
      popupListening: false,
      popupDialog: false,
      innerWidth: null,
      innerheigth: window.innerheigth,
    };
  },
  components: {
    appFooter,
  },
  methods: {
    openListening() {
      this.popupListening = true;
    },
    closeListening() {
      this.popupListening = false;
    },
    openRole() {
      this.popupRole = true;
    },
    closeRole() {
      this.popupRole = false;
    },
    openLanguage() {
      this.popupDialog = true;
    },
    closeLanguage() {
      this.popupDialog = false;
    },
    onResize(x) {
      return (this.innerWidth = x.width), (this.innerheigth = x.height);
    },
    nextBtn() {
      this.$router.push("/user");
    },
    homeBtn() {
      this.$router.push("/tutorial01a");
    },
    backBtn() {
      this.$router.push("/phonics");
    },
  },
};
</script>

<style>
img {
  width: 100%;
  max-width: 900px;
}
</style>
