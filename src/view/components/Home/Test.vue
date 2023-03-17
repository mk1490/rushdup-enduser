<template>
  <v-container>
<!--    <div class="r1_iframe_embed">-->
<!--      <iframe-->
<!--          src="https://player.arvancloud.ir/index.html?config=https://matink1490.arvanvod.ir/LgZYRMK5NB/oXZyE7WQPe/origin_config.json&skin=shaka"-->
<!--          style="border:0 #ffffff none;" name="ForBiggerFun" frameborder="0"-->
<!--          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"-->
<!--          webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>-->
<!--    </div>-->


    <button id="start-camera">Start Camera</button>
    <video id="video" width="320" height="240" autoplay></video>
    <button id="click-photo">Click Photo</button>
    <canvas id="canvas" width="320" height="240"></canvas>
    
  </v-container>

</template>

<script>
import {mapGetters} from "vuex";
import FileUploader from "@/view/widget/FileUploader.vue";

export default {
  name: "Test",
  components: {FileUploader},
  computed: {
    ...mapGetters(['cartItems'])
  },
  data() {
    return {
      options: {
        height: 500,
        width: 800,
        sources: [
          {
            type: 'video/mp4',
            src: 'https://matink1490.arvanvod.ir/LgZYRMK5NB/oXZyE7WQPe/h_,144_200,240_400,360_800,480_1500,720_1525,k.mp4.list/manifest.mpd'
          }
        ]
      }
    }
  },
  created() {

    let camera_button = document.querySelector("#start-camera");
    let video = document.querySelector("#video");
    let click_button = document.querySelector("#click-photo");
    let canvas = document.querySelector("#canvas");

    camera_button.addEventListener('click', async function() {
      let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      video.srcObject = stream;
    });

    click_button.addEventListener('click', function() {
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      let image_data_url = canvas.toDataURL('image/jpeg');

      // data url of the image
      console.log(image_data_url);
    });
  }
}
</script>
<style scoped>
.r1_iframe_embed {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  padding-top: 56.25%;
}

.r1_iframe_embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}</style>