<template>
    <ul class=" filter-radio-list show-display-list show-items-count-on">
        <li
                @click="selectItem(item)"
                v-for="item in tempItems"
                :class="!!item.selected ? 'chosen': '' +'disabled'">
            <a>
                {{ item.title }}
                <span class="count">
                    {{ !!item.count ? '(' + item.count + ')' : '' }}
                </span>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "RadioButtons",
    props: {
        items: Array,
        selectedItem: Object
    },
    data() {
        return {
            tempItems: [],
        }
    },
    mounted() {
        this.tempItems = this.items;
        if (!this.selectedItem) {
            this.tempItems[0].selected = true;
        }
    },
    methods: {
        selectItem(item) {
            this.tempItems.map(f => {
                if (item !== f) {
                    f.selected = false;
                } else {
                    f.selected = true;
                }
            })
            this.tempItems = Object.assign([], this.tempItems)

        }
    }
}
</script>

<style scoped>

</style>