<template>
    <div class="tutor-single-course-segment tutor-course-benefits-wrap">
        <h4 class="tutor-segment-title">اهداف یادگیری</h4>
        <div class="tutor-course-benefits-content">
            <div class="tutor-course-benefits-items">
                <div
                    v-for="item in items"
                    class="tutor-course-benefit-item">
                    <div class="benefit-content">
                        <span class="benefit-icon"></span>
                        <span class="benefit-text">{{ item }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Benefits",
    props:{
        items: Array,
    }
}
</script>

<style scoped>

</style>