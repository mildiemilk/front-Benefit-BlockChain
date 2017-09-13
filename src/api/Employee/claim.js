import { APIRequest } from '../';

const CREATE_CLAIM_URI = '/api/employee/claim';

export function claim(detail, files, type) {
  console.log('claim');
  const formData = new FormData();
  formData.append('files', files);
  formData.append('detail', JSON.stringify(detail));
  console.log(detail);
  return () => {
    const options = {
      method: 'post',
      url: `${CREATE_CLAIM_URI}/${type}`,
      data: formData,
    };
    console.log('return');
    APIRequest(options, true)
    .then(res => {
      // dispatch(updatePasswordSuccess(res.data));
      console.log('res: ', res);
    })
    .catch(err => {
      // dispatch(updatePasswordFailure(err.response.data));
      console.log('err: ', err);
    });
  };
}
