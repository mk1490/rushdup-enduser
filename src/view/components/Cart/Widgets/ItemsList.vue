<template>
    <v-list>
        <v-list-item
                v-for="(item, index) in courseItems">
            <v-list-item-content>
                <v-card
                        flat
                        style="width: 100%">
                    <v-card-text>
                        <div class="d-inline-flex align-center">
                            <v-btn
                                    @click="removeFromCart(index)"
                                    icon>
                                <v-icon color="red">
                                    mdi-close
                                </v-icon>
                            </v-btn>
                            <v-img
                                    class="mr-2"
                                    src="https://placehold.co/600x400"
                                    height="100"
                                    width="150">
                            </v-img>
                            <div class="mr-4">
                                <div class="d-block">
                                    <v-rating
                                            small
                                            readonly
                                            :length="5">
                                    </v-rating>
                                </div>
                                <label class="d-block">
                                    {{ item.title }}
                                </label>
                                <span class="price">
                  {{ getComma(item.price) + ' ' + $t('ui.IRR') }} 
                </span>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "ItemsList",
    props: {
        courseItems: Array,
    },
    methods: {
        async removeFromCart(index) {
            const isConfirm = window.confirm('برای حذف این دوره از سبد اطمینان دارید؟')
            if (isConfirm) {
                const [err, data] = await this.http.delete(`/cart/${this.courseItems[index].id}`);
                if (!err) {
                    this.courseItems.splice(index, 1);
                    this.$store.dispatch('removeCartItem', index);
                }
            }

        }
    }
}
</script>

<style scoped>
label {
    font-family: IranYekanRegular;
    font-size: 1.4rem !important;
    font-weight: bold;
}

.price {
    font-family: "IRAN Sans";
    font-size: 0.9rem !important;
    font-weight: bold;
}
</style>