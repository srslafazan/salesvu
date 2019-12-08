/*
  SalesVu JavaScript SDK
**/

const axios = require('axios')


class SalesVuAPISDK {
  constructor({ dev, apiKey, storeId }) {
    this.subdomain = dev ? 'dev' : 'www'
    this.apiKey = apiKey
    this.storeId = storeId

    this.methods = [
      'change_approval_type',
      'business_types',
      'business',
      'about',
      'categories',
      'product',
      'modifiers',
      'create_order',
      'add_product',
      'delete_order',
      'delete_product',
      'update_product_quantity',
      'update_product_modifiers',
      'get_order',
      'complete_order',
      'create_customer',
      'assign_customer',
      'get_card_info',
      'process_payment',
      'get_payment_url',
      'add_order_note',
      'init_payment',
      'get_payment_devices',
      'get_store_order',
      'complete_store_order',
      'get_mercury_account_info',
      'create_products',
      'sub_categories',
    ]

    methods.forEach(method => {
      this[method] = data => this.createSalesVuRequest({ action: method, ...data })
      this[method] = this[method].bind(this)
    })

    this.createSalesVuRequest = this.createSalesVuRequest.bind(this)

  }

  salesVuPostObjectFromData(data) {
    return `request=${JSON.stringify(data)}`
  }

  createSalesVuRequest(data) {
    return axios({
      method: 'POST',
      url: `https://${this.subdomain}.salesvu.com/townvu/api/index.php`,
      data: this.salesVuPostObjectFromData({
        api_key: this.apiKey,
        store_id: this.storeId,
        ...data,
      }),
    })
  }

}


module.exports.api = SalesVuAPISDK
