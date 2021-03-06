/**
 * Botticelli DB
 * A database of people/creatures/characters for the game Boticelli.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: ecapstone@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Tag from '../model/Tag';

/**
* Tag service.
* @module api/TagApi
* @version 1.0.0
*/
export default class TagApi {

    /**
    * Constructs a new TagApi. 
    * @alias module:api/TagApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addTag operation.
     * @callback module:api/TagApi~addTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new tag to the database
     * @param {module:model/Tag} body Tag object that needs to be added to the database
     * @param {module:api/TagApi~addTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addTag(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addTag");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'boticelli_auth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/tag', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTag operation.
     * @callback module:api/TagApi~deleteTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a tag
     * @param {Number} tagId Tag id to delete
     * @param {module:api/TagApi~deleteTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteTag(tagId, callback) {
      let postBody = null;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling deleteTag");
      }

      let pathParams = {
        'tag_id': tagId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'boticelli_auth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/tag/{tag_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllTags operation.
     * @callback module:api/TagApi~getAllTagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Tag>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all tags
     * @param {module:api/TagApi~getAllTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Tag>}
     */
    getAllTags(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Tag];
      return this.apiClient.callApi(
        '/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTagById operation.
     * @callback module:api/TagApi~getTagByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find tag by ID
     * Returns a single tag
     * @param {Number} tagId ID of tag to return
     * @param {module:api/TagApi~getTagByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tag}
     */
    getTagById(tagId, callback) {
      let postBody = null;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling getTagById");
      }

      let pathParams = {
        'tag_id': tagId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Tag;
      return this.apiClient.callApi(
        '/tag/{tag_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tagEntity operation.
     * @callback module:api/TagApi~tagEntityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign a tag to an entity
     * @param {Number} entityId ID of entity to add tag to
     * @param {Number} tagId ID of tag to add to this entity
     * @param {module:api/TagApi~tagEntityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tagEntity(entityId, tagId, callback) {
      let postBody = null;
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling tagEntity");
      }
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling tagEntity");
      }

      let pathParams = {
        'entity_id': entityId,
        'tag_id': tagId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'boticelli_auth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/entity/{entity_id}/tag/{tag_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the untagEntity operation.
     * @callback module:api/TagApi~untagEntityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a tag from an entity
     * @param {Number} entityId ID of entity to remove tag from
     * @param {Number} tagId ID of tag to remove from this entity
     * @param {module:api/TagApi~untagEntityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    untagEntity(entityId, tagId, callback) {
      let postBody = null;
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling untagEntity");
      }
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling untagEntity");
      }

      let pathParams = {
        'entity_id': entityId,
        'tag_id': tagId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'boticelli_auth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/entity/{entity_id}/tag/{tag_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTag operation.
     * @callback module:api/TagApi~updateTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a tag in the database with form data
     * @param {Number} tagId ID of tag that needs to be updated
     * @param {module:model/Tag} tag New data for this tag
     * @param {module:api/TagApi~updateTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateTag(tagId, tag, callback) {
      let postBody = tag;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling updateTag");
      }
      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling updateTag");
      }

      let pathParams = {
        'tag_id': tagId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'boticelli_auth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/tag/{tag_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
