<template>
    <div class="row">
        <div class="v-col-12">
            <div class="d-flex justify-center">
                <div class="tm-modern-heading">

                    <div class="heading-primary-wrap">
                        <h3 class="heading-primary elementor-heading-title">
                            {{ title }}
                        </h3>
                    </div>


                    <div class="heading-description-wrap">
                        <div class="heading-description">
                            <p>{{ description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="row">
        <div class="v-col-12">
            <swiper
                    :slides-per-view="5"
                    :space-between="50"
                    :modules="modules">
                <swiper-slide v-for="item in items">
                    <image-button-item :title="item.title">
                    </image-button-item>
                </swiper-slide>
            </swiper>
        </div>
    </div>

</template>

<script>
import ImageButtonItem from "@/view/components/Home/Widgets/ImageButton/ImageButtonItem.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper/modules";

export default {
    name: "ImageButton",
    components: {SwiperSlide, Swiper, ImageButtonItem},
    props: {
        title: String,
        description: String,
        items: Array,
    },
    data() {
        return {
            modules: [Navigation]
        }
    }
}
</script>

<style scoped>

</style>