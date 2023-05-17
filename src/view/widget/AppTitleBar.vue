<template>
    <div id="page-title-bar" class="page-title-bar page-title-bar-04">
        <div class="page-title-bar-inner">
            <app-breadcrumb></app-breadcrumb>
            <div
                    v-if="!!pageTitle"
                    class="container">
                <div class="row row-xs-center">
                    <div class="col-md-12">

                        <div class="page-title-bar-heading">
                            <h1 class="heading">{{ pageTitle }}</h1>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import AppBreadcrumb from "@/view/widget/AppBreadcrumb.vue";
import {mapGetters} from "vuex";

export default {
    name: "AppTitleBar",
    components: {AppBreadcrumb},
    computed: {
        ...mapGetters(['pageTitle'])
    },
}
</script>

<style scoped>

</style>