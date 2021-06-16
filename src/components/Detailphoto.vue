<template>
    <div class="container">
        <h3 class="text-center mt-5">{{photo.title}}</h3>
        <p class="text-center mt-1"><b>Tags:</b> {{photo.tags}}</p>
        <p class="text-center mt-1"><img v-bind:src="getImageUrl()+photo.photos" class="w-100 shadow-1-strong rounded mb-4"></p>

        <div >
            <button @click="remove" class="form-control mt-3 btn btn-danger">Delete photo</button> 
        </div>
    </div>
</template>


<script>
import axios from "axios"

export default {
  name: 'Detailphoto',
  data(){
    return {
      photo : 'asd',
      id: this.$route.params.id
    }
  },
  methods : {
    get(){
          axios.get("http://localhost:34851/api/photos/"+this.id)
          .then(response => {
          this.photo = response.data
        })
    },
    getImageUrl()
    {
      return "http://localhost:34851/images/"
    },
    remove()
    {
          axios.delete("http://localhost:34851/api/photos/"+this.id)
          .then(response => {
          console.log(response)
          this.$router.push({ path: '/myphotos' })
      })
    }
    },
    
    mounted()
    {
        this.get()
    },
    
  }
</script>

