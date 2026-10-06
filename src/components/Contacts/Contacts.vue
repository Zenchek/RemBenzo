<template>
    <section class="contacts">
        <div class="contacts__main-cotainer">
            <h2>Contacts</h2>
            <div class="contacts__cotainer">
                <div class="contacts__left">
                    <iframe class="contacts__map" title="Карта расположения" src="https://yandex.ru/map-widget/v1/?um=constructor%3A357b5cdd7d2a20485245442331f70ead65b8aa403d6b88b8199833bee3937020&amp;source=constructor"></iframe>
                </div>
                <div class="contacts__right">
                    <div class="contacts__info">
                        <div class="contacts__phone">
                            <h3>Телефон:
                                <a :href="`tel:+${props.contacts.phone}`"> +{{ props.contacts.phone }} </a>
                            </h3>
                            
                        </div>
                        <div class="contact__adress">
                            <h3>Адрес: {{props.contacts.address}}</h3>
                            
                        </div>
                        <div class="contacts__grafic">
                            <h3>График работы: {{ props.contacts.grafic }}</h3>
                            <span></span>
                        </div>
                        <button @click="openModal()" class="contacts__button button">Book diagnostics</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const emit = defineEmits(["open-modal"])

const props = defineProps(["contacts"])


function openModal() {
    emit("open-modal")
}


</script>
<style scoped>
@import url(./Contacts.css);</style>