<template>
  <q-page>
    <div align="center">
      <q-resize-observer @resize="onResize" />
      <q-card v-if="innerWidth > 1023" style=";max-width: 1920px">
        <div class="bgadmin relative-position">
          <div class="row absolute-center q-pb-lg" style="width:500px ">
            <div class="col-6 q-py-md cursor-pointer hvr-grow">
              <a href="https://www.edutechinn.com/" target="_blank" style="text-decoration:none;">
                <q-img src="../statics/gateway/winneronet-02.png" style="max-width:200px;" />
              </a>
            </div>
            <div class="col-6 q-py-md cursor-pointer hvr-grow">
              <a
                href="https://winneradventure-ed4a1.web.app/"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-img src="../statics/gateway/winneronet-03.png" style="max-width:200px;" />
              </a>
            </div>

            <div class="col-6 q-py-md cursor-pointer hvr-grow">
              <a
                href="https://onetp6-backend.web.app/"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-img src="../statics/gateway/winneronet-04.png" style="max-width:200px;" />
              </a>
            </div>
            <div class="col-6 q-py-md cursor-pointer hvr-grow">
              <a
                href="https://dataentry.athotel.winner-english.com"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-img src="../statics/gateway/winneronet-05.png" style="max-width:200px;" />
              </a>
            </div>
          </div>
        </div>
      </q-card>
      <div align="center" v-if="innerWidth < 1024" class="bgadminMB">
        <div class="row q-pt-xl q-pa-md" style="max-width:500px">
          <div class="col-6 q-py-md cursor-pointer hvr-grow">
            <a href="https://www.edutechinn.com/" target="_blank" style="text-decoration:none;">
              <q-img src="../statics/gateway/winneronet-02.png" style="max-width:200px;" />
            </a>
          </div>
          <div class="col-6 q-py-md cursor-pointer hvr-grow">
            <a
              href="https://winneradventure-ed4a1.web.app/"
              target="_blank"
              style="text-decoration:none;"
            >
              <q-img src="../statics/gateway/winneronet-03.png" style="max-width:200px;" />
            </a>
          </div>

          <div class="col-6 q-py-md cursor-pointer hvr-grow">
            <a href="https://onetp6-backend.web.app/" target="_blank" style="text-decoration:none;">
              <q-img src="../statics/gateway/winneronet-04.png" style="max-width:200px;" />
            </a>
          </div>
          <div class="col-6 q-py-md cursor-pointer hvr-grow">
            <a
              href="https://dataentry.athotel.winner-english.com"
              target="_blank"
              style="text-decoration:none;"
            >
              <q-img src="../statics/gateway/winneronet-05.png" style="max-width:200px;" />
            </a>
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
      innerHeight: null,
    };
  },
  methods: {
    onResize(size) {
      (this.innerWidth = size.width), (this.innerHeight = size.height);
    },
  },
};
</script>

<style  scoped>
.boxpc {
  border-radius: 20px;
  min-height: 347px;
}
.boxmb {
  border-radius: 20px;
  width: 100%;
  max-width: 385px;
}
.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 5 5 2px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  transform: scale(1.1);
}
</style>