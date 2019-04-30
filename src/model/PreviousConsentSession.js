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
import ConsentRequest from './ConsentRequest';
import ConsentRequestSession from './ConsentRequestSession';

/**
 * The PreviousConsentSession model module.
 * @module model/PreviousConsentSession
 * @version latest
 */
class PreviousConsentSession {
    /**
     * Constructs a new <code>PreviousConsentSession</code>.
     * The response used to return used consent requests same as HandledLoginRequest, just with consent_request exposed as json
     * @alias module:model/PreviousConsentSession
     */
    constructor() { 
        
        PreviousConsentSession.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PreviousConsentSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PreviousConsentSession} obj Optional instance to populate.
     * @return {module:model/PreviousConsentSession} The populated <code>PreviousConsentSession</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PreviousConsentSession();

            if (data.hasOwnProperty('consent_request')) {
                obj['consent_request'] = ConsentRequest.constructFromObject(data['consent_request']);
            }
            if (data.hasOwnProperty('grant_access_token_audience')) {
                obj['grant_access_token_audience'] = ApiClient.convertToType(data['grant_access_token_audience'], ['String']);
            }
            if (data.hasOwnProperty('grant_scope')) {
                obj['grant_scope'] = ApiClient.convertToType(data['grant_scope'], ['String']);
            }
            if (data.hasOwnProperty('remember')) {
                obj['remember'] = ApiClient.convertToType(data['remember'], 'Boolean');
            }
            if (data.hasOwnProperty('remember_for')) {
                obj['remember_for'] = ApiClient.convertToType(data['remember_for'], 'Number');
            }
            if (data.hasOwnProperty('session')) {
                obj['session'] = ConsentRequestSession.constructFromObject(data['session']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ConsentRequest} consent_request
 */
PreviousConsentSession.prototype['consent_request'] = undefined;

/**
 * GrantedAudience sets the audience the user authorized the client to use. Should be a subset of `requested_access_token_audience`.
 * @member {Array.<String>} grant_access_token_audience
 */
PreviousConsentSession.prototype['grant_access_token_audience'] = undefined;

/**
 * GrantScope sets the scope the user authorized the client to use. Should be a subset of `requested_scope`
 * @member {Array.<String>} grant_scope
 */
PreviousConsentSession.prototype['grant_scope'] = undefined;

/**
 * Remember, if set to true, tells ORY Hydra to remember this consent authorization and reuse it if the same client asks the same user for the same, or a subset of, scope.
 * @member {Boolean} remember
 */
PreviousConsentSession.prototype['remember'] = undefined;

/**
 * RememberFor sets how long the consent authorization should be remembered for in seconds. If set to `0`, the authorization will be remembered indefinitely.
 * @member {Number} remember_for
 */
PreviousConsentSession.prototype['remember_for'] = undefined;

/**
 * @member {module:model/ConsentRequestSession} session
 */
PreviousConsentSession.prototype['session'] = undefined;






export default PreviousConsentSession;

