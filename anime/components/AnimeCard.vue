<template>
    <div>
        <img v-bind:src="`${img}`" alt="">
        <div>
            <p>{{episode}}</p>
            <p>{{format}}</p>
        </div>
        <h2>{{title}}</h2>
    </div>
</template>