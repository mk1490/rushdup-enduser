<template>
    <div class="row">
        <div class="col-md-4 post-item event_auth_book type-event_auth_book status-ea-completed hentry post-no-thumbnail animate">
            <div class="post-wrapper edumall-box">

                <div class="post-caption">
                    <div class="post-meta">
                        <div class="inner">
                            <div class="post-date">
                                <span class="meta-icon"><i class="far fa-calendar"></i></span>
                                <span class="meta-value">فروردین 12, 1402</span>
                            </div>
                            <div class="post-view">
                                <span class="meta-icon"><i class="far fa-eye"></i></span>
                                <span class="meta-value">0 بازدید</span>
                            </div>
                        </div>
                    </div>

                    <h3 class="post-title">
                        <a href="https://dana-team.com/products/edumall/event-book/teeeeeeeest-%d8%b1%d8%b2%d8%b1%d9%88-%d8%b1%d9%88%db%8c%d8%af%d8%a7%d8%af-333-2/">teeeeeeeest
                            رزرو رویداد 333</a>
                    </h3>

                    <div class="post-excerpt">
                        <p>teeeeeeeest رویداد رزرو 333 با شکاف 1 …</p></div>

                    <div class="tm-button-wrapper post-read-more"><a
                            class="tm-button style-flat tm-button-xs button-grey-white icon-right"
                            href="https://dana-team.com/products/edumall/event-book/teeeeeeeest-%d8%b1%d8%b2%d8%b1%d9%88-%d8%b1%d9%88%db%8c%d8%af%d8%a7%d8%af-333-2/">
                        <div class="button-content-wrapper">


                            <span class="button-text">ادامه مطلب</span>

                            <span class="button-icon"><i class="fal fa-long-arrow-right"></i></span>
                        </div>
                    </a></div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "Search",
    watch: {
        '$route.query.q': {
            handler(val) {
                this.$store.dispatch('setPageTitle', 'نتایج جستجو برای: ' + `"${val}"`)
            }
        }
    }
}
</script>

<style scoped>

</style>