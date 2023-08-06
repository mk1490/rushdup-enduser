<template>
    <section
            class="elementor-section elementor-top-section elementor-element elementor-element-0001 elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch">
        <template v-for="item in homeItems">
            <div
                    v-if="item.type == 0"
                    class="elementor-container elementor-column-gap-extended">
                <div class="elementor-row">
                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8401348">
                        <div class="elementor-column-wrap elementor-element-populated">
                            <div class="elementor-widget-wrap">
                                <div class="elementor-element elementor-element-8cc2b06 edumall-modern-heading-style-01 elementor-widget elementor-widget-tm-heading animated edumallFadeInUp">
                                    <div class="elementor-widget-container">
                                        <div class="tm-modern-heading">
                                            <div class="heading-primary-wrap">
                                                <h3 class="heading-primary elementor-heading-title">پیشنهادات
                                                    <mark> موضوعی</mark>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="elementor-element elementor-element-0001 elementor-widget elementor-widget-tm-course-category-cards animated edumallFadeInUp">
                                    <div class="elementor-widget-container">
                                        <div class="edumall-grid-wrapper edumall-course-category-cards style-02">
                                            <div class="loaded row">
                                                <div
                                                        v-for="gridButtonItem in item.children"
                                                        class="grid-item animate col-sm-12 col-md-3 col-lg-3">
                                                    <a class="edumall-box"
                                                       :href="gridButtonItem.url">
                                                        <div class="category-icon">
                                                            <img
                                                                    height="80"
                                                                    width="80"
                                                                    :src="getImageUrl(gridButtonItem.image)"/>
                                                        </div>
                                                        <div class="category-info">
                                                            <h6 class="category-name">{{ gridButtonItem.title }}</h6>
                                                            <!--                                                            <div class="category-description">-->
                                                            <!--                                                                خلق هنر بکر-->
                                                            <!--                                                            </div>-->
                                                        </div>
                                                    </a>
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
            <div v-if="item.type == 2">

            </div>
        </template>
    </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "SuggestionsByCategory",
    computed: {
        ...mapGetters(['homeItems']),
    },
    created() {
    },
}
</script>

<style scoped>
.elementor-element.elementor-element-0001 > .elementor-container > .elementor-row {
    align-items: stretch;
}

.elementor-element.elementor-element-0001:not(.elementor-motion-effects-element-type-background),
.elementor-element.elementor-element-0001 > .elementor-motion-effects-container > .elementor-motion-effects-layer {
    background-color: #F8F8F8;
}

.elementor-element.elementor-element-0001 {
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    padding: 73px 0px 46px 0px;
}

.elementor-element.elementor-element-0001 > .elementor-background-overlay {
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}

</style>