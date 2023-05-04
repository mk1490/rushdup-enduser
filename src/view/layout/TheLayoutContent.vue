<template>
    <v-content>
        <transition
                name="fade-transform"
                mode="out-in">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </transition>
    </v-content>
</template>

<script>
export default {
    name: 'TheLayoutContent',
    data: () => ({}),
};
</script>

<style scoped>
.container--fluid {
    padding-left: 0px !important;
    padding-right: 0px !important;
}

</style>
