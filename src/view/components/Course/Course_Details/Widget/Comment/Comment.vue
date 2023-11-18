<template>

    <div id="comments" class="comments-area">
        <div class="comments-wrap">
            <h2 class="comments-title">
                نظر <span class="count">({{commentItems.length}})</span></h2>
            <div class="comment-list-wrap">

                <ol class="comment-list">
                    <li
                            v-for="item in commentItems"
                            class="comment byuser comment-author-admin bypostauthor even thread-even depth-1"
                            id="li-comment-10">
                        <div id="comment-10" class="comment-wrap">
                            <div class="comment-author vcard">
                                <img alt=""
                                     src="@/assets/images/avatar.png"
                                     class="avatar avatar-70 photo" height="70" width="70" loading="lazy"
                                     decoding="async"></div>
                            <div class="comment-content">
                                <div class="meta">
                                    <h6 class="fn">
                                        <a class="url"
                                           rel="ugc">
                                            {{item.family + ' ' + item.name}}
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
                                        <a rel="nofollow" class="comment-reply-link"
                                           href="http://localhost:9090/edumall/how-working-from-home-is-transforming-learning/?replytocom=10#respond"
                                           data-commentid="10" data-postid="92" data-belowelement="comment-10"
                                           data-respondelement="respond" data-replyto="پاسخ به مدیرسایت"
                                           aria-label="پاسخ به مدیرسایت">پاسخ</a> <a class="comment-edit-link"
                                                                                     href="http://localhost:9090/edumall/wp-admin/comment.php?action=editcomment&amp;c=10">ویرایش</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>


            </div>
        </div>

        <div class="comment-form-wrap">
            <div id="respond" class="comment-respond">
                <h3 id="reply-title" class="comment-reply-title">دیدگاه خود را اینجا قرار دهید <small><a rel="nofollow"
                                                                                                         id="cancel-comment-reply-link"
                                                                                                         href="/edumall/how-working-from-home-is-transforming-learning/#respond"
                                                                                                         style="display:none;">لغو
                    پاسخ</a></small></h3>
                <form action="http://localhost:9090/edumall/wp-comments-post.php" method="post" id="commentform"
                      class="comment-form" novalidate=""><p class="logged-in-as">به عنوان مدیرسایت وارد شده‌اید. <a
                        href="http://localhost:9090/edumall/members/admin/profile/edit/">نمایهٔ خود را ویرایش نمایید</a>.
                    <a href="http://localhost:9090/edumall/wp-login.php?action=logout&amp;redirect_to=http%3A%2F%2Flocalhost%3A9090%2Fedumall%2Fhow-working-from-home-is-transforming-learning%2F&amp;_wpnonce=606c650831"
                       data-no-instant="">بیرون رفتن؟</a> <span class="required-field-message">بخش‌های موردنیاز علامت‌گذاری شده‌اند <span
                            class="required">*</span></span></p>
                    <div class="row">
                        <div class="col-md-12 comment-form-comment"><textarea id="comment" placeholder="نظر شما"
                                                                              name="comment"
                                                                              aria-required="true"></textarea></div>
                    </div>
                    <p class="form-submit"><input name="submit" type="submit" id="submit" class="submit" value="ارسال">
                        <input type="hidden" name="comment_post_ID" value="92" id="comment_post_ID">
                        <input type="hidden" name="comment_parent" id="comment_parent" value="0">
                    </p><input type="hidden" id="_wp_unfiltered_html_comment_disabled"
                               name="_wp_unfiltered_html_comment" value="9c8c4a5bf5">
                </form>
            </div>
        </div>

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

export default {
    name: "Comment",
    components: {CommentModal},
    props: {
        commentItems: Array,
    },
    emits: ['showModalClick'],
    methods: {
        showCommentModal() {
            this.$emit('showModalClick')
        },
    }
}
</script>

<style scoped>

</style>