const config = {
    authority: 'https://localhost:44397/',
    client_id: 'Amoozeshyar_Admin',
    response_type: 'code',
    scope: 'Amoozeshyar address profile email phone roles',
    // https://localhost:44397/auth/signinwin/main
    redirect_uri: `http://localhost:8080/cb`,
}

module.exports = {
    handleLogin() {
        const url = config.authority + '/Account/Login/';
        
        window.location.href = url
            
    }
}