import Cookies from 'js-cookie';

export function setLogin (value) {
    Cookies.set('login', value)
}

export function isAuthenticated() {
    return !!Cookies.get('login')
}