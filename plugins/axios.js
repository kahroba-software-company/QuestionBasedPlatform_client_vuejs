// export default ({$axios, store}) => {
//     $axios.onRequest(config => {
//       console.log('Making request to ' + config.url)
//     })

//     $axios.onResponse(response => {
//       console.log(`[${response.status}] ${JSON.stringify(response.data)}`);
//     });
  
//     $axios.onError(err => {
//       console.log(`[${err.response && err.response.status}] ${err.response && err.response.request.path}`);
//       console.log(err.response && err.response.data);
//     })
//   }