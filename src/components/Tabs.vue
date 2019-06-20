<template>
    <nav id="Tabs">
        <ul>
            <router-link tag="li" to="/">
                <a>FILMES NÃO CURADOS</a>
            </router-link>
            <router-link tag="li" to="/likeds">
                <a>FILMES CURTIDOS</a>
            </router-link>
            <router-link tag="li" to="/unlinkeds">
                <a>FILMES NÃO CURTIDOS</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Tabs',
}
</script>

<style scoped>
#Tabs {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-top: 30px;
}

#Tabs ul {
    list-style:none;
}

#Tabs ul li { 
    display: inline;
    padding: 5px 10px;
}

#Tabs  ul li a {
    color: #FFF;
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
}

#Tabs  ul li.is-active  {
    border-bottom: 3px solid #FFF;
    font-weight: 600;
}

</style>

