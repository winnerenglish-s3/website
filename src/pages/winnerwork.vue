<template>
  <q-page>
    <div class="row desktop-only" style="height:calc(100vh - 61px)">
      <div class="col-6 bg-indigo-12"></div>
      <div class="col-6">
        <div>
          <div class="row">
            <div class="col-12">
              <q-btn label="Staff Section" size="xl" color="indigo-12" style="width:300px;" />
            </div>
            <div class="col-12">
              <q-btn
                label="HR Section"
                size="xl"
                color="indigo-12"
                style="width:300px;"
                class="q-mt-md"
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
</style>