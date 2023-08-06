<template>
    <div class="page-main-content">
        <div class="archive-filter-bars row row-xs-center">
            <div class="archive-filter-bar archive-filter-bar-left col-md-6">
                <div class="archive-result-count">
                    ما <span class="count">{{ totalCounts }}</span> دوره برای شما پیدا کردیم
                </div>
            </div>

            <navbar-header
                    :view-selection-type="viewSelectionType"
                    @onSelection="selectionViewType">

            </navbar-header>


            <!--     Grid view       -->

            <div class="edumall-main-post edumall-grid-wrapper edumall-courses edumall-animation-zoom-in style-grid-01"
                 style="display: flex; flex-wrap: wrap;width: 100%"
                 v-if="viewSelectionType == 1">
                <v-menu open-on-hover
                        location="end">
                    <template v-slot:activator="{props}">
                        <div
                                v-bind="props"
                                :id="'grid_' + index"
                                @mouseenter="mouseEnterForShowTooltip(index)"
                                v-for="(item, index) in items"
                                class="col-md-4 col-lg-4 col-sm-12 mt-sm-5">
                            <div
                                    class="course-loop-wrapper edumall-box edumall-tooltip">
                                <div class="tutor-course-header">
                                    <div class="course-thumbnail edumall-image">
                                        <a :href="`/cd/${item.slug}`">
                                            <v-img
                                                    :aspect-ratio="30/19"
                                                    :src="item.cover"/>
                                        </a>
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
                                    <div class="tm-button-wrapper course-loop-wishlist-button">
                                        <a data-course-id="1862"
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
                    </template>
                    <v-card
                            width="300"
                            :disabled="loading.benefit == true"
                            :loading="loading.benefit"
                            style="padding: 25px; 30px">
                        <div
                                v-if="loading.benefit == false"
                                class="course-loop-benefits">
                            <h6 class="course-loop-benefits-heading">آنچه یاد خواهید گرفت</h6>
                            <div class="course-loop-benefits-list">
                                <div
                                        v-for="benefitItem in benefitItems"
                                        class="course-loop-benefit">
                                    {{ benefitItem }}
                                </div>
                            </div>
                        </div>
                    </v-card>
                </v-menu>
            </div>


            <!--      List view     -->

            <template
                    v-if="viewSelectionType === 2">
                <list :items="items"></list>
            </template>
        </div>
    </div>

</template>

<script>
// import '@/assets/js/main.min'

import {mapActions, mapGetters} from "vuex";
import List from "./Viewtype/List.vue";
import Grid from "./Viewtype/Grid.vue";
import NavbarHeader from "@/view/components/Course/CourseList/Widget/NavbarHeader.vue";

export default {
    name: "MainContent",
    components: {NavbarHeader, Grid, List},
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
            loading: {
                benefit: false,
            },
            purchaseStatus: -1,
            viewSelectionType: 1,
            tooltipYPosition: 0,
            tooltipXPosition: 0,
            benefitItems: [],
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
        async mouseEnterForShowTooltip(index) {
            this.loading.benefit = true;
            const [err, data] = await this.to(this.http.get(`/course/benefit/${this.items[index].id}`, {loader: false}));
            this.loading.benefit = false;
            if (!err) {
                this.benefitItems = data;
            }
        },
        selectionViewType(event) {
            this.viewSelectionType = event;
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