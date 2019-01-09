/*
  SalesVu JavaScript SDK
**/

const axios = require('axios')

const salesVuPostObjectFromData = data => {
  return `request=${JSON.stringify(data)}`
}

class SalesVuAPISDK {
  constructor(subdomain, apiKey, storeId) {
    this.subdomain = subdomain || process.env.SALESVU_API_SUBDOMAIN || 'www'
    this.apiKey = apiKey || process.env.SALESVU_API_KEY
    this.storeId = storeId  || process.env.SALESVU_STORE_ID
  }

  createSalesVuRequest(data) {
    return axios({
      method: 'POST',
      url: `https://${this.subdomain}.salesvu.com/townvu/api/index.php`,
      data: salesVuPostObjectFromData({
        api_key: this.apiKey,
        store_id: this.storeId,
        ...data,
      }),
    })
  }

  change_approval_type(data) {
    return this.createSalesVuRequest({ action: 'change_approval_type', ...data })
  }

  business_types(data) {
    return this.createSalesVuRequest({ action: 'business_types', ...data })
  }

  business(data) {
    return this.createSalesVuRequest({ action: 'business', ...data })
  }

  about(data) {
    return this.createSalesVuRequest({ action: 'about', ...data })
  }

  categories(data) {
    return this.createSalesVuRequest({ action: 'categories', ...data })
  }

  product(data) {
    return this.createSalesVuRequest({ action: 'product', ...data })
  }

  modifiers(data) {
    return this.createSalesVuRequest({ action: 'modifiers', ...data })
  }

  create_order(data) {
    return this.createSalesVuRequest({ action: 'create_order', ...data })
  }

  add_product(data) {
    return this.createSalesVuRequest({ action: 'add_product', ...data })
  }

  delete_order(data) {
    return this.createSalesVuRequest({ action: 'delete_order', ...data })
  }

  delete_product(data) {
    return this.createSalesVuRequest({ action: 'delete_product', ...data })
  }

  update_product_quantity(data) {
    return this.createSalesVuRequest({ action: 'update_product_quantity', ...data })
  }

  update_product_modifiers(data) {
    return this.createSalesVuRequest({ action: 'update_product_modifiers', ...data })
  }

  get_order(data) {
    return this.createSalesVuRequest({ action: 'get_order', ...data })
  }

  complete_order(data) {
    return this.createSalesVuRequest({ action: 'complete_order', ...data })
  }

  create_customer(data) {
    return this.createSalesVuRequest({ action: 'create_customer', ...data })
  }

  assign_customer(data) {
    return this.createSalesVuRequest({ action: 'assign_customer', ...data })
  }

  get_card_info(data) {
    return this.createSalesVuRequest({ action: 'get_card_info', ...data })
  }

  process_payment(data) {
    return this.createSalesVuRequest({ action: 'process_payment', ...data })
  }

  get_payment_url(data) {
    return this.createSalesVuRequest({ action: 'get_payment_url', ...data })
  }

  add_order_note(data) {
    return this.createSalesVuRequest({ action: 'add_order_note', ...data })
  }

  init_payment(data) {
    return this.createSalesVuRequest({ action: 'init_payment', ...data })
  }

  get_payment_devices(data) {
    return this.createSalesVuRequest({ action: 'get_payment_devices', ...data })
  }

  get_store_order(data) {
    return this.createSalesVuRequest({ action: 'get_store_order', ...data })
  }

  complete_store_order(data) {
    return this.createSalesVuRequest({ action: 'complete_store_order', ...data })
  }

  get_mercury_account_info(data) {
    return this.createSalesVuRequest({ action: 'get_mercury_account_info', ...data })
  }

  create_products(data) {
    return this.createSalesVuRequest({ action: 'create_products', ...data })
  }

  sub_categories(data) {
    return this.createSalesVuRequest({ action: 'sub_categories', ...data })
  }
}


module.exports.api = SalesVuAPISDK
