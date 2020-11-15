<template>
  <main>
    <div id="navbar">
      <router-link exact to="/">HOME</router-link>
      <router-link to="/profile">DASHBOARD</router-link>
      <router-link to="/Options">OPTIONS</router-link>
      <router-link id="nav_user_info" to="/profile">
        <img id="nav_image" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"/>
        <span id="user_score"> {{ score }} </span>
      </router-link>
    </div>
    <router-view/>
  </main> 
</template>

<script>
export default {
  data: function() {
    return {
      score: '970'
    }
  }
}
</script>

<style scoped>
#navbar {
  height: 60px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.445), rgba(66, 66, 66, 0.445));
  text-align: left;
  margin-bottom: 10px;
  border-bottom-style: outset;
}

a{
  color: #eee;
  float: left;
  height: 60px;
  width: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  margin-right: 3px;
  text-align: center;
  text-decoration: none;
  font-size: 25px;
}

a:hover {
  background-image:linear-gradient(rgba(0, 0, 0, 0.411), rgba(66, 66, 66, 0.445));
  text-decoration: none;
  color: #eee;
  border-bottom-style: outset;
}

.router-link-active{
  background-image: linear-gradient(rgba(0, 255, 42, 0.411), rgba(66, 66, 66, 0.445));
}

.router-link-active, .router-link-active:hover{
  background-image: linear-gradient(rgba(0, 255, 42, 0.411), rgba(66, 66, 66, 0.445));
  border-bottom-style: outset;
}

#nav_user_info {
  float: right;
  background-image: none;
}

#nav_image {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 5px;
  filter: opacity(75%);
  border: solid 2px white;
}

#nav_image:hover {
  filter: opacity(100%);
  transition: 700ms;
}
</style>