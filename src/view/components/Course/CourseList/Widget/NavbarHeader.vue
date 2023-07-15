<template>
    <div class="archive-filter-bar archive-filter-bar-right col-md-6">
        <div class="inner">
            <div class="archive-layout-switcher">
                <div class="archive-layout-switcher-label heading">مشاهده</div>
                <label :class="`switcher-item grid ${viewSelectionType == 1 ? 'selected' : ''}`"
                       for="switcher-grid">
                    <input
                            @click="$emit('onSelection',1)"
                            id="switcher-grid"
                            type="radio"
                            name="layout"
                            value="grid">
                </label>


                <label :class="`switcher-item list ${viewSelectionType == 2 ? 'selected' : ''}`"
                       for="switcher-list">
                    <input
                            @click="$emit('onSelection',2)"
                            id="switcher-list"
                            type="radio"
                            name="layout"
                            value="list"
                            checked="checked"
                    >
                </label>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavbarHeader",
    emits: ['onSelection'],
    props: {
        viewSelectionType: Number,
    }
}
</script>

<style scoped>

</style>