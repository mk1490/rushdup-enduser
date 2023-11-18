<template>
    <v-list>
        <v-list-item
                :to="`/course-list/${item.slug}`"
                v-for="item in categoryItems">

            <v-menu
                    id="menu-level-two"
                    top="60"
                    style="top:60px; right: 560px"
                    :open-on-hover="true"
                    location="left">
                <template v-slot:activator="{props}">
                    <a
                            v-bind="props">
                        {{ item.title }}
                    </a>
                </template>
                <v-list>
                    <v-list-item
                            :to="`/course-list/${item.slug}`"
                            v-for="item in item.children">
                        <v-menu
                                id="two-level-menu"
                                width="250"
                                :open-on-hover="true"
                                location="left">
                            <template v-slot:activator="{props}">
                                <a
                                        v-bind="props">
                                    {{ item.title }}
                                </a>
                            </template>
                            <v-list>
                                <v-list-item
                                        :to="`/course-list/${item.slug}`"
                                        v-for="item in item.children">
                                    {{ item.title }}
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-list-item>
    </v-list>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "ListItems",
    computed:{
        ...mapGetters(['categoryItems',])
    }
}
</script>

<style scoped>

</style>