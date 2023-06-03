<template>
    <div class="tutor-single-course-segment tutor-course-topics-wrap">
        <div class="tutor-course-topics-header">
            <div class="tutor-course-topics-header-left">
                <h4 class="tutor-segment-title">برنامه تحصیلی</h4>
            </div>
            <div class="tutor-course-topics-header-right">
                <span class="topics-total-lessons">1 درس</span><span
                    class="topics-total-duration">15 ساعت 15 دقیقه </span>
            </div>
        </div>
        <div class="tutor-course-topics-contents">
            <div
                    :id="`tutor_item_${index}`"
                    v-for="(item, index) in items"
                    class="tutor-course-topic tutor-topics-in-single-lesson">
                <div
                        class="tutor-course-title has-summery">
                    <h4 @click="toggleChildrenItems(index)">
                        <i
                                @click="toggleChildrenItems(index)"
                                class="tutor-icon-plus"></i>
                        {{ item.title }}
                        <span
                                @click="toggleSummery(index)"
                                class="topic-toggle-description toggle-information-icon">
                            <i class="fas fa-info"></i></span>
                    </h4>
                </div>
                <div
                        :id="`summery_${index}`"
                        class="tutor-topics-summery">
                    {{ item.summary }}
                </div>


                <div
                        :id="`lessons_${index}`"
                        class="tutor-course-lessons">


                    <div
                            v-for="episodeItem in item.episodeItems"
                            class="tutor-course-lesson">
                        <h5>
																<span class="lesson-preview-title">
                                    <i class='far fa-file-edit'></i>
                                    {{ episodeItem.title }}
                                </span>
                            <span
                                    v-if="episodeItem.isLocked"
                                    class="lesson-preview-icon">
                                <i class="far fa-lock-alt"></i>
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Topics",
    props: {
        items: Array
    },
    methods: {
        toggleSummery(index) {
            const summeryElement = document.getElementById(`summery_${index}`);
            if (summeryElement.style.display === 'block') {
                summeryElement.style.display = 'none';
            } else {
                summeryElement.style.display = 'block';
            }
        },
        toggleChildrenItems(index) {
            const summeryElement = document.getElementById(`lessons_${index}`);
            const tutorItem = document.getElementById(`tutor_item_${index}`);
            if (summeryElement.style.display === 'block') {
                summeryElement.style.display = 'none';
                tutorItem.classList.remove('tutor-active')
            } else {
                summeryElement.style.display = 'block';
                tutorItem.classList.add('tutor-active');
            }
        }
    }

}
</script>

<style scoped>

</style>