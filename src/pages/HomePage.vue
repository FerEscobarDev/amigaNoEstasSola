<template>
    <div>
        <navbar />
        <main>
            <div class="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
                <div class="absolute top-0 w-full h-full bg-center bg-cover"  
                    :style="`background-image: url(${fondoWeb});`"
                >
                    <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-[#6450a1]"></span>
                </div>
                <div class="container relative mx-auto my-5">
                    <div class="items-center flex flex-wrap">
                        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div class="flex justify-center items-center">
                                <img class=" md:w-[65%]  lg:w-[100%]" :src="logo" alt="amiga no estás sola">
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </main>
        <footer-component />
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbars/AuthNavbar.vue";
import FooterComponent from "../components/Footers/Footer.vue";

import erika from "../assets/img/erika.png";
import logo from "../assets/img/AMIGA_FULL_COLOR.png";
import fondoWeb from "../assets/img/fondoWeb.png";

export default defineComponent({
    data() {
        return {
            erika,
            logo,
            fondoWeb
        };
    },
    components: {
        Navbar,
        FooterComponent,
    },
});
</script>
