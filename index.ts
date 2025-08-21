/**
 * /authorize endpoint parameters according to the OAuth 2.1, PKCE and OpenID specification.
 */
export interface AuthorizeParams {
    /**
     * The client identifier as described in Section 2.2 of the OAuth 2.1 specification.
     */
    client_id: string;

    /**
     * The response type as described in Section 3.1.1 of the OAuth 2.1 specification.
     */
    response_type: 'none' | 'code' | 'token' | 'id_token' | 'code id_token' | 'code token' | 'id_token token' | 'code id_token token';

    /**
     * The redirect URI to which the authorization server will send the user-agent back once access is granted (or denied).
     */
    redirect_uri?: string;

    /**
     * The scope of the access request as described in Section 3.3 of the OAuth 2.1 specification.
     */
    scope?: string;

    /**
     * A unique identifier for the authorization request, used to prevent replay attacks.
     */
    state?: string;

    /**
     * The code challenge used in the PKCE (Proof Key for Code Exchange) flow, as described in Section 4.3 of the OAuth 2.1 specification.
     */
    code_challenge?: string;
    
    /**
     * The method used to transform the code challenge, as described in Section 4.3 of the OAuth 2.1 specification.
     */
    code_challenge_method?: 'plain' | 'S256';

    /**
     * String value to associate a client session with an ID token.
     * See: https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
     */
    nonce?: string;

    /**
     * Display mode for authentication UI. Allowed values: 'page', 'popup', 'touch', 'wap'.
     * See: https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
     */
    display?: 'page' | 'popup' | 'touch' | 'wap';

    /**
     * How the Authorization Server prompts the user.
     * See: https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
     */
    prompt?: string;

    /**
     * Maximum authentication age in seconds.
     * See: https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
     */
    max_age?: number;

    /**
     * Preferred languages and scripts for the UI.
     * See: https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
     */
    ui_locales?: string;

    /**
     * Previously issued ID Token as a hint.
     * See: https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
     */
    id_token_hint?: string;

    /**
     * Hint to the Authorization Server about the login identifier.
     * See: https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
     */
    login_hint?: string;

    /**
     * Requested Authentication Context Class Reference values.
     * See: https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
     */
    acr_values?: string;

    /**
     * JWT containing authorization request parameters.
     * See: https://openid.net/specs/openid-connect-core-1_0.html#JWTRequests
     */
    request?: string;

    /**
     * URI referencing a JWT with request parameters.
     * See: https://openid.net/specs/openid-connect-core-1_0.html#JWTRequests
     */
    request_uri?: string;

    /**
     * Requested claims about the user.
     * See: https://openid.net/specs/openid-connect-core-1_0.html#ClaimsParameter
     */
    claims?: string;
}



/**
 * Parameters for the /token endpoint
 */
export interface TokenParams {
    /**
     * The client identifier as described in Section 2.2 of the OAuth 2.1 specification.
     */
    client_id: string;

    /**
     * The client secret as described in Section 2.3 of the OAuth 2.1 specification.
     */
    client_secret?: string;

    /**
     * The grant type as described in Section 4.1 of the OAuth 2.1 specification.
     */
    grant_type: 'authorization_code' | 'client_credentials' | 'refresh_token' | 'password';

    /**
     * The authorization code received from the /authorize endpoint.
     */
    code?: string;

    /**
     * The redirect URI used in the authorization request.
     */
    redirect_uri?: string;

    /**
     * The refresh token used to obtain a new access token.
     */
    refresh_token?: string;

    /**
     * The username for password grant type.
     */
    username?: string;

    /**
     * The password for password grant type.
     */
    password?: string;
    /**
     * The code verifier used in the PKCE flow.
     */
    code_verifier?: string;
}