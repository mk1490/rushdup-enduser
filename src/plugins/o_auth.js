// import Oidc from 'oidc-client';

// const mgr = new Oidc.UserManager({
//     authority: 'https://localhost:44397',
//     client_id: 'Amoozeshyar_Admin',
//     redirect_uri: 'http://localhost:8080',
//     response_type: 'code',
//     scope: 'Amoozeshyar address profile email phone roles', // client_secret: '1q2w3E*',
//     userStore: new Oidc.WebStorageStateStore({store: window.sessionStorage}),
//     response_mode: 'query',
//     loadUserInfo: true,
// })
import {OIDCClient} from '@plusauth/oidc-client-js'

const mgr = new OIDCClient({
    issuer: 'https://localhost:44397',
    client_id: 'Amoozeshyar_Admin',
    redirect_uri: 'http://localhost:8080/callback',
    // post_logout_redirect_uri: 'http://localhost:8080/',
    response_mode: 'form_post',
    response_type: 'code',
    scope: 'Amoozeshyar address profile email phone roles',
    checkSession: true,
    autoSilentRenew: true,
    requestUserInfo: true,
})
export default mgr; 