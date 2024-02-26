'use strict';

/**
 * tv service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tv.tv');
