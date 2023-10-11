<template>
    <v-container>

        <div class="d-inline-flex flex-wrap">
            <grid-button-item/>
        </div>
    </v-container>

</template>

<script>
import {mapGetters} from "vuex";
import FileUploader from "@/view/widget/FileUploader.vue";
import GridButtonItem from "@/view/components/Home/Widgets/GridButton/GridButtonItem.vue";

export default {
    name: "Test",
    components: {GridButtonItem, FileUploader},
    computed: {
        ...mapGetters(['cartItems'])
    },
    data() {
        return {
            options: {
                height: 500,
                width: 800,
                sources: []
            }
        }
    },
    created() {

    }
}
</script>
<style scoped>
.r1_iframe_embed {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    padding-top: 56.25%;
}

.r1_iframe_embed iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}</style>