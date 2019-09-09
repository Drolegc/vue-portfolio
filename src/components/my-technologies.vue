<template>
    <div class="technologies col-md-6 col-sm-12 izq">
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="ml-auto">
                <router-link to="/" class="btn btn-dark rounded m-1">Home </router-link>
                <router-link to="/about" class="btn btn-dark rounded m-1"> About me</router-link>
            </div>
        </nav>
        <div class="container p-3">
                <h1 class="">Leandro Gonzalez Cuello - Portfolio</h1>
                <small><i>Young programmer, always learning anything and everything</i></small>
                <p>Techonogies i have been working on</p>
                <div class="text-center">
                    <img v-for='i in pathImg' :src="i" v-bind:alt="lenguaje">
                </div>
            </div>
        </div>


    </div>
</template>

<script>


    export default {
        name: "technologies",
        props: {
            path: String,
            tech: String,
            pathImg: String,
        },
        data() {
            return {
                msg: "LALAL",
                lenguaje: "Some lenguaje"
            }
        },
        components: {
        }
    }

</script>

<style>
    .technologies {
        background-color: rgb(255, 255, 255);
        margin:0%;
    }

    .technologies img {
        width: 100px;
        margin: 5%;
    }

    .btns{
        margin-left: auto;
    }
</style>