<template>
    <div class="header_wrapper" style="border-bottom:0.5px solid #cecece;">
        <div class="topbar bg-dor-lig flex justify-between px-2 items-center h-[25px] text-xs px-2 dark:bg-dor-1000 dark:text-white">
            <div class="dateTime">
                {{dateTime}}
            </div>
        </div>
        <div class="header bg-white dark:bg-dor-500 p-3 flex items-center justify-between">
            <div class="header_logo flex items-center justify-center p-1">
                <h3 class="dark:text-white text-lg font-bold flex items-center gap-3.5">
                    <img class="w-8" src="../../assets/logo/logo.png" alt="logo" />
                    Skin Showcase
                </h3>
            </div>
            <!-- Menu Skins --> 
            <div v-if="user_valid" class="menu flex items-center gap-3">
                <div class="menu-item hover:bg-gray-200 duration-300  p-[15px] border-b-2 hover:border-b-2 duration-300 hover:border-green-400 hover:scale-110 dark:text-white">
                    <div v-if="isNew" class="new relative">
                        <img src="../../assets/new.png" class="new_label absolute w-[42px] right-[-30px] top-[-40px]" alt="new-label" />
                    </div>
                    <router-link to="/release1" class="dark:text-white text-xs">DEMO Release stile 365</router-link>
                </div>
                <!--<div class="menu-item p-[15px] border-b-2 hover:border-b-2 duration-300 hover:border-yellow-400 hover:scale-110 dark:text-white">
                    <router-link to="/release2" class="dark:text-white text-xs">DEMO Release stile goldbet</router-link>
                </div>
                <div class="menu-item p-[15px] border-b-2 hover:border-b-2 duration-300 hover:border-red-400 hover:scale-110 dark:text-white">
                    <router-link to="/release3" class="dark:text-white text-xs">Release stile Chigago Bulls</router-link>
                </div>
                <div class="menu-item p-[15px] border-b-2 hover:border-b-2 duration-300 hover:border-red-400 hover:scale-110 dark:text-white">
                    <router-link to="/release4" class="dark:text-white text-xs">Release stile Retr??</router-link>
                </div>
                <div class="menu-item p-[15px] border-b-2 hover:border-b-2 duration-300 hover:border-red-400 hover:scale-110 dark:text-white">
                    <router-link to="/release5" class="dark:text-white text-xs">Release stile Classic</router-link>
                </div>-->
            </div>
            <div class="header_rightSide flex items-center gap-3">
                <!-- Auth -->
                <div v-if="!user_valid" class="auth flex items-center gap-3">
                    <button @click="openPopup" class="action-btn text-black flex items-center h-10 px-5 transition rounded ease-in-out delay-150 border border-black  hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white hover:border-white duration-300">Login</button>
                    <button class="action-btn text-black flex items-center h-10 transition ease-in-out delay-150 px-5 rounded hover:-translate-y-1 hover:scale-110 border border-black  hover:bg-black hover:text-white hover:border-white duration-300">Contact us</button>
                </div>
                <div v-if="user_valid" class="logged_user">
                    <span class="dark:text-white">Welcome back, <span class="user uppercase dark:text-dor-100 text-green-800 font-bold">{{this.logged_user}}</span></span>
                </div>
                <div v-if="this.user_valid" class="logoutSection flex items-center justify-center" style="height:100%;">
                    <button class="flex bg-green-600 text-white justify-center items-center rounded px-2 h-[35px]"  @click="logout">Logout</button>
                </div>
                <!-- Dark Mode Toggle -
                <button v-if="!darkMode" @click="toggleDarkMode" class="dark:text-white text-white border border-white p-3 rounded-lg flex items-center gap-1"><i class="fa fa-moon-o" aria-hidden="true"></i><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></button>
                <button v-if="darkMode" @click="toggleDarkMode" class="dark:text-white text-white border border-white p-3 rounded-lg flex items-center gap-1"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></button>
                -->
                <!-- Login / Register popup -->
                <Popup :closePopup="closePopup" v-if="statusPopup">
                    <Login :userIsValid="userIsValid"/>
                </Popup>
            </div>
        </div>

        <!-- Demo popup -->
        <div style="z-index:99;" :class="showCookiePopup ? 'demopopup border bg-black text-white absolute w-[100%] h-[60px] flex gap-3 items-center bottom-0 px-2' : 'demopopup close border bg-black text-white absolute w-[100%] h-[60px] flex gap-3 items-center bottom-0 px-2'">
            <h3 class="text-dor-100 titleCok border-dor-100 whitespace-nowrap mr-2">KEEP IN MIND</h3>
            <p>Welcome to our website! Please note that this is a demo site, intended for showcasing our capabilities and features. The information displayed on this site is for demonstration purposes only and may not be accurate or up-to-date. If you have any questions or concerns, please feel free to contact us. Thank you for visiting!</p>
            <button class="bg-dor-500 acceptCon p-2 flex items-center justify-center hover:bg-green-600 duration-300" @click="acceptCookiePolicy">Accept</button>
        </div>
    </div>
</template>

<script>
import Popup from '../Commons/AuthPopup.vue'
import Login from '../Auth/Login.vue'

export default {
    name:'HeaderComponent',
    data() {
        return {
        darkMode: true,
        statusPopup: false,
        dateTime: '',
        showCookiePopup: true,
        isNew: true,
        user_valid: false,
        logged_user: ''
        }
    },
    methods: {
        toggleDarkMode() {
        if(this.darkMode === false) {
            document.documentElement.classList.add('dark')
        } else if (this.darkMode === true) {
            document.documentElement.classList.remove('dark')
        }
        this.darkMode = !this.darkMode 
        },
        openPopup() {
            this.statusPopup = true
        },
        closePopup() {
            this.statusPopup = false
        },
        acceptCookiePolicy() {
            localStorage.setItem('cookiePolicyAccepted', true);
            this.showCookiePopup = false;
        },
        userIsValid(user) {
            localStorage.setItem('user', user.toString());
            console.log('Login Success for ' + user)
            this.user_valid = true
            this.closePopup()
            this.logged_user = localStorage.getItem('user')
        },
        logout() {
            localStorage.removeItem('user')
            location.reload();
        }
    },
    mounted() {
        setInterval(() => {
            this.dateTime = new Date().toString()
        }, 1000)

        if(localStorage.getItem('cookiePolicyAccepted')) {
            this.showCookiePopup = false;
        }

        if(!localStorage.getItem('user')){
            this.user_valid = false;
        } else {
            this.user_valid = true;
            this.logged_user = localStorage.getItem('user')
        }

    },
    components: {
        Popup,
        Login
    },
}
</script>

<style lang="scss" scoped>
@import '../../style.scss';

.demopopup {
    transition:0.4s all cubic-bezier(0.6, -0.28, 0.735, 0.045);
    overflow:hidden;
    background: rgb(0 0 0 / 50%);
    &.close {
        height:0!important;
        transition:0.4s allcubic-bezier(0.6, -0.28, 0.735, 0.045)
    }
    @include mobile {
        height:auto;
        flex-direction: column;
        align-items: center;
        padding: 0 20px;
        background:rgb(0 0 0 / 76%);
        gap:0;
    }
    .titleCok {
        @include mobile {
            --tw-text-opacity: 1;
            color: rgb(46 193 147 / var(--tw-text-opacity));
            height: 35px;
            align-items: center;
            display: flex;
            width: 100%;
            justify-content: center;
        }
    }
    .acceptCon {
        @include mobile {
            width: 100%;
            margin: 0.5rem 0;
        }
    }
}

.menu-item.dark\:text-white {
    border-radius: 8px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    color: #404040;
    font-size: 14px;
    text-transform: uppercase;
}

.topbar {
    @include mobile {
        height:60px;
    }
    .dateTime {
        @include mobile {

        }
    }
}
.header {
    @include mobile {
        display: block;
    }

    .header_logo  {
        @include mobile {
            margin-bottom: 0.5rem;
        }
    }

    .menu {
        @include mobile {
            display: flex;
            width: 100%;
            min-width: 100%;
            overflow-x: scroll;
        }
        .menu-item {
            @include mobile {
                min-width: 200px;
                border: 1px solid #cece;
                white-space: nowrap;
                justify-content: center;
                display: flex;
                margin-bottom: 0.5rem;
            }
        }
    }

    .logged_user {
        @include mobile {
            display:none;
        }
    }

    .auth {
        @include mobile {
            width: 100%;
        }
    }

    .action-btn {
        @include mobile {
            display: flex;
            flex: 1;
            justify-content: center;
            border: 1px solid #cecece!important;
        }
    }
    .logoutSection {

        @include mobile {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
        }
    }
    .logoutSection button {
        width:100%!important;
        background:rgb(123, 10, 10);
    }
}
</style>