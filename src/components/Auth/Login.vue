<template>
    <div class="login">
        <div class="login_header">
            <h3 class="dark:text-white text-gray-500 text-lg font-bold flex flex-col items-center gap-3.5 w-96">
                <img class="w-8" src="../../assets/logo/logo.png" alt="logo" />
                Skin Showcase
            </h3>
        </div>
        <div class="login_body flex flex-col justify-center p-3 gap-3">
            <div class="already_have_account text-xs flex justify-center p-2">Already have an account? Login</div>
            <input v-model="this.username" type="text" class="p-3 bg-gray-200 rounded focus:outline-none" placeholder="Username" />
            <input v-model="this.password" type="password" class="p-3 bg-gray-200 rounded focus:outline-none" placeholder="Password" />
            <button @click="login" class="rounded bg-proton-button text-white px-4 py-2">Login</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'LoginView',
    data() {
        return {
            dbloginpath: 'http://localhost:3000/users',
            username: '',
            password: '',
        }
    },
    methods: {
        async login() {
            try {
                //const response = await axios.get(this.dbloginpath)
                // Store the JWT in local storage
                //console.log('check response from db: ', response.data[0])
                
                // Validation
                if(this.username === 'admin' && this.password === 'cacate11') {
                    this.userIsValid(this.username)
                }

                //console.log('check local storage: ', localStorage.getItem('user'))
                // Redirect to the dashboard
                
                
            } catch (error) {
                // Handle login error
                console.error(error);
            }
        },
    },
    props: {
        userIsValid: Function
    }
}
</script>