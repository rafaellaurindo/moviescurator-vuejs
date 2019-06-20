<template>
    <div id="Tabs">
        <button class="active" @click="updateActiveTab($event)">FILMES NÃO CURADOS</button>
        <button @click="updateActiveTab($event)">FILMES CURTIDOS</button>
        <button @click="updateActiveTab($event)">FILMES NÃO CURTIDOS</button>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    methods: {
        updateActiveTab: event => {
            const tabClickedElement = event.target;
            const currentTabActive = document.querySelector('button.active');
            
            currentTabActive.classList.remove('active');
            tabClickedElement.classList.add('active');
        }
    }
}
</script>

<style scoped>
#Tabs {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-top: 30px;
}

#Tabs button {
    color: #FFF;
    background: transparent;
    border: transparent;
    padding: 5px;
}

@media screen and (min-width: 992px) {
    #Tabs button {
        margin-left: 4em;
    }
}

#Tabs button.active {
    border-bottom: 3px solid #FFF;
    font-weight: 600;
}
</style>

