<template>
<div class="carousel">
    <div class="carousel-slide">
    <input type="radio" name="btn" id="item-1" />
    <div class="carousel-display">
        <div class="carousel-item">
            <h1 class="text">Title (1)</h1>
            <h2 class="text">Synopsis</h2>
            <img class="img" src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" alt="TBD1"/>
        </div>
        <div class="controls">
            <label for="item-3" class="left">
                <span>&#8249;</span>
            </label>
            <label for="item-2" class="right">
                <span>&#8250;</span>
            </label>
        </div>
    </div>
    <input type="radio" name="btn" id="item-2" checked/>
    <div class="carousel-display">
        <div class="carousel-item">
            <h1 class="text">Title (2)</h1>
            <h2 class="text">Synopsis</h2>
            <img class="img" src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" alt="TBD2"/>
        </div>
        <div class="controls">
            <label for="item-1" class="left">
                <span>&#8249;</span>
            </label>
            <label for="item-3" class="right">
                <span>&#8250;</span>
            </label>
        </div>
    </div>
    <input type="radio" name="btn" id="item-3"/>
    <div class="carousel-display">
        <div class="carousel-item">
            <h1 class="text">Title (3)</h1>
            <h2 class="text">Synopsis</h2>
            <img class="img" src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" alt="TBD3"/>
        </div>
        <div class="controls">
            <label for="item-2" class="left">
                <span>&#8249;</span>
            </label>
            <label for="item-1" class="right">
                <span>&#8250;</span>
            </label>
        </div>
    </div>
</div>
</div>
</template>

<script>

export default {
    name: "Carousel",
    data () {
        return {}
    },
}
</script>

<style scoped>
h1 {
    margin-top: 2%;
}
.img {
    margin: 4%;
    height: 30%;
    float: right;
    vertical-align: middle;
}
.text {
    text-align: center;
    color: var(--white);
    float: inline-start;
}
input {
    display: none;
}
.controls label{
    margin: 3%;
    padding: 0;
    display: none;
    cursor: pointer;
    font-size: 4rem;
    position: absolute;
    color: var(--white);
}
.controls .left {
    left: 0;
    text-align: left;
}
.controls .right {
    right: 0;
    text-align: right;
}
.carousel {
    margin: 3%;
    padding: 0%;
    overflow: hidden;
    flex-direction: row;
}
.carousel-item {
    opacity: 0;
    width: 80vw;
    height: 50%;
    display: block;
    margin-left: 5%;
    margin-right: 5%;
    position: absolute;
    transition: all .75s ease-in-out;
    background-color: var(--tertiary);
}
.carousel-slide {
    white-space: nowrap;
}
.carousel-display {
    display: block;
}
input:checked + .carousel-display .carousel-item {
    opacity: 1;
    transform: scale(1);
    transition: 1.11s ease-in-out;
}
input:checked + .carousel-display .controls label {
    display: block;
}
input:checked + .carousel-display .nav label {
    display: block;
}
/* @keyframes test {
    from {}
    to {}
} */
</style>

