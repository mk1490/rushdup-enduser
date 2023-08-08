<template>
    <v-container>
        <v-card :flat="true">
            <v-card-title>
                نتایج جستجو برای {{ $route.query.q }}
            </v-card-title>
            <v-card-text>
                <div class="row">
                    <div
                            v-for="item in items"
                            class="col-md-4">
                        <v-card
                                :ripple="false"
                                :to="`/cd/${item.slug}`"
                                class="ma-4">
                            <v-card-text class="pa-0">
                                <div
                                        class="grid-item post-item post-203 courses type-courses status-publish has-post-thumbnail hentry course-language-persian course-category-design-tools course-category-search-engine-optimization course-category-advertising course-category-public-relations course-tag-design course-tag-graphic animate">
                                    <div class="post-wrapper edumall-box">
                                        <div
                                                v-if="!!item.cover"
                                                class="post-feature post-thumbnail edumall-image">
                                            <a>
                                                <img
                                                        :src="getImageUrl(item.cover)"
                                                        :alt="item.title"
                                                        width="480"/>
                                            </a>
                                        </div>
                                        <div class="post-caption">
                                            <div class="post-meta">
                                                <div class="inner">
                                                    <!--                                                    <div class="post-date">-->
                                                    <!--                                                        <span class="meta-icon"><i class="far fa-calendar"></i></span>-->
                                                    <!--                                                        <span class="meta-value">شهریور 6, 1399</span>-->
                                                    <!--                                                    </div>-->
                                                    <div class="post-view">
                                                        <span class="meta-icon"><i class="far fa-eye"></i></span>
                                                        <span class="meta-value">{{ item.viewsCount }} بازدید</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 class="post-title">
                                                <a>{{ item.title }}</a>
                                            </h3>

                                            <div class="post-excerpt">
                                                <p>{{ item.summary }}</p>
                                            </div>

                                            <div class="tm-button-wrapper post-read-more"><a
                                                    class="tm-button style-flat tm-button-xs button-grey-white icon-right">
                                                <div class="button-content-wrapper">
                                                    <span class="button-text">ادامه مطلب</span>

                                                    <span class="button-icon"><i
                                                            class="fal fa-long-arrow-right"></i></span>
                                                </div>
                                            </a></div>
                                        </div>
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </div>
                </div>

            </v-card-text>
            <v-card-actions>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "Search",

    data() {
        return {
            items: [],
        }
    },
    methods: {
        async search() {
            const [err, data] = await this.to(this.http.get(`/core/search-course?q=${this.$route.query.q}`));
            if (!err) {
                this.items = data;
            }
        }
    },
    async created() {
        await this.search();
    },
    watch: {
        '$route.query.q': {
            async handler() {
                await this.search();
            }
        }
    }
}
</script>

<style scoped>
.post-title {
    font-size: 16px !important;
}

.post-caption {
    padding: 15px 30px 30px !important;
}

.post-view {
    color: #7e7e7e !important;
}
</style>