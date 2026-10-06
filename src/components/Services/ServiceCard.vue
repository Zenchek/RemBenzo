<template>
    <div class="service__card">
        <div class="card">
            <img src="" alt="" class="card__images">
            <div class="card__content">
                <div>
                    <h3 class="card__title">{{ item.title }}</h3>
                    <p class="card__info">{{ item.desription }}</p>
                </div>
                <div class="card__price"><span>{{ item.price }}</span><span> →</span></div>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    item: Object
})
</script>
<style>
@import  "./Services.css";
</style>