import { APIRequest } from '.'

const UPLOADFILE_URI = '/api/uploadfile'

// const toBinaryString = (files) => { return new Promise((resolve, reject) => {
//   console.log('zzzzzzzzzzzz')
//   let rawData = [];
//   files.map(function callback(file){
//     let reader = new FileReader();
//     reader.onloadend = (e) => {
//       rawData.push(reader.result)
//       console.log('llllllll',reader.result)
//       console.log('xxxxxxxx',rawData)
//     }
//     reader.readAsDataURL(file);
//   },resolve(rawData))
//   console.log('pppppp',rawData.length)

// })}

// export function uploadFile(file) {
//   return dispatch => {
//     let options
//     toBinaryString(file)
//       .then((files)=>{
//         console.log('oooooo',files)
//         console.log('vvvvvv',files.length)
//         console.log('nnnnnn',files[0])
//           const options = {
//             method: 'post',
//             url: UPLOADFILE_URI,
//             data: {
//               files,
//             },
//           }
//           APIRequest(options, true)
//           .then(res => {
//             //dispatch(getBiddingSuccess(res.data))
//           })
//           .catch(err => {
//             //dispatch(getBiddingFailure(err.response.data))
//             console.log(err.response)
//           })
//     })
//   }
// }

export function uploadFile(file) {
  const formData = new FormData()
  formData.append('file', file)

  return () => {
    // const files = file
    const options = {
      method: 'post',
      url: UPLOADFILE_URI,
      data: formData,
    }

    APIRequest(options, true)
      .then(() => {
        // dispatch(getBiddingSuccess(res.data))
      })
      .catch(err => {
        // dispatch(getBiddingFailure(err.response.data))
        console.log(err.response)
      })
  }
}
