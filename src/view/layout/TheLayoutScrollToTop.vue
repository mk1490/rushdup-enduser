<template>
    <a
            @click="scrollToTop"
            :class="`page-scroll-up`" id="page-scroll-up">
        <i class="arrow-top fal fa-long-arrow-up"></i>
        <i class="arrow-bottom fal fa-long-arrow-up"></i>
    </a>
</template>

<script>
export default {
    name: "TheLayoutScrollToTop",
    mounted() {
        const documentScrollUp = document.getElementById('page-scroll-up');
        let oldScroll = 0;
        window.onscroll = () => {
            const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollPosition > 0 && oldScroll <= scrollPosition) {
                documentScrollUp.classList.remove('show')
            } else {
                documentScrollUp.classList.add('show')
            }
            oldScroll = scrollPosition;
            if (scrollPosition < 200) {
                documentScrollUp.classList.remove('show')
            }
        }
    },
    methods: {
        scrollToTop() {
            console.log("Scroll to top")
            window.scrollTo(0, 0)
            document.body.scrollTo({top: 100, left: 100, behavior: 'smooth'})
        }
    }
}
</script>

<style scoped>

</style>