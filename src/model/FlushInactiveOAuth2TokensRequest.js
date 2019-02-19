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
 * The FlushInactiveOAuth2TokensRequest model module.
 * @module model/FlushInactiveOAuth2TokensRequest
 * @version latest
 */
class FlushInactiveOAuth2TokensRequest {
    /**
     * Constructs a new <code>FlushInactiveOAuth2TokensRequest</code>.
     * @alias module:model/FlushInactiveOAuth2TokensRequest
     */
    constructor() { 
        
        FlushInactiveOAuth2TokensRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FlushInactiveOAuth2TokensRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FlushInactiveOAuth2TokensRequest} obj Optional instance to populate.
     * @return {module:model/FlushInactiveOAuth2TokensRequest} The populated <code>FlushInactiveOAuth2TokensRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FlushInactiveOAuth2TokensRequest();

            if (data.hasOwnProperty('notAfter')) {
                obj['notAfter'] = ApiClient.convertToType(data['notAfter'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * NotAfter sets after which point tokens should not be flushed. This is useful when you want to keep a history of recently issued tokens for auditing.
 * @member {Date} notAfter
 */
FlushInactiveOAuth2TokensRequest.prototype['notAfter'] = undefined;






export default FlushInactiveOAuth2TokensRequest;
