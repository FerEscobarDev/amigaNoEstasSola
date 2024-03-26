<template>
    <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <router-link
                    class="text-white text-sm font-bold leading-relaxed  mr-4 py-2 whitespace-nowrap uppercase flex items-center justify-between"
                    to="/">
                    <img class="w-12" :src="logo" alt="amiga no estás sola">
                    Amiga no estás sola
                </router-link>
                <button
                    class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button" v-on:click="setNavbarOpen">
                    <i class="text-white fas fa-bars"></i>
                </button>
            </div>
            <div class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"
                :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']" id="example-navbar-warning">
                <!-- <ul class="flex flex-col lg:flex-row list-none mr-auto">
                    <li class="flex items-center">
                        <router-link 
                            class="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            to="about">
                            <i class="lg:text-slate-200 text-slate-400 far fa-file-alt text-lg leading-lg mr-2" />
                            Acerca de nosotros
                        </router-link>
                    </li>
                </ul> -->
                <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li class="flex items-center">
                        <router-link 
                            class="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            to="about">
                            <i class="lg:text-slate-200 text-slate-400 far fa-file-alt text-lg leading-lg mr-2" />
                            Quiénes somos
                        </router-link>
                    </li>
                    <li class="flex items-center">
                        <a class="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            :href="URL_INSTAGRAM"
                            target="_blank">
                            <i class="lg:text-slate-200 text-slate-400 fab fa-instagram text-lg leading-lg" />
                            <span class="lg:hidden inline-block ml-2">Instagram</span>
                        </a>
                    </li>

                    <li class="flex items-center">
                        <a class="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            :href="URL_FACEBOOK"
                            target="_blank">
                            <i class="lg:text-slate-200 text-slate-400 fab fa-facebook-f text-lg leading-lg" />
                            <span class="lg:hidden inline-block ml-2">Facebook</span>
                        </a>
                    </li>

                    <!-- <li class="flex items-center">
                        <a class="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="https://github.com/creativetimofficial/vue-notus?ref=vn-auth-navbar" target="_blank">
                            <i class="lg:text-slate-200 text-slate-400 fab fa-github text-lg leading-lg" />
                            <span class="lg:hidden inline-block ml-2">Star</span>
                        </a>
                    </li> -->

                    <!-- <li class="flex items-center">
                        <button
                            class="bg-white text-slate-700 active:bg-slate-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                            type="button">
                            <i class="fas fa-arrow-alt-circle-down"></i> Download
                        </button>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PagesDropdown from "../Dropdowns/PagesDropdown.vue";
import logo from "../../assets/img/AMIGA_BLANCO.png";
import { URL_INSTAGRAM, URL_FACEBOOK } from "../../enviroments/Enviroments";

export default defineComponent({
    data() {
        return {
            navbarOpen: false,
            logo,
            URL_INSTAGRAM,
            URL_FACEBOOK
        };
    },
    methods: {
        setNavbarOpen: function () {
            this.navbarOpen = !this.navbarOpen;
        },
    },
    components: {
        PagesDropdown,
    },
});
</script>
