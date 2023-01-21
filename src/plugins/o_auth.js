import Oidc from 'oidc-client';

const mgr = new Oidc.UserManager({
    authority: 'https://localhost:44332',
    client_id: 'SchoolAttendanceBackend_App',
    redirect_uri: 'http://localhost:8080',
    response_type: 'code',
    scope: 'offline_access SchoolAttendanceBackend',
    client_secret: '1q2w3E*',
    userStore: new Oidc.WebStorageStateStore({store: window.localStorage}),
})

export default mgr;