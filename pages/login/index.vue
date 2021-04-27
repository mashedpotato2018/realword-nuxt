<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: 张泽涛
 * @LastEditors: 张泽涛
 * @LastEditTime: 2021-04-23 20:24:24
-->
<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Sign in" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <nuxt-link to="/register" v-if="isLogin"
              >Need an account?</nuxt-link
            >
            <nuxt-link to="/login" v-else>Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(messages,field) in errors">
              <li v-for="(message,index) in messages" :key="index">{{ field }} {{ message }}</li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="user.username"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
                v-model="user.email"
                
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="user.password"
                minlength="8"
                required
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? "Sign in" : "Sign up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "@/api/users";
const Cookie = process.client? require('js-cookie'):undefined
export default {
  name: "LoginIndex",
  middleware: ['notAuthenticated'],
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  data() {
    return {
      errors: {},
      user: {
        username: '',
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        // 提交表单请求登录
        const { data } = this.isLogin? await login({
          user: this.user,
        })
        : await register({
          user: this.user
        });
        // console.log(data);
        // TODO： 保存登录的状态
        this.$store.commit('setUser',data.user)
        // 为了防止数据丢失
        Cookie.set('user',data.user)

        // 跳转到首页
        this.$router.push("/");
      } catch (error) {
        this.errors = error.response.data.errors
      }
    },
  },
};
</script>

<style>
</style>