<template>
    <div id="header">
        <img src="@/assets/logo.png" alt="" />
        <p>MoviesCurator</p>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
#header {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-top: 30px;
}

#header img {
    padding-right: 5px;
    width: 60px;
}

#header p {
    color: #EEE;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.7em;
    letter-spacing: 1px;
}
</style>
