<template>
  <div>
  {{name}}
  </div>
</template>
<script>
  import { mapState } from 'vuex'  
  export default {
    computed: {
      ...mapState('home', ['name']),
    }
  };
</script>