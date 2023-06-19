<template>
    <div id="edumall-wp-widget-course-categories-1"
         class="widget edumall-wp-widget-course-categories">
        <p class="widget-title heading">دسته های دوره</p>
        <ul class="course-categories">
            <li class="cat-item cat-item-156" v-for="item in items">
                <a :href="item.slug">{{ item.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Categories",
    props: {
        items: Array,
    }
}
</script>

<style scoped>

</style>