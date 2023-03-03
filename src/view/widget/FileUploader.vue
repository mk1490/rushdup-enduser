<template>
  <div
      v-on:click="openFilePicker"
      class="bordered-box">
    <input
        ref="filePicker"
        @change="onFileSelected"
        hidden="hidden"
        type="file"/>
    <div class="text-elements">
      <label>
        {{ $t('upload.title') }}
      </label>
      <div>
      <span>
        {{ $t('upload.description') }}
      </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileUploader",
  props: ['width', 'height'],
  emits: ['onFileSelected'],
  methods: {
    openFilePicker() {
      this.$refs.filePicker.click();
    },
    onFileSelected($event) {
      this.$emit('onFileSelected', $event)
    }
  }
}
</script>

<style scoped>

.bordered-box {
  cursor: pointer;
  display: flex;
  border-width: 2px;
  border-radius: 15px;
  border-color: rgba(48, 74, 202, 0.2);;
  border-style: dashed;
  background: rgba(0, 153, 255, 0.05);
  min-height: 90px;
  justify-content: center;
  align-items: center;
}

.text-elements {
  height: 100%;
  display: inline-block;
  justify-content: center;
  text-align: center;
  align-content: center;
  align-items: center;
}

.text-elements label {
  font-size: 18px;
  color: gray(0.7);
}

.text-elements span {
  color: gray(0.7);
  font-family: "IRAN Sans";
  font-size: 16px;
}
</style>