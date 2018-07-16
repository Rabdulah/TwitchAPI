<template>
<div class="container-fluid jumbotron">
  <div class= row>
    <div class="col-sm-4">Streamers{{streamers}}</div>
    <div class="col-sm-6">Status</div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Homepage',
  data () {
    return {
      streamers: null
    }
  },
  mounted () {
    axios
      .get('https://wind-bow.glitch.me/twitch-api/streams/Warcraft')
      .then(response => (this.streamers = response))
  },
  methods: {
    makeCall: function () {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
