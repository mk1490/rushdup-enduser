<template>
    <div

            class="row" style="width: 100%">
        <div
                class="col-md-12">
            <v-list>
                <v-list-item v-for="item in items">
                    <v-card
                            :to="`/cd/${item.slug}`"
                            flat="true"
                            style="width: 100%">
                        <v-card-text style="padding: 0px">
                            <div class="d-inline-flex">
                                <div v-if="!!item.cover">
                                    <v-img
                                            style="border-radius: 8px"
                                            :aspect-ratio="1.58/1"
                                            :src="item.cover"
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
                                        <v-btn
                                                @click.prevent="addToCartOrCompletePurchaseFlowOrViewCourse(item.cartStatus, item.id, item)"
                                                color="primary">
                                            {{ getCartButtonTitle(item.cartStatus) }}
                                        </v-btn>
                                        <!--                                        <div-->
                                        <!--                                                @click="addToCartOrCompletePurchaseFlowOrViewCourse(item)"-->
                                        <!--                                                class="course-loop-enrolled-button cart-notification">-->
                                        <!--                                            <div-->
                                        <!--                                                    class="tm-button-wrapper">-->
                                        <!--                                                <a-->
                                        <!--                                                        href="#"-->
                                        <!--                                                        class="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block product_type_simple add_to_cart_button tutor-open-login-modal">-->
                                        <!--                                                    <span class="tutor-icon-cart-line tutor-mr-8"></span>-->
                                        <!--                                                    <span class="cart-text"-->
                                        <!--                                                          style="color:white">افزودن به سبد خرید</span>-->
                                        <!--                                                </a>-->
                                        <!--                                            </div>-->
                                        <!--                                        </div>-->
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
</template>

<script>
import cart from "@/view/components/Cart/cart";

export default {
    name: "List",
    mixins: [cart],
    props: {
        items: Array
    },
    methods: {
        clickToLink() {
            console.log("Salam")
        }
    }
}
</script>

<style scoped>

</style>