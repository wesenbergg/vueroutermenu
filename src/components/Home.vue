<template>
  <div>
    <p class="homeText">
    Tervetuloa tapahtumakalenteriin
  </p>
    <b-table striped hover :items="posts"></b-table>
  </div>
</template>
<script>

export default {
  name: 'Home',
  data() {
    return {
      posts: [
        { title: "Loading", id: -1, author: "loading" }
      ]
    }
  },
  mounted: function() {
    fetch('http://localhost:3001/posts', {
      method: 'get'
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.posts = data
    })
  }
}
</script>

<style scoped>
.homeText{
  font-size: 35px;
  text-align: left;
  font-size: 150%;
  padding-top: 1rem;
}
</style>