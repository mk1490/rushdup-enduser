<template>
    <v-text-field
            @input="$emit('input', model)"
            outlined
            value="value"
            v-model="model"
            hide-details
            :label="title + ' ' + passwordVisible"
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