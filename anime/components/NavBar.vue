<template>
    <section id="nav">
        <nav class="navigation">
            <h1 id="logo">Technime</h1>
            <ul class="routers">
                <li class="link">
                    <a href="" class="link-href">Awards</a>
                </li>
                <li class="link">
                    <a href="" class="link-href">Rankings</a>
                </li>
                <li class="link">
                    <a href="" class="link-href">History</a>
                </li>
                <button class="log-in button">Log In</button>
            </ul>
        </nav>

    </section>
</template>
<script lang="ts">
    export default ({
    name: 'NavBar',
    components:{
        
    }
    })
</script>
<style scoped>

.navigation{
    background-color:var(--tertiary);
    width:100%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    align-self: stretch;
    margin:0 auto;
    position:fixed;
    z-index:100;
    padding:1rem;
}
    #logo{
        font-size: var(--h2);
        color:var(--white);
    }
    .routers{
        width:40%;
        display:flex;
        justify-content:space-between;
    }
   ul, li, .link, a{
        text-decoration: none;
        list-style-type: none;
        font-size: var(--h4);
        color:var(--white);
    }
    .button{
        background: var(--primary);
        border-radius: 25px;
        font-style: normal;
        font-weight: var(--fw-bold);
        font-size: var(--h4);
        text-align: center;
        color: var(--dark-text);
        border:0;
        padding:1rem 3rem;
        transition: all .3s ease-in-out;-webkit-transition: all .3s ease-in-out;
	    cursor: pointer;
    }
    .button:hover{
        background-color: linear-gradient(84.66deg, var(--primary) 2.58%, var(--alt-linear) 97.55%);
    }
</style>