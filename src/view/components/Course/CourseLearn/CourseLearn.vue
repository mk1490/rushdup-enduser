<template>
    <div class="tutor-single-lesson-wrap">
        <div class="tutor-lesson-sidebar-wrap">
            <v-card width="420">
                <v-tabs

                        v-model="selectedTab"
                        fixed-tabs
                        bg-color="indigo-darken-2"
                >
                    <v-tab>
                        فهرست دوره
                    </v-tab>
                    <v-tab>
                        مرور پرسش و پاسخ
                    </v-tab>
                </v-tabs>

                <v-window v-model="selectedTab">
                    <v-window-item>
                        <v-card>
                            <v-card-text>
                                <v-expansion-panels>
                                    <v-expansion-panel
                                            v-for="item in items"
                                            :title="item.title">
                                        <v-list>
                                            <v-list-item
                                                    @click="selectedCourseItemId = courseEpisodeItem.id;"
                                                    :to="getVideoUrl(courseEpisodeItem)"
                                                    v-for="courseEpisodeItem in item['courseEpisodeItems']">
                                                <v-list-item-title>
                                                    {{ courseEpisodeItem.title }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-expansion-panel>

                                </v-expansion-panels>
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                </v-window>

            </v-card>
        </div>

        <div class="tutor-lesson-content tutor-single-entry-content tutor-single-entry-content-3261">
            <div class="container">
                <div class="tutor-course-topic-single-header tutor-single-page-top-bar">
                    <div class="tutor-topbar-item tutor-top-bar-course-link">
                        <router-link :to="'/'">
                            <a
                                    class="tutor-topbar-home-btn">
                                <i class="far fa-home"></i>
                                به خانه دوره بروید
                            </a>
                        </router-link>
                    </div>
                    <div class="tutor-topbar-item tutor-topbar-content-title-wrap">
				                <span class="lesson-type-icon">
                            <i class="far fa-file-alt"></i>
                         </span>
                        {{ courseItemTitle }}
                    </div>
                    <div
                            v-if="!courseItemIsCompleted"
                            class="tutor-topbar-mark-to-done">
                        <div class="tutor-topbar-complete-btn tutor-mr-20">
                            <button
                                    @click="courseEpisodeItemApproveCompleted(selectedCourseItemId)"
                                    class="tutor-topbar-mark-btn tutor-btn tutor-btn-primary tutor-ws-nowrap">
                                <span class="tutor-icon-circle-mark-line tutor-mr-8"></span>
                                <span>علامت گذاری به عنوان کامل شده</span>
                            </button>
                        </div>
                    </div>
                </div>
                <v-card
                        width="100%"
                        flat="true">

                    <v-card-text>
                        <!--                    <div class="r1_iframe_embed">-->
                        <!--                        &lt;!&ndash;                        <iframe src="https://player.arvancloud.ir/index.html?config=https://matink1490.arvanvod.ir/LgZYRMK5NB/oXZyE7WQPe/origin_config.json&skin=shaka"&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                                style="border:0 #ffffff none;"&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                                name="ForBiggerFun"&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                                frameborder="0"&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                                allowFullScreen="true">&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                        </iframe>&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                        <iframe&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                                :src="`https://player.arvancloud.ir/index.html?config=${currentVideoConfig}&skin=shaka`"&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                                style="width: 100%;border:0 #ffffff none;"&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                                name="ForBiggerFun"&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                                frameborder="0"&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                                allow="accelerometer; autoplay; encrypted-media; gyroscope"&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                                allowFullScreen="true"&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                                webkitallowfullscreen="true"&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                                mozallowfullscreen="true"></iframe>&ndash;&gt;-->

                        <!--                    </div>-->


                        <videoplayer :options="videoOptions">

                        </videoplayer>
                    </v-card-text>
                    <v-card-actions>
                        <div class="tutor-next-previous-pagination-wrap">
                            <div class="tutor-previous-link-wrap">
                                <a class="tm-button style-flat tm-button-nm button-grey tutor-previous-link tutor-previous-link-3260 icon-left">
                                    <div class="button-content-wrapper">
                                        <span class="button-icon"><i class="far fa-angle-left"></i></span>

                                        <span class="button-text">قبل</span>

                                    </div>
                                </a></div>

                            <div class="tutor-next-link-wrap">
                                <a class="tm-button style-flat tm-button-nm button-grey tutor-next-link tutor-next-link-3268 icon-right">
                                    <div class="button-content-wrapper">


                                        <span class="button-text">بعد</span>

                                        <span class="button-icon"><i class="far fa-angle-right"></i></span>
                                    </div>
                                </a></div>
                        </div>

                    </v-card-actions>


                </v-card>

            </div>
        </div>
    </div>
</template>

<script>
import Videoplayer from "@/view/widget/Videoplayer.vue";

export default {
    name: "CourseLearn",
    components: {Videoplayer},
    data() {
        return {
            selectedTab: 0,
            items: [],
            currentVideoConfig: null,
            courseItemTitle: null,
            selectedCourseItemId: null,
            courseItemIsCompleted: false,
            videoOptions: {
                autoplay: true,
                controls: true,
                sources: [
                    {
                        src:
                            'http://127.0.0.1:1935/Rushdup/mp4:sample.mp4/playlist.m3u8',
                        type: 'application/x-mpegURL'
                    }
                ]
            }
        }
    },
    async created() {
        const courseSlug = this.$route.params.courseSlug;
        const courseItemSlug = this.$route.params.courseItemSlug;
        await this.getCourseItem(courseSlug, courseItemSlug);
    },
    methods: {
        getVideoUrl(item) {
            return '/course-learn/' + this.$route.params.courseSlug + '/' + item.title;
        },
        async getCourseItem(courseSlug, courseItemTitleOrId) {
            const [err, data] = await this.to(this.http.get(`/course/course-learn/${courseSlug}/${courseItemTitleOrId}`));
            if (!err) {
                this.courseItemTitle = data.courseItemTitle;
                this.items = data.items;
                this.courseItemIsCompleted = data.courseItemIsCompleted;
            }
        },
        async courseEpisodeItemApproveCompleted(selectedCourseItemId) {
            const [err, data] = await this.to(this.http.post(`/course/course-approve-completed/${selectedCourseItemId}`));
            if (!err) {
                this.courseItemIsCompleted = true;
            }
        }
    },
    watch: {
        '$route': {
            async handler(val) {
                await this.getCourseItem(val.params.courseSlug, this.selectedCourseItemId)
            }
        }
    }
}
</script>

<style scoped>
::v-deep.tutor-lesson-sidebar-wrap {
    position: relative;
    z-index: 3;
}

::v-deep .tutor-lesson-content .tutor-single-entry-content .tutor-single-entry-content-3261 {
    flex-grow: 999;
}

::v-deep.v-expansion-panel::before {
    box-shadow: none !important;
}

.tutor-next-previous-pagination-wrap {
    width: 100% !important;
}

.r1_iframe_embed {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    padding-top: 56.25%;
}

.r1_iframe_embed iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>