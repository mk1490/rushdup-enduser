<template>
    <v-card
            min-height="280"
            class="pa-2 mt-4"
            elevation="0"
            rounded
            shaped>
        <v-card-text class="pa-0 d-inline-block">
            <div class="d-block pa-0">
                <v-img
                        :src="data.image">
                </v-img>
            </div>
            <div class="d-block d-flex justify-center my-4">
                <span class="d-flex course__title">
                  {{ data.title }}
                </span>
            </div>
            <div class="d-block mt-5">
                <div class="row">
                    <div class="col d-inline-flex price justify-center">
                        <p>
                            {{ getComma(data.price) }}
                        </p>
                        <small class="mr-2">
                            {{ $t('ui.IRR') }}
                        </small>
                    </div>
                    <div class="col-auto"></div>
                </div>
            </div>
            <div class="d-block mt-5">
                <div class="d-flex justify-center">
                    <v-btn
                            @click="addToCartOrCompletePurchaseFlowOrViewCourse"
                            height="50"
                            block
                            class="white--text"
                            color="#3949AB">
                        {{ getCartButtonTitle() }}
                    </v-btn>
                </div>
            </div>
            <div class="d-block mt-3">
                <v-simple-table>
                    <template v-slot:default>
                        <tbody>
                        <tr>
                            <th class="text-right">
                                {{ $t('course.studentCounts') + ':' }}
                            </th>
                            <td class="text-left">
                                {{ data.studentCounts }}
                            </td>
                        </tr>
                        <tr>
                            <th class="text-right">
                                {{ $t('course.timeDuration') + ':' }}
                            </th>
                            <td class="text-left">
                                {{ data.studentCounts }}
                            </td>
                        </tr>
                        <tr>
                            <th class="text-right">
                                {{ $t('course.lessonCounts') + ':' }}
                            </th>
                            <td class="text-left">
                                {{ data.lessonCounts }}
                            </td>
                        </tr>

                        </tbody>
                    </template>
                </v-simple-table>
            </div>

        </v-card-text>
    </v-card>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import TeacherInformation from "@/view/components/Course/CourseDetails/Widgets/TeacherInformation.vue";

export default {
    name: "CourseDetails_InformationSide",
    components: {TeacherInformation},
    created() {
        this.purchaseStatus = this.data.cartStatus;
    },
    props: {
        id: String,
        data: Object,
    },
    data() {
        return {
            purchaseStatus: 0,
        }
    },
    computed: {
        ...mapGetters(['cartExistItems', 'sessionId'])
    },
    methods: {
        ...mapActions(['addToCart']),
        async addToCartOrCompletePurchaseFlowOrViewCourse() {
            switch (this.purchaseStatus) {
                case -1: {
                    await this.addToCartServer();
                    break;
                }
                    this.purchaseStatus = 2;
                    break;
                case 2: {
                    await this.$router.push('/cart');
                    break;
                }

            }

        },
        getCartButtonTitle() {
            switch (this.purchaseStatus) {
                case -1:
                    return this.$t('course.addToCard');
                case 1:
                    return this.$t('course.startLearning');
                case 2:
                    return this.$t('course.completePurchaseFlow');
            }
        },
        async addToCartServer() {
            const [err] = await this.to(this.http.post(`/cart`, {
                sessionId: this.sessionId,
                courseId: this.id,
            }));
            if (!err) {
                this.$toast.success('افزودن به سبد خرید با موفقیت انجام شد.')
                this.purchaseStatus = 2;
                await this.addToCart(this.data);
            }
        }
    },
    watch: {
        'cartExistItems': {
            handler() {
            }
        },
        'data.cartStatus': {
            handler() {
                this.purchaseStatus = this.data.cartStatus;
            }
        }
    }
}
</script>

<style scoped>
.price p {
    font-family: "IRAN Sans";
    font-size: 2rem !important;
}
</style>