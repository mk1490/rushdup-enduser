<template>
    <div class="course-loop-wrapper edumall-box edumall-tooltip"
         data-tooltip="quick-view-course-203-646d2e0f25610">
        <div class="tutor-course-header">
            <div class="course-thumbnail edumall-image">
                <router-link :to="'/cd/'+item['slug']">
                    <a>
                        <img
                                src="https://dana-team.com/products/edumall/wp-content/uploads/2020/11/zoom-meeting-thumbnail-06-1-480x304.jpg"
                                alt="zoom-meeting-thumbnail-06"
                                width="480"></a>
                </router-link>
            </div>

            <div class="course-loop-badges">
                <div class="tutor-course-badge hot">
                    ویژه
                </div>
                <div class="tutor-course-badge free">
                    رایگان
                </div>
            </div>
        </div>
        <div class="course-loop-info">
            <div class="course-loop-badge-level beginner">
                <span class="badge-text">مبتدی</span>
            </div>
            <h2 class="course-loop-title course-loop-title-collapse-2-rows">

                <router-link :to="'/cd/'+item['slug']">
                    <a>
                        {{ item.title }}
                    </a>
                </router-link>
            </h2>
            <div
                    v-if="!!item['teacher']"
                    class="course-loop-instructor">
                <router-link :to="'/cl/'+item['teacher']['slug']">
                    <a
                            class="instructor-name">
                        {{ item['teacher']['fullName'] }}
                    </a>
                </router-link>
            </div>
            <div class="course-loop-price">
                <div class="tutor-price course-free">
                    {{ convertToIRR(!!item.financial ? item.financial.price : null) }}
                </div>
            </div>
            <div class="course-loop-rating">
                <div class="tm-star-rating style-01">
                    <span class="tm-star-full"></span>
                    <span class="tm-star-full"></span>
                    <span class="tm-star-full"></span>
                    <span class="tm-star-full"></span>
                    <span class="tm-star-empty"></span>
                </div>
                <span class="rating-count">(4)</span>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "SwiperSlideCourseItem",
    props: {
        item: Object,
    }
}
</script>

<style scoped>

</style>