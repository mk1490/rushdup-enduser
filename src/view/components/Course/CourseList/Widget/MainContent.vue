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


            <template v-if="viewSelectionType == 1">
                <grid :items="items"></grid>
            </template>

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