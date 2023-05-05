<template>
    <div class="archive-pagination-wrap ">
        <ul class="page-pagination">
            <li><span aria-current="page" class="page-numbers current">1</span></li>
            <li><a class="page-numbers" href="page/2/index.html">2</a></li>
            <li><span class="page-numbers dots">&hellip;</span></li>
            <li><a class="page-numbers" href="page/7/index.html">7</a></li>
            <li><a class="next page-numbers" href="page/2/index.html"><span
                    class="far fa-angle-double-right"></span></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AppPagination"
}
</script>

<style scoped>

</style>