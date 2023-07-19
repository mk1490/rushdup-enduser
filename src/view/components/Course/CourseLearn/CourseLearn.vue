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
                                            @click="getVideoUrl(item.id)"
                                            v-for="item in items"
                                            :title="item.title">
                                        <v-list>
                                            <v-list-item

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
            <v-card
                    width="100%"
                    flat="true">

                <v-card-text>
                    <div class="r1_iframe_embed">
                        <iframe src="https://player.arvancloud.ir/index.html?config=https://matink1490.arvanvod.ir/LgZYRMK5NB/oXZyE7WQPe/origin_config.json&skin=shaka"
                                style="border:0 #ffffff none;"
                                name="ForBiggerFun"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen="true">
                        </iframe>
                        <!--                        <iframe-->
                        <!--                                :src="`https://player.arvancloud.ir/index.html?config=${currentVideoConfig}&skin=shaka`"-->
                        <!--                                style="width: 100%;border:0 #ffffff none;"-->
                        <!--                                name="ForBiggerFun"-->
                        <!--                                frameborder="0"-->
                        <!--                                allow="accelerometer; autoplay; encrypted-media; gyroscope"-->
                        <!--                                allowFullScreen="true"-->
                        <!--                                webkitallowfullscreen="true"-->
                        <!--                                mozallowfullscreen="true"></iframe>-->
                    </div>


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
</template>

<script>
export default {
    name: "CourseLearn",
    data() {
        return {
            selectedTab: 0,
            items: [],
            currentVideoConfig: null,
        }
    },
    async created() {
        const courseSlug = this.$route.params.courseSlug;
        const [err, data] = await this.to(this.http.get(`/course/course-learn/${courseSlug}`));
        if (!err) {
            this.items = data.items;
        }
    },
    methods: {
        async getVideoUrl(id) {
            // const [err, data] = await this.to(this.http.get(`/course/course-learn/${courseSlug}`));
            // if (!err) {
            //     this.currentVideoConfig = data.config;
            // }
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