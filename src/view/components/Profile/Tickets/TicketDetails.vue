<template>
    <v-container style="height: 100%!important;">
        <v-responsive class="overflow-y-hidden fill-height">
            <v-card class="fill-height">
                <v-card-title>
                    {{ ticketTitle }}
                    <v-spacer/>
                    <span>{{
                        getPersianTime(ticketCreationTime)
                        }}</span>
                </v-card-title>
                <v-card-text
                        id="scrollContainer"
                        ref="scrollContainer"
                        style="height: calc(100vh - 400px)"
                        class="flex-grow-1 overflow-y-auto">

                    <template v-for="item in ticketItems">
                        <div :class="{'d-flex flex-row-reverse': item.me}">
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
                                    <v-spacer/>
                                    <span :style="'color:' +item.me? 'white' : 'black'">
                    {{ getPersianTime(item.creationTime, 'HH:mm') }}
                  </span>
                                </v-card-actions>
                            </v-card>
                        </div>
                    </template>


                </v-card-text>
                <v-card-text class="flex-shrink-1">
                    <v-form
                            ref="form"
                            lazy-validation>
                        <div class="row">
                            <div class="col-md-12">
                                <v-textarea
                                        no-resize
                                        v-model="model.content"
                                        outlined
                                        hide-details
                                        dense
                                        placeholder="پیام خود را بنویسید...">
                                </v-textarea>
                            </div>
                            <div class="col-md-12 mt-2">
                                <div>
                                    <v-btn
                                            @click="sendMessage"
                                            class="white--text"
                                            color="primary">
                                        ارسال پیام
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-responsive>
    </v-container>
</template>

<script>
export default {
    name: "TicketDetails",
    async mounted() {
        this.ticketId = this.$route.params.ticketId;
        const [err, data] = await this.to(this.http.get(`ticket/ticket-details/${this.ticketId}`));
        if (!err) {
            this.ticketTitle = data.subject;
            this.ticketItems = data.ticketItems;
            this.ticketCreationTime = data.creationTime;
        }
    },
    data() {
        return {
            ticketId: null,
            ticketTitle: null,
            ticketCreationTime: null,
            ticketItems: [],
            model: {
                content: null,
            }
        }
    },
    methods: {
        async sendMessage() {
            const fd = new FormData();
            fd.append('content', this.model.content);
            fd.append('attachment', null);
            const [err, data] = await this.to(this.http.post(`ticket/send-message/${this.ticketId}`, fd));
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
        }
    }
}
</script>

<style scoped>


.message__content {
    font-family: "IRAN Sans" !important;
    font-size: 1.2rem !important;
}
</style>