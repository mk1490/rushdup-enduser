<template>
    <section
            class="elementor-section elementor-top-section elementor-element elementor-element-268e99d elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch">

        <div class="row">
            <div
                    v-for="item in items"
                    class="v-col">
                <v-card
                        min-height="230"
                        width="100%"
                        class="element-style elementor-top-column animated edumallFadeInUp">

                    <v-card-text>
                        <div class="elementor-widget-container">

                            <div class="d-flex">
                                <div class="flex-row" style="flex: 1">
                                    <div class="heading-primary-wrap">
                                        <h3 class="heading-primary elementor-heading-title">
                                            {{ item.title }}
                                        </h3>
                                    </div>
                                    <div class="heading-description-wrap">
                                        <div class="heading-description">
                                            <p>{{ item.content }}</p>
                                        </div>
                                    </div>
                                    <div class="tm-button-wrapper">
                                        <a href="#" class="tm-button-link tm-button style-flat tm-button-xs"
                                           role="button">
                                            <div class="button-content-wrapper">
                                                <span class="button-text">تدریس را شروع کنید</span>

                                            </div>

                                        </a>
                                    </div>
                                </div>
                                <div class="flex-row-reverse">
                                    <div class="elementor-image">
                                        <img width="350"
                                             src="http://localhost:9090/edumall/wp-content/uploads/2020/08/banner-image-group-teachers-1.png"
                                             class="attachment-full size-full" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-card-text>

                    <!--                    <div class="elementor-column-wrap elementor-element-populated">-->
                    <!--                        <div class="elementor-widget-wrap">-->
                    <!--                            <section-->
                    <!--                                    class="elementor-section elementor-inner-section elementor-element elementor-section-content-bottom elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch">-->
                    <!--                                <div class="elementor-container elementor-column-gap-extended">-->
                    <!--                                    <div class="elementor-row">-->
                    <!--                                        <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element">-->
                    <!--                                            <div class="elementor-column-wrap elementor-element-populated">-->
                    <!--                                                <div class="elementor-widget-wrap">-->
                    <!--                                                    <div class="elementor-element elementor-element-aa3a592 elementor-widget elementor-widget-tm-heading">-->

                    <!--                                                    </div>-->
                    <!--                                                    <div-->
                    <!--                                                            v-if="!!item.buttonTitle"-->
                    <!--                                                            class="elementor-element elementor-widget elementor-widget-tm-button">-->
                    <!--                                                        <div class="elementor-widget-container">-->
                    <!--                                                            <div class="tm-button-wrapper">-->
                    <!--                                                                <a href="#"-->
                    <!--                                                                   class="tm-button-link tm-button style-flat tm-button-xs"-->
                    <!--                                                                   role="button">-->
                    <!--                                                                    <div class="button-content-wrapper">-->

                    <!--                                                                                                           <span class="button-text">{{-->
                    <!--                                                                                                               item.buttonTitle-->
                    <!--                                                                                                               }}</span>-->

                    <!--                                                                    </div>-->

                    <!--                                                                </a>-->
                    <!--                                                            </div>-->
                    <!--                                                        </div>-->
                    <!--                                                    </div>-->
                    <!--                                                    <div class="elementor-element elementor-element-9d77e25 elementor-widget elementor-widget-spacer">-->
                    <!--                                                        <div class="elementor-widget-container">-->
                    <!--                                                            <div class="elementor-spacer">-->
                    <!--                                                                <div class="elementor-spacer-inner"></div>-->
                    <!--                                                            </div>-->
                    <!--                                                        </div>-->
                    <!--                                                    </div>-->
                    <!--                                                </div>-->
                    <!--                                            </div>-->
                    <!--                                        </div>-->
                    <!--                                        <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element">-->
                    <!--                                            <div class="elementor-column-wrap elementor-element-populated">-->
                    <!--                                                <div class="elementor-widget-wrap">-->
                    <!--                                                    <div class="elementor-element elementor-element-ee988ec elementor-widget elementor-widget-image"-->
                    <!--                                                         data-id="ee988ec" data-element_type="widget"-->
                    <!--                                                         data-widget_type="image.default">-->
                    <!--                                                        <div class="elementor-widget-container">-->
                    <!--                                                            <div class="elementor-image">-->
                    <!--                                                                <img decoding="async" loading="lazy" width="350"-->
                    <!--                                                                     height="201"-->
                    <!--                                                                     src="http://localhost:9090/edumall/wp-content/uploads/2020/08/banner-image-group-teachers-1.png"-->
                    <!--                                                                     class="attachment-full size-full wp-image-602"-->
                    <!--                                                                     sizes="(max-width: 350px) 100vw, 350px"></div>-->
                    <!--                                                        </div>-->
                    <!--                                                    </div>-->
                    <!--                                                </div>-->
                    <!--                                            </div>-->
                    <!--                                        </div>-->
                    <!--                                    </div>-->
                    <!--                                </div>-->
                    <!--                            </section>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                </v-card>
            </div>
        </div>

        <div class="elementor-container elementor-column-gap-extended">

        </div>
    </section>
</template>

<script>
export default {
    name: "Banner",
    props: {
        items: Array,
    },
    methods: {}
}
</script>

<style scoped>
.element-style {
    background-color: #F6F3ED;
    border-radius: 8px;
}
</style>