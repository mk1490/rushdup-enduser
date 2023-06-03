<template>
    <div class="tutor-single-course-segment tutor-course-instructors-wrap"
         id="single-course-ratings">
        <h4 class="tutor-segment-title">اساتید دوره</h4>
        <div class="single-instructor-wrap">
            <div class="instructor-avatar">
                <a href="#">
                    <img
                            alt=""
                            class="avatar avatar-240 photo" height="240" width="240"
                            loading="lazy" decoding="async"/> </a>
            </div>
            <div class="tutor-instructor-info">
                <h3 class="instructor-name">
                    {{ teacherTitle }} </h3>


                <!--                <div class="instructor-ratings">-->
                <!--                    <div class="tm-star-rating style-01 rating-generated"><span-->
                <!--                            class="tm-star-full"></span><span-->
                <!--                            class="tm-star-full"></span><span-->
                <!--                            class="tm-star-full"></span><span-->
                <!--                            class="tm-star-full"></span><span-->
                <!--                            class="tm-star-half"></span></div>-->
                <!--                    <div class="instructor-rating-average">-->
                <!--                        <span class="heading-color">-->
                <!--                            4.38-->
                <!--                        </span>-->
                <!--                        /5-->
                <!--                    </div>-->
                <!--                </div>-->

                <div class="instructor-meta">
                    <div class="instructor-meta-item instructor-courses">
															<span class="meta-icon">
                                  <i class="far fa-play-circle"></i>
                              </span>
                        <span class="meta-value">{{ teacherTeachingCount + ' ' + 'دوره' }}</span>
                    </div>

                    <div class="instructor-meta-item instructor-total-reviews">
															<span class="meta-icon"><i
                                      class="far fa-comment-alt"></i></span>
                        <span class="meta-value">{{ teacherCommentsCount + ' ' + 'دیدگاه' }}</span>
                    </div>

                    <div class="instructor-meta-item instructor-students">
                        <span class="meta-icon"><i class="far fa-user"></i></span>
                        <span class="meta-value">{{ teacherStudentsCount + ' ' + 'دانشجو' }}</span>
                    </div>
                </div>

                <div class="instructor-bio">
                </div>

                <a href="#"
                   class="instructor-profile-url primary-color">
                    <span class="far fa-plus"></span>
                    مشاهده بیشتر </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Teachers",
    props: {
        teacherTeachingCount: {
            type: Number,
            default: 0,
        },
        teacherCommentsCount: {
            type: Number,
            default: 0,
        },
        teacherStudentsCount: {
            type: Number,
            default: 0,
        },
        teacherTitle: {
            type: String,
            default: 'بدون عنوان',
        },
        teacherAvatar: {
            type: String,
            default: null,
        },
    }
}
</script>

<style scoped>

</style>