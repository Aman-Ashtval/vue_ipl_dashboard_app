<template>
    <div class="card">
        <img :src="match.competing_team_logo"  alt="team logo" />
        <h3>{{ match.competing_team }}</h3>
        <p>{{ match.result }}</p>
        <span v-ranbow>{{ match.match_status | upperCase }}</span>
    </div>
</template>

<script>
export default{
    name: 'MatchCard',
    props: {match: Object},
    filters: {
        upperCase: function(value){
            return value.toUpperCase();
        }
    },
    directives: {
        'ranbow':{
            bind(el){
                el.style.color = '#' + Math.random().toString().slice(2,8);
                el.style.fontWeight = 'bold';
            }
        }
    }
}
</script>

<style>
.card{
    height: 500px;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    background-color: #0f172a;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card img{
    width: 200px;
    height: 250px;
    margin: 10px;
}

.card h3{
    color: #ffff;
    font-size: 22px;
    margin: 10px 0px;
}

.card p{
    color: #ffff;
    font-size: 16px;
    font-weight: 500;
    margin: 32px 0px;
    text-align: center;
    opacity: 0.9;
}

.card span{
    font-size: 22px;
    font-weight: 500;
}
</style>