<template>
    <div class="tutor-single-course-segment tutor-course-requirements-wrap">
        <div class="course-requirements-title">
            <h4 class="tutor-segment-title">پیشنیازها</h4>
        </div>

        <div class="tutor-course-requirements-content">
            <ul class="tutor-course-requirements-items tutor-custom-list-style">
                <li v-for="item in items">{{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Requirements",
    props: {
        items: Array,
    }
}
</script>

<style scoped>

</style>