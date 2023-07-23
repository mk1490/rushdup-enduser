<template>
    <v-card>
        <v-responsive :aspect-ratio="16/9">
            <video
                    style="width: 100%; height: 100%"
                    ref="videoPlayer" class="video-js">
            </video>
        </v-responsive>
    </v-card>


</template>

<script>
import videojs from 'video.js';

export default {
    name: "Videoplayer",
    data() {
        return {
            player: null
        }
    },
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, this.options, () => {
            this.player.log('onPlayerReady', this);
        });
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose();
        }
    }
}
</script>

<style scoped>

</style>