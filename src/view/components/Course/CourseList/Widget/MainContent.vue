<template>
    <div class="page-main-content">
        <div class="archive-filter-bars row row-xs-center">
            <div class="archive-filter-bar archive-filter-bar-left col-md-6">
                <div class="archive-result-count">
                    ما <span class="count">{{ totalCounts }}</span> دوره برای شما پیدا کردیم
                </div>
            </div>

            <div class="archive-filter-bar archive-filter-bar-right col-md-6">
                <div class="inner">
                    <div class="archive-layout-switcher">
                        <div class="archive-layout-switcher-label heading">مشاهده</div>
                        <label :class="`switcher-item grid ${viewSelectionType == 1 ? 'selected' : ''}`"
                               for="switcher-grid">
                            <input
                                    @click="viewSelectionType = 1"
                                    id="switcher-grid"
                                    type="radio"
                                    name="layout"
                                    value="grid">
                        </label>


                        <label :class="`switcher-item list ${viewSelectionType == 2 ? 'selected' : ''}`"
                               for="switcher-list">
                            <input
                                    @click="viewSelectionType = 2"
                                    id="switcher-list"
                                    type="radio"
                                    name="layout"
                                    value="list"
                                    checked="checked"
                            >
                        </label>

                    </div>
                </div>
            </div>


            <!--     Grid view       -->

            <div class="edumall-main-post edumall-grid-wrapper edumall-courses edumall-animation-zoom-in style-grid-01"
                 style="display: flex; flex-wrap: wrap;width: 100%"
                 v-if="viewSelectionType == 1">
                <div
                        :id="'grid_' + index"
                        @mouseenter="mouseEnterForShowTooltip(index)"
                        v-for="(item, index) in items"
                        class="col-md-4 col-lg-4 col-sm-12 mt-sm-5">
                    <div
                            class="course-loop-wrapper edumall-box edumall-tooltip">
                        <div class="tutor-course-header">
                            <div class="course-thumbnail edumall-image">
                                <router-link :to="`/cd/${item.slug}`">
                                    <a>
                                        <v-img
                                                :aspect-ratio="30/19"
                                                :src="item.cover"/>
                                    </a>
                                </router-link>
                            </div>
                            <div class="course-loop-badges">
                                <div class="tutor-course-badge hot">ویژه</div>
                                <div class="tutor-course-badge onsale">-34%</div>
                            </div>
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
                                    <div class="course-loop-benefit">می تواند یک ارزش پیشنهادی برای یک نام تجاری ایجاد
                                        کند
                                    </div>
                                    <div class="course-loop-benefit">بیاموزید که چگونه محتوای معنی دار و جذاب تولید
                                        کنید.
                                    </div>
                                    <div class="course-loop-benefit">یک زمین خلاق کامل ایجاد کنید.</div>
                                    <div class="course-loop-benefit">فعالیت های برند را از طریق لنز تجربه مشتری بررسی
                                        کنید.
                                    </div>
                                </div>
                            </div>
                            <div class="course-loop-enrolled-button cart-notification"
                                 data-notification="{&quot;image&quot;:&quot;https:\/\/dana-team.com\/products\/edumall\/wp-content\/uploads\/2020\/11\/course-thumbnail-11-1-80x80.jpg&quot;,&quot;title&quot;:&quot;\u0633\u0641\u0631 \u062e\u0644\u0627\u0642\u0627\u0646\u0647 \u0646\u0627\u0645 \u062a\u062c\u0627\u0631\u06cc&quot;}">
                                <a href="?add-to-cart=1879" data-quantity="1"
                                   class="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block  product_type_simple add_to_cart_button  ajax_add_to_cart"
                                   data-product_id="1879" data-product_sku=""
                                   aria-label="افزودن “سفر خلاقانه نام تجاری - محصول” به سبد" rel="nofollow"><span
                                        class="tutor-icon-cart-line tutor-mr-8"></span><span class="cart-text">افزودن به سبد خرید</span></a>
                            </div>
                            <div class="tm-button-wrapper course-loop-wishlist-button"><a data-course-id="1862"
                                                                                          class="tm-button style-text tm-button-nm edumall-course-wishlist-btn icon-left"
                                                                                          href="javascript:void(0);">
                                <div class="button-content-wrapper">

                                    <span class="button-icon"><i class="far fa-heart"></i></span>

                                    <span class="button-text">افزودن به علاقه مندی ها</span>

                                </div>
                            </a></div>
                        </div>

                    </div>
                </div>
            </div>


            <!--      List view     -->
            <div
                    v-if="viewSelectionType == 2"
                    class="row">
                <div
                        class="col-12">
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


        <!--        <div id="powerTip" class="course-quick-view-popup e"-->
        <!--             :style="`inset: ${tooltipYPosition}px auto auto ${tooltipXPosition}px;`">-->

        <!--            <div class="course-loop-category">-->
        <!--                <a href="https://dana-team.com/products/edumall/course-category/design-tools/">ابزار طراحی</a>-->
        <!--            </div>-->
        <!--            <h2 class="course-loop-title course-loop-title-collapse-2-rows"><a-->
        <!--                    href="https://dana-team.com/products/edumall/courses/%d8%af%d9%88%d8%b1%d9%87-%d8%a2%d9%85%d9%88%d8%b2%d8%b4-%d9%85%d9%84%d8%b2%d9%88%d9%85%d8%a7%d8%aa-adobe-illustrator-cc/">دوره-->
        <!--                آموزش ملزومات – Adobe Illustrator CC</a></h2>-->
        <!--            <div class="course-loop-rating-average">-->
        <!--                <div class="tm-star-rating style-01"><span class="tm-star-full"></span><span-->
        <!--                        class="tm-star-full"></span><span class="tm-star-full"></span><span class="tm-star-full"></span><span-->
        <!--                        class="tm-star-empty"></span></div>-->
        <!--                <div class="course-rating-average"><span class="rating-average">4.0</span><span-->
        <!--                        class="rating-total">/5</span></div>-->
        <!--                <span class="rating-count">-->
        <!--			(4 امتیاز)		</span>-->
        <!--            </div>-->
        <!--            <div class="course-loop-meta style-01">-->
        <!--                <div class="course-loop-meta-list">-->

        <!--                    <div class="course-loop-meta-item course-loop-meta-duration">-->
        <!--                        <div class="meta-value">8.5 ساعت</div>-->
        <!--                    </div>-->

        <!--                    <div class="course-loop-meta-item course-loop-meta-level">-->
        <!--                        <div class="meta-value">-->
        <!--                            مبتدی-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--            <div class="course-loop-benefits">-->
        <!--                <h6 class="course-loop-benefits-heading">آنچه یاد خواهید گرفت</h6>-->
        <!--                <div class="course-loop-benefits-list">-->
        <!--                    <div class="course-loop-benefit">با مهارت های آموخته شده در این دوره ، مهارت بسیار مطلوبی خواهید-->
        <!--                        داشت که می تواند به شما در یافتن شغل و کسب درآمد به عنوان طراح گرافیک کمک کند.-->
        <!--                    </div>-->
        <!--                    <div class="course-loop-benefit">Adobe Illustrator در زمینه طراحی گرافیک یک برنامه استاندارد در صنعت-->
        <!--                        است ، بنابراین اگر می خواهید یک طراح حرفه ای باشید یادگیری آن برای شما مهم است.-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--            <div class="course-loop-enrolled-button cart-notification"-->
        <!--                 data-notification="{&quot;image&quot;:&quot;https:\/\/dana-team.com\/products\/edumall\/wp-content\/uploads\/2020\/11\/zoom-meeting-thumbnail-06-1-80x80.jpg&quot;,&quot;title&quot;:&quot;\u062f\u0648\u0631\u0647 \u0622\u0645\u0648\u0632\u0634 \u0645\u0644\u0632\u0648\u0645\u0627\u062a \u2013 Adobe Illustrator CC&quot;}">-->
        <!--                <div class="tm-button-wrapper"><a class="tm-button style-flat tm-button-nm icon-left"-->
        <!--                                                  href="https://dana-team.com/products/edumall/courses/%d8%af%d9%88%d8%b1%d9%87-%d8%a2%d9%85%d9%88%d8%b2%d8%b4-%d9%85%d9%84%d8%b2%d9%88%d9%85%d8%a7%d8%aa-adobe-illustrator-cc/">-->
        <!--                    <div class="button-content-wrapper">-->

        <!--                        <span class="button-icon"><i class="far fa-shopping-cart"></i></span>-->

        <!--                        <span class="button-text">ثبت نام کنید</span>-->

        <!--                    </div>-->
        <!--                </a></div>-->
        <!--            </div>-->
        <!--            <div class="tm-button-wrapper course-loop-wishlist-button"><a data-course-id="203"-->
        <!--                                                                          class="tm-button style-text tm-button-nm edumall-course-wishlist-btn icon-left"-->
        <!--                                                                          href="javascript:void(0);">-->
        <!--                <div class="button-content-wrapper">-->

        <!--                    <span class="button-icon"><i class="far fa-heart"></i></span>-->

        <!--                    <span class="button-text">افزودن به علاقه مندی ها</span>-->

        <!--                </div>-->
        <!--            </a></div>-->
        <!--        </div>-->

    </div>

</template>

<script>
// import '@/assets/js/main.min'

import {mapActions, mapGetters} from "vuex";

export default {
    name: "MainContent",
    emits: ['viewSelectionChange'],
    props: {
        items: Array,
        totalCounts: Number,
    },
    computed: {
        ...mapGetters(['sessionId', 'cartItems'])
    },
    data() {
        return {
            purchaseStatus: -1,
            viewSelectionType: 1,
            tooltipYPosition: 0,
            tooltipXPosition: 0,
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
        mouseEnterForShowTooltip(index) {
            const gridElement = document.getElementById('grid_' + index);
            const boundingRect = gridElement.getBoundingClientRect()
            // this.tooltipXPosition = boundingRect.x + 110;
            // this.tooltipYPosition = boundingRect.y - 500;
        }
    },
    watch: {
        'cartItems': {
            handler(val) {
            }
        },
        'viewSelectionType': {
            handler(val) {
                this.$emit('viewSelectionChange', val)
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

.course-loop-wrapper {
    /*box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),*/
    /*0.3em 0.3em 1em rgba(0, 0, 0, 0.3);*/
    /*transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;*/
    /*padding: 21px 30px 25px 30px;*/
    box-shadow: 0 0 10px rgba(51, 51, 51, 0.15);
    height: 100%;
    border-radius: 5px;
    display: flex;
    flex-direction: column
}

.on-sale ins .amount {
    color: #d31819;
}
</style>