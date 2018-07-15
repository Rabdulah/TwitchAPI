<template>
<div class="container-fluid">
  <div class= row>
    <div class="col-sm-4">Streamers</div>
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
      .get('https://wind-bow.glitch.me/twitch-api/streams/FreeCodeCamp')
      .then(response => (this.streamers = response))
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
