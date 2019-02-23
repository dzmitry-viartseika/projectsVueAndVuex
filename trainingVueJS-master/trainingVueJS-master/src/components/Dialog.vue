<template>
    <v-dialog width="400px" v-model="dialog">
        <v-btn class="primary" slot="activator">BUY</v-btn>
        <v-card>
            <v-layout row>
                <v-flex xs12>
                    <v-card-title>
                        <h1 class="text--primary">Buy Product</h1>
                    </v-card-title>
                </v-flex>
            </v-layout>
        </v-card>
        <v-card>
            <v-divider></v-divider>
            <v-layout row>
                <v-flex xs12>
                    <v-form ref="form" v-model="valid" lazy-validation>
                    <v-card-text>
                        <v-text-field
                                name="Name"
                                label="Name"
                                type="text"
                                v-model="name"
                                :rules="nameRules"
                                required
                        ></v-text-field>
                        <v-text-field
                                name="Phone"
                                label="Phone"
                                v-model="phone"
                                :counter="7"
                                :rules="phoneRules"
                                required
                                placeholder="X-XX-XX-XX"
                        ></v-text-field>
                    </v-card-text>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-card>
        <v-card>
            <v-divider></v-divider>
            <v-layout row>
                <v-flex xs12>
                    <v-card-actions>
                       <v-spacer>
                           <v-btn dark @click="dialog = false">Cancel</v-btn>
                           <v-btn dark
                                  @click="submit"
                                  :disabled="!valid"
                           >Save</v-btn>
                       </v-spacer>
                    </v-card-actions>
                </v-flex>
            </v-layout>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Dialog",
        data() {
            return {
                dialog: false,
                name: '',
                phone: '',
                valid: true,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length >= 3) || 'Name must be less than 3 characters'
                ],
                phoneRules: [
                    v => !!v || 'Phone is required',
                    v => (v && v.length == 7) || 'Phone must be better than 6 or equal 7'
                ]
            }
        },
        methods: {
            submit() {
                 if (this.$refs.form.validate()) {
                    const info = {
                        name: this.name,
                        phone: this.phone
                    }
                    console.log(info)
                    this.dialog = false
                }
            }
        }
    }
</script>

<style scoped>

</style>
