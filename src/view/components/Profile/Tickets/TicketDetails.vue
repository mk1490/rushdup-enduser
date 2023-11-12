<template>
    <v-container style="height: 100%!important;">
        <v-responsive class="overflow-y-hidden fill-height">
            <v-card class="fill-height">
                <v-card-title>

                    <div class="d-inline-flex">

                        <div class="align-self-center">
                            <app-back-button back-route="../"/>
                        </div>

                        <div class="mr-3">
                            {{ ticketTitle }}
                            <v-spacer/>
                            <span class="ticket-time">{{ getPersianTime(ticketCreationTime) }}</span>
                        </div>
                    </div>
                </v-card-title>
                <v-card-text
                        id="scrollContainer"
                        ref="scrollContainer"
                        style="height: calc(100vh - 480px)"
                        class="flex-grow-1 overflow-y-auto">

                    <template v-for="item in ticketItems">
                        <div :class="{'d-flex flex-row-reverse': !item.me}">
                            <v-card
                                    max-width="400"
                                    dark
                                    class="pa-4 mb-2"
                                    :class="{'white--text': item.me }"
                                    style="white-space: break-spaces;"
                                    :color="item.me ? 'green': '#F5F9FB'">

                                <v-card-text>
                                    <div class="d-block" :style="'color:' +item.me? 'white' : 'black'">
                                        <p class="message__content">
                                            {{ item.content }}
                                        </p>
                                    </div>
                                    <div class="d-block">

                                    </div>
                                </v-card-text>
                                <v-card-actions>
                                    <a
                                            v-if="item.ticketAttachmentUrl"
                                            class="ticket-attachment ml-5"
                                            href="javascript:void(0)"
                                            @click="downloadAttachment(item)">دانلود پیوست</a>

                                    <div
                                        v-if="item.userAvatar || item.userName || item.userFamily"
                                        class="text--profile">
                                        <v-avatar
                                            v-if="item.userAvatar"
                                            size="32">
                                            <v-img
                                                :src="item.userAvatar? serverAddress + item.userAvatar : null"
                                            />
                                        </v-avatar>
                                        <span class="text--username">{{ item.userName + ' ' + item.userFamily }}</span>

                                    </div>
                                    <v-spacer/>
                                    <span :style="'color:' +item.me? 'white' : 'black'">{{
                                        getPersianTime(item.creationTime, 'HH:mm')
                                        }}</span>
                                </v-card-actions>
                            </v-card>
                        </div>
                    </template>


                </v-card-text>
                <v-card-text class="flex-shrink-1">
                    <v-form
                            ref="form"
                            lazy-validation>
                        <div class="v-row">
                            <div class="v-col-md-12">
                                <v-textarea
                                        no-resize
                                        v-model="model.content"
                                        :rules="rules.content"
                                        outlined
                                        hide-details
                                        dense
                                        placeholder="پیام خود را بنویسید...">
                                </v-textarea>
                            </div>

                            <div class="v-col-md-12">
                                <attachment-for-upload
                                        :file="selectedFile"
                                        @onDeleteFile="selectedFile = null"
                                />
                            </div>

                            <div class="v-col-md-12 mt-2">
                                <div class="d-inline-flex">
                                    <v-btn
                                            @click="sendMessage"
                                            class="white--text"
                                            color="primary">
                                        ارسال پیام
                                    </v-btn>
                                    <v-btn
                                            class="mr-2"
                                            @click="openFilePicker()"
                                            variant="text"
                                            color="primary">
                                        افزودن پیوست
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-responsive>
        <hidden-file-picker
                ref="filePicker"
                @onFileSelected="fileSelection"
        />
    </v-container>
</template>

<script>
import AppBackButton from "@/view/widget/AppBackButton.vue";
import AttachmentForUpload from "@/view/components/Profile/Tickets/Widgets/AttachmentForUpload.vue";
import HiddenFilePicker from "@/view/widget/HiddenFilePicker.vue";

export default {
    name: "TicketDetails",
    components: {HiddenFilePicker, AttachmentForUpload, AppBackButton},
    async mounted() {
        this.ticketId = this.$route.params.ticketId;
        const [err, data] = await this.to(this.http.get(`ticket/ticket-details/${this.ticketId}`));
        if (!err) {
            this.ticketTitle = data.subject;
            this.ticketItems = data.ticketItems;
            this.ticketCreationTime = data.creationTime;
        }
        // this.$refs.form.oninvalid = ()=>{
        //     console.log("INvalid")
        // }
    },
    data() {
        return {
            ticketId: null,
            ticketTitle: null,
            ticketCreationTime: null,
            ticketItems: [],
            model: {
                content: null,
            },
            rules: {
                content: [v => !!v || this.$t('errors.requiredThisField')],
            },
            selectedFile: null,
        }
    },
    methods: {
        async sendMessage() {
            if (!this.$refs.form.isValid) {
                this.$toast.warning('پیام نمی‌تواند خالی باشد.')
                return;
            }
            const fd = new FormData();
            fd.append('content', this.model.content);
            fd.append('attachment', this.selectedFile);
            const [err, data] = await this.to(this.http.post(`/ticket/send-message/${this.ticketId}`, fd));
            if (!err) {
                this.ticketItems.push({
                    content: data.content,
                    creationTime: data.creationTime,
                    me: true,
                });
                this.model.content = null;
                let container = document.getElementById('scrollContainer');
                container.scrollTo(0, container.scrollHeight + 1000)
            }
        },
        fileSelection(file) {
            this.selectedFile = file;
        },
        openFilePicker() {
            this.$refs.filePicker.openFilePicker()
        },
        downloadAttachment(item) {
            const url = this.serverAddress + item.ticketAttachmentUrl;
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.target = '_blank';
            a.download = '';
            document.body.appendChild(a);
            a.click();
        }
    },
    watch: {}
}
</script>

<style scoped>


.message__content {
    font-family: "IRAN Sans" !important;
    font-size: 1.2rem !important;
}

.ticket-attachment {
    color: white;
}

.ticket-time {
    font-size: 0.8rem !important;
}


.text--profile {
    align-items: center;
    display: inline-flex;
    margin-left: 16px;
}

.text--username {
    font-family: "IRAN Sans";
    margin-right: 5px!important;
}
</style>