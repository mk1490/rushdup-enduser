<template>

    <div id="comments" class="comments-area">
        <div class="comments-wrap">
            <h2 class="comments-title">
                نظر <span class="count">({{ commentItems.length }})</span></h2>
            <div class="comment-list-wrap">

                <ol class="comment-list">
                    <li
                            v-for="item in commentItems"
                            class="comment byuser comment-author-admin bypostauthor even thread-even depth-1">
                        <div id="comment-10" class="comment-wrap">
                            <div class="comment-author vcard">
                                <img
                                        src="@/assets/images/avatar.png"
                                        class="avatar avatar-70 photo" height="70" width="70" loading="lazy"
                                        decoding="async"></div>
                            <div class="comment-content">
                                <div class="meta">
                                    <h6 class="fn">
                                        <a class="url"
                                           rel="ugc">
                                            {{ item.family + ' ' + item.name }}
                                        </a>
                                    </h6>
                                </div>
                                <div class="comment-text">
                                    <p>
                                        {{ item.content }}
                                    </p>
                                </div>

                                <div class="comment-footer">
                                    <div class="comment-datetime">
                                        {{ getPersianTime(item.commentTime) }}
                                    </div>

                                    <div class="comment-actions">
                                        <a
                                                href="javascript:void(0)"
                                                @click="handleResponse(item)"
                                                class="comment-reply-link"
                                                aria-label="پاسخ به مدیرسایت">
                                            پاسخ
                                        </a>
                                        <a
                                                v-if="false"
                                                class="comment-edit-link"
                                                href="javascript:void(0)">ویرایش</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <comment-form-area
                                v-if="responseToCommentId"
                                :response-mode="true"
                                :responser-title="item.family + ' ' + item.name "
                                @on-cancel-response="responseToCommentId = null"
                        />
                    </li>

                </ol>


            </div>
        </div>

        <comment-form-area
                v-if="!responseToCommentId"
                :response-mode="false"
        />

    </div>
  <!--    <div class="tutor-single-course-segment tutor-course-reviews-wrap">-->
  <!--        <div class="tutor-course-review-form-wrap">-->
  <!--            <h4 class="tutor-segment-title">یک نظر بنویسید</h4>-->

  <!--            <div class="tm-button-wrapper">-->
  <!--                <a-->
  <!--                    class="tm-button style-flat tm-button-nm btn-write-course-review open-popup-login"-->
  <!--                    @click="showCommentModal()">-->
  <!--                <div class="button-content-wrapper">-->


  <!--                    <span-->
  <!--                            @click="showCommentModal()"-->
  <!--                            class="button-text">یک نظر بنویسید</span>-->

  <!--                </div>-->
  <!--            </a></div>-->
  <!--        </div>-->
  <!--    </div>-->
</template>

<script>
import CommentModal from "@/view/components/Course/Course_Details/Widget/Comment/CommentModal.vue";
import CommentFormArea from "@/view/components/Course/Course_Details/Widget/Comment/CommentFormArea.vue";

export default {
    name: "Comment",
    components: {CommentFormArea, CommentModal},
    props: {
        commentItems: Array,
    },
    data() {
        return {
            model: {
                content: null,
            },
            responseToCommentId: null,
        }
    },
    emits: ['showModalClick'],
    methods: {
        showCommentModal() {
            this.$emit('showModalClick')
        },
        handleResponse(item) {
            this.responseToCommentId = item.commentId;
        },
        async sendComment() {
            const [err, data] = await this.to(this.http.post(`/comment/${this.courseId}`, this.model));
            if (!err) {

            }
        }
    }
}
</script>

<style scoped>

</style>