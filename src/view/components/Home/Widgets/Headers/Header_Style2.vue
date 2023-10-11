<template>
    <div
            class="elementor elementor-437">
        <div class="elementor-inner">
            <div class="elementor-section-wrap">
                <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-af8ff11 elementor-section-full_width elementor-section-stretched elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch">
                    <div class="elementor-container elementor-column-gap-extended">
                        <div class="elementor-row">
                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ff27902">
                                <div
                                        class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">


                                        <section
                                                class="elementor-section elementor-inner-section elementor-element elementor-element-f5f3893 elementor-section-content-middle elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch">
                                            <div
                                                    class="elementor-container elementor-column-gap-extended">
                                                <div class="elementor-row">
                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8f4d4d7">
                                                        <div
                                                                class="elementor-column-wrap elementor-element-populated">
                                                            <div
                                                                    class="elementor-widget-wrap">
                                                                <div class="elementor-element elementor-element-7271a08 elementor-widget elementor-widget-tm-heading animated edumallFadeInUp">
                                                                    <div
                                                                            class="elementor-widget-container">
                                                                        <div
                                                                                class="tm-modern-heading">

                                                                            <div
                                                                                    class="heading-primary-wrap">
                                                                                <h3
                                                                                        class="heading-primary elementor-heading-title">
                                                                                    موفقیت
                                                                                    را شروع
                                                                                    کنید !
                                                                                </h3>
                                                                            </div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-element elementor-element-39b13fc edumall-modern-heading-style-01 elementor-widget elementor-widget-tm-heading animated edumallFadeInUp">
                                                                    <div
                                                                            class="elementor-widget-container">
                                                                        <div
                                                                                class="tm-modern-heading">

                                                                            <div
                                                                                    class="heading-primary-wrap">
                                                                                <h2
                                                                                        class="heading-primary elementor-heading-title">
                                                                                    دسترسی
                                                                                    به
                                                                                    <mark>5500+</mark>
                                                                                    درس
                                                                                    از
                                                                                    <mark>480</mark>
                                                                                    استاد و
                                                                                    مدرس
                                                                                </h2>
                                                                            </div>


                                                                            <div
                                                                                    class="heading-description-wrap">
                                                                                <div
                                                                                        class="heading-description">
                                                                                    <p>یادگیری
                                                                                        خود
                                                                                        را
                                                                                        به
                                                                                        سطح
                                                                                        بعدی
                                                                                        ببرید.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-element elementor-element-4fefe05 elementor-widget__width-initial style-01 elementor-widget edumall-widget-course-search-form animated edumallFadeInUp">
                                                                    <div
                                                                            class="elementor-widget-container">
                                                                        <label
                                                                                class="screen-reader-text">جستجو
                                                                            برای:</label>

                                                                        <v-text-field
                                                                                v-model="model.searchValue"
                                                                                placeholder="چه چیزی می‌خوای یاد بگیری؟"
                                                                                variant="solo"
                                                                                hide-details
                                                                                append-inner-icon="mdi-magnify"
                                                                                @click:append-inner="submitSearch"
                                                                                height="68"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-element elementor-element-33f45e8 elementor-widget elementor-widget-spacer">
                                                                    <div
                                                                            class="elementor-widget-container">
                                                                        <div
                                                                                class="elementor-spacer">
                                                                            <div
                                                                                    class="elementor-spacer-inner">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-26fe5ab">
                                                        <div
                                                                class="elementor-column-wrap elementor-element-populated">
                                                            <div
                                                                    class="elementor-widget-wrap">
                                                                <div class="elementor-element elementor-element-6d519d8 elementor-widget elementor-widget-image animated edumallFadeInUp">
                                                                    <div
                                                                            class="elementor-widget-container">
                                                                        <div
                                                                                class="elementor-image">
                                                                            <img
                                                                                    class="attachment-full size-full"
                                                                                    src="@/assets/images/home-01-hero-image-1.png"
                                                                                    alt="">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header_Style2",
    mounted() {
        window.onmousemove = (e) => {
            // const dots = this.$refs.dots;
            // if (dots != null) {
            //     dots.style.setProperty('--translateY', e.clientY / 20 + 'px');
            //     dots.style.setProperty('--translateX', e.clientX / 20 + 'px');
            //     this.$refs.circle_1.style.setProperty('--translateX', e.clientX / 20 + 'px');
            //     this.$refs.circle_1.style.setProperty('--translateY', e.clientY / 20 + 'px');
            // }
        }
    },
    methods: {
        submitSearch() {
            if (!this.model.searchValue) {
                this.$toast.warning('مقداری را جهت جستجو وارد نمایید!', {
                    position: "bottom"
                })
                return;
            }
            this.$router.push(`/search?q=${this.model.searchValue}`);
        }
    },
    data() {
        return {
            model: {
                searchValue: null,
            }
        }
    }
}
</script>

<style>
.elementor-element.elementor-element-af8ff11 > .elementor-container > .elementor-row {
    align-items: stretch;
}

.elementor-element.elementor-element-af8ff11 {
    overflow: hidden;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
}

.elementor-element.elementor-element-af8ff11:not(.elementor-motion-effects-element-type-background),
.elementor-element.elementor-element-af8ff11 > .elementor-motion-effects-container > .elementor-motion-effects-layer {
    background-color: #F8F8F8;
}

.elementor-element.elementor-element-af8ff11 > .elementor-background-overlay {
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}

.search-field {
    width: 100% !important;
}
</style>