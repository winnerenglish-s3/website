<template>
  <div class="flex flex-center bg-black" style="height: 100vh">
    <q-card>
      <q-card-section>
        <div class="row">
          <div class="col-12">
            <q-input
              style="font-size: 22px"
              v-model="username"
              label="username"
            ></q-input>
          </div>

          <div class="col-12">
            <q-input
              style="font-size: 22px"
              v-model="password"
              label="password"
            ></q-input>
          </div>

          <div class="col-12 q-pt-md" align="center">
            <q-btn
              label="login"
              @click="login()"
              style="width: 150px"
              color="primary"
            ></q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "test",
      password: "1234",
    };
  },
  methods: {
    login() {
      let url =
        "https://us-central1-winnerenglish2-e0f1b.cloudfunctions.net/wfunctions/testConnect";
      let postData = {
        username: this.username,
        password: this.password,
      };
      axios.post(url, postData).then((res) => {
        window.open("http://192.168.0.206:8080/splash/" + res.data);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
