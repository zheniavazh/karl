const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const USERID_KEY = "user-local-id";
const EXPIRES_KEY = "jwt-expires";
const EMAIL_KEY = "email";
const ADMIN_KEY = "is-admin";

export function setTokens({
    accessToken,
    refreshToken,
    userId,
    expiresIn = 3600,
}) {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(USERID_KEY, userId);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
}

export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
}

export function getUserId() {
    return localStorage.getItem(USERID_KEY);
}

export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY);
}

export function removeAuthData() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(EXPIRES_KEY);
    localStorage.removeItem(EMAIL_KEY);
}

export function setEmail(email) {
    localStorage.setItem(EMAIL_KEY, email);
}

export function getEmail() {
    return localStorage.getItem(EMAIL_KEY);
}

export function setIsAdmin() {
    localStorage.setItem(ADMIN_KEY, true);
}

export function getIsAdmin() {
    return localStorage.getItem(ADMIN_KEY);
}

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getUserId,
    getTokenExpiresDate,
    removeAuthData,
    setEmail,
    getEmail,
    setIsAdmin,
    getIsAdmin,
};

export default localStorageService;
