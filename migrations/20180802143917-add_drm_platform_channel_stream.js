'use strict';
var winston = require('winston');

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn('channel_stream', 'drm_platform',{type: Sequelize.STRING(20), allowNull: false})
            .catch(function(err) {winston.error('Adding column channel_stream.drm_platform failed with error message: ',err.message);});
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('channel_stream', 'drm_platform')
            .catch(function(err) {winston.error('Removing column channel_stream.drm_platform failed with error message: ',err.message);});
    }
};