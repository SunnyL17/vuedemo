<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
      <p>
      <i class="fa fa-camera-retro fa-5x"></i>
    <i class="fa fa-facebook-square fa-5x" aria-hidden="true"></i>
      </p>
       {{user.input1}}
      <!--This is important for using router-link-->
      <router-link to="/Landing">Landing</router-link>
    
      <div>
        
             <input type="text" v-model='Info.input1' maxlength="30" required>
         
           <input type='file' name="image" @change="filesChange($event.target.files)" v-on:change="previewThumbnail" accept="image/*">
          <figure>
             <img v-bind:src='imageSrc'>  
          </figure>
       
       </div>
      <button @click="Preview">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'My new app is coming out! ...:) Just be patient',
      imageSrc:undefined,
      imageData:undefined,
      Info:{
        input1:'',
        input2:''
       }
    }
  },
  computed:{
    user(){
      console.log(this.$store.state)
      return this.$store.state.user    
    }  
  },
  mounted:function(){
    
    this.Info.input1= this.user.input1,
    this.imageSrc=this.user.imageSrc
  },
  methods:{
      Preview(){
          
          this.$store.commit('ShareInfo',{
              input1:this.Info.input1,
              imageSrc:this.imageSrc
          });
          this.$router.push({path:'/Landing'})          
      },
      computed:{
       user(){
      return this.$store.state.user    
    }
      },
    previewThumbnail: function(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        var vm = this;
        reader.onload = function(e) {
          vm.imageSrc = e.target.result;
          vm.imageData = input.files[0];
          console.log(vm.imageData)
        }
        reader.readAsDataURL(input.files[0]);
      }
    },
    filesChange(fileList) {
 
      if (!fileList.length) return;
      this.image = fileList[0];
      console.log(this.image)
 
    }
  }
      
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>