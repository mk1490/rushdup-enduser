<template>
    <div
        v-if="file">
        <v-card
                min-width="200">
            <v-card-text>
                <div
                        class="v-row">

                    <div class="v-col align-self-center pr-3">
                        <div class="d-inline-flex">
                            <strong>نام فایل:</strong>
                            <div
                                dir="ltr"
                                class="mx-2">
                                {{ !!file ? file.name : '' }}
                            </div>
                        </div>
                    </div>
                    <div class="v-col-auto">
                        <v-btn
                                variant="plain"
                                @click="deleteFile"
                                icon>
                            <v-icon color="red">
                                mdi-close
                            </v-icon>
                        </v-btn>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "AttachmentForUpload",
    emits: ['onDeleteFile'],
    props: {
        file: undefined,
    },
    methods: {
        deleteFile() {
            this.$emit('onDeleteFile')
        }
    }
}
</script>

<style scoped>

</style>