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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OryHydra);
  }
}(this, function(expect, OryHydra) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OryHydra.JSONWebKey();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('JSONWebKey', function() {
    it('should create an instance of JSONWebKey', function() {
      // uncomment below and update the code to test JSONWebKey
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be.a(OryHydra.JSONWebKey);
    });

    it('should have the property alg (base name: "alg")', function() {
      // uncomment below and update the code to test the property alg
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property crv (base name: "crv")', function() {
      // uncomment below and update the code to test the property crv
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property d (base name: "d")', function() {
      // uncomment below and update the code to test the property d
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property dp (base name: "dp")', function() {
      // uncomment below and update the code to test the property dp
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property dq (base name: "dq")', function() {
      // uncomment below and update the code to test the property dq
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property e (base name: "e")', function() {
      // uncomment below and update the code to test the property e
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property k (base name: "k")', function() {
      // uncomment below and update the code to test the property k
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property kid (base name: "kid")', function() {
      // uncomment below and update the code to test the property kid
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property kty (base name: "kty")', function() {
      // uncomment below and update the code to test the property kty
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property n (base name: "n")', function() {
      // uncomment below and update the code to test the property n
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property p (base name: "p")', function() {
      // uncomment below and update the code to test the property p
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property q (base name: "q")', function() {
      // uncomment below and update the code to test the property q
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property qi (base name: "qi")', function() {
      // uncomment below and update the code to test the property qi
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property use (base name: "use")', function() {
      // uncomment below and update the code to test the property use
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property x (base name: "x")', function() {
      // uncomment below and update the code to test the property x
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property x5c (base name: "x5c")', function() {
      // uncomment below and update the code to test the property x5c
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

    it('should have the property y (base name: "y")', function() {
      // uncomment below and update the code to test the property y
      //var instane = new OryHydra.JSONWebKey();
      //expect(instance).to.be();
    });

  });

}));
