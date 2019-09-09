<template>
    <div class="project" :style="myStyle">
        <h3 class="">{{dataProject.title}}</h3>
        <img :src="dataProject.images.gif" alt="img-project" class="rounded mx-auto shadow">
        <p class="text-center mt-3 mb-0">{{ dataProject.litleDescription }}</p>
        <b-button v-b-modal="String(dataProject.id)" class="btn btn-info mt-4 mb-0">
            <font-awesome-icon icon="plus" class="plus"></font-awesome-icon>
        </b-button>
        <b-modal :id="String(dataProject.id)" :title="dataProject.title">
            <project-info :project="dataProject"></project-info>
        </b-modal>
    </div>
</template>

<script>

    import projectInfo from './project-info.vue';

    export default {

        name: 'project',
        props: ['dataProject', 'myStyle'],
        components: {
            projectInfo,
        }

    }

</script>

<style>

    @media(min-width: 768px) {
        .project {
            height: 50vh;
        }
    }

    .project {
        background-color: rgb(245, 146, 121);
        display: flex;
        flex-direction: column;
        padding: 1%;
    }

    .project img {
        width: 40vh;
    }

    .project .btn {
        border: 0 solid;
        box-shadow: inset 0 0 20px rgba(53, 106, 206, 0);
        outline: 1px solid;
        outline-color: rgba(32, 118, 216, 0.5);
        outline-offset: 0px;
        text-shadow: none;
        transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    .project .btn:hover {
        border: 1px solid;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
        text-shadow: 1px 1px 2px #427388;
    }
</style>