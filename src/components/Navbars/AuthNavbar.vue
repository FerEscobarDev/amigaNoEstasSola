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
                            Acerca de nosotros
                        </router-link>
                    </li>
                    <li class="flex items-center">
                        <a class="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="#"
                            target="_blank">
                            <i class="lg:text-slate-200 text-slate-400 fab fa-instagram text-lg leading-lg" />
                            <span class="lg:hidden inline-block ml-2">Instagram</span>
                        </a>
                    </li>

                    <li class="flex items-center">
                        <a class="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20VueJS%20UI%20Kit%20and%20Admin.%20Let%20Vue%20Notus%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
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

export default defineComponent({
    data() {
        return {
            navbarOpen: false,
            logo,
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
