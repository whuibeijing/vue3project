import Mock from "mockjs"
import mockData from "./mockData.js"

Mock.mock("http://127.0.0.1:8080/api/mockdata","get",mockData.getData)
Mock.mock("http://127.0.0.1:8080/api/loginout","post",mockData.loginOut)