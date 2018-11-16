
<template>
<div class="app">
  <div style="width:100%; height:50px; text-align:left">
    <i style="font-size:20pt; margin-top:5px; color:#888888" @click="goback()" class="el-icon-arrow-left"></i> 
  </div>
  <img  src='../assets/login.png'>
  <h3>Login</h3>
  <el-alert
    title="username or password incorrect"
    type="warning"
    show-icon
    v-show="userExistAlert"
    >
  </el-alert>
 <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2">
   <el-form-item  prop="name">
    <el-input v-model="ruleForm2.name" placeholder="username"></el-input>
  </el-form-item>
  <el-form-item prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="password"></el-input>
  </el-form-item>
  
   <el-form-item>
    <el-button style="width:100%" type="success" @click="submitForm('ruleForm2')">Login</el-button>
  </el-form-item>
  </el-form>
  
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("please enter your password"));
      } else {
        callback();
      }
    };
    

    var isvalidateRegexn = (rule, value, callback)=>{
      if (value != null && value != "") {
        let reg = /\W+/; //正则表达式
        if (reg.exec(value)) {//exec 是执行语句，输出一组数组
          callback(new Error('invalid username!'))
        } else {
          callback()
        }
      } else {
        callback()
      }
    };

    return {
      userExistAlert:false,
      ruleForm2: {
        name: "",
        pass: "",
      },
      rules2: {
        name: [
          {
            required: true,
            message: "please enter your username",
            trigger: "blur"
          },
          {
            min: 3,
            max: 10,
            message: "The length is 3 to 10 characters",
            trigger: "blur"
          },
          {
            validator: isvalidateRegexn,
            trigger: "blur" 
          }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
      }
    };
  },
  methods: {
    goback(){
        this.$router.push({path: '/'});


    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let obj={}
          obj.username = this.ruleForm2.name
          obj.password = this.ruleForm2.pass
          obj.type = false//判断是登陆还是注册操作
        axios.post("api/users",obj).then(res => {
          if(res.data){
              this.$notify({
            title: "LOGIN",
            message: "login successful",
            type: "success",
            
          });
          
          this.$store.state.b = this.ruleForm2.name
          console.log(this.$store.state.b)
          this.$router.push({path: '/'});//跳转到主页
            }
          else{
            this.userExistAlert = true
          console.log("username or password incorrect")
          }
      });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>


<style scoped>
.app {
  /* background-color: #eee; */
  height: 300px;
  padding: 10px;
}
</style>
