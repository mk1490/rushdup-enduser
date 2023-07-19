<template>
    <div
            class="elementor elementor-437">
        <div class="elementor-inner">
            <div class="elementor-section-wrap">


                <header_-style1></header_-style1>

                <header_-style2></header_-style2>

                <div class="elementor-container elementor-column-gap-extended">
                    <template v-for="item in homeItems">
                        <icon-button
                                :title="item.title"
                                :items="item.children"
                                v-if="item.type === 0">

                        </icon-button>
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

export default {
    name: "Home",
    components: {
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
</style>