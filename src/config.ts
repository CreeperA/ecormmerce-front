export let API: string

if(process.env.NODE_ENV === "development") {
  API = process.env.REACT_APP_DEVLOPMENT_API_URL!
} else {
  API = process.env.REACT_APP_PRODUCTION_API_URL! // 非空断言,变量后面加个 ! 表示一定有值
}