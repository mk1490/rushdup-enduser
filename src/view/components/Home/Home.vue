<template>
    <div
            class="elementor elementor-437 ">
        <div class="elementor-inner">
            <div class="elementor-section-wrap">

                <header_-style2></header_-style2>

                <div class="elementor-container elementor-column-gap-extended container">

                    <template v-for="item in homeItems">
                        <title-view :title="item.title"/>

                        <template v-if="item.type == 0">
                            <div class="d-inline-flex flex-wrap" style="place-content: center">
                                <grid-button-item
                                        v-for="item in item.children"
                                        :title="item.title"
                                        :target="item.target"
                                />
                            </div>
                        </template>

                        <banner
                                v-if="item.type == 1"
                                :items="item.items"/>

                        <swiper-view
                                v-if="item.type == 2"
                                :title="item.title"
                                :items="item.items"
                        >
                        </swiper-view>

                        <image-button
                                v-if="item.type == 3"
                                :items="item.children"
                                :title="item['title']"
                                :description="item['description']">
                        </image-button>

                        <grid-course-item
                                v-if="item.type ==4"
                                :title="item.title"
                                :items="item.items"
                        />


                    </template>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Landing from "@/view/components/Home/Landing.vue";
import {mapGetters} from "vuex";
import SuggestionsByCategory from "@/view/components/Home/Widgets/SuggestionsByCategory/SuggestionsByCategory.vue";
import Carousel from "@/view/components/Home/Widgets/Carousel/SwiperView.vue";
import SwiperView from "@/view/components/Home/Widgets/Carousel/SwiperView.vue";
import IconButton from "@/view/components/Home/Widgets/IconButton/IconButton.vue";
import ImageButton from "@/view/components/Home/Widgets/ImageButton/ImageButton.vue";
import Header_Style1 from "@/view/components/Home/Widgets/Headers/Header_Style1.vue";
import Header_Style2 from "@/view/components/Home/Widgets/Headers/Header_Style2.vue";
import GridButtonItem from "@/view/components/Home/Widgets/GridButton/GridButtonItem.vue";
import GridCourseItem from "@/view/components/Home/Widgets/GridCourseItem/GridCourseItem.vue";
import TitleView from "@/view/components/Home/Widgets/Widgets/TitleView.vue";
import Banner from "@/view/components/Home/Widgets/Banner/Banner.vue";

export default {
    name: "Home",
    components: {
        Banner,
        TitleView,
        GridCourseItem,
        GridButtonItem,
        Header_Style2,
        Header_Style1, ImageButton, IconButton, SwiperView, Carousel, SuggestionsByCategory, Landing,
    },
    async created() {
        const action = this.$route.query.action;
        if (!!action) {
            switch (action) {
                case 'verifyAccount': {
                    const [err, data] = await this.to(this.http.get(`/user/verifyUser?token=${this.$route.query.at}`));
                    this.$router.push('/')
                    if (!err) {
                        this.$swal({
                            icon: 'success',
                            text: 'فعال‌سازی حساب کاربری شما با موفقیت انجام شد!'
                        });

                    }
                    break;
                }
            }
        }
    },
    data() {
        return {
            search: {
                find: null,
            },
            items: {
                search: [],
            },
            model: {
                search: null,
            }
        }
    },
    watch: {
        'search.find': {
            async handler(val) {
                const [err, data] = await this.to(this.http.get(`/core/search-course?q=${val}`, {
                    loader: false
                }));
                if (!err) {
                    this.items.search = data;
                }
            }
        }
    },
    methods: {
        async applySearch() {
            await this.$router.push(`/search?q=${this.model.search}`)
        },
        getCssLevelForWare(level) {
            let alpha = 0;
            switch (level) {
                case 1:
                    alpha = 0.7;
                    break;
                case 2:
                    alpha = 0.5;
                    break;
                case 3:
                    alpha = 0.3;
                    break;
                case 4:
                    alpha = 0.1;
                    break;
            }
            return `rgba(20, 136, 204, ${alpha})`
        }
    },
    computed: {
        ...mapGetters(['homeItems'])
    }
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);
@import url('@/assets/styles/waves.css');
@import url('./home.css');


.page-content {
    margin-top: 0px !important;
}


.main__title {
    font-family: IranYekanRegular;
    font-size: 2.5rem;
    font-weight: bolder;
    color: #fff;
}

.elementor-container {
    padding-top: 65px;
}
</style>