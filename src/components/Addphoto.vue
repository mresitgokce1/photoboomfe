<template>
    <div class="container">
        <h3 class="text-center mt-5">Add Photo</h3>
        <div class="mt-5 border border-dark p-5 shadow">
            <input class ="form-control" type="text" v-model="model_title"><br>
            <input class="form-control mt-3" type="text" v-model="model_tags"><br>
            <input class="form-control mt-3" type="file" @change="onImageSelected"><br>
            <button @click="save" class="form-control mt-3 btn btn-danger">Add Photo</button>
            {{selectedImage}}
        </div>
    </div>
</template>


<script>
import axios from "axios"
export default {
  name: 'Addphoto',

  data(){
    return {
      selectedImage: '',
      model_title: '',
      model_tags: ''
    }
  },

  methods : {
    save(){

      let photo = {
        Title:this.model_title,
        Tags:this.model_tags,
        Photos:this.selectedImage
      }

      axios.post("http://localhost:34851/api/photos", photo)
      .then(response => {
        console.log(response)
      })
    },
    onImageSelected(event){
        this.selectedImage = event.target.files[0].name
    }
  }
}
</script>

