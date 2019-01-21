<template>
  <div>
    <el-form :model="addUser" ref="addUser" :rules="rules2" label-width="100px" status-icon>
      <el-form-item label="Name" prop="name">
        <el-input type="text" v-model.number="addUser.name"></el-input>
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input type="number" v-model="addUser.age"></el-input>
      </el-form-item>
      <el-form-item label="Sex" prop="sex">
        <el-select v-model="addUser.sex">
          <el-option
            v-for="item in options"
            :label="item.label"
            :key="item.value"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary" @click="submitForm(peopleData)">Create</el-button> -->
        <el-button type="primary" @click="submitForm('addUser')">Create</el-button>
      </el-form-item>
    </el-form>
    <!-- <PeopleTable/> -->
  </div>
</template>
<script>
import PeopleTable from "./PeopleTable";
// import router from "../../router/index.js"
export default {
  name: "addUser",
  components: {
    PeopleTable
  },
  data() {
    var validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不为空"));
      }
    };
    var validateName = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("姓名不能为空"));
      }
    };
    var validateSex = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("性别不能为空"));
      }
    };
    return {
      options: [
        {
          value: "Male",
          label: "Male"
        },
        {
          value: "Female",
          label: "Female"
        }
      ],
      addUser: {
        name: "",
        age: "",
        sex: ""
      },
      rules2: {
        name: [
          {
            // validator: validateName,
            message: "请输入姓名",
            required: true,
            trigger: "blur"
          }
        ],
        age: [
          {
            // validator: validateAge,
            message: "请输入年龄",
            trigger: "blur",
            required: true
          }
        ],
        sex: [
          {
            //  validator: validateSex,
            trigger: "blur",
            message: "请选择性别",
            required: true
          }
        ]
      },
      peopleData: [
       
      ]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.peopleData.push(this.addUser);
          // 添加完newPerson对象后，重置newPerson对象
          this.addUser = { name: "", age: 0, sex: "Male" };
          this.$router.push({
            path: "/main/userTable",
            query: {
              data: this.peopleData
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

