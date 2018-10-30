
<template>
<div class="app">
  <h3>Sign in</h3>
 <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2">
   <el-form-item  prop="name">
    <el-input v-model="ruleForm2.name" placeholder="username"></el-input>
  </el-form-item>
  <el-form-item prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="password"></el-input>
  </el-form-item>
  <el-form-item prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="enter your password again"></el-input>
  </el-form-item>
   <el-form-item>
    <el-button style="width:100%" type="primary" @click="submitForm('ruleForm2')">Sign in</el-button>
  </el-form-item>
  </el-form>
  
</div>
</template>

<script>
  export default {
    data() {
      
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('please enter your password'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('please enter your password again'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('two input passwords do not match!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          name:'',
          pass: '',
          checkPass: '',
        },
        rules2: {
          name: [
            { required: true, message: 'please enter your username', trigger: 'blur' },
            { min: 3, max: 5, message: 'The length is 3 to 5 characters', trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>


<style scoped>
.app{
    /* background-color: #eee; */
    height: 300px;
    padding: 5px;
}

</style>
