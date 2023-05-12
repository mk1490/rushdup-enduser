<template>
    <div v-if="!isHome">
        <div class="page-title-bar-bg"></div>
        <div
                class="page-breadcrumb">
            <div class="page-breadcrumb-inner container">
                <ul class="insight_core_breadcrumb">
                    <!--                <li class="level-1 top">-->
                    <!--                    <a-->
                    <!--                            href="/"-->
                    <!--                            to="home">خانه</a>-->
                    <!--                </li>-->

                    <li
                            v-for="(item, index) in items"
                            :class="`level-${index + 2} ${(index+ 1) === items.length? 'current' : 'sub'}`">
                        <a
                                :href="item.target"
                                :to="item.target">
                            {{ item.title }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppBreadcrumb",
    data() {
        return {
            isHome: false,
            items: [],
        }
    },
    mounted() {
        const route = this.$route;
        console.log(route.name)
        this.isHome = route.name === 'Home';
        this.items.push({
            title: 'خانه',
            target: '/',
        })
        this.items.push({
            title: this.getTitle(this.$t(route.meta['title'])),
            target: route.path,
        })
    },
    methods: {
        getTitle(titleKey) {
            return this.$t(titleKey);
        }
    }

}
</script>

<style scoped>

</style>