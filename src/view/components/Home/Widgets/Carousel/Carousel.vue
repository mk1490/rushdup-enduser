<template>
    <section
            class="elementor-section elementor-top-section elementor-element elementor-element-d68b9fa elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
            data-id="d68b9fa" data-element_type="section">
        <div class="elementor-container elementor-column-gap-extended">
            <div class="elementor-row">
                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-827f611">
                    <div class="elementor-column-wrap elementor-element-populated">
                        <div class="elementor-widget-wrap">
                            <div class="elementor-element elementor-element-91b29e2 edumall-modern-heading-style-01 elementor-widget__width-auto elementor-widget elementor-widget-tm-heading animated edumallFadeInUp">
                                <div class="elementor-widget-container">
                                    <div class="tm-modern-heading">

                                        <div class="heading-primary-wrap">
                                            <h3 class="heading-primary elementor-heading-title">
                                                دوره های ویژه را مشاهده کنید
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="elementor-element elementor-element-599cdb7 edumall-animation-zoom-in course-title-collapse-yes course-tabs-style-01 elementor-widget elementor-widget-tm-course-tabs animated edumallFadeInUp">
                                <div class="elementor-widget-container">
                                    <div class="edumall-tabpanel edumall-tabpanel-horizontal course-tabs-style-01">
                                        <ul class="edumall-nav-tabs">
                                            <li role="tab" class="active">
                                                <a href="javascript:void(0);">
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
                                                            <swiper-slide-course-item>
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

export default {
    name: "Carousel",
    components: {
        SwiperSlideCourseItem,
        Swiper,
        SwiperSlide,
    },
    setup() {
        const items = [];
        for (let i = 0; i < 10; i++) {
            items.push({})
        }

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
            items,
            modules: [Navigation]

        };
    }

}
</script>

<style scoped>

</style>