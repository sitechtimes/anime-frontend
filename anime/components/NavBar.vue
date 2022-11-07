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
                <button>Log In</button>
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
    height:2rem;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    align-self: stretch;
    margin:0 auto;
    position:fixed;
    z-index:100;
}
    #logo{
        color:var(--white);
        font-size: var(--h1);
    }
    .routers{
        width:60%;
        display:flex;
        justify-content:space-evenly;
    }
   ul, li{
        text-decoration: none;
        color:var(--white)
    }
</style>