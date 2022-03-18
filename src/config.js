const API_DEV = 'http://localhost:4000/api/';
const API_PRODUCT = 'https://admin.pickpic.co.kr/api/';
const apiUrl = process.env.NODE_ENV === 'development' ? API_DEV : API_PRODUCT;

export default apiUrl;
