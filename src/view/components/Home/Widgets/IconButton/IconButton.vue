<template>
    <div class="elementor-row">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8401348">
            <div class="elementor-column-wrap elementor-element-populated">
                <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-8cc2b06 edumall-modern-heading-style-01 elementor-widget elementor-widget-tm-heading animated edumallFadeInUp">
                        <div class="elementor-widget-container">
                            <div class="tm-modern-heading">
                                <div class="heading-primary-wrap">
                                    <h3 class="heading-primary elementor-heading-title">
                                        {{ title }}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-0001 elementor-widget elementor-widget-tm-course-category-cards animated edumallFadeInUp">
                        <div class="elementor-widget-container">
                            <div class="edumall-grid-wrapper edumall-course-category-cards style-02">
                                <div class="loaded row">
                                    <icon-button-item
                                            v-for="item in finalItems"
                                            :url="item.url"
                                            :image="item.image"
                                            :title="item.title">
                                    </icon-button-item>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconButtonItem from "@/view/components/Home/Widgets/IconButton/IconButtonItem.vue";

export default {
    name: "IconButton",
    components: {IconButtonItem},
    props: {
        title: String,
        items: Array,
    },
    data() {
        return {
            finalItems: [],
        }
    },
    created() {
        this.finalItems = this.items.map(f => {
            if (!!f.image) {
                f.image = this.getImageUrl(f.image);
            }
            return f;
        })
    }
}
</script>
