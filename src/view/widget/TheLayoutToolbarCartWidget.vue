<template>
  <div class="text-center">
    <v-menu
        min-width="500"
        bottom
        offset-y
        right
        open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            v-bind="attrs"
            v-on="on"
            elevation="0"
            class="ml-3"
            icon>
          <v-badge
              v-if="cartItems.length > 0"
              left
              :content="cartItems.length">
            <v-icon
                color="primary">
              mdi-cart
            </v-icon>
          </v-badge>
          <v-icon
              v-if="cartItems.length == 0"
              color="primary">
            mdi-cart
          </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          {{ $t('ui.amoozeshyarCart') }}
        </v-card-title>
        <v-card-text>
          <v-list v-if="cartItems.length > 0">
            <v-list-item
                v-for="(item, index) in cartItems"
                :key="index">
              <v-list-item-content>
                <div class="row">
                  <div class="col d-inline-flex align-center">
                    <v-btn
                        small
                        icon>
                      <v-icon color="red">
                        mdi-close
                      </v-icon>
                    </v-btn>
                    <p class="title">
                      {{ item.title }}
                    </p>
                  </div>
                  <div class="col-auto">
                    <p class="price">{{ item.price + ' ' + $t('IRR') }}</p>
                  </div>
                </div>


              </v-list-item-content>
            </v-list-item>
          </v-list>
          <div
              v-else
              class="d-flex justify-center no_cart_item">
            <span>
              {{$t('cart.noItemsInYourCart')}}
            </span>
          </div>
        </v-card-text>
        <v-card-actions v-if="cartItems.length > 0">
          <v-spacer/>
          <v-btn
              href="#/cart"
              color="primary">
            {{ $t('ui.seeEducationCard') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>

  </div>

</template>

<script>
export default {
  name: "TheLayoutToolbarCartWidget",
  props: {
    cartItems: Array,
  }
}
</script>

<style scoped>
.title {
  font-family: "IRAN Sans" !important;
  font-size: 20px;
  margin-bottom: 0px;
  margin-right: 16px;
}

.price {
  font-family: "IRAN Sans" !important;
  font-size: 20px;
  margin-bottom: 0px;
  margin-right: 16px;
}

.no_cart_item {
  font-family: "IRAN Sans";
  font-size: 1.4rem !important;
  color: #f44336;
}
</style>