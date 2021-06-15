<template>
<div class="container">
    <h3 class="text-center mt-5">My Photos</h3>

    <div class="row" v-if="photos.length>0">

      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0" v-for="photo in photos" v-bind:key="photo">
          <router-link :to="/detailphoto/+ photo.id"><img v-bind:src="getImageUrl()+photo.photos" class="w-100 shadow-1-strong rounded mb-4"></router-link>
      </div>
    
    </div>

    <div class="row" v-if="photos.length==0">
        <p class="text-center mt-5">You don't have any photos yet ;(</p>
    </div>    

    <p class="text-center mt-5"><router-link to="/addphoto">Add Photo</router-link></p>

</div>
</template>


<script>
import axios from "axios"
export default {
  name: 'Myphotos',
  data(){
    return {
      photos : []
    }
  },
  methods : {
    getImageUrl()
    {
      return "http://localhost:34851/images/"
    },
    get(){
      axios.get("http://localhost:34851/api/photos")
        .then(response => {
          this.photos = response.data
        })
    }
  },
  mounted()
  {
      this.get()
  }
}
</script>



