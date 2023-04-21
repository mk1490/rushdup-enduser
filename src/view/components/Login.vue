<template>
    <v-container class="container--fluid area" style="height: 100%;">
        <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <v-container fluid class="container--fluid fill-height">
            <v-layout align-center justify-center>
                <div class="d-inline-block justify-center">
                    <h2 class="d-flex white--text justify-center">{{ 'ورود به حساب کاربری' }}</h2>
                    <div class="d-flex justify-center mt-8">
                        <v-card class="elevation-3" width="380">
                            <div class="justify-center text-center text-wrap px-4 py-3">
                                <span>{{
                                    'برای ورود به حساب کاربری، نام کاربری و کلمۀ عبور خود را وارد نمایید.'
                                    }}</span>
                            </div>
                            <v-card-text>
                                <v-form
                                        dir="ltr"
                                        ref="form"
                                        lazy-validation>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field
                                                    class="text-center"
                                                    hide-details="auto"
                                                    dense
                                                    maxlength="50"
                                                    outlined
                                                    v-model="model.username"
                                                    :label="$t('authentication.username')"
                                            />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field
                                                    class="text-center"
                                                    dense
                                                    maxlength="50"
                                                    outlined
                                                    hide-details="auto"
                                                    v-model="model.password"
                                                    :label="$t('authentication.password')"
                                            />
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <div class="d-inline-block flex-fill">
                                    <v-btn
                                            @click="login"
                                            color="green"
                                            class="col-12 white--text"
                                            block>
                                        {{ $t('authentication.login') }}
                                    </v-btn>
                                </div>
                            </v-card-actions>
                        </v-card>
                    </div>

                </div>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: "Login",
    async created() {
        if (await (this.$store.dispatch('isAuth'))) {
            await this.$router.push('/');
        }
    },
    data() {
        return {
            model: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        async login() {
            const payload = {...this.model};
            payload.sessionId = this.$store.getters.sessionId;
            const [err, data] = await this.to(this.http.post(`${this.serverAddress}/auth/login`, payload));
            if (!err) {
                localStorage.setItem('Authorization', data.access_token);
                await this.$store.dispatch('setLoginState', true);
                await this.$router.push('/');
            }
        }
    }
}
</script>

<style scoped>
span {
    font-family: "IRAN Sans";
    font-size: 1.3rem;
}
</style>
