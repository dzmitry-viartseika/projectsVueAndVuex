
<template>
    <v-content v-model="successful" v-if="!successful">
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card >
                        <v-toolbar dark color="dark">
                            <v-toolbar-title class="login__title"><h3>Sign Up Form</h3></v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <v-text-field
                                        prepend-icon="person"
                                        name="login"
                                        label="Login"
                                        type="text"
                                        v-model="login"
                                        :counter="6"
                                        :rules="nameRules"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        id="password"
                                        prepend-icon="lock"
                                        name="password"
                                        label="Password"
                                        v-model="password"
                                        type="password"
                                        :rules="passwordRules"
                                        required

                                ></v-text-field>
                                <v-text-field
                                        id="confirmPassword"
                                        prepend-icon="repeat"
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        v-model="confirmPassword"
                                        type="password"
                                        :rules="confirmPass"
                                        required
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn color="primary"
                                   @click="sendForm()"
                                   :disabled="!valid"
                            >Create Account</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>


<script>
    export default {
        name: "Register",
        data() {
            return {
                login: '',
                password: '',
                confirmPassword: '',
                valid: true,
                successful: false,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters'
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 6) || 'Password must be equal or than 6 characters'
                ],
                confirmPass: [
                    v => !!v || 'Password is required',
                    v => (v === this.password) || 'Password should match'
                ]
            }
        },
        methods: {
            sendForm() {
                if (this.$refs.form.validate()) {
                    const user = {
                        login: this.login,
                        password: this.password,
                    };
                    this.successful = true;
                    console.log(user)
                }

            }
        }
    }
</script>

<style scoped>

</style>
