import {LocalStorageStateStore, OIDCClient} from '@plusauth/oidc-client-js'

const mgr = new OIDCClient({
    issuer: 'https://localhost:44397',
    client_id: 'Amoozeshyar_Enduser',
    redirect_uri: 'http://localhost:8081/cb',
    response_type: 'code',
    scope: 'Amoozeshyar address profile email phone roles',
    stateStore: new LocalStorageStateStore(),
    checkSession: true,
    autoSilentRenew: true,
    requestUserInfo: true,
})
export default mgr; 