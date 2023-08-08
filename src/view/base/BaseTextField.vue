<template>
    <v-text-field
            :value="modelValue"
            @update:modelValue="$emit('update:modelValue', $event)"
            :label="label"
            hide-details
            dense>
    </v-text-field>
</template>

<script>
export default {
    name: "BaseTextField",
    created() {
    },
    props: {
        modelValue: String,
        label: String,
    },
    data() {
        return {
            model: null,
        }
    }
}
</script>

<style scoped>

</style>