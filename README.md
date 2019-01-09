# SalesVu JavaScript SDK

A community JavaScript SDK for the SalesVu Point-of-Sale API


# Getting Started

```node
const SalesVuAPISDK = require('./index.js')

const sdk = new SalesVuAPISDK('dev', 'my_api_key', 'my_store_id')

const about = await sdk.about()
//  {
//   status: '...',
//   statusText: '...', 
//   data: { ... }, 
//  }
```

# Interfaces
```node
sdk interface .change_approval_type => SalesVu interface "change_approval_type"
sdk interface .business_types => SalesVu interface "business_types"
sdk interface .business => SalesVu interface "business"
sdk interface .about => SalesVu interface "about"
sdk interface .categories => SalesVu interface "categories"
sdk interface .product => SalesVu interface "product"
sdk interface .modifiers => SalesVu interface "modifiers"
sdk interface .create_order => SalesVu interface "create_order"
sdk interface .add_product => SalesVu interface "add_product"
sdk interface .delete_order => SalesVu interface "delete_order"
sdk interface .delete_product => SalesVu interface "delete_product"
sdk interface .update_product_quantity => SalesVu interface "update_product_quantity"
sdk interface .update_product_modifiers => SalesVu interface "update_product_modifiers"
sdk interface .get_order => SalesVu interface "get_order"
sdk interface .complete_order => SalesVu interface "complete_order"
sdk interface .create_customer => SalesVu interface "create_customer"
sdk interface .assign_customer => SalesVu interface "assign_customer"
sdk interface .get_card_info => SalesVu interface "get_card_info"
sdk interface .process_payment => SalesVu interface "process_payment"
sdk interface .get_payment_url => SalesVu interface "get_payment_url"
sdk interface .add_order_note => SalesVu interface "add_order_note"
sdk interface .init_payment => SalesVu interface "init_payment"
sdk interface .get_payment_devices => SalesVu interface "get_payment_devices"
sdk interface .get_store_order => SalesVu interface "get_store_order"
sdk interface .complete_store_order => SalesVu interface "complete_store_order"
sdk interface .get_mercury_account_info => SalesVu interface "get_mercury_account_info"
sdk interface .create_products => SalesVu interface "create_products"
sdk interface .sub_categories => SalesVu interface "sub_categories"
```

# License

MIT
