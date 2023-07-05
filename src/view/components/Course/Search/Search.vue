<template>
    <v-container>
        <v-card :flat="true">
            <v-card-title>
                نتایج جستجو برای {{ $route.query.q }}
            </v-card-title>
            <v-card-text>
                <div class="row">
                    <div
                            v-for="item in tempItems"
                            class="col-md-4">
                        <v-card

                                class="ma-4">
                            <v-card-text class="pa-0">
                                <div
                                        class="grid-item post-item post-619 page type-page status-publish hentry post-no-thumbnail animate">
                                    <div class="post-wrapper edumall-box">

                                        <div class="post-feature post-thumbnail edumall-image">
                                            <a href="https://dana-team.com/products/edumall/courses/%d8%af%d9%88%d8%b1%d9%87-%d8%a2%d9%85%d9%88%d8%b2%d8%b4-%d9%85%d9%84%d8%b2%d9%88%d9%85%d8%a7%d8%aa-adobe-illustrator-cc/">
                                                <img src="https://dana-team.com/products/edumall/wp-content/uploads/2020/11/zoom-meeting-thumbnail-06-1-480x260.jpg"
                                                     alt="zoom-meeting-thumbnail-06" width="480"> </a>
                                        </div>
                                        <div class="post-caption">
                                            <div class="post-meta">
                                                <div class="inner">
                                                    <div class="post-date">
                                                        <span class="meta-icon"><i class="far fa-calendar"></i></span>
                                                        <span class="meta-value">شهریور 6, 1399</span>
                                                    </div>
                                                    <div class="post-view">
                                                        <span class="meta-icon"><i class="far fa-eye"></i></span>
                                                        <span class="meta-value">248 بازدید</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 class="post-title">
                                                <a href="https://dana-team.com/products/edumall/course-hub/">دموی دوره
                                                    آنلاین</a>
                                            </h3>

                                            <div class="post-excerpt">
                                                <p>به یادگیری ادامه دهید ارتباط با مدرسین ما دانش کسب کنید …</p></div>

                                            <div class="tm-button-wrapper post-read-more"><a
                                                    class="tm-button style-flat tm-button-xs button-grey-white icon-right"
                                                    href="https://dana-team.com/products/edumall/course-hub/">
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
            tempItems: [],
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
        for (let i = 0; i < 10; i++) {
            this.tempItems.push({})
        }
        console.log(this.tempItems)

        this.search().then();
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

</style>