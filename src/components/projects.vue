<template>
    <div class="projects col-md-6 col-sm-12 p-0">
        <div class="scroll">
            <project v-for='i in projectsInfo' :myStyle=' i.id%2 ? styleProject : false ' :dataProject='i'></project>
        </div>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import project from './project.vue';

    export default {
        name: 'projects',
        computed: {
            ...mapGetters([
                'project',
                'projectsInfo',
            ]),
        },
        data() {
            return {
                msg: 'Some title',
                styleProject: 'background-color:#56D2B8;',
            }
        },
        components: {
            project,
        },
    }
</script>

<style>
    .projects {
        background-color: rgb(162, 198, 235);
        padding: 0%;
    }

    @media(min-width: 768px) {
        .projects .scroll {
            height: 100vh;
            overflow: scroll;
            overflow-y: visible;
        }

        ::-webkit-scrollbar {
            -webkit-appearance: none;
            width: 7px;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: rgba(0, 0, 0, .5);
            -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
        }
    }
</style>