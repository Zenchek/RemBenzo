<template>
<section class="advantages">
    <div class="advantages__container">
        <div class="advantages__card"
        v-for="item in props.advantages"
        :key="item.id">
            <span class="advantages__icon">{{ item.icon }}</span>
            <div class="advantages__content">
                <h3 class="advantages__title">{{ item.title }}</h3>
                <p class="advantages__description">{{ item.description }}</p>
            </div>
        </div>
    </div>
</section>
</template>
<script setup>
const props = defineProps(["advantages"])
</script>
<style scoped>
@import url("./Advantages.css");</style>