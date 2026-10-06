<template>
    <section class="whyChooseUs">
        <div class="whyChooseUs__container">
            <div class="whyChooseUs__info">
                <div class="info__title">
                    <span>WHY CHOOSE US</span>
                    <h2>We are professional you can trust</h2>
                </div>
                <div class="info__content">
                    <p>Dictumst. Morbi amet mauris sapien amet venenatis hac dui imperdiet pellentesque imperdiet quam, mattis consectetur elit. Ornare venenatis ornare vestibulum platea morbi dictum. Dictum.</p>
                    <button class="button info__button" type="button">Learn more about  us</button>
                </div>
            </div>
            <div class="whyChooseUs__images">
                <img src="" alt="" class="whyChooseUsImg">
                <img src="" alt="" class="whyChooseUsImg">
            </div>
            <div class="whyChooseUs__reviews">
                <div class="reviews__title">
                    <span>TESTIMONLS</span>
                    <h2>What our clients say</h2>
                </div>
                <div class="reviews__container">
                    <ReviewsCard v-for="(item) in Reviews"
                    :item="item"
                    :key="item.id" />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import ReviewsCard from './ReviewsCard.vue';
import Reviews from '@/data/reviews.js'


</script>
<style scoped>
@import "./WhyChooseUs.css"
</style>