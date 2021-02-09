<template>
  <div class="flex flex-center" style="height: 100vh; background-color: #e7f7ff">
    <q-card
      style="max-width: 500px; width: 70%; margin: auto; border-radius: 40px"
      class="bg-white q-pa-md"
    >
      <q-card-section align="center">
        <q-img
          src="../../public/thanks.png"
          style="max-width: 370px; width: 100%"
        ></q-img>
      </q-card-section>
      <q-card-section>
        <div align="center" class="text-weight-bold">
          ขอบคุณที่ให้ความสนใจลงทะเบียนสอบวัดระดับกับเรา
        </div>
        <div align="center" style="font-size: 26px">
          หลังจากกรอกฟอร์มลงทะเบียนวัดระดับภาษาแล้ว เจ้าหน้าที่จะติดต่อกลับเร็ว ๆ นี้
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          style="
            width: 200px;
            background-color: #3f51b5;
            font-size: 20px;
            border-radius: 25px;
          "
          label="กลับหน้าแรก"
          class="text-white"
          to="/"
        ></q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
