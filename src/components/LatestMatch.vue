<template>
<div class="latest-match-bg">
    <el-row :gutter="20">
        <el-col :span="8">
            <div class="grid-content1">
                <h3>{{matchDetails.competing_team}}</h3>
                <p>{{matchDetails.date}}</p>
                <p>{{matchDetails.venue}}</p>
                <p>{{matchDetails.result}}</p>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content2">
                <img :src="matchDetails.competing_team_logo" alt="winner team" />
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content3">
                <p class="title">First Inning</p>
                <p class="details">{{ matchDetails.first_innings }}</p>
                <p class="title">Second Inning</p>
                <p class="details">{{ matchDetails.second_innings }}</p>
                <p class="title">Man Of The Match</p>
                <p class="details">{{ matchDetails.man_of_the_match }}</p>
                <p class="title">Umpires</p>
                <p class="details">{{ matchDetails.umpires }}</p>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    name: 'LatestMatch',
    props: {
        matchDetails: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.latest-match-bg {
    width: 100%;
    padding: 16px 22px;
    background-color: #0f172a;
    border-radius: 15px;
}

.el-col {
    margin-bottom: 5px;
    height: 400px;
}

.grid-content1, .grid-content2, .grid-content3{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.grid-content2{
    justify-content: center;
    align-items: center;
}

.grid-content3{
    justify-content: space-around;
    text-align: right;
}

.grid-content1 > h3{
    color: #ffffff;
    font-size: 32px;
    font-weight: 510;
    margin: 0px 0px 32px 0px;
}

.grid-content1 > p{
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0px 5px 0px;
    opacity: 0.9;
}

.grid-content2 > img{
    width: 200px;
    height: 200px;
}

.grid-content3 > .title{
    color: #ffffff;
    font-size: 24px;
    font-weight: 510;
    margin: 0px 0px 10px 0px;
}

.grid-content3 > .details{
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    margin: 0px 0px 10px 0px;
    opacity: 0.9;
}
</style>
