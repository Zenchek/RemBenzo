<template>
    <header class="header">
        <div class="container">
            <div class="logo">
                <div class="logo__icon">⚙️</div>
                <div class="logo__content">
                    <div class="logo__text">REMBENZO</div>
                    <span>Repair Service</span>
                </div>
            </div>
            <nav class="nav">
                <RouterLink 
                v-for="item in menu"
                :key="item.link"
                :to="item.link">
                    {{ item.title }}
                </RouterLink>
                
            </nav>
            <div class="contacts">
                <div class="phone">📞 +7 (949) 427-54-08</div>
                <button class="button header__button">☎Call</button>
            </div>
        </div>
    </header>
</template>

<script setup>
const menu =[
    {
        title: "Главная",
        link: "/"
    },
    {
        title: "Услуги",
        link: "/services"
    },
    {
        title: "Отзывы",
        link: "/reviews"
    },
    {
        title: "Контакты",
        link: "/contacts"
    }
]
</script>

<style scoped>
.header {
    background-color: var(--primary-color);
    color: white;
    padding:  20px 0px;
}

.container{
    max-width: var(--container-width);
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}



.nav{
    display: flex;
    gap: 30px;
}.nav a{
    color: white;
    transition: .3s;
}.nav a:hover{
    color: #ff7f00;
}

.contacts{
    width: 100%;
    max-width: max-content;
    display: flex;
    justify-content: space-between;
    gap: 12px;
}

.phone{
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
}

.header__button{
    padding: 12px 28px ;
    color: white;
    font-size: 24px;
}
</style>