<template>
    <div class="comment-form-wrap">
        <div id="respond" class="comment-respond">
            <h3 id="reply-title" class="comment-reply-title">دیدگاه خود را اینجا قرار دهید <small>
                <a rel="nofollow"
                   id="cancel-comment-reply-link"
                   style="display:none;">لغو
                    پاسخ</a></small></h3>


            <div class="comment-form">
                <p class="logged-in-as">
                        <span
                                v-if="responseMode"
                                class="required-field-message">
                            پاسخ به {{ responserTitle }}
                        </span>
                    <small v-if="responseMode">
                        <a @click="$emit('onCancelResponse')">
                            لغو پاسخ
                        </a>
                    </small>
                </p>
                <div class="row">
                    <div class="col-md-12 comment-form-comment">
                            <textarea
                                    v-model="content"
                                    id="comment"
                                    placeholder="نظر شما">
                            </textarea>
                    </div>
                </div>
            </div>
            <v-btn
                    @click="$emit('onSubmit', content)"
                    class="mt-2"
                    color="primary"
                    width="130"
                    height="50">
                ارسال
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommentFormArea",
    emits: ['onSubmit', 'onCancelResponse'],
    props: {
        responseMode: Boolean,
        responserTitle: String,
    },
    data() {
        return {
            content: null,
        }
    }
}
</script>

<style scoped>

</style>