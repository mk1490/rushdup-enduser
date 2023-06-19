<template>
    <div class="tutor-single-course-segment tutor-course-content-wrap">
        <h4 class="tutor-segment-title">درباره این دوره</h4>

        <div class="tutor-course-content-content">
            <div v-html="content"></div>
            <tags :items="tags"></tags>
        </div>
    </div>
</template>

<script>
import Tags from "@/view/components/Course/Course_Details/Widget/Tags.vue";

export default {
    name: "Content",
    components: {Tags},
    props: {
        content: String,
        tags: Array,
    }
}
</script>

<style scoped>

</style>