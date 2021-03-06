/**
 * ORY Hydra
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here.
 *
 * OpenAPI spec version: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Oauth2TokenResponse model module.
 * @module model/Oauth2TokenResponse
 * @version latest
 */
class Oauth2TokenResponse {
    /**
     * Constructs a new <code>Oauth2TokenResponse</code>.
     * The Access Token Response
     * @alias module:model/Oauth2TokenResponse
     */
    constructor() { 
        
        Oauth2TokenResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Oauth2TokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Oauth2TokenResponse} obj Optional instance to populate.
     * @return {module:model/Oauth2TokenResponse} The populated <code>Oauth2TokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Oauth2TokenResponse();

            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('redirect_uri')) {
                obj['redirect_uri'] = ApiClient.convertToType(data['redirect_uri'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access_token
 */
Oauth2TokenResponse.prototype['access_token'] = undefined;

/**
 * @member {String} client_id
 */
Oauth2TokenResponse.prototype['client_id'] = undefined;

/**
 * @member {String} code
 */
Oauth2TokenResponse.prototype['code'] = undefined;

/**
 * @member {String} redirect_uri
 */
Oauth2TokenResponse.prototype['redirect_uri'] = undefined;






export default Oauth2TokenResponse;

