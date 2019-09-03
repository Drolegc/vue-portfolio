<template>
  <div class="home">
    <div class="row">
      <technologies></technologies>
      <projects></projects>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import technologies from '@/components/my-technologies.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    technologies,
  },
};
</script>
