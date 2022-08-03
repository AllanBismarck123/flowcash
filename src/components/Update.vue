<template>
    <div id="update">
        <h2>{{date}}</h2>
        <div>{{type}}</div>
        <div id="identificationUpdate">
            <div>{{description}}</div>
            <div>{{category}}</div>
        </div>
        <div class="values">{{value}}</div>
    </div>
</template>

<script>
export default {
    name: 'UniqueUpdate',
    props: {
        description: String,
        category: String,
        value: Number,
        type:  String,
        date: String
    }
}
</script>

<style>
    #update {
        display: flex;
        flex-direction: row;
        gap: 80px;
        justify-content: center;
    }
    
    #identificationUpdate {
        display: flex;
        flex-direction: column;
    }
</style>