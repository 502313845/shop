<template>
   <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">Gshop</h2>
          
        </div>
        <div class="login_content">
          <form @submit.prevent="login">
            
            <div :class="{on:loginWay}">
              <section>
                <section class="login_message">
                  <input type="text" maxlength="11" placeholder="Phone/E-mail/Username" v-model="name">
                </section>
                <section class="login_verification">
                  <input type="password" maxlength="8" placeholder="Enter your Password" v-if="!showPwd" v-model="pwd">
                  <input type="text" maxlength="8" placeholder="Enter your Password" v-else v-model="pwd">
                  <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                    <div class="switch_circle" :class="{right:showPwd}"></div>
                    <span class="switch_text">{{showPwd?'abc':'...'}}</span>
                  </div>
                </section>
                <section class="login_message">
                  <input type="text" maxlength="11" placeholder="Verify" v-model="captcha">
                  <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" @click="getCaptcha" ref="captcha">
                </section>
              </section>
            </div>
            <button class="login_submit">Login</button>
          </form>
          <a href="javascript:;" class="about_us">About Us</a>
        </div>
        <a href="javascript:" class="go_back" @click="$router.back()">
          <i class="iconfont icon-jiantou2"></i>
        </a>
      </div>
      <Alerttip :alertText="alertText" v-show="showAlert" @closeTip="closeTip"/>
    </section>
</template>


<script>
import Alerttip from '../../components/AlertTip/alertTip'
import {reqPwdLogin} from '../../api'
export default {
    data(){
        return {loginWay:true,
        cT:0,
        showPwd:false,
        pwd:"",
        name:"",
        captcha:"",
        alertText:"",
        showAlert:false,
        code:""
        }

    },
    

    methods: {
      
          closeTip(){
              this.showAlert=false;
              this.alertText=""

          },
        async  login(){
              if(this.loginWay){
               
                   const{name,pwd,captcha}=this

                   if(!name){
                      this.showAlert=true;
                        this.alertText="Enter correct name"
                        return
                   }else if(!pwd){
                      this.showAlert=true;
                        this.alertText="Enter correct password"
                         return
                   }else if(!captcha){
                      this.showAlert=true;
                        this.alertText="Enter correct captcha"
                             return
                   }
                   const result= await reqPwdLogin({name,pwd,captcha})
                   if (result.code===0){
                        const user=result.data
                        this.$store.dispatch('recordUser',user)
                        this.$router.replace('/profile')

                   }else{
                      const msg =result.msg
                      this.showAlert=true;
                      this.getCaptcha()
                        this.alertText=msg
                   }
              }



          },
          getCaptcha(){
            this.$refs.captcha.src="http://localhost:4000/captcha?time="+Date.now()

          }
         
    },
    components: {
      Alerttip
      }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .loginContainer
      width 100%
      height 100%
      background #fff
      .loginInner
        padding-top 60px
        width 80%
        margin 0 auto
        .login_header
          .login_logo
            font-size 40px
            font-weight bold
            color #02a774
            text-align center
          .login_header_title
            padding-top 40px
            text-align center
            >a
              color #333
              font-size 14px
              padding-bottom 4px
              &:first-child
                margin-right 40px
              &.on
                color #02a774
                font-weight 700
                border-bottom 2px solid #02a774
        .login_content
          >form
            >div
              display none
              &.on
                display block
              input
                width 100%
                height 100%
                padding-left 10px
                box-sizing border-box
                border 1px solid #ddd
                border-radius 4px
                outline 0
                font 400 14px Arial
                &:focus
                  border 1px solid #02a774
              .login_message
                position relative
                margin-top 16px
                height 48px
                font-size 14px
                background #fff
                 
                .get_verification
                  position absolute
                  top 50%
                  right 10px
                  transform translateY(-50%)
                  border 0
                  color #F5F5F5
                  font-size 14px
                  background transparent
                  &.right_phone
                    color black
              .login_verification
                position relative
                margin-top 16px
                height 48px
                font-size 14px
                background #fff
                .switch_button
                  font-size 12px
                  border 1px solid #ddd
                  border-radius 8px
                  transition background-color .3s,border-color .3s
                  padding 0 6px
                  width 30px
                  height 16px
                  line-height 16px
                  color #fff
                  position absolute
                  top 50%
                  right 10px
                  transform translateY(-50%)
                  &.off
                    background #fff
                    .switch_text
                      float right
                      color #ddd
                  &.on
                    background #02a774
                  >.switch_circle
                    //transform translateX(27px)
                    position absolute
                    top -1px
                    left -1px
                    width 16px
                    height 16px
                    border 1px solid #ddd
                    border-radius 50%
                    background #fff
                    box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                    transition transform .3s
                    &.right
                     transform translateX(30px)
              .login_hint
                margin-top 12px
                color #F5F5F5
                font-size 14px
                line-height 20px
                >a
                  color #02a774
            .login_submit
              display block
              width 100%
              height 42px
              margin-top 30px
              border-radius 4px
              background #4cd96f
              color #fff
              text-align center
              font-size 16px
              line-height 42px
              border 0
          .about_us
            display block
            font-size 12px
            margin-top 20px
            text-align center
            color #999
        .go_back
          position absolute
          top 5px
          left 5px
          width 30px
          height 30px
          >.iconfont
            font-size 20px
            color #999


</style>