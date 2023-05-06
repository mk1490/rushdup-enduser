<template>
    <div class="page-sidebar page-sidebar-left style-02">
        <div class="page-sidebar-inner tm-sticky-column" itemscope="itemscope">
            <div class="page-sidebar-content">

                <div class="widget edumall-wp-widget-course-category-filter edumall-wp-widget-course-filter">
                    <p class="widget-title heading">فیلتر بر اساس دسته بندی</p>
                    <ul class=" filter-checkbox-list show-display-list show-items-count-on">
                        <li
                                v-bind:key="item.id"
                                v-for="(item,index) in categories"
                                :class="!!categories[index].selected ? 'chosen' : ''"
                        >
                            <a @click="toggleCategoryItem(item, index)">
                                {{ item.title }}
                                <span class="count">
                                    (0)
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="archive-sidebar-filter">
                    <p class="archive-sidebar-filter-heading heading">فیلتر بر اساس</p>
                    <div id="edumall-wp-widget-course-instructor-filter-2"
                         class="widget edumall-wp-widget-course-instructor-filter edumall-wp-widget-course-filter">
                        <p class="widget-title heading">مدرس</p>
                        <ul class=" filter-checkbox-list show-display-list show-items-count-on">
                        </ul>
                    </div>
                    <div id="edumall-wp-widget-course-price-filter-2"
                         class="widget edumall-wp-widget-course-price-filter edumall-wp-widget-course-filter">
                        <p class="widget-title heading">قیمت</p>

                        <radio-buttons :items="priceFilterItems">

                        </radio-buttons>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RadioButtons from "@/view/widget/CustomViews/RadioButtons.vue";

export default {
    name: "Sidebar",
    components: {RadioButtons},
    props: {
        categoryItems: Array,
    },
    emits: ['onCategoriesChange'],
    data() {
        return {
            categories: [],
            priceFilterItems: [
                {
                    title: 'همه'
                },
                {
                    title: 'رایگان'
                },
                {
                    title: 'پرداخت شده'
                },

            ]
        }
    },
    mounted() {
        this.categories = this.categoryItems;
    },
    methods: {
        toggleCategoryItem(item, index) {
            this.categories[index].selected = !this.categories[index].selected;
            this.categories = Object.assign([], this.categories)
            this.$emit('onCategoriesChange', this.categories.filter(f => !!f.selected))
        }
    },
    watch: {
        'categoryItems': {
            handler(val) {
                this.categories = Object.assign([], val);
            }
        }
    }
}
</script>

<style scoped>

</style>