<template>
    <div class="tutor-course-tags-wrap">
        <div class="course-tags-title">
            <span class="tutor-segment-title-icon heading-color"><i class="fal fa-tags"></i></span>
            <h4 class="tutor-segment-title">برچسب ها</h4>
        </div>
        <div class="tutor-course-tags">
            <a
                    v-for="item in items"
                    href="#">
                {{ item.title }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Tags",
    props: {
        items: Array,
    }
}
</script>

<style scoped>

</style>