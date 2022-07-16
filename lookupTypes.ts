// https://www.youtube.com/watch?v=K0zc_fx3vkk&list=PLYvdvJlnTOjF6aJsWWAt7kZRJvzw-en8B&index=1

interface ISubmitRequest {
  user: {
    school: {
      code: number;
    }[];
    college: {
      code: number;
    };
  };
  token: {
    refresh: string;
  };
}

/*
🆂🅸🅼🅿🅻🅴 
*/

function getToken(): ISubmitRequest['token'] {
  return {
    refresh: 'something',
  };
}

/*
🅽🅴🆂🆃🅴🅳
*/

// Primitive
function getToken2(): ISubmitRequest['token']['refresh'] {
  return 'something';
}

// Object
function getCollegeCode(): ISubmitRequest['user']['college'] {
  return {
    code: 1234,
  };
}

// Array
function getSchholCode(): ISubmitRequest['user']['school'][0] {
  return {
    code: 1234,
  };
}

// By Extracting Type
type TypeCollegeCode = ISubmitRequest['user']['college'];

function getCollegeCode2(): TypeCollegeCode {
  return {
    code: 1234,
  };
}
