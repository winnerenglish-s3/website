<template>
  <q-page>
    <div align="center">
      <q-resize-observer @resize="onResize" />
      <q-card v-if="innerWidth > 1023" style=";max-width: 1920px">
        <div class="logindiscovery">
          <div>
            <div style="height:220px"></div>
            <div class="relative-position q-pt-lg">
              <div class="absolute-bottom row justify-center q-pb-lg">
                <q-img
                  src="../statics/image/logindiscovery/name-discovery.png"
                  style="max-width:900px;"
                />
              </div>
            </div>
            <div align="center">
              <div class="row q-py-md" style="width:100%;max-width:650px">
                <div class="col-6">
                  <div>
                    <a
                      href="https://mainapp.winner-english.com/"
                      target="_blank"
                      style="text-decoration:none;"
                    >
                      <q-btn
                        push
                        class="q-my-sm btn bgblue2 text-white row"
                        style="width:300px"
                        size="80px"
                      >
                        <div>
                          <q-img
                            class="q-my-md"
                            style="width:150px "
                            src="../statics/image/logindiscovery/discovery-btn.png"
                          />
                          <div class="text-h3">บทเรียน</div>
                        </div>
                      </q-btn>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://placement.winner-english.com/"
                      target="_blank"
                      style="text-decoration:none;"
                    >
                      <q-btn
                        push
                        class="q-my-sm btn bgblue2 text-white"
                        size="55px"
                        style="width:300px"
                      >
                        <div class="text-h3">สอบวัดระดับ</div>
                      </q-btn>
                    </a>
                  </div>
                </div>
                <div class="col-6">
                  <div>
                    <a
                      href="https://exam.winner-english.com/"
                      target="_blank"
                      style="text-decoration:none;"
                    >
                      <q-btn
                        push
                        class="q-my-sm btn bgblue2 text-white"
                        size="25px"
                        style="width:300px"
                        label="PRE-TEST / POST-TEST"
                      />
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://questionnaire.winner-english.com/"
                      target="_blank"
                      style="text-decoration:none;"
                    >
                      <q-btn
                        push
                        class="q-my-sm btn bgblue2 text-white"
                        size="25px"
                        style="width:300px"
                        label="ประเมินความพึงพอใจ"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://app.review.winner-english.com/"
                      target="_blank"
                      style="text-decoration:none;"
                    >
                      <q-btn
                        push
                        class="q-my-sm btn bgblue2 text-white"
                        size="25px"
                        style="width:300px"
                        label="ทบทวนสาระสำคัญ"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://review-winner.web.app/"
                      target="_blank"
                      style="text-decoration:none;"
                    >
                      <q-btn
                        push
                        class="q-my-sm btn bgblue2 text-white"
                        size="25px"
                        style="width:300px"
                        label="ทบทวนบทเรียน"
                      />
                    </a>
                  </div>
                  <div class="col-12 q-mb-md">
                    <a
                      href="https://tas.winner-english.com/"
                      target="_blank"
                      style="text-decoration:none;"
                    >
                      <q-btn
                        push
                        class="q-my-sm btn bgblue2 text-white"
                        size="25px"
                        style="width:300px"
                        label="ระบบผู้ช่วยครู"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card>
      <div align="center" v-if="innerWidth < 1024" class="logindiscovery">
        <div class="row justify-center q-pt-xl">
          <q-img src="../statics/image/logindiscovery/name-discovery.png" style="max-width:700px;" />
        </div>
        <div class="row q-pa-md">
          <div class="col-12">
            <div>
              <a
                v-if="!btnMB"
                href="https://mainapp.winner-english.com/"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-btn class="q-my-sm btnmb text-white bgblue2" push label="บทเรียน" />
              </a>
              <q-btn
                v-if="btnMB"
                :class="{'bg-grey':btnMB ==  false,'bgblue2':btnMB != false,}"
                push
                class="q-my-sm btnmb text-white"
                label="บทเรียน"
              />
            </div>
          </div>
          <div class="col-12">
            <div>
              <a
                v-if="!btnMB"
                aria-disabled
                href="https://placement.winner-english.com/"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-btn push class="q-my-sm btnmb text-white bgblue2" label="สอบวัดระดับ" />
              </a>
              <q-btn
                v-if="btnMB"
                push
                :class="{'bg-grey':btnMB ==  false,'bgblue2':btnMB != false,}"
                class="q-my-sm btnmb text-white"
                label="สอบวัดระดับ"
              />
            </div>
          </div>
          <div class="col-12">
            <div>
              <a
                v-if="!btnMB"
                :class="{'bg-grey':btnMB ==  false,'bgblue2':btnMB != false,}"
                href="https://review-winner.web.app/"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-btn push class="q-my-sm btnmb bgblue2 text-white" label="ทบทวนบทเรียน" />
              </a>
              <q-btn
                v-if="btnMB"
                :class="{'bg-grey':btnMB ==  false,'bgblue2':btnMB != false,}"
                push
                class="q-my-sm btnmb text-white"
                label="ทบทวนบทเรียน"
              />
            </div>
          </div>
          <div class="col-12">
            <div>
              <a
                v-if="!btnMB"
                href="https://tas.winner-english.com/"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-btn push class="q-my-sm btnmb bgblue2 text-white" label="ระบบผู้ช่วยครู" />
              </a>
              <q-btn
                v-if="btnMB"
                :class="{'bg-grey':btnMB ==  false,'bgblue2':btnMB != false,}"
                push
                class="q-my-sm btnmb text-white"
                label="ระบบผู้ช่วยครู"
              />
            </div>
          </div>

          <div class="col-12">
            <div>
              <a
                href="https://exam.winner-english.com/"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-btn push class="q-my-sm btnmb bgblue2 text-white" label="PRE-TEST / POST-TEST" />
              </a>
              <!-- <q-btn push class="q-my-sm btnmb text-white" label="PRE-TEST / POST-TEST" /> -->
            </div>
          </div>
          <div class="col-12">
            <div>
              <a
                v-if="btnMB"
                href="https://questionnaire.winner-english.com/"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-btn push class="q-my-sm btnmb bgblue2 text-white" label="ประเมินความพึงพอใจ" />
              </a>
              <q-btn
                v-if="!btnMB"
                push
                :class="{'bg-grey':btnMB ==  false,'bgblue2':btnMB != false,}"
                class="q-my-sm btnmb text-white"
                label="ประเมินความพึงพอใจ"
              />
            </div>
          </div>
          <div class="col-12">
            <div>
              <a
                v-if="btnMB"
                href="https://app.review.winner-english.com/"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-btn push class="q-my-sm btnmb bgblue2 text-white" label="ทบทวนสาระสำคัญ" />
              </a>
              <q-btn
                v-if="!btnMB"
                push
                :class="{'bg-grey':btnMB ==  false,'bgblue2':btnMB != false,}"
                class="q-my-sm btnmb text-white"
                label="ทบทวนสาระสำคัญ"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      btnMB: false,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  },
  methods: {
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    }
  }
};
</script>

<style  scoped>
.btn {
  border-radius: 10px;
  width: 450px;
}
.btnmb {
  font-size: calc(25px + 0.2vw);
  border-radius: 10px;
  max-width: 450px;
  width: 100%;
}
.boxpc {
  border-radius: 20px;
  min-height: 347px;
}
.boxmb {
  border-radius: 20px;
  width: 100%;
  max-width: 385px;
}
.animated {
  animation-duration: 0.59s;
}
</style>