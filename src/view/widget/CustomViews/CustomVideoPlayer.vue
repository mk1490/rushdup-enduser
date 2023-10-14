<template>
    <v-responsive
            id="videoContainer"
            class="videoContainer"
            :aspect-ratio="16/9">
        <div
                @mouseleave="isMainArea = false"
                @mouseenter="isMainArea = true"
                ref="mainLayout"
                style="width: 100%; height: 100%;position: absolute!important;">

            <video
                    style="width: 100%; height: 100%"
                    controlslist="nodownload"
                    ref="videoPlayer" class="video-js">
            </video>
            <div
                    ref="playingArea"
                    class="d-flex align-center"
                    style="place-content: center; position:absolute; width: 100%; height: 100%">
                <div class="d-block">
                    <div class="d-flex">
                        <v-icon color="white"
                                size="48">
                            {{ icon }}
                        </v-icon>
                    </div>
                </div>
            </div>

            <div

                    class="d-flex fill-height full-width"
                    style="position: relative;">
                <div
                        ref="bottomLayout"
                        @mouseleave="isBottomArea = false"
                        @mouseenter="isBottomArea = true"
                        style="width:100%;position: absolute; bottom: 0%;background-color: rgba(0,0,0,0.4)">
                    <div
                            class="fill-height">
                        <div class="d-block">
                            <v-slider
                                    @update:modelValue="onSlide"
                                    v-model="sliderTickValue"
                                    dir="rtl"
                                    ref="slider"
                                    hide-details
                                    :reverse="true"
                                    density="default"
                                    tick-size="1"
                                    color="#1E1869"
                                    :max="maxSliderValue"
                                    track-size="2"
                                    thumb-size="10"
                            />
                        </div>
                        <div class="d-block">
                            <div class="d-flex">
                                <div class="ma-0">
                                    <v-btn
                                            @click="fullScreenVideo"
                                            color="white"
                                            variant="plain"
                                            icon="mdi-fullscreen">
                                    </v-btn>
                                </div>
                                <div
                                        dir="ltr"
                                        class="ma-auto d-flex full-width" style="justify-content: left">
                                    <v-btn
                                            @click="togglePlay"
                                            color="white"
                                            variant="plain"
                                            :icon="isPlaying ? 'mdi-pause': 'mdi-play'">
                                    </v-btn>

                                    <div

                                            class="d-inline-flex">
                                        <v-btn
                                                @click="toggleMute"
                                                color="white"
                                                variant="plain"
                                                :icon="volumeIcon">
                                        </v-btn>

                                        <div class="d-inline-flex">


                                            <div style="width: 70px">
                                                <v-slider
                                                        color="white"
                                                        v-model="volume"
                                                        @update:model-value="changeVolume"
                                                        :thumb-size="10"
                                                        hide-details
                                                        :reverse="true"
                                                        density="comfortable"
                                                />
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-responsive>
</template>

<script>
import videojs from "video.js";

export default {
    name: "CustomVideoPlayer",
    props: {
        src: String,
        type: String,
    },
    data() {
        return {
            videoJs: null,
            icon: 'mdi-play',
            isBottomArea: false,
            isMainArea: false,
            isPlaying: false,
            sliderTickValue: 50,
            maxSliderValue: 200,
            volume: 100,
            volumeInPercent: 100,
        }
    },
    mounted() {
        const self = this;
        if (this.src) {
            const videoJs = videojs(this.$refs.videoPlayer, {
                autoplay: false,
                controls: true,
                sources: [
                    {
                        src: self.src,
                        type: self.type
                    }
                ]
            }, () => {

            });
            videoJs.on('loadeddata', () => {
                console.log(videoJs.duration())
                this.maxSliderValue = videoJs.duration()
            })
            videoJs.on('progress', () => {
                console.log("ON PROGRESS")
            })
            videoJs.on('progress', () => {
                console.log("ON PROGRESS")
            })
            videoJs.on('seeking', () => {
                console.log("ON seeking")
            })
            videoJs.on('seeked', () => {
                console.log("ON seeked")
            })
            videoJs.on('timeupdate', (ms) => {
                this.sliderTickValue = videoJs.currentTime()
                console.log("ON timeupdate", videoJs.currentTime(), videoJs.duration())
            })
            this.videoJs = videoJs;
        }
        this.$refs.mainLayout.onclick = (event) => {
            if (this.isBottomArea) {
                event.preventDefault();
                return;
            }
            this.togglePlay();
        }
    },
    methods: {
        togglePlay() {
            if (!this.videoJs.paused()) {
                this.videoJs.pause()
                this.isPlaying = false;
                this.icon = 'mdi-play';
            } else {
                this.videoJs.play()
                this.isPlaying = true;
                this.icon = 'mdi-pause';
            }
        },
        fullScreenVideo() {
            const videoContainer = document.getElementById('videoContainer');
            const fullScreenElementId = document.fullscreenElement ? document.fullscreenElement.id : null;
            if (fullScreenElementId === videoContainer.id) {
                document.exitFullscreen().then()
                // TODO Change for firefox, IE and more browsers...
            } else {
                videoContainer.requestFullscreen()
            }
        },
        toggleMute() {
            if (this.volumeInPercent == 0) {
                this.volumeInPercent = 1;
                this.volume = this.volumeInPercent * 100;
            } else {
                this.volumeInPercent = 0;
                this.volume = 0;
            }
            this.videoJs.volume(this.volumeInPercent);
        },
        onSlide(value) {
            this.videoJs.currentTime(value)
        },
        changeVolume(value) {
            this.volumeInPercent = value / 100;
            this.videoJs.volume(this.volumeInPercent);
        }
    },
    watch: {
        'isMainArea': {
            handler(val) {
                console.log(val)
                if (!val) {
                    this.$refs.bottomLayout.classList.remove('show-bottom')
                    this.$refs.bottomLayout.classList.add('hide-bottom')
                    if (this.isPlaying) {
                        this.$refs.playingArea.classList.remove('show-bottom')
                        this.$refs.playingArea.classList.add('hide-bottom')
                    }
                } else {
                    this.$refs.bottomLayout.classList.remove('hide-bottom')
                    this.$refs.bottomLayout.classList.add('show-bottom')
                }
            }
        },
        'isPlaying': {
            handler(val) {
                if (val) {
                    this.$refs.playingArea.classList.remove('hide-bottom')
                    this.$refs.playingArea.classList.add('show-bottom')
                } else {
                    this.$refs.playingArea.classList.add('show-bottom')
                    this.$refs.playingArea.classList.remove('hide-bottom')
                }
            }
        }
    },
    computed: {
        volumeIcon: function () {

            if (this.volumeInPercent > 0.5) {
                return 'mdi-volume-high';
            } else if (this.volumeInPercent > 0.1) {
                return 'mdi-volume-medium';
            } else if (this.volumeInPercent >= 0.0) {
                return 'mdi-volume-off';
            }
        }
    }
}
</script>

<style scoped>
.hide-bottom {
    opacity: 0;
    transition: opacity 0.3s;
}

.show-bottom {
    opacity: 1;
    transition: opacity 0.3s;
}

.video-js {
    position: absolute;
}

</style>