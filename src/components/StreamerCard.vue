<template>
  <div class="jumbotron container-fluid">
    <table class="table table-striped table-dark">
      <thead>
      <tr>
        <th scope="col">Logo</th>
        <th scope="col">Streamer</th>
        <th scope="col">Game</th>
        <th scope="col">Mature Content</th>
        <th scope="col">Live Viewers</th>
        <th scope="col">Link</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="streams in streamInfo" v-if="streams.data.stream!=null">
        <th scope="row"><img class="logo" v-bind:src ="streams.data.stream.channel.logo"/></th>
        <td>{{ streams.data.stream.channel.name}}</td>
        <td>{{ streams.data.stream.channel.game}}</td>
        <td v-if="streams.data.stream.channel.mature==true"><img class="rating" src="../assets/mature.png"></td>
        <td v-else><img class="rating" src="../assets/safe.jpg"></td>
        <td>{{ streams.data.stream.viewers}}</td>
        <td><a v-bind:href="streams.data.stream.channel.url" target="_blank"><img v-bind:title="streams.data.stream.channel.status" class="preview" v-bind:src="streams.data.stream.preview.medium"/></a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'StreamerCard',
  data () {
    return {
      streamInfo: []
    }
  },
  mounted () {
    for (var i = 0; i < streamers.length; i++) {
      axios
        .get('https://wind-bow.glitch.me/twitch-api/streams/' + streamers[i])
        .then(res => (this.streamInfo.push(res)))
    }
  },
  methods: {
  }
}

/* eslint-disable */
var streamers = ["riotgames", "shadbasemurdertv", "starladder1", "beyondthesummit", "esltv_cs", "esl_csgo", "imaqtpie", "pgl_clean", "eleaguetvtest", "lirik",
"lirikk", "ninja", "summit1g", "sodapoppin", "dyrus", "sgdq", "gdq", "gamesdonequick", "speeddemonarchivesd", "tsm_theoddone",
"twitch", "e3", "nl_kripp", "nightblue3", "garenatw", "asiagodtonegg3be0", "meclipse", "shroud", "HiRezTV", "starladder5",
"dota2ti", "dotati", "dreamhackcs", 'dota2ruhub', "Faceit", "faceittv", "esltv_lol", "esl_lol", "trick2g", "dotamajor",
"riotgamesturkish", "izakooo", "eleaguetv", "towelliee", "Voyboy", "dreadztv", "destructoid", "overwatchleague", "taketv", "ongamenet"]
</script>

<style>
  .logo{
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
  .rating{
    height: 45px;
    width: 45px;
    border-radius: 53%;
  }
  .jumbotron{
    font-size: 20px;
    margin: 0px;
  }

</style>
