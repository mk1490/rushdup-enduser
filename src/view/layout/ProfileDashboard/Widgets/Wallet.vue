<template>
    <div style="width: 100%;">
        <div class="border-box">
            <div class="d-flex justify-content-center text-center">
                <div class="d-inline-block">
                    <div>
                        <span>موجودی کیف پول:</span>
                        <strong class="currency-value">{{ getComma(walletAmount) }}</strong>
                        <small>ریال</small>
                    </div>
                    <v-btn
                            variant="text"
                            color="#0071DC"
                            flat="true"
                            class="mt-2">افزایش موجودی
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Wallet",
    computed:{
        ...mapGetters(['walletAmount'])
    }
}
</script>

<style scoped>
.border-box {
    width: 90%;
    border: dashed 1px #0071DC;
    padding: 50px;
    border-radius: 20px;
    margin: 20px;
}

.currency-value {
    margin-right: 5px;
    margin-left: 5px
}
</style>