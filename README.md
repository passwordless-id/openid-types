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


## Discovery document

dagnelies: please make me a markdown table of all possible properties from the openid-configuration discovery document 

GitHub Copilot: Hier ist eine Markdown-Tabelle mit allen möglichen Properties, die im OpenID-Discovery-Dokument (/.well-known/openid-configuration) laut OpenID Connect Discovery 1.0 Spezifikation vorkommen können.  
Die Tabelle enthält die wichtigsten und optionalen Felder, wie sie in der Praxis und laut Spezifikation üblich sind.

| Property                          | Typ                | Beschreibung                                                                                   | Pflichtfeld |
|------------------------------------|--------------------|-----------------------------------------------------------------------------------------------|-------------|
| issuer                            | string             | Identifikator des OpenID Providers                                                            | Ja          |
| authorization_endpoint             | string             | URL des Authorization-Endpunkts                                                               | Ja          |
| token_endpoint                     | string             | URL des Token-Endpunkts                                                                       | Ja          |
| userinfo_endpoint                  | string             | URL des UserInfo-Endpunkts                                                                    | Nein        |
| jwks_uri                           | string             | URL für die JWKS (JSON Web Key Set)                                                           | Ja          |
| registration_endpoint              | string             | URL für dynamische Client-Registrierung                                                       | Nein        |
| scopes_supported                   | string[]           | Unterstützte Scopes                                                                           | Nein        |
| response_types_supported           | string[]           | Unterstützte Response Types                                                                   | Ja          |
| response_modes_supported           | string[]           | Unterstützte Response Modes                                                                   | Nein        |
| grant_types_supported              | string[]           | Unterstützte Grant Types                                                                      | Nein        |
| acr_values_supported               | string[]           | Unterstützte ACR-Werte (Authentication Context Class Reference)                               | Nein        |
| subject_types_supported            | string[]           | Unterstützte Subject Types (z.B. "public", "pairwise")                                        | Ja          |
| id_token_signing_alg_values_supported | string[]        | Unterstützte Signaturalgorithmen für ID Token                                                 | Ja          |
| id_token_encryption_alg_values_supported | string[]     | Unterstützte Verschlüsselungsalgorithmen für ID Token                                         | Nein        |
| id_token_encryption_enc_values_supported | string[]     | Unterstützte Verschlüsselungs-Encodings für ID Token                                          | Nein        |
| userinfo_signing_alg_values_supported | string[]        | Unterstützte Signaturalgorithmen für UserInfo                                                 | Nein        |
| userinfo_encryption_alg_values_supported | string[]     | Unterstützte Verschlüsselungsalgorithmen für UserInfo                                         | Nein        |
| userinfo_encryption_enc_values_supported | string[]     | Unterstützte Verschlüsselungs-Encodings für UserInfo                                          | Nein        |
| request_object_signing_alg_values_supported | string[]   | Unterstützte Signaturalgorithmen für Request Objects                                          | Nein        |
| request_object_encryption_alg_values_supported | string[]| Unterstützte Verschlüsselungsalgorithmen für Request Objects                                  | Nein        |
| request_object_encryption_enc_values_supported | string[]| Unterstützte Verschlüsselungs-Encodings für Request Objects                                   | Nein        |
| token_endpoint_auth_methods_supported | string[]        | Unterstützte Authentifizierungsmethoden am Token-Endpunkt                                     | Nein        |
| token_endpoint_auth_signing_alg_values_supported | string[]| Unterstützte Signaturalgorithmen für Token-Endpunkt-Authentifizierung                         | Nein        |
| display_values_supported           | string[]           | Unterstützte Display-Werte                                                                   | Nein        |
| claim_types_supported              | string[]           | Unterstützte Claim-Typen (z.B. "normal", "aggregated", "distributed")                         | Nein        |
| claims_supported                   | string[]           | Unterstützte Claims                                                                           | Nein        |
| service_documentation              | string             | URL zur Dokumentation                                                                         | Nein        |
| claims_locales_supported           | string[]           | Unterstützte Sprachen für Claims                                                              | Nein        |
| ui_locales_supported               | string[]           | Unterstützte UI-Sprachen                                                                      | Nein        |
| claims_parameter_supported         | boolean            | Unterstützt das "claims"-Parameter                                                            | Nein        |
| request_parameter_supported        | boolean            | Unterstützt das "request"-Parameter                                                           | Nein        |
| request_uri_parameter_supported    | boolean            | Unterstützt das "request_uri"-Parameter                                                       | Nein        |
| require_request_uri_registration   | boolean            | Muss "request_uri" registriert werden?                                                        | Nein        |
| op_policy_uri                      | string             | URL zur Policy                                                                                | Nein        |
| op_tos_uri                         | string             | URL zu den Nutzungsbedingungen                                                                | Nein        |
| code_challenge_methods_supported   | string[]           | Unterstützte Methoden für PKCE                                                                | Nein        |

**Hinweis:**  
Die tatsächlichen Properties können je nach Implementierung 

dagnelies: in english please and without required/optional info

GitHub Copilot: Here is a Markdown table listing all possible properties from the OpenID Connect Discovery document, based on the specification and common extensions:

| Property                                      | Type        | Description                                                      |
|------------------------------------------------|-------------|------------------------------------------------------------------|
| issuer                                         | string      | Identifier for the OpenID Provider                               |
| authorization_endpoint                         | string      | URL of the authorization endpoint                                |
| token_endpoint                                 | string      | URL of the token endpoint                                        |
| userinfo_endpoint                              | string      | URL of the user info endpoint                                    |
| jwks_uri                                       | string      | URL for the JSON Web Key Set                                     |
| registration_endpoint                          | string      | URL for dynamic client registration                              |
| scopes_supported                               | string[]    | Supported scopes                                                 |
| response_types_supported                       | string[]    | Supported response types                                         |
| response_modes_supported                       | string[]    | Supported response modes                                         |
| grant_types_supported                          | string[]    | Supported grant types                                            |
| acr_values_supported                           | string[]    | Supported Authentication Context Class Reference values           |
| subject_types_supported                        | string[]    | Supported subject types (e.g., "public", "pairwise")             |
| id_token_signing_alg_values_supported          | string[]    | Supported signing algorithms for ID Token                        |
| id_token_encryption_alg_values_supported       | string[]    | Supported encryption algorithms for ID Token                     |
| id_token_encryption_enc_values_supported       | string[]    | Supported encryption encodings for ID Token                      |
| userinfo_signing_alg_values_supported          | string[]    | Supported signing algorithms for UserInfo                        |
| userinfo_encryption_alg_values_supported       | string[]    | Supported encryption algorithms for UserInfo                     |
| userinfo_encryption_enc_values_supported       | string[]    | Supported encryption encodings for UserInfo                      |
| request_object_signing_alg_values_supported    | string[]    | Supported signing algorithms for request objects                 |
| request_object_encryption_alg_values_supported | string[]    | Supported encryption algorithms for request objects              |
| request_object_encryption_enc_values_supported | string[]    | Supported encryption encodings for request objects               |
| token_endpoint_auth_methods_supported          | string[]    | Supported authentication methods at the token endpoint           |
| token_endpoint_auth_signing_alg_values_supported | string[]  | Supported signing algorithms for token endpoint authentication   |
| display_values_supported                       | string[]    | Supported display values                                         |
| claim_types_supported                          | string[]    | Supported claim types                                            |
| claims_supported                               | string[]    | Supported claims                                                 |
| service_documentation                          | string      | URL to service documentation                                     |
| claims_locales_supported                       | string[]    | Supported claim languages                                        |
| ui_locales_supported                           | string[]    | Supported UI languages                                           |
| claims_parameter_supported                     | boolean     | Supports the "claims" parameter                                  |
| request_parameter_supported                    | boolean     | Supports the "request" parameter                                 |
| request_uri_parameter_supported                | boolean     | Supports the "request_uri" parameter                             |
| require_request_uri_registration               | boolean     | Whether "request_uri" must be registered                         |
| op_policy_uri                                  | string      | URL to the provider's policy                                     |
| op_tos_uri                                     | string      | URL to the provider's terms of service                           |
| code_challenge_methods_supported               | string[]    | Supported code challenge methods for PKCE                        |

You can find more details in the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).