import {OIDCClient} from '@plusauth/oidc-client-js';

new OIDCClient({
    issuer: 'https://localhost:44397'
}).loginCallback();