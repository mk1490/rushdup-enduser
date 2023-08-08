<template>
    <v-select
            :value="value"
            @update:modelValue="$emit('input', $event)"
            :label="label"
            :items="items">
    </v-select>
</template>

<script>
export default {
    name: "BaseSelect",
    props: {
        value: String,
        label: String,
        items: Array,
    }
}
</script>

<style scoped>

</style>