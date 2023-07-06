<template>
    <v-text-field
            @input="$emit('input', model)"
            outlined
            v-model="model"
            hide-details
            :label="title + ' ' + passwordVisible"
            :type="passwordVisible? 'text':'password'"
            dir="ltr"
            :append-inner-icon="passwordVisible? 'mdi-eye': 'mdi-eye-off'"
            @click:append-inner="passwordVisible = !passwordVisible"
    >

    </v-text-field>
</template>

<script>
export default {
    name: "PasswordTextField",
    props: {
        title: String,
        value: String,
    },
    data() {
        return {
            model: null,
            passwordVisible: false,
        }
    }
}
</script>

<style scoped>

</style>