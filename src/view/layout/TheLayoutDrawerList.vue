<template>
  <v-container>
    <div class="d-inline-block full-width px-3 pt-3">
      <v-text-field
          solo
          light
          hide-details
          clearable
          append-icon="mdi-magnify"
          :placeholder="$t('ui.searchCourse')">
      </v-text-field>
      <v-list
          light
          subheader
          two-line
          class="layout-drawer">
        <template v-for="menuItem in menuItems">
          <v-list-item>
            <v-list-item-title>
              {{ menuItem.title }}
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
        </template>
        <v-subheader>{{ $t('ui.categories') }}</v-subheader>
        <v-list-item
            :href="`/#/category/${categoryItem.slug}`"
            @click="selectCategory(categoryItem)"
            v-for="categoryItem in categoryItems">
          <v-list-item-title>
            {{ categoryItem['name'] }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </v-container>

</template>

<script>
import {resolve} from 'path';
import {mapGetters} from "vuex";

export default {
  name: 'TheLayoutDrawerList',
  props: {
    dense: Boolean,
    iconShow: Boolean,
    isNest: Boolean,
    routes: {
      type: Array,
      default: () => {
      },
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  computed: {
    ...mapGetters(['menuItems', 'categoryItems'])
  },
  methods: {
    isExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path);
    },
    async selectCategory(categoryItem) {
      await this.$store.dispatch('setCategory', categoryItem);
    }
  },
};

</script>

<style>
.layout-drawer {
  padding-bottom: 0px;
  padding-top: 0px;
}

.layout-drawer__icon {
  margin-bottom: 8px;
  margin-top: 8px;
}

.v-list-item--active {
  /*background-color: #EF5350 !important;*/
  color: #c7ffbd !important;
}
</style>
