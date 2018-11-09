
<template>
<div class="app">
  <div style="width:100%; height:50px; text-align:left">
    <i style="font-size:20pt; margin-top:5px; color:#888888" @click="goback()" class="el-icon-arrow-left"></i> 
  </div>
  <img alt="Vue logo" src='../assets/signlogo.png'>
  <h3>Sign in</h3>
  <el-alert
    title="username already exist"
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
  <el-form-item prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="reenter your password"></el-input>
  </el-form-item>
   <el-form-item>
    <el-button style="width:100%" type="primary" @click="submitForm('ruleForm2')">Sign in</el-button>
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
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("please enter your password again"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("two input passwords do not match!"));
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
        checkPass: "",
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
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
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
        axios.post("api/users",obj).then(res => {
          if(res.data){
            this.userExistAlert = true
          console.log("user already exitst")}
          else{
            this.$notify({
            title: "SIGN IN",
            message: "sign in successful",
            type: "success"
          });
          this.$router.push({path: '/'});//跳转到主页
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
