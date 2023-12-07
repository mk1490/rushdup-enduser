<template>
    <div class="elementor-widget-container">
        <div class="tm-modern-heading">

            <div class="heading-primary-wrap">
                <div v-html="title"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TitleView",
    props: {
        title: String
    }
}
</script>

<style scoped>

</style>