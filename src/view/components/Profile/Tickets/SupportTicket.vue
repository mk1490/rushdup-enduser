﻿<template>
    <v-container>
        <v-card
                color="transparent"
                :flat="true">
            <template v-slot:title>
                <div class="v-row mb-3">
                    <div class="v-col">
                        تیکت پشتیبانی
                    </div>
                    <div class="v-col-auto">
                        <v-btn
                                color="primary"
                                to="/supportTicket/registerNewTicket">
                            ثبت تیکت جدید
                        </v-btn>
                    </div>
                </div>
            </template>
            <template v-slot:text>
                <v-data-table
                        dir="rtl"
                        :headers="table.headers"
                        :items="table.contents"
                        :items-per-page="5"
                        class="elevation-1">
                    <template v-slot:item.row="{ item }">
                        <div>{{ table.contents.indexOf(item.raw) + 1 }}</div>
                    </template>
                    <template v-slot:item.ticketStatus="{ item, index }">
                        <v-chip
                                class="white--text"
                                :color="getChipsStatusColor(item)"> {{ getChipsStatusTitle(item) }}
                        </v-chip>
                    </template>
                    <template v-slot:item.creationTime="{ item }">
                                <span>
                                  {{ getPersianTime(item.raw.creationTime) }}
                                </span>
                    </template>

                    <template v-slot:item.actions="{ item }">
                        <v-btn
                                :to="`/supportTicket/details/${item.key}`"
                                link
                                color="primary">
                            جزئیات
                        </v-btn>
                    </template>

                </v-data-table>
            </template>
        </v-card>

    </v-container>
</template>

<script>

import {VDataTable} from 'vuetify/labs/VDataTable'

export default {
    name: "SupportTicket",
    components: {
        VDataTable
    },
    async created() {
        const [err, data] = await this.to(this.http.get(`/ticket/list`));
        if (!err) {
            this.table.contents = data;
        }
    },
    methods: {
        getChipsStatusTitle(item) {
            switch (item.raw.ticketStatus) {
                case 0:
                case 1:
                    return 'در انتظار پاسخ پشتیبان';
                case 2:
                    return 'پاسخ داده شده';
            }
        },
        getChipsStatusColor(item) {
            switch (item.raw.ticketStatus) {
                case 0:
                case 1:
                    return 'orange';
                case 2:
                    return 'success'
            }
        },
        async itemClick(item) {
            await this.$router.push('/course')
        }

    },
    data() {
        return {
            table: {
                headers: [
                    {title: '#', key: 'row', sortable: false, align: 'center',},
                    {title: 'موضوع', key: 'subject', sortable: true, align: 'center'},
                    {title: 'وضعیت', key: 'ticketStatus', sortable: true, align: 'center'},
                    {title: 'تاریخ ثبت', key: 'creationTime', sortable: true, align: 'center'},
                    {title: 'عملیات', key: 'actions', sortable: false, align: 'center'},
                ],
                contents: [],
            }
        }
    },
}
</script>

<style scoped>

</style>