<template>
    <div class="lds-dual-ring"></div>
</template>

<style scoped>
    .lds-dual-ring {
        /* display: inline-block; */
        width: 64px;
        height: 64px;
        margin: 0 auto;
    }

    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 46px;
        height: 46px;
        margin: 1px;
        border-radius: 50%;
        border: 5px solid #F3E0E0;
        border-color: #F3E0E0 transparent #F3E0E0 transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>