<template>
<div class="match-details-bg">
    <div class="inner-section">
        <img :src="teamBanner" alt="banner" class="banner" />
        <h3>Latest Matches</h3>
        <LatestMatch :matchDetails="recentMatchDetails" v-if="recentMatchDetails !== null" />
        <el-row :gutter="30">
            <el-col :span="8" v-for="match in recentMatches" :key="match.id">
                    <MatchCard :match="match" />
            </el-col>
        </el-row>
    </div>
</div>
</template>

    
<script>
import LatestMatch from './LatestMatch.vue'
import MatchCard from './MatchCard.vue'

export default {
    name: 'HomePage',
    components: {LatestMatch, MatchCard},
    data: function () {
        return {
            id: this.$route.params.id,
            teamBanner: '',
            recentMatchDetails: null,
            recentMatches: []
        }
    },
    created: function () {
        this.fetchData();
    },
    methods: {
        fetchData: function(){
            this.$http.get(`https://apis.ccbp.in/ipl/${this.id}`).then((response)=>{
                const data = response.data;
                this.teamBanner = data.team_banner_url;
                this.recentMatchDetails = data.latest_match_details;
                this.recentMatches = data.recent_matches;
            })
        }
    }
}
</script>

    
<style scoped>
.match-details-bg {
    min-height: 100vh;
    padding: 50px 0px;
    background-image: linear-gradient(to bottom, #d91c1f, #a4261d, #1e293b);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.inner-section{
    width: 80%;
    display: flex;
    flex-direction: column;
}

.banner{
    width: 100%;
    height: 400px;
}

.inner-section h3{
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    margin: 32px 0px 10px 0px;
}

.el-row{
    margin-top: 32px;
}

.el-col{
    margin-bottom: 22px;
}
</style>
