<template>
    <div class="tutor-dashboard-content">
        <h3>دوره های ثبت نام شده</h3>
        <div class="tutor-dashboard-content-inner">
            <div class="tutor-dashboard-inline-links">
                <ul>
                    <li
                            v-for="item in tabs"
                            :class="`${item.active ? 'active': ''}`">
                        <router-link :to="item.to">
                            {{ item.title }}
                        </router-link>
                    </li>
                </ul>
            </div>


            <div v-if="tempViewItems.length == 0">
                <div class="dashboard-no-content-found">
                    شما در حال حاضر در هیچ دوره ای ثبت نام نکرده اید.
                </div>
            </div>
            <template
                    v-else>

                <div
                        v-for="item in tempViewItems"
                        class="dashboard-enrolled-courses edumall-animation-zoom-in">
                    <a href="https://dana-team.com/products/edumall/courses/%d8%af%d9%88%d8%b1%d9%87-%d8%a2%d9%85%d9%88%d8%b2%d8%b4-%d9%85%d9%84%d8%b2%d9%88%d9%85%d8%a7%d8%aa-adobe-illustrator-cc/"
                       class="edumall-box link-secret tutor-mycourse-wrap tutor-mycourse-203">
                        <div
                                v-if="item.cover"
                                class="edumall-image tutor-mycourse-thumbnail">
                            <img :src="getImageUrl(item.cover)"
                                 alt="zoom-meeting-thumbnail-06" width="480"></div>
                        <div class="tutor-mycourse-content">
                            <div class="tm-star-rating style-03 tutor-mycourse-rating"><span
                                    class="tm-star-full"></span><span class="tm-star-full"></span><span
                                    class="tm-star-full"></span><span class="tm-star-full"></span><span
                                    class="tm-star-empty"></span></div>
                            <h3 class="course-title">{{ item.title }}</h3>

                            <!--                            <div class="tutor-meta tutor-course-metadata">-->
                            <!--                                <ul class="course-meta">-->
                            <!--                                    <li class="course-meta-lesson-count">-->
                            <!--                                        <span class="meta-label">مجموع دروس:</span>-->
                            <!--                                        <span class="meta-value">0</span>-->
                            <!--                                    </li>-->
                            <!--                                    <li class="course-meta-completed-lessons">-->
                            <!--                                        <span class="meta-label">درس های تکمیل شده:</span>-->
                            <!--                                        <span class="meta-value">0/0</span>-->
                            <!--                                    </li>-->
                            <!--                                </ul>-->
                            <!--                            </div>-->
                        </div>

                    </a>
                </div>
            </template>

        </div>
    </div>
</template>

<script>
export default {
    name: "EnrolledCourses",
    data() {
        return {
            tabs: [],
            tempViewItems: [],
            items: [],
        }
    },
    async created() {
        this.tabs.push({
            title: 'همۀ دوره ها',
            to: '/enrolledCourses'
        });
        this.tabs.push({
            title: 'دوره های فعال',
            to: '/enrolledCourses/active-courses'
        });
        this.tabs.push({
            title: 'دوره های تکمیل شده',
            to: '/enrolledCourses/completed-courses'
        });
        this.checkRouteActiveTab();
        const [err, data] = await this.to(this.http.get(`/profile/courses`));
        if (!err) {
            this.items = data;
            this.tempViewItems = data;
        }
    },
    methods: {
        checkRouteActiveTab() {
            const index = this.tabs.findIndex(x => x.to == this.$route.path);
            this.changeView(index);
            this.tabs = this.tabs.map((f, i) => {
                if (index == i) {
                    f.active = true;
                } else {
                    f.active = false;
                }
                return f;
            })
        },
        changeView(index) {
            console.log(index)
            switch (index) {
                case 1: {
                    this.tempViewItems = this.items;
                    break;
                }
                case 2: {
                    this.tempViewItems = this.items.filter(x => x.status == 1);
                    break;
                }
                case 3: {
                    this.tempViewItems = this.items.filter(x => x.status == 0);
                    break;
                }
            }
        }
    },
    watch: {
        '$route': {
            handler(val) {
                this.checkRouteActiveTab();
            }
        }
    }

}
</script>

<style scoped>

</style>