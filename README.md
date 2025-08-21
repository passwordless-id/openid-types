# openid-types

Typescript type definitions for the OpenID Connect protocol. See https://openid.net/specs/openid-connect-core-1_0.html


## /authorize

| Parameter             | Specification(s)         | Description                                                                                   |
|-----------------------|--------------------------|-----------------------------------------------------------------------------------------------|
| `client_id`           | OAuth2                   | Client identifier                                                                             |
| `response_type`       | OAuth2                   | Type of response desired (e.g., `code`, `token`, `id_token`)                                  |
| `response_mode`       | OAuth2                   | How the result is returned (`query`, `fragment`, `form_post`)                                 |
| `redirect_uri`        | OAuth2                   | Redirection endpoint                                                                          |
| `scope`               | OAuth2                   | Requested scope(s)                                                                            |
| `state`               | OAuth2                   | Opaque value to maintain state between request and callback                                   |
| `code_challenge`      | PKCE                     | PKCE code challenge                                                                           |
| `code_challenge_method` PKCE                     | PKCE code challenge method (`plain`, `S256`)                                                  |
| `nonce`               | OIDC                     | String value to associate a client session with an ID token                                   |
| `display`             | OIDC                     | Display mode for authentication UI (`page`, `popup`, `touch`, `wap`)                          |
| `prompt`              | OIDC                     | How the Authorization Server prompts the user (`none`, `login`, `consent`, `select_account`)  |
| `max_age`             | OIDC                     | Maximum authentication age in seconds before re-login must occur                              |
| `ui_locales`          | OIDC                     | Preferred languages for the UI                                                                |
| `id_token_hint`       | OIDC                     | Previously issued ID Token as a hint                                                          |
| `login_hint`          | OIDC                     | Hint about the login identifier                                                               |
| `acr_values`          | OIDC                     | Requested Authentication Context Class Reference values                                       |
| `request`             | OIDC                     | JWT containing authorization request parameters                                               |
| `request_uri`         | OIDC                     | URI referencing a JWT with request parameters                                                 |
| `claims`              | OIDC                     | Requested claims about the user                                                               |

## /token

| Parameter         | Specification(s) | Description                                                                                   |
|-------------------|------------------|-----------------------------------------------------------------------------------------------|
| `client_id`       | OAuth2           | Client identifier                                                                             |
| `client_secret`   | OAuth2           | Client secret (required for confidential clients)                                             |
| `grant_type`      | OAuth2           | Grant type (`authorization_code`, `client_credentials`, `refresh_token`, `password`)          |
| `code`            | OAuth2           | Authorization code received from the `/authorize` endpoint                                    |
| `redirect_uri`    | OAuth2           | Redirect URI used in the authorization request                                                |
| `refresh_token`   | OAuth2           | Refresh token used to obtain a new access token                                               |
| `username`        | OAuth2           | Username for password grant type                                                              |
| `password`        | OAuth2           | Password for password grant type                                                              |
| `code_verifier`   | PKCE             | Code verifier used in PKCE flow                                                               |


