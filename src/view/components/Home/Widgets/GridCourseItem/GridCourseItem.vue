<template>

    <div
            style="place-content: center"
            class="d-flex flex-row flex-wrap edumall-courses style-grid-02">
        <template v-for="item in items">
            <div class="col-4">
                <v-card
                        height="340"
                        width="260"
                        :ripple="false"
                        variant="flat"
                        class="ma-2"
                        color="transparent">
                    <a class="d-block fill-height edumall-box">
                        <div class="grid-item type-courses status-publish has-post-thumbnail course-category-design-tools course-category-search-engine-optimization course-category-advertising course-category-public-relations course-tag-design course-tag-graphic course-free animate">
                            <div class="course-loop-wrapper edumall-box edumall-tooltip">
                                <div class="tutor-course-header">
                                    <div class="course-thumbnail edumall-image">
                                        <a
                                                :href="item.slug">
                                            <img
                                                    :src="'http://localhost:9090/edumall/wp-content/uploads/2020/11/course-thumbnail-28-1-480x304.jpg'"
                                                    alt="zoom-meeting-thumbnail-06" width="480"></a></div>
                                    <div class="course-loop-badges">
                                        <!--                                        <div class="tutor-course-badge hot">ویژه</div>-->
                                        <div class="tutor-course-badge free">رایگان</div>
                                    </div>
                                </div>
                                <div class="course-loop-info">
                                    <!--                                        <div class="course-loop-badge-level beginner">-->
                                    <!--                                            <span class="badge-text">مبتدی</span>-->
                                    <!--                                        </div>-->
                                    <h2 class="course-loop-title course-loop-title-collapse-2-rows">
                                        <a :href="item.slug">
                                            {{ item.title }}
                                        </a>
                                    </h2>
                                    <!--                                        <div class="course-loop-instructor">-->
                                    <!--                                            <a class="instructor-name"-->
                                    <!--                                               href="http://localhost:9090/edumall/profile/admin?view=student">مدیرسایت</a>-->
                                    <!--                                        </div>-->
                                    <div class="course-loop-price">
                                        <div
                                                v-if="item.courseIsFree"
                                                class="tutor-price course-free">
                                            رایگان
                                        </div>
                                    </div>
                                    <div class="course-loop-rating">
                                        <div class="tm-star-rating style-01"><span class="tm-star-full"></span><span
                                                class="tm-star-full"></span><span class="tm-star-full"></span><span
                                                class="tm-star-empty"></span><span class="tm-star-empty"></span>
                                        </div>
                                        <span class="rating-count">(2)</span></div>
                                </div>
                                <div id="quick-view-course-203-6511613331f85" class="course-loop-quick-view">
                                    <div class="course-loop-category"><a
                                            href="http://localhost:9090/edumall/course-category/design-tools/?tutor-course-filter-category=98">ابزار
                                        طراحی</a></div>
                                    <h2 class="course-loop-title course-loop-title-collapse-2-rows"><a
                                            href="http://localhost:9090/edumall/courses/%d8%af%d9%88%d8%b1%d9%87-%d8%a2%d9%85%d9%88%d8%b2%d8%b4-%d9%85%d9%84%d8%b2%d9%88%d9%85%d8%a7%d8%aa-adobe-illustrator-cc/">دوره
                                        آموزش ملزومات – Adobe Illustrator CC</a></h2>
                                    <div class="course-loop-rating-average">
                                        <div class="tm-star-rating style-01"><span class="tm-star-full"></span><span
                                                class="tm-star-full"></span><span class="tm-star-full"></span><span
                                                class="tm-star-empty"></span><span class="tm-star-empty"></span>
                                        </div>
                                        <div class="course-rating-average"><span
                                                class="rating-average">3.0</span><span
                                                class="rating-total">/5</span></div>
                                        <span class="rating-count">
			(2 امتیاز)		</span></div>
                                    <div class="course-loop-meta style-01">
                                        <div class="course-loop-meta-list">
                                            <div class="course-loop-meta-item course-loop-meta-duration">
                                                <div class="meta-value">8.5 ساعت</div>
                                            </div>
                                            <div class="course-loop-meta-item course-loop-meta-level">
                                                <div class="meta-value">
                                                    مبتدی
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="course-loop-benefits"><h6 class="course-loop-benefits-heading">آنچه
                                        یاد
                                        خواهید گرفت</h6>
                                        <div class="course-loop-benefits-list">
                                            <div class="course-loop-benefit">با مهارت های آموخته شده در این دوره ،
                                                مهارت
                                                بسیار مطلوبی
                                                خواهید داشت که می تواند به شما در یافتن شغل و کسب درآمد به عنوان
                                                طراح
                                                گرافیک
                                                کمک کند.
                                            </div>
                                            <div class="course-loop-benefit">Adobe Illustrator در زمینه طراحی گرافیک
                                                یک
                                                برنامه استاندارد
                                                در صنعت است ، بنابراین اگر می خواهید یک طراح حرفه ای باشید یادگیری
                                                آن
                                                برای
                                                شما مهم است.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="course-loop-enrolled-button cart-notification"
                                         data-notification="{&quot;image&quot;:&quot;http:\/\/localhost:9090\/edumall\/wp-content\/uploads\/2020\/11\/zoom-meeting-thumbnail-06-1-80x80.jpg&quot;,&quot;title&quot;:&quot;\u062f\u0648\u0631\u0647 \u0622\u0645\u0648\u0632\u0634 \u0645\u0644\u0632\u0648\u0645\u0627\u062a \u2013 Adobe Illustrator CC&quot;}">
                                        <div class="tm-button-wrapper"><a
                                                class="tm-button style-flat tm-button-nm icon-left"
                                                href="http://localhost:9090/edumall/courses/%d8%af%d9%88%d8%b1%d9%87-%d8%a2%d9%85%d9%88%d8%b2%d8%b4-%d9%85%d9%84%d8%b2%d9%88%d9%85%d8%a7%d8%aa-adobe-illustrator-cc/">
                                            <div class="button-content-wrapper"><span class="button-icon"><i
                                                    class="far fa-shopping-cart"></i></span><span
                                                    class="button-text">ثبت نام کنید</span></div>
                                        </a></div>
                                    </div>
                                    <div class="tm-button-wrapper course-loop-wishlist-button"><a
                                            data-course-id="203"
                                            class="tm-button style-text tm-button-nm edumall-course-wishlist-btn open-popup-login icon-left"
                                            href="javascript:void(0);">
                                        <div class="button-content-wrapper"><span class="button-icon"><i
                                                class="far fa-heart"></i></span><span class="button-text">افزودن به علاقه مندی ها</span>
                                        </div>
                                    </a></div>
                                </div>
                            </div>
                        </div>
                    </a>
                </v-card>
            </div>

        </template>
    </div>
</template>

<script>
export default {
    name: "GridCourseItem",
    props: {
        title: String,
        items: Array,
    },
    created() {
    }
}
</script>

<style scoped>

</style>