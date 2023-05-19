<template>
    <div class="page-main-content">
        <div class="archive-filter-bars row row-xs-center">
            <div class="archive-filter-bar archive-filter-bar-left col-md-6">
                <div class="archive-result-count">
                    ما <span class="count">51</span> دوره برای شما پیدا کردیم
                </div>
            </div>

            <div class="archive-filter-bar archive-filter-bar-right col-md-6">
                <div class="inner">
                    <form id="archive-layout-switcher" class="archive-layout-switcher">
                        <div class="archive-layout-switcher-label heading">مشاهده</div>
                        <label class="switcher-item grid" for="switcher-64540dae12518-grid">
                            <input type="radio" name="layout" value="grid"
                                   id="switcher-64540dae12518-grid">
                        </label>
                        <label class="switcher-item list selected"
                               for="switcher-64540dae12518-list">
                            <input type="radio" name="layout" value="list" checked='checked'
                                   id="switcher-64540dae12518-list">
                        </label>
                        <input type="hidden" name="action" value="course_layout_change">
                    </form>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <v-list>
                        <v-list-item v-for="item in items">
                            <v-card
                                    :to="`/cd/${item.slug}`"
                                    flat
                                    style="width: 100%">
                                <v-card-text style="padding: 0px">
                                    <div class="d-inline-flex">
                                        <div>
                                            <v-img
                                                    style="border-radius: 8px"
                                                    :aspect-ratio="1.58/1"
                                                    src="https://dana-team.com/products/edumall/wp-content/uploads/2020/06/course-thumbnail-03-1-480x304.jpg"
                                                    width="320"/>
                                            <div
                                                    v-if="item.isFree"
                                                    class="course-loop-badges">
                                                <div class="tutor-course-badge free">رایگان</div>
                                            </div>
                                        </div>
                                        <div style="flex-grow: 1;margin-right: 30px">
                                            <div class="course-loop-category">
                                                <a
                                                        v-for="categoryItem in item.categories">
                                                    {{ categoryItem }}
                                                </a>
                                            </div>
                                            <h2 class="course-loop-title course-loop-title-collapse-2-rows">
                                                <a>{{ item.title }}</a>
                                            </h2>
                                            <div class="course-loop-meta style-02">
                                                <div class="course-loop-meta-list">
                                                    <div class="course-loop-meta-item course-loop-meta-duration">
                                                        <div class="meta-label">
                                                            <span class="meta-label-icon far fa-clock"></span>
                                                        </div>
                                                        <div class="meta-value">
                                                            0 ساعت
                                                        </div>
                                                    </div>

                                                    <!--                                                    <div class="course-loop-meta-item course-loop-meta-level">-->
                                                    <!--                                                        <div class="meta-label">-->
                                                    <!--                                                            <span class="meta-label-icon far fa-sliders-h"></span>-->
                                                    <!--                                                        </div>-->
                                                    <!--                                                        <div class="meta-value">-->
                                                    <!--                                                            مبتدی-->
                                                    <!--                                                        </div>-->
                                                    <!--                                                    </div>-->
                                                </div>
                                            </div>
                                            <div class="course-loop-excerpt course-loop-excerpt-collapse-2-rows">
                                                <p>{{ item.content }}</p></div>
                                            <div class="course-loop-footer">
                                                <div class="course-loop-price">
                                                    <div class="tutor-price course-free">
                                                        {{ item.isFree ? 'رایگان' : item.price + $t('ui.IRR') }}
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="course-loop-buttons">
                                                <div
                                                        @click="addToCartOrCompletePurchaseFlowOrViewCourse(item)"
                                                        class="course-loop-enrolled-button cart-notification">
                                                    <div
                                                            class="tm-button-wrapper">
                                                        <a
                                                                class="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block product_type_simple add_to_cart_button tutor-open-login-modal">
                                                            <span class="tutor-icon-cart-line tutor-mr-8"></span>
                                                            <span class="cart-text" style="color:white">افزودن به سبد خرید</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="mr-2 tm-button-wrapper course-loop-wishlist-button hint--bounce hint--top hint--primary"
                                                     aria-label="افزودن به علاقه مندی ها">
                                                    <a
                                                            class="tm-button style-flat tm-button-xs button-grey open-popup-login icon-left"
                                                            href="javascript:void(0);">
                                                        <div class="button-content-wrapper">
                                                            <span class="button-icon">
                                                                <i class="far fa-heart"></i></span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </v-card-text>
                            </v-card>
                            <div class="course-loop-wrapper">

                            </div>
                        </v-list-item>
                    </v-list>
                </div>
            </div>


        </div>


    </div>

</template>

<script>
// import '@/assets/js/main.min'

import {mapActions, mapGetters} from "vuex";

export default {
    name: "MainContent",
    props: {
        items: Array,
    },
    computed: {
        ...mapGetters(['sessionId', 'cartItems'])
    },
    data() {
        return {
            purchaseStatus: -1,
        }
    },
    methods: {
        ...mapActions(['addToCart']),
        async addToCartOrCompletePurchaseFlowOrViewCourse(item) {
            switch (this.purchaseStatus) {
                case -1: {
                    const [err, data] = await this.to(this.http.post(`/cart`, {
                        sessionId: this.sessionId,
                        courseId: item.id,
                    }));
                    if (!err) {
                        this.$toast.success('افزودن به سبد خرید با موفقیت انجام شد.')
                        this.purchaseStatus = 2;
                        await this.addToCart(item);
                    }
                }
                    break;
                case 2: {
                    await this.$router.push('/cart');
                    break;
                }

            }
        },
    },
    watch: {
        'cartItems': {
            handler(val) {
                console.log(val)
            }
        }
    }
}
</script>

<style scoped>

.course-loop-buttons {
    display: flex;
    margin: 7px 0 0;
}

.course-loop-footer {
    right: auto;
    left: 0;
    text-align: left;
    position: absolute;
}
</style>