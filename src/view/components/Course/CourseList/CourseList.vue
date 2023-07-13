<template>
    <div class="container">

        <div class="row" style="margin-top: 60px">
            <template v-if="!noData">
                <sidebar
                        @onCategoriesChange="filterCategory($event)"
                        :category-items="categoryItems"></sidebar>
                <main-content
                        :totalCounts="totalCounts"
                        :items="items"
                        @viewSelectionChange="fetchData($event)"
                >
                </main-content>

                <div class="d-flex justify-center" style="width: 100%">
                    <v-pagination
                            @previous="previousClick"
                            @next="nextClick"
                            @input="onSelectNumber"
                            :length="pagesLengthCalculate()"
                            :value="selectedPage" circle>
                    </v-pagination>
                </div>
            </template>
            <template v-else>
                <div class="col-md-12">
                    <div class="course-no-result-title">
                        <h3 class="primary-heading">با عرض پوزش ، ما نمی توانیم هیچ دوره ای برای این جستجو پیدا
                            کنیم.</h3>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/view/components/Course/CourseList/Widget/Sidebar.vue";
import MainContent from "@/view/components/Course/CourseList/Widget/MainContent.vue";
import {mapGetters} from "vuex";

export default {
    name: "CourseList",
    components: {MainContent, Sidebar},
    computed: {
        ...mapGetters(['categoryItems'])
    },
    async created() {
        await this.fetchData();
        this.$store.dispatch('pushBreadcrumb', {title: this.$store.getters.pageTitle, path: 'cl'})
    },
    data() {
        return {
            selectedPage: 1,
            totalCounts: 0,
            itemsPerPage: 0,
            items: [],
            selectedCategories: [],
            noData: false,
        }
    },
    methods: {
        async filterCategory(data) {
            this.selectedCategories = data;
            await this.fetchData();
        },
        async fetchData(event) {
            const slug = this.$route.params.categorySlug;
            if (!slug) return;
            const queryParams = new URLSearchParams();
            this.selectedCategories.map((f) => {
                queryParams.append('categoryIdOrIds', f.id);
            });
            queryParams.append('offset', (this.selectedPage - 1) * this.itemsPerPage);
            queryParams.append('viewType', event);
            if (!!slug) {
                queryParams.append('categorySlug', slug);
            }
            queryParams.append('viewType', event);
            const [err, data] = await this.to(this.http.get(`/course/list?${queryParams}`));
            if (!err) {
                if (data.items.length < 1) {
                    this.noData = true;
                } else {
                    this.noData = false;
                }
                window.scrollTo({top: 0, behavior: 'smooth'});
                await this.$store.dispatch('setPageTitle', data.title);
                this.totalCounts = data.totalCounts;
                this.itemsPerPage = data.itemsPerPage;
                this.items = data.items.map(f => {
                    f.cover = f.cover !== null ? this.serverAddress + f.cover : null;
                    return f;
                });
            }
        },
        nextClick() {
            console.log('next click')
        },
        previousClick() {
            console.log('previous click')
        },
        async onSelectNumber(event) {
            if (event == this.selectedPage)
                return;
            this.selectedPage = event;
            await this.fetchData();
        },
        pagesLengthCalculate() {
            return Math.ceil(this.totalCounts / this.itemsPerPage);
        },

    },
    watch: {
        '$route.params.categorySlug': {
            async handler() {
                await this.fetchData();
            }
        }
    }
}
</script>

<style scoped>
@media (min-width: 992px) {
    .page-sidebar {
        flex: 0 0 25%;
        max-width: 25%
    }

    .page-main-content {
        flex: 0 0 75%;
        max-width: 75%
    }
}

@media (min-width: 1200px) {
    .page-sidebar-left .page-sidebar-inner {
        padding-left: 20px
    }

    .page-sidebar-right .page-sidebar-inner {
        padding-right: 20px
    }
}

@media (max-width: 991px) {
    .page-sidebar {
        margin-top: 80px
    }

    .page-main-content {
        -webkit-order: -1;
        -moz-order: -1;
        order: -1
    }
}
</style>