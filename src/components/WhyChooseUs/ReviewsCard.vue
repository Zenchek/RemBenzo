<template>
    <div class="reviews-card">
        <div class="card__header">
            <img src='' alt="" class="card__img">
            <div class="reviews-card__title">
                <h4>{{ item.name }}</h4>
                <div class="stars__container">
                    <span v-for="i in item.stars"
                    :key="'full-' + i">⭐</span>
                    <span v-for="i in 5 - item.stars"
                    :key="'empty-' + i">☆</span>
                </div>
            </div>
        </div>
        <p class="reviews-card__text">{{ item.text }}</p>
    </div>
</template>
<script setup>
defineProps({
    item:Object
})
</script>
<style scoped>
.reviews-card{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    box-shadow: 0px 0px 4px;
    height: 100%;
    border-radius: 16px;
    transition: 0.5s;
}p.reviews-card__text{
    font-size: 14px;
}
.reviews-card__title{
    font-size: 24px;
}

.card__img{
    border-radius: 50%;
}
</style>