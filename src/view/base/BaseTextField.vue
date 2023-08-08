<template>
    <v-text-field
            :value="value"
            @update="$emit('update:value', $event)"
            :label="label"
            hide-details
            dense>
    </v-text-field>
</template>

<script>
export default {
    name: "BaseTextField",
    props: {
        value: String,
        label: String,
    }
}
</script>

<style scoped>

</style>