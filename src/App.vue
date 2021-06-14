<template>
  <div class="container">
    <h3 class="text-center mt-5">PhotoBoom</h3>
    <p class="text-center mt-5">Wellcome to your fovorite website</p>
    <p class="text-center mt-5"><a href="/myphotos.html">My photos</a></p>
    

    <div class="d-flex justify-content-center mt-5 border border-dark p-5 shadow">
      <button @click="get" class="btn btn-primary">GET</button>
      <button @click="save" class="btn btn-success">SAVE</button>
      <button @click="remove" class="btn btn-danger">DELETE</button>
      
    </div>

    <ul class="list-group">
      <li class="list-group-item" v-for="photo in photos" v-bind:key="photo">
        <strong>id: {{photo.id}}</strong>
        <p>{{photo.title}}</p>
        <p>{{photo.tags}}</p>
        <p>{{photo.photos}}</p>
      </li>
    </ul>

  </div>
</template>


<script>
import axios from "axios"
export default {
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
    },
    save(){

      let photo = {
        Title:"Türkiye Gezisi",
        Tags:"Türkiye,gezi",
        Photos:"photourl"
      }

      axios.post("http://localhost:34851/api/photos", photo)
      .then(response => {
        console.log(response)
      })
    },
    remove()
    {
      let id = 5;

      axios.delete("http://localhost:34851/api/photos/"+id)
      .then(response => {
        console.log(response)
      })

    }
  }
}
</script>
