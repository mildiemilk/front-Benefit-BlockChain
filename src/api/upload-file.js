import { APIRequest } from '.';

const UPLOADFILE_URI = '/api/uploadfile';

export function uploadFile(files) {
  const formData = new FormData();
  formData.append('files', files);

  return () => {
    // const files = file
    const options = {
      method: 'post',
      url: UPLOADFILE_URI,
      data: formData,
    };

    APIRequest(options, true)
      .then(() => {
        // dispatch(getBiddingSuccess(res.data))
      })
      .catch(err => {
        // dispatch(getBiddingFailure(err.response.data))
        console.log(err.response);
      });
  };
}
