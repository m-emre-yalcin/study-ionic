<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card v-if="tmpImageUrl != null">
        <ion-img :src="tmpImageUrl" />        
      </ion-card>
      <ion-button @click="takePicture()">Add Photo</ion-button>
      <ion-button v-if="tmpImageUrl != null" @click="tmpImageUrl = null" color="danger">Remove</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonCard, IonImg } from '@ionic/vue';

import { Camera } from '@ionic-native/camera'

export default defineComponent({
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonCard, IonImg
  },
  data(){
    return {
      deviceready: false,
      tmpImageUrl: null
    }
  },
  methods: {
    async takePicture(){
      if(this.deviceready){
        this.tmpImageUrl = await Camera.getPicture({
          destinationType: Camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG
        })
      }
    }
  },
  mounted(){
    document.addEventListener("deviceready", () => {
      this.deviceready = true
    });
  }
})
</script>