<template>
    <div class="login-form auth-form">

        {{form}}

        <!--        {{$page.errors}}-->

        <!--        <article class="message is-danger" v-if="form.hasErrors()" v-for="(error, key) in $page.errors"-->
        <!--                 v-bind:key="key">-->
        <!--            <div class="message-body" v-text="error"/>-->
        <!--        </article>-->

        <form method="POST" @submit.prevent="login">
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" v-model="form.email" aria-label="email">
                    <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password" v-model="form.password"
                           aria-label="password">
                    <span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
                </p>
            </div>
            <div class="field">
                <p class="control has-text-centered">
                    <button class="button is-success">
                        Sign In
                    </button>
                </p>
            </div>
        </form>

        <inertia-link :href="route('password.request')">Forgot Password</inertia-link>

        <p>Don't have an account?
            <inertia-link :href="route('register')">Register</inertia-link>
        </p>
    </div>

</template>

<script>
    export default {
        name: "Login.vue",
        data() {
            return {
                form: {
                    email: 'mmillis1@gmail.com',
                    password: 'michael123',
                }
            }
        },
        methods: {
            login: function () {
                this.$inertia.post('/login', this.form, {
                    onSuccess: () => {
                        // Handle success event
                        console.log('Done');
                    }})
            }
        }
    }
</script>
