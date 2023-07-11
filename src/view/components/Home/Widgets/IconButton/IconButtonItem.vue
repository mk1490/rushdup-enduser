<template>
    <div
            class="grid-item animate col-sm-12 col-md-3 col-lg-3">
        <a class="edumall-box"
           :href="url">
            <div
                    v-if="!!image"
                    class="category-icon">
                <img
                        height="80"
                        width="80"
                        :src="image"
                        alt=""/>
            </div>
            <div class="category-info">
                <h6 class="category-name">{{ title }}</h6>
                <div
                        v-if="description"
                        class="category-description">
                    {{ description }}
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: "IconButtonItem",
    props: {
        title: String,
        description: String,
        url: String,
        image: String,

    }
}
</script>

<style scoped>

</style>