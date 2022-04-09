import { httpGet } from './http.js';

export default function loadUser(id) {
    const data = httpGet(`http://server:8080/users/${id}`);
    return JSON.parse(data);
}
