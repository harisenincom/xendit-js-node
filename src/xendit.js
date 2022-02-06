'use strict';

const Card = require('./card');

const STAGING_XENDIT_BASE_URL = 'https://api-staging.xendit.co';
const PRODUCTION_XENDIT_BASE_URL = 'https://api.xendit.co';

function Xendit() {
}

Xendit.settings = {
  url: PRODUCTION_XENDIT_BASE_URL
};

Xendit.card = new Card(Xendit);

Xendit.setPublishableKey = function setPublishableKey(publishableKey) {
  Xendit.settings.publishable_key = publishableKey;
};

Xendit._useStagingURL = function (toggle) {
  Xendit.settings.url = toggle === false ? PRODUCTION_XENDIT_BASE_URL : STAGING_XENDIT_BASE_URL;
};

Xendit._getXenditURL = function () {
  return Xendit.settings.url;
};

Xendit._getPublishableKey = function () {
  return Xendit.settings.publishable_key;
};

Xendit._getEnvironment = function () {
  const normalizedKey = this._getPublishableKey().toUpperCase();
  const isKeyProduction = normalizedKey.indexOf('PRODUCTION') > -1;

  return isKeyProduction ? 'PRODUCTION' : 'DEVELOPMENT';
};

// global.Xendit = Xendit;
module.exports = Xendit;
