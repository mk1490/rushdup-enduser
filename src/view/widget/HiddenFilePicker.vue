<template>
    <form ref="form">
        <input
                ref="filePicker"
                hidden="hidden"
                @change="onFileSelected"
                type="file"/>
    </form>
</template>

<script>
export default {
    name: "HiddenFilePicker",
    emits: ['onFileSelected'],
    methods: {
        onFileSelected(event) {
            this.$emit('onFileSelected', event.target.files[0])
            this.$refs.form.reset();
        },
        openFilePicker() {
            this.$refs.filePicker.click();
        }
    }
}
</script>

<style scoped>

</style>