<template>
    <section
            class="elementor-section elementor-top-section elementor-element elementor-element-d68b9fa elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
            data-id="d68b9fa" data-element_type="section">
        <div class="elementor-container elementor-column-gap-extended">
            <div class="elementor-row">
                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-827f611">
                    <div class="elementor-column-wrap elementor-element-populated">
                        <div class="elementor-widget-wrap">
                            <elementor-title>
                                {{ title}}
                            </elementor-title>


                            <div class="elementor-element elementor-element-599cdb7 edumall-animation-zoom-in course-title-collapse-yes course-tabs-style-01 elementor-widget elementor-widget-tm-course-tabs animated edumallFadeInUp">
                                <div class="elementor-widget-container">
                                    <div class="edumall-tabpanel edumall-tabpanel-horizontal course-tabs-style-01">
                                        <ul class="edumall-nav-tabs">
                                            <li role="tab" class="active">
                                                <a>
                                                    <span class="nav-tab-title">همه</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="edumall-tab-content">
                                            <div class="tab-panel ajax-loaded active"
                                                 data-query="{&quot;source&quot;:&quot;latest&quot;,&quot;number&quot;:10,&quot;layout&quot;:&quot;carousel&quot;}"
                                                 data-layout="carousel">
                                                <div class="tab-mobile-heading">
                                                    همه
                                                </div>
                                                <div class="tab-content">
                                                    <swiper
                                                            :slides-per-view="5"
                                                            :space-between="50"
                                                            navigation
                                                            :modules="modules"
                                                            @swiper="onSwiper"
                                                            @slideChange="onSlideChange"
                                                            @navigationNext="nextNavigation"
                                                            @navigation-prev="nextNavigation"
                                                    >
                                                        <swiper-slide v-for="item in items">
                                                            <swiper-slide-course-item :item="item">
                                                            </swiper-slide-course-item>
                                                        </swiper-slide>
                                                    </swiper>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import {Swiper, SwiperSlide,} from "swiper/vue";

import SwiperSlideCourseItem from "@/view/components/Home/Widgets/Carousel/SwiperSlideCourseItem.vue";
import {Navigation} from "swiper/modules";
import ElementorTitle from "@/view/components/Home/Widgets/ElementorTitle.vue";

export default {
    name: "SwiperView",
    components: {
        ElementorTitle,
        SwiperSlideCourseItem,
        Swiper,
        SwiperSlide,
    },
    props: {
        title: String,
        items: Array,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        const nextNavigation = () => {
            console.log("nextNavigation")
        }
        return {
            onSwiper,
            onSlideChange,
            nextNavigation,
            modules: [Navigation]

        };
    }

}
</script>

<style scoped>

</style>