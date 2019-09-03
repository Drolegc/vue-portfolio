<template>
<div class="col-md-6 col-sm-12">
    <h1>Leandro Gonzalez Cuello - Portfolio</h1>
    <small><i>Young programmer, always learning anything and everything</i></small>
    <p>Techonogies i have been working on</p>
    <test></test>
</div>
</template>

<script>

import test from './test.vue'

export default {
    name:"technologies",
    props:{
        path:String,
        tech:String,
    },
    data(){
        return {
            msg:"LALAL",
        }
    },
    components:{
        test,
    }
}

</script>

<style>

</style>