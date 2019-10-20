# WeBuy API Documentation [![Build Status](https://travis-ci.org/Dionakra/webuy-api.svg?branch=master)](https://travis-ci.org/Dionakra/webuy-api)
Documentation of the API for the WeBuy web applications. The APIs are exactly the same across every WeBuy web app, no matter the region of the store (United Kingdom, Ireland, Spain etc...), so this documentation should work for whatever region you need to extract data.

- [Request & Response](#request--response)
	- [Requests](#requests)
	- [Responses](#responses)
- [Endpoints](#endpoints)
	- [Super Categories](#super-categories)
	- [Product Lines](#product-lines)
	- [Categories](#categories)
	- [Search](#search)
	- [Product Details](#product-details)
	- [Product Availability](#product-availability)
	- [Stores](#stores)
	- [Top Sellers](#top-sellers)
	- [Most Wanted](#most-wanted)

## Request & Response
In this section it is described the common things for all the endpoints, both requests and responses to any store and endpoint.

### Requests
The requests all share the same base url, which follows the next format: `https://wss2.cex.${COUNTRY_CODE}.webuy.io/v3`, where `${COUNTRY_CODE}` is the code of the store to get data, like `uk` for United Kingdom or `es` for Spain.

### Responses
All the responses share the same structure, which is the following one:
```json
{
  "response": {
    "ack": "Success",
    "data": {},
    "error": {
      "code": "",
      "internal_message": "",
      "moreInfo": []
    }
  }
}
```

The only difference between responses are the `data` object, which is custom to every endpoint. In this documentation is displayed an example of every endpoint.

## Endpoints
### Super Categories
* **Description:** This endpoint will return the major categories of WeBuy. These are the ones displayed on the top banner of the page as seen in the image:
![Super Categories Banner](images/supercats.png)
* **Endpoint:** /supercats
* **Parameters:** - 
* **Response:** [Super Categories Response Structure](src/models/responses/SuperCategoriesResponse.ts)
* **Example:** https://wss2.cex.uk.webuy.io/v3/supercats
```json
{
  "superCats": [
    {
      "superCatId": 1,
      "superCatFriendlyName": "Gaming"
    },
    {
      "superCatId": 2,
      "superCatFriendlyName": "Film & TV"
    },
    {
      "superCatId": 3,
      "superCatFriendlyName": "Computing"
    },
    {
      "superCatId": 4,
      "superCatFriendlyName": "Phones"
    },
    {
      "superCatId": 5,
      "superCatFriendlyName": "Electronics"
    },
    {
      "superCatId": 8,
      "superCatFriendlyName": "Music"
    }
  ]
}
```

### Product Lines
* **Description:** Returns the list of sub-categories.
* **Endpoint:** /productlines
* **Parameters:** [Product Lines Parameters](src/models/requests/ProductLinesRequest.ts)
* **Response:** [Product Lines Response Structure](src/models/responses/ProductLinesResponse.ts)
* **Example:** https://wss2.cex.uk.webuy.io/v3/productlines?superCatIds=[1,2,3,4,5,8]
```json
{
  "productLines": [
    {
      "superCatId": 1,
      "productLineId": 70,
      "productLineName": "3DS",
      "totalCategories": 3
    },
    {
      "superCatId": 2,
      "productLineId": 81,
      "productLineName": "Blu-Ray",
      "totalCategories": 7
    },
    {
      "superCatId": 1,
      "productLineId": 92,
      "productLineName": "Board Games",
      "totalCategories": 1
    }
  ]
}
```

### Categories
* **Description:** Returns the list of sub-subcategories.
* **Endpoint:** /categories
* **Parameters:** [Categories Parameters](src/models/requests/CategoriesRequest.ts)
* **Response:** [Categories Response Structure](src/models/responses/CategoriesResponse.ts)
* **Example:** https://wss2.cex.uk.webuy.io/v3/categories?productLineIds=[70,81,92,91,8,49,59,6,33,29,67,74,39,79,7,10,26,54,17,40,78,13,14,32,25,28,15,61,62,76,27,21,16,51,80,65,18,23,84,83,19,85,71,68,60,73,64,63,75]
```json
{
  "categories": [
    {
      "superCatId": 1,
      "categoryId": 50,
      "categoryFriendlyName": "Dreamcast Consoles",
      "productLineId": 18,
      "totalBoxes": 10
    },
    {
      "superCatId": 1,
      "categoryId": 51,
      "categoryFriendlyName": "Dreamcast Games",
      "productLineId": 18,
      "totalBoxes": 399
    },
    {
      "superCatId": 1,
      "categoryId": 401,
      "categoryFriendlyName": "Nintendo 64 Consoles",
      "productLineId": 18,
      "totalBoxes": 77
    }
  ]
}
```


### Search
* **Description:** Returns the products that match a search query.
* **Endpoint:** /boxes
* **Parameters:** [Search Parameters](src/models/requests/SearchRequest.ts) 
* **Response:** [Search Response Structure](src/models/responses/SearchResponse.ts)
* **Example:** https://wss2.cex.uk.webuy.io/v3/boxes?q=q&firstRecord=1&count=50&sortBy=relevance&sortOrder=desc
```json
{
  "boxes": [
    {
      "boxId": "SMEM2Q3AA1",
      "masterBoxId": null,
      "boxName": "8 GB PC12800 DDR3 1600MHz 204 Pin Memory",
      "isMasterBox": 0,
      "categoryId": 939,
      "categoryName": "Memory - Laptop DDR3",
      "categoryFriendlyName": "DDR3 - Laptop 204 Pin",
      "superCatId": 3,
      "superCatName": "Computing",
      "superCatFriendlyName": "Computing",
      "imageUrls": {
        "large": "https://uk.static.webuy.com/product_images/Computing/Memory - Laptop DDR3/SMEM2Q3AA1_l.jpg",
        "medium": "https://uk.static.webuy.com/product_images/Computing/Memory - Laptop DDR3/SMEM2Q3AA1_m.jpg",
        "small": "https://uk.static.webuy.com/product_images/Computing/Memory - Laptop DDR3/SMEM2Q3AA1_s.jpg",
        "masterBoxLarge": null,
        "masterBoxMedium": null,
        "masterBoxSmall": null
      },
      "cannotBuy": 0,
      "isNewBox": 0,
      "sellPrice": 15,
      "cashPrice": 7,
      "exchangePrice": 10,
      "boxRating": 4.6,
      "outOfStock": 0,
      "outOfEcomStock": 0,
      "ecomQuantityOnHand": 50
    }
  ]
}
```

### Product Details
* **Description:** Returns the product details for a given product.
* **Endpoint:** /boxes/<PRODUCT_SKU>/detail
* **Parameters:** [Product Details Parameters](src/models/requests/ProductDetailsRequest.ts) 
* **Response:** [Product Details Response Structure](src/models/responses/ProductDetailsResponse.ts)
* **Example:** https://wss2.cex.uk.webuy.io/v3/boxes/5030943122533/detail
```json
{
  "boxDetails": [
    {
      "boxId": "5030943122533",
      "boxName": "Fifa 20",
      "categoryId": 1003,
      "categoryName": "Playstation4 Software",
      "categoryFriendlyName": "Playstation4 Games",
      "superCatId": 1,
      "superCatName": "Gaming",
      "superCatFriendlyName": "Gaming",
      "cannotBuy": 0,
      "isNewBox": 0,
      "cashPrice": 36,
      "exchangePrice": 40,
      "sellPrice": 50,
      "boxRating": 2.1,
      "outOfStock": 0,
      "ecomQuantityOnHand": 50,
      "webSellAllowed": 1,
      "webBuyAllowed": 1,
      "webShowSellPrice": 1,
      "webShowBuyPrice": 1,
      "imageUrls": {
        "large": "https://uk.static.webuy.com/product_images/Gaming/Playstation4 Software/5030943122533_l.jpg",
        "medium": "https://uk.static.webuy.com/product_images/Gaming/Playstation4 Software/5030943122533_m.jpg",
        "small": "https://uk.static.webuy.com/product_images/Gaming/Playstation4 Software/5030943122533_s.jpg",
        "masterBoxLarge": null,
        "masterBoxMedium": null,
        "masterBoxSmall": null
      },
      "isMasterBox": 0,
      "boxDescription": "As the 2019/2020 season kicks into high gear, EA&#39;s FIFA series is back with a host of improvements and one big new twist on its classic formula.\n        \n        With FIFA 20 EA Sports is taking the beautiful game back to the streets for a more casual, creative version of the sports know and love. Pitches are swapped out for courts and cages, sponsored kits are swapped out for casual-wear and tight formations and tactics are swapped out for a more dramatic style of play that&#39;s fast and fancy. Configurations include 3v3, 4v4, and 5v5 modes, as well as rush, where there&#39;s no keeper.\n        \n        Less obvious but no less important are changes that have been made under the hood. EA has been playing around with the pillars of how matches move and flow, crafting what it calls Football Intelligence around &#39;decisive moments&#39; (play on the ball); &#39;authentic game flow&#39; (off the ball) and ball physics (which sort of explains itself).\n        \n        As ever, fidelity to real world elements of the game is a big part of FIFA. The UEFA Champions League; UEFA Europa League and UEFA Super Cup are all present, accounted for and fully licensed, complete with official broadcast overlays, kit badges, match balls and trophies.\n        \n        Returning fans will also be glad of returning modes including FIFA 20 Ultimate Team, Career Mode, a standalone Champions League Mode.\n        \n        Basically, EA Sports FIFA 20 is the full package!",
      "operatorId": null,
      "gradeId": null,
      "productGuide": {
        "productLineId": 76,
        "productGuideDescription": "<h3>Notes About Additional Content</h3><p></p><p>Our products may not include additional material like Digital Copies, Online Passes or promotional downloadable content (DLC).</p><strong>Product Guide</strong><p>Please visit the <a href=\"/support/productgrading\">Grading Guide</a> for more information.</p>",
        "globalGuide": null
      },
      "boxRatingText": null,
      "attributeDetails": null,
      "attributeInfo": [
        {
          "attributeFriendlyName": "Genre",
          "attributeValue": [
            "Sport: Football   Soccer"
          ]
        },
        {
          "attributeFriendlyName": "Publisher",
          "attributeValue": [
            "Electronic Arts"
          ]
        },
        {
          "attributeFriendlyName": "PEGI Certificate",
          "attributeValue": [
            "3+"
          ]
        },
        {
          "attributeFriendlyName": "Players",
          "attributeValue": [
            "1-22"
          ]
        },
        {
          "attributeFriendlyName": "Developer",
          "attributeValue": [
            "EA Vancouver"
          ]
        }
      ]
    }
  ],
  "masterBoxDetails": null
}
```

### Product Availability
* **Description:** Returns the number of products available on every near store (only if available)
* **Endpoint:** /boxes/<PRODUCT_SKU>/neareststores
* **Parameters:** [Product Availability Parameters](src/models/requests/ProductAvailabilityRequest.ts) 
* **Response:** [Product Availability Response Structure](src/models/responses/ProductAvailabilityResponse.ts)
* **Example:** https://wss2.cex.uk.webuy.io/v3/boxes/5030943122533/neareststores?latitude=52.0314787&longitude=-0.7520958999999721
```json
{
  "nearestStores": [
    {
      "storeId": 166,
      "storeName": "Milton Keynes",
      "storeImageUrls": [
        "https://uk.static.webuy.com/store_images/166/166.jpg"
      ],
      "quantityOnHand": "4+",
      "distance": 0.84
    },
    {
      "storeId": 3043,
      "storeName": "Bletchley",
      "storeImageUrls": [
        "https://uk.static.webuy.com/store_images/3043/3043.jpg"
      ],
      "quantityOnHand": "4+",
      "distance": 2.74
    }
  ]
}
```

### Stores
* **Description:** Returns the number of products available on every near store (only if available)
* **Endpoint:** /stores
* **Parameters:** -
* **Response:** [Stores Response Structure](src/models/responses/ProductAvailabilityResponse.ts)
* **Example:** https://wss2.cex.uk.webuy.io/v3/stores
```json
{
  "stores": [
    {
      "storeId": 1,
      "storeName": "London W1 Tottenham Crt Rd",
      "regionName": "London and the South-East of England",
      "latitude": 51.520383,
      "longitude": -0.134501
    },
    {
      "storeId": 2,
      "storeName": "London W1 Rathbone Place",
      "regionName": "London and the South-East of England",
      "latitude": 51.51764,
      "longitude": -0.134483
    }
  ]
}
```

### Top Sellers
* **Description:** Returns the number of products available on every near store (only if available)
* **Endpoint:** /boxlists/topsellers
* **Parameters:** -
* **Response:** [Top Sellers Response Structure](src/models/responses/TopSellersResponse.ts)
* **Example:** https://wss2.cex.uk.webuy.io/v3/boxlists/topsellers
```json
{
  "boxlistsBoxes": [
    {
      "boxId": "SSAMN970F256GABLUNLA",
      "boxName": "Samsung Galaxy Note 10 4G 256GB Aura Black, Unlocked A",
      "categoryName": "Phones Android",
      "categoryFriendlyName": "Phones Android",
      "superCatId": 4,
      "superCatName": "Phones",
      "superCatFriendlyName": "Phones",
      "imageUrls": {
        "large": "https://uk.static.webuy.com/product_images/Phones/Phones Android/SSAMN970F256GABLUNLA_l.jpg",
        "medium": "https://uk.static.webuy.com/product_images/Phones/Phones Android/SSAMN970F256GABLUNLA_m.jpg",
        "small": "https://uk.static.webuy.com/product_images/Phones/Phones Android/SSAMN970F256GABLUNLA_s.jpg"
      },
      "isNewBox": 0,
      "sellPrice": 690,
      "cashPrice": 400,
      "exchangePrice": 483,
      "boxRating": null
    }
  ]
}
```

### Most Wanted
* **Description:** Returns the number of products available on every near store (only if available)
* **Endpoint:** /boxlists/mostwanted
* **Parameters:** -
* **Response:** [Most Wanted Response Structure](src/models/responses/MostWantedResponse.ts)
* **Example:** https://wss2.cex.uk.webuy.io/v3/boxlists/mostwanted
```json
{
  "boxlistsBoxes": [
    {
      "boxId": "SAPPI11PM64GMGUNLA",
      "boxName": "Apple iPhone 11 Pro Max 64GB Midnight Green, Unlocked A",
      "categoryName": "Phones iPhone",
      "categoryFriendlyName": "Phones - iPhones",
      "superCatId": 4,
      "superCatName": "Phones",
      "superCatFriendlyName": "Phones",
      "imageUrls": {
        "large": "https://uk.static.webuy.com/product_images/Phones/Phones iPhone/SAPPI11PM64GMGUNLA_l.jpg",
        "medium": "https://uk.static.webuy.com/product_images/Phones/Phones iPhone/SAPPI11PM64GMGUNLA_m.jpg",
        "small": "https://uk.static.webuy.com/product_images/Phones/Phones iPhone/SAPPI11PM64GMGUNLA_s.jpg"
      },
      "isNewBox": 0,
      "sellPrice": 1150,
      "cashPrice": 839,
      "exchangePrice": 920,
      "boxRating": null
    }
  ]
}
```