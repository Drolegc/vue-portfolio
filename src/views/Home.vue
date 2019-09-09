<template>
  <div class="home">
    <div class="row mx-0" id="row">
      <technologies :pathImg='technologies'></technologies>
      <projects></projects>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import { mapGetters } from 'vuex';
  import technologies from '@/components/my-technologies.vue';
  import projects from '@/components/projects.vue';



  export default {
    name: 'home',
    components: {
      technologies,
      projects,
    },
    computed: {
      ...mapGetters(['technologies']),
    },
  };
</script>

<style>

  #row {
    height: 100vh;
  }

</style>