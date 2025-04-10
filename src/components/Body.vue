<script setup>
import PieChart from './PieChart.vue';




</script>

<template>
    <div id="bodyDiv">
        <PieChart />
        <router-view></router-view>
    </div>
</template>

<style scoped>
#bodyDiv{
    display: flex;
    align-items: center;
    flex-direction: column;

    
}

</style>