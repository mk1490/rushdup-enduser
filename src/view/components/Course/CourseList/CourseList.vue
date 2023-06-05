<template>
    <div class="container">

        <div class="row" style="margin-top: 60px">
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
        }
    },
    methods: {
        async filterCategory(data) {
            this.selectedCategories = data;
            await this.fetchData();
        },
        async fetchData(event) {
            const queryParams = new URLSearchParams();
            this.selectedCategories.map((f) => {
                queryParams.append('categoryIdOrIds', f.id);
            });
            queryParams.append('offset', (this.selectedPage - 1) * this.itemsPerPage);
            queryParams.append('viewType', event);
            const [err, data] = await this.to(this.http.get(`/course/list?${queryParams}`));
            if (!err) {
                window.scrollTo({top: 0, behavior: 'smooth'});
                this.totalCounts = data.totalCounts;
                this.itemsPerPage = data.itemsPerPage;
                this.items = data.items.map(f => {
                    f.cover = f.cover !== null ? this.serverAddress + '/api/public' + f.cover : null;
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