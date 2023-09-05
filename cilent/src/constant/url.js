export const API_URL = "http://localhost:3055/";
// export const API_URL = "https://movies-eli.cyclic.cloud/";

// PayPal Id
export const CLIENT_ID = "YOUR_PAYPAL_CLIENT_ID";
// for TMBD key
export const API_KEY = "562dead99fa8660d7335791636c951dd";

// for TMBD language from BD
export const LANGUAGE = "he";

//? LOCAL STORAGE KEY
// FOR TOKEN
export const TOKEN_KEY = "token_Netflix";
export const MDX_PROFILEID = "MDX_PROFILEID";
export const CART_KEY = "CART_KEY";
export const GEST_ADDRES = "gest_address";

//? AUTH
export const LOGIN_ROUTE = API_URL + "users/login";
export const REGISTER_ROUTE = API_URL + "users";
// AUTH --> USER
export const CHECK_TOKEN = API_URL + "users/checkToken";
// AUTH --> MANAGER
export const CHECK_MANAGER = API_URL + "users/checkManager";
// AUTH --> ADMIN
export const CHECK_ADMIN = API_URL + "users/checkAdmin";

//?USER (NEED A TOKEN TO THIS ENDPOINT)
export const USER_INFO_ROUTE = API_URL + "users/userInfo";
export const USER_SCREENS_ROUTE = API_URL + "users/";

//?USER (NEED A TOKEN TO THIS ENDPOINT)
export const USER_ROUTE = API_URL + "users";

//?ADMIN (NEED A TOKEN TO THIS ENDPOINT && NEED TO BE ADMIN ROLE)
export const USER_LIST_ROUTE = API_URL + "users/usersList";
export const DELETE_USER_ROUTE = API_URL + "users/";
export const CHANGE_ROLE_ROUTE = API_URL + "users/changeRole";

// === SHOP === //

// (ONLY GET PRODUCT NEED A TOKEN TO THIS ENDPOINT) --> USER
// ANI ANOTHER REQUEST NEED TO BE ADMIN && SEND TOKEN (POST,PUT,DELETE,PATCH)

// CATEGORIES
export const CATEGORIES_ROUT = API_URL + "categories";

// PRODUCRTS
export const PRODUCT_ROUT = API_URL + "products";
