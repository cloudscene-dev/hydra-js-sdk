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
 * The HealthStatus model module.
 * @module model/HealthStatus
 * @version latest
 */
class HealthStatus {
    /**
     * Constructs a new <code>HealthStatus</code>.
     * @alias module:model/HealthStatus
     */
    constructor() { 
        
        HealthStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HealthStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HealthStatus} obj Optional instance to populate.
     * @return {module:model/HealthStatus} The populated <code>HealthStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HealthStatus();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Status always contains \"ok\".
 * @member {String} status
 */
HealthStatus.prototype['status'] = undefined;






export default HealthStatus;

