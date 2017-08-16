<template>
    <div>
        <p>This is Landing Page</p>
        {{user.input1}}
        <figure>
            <img v-bind:src='user.imageSrc'>  
        </figure>
       <div>
        <button @click='GoBack'>Go Back to the Previous</button>
       </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            
        }
    },
    computed:{
        user(){
            return this.$store.state.user
        }
    },
    methods:{
        computed:{
        user(){
            return this.$store.state.user
            
        }
    },
    GoBack(){
       this.$store.commit('ShareInfo',{
              input1:this.user.input1,
              imageSrc:this.user.imageSrc
          }); 
          this.$router.push({path:'/'})      
    }
   }
}
</script>
<style scoped>

</style>