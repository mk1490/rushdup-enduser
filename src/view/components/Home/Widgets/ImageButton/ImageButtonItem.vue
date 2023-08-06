<template>
    <a class="edumall-box link-secret"
       href="https://dana-team.com/products/edumall/course-category/marketing/">
        <div class="edumall-image">
            <img decoding="async"
                 src="https://dana-team.com/products/edumall/wp-content/uploads/2020/09/marketing-1-260x320.jpg"
                 alt="marketing" width="260">
            <div class="category-info">
                <h6 class="category-name">
                    {{ title }}
                </h6>
            </div>
        </div>
    </a>
</template>

<script>


export default {
    name: "ImageButtonItem",
    props: {
        title: String,
    }
}
</script>

<style scoped>

</style>