<template>
<div id="login">
    <b-container class="d-flex justify-content-center" fluid>
        <b-col cols="4">
        	<h3><b>Login</b></h3>
        	<br>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group id="exampleInputGroup1" label="Username" label-for="exampleInput1">
                    <b-form-input id="exampleInput1" type="text" v-model="form.username" required placeholder="Your username">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup3" label="Password" label-for="exampleInput3">
                    <b-form-input id="exampleInput3" type="password" required placeholder="Your password" v-model="form.password">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleGroup4">
                    <b-form-checkbox-group v-model="form.checked" id="exampleChecks" >
                        <b-form-checkbox value="true" unchecked-value="false">Remember me</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
                <h5 style="color:#f00">{{msg}}</h5>
                <b-button type="submit" variant="success" style="width:100%">Sign In</b-button>
				<br>
				<b-row align-h="center">
					<h6>Not register?
						<b-link :to="{path: 'signup'}">Create an account</b-link>
					</h6>
				</b-row>
            </b-form>
        </b-col>
    </b-container>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
                checked: false
            },
            show: true,
        	msg: '',
        }
    },
    mounted: function(){
    	if(this.$router.params !== undefined)
    	this.msg = this.$router.params.msg;
    	console.log(this.msg);
    },
    methods: {
        onSubmit(evt) {
			self = this;
            evt.preventDefault();
			alert(JSON.stringify(this.form));
			axios.post('http://localhost:3000/login/app4', {
				username:self.form.username,
			    password:self.form.password
			})
			.then(function (res	) {
                console.log(res);
                if(res.data.return_code == 1){
                	self.msg = '';
                    self.$router.push({path:'/signin-success', params: res.data.msg});
                }
                else if( res.data.return_code == 0){
                    self.msg = res.data.msg;
                }
			})
			.catch(function (error) {
				console.log(error);
			})
        },
        onReset(evt) {
            sefl = this;
            evt.preventDefault();
            /* Reset our form values */
            sefl.form.username = '';
            sefl.form.name = '';
            sefl.form.password = null;
            sefl.form.checked = [];
            /* Trick to reset/clear native browser form validation state */
            sefl.show = false;
            sefl.$nextTick(() => {
                sefl.show = true
            });
        }
    }
}
</script>
