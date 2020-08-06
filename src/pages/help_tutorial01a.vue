<template>
  <div align="center">
    <q-resize-observer @resize="onResize" />
    <div style="max-width:1900px">
      <div class="bg" style="min-height:calc(100vh - 58px);margin-top:0px;max-height:fit-content">
        <!-- mobile & ipad -->

        <div v-show="innerWidth < 950">
          <div align="left" style="max-width:1280px; width:90%">
            <router-link to="manual">คู่มือ</router-link>&nbsp;> เรียนรู้
          </div>
          <div class="text-h4 cl1 q-pt-md" align="center">เรียนรู้การใช้งาน</div>
          <div class="q-pa-md row justify-center">
            <!-- ปุ่ม 1 -->
            <div class="col-sm-6 col-xs-12 q-py-sm">
              <q-btn
                @click="login()"
                style="width:95%; border-radius: 10px "
                class="bg1"
                align="left"
              >
                <div class="row">
                  <div class="q-pt-sm col-1 q-pl-md" style="width:60px;">
                    <img src="../statics/01a-1.png" style="width:100% ; max-width:50px;" alt />
                  </div>
                  <div class="cl3 label2 q-pl-lg self-center col">1. การเข้าสู่ระบบ</div>
                </div>
              </q-btn>
            </div>
            <!-- ปุ่ม 2 -->
            <div class="col-sm-6 col-xs-12 q-py-sm">
              <q-btn
                @click="voting()"
                style="width:95%; border-radius: 10px "
                class="bg1"
                align="left"
              >
                <div class="row">
                  <div class="q-pt-sm col-1 q-pl-md" style="width:60px;">
                    <img src="../statics/01a-2.png" style="width:100% ; max-width:50px;" alt />
                  </div>
                  <div class="cl3 label2 q-pl-lg self-center col">2. การโหวตภารกิจ</div>
                </div>
              </q-btn>
            </div>
            <!-- ปุ่ม 3 -->
            <div class="col-sm-6 col-xs-12 q-py-sm">
              <q-btn
                @click="vocab()"
                style="width:95%; border-radius: 10px "
                class="bg1"
                align="left"
              >
                <div class="row">
                  <div class="q-pt-sm col-1 q-pl-md" style="width:60px;">
                    <img src="../statics/01a-3.png" style="width:100% ; max-width:50px;" alt />
                  </div>
                  <div class="cl3 label2 q-pl-lg self-center col">3. คำศัพท์</div>
                </div>
              </q-btn>
            </div>
            <!-- ปุ่ม 4 -->
            <div class="col-sm-6 col-xs-12 q-py-sm">
              <q-btn
                @click="grammar()"
                style="width:95%; border-radius: 10px "
                class="bg1"
                align="left"
              >
                <div class="row">
                  <div class="q-pt-sm col-1 q-pl-md" style="width:60px;">
                    <img src="../statics/01a-4.png" style="width:100% ; max-width:50px;" alt />
                  </div>
                  <div class="cl3 label2 q-pl-lg self-center">4. ไวยากรณ์</div>
                </div>
              </q-btn>
            </div>
            <!-- ปุ่ม 5 -->
            <div class="col-sm-6 col-xs-12 q-py-sm">
              <q-btn
                @click="reading()"
                style="width:95%; border-radius: 10px "
                class="bg1"
                align="left"
              >
                <div class="row">
                  <div class="q-pt-sm col-1 q-pl-md" style="width:60px;">
                    <img src="../statics/01a-5.png" style="width:100% ; max-width:50px;" alt />
                  </div>
                  <div class="cl3 label2 q-pl-lg self-center">5. การอ่าน</div>
                </div>
              </q-btn>
            </div>
            <!-- ปุ่ม 6 -->
            <div class="col-sm-6 col-xs-12 q-py-sm">
              <q-btn
                @click="translation()"
                style="width:95%; border-radius: 10px "
                class="bg1"
                align="left"
              >
                <div class="row">
                  <div class="q-pt-sm col-1 q-pl-md" style="width:60px;">
                    <img src="../statics/01a-6.png" style="width:100% ; max-width:50px;" alt />
                  </div>
                  <div class="cl3 label2 q-pl-lg self-center">6. การเขียน</div>
                </div>
              </q-btn>
            </div>
            <!-- ปุ่ม 7 -->
            <div class="col-sm-6 col-xs-12 q-py-sm">
              <q-btn
                @click="phonics()"
                style="width:95%; border-radius: 10px "
                class="bg1"
                align="left"
              >
                <div class="row">
                  <div class="q-pt-sm col-1 q-pl-md" style="width:60px;">
                    <img src="../statics/01a-7.png" style="width:100% ; max-width:50px;" alt />
                  </div>
                  <div class="cl3 label2 q-pl-lg self-center">7. การออกเสียง</div>
                </div>
              </q-btn>
            </div>
            <!-- ปุ่ม 8 -->
            <div class="col-sm-6 col-xs-12 q-py-sm">
              <q-btn
                @click="language()"
                style="width:95%; border-radius: 10px "
                class="bg1"
                align="left"
              >
                <div class="row">
                  <div class="q-pt-sm col-1 q-pl-md" style="width:60px;">
                    <img src="../statics/01a-8.png" style="width:100% ; max-width:50px;" alt />
                  </div>
                  <div class="cl3 label2 q-pl-lg self-center">8. การพูดและฟัง</div>
                </div>
              </q-btn>
            </div>
            <!-- จบ -->
            <div style=" width:100%; height:3px;" class="q-my-md bg-blue"></div>
            <!-- ปุ่ม 9 -->
            <div class="col-sm-6 col-xs-12 q-py-sm">
              <q-btn
                @click="user()"
                style="width:95%; border-radius: 10px; height:70px; "
                class="bg1"
                align="left"
              >
                <div class="row">
                  <div class="q-pt-sm col-1 q-pl-md text-white" style="width:60px;">
                    <q-icon
                      class="cursor-pointer"
                      size="35px"
                      name="fas fa-user-alt"
                      style="position:relative; top:-5px;"
                    />
                  </div>
                  <div class="cl3 label2 q-pl-lg self-center q-pt-sm">ข้อมูลผู้ใช้</div>
                </div>
              </q-btn>
            </div>
            <!-- ปุ่ม 10 -->
            <div class="col-sm-6 col-xs-12 q-py-sm">
              <q-btn
                @click="score()"
                style="width:95%; border-radius: 10px; height:70px; "
                class="bg1"
                align="left"
              >
                <div class="row">
                  <div class="q-pt-sm col-1 q-pl-md text-white" style="width:60px;">
                    <q-icon
                      class="cursor-pointer"
                      size="35px"
                      name="fas fa-star"
                      style="position:relative; top:-5px;"
                    />
                  </div>
                  <div class="cl3 label2 q-pl-lg self-center q-pt-sm">คะแนน</div>
                </div>
              </q-btn>
            </div>

            <!-- ปุ่ม 11 -->
            <div class="col-sm-6 col-xs-12 q-py-sm">
              <q-btn
                @click="file()"
                style="width:95%; border-radius: 10px; height:70px; "
                class="bg1"
                align="left"
              >
                <div class="row">
                  <div class="q-pt-sm col-1 q-pl-md text-white" style="width:60px;">
                    <q-icon
                      class="cursor-pointer"
                      size="35px"
                      name="fas fa-folder"
                      style="position:relative; top:-5px;"
                    />
                  </div>
                  <div class="cl3 label2 q-pl-lg self-center q-pt-sm">แฟ้มข้อมูล</div>
                </div>
              </q-btn>
            </div>

            <!-- ปุ่ม 12 -->
            <div class="col-sm-6 col-xs-12 q-py-sm">
              <q-btn
                @click="game()"
                style="width:95%; border-radius: 10px; height:70px; "
                class="bg1"
                align="left"
              >
                <div class="row">
                  <div class="q-pt-sm col-1 q-pl-md text-white" style="width:60px;">
                    <q-icon
                      class="cursor-pointer"
                      size="35px"
                      name="fas fa-gamepad"
                      style="position:relative; top:-5px;"
                    />
                  </div>
                  <div class="cl3 label2 q-pl-lg self-center q-pt-sm">ระบบเกม</div>
                </div>
              </q-btn>
            </div>

            <!-- ปุ่ม 13 -->
            <div class="col-sm-6 col-xs-12 q-py-sm">
              <q-btn
                @click="customClass()"
                style="width:95%; border-radius: 10px; height:70px; "
                class="bg1"
                align="left"
              >
                <div class="row">
                  <div class="q-pt-sm col-1 q-pl-md text-white" style="width:60px;">
                    <q-icon
                      class="cursor-pointer"
                      size="35px"
                      name="fas fa-bars"
                      style="position:relative; top:-5px;"
                    />
                  </div>
                  <div class="cl3 label2 q-pl-lg self-center q-pt-sm">เลือกเรียนเอง</div>
                </div>
              </q-btn>
            </div>
            <div class="col-sm-6 col-xs-12 q-py-sm"></div>
          </div>
        </div>
        <!-- จบ -->
        <div v-show="innerWidth >= 950">
          <div align="left" class="q-px-md" style="max-width:1280px; width:70%">
            <router-link to="manual">คู่มือการใช้งาน</router-link>&nbsp;> เรียนรู้การใช้งาน
          </div>
          <div class="text-h3 cl1 q-py-xl" align="center">เรียนรู้การใช้งาน</div>

          <!-- เมนู -->
          <div class="row justify-center" style="max-width:1280px; width:90%">
            <!-- เมนูชุดใหญ่ -->
            <div class="col row">
              <!-- ปุ่ม 1 -->
              <div style="width: 25%">
                <q-btn
                  @click="login()"
                  style=" border-radius: 10px; height:180px;max-width:180px; width:95% "
                  class="bg1"
                  align="center"
                >
                  <div class="col-12 q-pt-md">
                    <img src="../statics/01a-1.png" style="width:100% ; max-width:65px;" alt />
                  </div>

                  <div class="cl3 label2 q-pb-lg">การเข้าสู่ระบบ</div>
                </q-btn>
              </div>
              <!-- ปุ่ม 2 -->
              <div style="width: 25%">
                <q-btn
                  @click="voting()"
                  style=" border-radius: 10px; height:180px;max-width:180px; width:95% "
                  class="bg1"
                  align="center"
                >
                  <div class="col-12 q-pt-md">
                    <img src="../statics/01a-2.png" style="width:100% ; max-width:65px;" alt />
                  </div>

                  <div class="cl3 label2 q-pb-lg">การโหวตภารกิจ</div>
                </q-btn>
              </div>
              <!-- ปุ่ม 3 -->
              <div style="width: 25%">
                <q-btn
                  @click="vocab()"
                  style=" border-radius: 10px; height:180px;max-width:180px; width:95% "
                  class="bg1"
                  align="center"
                >
                  <div class="col-12 q-pt-md">
                    <img src="../statics/01a-3.png" style="width:100% ; max-width:65px;" alt />
                  </div>

                  <div class="cl3 label2 q-pb-lg">คำศัพท์</div>
                </q-btn>
              </div>
              <!-- ปุ่ม 4 -->
              <div style="width: 25%">
                <q-btn
                  @click="grammar()"
                  style=" border-radius: 10px; height:180px;max-width:180px; width:95% "
                  class="bg1"
                  align="center"
                >
                  <div class="col-12 q-pt-md">
                    <img src="../statics/01a-4.png" style="width:100% ; max-width:65px;" alt />
                  </div>

                  <div class="cl3 label2 q-pb-lg">ไวยากรณ์</div>
                </q-btn>
              </div>
              <!-- ตัวคั่น ระหว่างแถว -->
              <div style="width:100%; height:25px;"></div>
              <!-- ปุ่ม 5 -->
              <div style="width: 25%">
                <q-btn
                  @click="language()"
                  style=" border-radius: 10px; height:180px;max-width:180px; width:95% "
                  class="bg1"
                  align="center"
                >
                  <div class="col-12 q-pt-md">
                    <img src="../statics/01a-8.png" style="width:100% ; max-width:65px;" alt />
                  </div>

                  <div class="cl3 label2 q-pb-lg">การพูดและฟัง</div>
                </q-btn>
              </div>
              <!-- ปุ่ม 6 -->
              <div style="width: 25%">
                <q-btn
                  @click="phonics()"
                  style=" border-radius: 10px; height:180px;max-width:180px; width:95% "
                  class="bg1"
                  align="center"
                >
                  <div class="col-12 q-pt-md">
                    <img src="../statics/01a-7.png" style="width:100% ; max-width:65px;" alt />
                  </div>

                  <div class="cl3 label2 q-pb-lg">การออกเสียง</div>
                </q-btn>
              </div>
              <!-- ปุ่ม 7 -->
              <div style="width: 25%">
                <q-btn
                  @click="translation()"
                  style=" border-radius: 10px; height:180px;max-width:180px; width:95% "
                  class="bg1"
                  align="center"
                >
                  <div class="col-12 q-pt-md">
                    <img src="../statics/01a-6.png" style="width:100% ; max-width:65px;" alt />
                  </div>

                  <div class="cl3 label2 q-pb-lg">การเขียน</div>
                </q-btn>
              </div>
              <!-- ปุ่ม 8 -->
              <div style="width: 25%">
                <q-btn
                  @click="reading()"
                  style=" border-radius: 10px; height:180px;max-width:180px; width:95% "
                  class="bg1"
                  align="center"
                >
                  <div class="col-12 q-pt-md">
                    <img src="../statics/01a-5.png" style="width:100% ; max-width:65px;" alt />
                  </div>

                  <div class="cl3 label2 q-pb-lg">การอ่าน</div>
                </q-btn>
              </div>
            </div>
            <!-- เมนูชุดเล็ก -->
            <div style="width:250px">
              <!-- ปุ่ม 9 -->
              <div class="q-py-sm">
                <q-btn
                  @click="user()"
                  style="width:95%; border-radius: 10px; height:70px; "
                  class="bg1"
                  align="left"
                >
                  <div class="row">
                    <div class="q-pt-sm col-1 q-pl-md text-white" style="width:60px;">
                      <q-icon
                        class="cursor-pointer"
                        size="35px"
                        name="fas fa-user-alt"
                        style="position:relative; top:-5px;"
                      />
                    </div>
                    <div class="cl3 label2 q-pl-lg self-center q-pt-sm">ข้อมูลผู้ใช้</div>
                  </div>
                </q-btn>
              </div>
              <!-- ปุ่ม 10 -->
              <div class="q-py-sm">
                <q-btn
                  @click="score()"
                  style="width:95%; border-radius: 10px; height:70px; "
                  class="bg1"
                  align="left"
                >
                  <div class="row">
                    <div class="q-pt-sm col-1 q-pl-md text-white" style="width:60px;">
                      <q-icon
                        class="cursor-pointer"
                        size="35px"
                        name="fas fa-star"
                        style="position:relative; top:-5px;"
                      />
                    </div>
                    <div class="cl3 label2 q-pl-lg self-center q-pt-sm">คะแนน</div>
                  </div>
                </q-btn>
              </div>

              <!-- ปุ่ม 11 -->
              <div class="q-py-sm">
                <q-btn
                  @click="file()"
                  style="width:95%; border-radius: 10px; height:70px; "
                  class="bg1"
                  align="left"
                >
                  <div class="row">
                    <div class="q-pt-sm col-1 q-pl-md text-white" style="width:60px;">
                      <q-icon
                        class="cursor-pointer"
                        size="35px"
                        name="fas fa-folder"
                        style="position:relative; top:-5px;"
                      />
                    </div>
                    <div class="cl3 label2 q-pl-lg self-center q-pt-sm">แฟ้มข้อมูล</div>
                  </div>
                </q-btn>
              </div>

              <!-- ปุ่ม 12 -->
              <div class="q-py-sm">
                <q-btn
                  @click="game()"
                  style="width:95%; border-radius: 10px; height:70px; "
                  class="bg1"
                  align="left"
                >
                  <div class="row">
                    <div class="q-pt-sm col-1 q-pl-md text-white" style="width:60px;">
                      <q-icon
                        class="cursor-pointer"
                        size="35px"
                        name="fas fa-gamepad"
                        style="position:relative; top:-5px;"
                      />
                    </div>
                    <div class="cl3 label2 q-pl-lg self-center q-pt-sm">ระบบเกม</div>
                  </div>
                </q-btn>
              </div>

              <!-- ปุ่ม 13 -->
              <div class="q-py-sm">
                <q-btn
                  @click="customClass()"
                  style="width:95%; border-radius: 10px; height:70px; "
                  class="bg1"
                  align="left"
                >
                  <div class="row">
                    <div class="q-pt-sm col-1 q-pl-md text-white" style="width:60px;">
                      <q-icon
                        class="cursor-pointer"
                        size="35px"
                        name="fas fa-bars"
                        style="position:relative; top:-5px;"
                      />
                    </div>
                    <div class="cl3 label2 q-pl-lg self-center q-pt-sm">เลือกเรียนเอง</div>
                  </div>
                </q-btn>
              </div>
            </div>
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
      innerWidth: window.innerWidth,
      innerheigth: window.innerheigth
    };
  },
  methods: {
    onResize(x) {
      return (this.innerWidth = x.width), (this.innerheigth = x.height);
    },
    login() {
      this.$router.push("/login");
    },
    voting() {
      this.$router.push("/voting");
    },
    vocab() {
      this.$router.push("/vocab");
    },
    grammar() {
      this.$router.push("/grammar");
    },
    reading() {
      this.$router.push("/reading");
    },
    translation() {
      this.$router.push("/translation");
    },
    phonics() {
      this.$router.push("/phonics");
    },
    language() {
      this.$router.push("/language");
    },
    user() {
      this.$router.push("/user");
    },
    score() {
      this.$router.push("/score");
    },
    file() {
      this.$router.push("/file");
    },
    game() {
      this.$router.push("/game");
    },
    customClass() {
      this.$router.push("/customclass");
    }
  }
};
</script>

<style scoped>
hr {
  display: block;
  height: 5px;
  border: 0;
  border-top: 1px solid red;
  margin: 1em 0;
  padding: 0;
}
</style>
