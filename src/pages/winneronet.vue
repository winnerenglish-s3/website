<template>
  <q-page>
    <div align="center">
      <q-resize-observer @resize="onResize" />
      <q-card v-if="innerWidth > 1023" style=";max-width: 1920px">
        <div class="loginonet">
          <div>
            <div style="height:200px"></div>
            <div class="relative-position">
              <div class="absolute-bottom row justify-center q-pb-md">
                <q-img src="../statics/image/loginonet/name-onet.png" style="max-width:700px;" />
              </div>
            </div>
            <div align="center">
              <div class="row q-py-md" style="width:100%;max-width:1000px">
                <div class="col-12 q-pt-xl">
                  <a
                    href="https://onetp6.winner-english.com/"
                    target="_blank"
                    style="text-decoration:none;"
                  >
                    <q-btn
                      push
                      class="q-my-sm btn bgbrown text-white"
                      size="22px"
                      label="WINNER O-NET ป.6"
                    />
                  </a>
                </div>
                <div class="col-12">
                  <a
                    href="https://o-net-review.web.app/"
                    target="_blank"
                    style="text-decoration:none;"
                  >
                    <q-btn
                      push
                      class="q-my-sm btn bgbrown text-white"
                      size="22px"
                      label="ทบทวน O-NET"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card>
      <div align="center" v-if="innerWidth < 1024" class="loginonet">
        <div class="row justify-center q-pt-xl">
          <q-img src="../statics/image/loginonet/name-onet.png" style="max-width:700px;" />
        </div>
        <div class="row q-pa-md">
          <div class="col-12 q-pt-md">
            <div>
              <a
                href="https://onetp6.winner-english.com/"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-btn push class="q-my-sm btnmb bgbrown text-white" label="WINNER O-NET ป.6" />
              </a>
            </div>
          </div>
          <div class="col-12">
            <div>
              <a href="https://o-net-review.web.app/" target="_blank" style="text-decoration:none;">
                <q-btn push class="q-my-sm btnmb bgbrown text-white" label="ทบทวน O-NET" />
              </a>
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
</style>