/**
 * /authorize endpoint parameters according to the OAuth 2.1, PKCE and OpenID specification.
 * See: https://openid.net/specs/openid-connect-core-1_0.html
 * See: https://datatracker.ietf.org/doc/html/rfc6749
 * See: https://datatracker.ietf.org/doc/html/rfc7636
 * See: https://datatracker.ietf.org/doc/html/rfc8252
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
 * Parameters for the /token endpoint.
 * See https://openid.net/specs/openid-connect-core-1_0.html
 * See https://datatracker.ietf.org/doc/html/rfc6749
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

/**
 * OpenID Connect configuration metadata located at `/.well-known/openid-configuration`
 * as per the OpenID Connect Discovery specification.
 * See: https://openid.net/specs/openid-connect-discovery-1_0.html
 * See: https://datatracker.ietf.org/doc/html/rfc8414
 */
interface OpenIDConfiguration {
    /**
     * The issuer identifier for the OpenID Provider.
     * See: https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
     */
    issuer: string;

    /**
     * The URL of the authorization endpoint.
     * Used to initiate the OAuth 2.0/OpenID Connect authorization flow.
     */
    authorization_endpoint: string;

    /**
     * The URL of the token endpoint.
     * Used to exchange authorization codes for tokens.
     */
    token_endpoint: string;

    /**
     * The URL of the user info endpoint.
     * Used to retrieve claims about the authenticated end-user.
     */
    userinfo_endpoint?: string;

    /**
     * Supported response types.
     * Lists the OAuth 2.0 response_type values that this OP supports.
     */
    response_types_supported: string[];

    /**
     * Supported grant types.
     * Lists the OAuth 2.0 grant_type values that this OP supports.
     */
    grant_types_supported: string[];

    /**
     * Supported scopes.
     * Lists the OAuth 2.0 scope values that this OP supports.
     */
    scopes_supported: string[];

    /**
     * Supported authentication methods.
     * Lists the Authentication Context Class Reference values that this OP supports.
     */
    acr_values_supported?: string[];

    /**
     * Supported code challenge methods for PKCE.
     * Lists the PKCE code challenge methods supported by this OP.
     */
    code_challenge_methods_supported?: string[];

    /**
     * Supported claims.
     * Lists the claim names that this OP may be able to supply values for.
     */
    claims_supported?: string[];

    /**
     * The URL of the OpenID Provider's JSON Web Key Set (JWKS).
     * Used to retrieve the public keys used to verify signatures.
     */
    jwks_uri: string;

    /**
     * The URL for dynamic client registration.
     * Used to register clients dynamically with the OP.
     */
    registration_endpoint?: string;

    /**
     * Supported response modes.
     * Lists the OAuth 2.0 response_mode values that this OP supports.
     */
    response_modes_supported?: string[];

    /**
     * Supported subject types.
     * Lists the subject identifier types supported (e.g., "public", "pairwise").
     */
    subject_types_supported?: string[];

    /**
     * Supported signing algorithms for ID Token.
     * Lists the JWS signing algorithms supported for the ID Token.
     */
    id_token_signing_alg_values_supported?: string[];

    /**
     * Supported encryption algorithms for ID Token.
     * Lists the JWE encryption algorithms supported for the ID Token.
     */
    id_token_encryption_alg_values_supported?: string[];

    /**
     * Supported encryption encodings for ID Token.
     * Lists the JWE encryption encodings supported for the ID Token.
     */
    id_token_encryption_enc_values_supported?: string[];

    /**
     * Supported signing algorithms for UserInfo.
     * Lists the JWS signing algorithms supported for the UserInfo endpoint.
     */
    userinfo_signing_alg_values_supported?: string[];

    /**
     * Supported encryption algorithms for UserInfo.
     * Lists the JWE encryption algorithms supported for the UserInfo endpoint.
     */
    userinfo_encryption_alg_values_supported?: string[];

    /**
     * Supported encryption encodings for UserInfo.
     * Lists the JWE encryption encodings supported for the UserInfo endpoint.
     */
    userinfo_encryption_enc_values_supported?: string[];

    /**
     * Supported signing algorithms for request objects.
     * Lists the JWS signing algorithms supported for request objects.
     */
    request_object_signing_alg_values_supported?: string[];

    /**
     * Supported encryption algorithms for request objects.
     * Lists the JWE encryption algorithms supported for request objects.
     */
    request_object_encryption_alg_values_supported?: string[];

    /**
     * Supported encryption encodings for request objects.
     * Lists the JWE encryption encodings supported for request objects.
     */
    request_object_encryption_enc_values_supported?: string[];

    /**
     * Supported authentication methods at the token endpoint.
     * Lists the client authentication methods supported at the token endpoint.
     */
    token_endpoint_auth_methods_supported?: string[];

    /**
     * Supported signing algorithms for token endpoint authentication.
     * Lists the JWS signing algorithms supported for token endpoint authentication.
     */
    token_endpoint_auth_signing_alg_values_supported?: string[];

    /**
     * Supported display values.
     * Lists the display parameter values supported by the OP.
     */
    display_values_supported?: string[];

    /**
     * Supported claim types.
     * Lists the claim types supported by the OP (e.g., "normal", "aggregated", "distributed").
     */
    claim_types_supported?: string[];

    /**
     * URL to service documentation.
     * Provides the location of OP service documentation.
     */
    service_documentation?: string;

    /**
     * Supported claim languages.
     * Lists the languages supported for values in Claims.
     */
    claims_locales_supported?: string[];

    /**
     * Supported UI languages.
     * Lists the languages supported for the user interface.
     */
    ui_locales_supported?: string[];

    /**
     * Supports the "claims" parameter.
     * Indicates whether the OP supports use of the claims parameter.
     */
    claims_parameter_supported?: boolean;

    /**
     * Supports the "request" parameter.
     * Indicates whether the OP supports use of the request parameter.
     */
    request_parameter_supported?: boolean;

    /**
     * Supports the "request_uri" parameter.
     * Indicates whether the OP supports use of the request_uri parameter.
     */
    request_uri_parameter_supported?: boolean;

    /**
     * Whether "request_uri" must be registered.
     * Indicates whether the OP requires request_uri values to be pre-registered.
     */
    require_request_uri_registration?: boolean;

    /**
     * URL to the provider's policy.
     * Provides the location of the OP's policy document.
     */
    op_policy_uri?: string;

    /**
     * URL to the provider's terms of service.
     * Provides the location of the OP's terms of service document.
     */
    op_tos_uri?: string;
}