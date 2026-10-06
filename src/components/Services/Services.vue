<template>
    <section class="services">
        <div class="services__box">
            <div class="services__info">
                <div>
                    <span>services</span>
                    <h2 class="services_title">What we <br>repair</h2>
                </div>
                <button class="button services__button">View all services <span>→</span></button>
            </div>
            <div class="services__content">
                <ServiceCard v-for="(item) in services" 
                :item="item"
                :key="item.id"
                /> <!--Update: Убрал лишний props :index="index"-->
            </div>
        </div>
    </section>
</template>
<script setup>
import ServiceCard from './ServiceCard.vue';
import services from '@/data/services.js'
</script>
<style scoped>
@import "./Services.css";
</style>