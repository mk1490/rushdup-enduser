<template>
    <div class="form-group">
        <label for="ip_reg_lastname" class="form-label">{{ title }}</label>

        <v-text-field
                v-if="type !== 'password'"
                :type="type" class="form-control form-input"
                :placeholder="placeHolder"/>
        <div
                v-if="type === 'password'"
                :class="'form-input-group form-input-password ' + (passwordVisible? 'show-pw': '')">
            <input :type="passwordVisible? 'text': 'password'"
                   class="form-control form-input"
                   :placeholder="placeHolder">
            <button
                    @click="passwordVisible =!passwordVisible"
                    type="button" class="btn-pw-toggle">
            </button>
        </div>

    </div>
</template>

<script>
export default {
    name: "TextField",
    created() {
        console.log(this.type)
    },
    props: {
        title: String,
        placeHolder: String,
        type: {
            type: String,
            default: 'text'
        },
    },
    data() {
        return {
            passwordVisible: false,
        }
    }
}
</script>

<style scoped>

</style>