<template>
    <v-container>
        <v-card>
            <v-card-text>
                <div
                        v-if="courseItems.length > 0"
                        class="row">
                    <div class="col-9">
                        <div class="row">
                            <div class="col-12">
                                <items-list
                                        :course-items="courseItems">
                                </items-list>
                            </div>
                            <div class="col-12">
                                <selection-payment-types
                                        v-if="isLogin"
                                        :selected-payment.sync="selectedIpg"
                                        :payment-ipg-items="ipgItems">

                                </selection-payment-types>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex">
                        <div class="d-inline-block">
                            <discount-code>
                            </discount-code>
                            <side-total-amount-and-pay-button
                                    :selected-ipg="selectedIpg"
                                    class="mt-10"
                                    :model="this">
                            </side-total-amount-and-pay-button>
                        </div>
                    </div>
                </div>
                <div
                        v-else>
                    <cart-empty>
                    </cart-empty>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import DiscountCode from "@/view/components/Cart/Widgets/DiscountCode.vue";
import SideTotalAmountAndPayButton from "@/view/components/Cart/Widgets/SideTotalAmountAndPayButton.vue";
import SelectionPaymentTypes from "@/view/components/Cart/Widgets/SelectionPaymentTypes.vue";
import ItemsList from "@/view/components/Cart/Widgets/ItemsList.vue";
import {mapGetters} from "vuex";
import CartEmpty from "@/view/components/Cart/Widgets/CartEmpty.vue";

export default {
    name: "Cart",
    mounted() {
        this.$store.dispatch('setPageTitle', this.$t('cart.title'))
    },
    async created() {
        let url = '/cart/initialize/';
        if (this.isLogin) {
            url += `?sessionId=${this.sessionId}`;
        }
        const [err, data] = await this.to(this.http.get(url));
        if (!err) {
            this.ipgItems = data['ipgItems'];
            this.totalAmount = data.totalAmount;
            this.payableAmount = data.payableAmount;
            this.courseItems = data.courseItems;
        }
    },
    components: {CartEmpty, ItemsList, SelectionPaymentTypes, SideTotalAmountAndPayButton, DiscountCode},
    data() {
        return {
            selectedIpg: {},
            discountCode: null,
            totalAmount: 0,
            payableAmount: 0,
            ipgItems: [],
            courseItems: [],
        }
    },
    computed: {
        ...mapGetters(['sessionId', 'isLogin'])
    }
}
</script>

<style scoped>

</style>