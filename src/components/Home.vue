<template>
    <div class="container">
    <h3 class="text-center mt-5">PhotoBoom</h3>
    <p class="text-center mt-5">Wellcome to your fovorite website</p>
    <p class="text-center mt-5"><router-link to="/myphotos">My Photos</router-link></p>
  </div>
</template>


<script>
import axios from "axios"
export default {
  name: 'Home',
  data(){
    return {
      photos : []
    }
  },
  methods : {
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

