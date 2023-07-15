<template>
    <div class="edumall-main-post edumall-grid-wrapper edumall-courses edumall-animation-zoom-in style-grid-01"
         style="display: flex; flex-wrap: wrap;width: 100%">
        <div
                :id="'grid_' + index"
                v-for="(item, index) in items"
                class="col-md-4 col-lg-4 col-sm-12 mt-sm-5">
            <div
                    class="course-loop-wrapper edumall-box edumall-tooltip">
                <div
                        v-if="!!item.cover"
                        class="tutor-course-header">
                    <div
                            class="course-thumbnail edumall-image">
                        <router-link :to="`/cd/${item.slug}`">
                            <a>
                                <v-img
                                        :aspect-ratio="30/19"
                                        :src="item.cover"/>
                            </a>
                        </router-link>
                    </div>
<!--                    <div class="course-loop-badges">-->
                    <!--                        <div class="tutor-course-badge hot">ویژه</div>-->
                    <!--                        <div class="tutor-course-badge onsale">-34%</div>-->
                    <!--                    </div>-->
                </div>

                <div class="course-loop-info">
                    <!--                            <div class="course-loop-badge-level expert">-->
                    <!--                                <span class="badge-text">پیشرفته</span>-->
                    <!--                            </div>-->
                    <h2 class="course-loop-title course-loop-title-collapse-2-rows">
                        <a href="#">
                            {{ item.title }}
                        </a>
                    </h2>
                    <div class="course-loop-excerpt course-loop-excerpt-collapse-2-rows">
                        <div v-html="item['shortDescription']">
                        </div>
                        <!--                                <p>{{ item.shortDescription }}</p>-->
                    </div>
                    <div class="course-loop-price">
                        <div class="tutor-price">
                            <div class="price">
                                <p class="price">


                                    <template v-if="!item.courseIsFree">

                                        <template v-if="item.deducatedPrice != item.price">
                                            <ins>
                                                <span class="woocommerce-Price-amount amount"><bdi>{{
                                                    getComma(item.deducatedPrice)
                                                    }}&nbsp;
                                                    <span class="woocommerce-Price-currencySymbol">
                                                        {{ $t('ui.IRR') }}
                                                    </span></bdi></span>
                                            </ins>
                                            <del>
                                                <span class="woocommerce-Price-amount amount"><bdi>
                                                    {{ getComma(item.price) }}
                                                    &nbsp;<span
                                                        class="woocommerce-Price-currencySymbol">{{
                                                    $t('ui.IRR')
                                                    }}</span></bdi></span>
                                            </del>
                                        </template>
                                        <template v-else>
                                            <bdi>
                                                {{ getComma(item.deducatedPrice) }}
                                                <span class="woocommerce-Price-currencySymbol">{{
                                                    $t('ui.IRR')
                                                    }}</span>
                                            </bdi>
                                        </template>

                                    </template>
                                    <template v-else>
                                        رایگان
                                    </template>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="course-loop-quick-view">
                    <div class="course-loop-category">
                        <a href="https://dana-team.com/products/edumall/course-category/advertising/">تبلیغات</a>
                    </div>
                    <h2 class="course-loop-title course-loop-title-collapse-2-rows"><a
                            href="https://dana-team.com/products/edumall/courses/the-creative-journey-of-branding/">سفر
                        خلاقانه نام تجاری</a></h2>
                    <div class="course-loop-meta style-01">
                        <div class="course-loop-meta-list">

                            <div class="course-loop-meta-item course-loop-meta-duration">
                                <div class="meta-value">9.8 ساعت</div>
                            </div>

                            <div class="course-loop-meta-item course-loop-meta-level">
                                <div class="meta-value">
                                    پیشرفته
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="course-loop-benefits">
                        <h6 class="course-loop-benefits-heading">آنچه یاد خواهید گرفت</h6>
                        <div class="course-loop-benefits-list">
                            <div class="course-loop-benefit">می تواند یک ارزش پیشنهادی برای یک نام تجاری
                                ایجاد
                                کند
                            </div>
                            <div class="course-loop-benefit">بیاموزید که چگونه محتوای معنی دار و جذاب تولید
                                کنید.
                            </div>
                            <div class="course-loop-benefit">یک زمین خلاق کامل ایجاد کنید.</div>
                            <div class="course-loop-benefit">فعالیت های برند را از طریق لنز تجربه مشتری
                                بررسی
                                کنید.
                            </div>
                        </div>
                    </div>
                    <div class="course-loop-enrolled-button cart-notification">
                        <a
                                class="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block  product_type_simple add_to_cart_button">
                                    <span
                                            class="tutor-icon-cart-line tutor-mr-8">
                                    </span>
                            <span class="cart-text">
                                    {{ getCartButtonTitle(item.cartStatus) }}
                                </span>
                        </a>
                    </div>
                    <div class="tm-button-wrapper course-loop-wishlist-button">
                        <a
                                class="tm-button style-text tm-button-nm edumall-course-wishlist-btn icon-left"
                        >
                            <div class="button-content-wrapper">

                                <span class="button-icon"><i class="far fa-heart"></i></span>

                                <span class="button-text">افزودن به علاقه مندی ها</span>

                            </div>
                        </a></div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import cart from '@/view/components/Cart/cart.js'

export default {
    name: "Grid",
    mixins: [cart],
    props: {
        items: Array,
    }
}
</script>

<style scoped>

</style>