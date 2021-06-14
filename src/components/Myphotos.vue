<template>
<div class="container">
    <h3 class="text-center mt-5">My Photos</h3>

    <div v-if="photos.length>0">
    <ul class="list-group">
      <li class="list-group-item" v-for="photo in photos" v-bind:key="photo">
        <strong>photo url: <router-link :to="/detailphoto/+ photo.id">{{photo.photos}}</router-link></strong>
        <p></p>
      </li>
    </ul>
    </div>

    <div v-if="photos.length==0">
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



