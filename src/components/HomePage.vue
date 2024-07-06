<template>
<div class="home-bg">
    <div class="inner-section">
        <div class="logo-content">
            <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="logo" />
            <h1>IPL Dashboard</h1>
        </div>
        <ul>
            <li v-for="team in teamsList" :key="team.id">
                <router-link :to="`/${team.id}`" exact class="item-link">
                    <img :src="team.team_image_url" :alt="team.id" />
                    <p>{{ team.name }}</p>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'HomePage',
    data: function () {
        return {
            teamsList: []
        }
    },
    created: function () {
        this.$http.get('https://apis.ccbp.in/ipl').then((response) => {
            return response.data;
        }).then(data => {
            this.teamsList = data.teams;
        })
    }
}
</script>

<style scoped>
.home-bg {
    min-height: 100vh;
    padding: 50px 0px;
    background: url('https://assets.ccbp.in/frontend/react-js/ipl-dashboard-lg-bg.png') center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.inner-section {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo-content {
    display: flex;
    align-items: center;
}

.logo-content img {
    width: 45px;
    margin: 5px 10px;
}

.logo-content h1 {
    color: #ffffff;
    font-size: 55px;
    font-weight: 1000;
    margin: 5px 10px;
}

ul {
    list-style-type: none;
    margin-top: 32px;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

li {
    width: 45%;
    margin-bottom: 32px;
    border: 1px solid #ffffff;
    border-radius: 15px;
    background-color: #ffffff33;
}

.item-link{
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li img {
    width: 120px;
    height: 150px;
}

li p {
    color: #ffffff;
    font-size: 26px;
    font-weight: bold;
}
</style>
