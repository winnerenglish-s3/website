<template>
  <div align="center">
    <q-resize-observer @resize="onResize" />
    <div class="shadow-1" style="max-width:1280px">
      <div v-show="innerWidth >= 950">
        <div align="left" class="q-px-md">
          <router-link to="manual">คู่มือการใช้งาน</router-link>&nbsp;>&nbsp;ปัญหาการใช้งาน
        </div>
      </div>
      <div style="width:100%;max-width:900px ; margin:auto;" class="q-pr-sm">
        <div v-show="innerWidth < 950">
          <div align="left" class style="max-width:1280px; width:90%">
            <router-link to="manual">คู่มือ</router-link>&nbsp;>
            &nbsp;ปัญหาการใช้งาน
          </div>
        </div>

        <div class="text-h3 cl1 q-py-md" align="center">ปัญหาการใช้งาน</div>
        <div align="center">FAQ : คำถามที่พบบ่อย</div>

        <!-- Q1 -->
        <div align="left">
          <div class="row cl1 q-pt-md">
            <div class="col-1 q-pl-sm" style="width:40px">Q :</div>
            <div class="col self-start label">นักเรียนขาดเรียนต้องทำอย่างไร</div>
          </div>
          <div class="row">
            <div class="col-1 q-pl-sm" style="width:40px">A :</div>
            <div class="col self-start label">
              คุณครูสามารถดําเนินการเรียนการสอนตามขั้นตอนในหัวข้อการ
              <router-link to="/login">การเข้าสู่ระบบ</router-link>&nbsp;สําหรับนักเรียนที่ขาดเรียน สามารถเรียนในชั่วโมงต่อไปได้ตามปกติ และสามารถศึกษาเนื้อหาทีขาดเรียนด้วยตัวเองได้ที่ Winner Plus
            </div>
          </div>
          <div class="row cl1 q-pt-md">
            <div class="col-1 q-pl-sm" style="width:40px">Q :</div>
            <div class="col self-start label">นักเรียนมาเรียนสาย ต้องทําอย่างไร</div>
          </div>
          <div class="row">
            <div class="col-1 q-pl-sm" style="width:40px">A :</div>
            <div class="col self-start label">
              กรณีที่เครื่องคอมพิวเตอร์เพียงพอ นักเรียนที่มาสายสามารถเข้าเรียนได้ตามปกติ กรณีที่เครืองคอมพิวเตอร์ไม่เพียงพอ ต้องนั่งเรียนกับเพื่อน นักเรียนที่มาเรียนสายต้องรอให้เพื่อนเรียนจบแบบฝึกหัดก่อนแล้วให้คุณครู กดไอคอน
              <img
                src="../statics/faq/faq02.jpg"
                style="width:30px;position:relative; top:8px;"
              />เพื่อเพิ่มนักเรียนที่มาเรียนสายเข้าสู่บทเรียน
            </div>
          </div>

          <div class="row cl1 q-pt-md">
            <div class="col-1 q-pl-sm" style="width:40px">Q :</div>
            <div class="col self-start label">การเรียนแบบจับคู่ ต้องทําอย่างไร</div>
          </div>
          <div class="row">
            <div class="col-1 q-pl-sm" style="width:40px">A :</div>
            <div class="col self-start label">
              สามารถดูรายละเอียดได้ที่
              <router-link to="/login">การเข้าสู่ระบบ หัวข้อที่ 10-14</router-link>
            </div>
          </div>

          <div class="row cl1 q-pt-md">
            <div class="col-1 q-pl-sm" style="width:40px">Q :</div>
            <div class="col self-start label">กรณีทําการสอนแล้วเวลาหมดก่อน ต้องทําอย่างไร</div>
          </div>
          <div class="row">
            <div class="col-1 q-pl-sm" style="width:40px">A :</div>
            <div
              class="col self-start label"
            >ในส่วนของการสอน เวลาที่ระบบจัดให้เป็นเพียงตัวกําหนดเพื่อวางแผนการสอนสําหรับคุณครูเท่านั้น เมื่อทําการสอนในสถานการณ์จริง การกําหนดเวลาให้เป็นไปตาม ดุลยพินิจของคุณครูเอง</div>
          </div>

          <div class="row cl1 q-pt-md">
            <div class="col-1 q-pl-sm" style="width:40px">Q :</div>
            <div class="col self-start label">กรณีทําแบบฝึกหัดแล้วเวลาหมดก่อน ต้องทําอย่างไร</div>
          </div>
          <div class="row">
            <div class="col-1 q-pl-sm" style="width:40px">A :</div>
            <div
              class="col self-start label"
            >ในส่วนของแบบฝึกหัด ขอให้เป็นไปตามเวลาที่กําหนด นักเรียนไม่จําเป็นต้องทําเสร็จทั้งหมด แต่หากต้องการเพิ่มเวลา สามารถทําได้ 1 ครั้ง เพื่อเพิ่มเวลา 2 นาที ต่อแบบฝึกหัด</div>
          </div>

          <div class="row cl1 q-pt-md">
            <div class="col-1 q-pl-sm" style="width:40px">Q :</div>
            <div
              class="col self-start label"
            >ถ้าหน้าจอคอมพิวเตอร์ของนักเรียนต่างจากนักเรียนคนอื่น ต้องทําอย่างไร</div>
          </div>
          <div class="row">
            <div class="col-1 q-pl-sm" style="width:40px;position:relative; top:2px;">A :</div>
            <div class="col self-start label">
              ให้นักเรียนกดโหลดหน้าเว็บใหม่อีกครั้ง
              <img
                src="../statics/faq/faq03.png"
                style="width:100px;position:relative; top:8px;"
              />
            </div>
          </div>
        </div>

        <!-- block #2 -->
        <div class="q-py-md q-px-sm">
          <img src="../statics/faq/faq01.png" alt />
        </div>

        <div class="row cl1 q-pt-md">
          <div class="col-1 q-pl-sm" style="width:40px">Q :</div>
          <div
            class="col self-start label"
          >ถ้านักเรียนเรียนผ่านบทเรียนนั้นๆ ไปแล้ว จะเรียนซํ้าอีกได้หรือไม่</div>
        </div>
        <div class="row">
          <div class="col-1 q-pl-sm" style="width:40px">A :</div>
          <div
            class="col self-start label"
          >ในส่วนของแบบฝึกหัด ไม่สามารถเข้าเรียนในส่วนที่เรียนไปแล้วได้ แต่ในส่วนของเนื้อหาการสอน สามารถเข้าเรียนซํ้ากี่ครั้งก็ได้</div>
        </div>

        <div class="row cl1 q-pt-md">
          <div class="col-1 q-pl-sm" style="width:40px">Q :</div>
          <div class="col self-start label">สามารถเปลี่ยนภารกิจ ระหว่างการเรียนได้หรือไม่</div>
        </div>
        <div class="row">
          <div class="col-1 q-pl-sm" style="width:40px">A :</div>
          <div
            class="col self-start label"
          >ไม่สามารถเปลี่ยนภารกิจทีเลือกไปแล้วได้ จะต้องทําภารกิจทีเลือกแล้วให้เสร็จสิ้นก่อนถึงจะเลือกภารกิจ ใหม่ได้</div>
        </div>

        <div class="row cl1 q-pt-md">
          <div class="col-1 q-pl-sm" style="width:40px">Q :</div>
          <div class="col self-start label">ไม่สามารถเข้าสู่ระบบได้ ต้องทำอย่างไร</div>
        </div>
        <div class="row">
          <div class="col-1 q-pl-sm" style="width:40px">A :</div>
          <div class="col self-start label">
            1. ทําการตรวจสอบการเชื่อมต่อของระบบอินเตอร์เน็ตว่าเชื่อมต่ออยู่หรือไม่
            <br />2. ทําการตรวจสอบว่าใช้ Google Chrome เวอร์ชั่นล่าสุด ในการใช้งาน Winner Adventures หรือไม่
            <br />3. เข้าสู่หน้า Winner Adventures และ Refresh หน้าเว็บใหม่อีกครัง
            <br />4. หากไม่สามารถใช้งานได้ กรุณาติดต่อผู้ประสานงานโรงเรียน
          </div>
        </div>

        <div class="row cl1 q-pt-md">
          <div class="col-1 q-pl-sm" style="width:40px">Q :</div>
          <div class="col self-start label">คุณครูลืม ชื่อผู้ใช้งานและรหัสผ่าน ต้องทําอย่างไร</div>
        </div>
        <div class="row">
          <div class="col-1 q-pl-sm" style="width:40px">A :</div>
          <div
            class="col self-start label"
          >สามารถติดต่อกับผู้ประสานงานโรงเรียนเพื่อขอรับ รหัสผู้ใช้งาน และ รหัสผ่านใหม่</div>
        </div>

        <div class="row cl1 q-pt-md">
          <div class="col-1 q-pl-sm" style="width:40px">Q :</div>
          <div class="col self-start label">นักเรียนลืม ชื่อผู้ใช้งานและรหัสผ่าน ต้องทําอย่างไร</div>
        </div>
        <div class="row">
          <div class="col-1 q-pl-sm" style="width:40px">A :</div>
          <div class="col self-start label">
            สามารถแจ้งกับคุณครูประจําชันเพื่อขอรับ รหัสผู้ใช้งาน และ รหัสผ่านใหม่ คุณครูสามารถเข้าดู ชื่อผู้ใช้งานและรหัสผ่านของนักเรียนได้ที่
            <router-link to="/file">แฟ้มข้อมูล</router-link>
          </div>
        </div>

        <div class="row cl1 q-pt-md">
          <div class="col-1 q-pl-sm" style="width:40px">Q :</div>
          <div
            class="col self-start label"
          >คูณครู ต้องการแก้ไขข้อมูล ชื่อ - นามสกุล, เบอร์โทรศัพท์ ของตนเองต้องทําอย่างไร</div>
        </div>
        <div class="row">
          <div class="col-1 q-pl-sm" style="width:40px">A :</div>
          <div
            class="col self-start label"
          >สามารถติดต่อกับผู้ประสานงานโรงเรียนเพื่อขอเปลี่ยนแปลงและแก้ไขข้อมูลส่วนตัว</div>
        </div>

        <div class="row cl1 q-pt-md">
          <div class="col-1 q-pl-sm" style="width:40px">Q :</div>
          <div
            class="col self-start label"
          >นักเรียนเข้าใหม่, ลาออก, เปลี่ยนชื่อ, เปลี่ยนห้องเรียน ต้องทําอย่างไร</div>
        </div>
        <div class="row">
          <div class="col-1 q-pl-sm" style="width:40px">A :</div>
          <div
            class="col self-start label"
          >สามารถติดต่อกับผู้ประสานงานโรงเรียนเพื่อแจ้งเปลี่ยนแปลงและแก้ไขข้อมูลนักเรียน</div>
        </div>

        <div class="row cl1 q-pt-md">
          <div class="col-1 q-pl-sm" style="width:40px">Q :</div>
          <div class="col self-start label">พบปัญหา / ข้อสงสัย สามารถติดต่อสอบถามได้ที่ไหน</div>
        </div>
        <div class="row">
          <div class="col-1 q-pl-sm" style="width:40px">A :</div>
          <div
            class="col self-start label"
          >ผู้สามารถติดต่อกับผู้ประสานงานโรงเรียนเพื่อแจ้งปัญหาและสอบถามข้อมูลเพิ่มเติม</div>
        </div>

        <!-- navigator -->
        <div class="row q-my-xl q-px-sm">
          <div class="col" align="center">
            <q-btn
              @click="homeBtn()"
              style="width:80%;max-width:450px; "
              class="cl3 bg1 text-h6"
              flat
              rounded
              label="หน้าหลักคู่มือการใช้งาน"
            />
          </div>
        </div>
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

    homeBtn() {
      this.$router.push("/manual");
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
