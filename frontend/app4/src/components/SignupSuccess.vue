<template>
    <div id="notity">
        <img src="../assets/success.png" alt="success" width="100px" height="100px"/>
        <br><br>
        <h2>Signup Successful</h2>
        <b-link :to="{path: 'list'}">Home</b-link>
    </div>
</template>
<script>
    export default {
        name: "result"
    }
</script>