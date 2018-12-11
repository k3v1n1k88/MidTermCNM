<template>
    <div id="notity">
        <img src="../assets/success.png" alt="success" width="100px" height="100px"/>
        <br><br>
        <h2>Login Successful</h2>
        <b-link :to="{path: 'signup'}">Home page</b-link>
    </div>
</template>
<script>
    export default {
        name: "result"
    }
</script>