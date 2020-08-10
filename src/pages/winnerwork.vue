<template>
  <q-page>
    <!-- //For desktop -->
    <div class="row desktop-only" style="height:calc(100vh - 61px)">
      <div class="col-6 bg-indigo-12" align="center">
        <img src="../statics/bigatworklogo.jpg" width="40%" class="bigLogo" alt />
      </div>
      <div class="col-6">
        <div>
          <div class="row centerDiv" style="width: 300px; margin:auto;">
            <div class="col-12">
              <a
                href="https://hotel.app.winner-english.com"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-btn label="@Hotel App" size="xl" color="indigo-12" style="width:300px;" />
              </a>
            </div>
            <div class="col-12">
              <a
                href="https://hotel.hr.winner-english.com"
                target="_blank"
                style="text-decoration:none;"
              >
                <q-btn
                  label="HR Section"
                  size="xl"
                  color="indigo-12"
                  style="width:300px;"
                  class="q-mt-md"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- For Mobile -->
    <div class="mobile-only bg-indigo-12" style="height:calc(100vh - 61px)">
      <div class="row items-center">
        <div class="col-12 q-pt-xl" align="center">
          <img src="../statics/bigatworklogo.jpg" width="250px" alt />
        </div>
        <div class="col-12" align="center">
          <a
            href="https://hotel.app.winner-english.com"
            target="_blank"
            style="text-decoration:none;"
          >
            <q-btn
              label="@Hotel App"
              size="xl"
              color="white"
              class="q-mt-md text-indigo-12"
              style="width:300px;"
            />
          </a>
        </div>
        <div class="col-12" align="center">
          <a
            href="https://hotel.hr.winner-english.com"
            target="_blank"
            style="text-decoration:none;"
          >
            <q-btn
              label="HR Section"
              size="xl"
              color="white"
              class="q-mt-md text-indigo-12"
              style="width:300px;"
            />
          </a>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
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
.centerDiv {
  position: relative;
  top: calc((100vh - 61px - 200px) / 2);
}
.bigLogo {
  position: relative;
  top: calc((100vh - 61px - 300px) / 2);
}
</style>