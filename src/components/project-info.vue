<template>
    <div class="projectInfo">
        <div class="d-flex row">
            <div class="col-5"><p class="mr-2">{{project.description}}</p></div>
            <div class="col-7"><img :src="project.images.gif" class="rounded  p-1 mx-1 photo" alt=""></div>
        </div>
        <div class="d-flex">
            <p>Made with <img v-for=" t in project.technologies" :src="t" class="lenguaje m-1 mb-2" alt="image technology" ></p>
        </div>
        <div class="buttons d-flex">
            <a :href="project.links.github.link" class="btn-dark rounded p-1"> Github </a>    
            <a v-if="project.links.link" :href="project.links.link" class="btn-outline-info rounded p-1 ml-1">Visit</a>
        </div>
    </div>
</template>

<script>

export default {
    name:'projectInfo',
    props:['project'], 

    computed:{

        info(){
            return this.$store.getters.getProjectForId(this.id);
        }
    }


}

</script>

<style>

    .projectInfo{
        
    }

    .projectInfo .photo { 
        width: 100%;
    }

    .projectInfo .lenguaje {
        width: 40px;

    }
    
</style>