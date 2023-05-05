<template>
    <div class="container">

        <div class="row" style="margin-top: 60px">
            <sidebar></sidebar>
            <main-content></main-content>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/view/components/Course/CourseList/Widget/Sidebar.vue";
import MainContent from "@/view/components/Course/CourseList/Widget/MainContent.vue";

export default {
    name: "CourseList",
    components: {MainContent, Sidebar},
    mounted() {
        // let recaptchaScript = document.createElement('script')
        // recaptchaScript.setAttribute('src', 'src/assets/js/main.min.js')
        // document.head.appendChild(recaptchaScript)
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