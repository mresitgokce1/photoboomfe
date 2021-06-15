<template>
    <div class="container">
        <h3 class="text-center mt-5">{{photo.title}}</h3>
        <p class="text-center mt-5">Tags: {{photo.tags}}</p>
        <p class="text-center mt-5">Photo URL:{{photo.photos}}</p>

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

