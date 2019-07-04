// const DiscoveryV1 = require('ibm-watson/discovery/v1');
// const fs = require('fs');

// const discovery = new DiscoveryV1({
//     version: '2019-04-02',
//     iam_apikey: process.env.DISCOVERY_IAM_APIKEY,
//     url: process.env.DISCOVERY_URL
// });

// const createEnvironmentParams = {
//     name: 'my_environment',
//     description: 'My environment',
//     size: 'LT',
// };

// discovery.createEnvironment(createEnvironmentParams)
//     .then(environment => {
//         console.log(JSON.stringify(environment, null, 2));
//     })
//     .catch(err => {
//         console.log('error:', err);
//     });

// const createConfigurationParams = {
//     environment_id: process.env.DISCOVERY_ENV_ID,
//     name: 'node-sample-watson',
//     enrichments: [
//         {
//             enrichment_name: 'natural_language_understanding',
//             destination_field: 'enriched_title',
//             source_field: 'title'
//         }
//     ]
// };

// discovery.createConfiguration(createConfigurationParams)
//     .then(configuration => {
//         console.log(JSON.stringify(configuration, null, 2));
//     })
//     .catch(err => {
//         console.log('error:', err);
//     });

// const updateConfigurationParams = {
//     environment_id: process.env.DISCOVERY_ENV_ID,
//     configuration_id: process.env.DISCOVERY_CONFIG_ID,
//     name: 'node-sample-watson',
//     description: "Testing how to use IBM Discovery",
//     conversions: {
//         html: {
//             exclude_tags_keep_content: [
//                 'span'
//             ],
//             exclude_content: {
//                 xpaths: [
//                     '/home'
//                 ]
//             }
//         },
//         segment: {
//             enabled: true,
//             annotated_field: [
//                 'custom-field-1',
//                 'custom-field-2'
//             ]
//         },
//         json_normalizations: [
//             {
//                 operation: 'move',
//                 source_field: 'extracted_metadata.title',
//                 destination_field: 'metadata.title'
//             },
//             {
//                 operation: 'move',
//                 source_field: 'extracted_metadata.author',
//                 destination_field: 'metadata.author'
//             },
//             {
//                 operation: 'remove',
//                 source_field: 'extracted_metadata'
//             }
//         ]
//     },
//     enrichments: [
//         {
//           enrichment: "natural_language_understanding",
//           source_field: "title",
//           destination_field: "enriched_title",
//           options: {
//             features: {
//               keywords: {
//                 sentiment: true,
//                 emotion: false,
//                 limit: 50
//               },
//               entities: {
//                 sentiment: true,
//                 emotion: false,
//                 limit: 50,
//                 mentions: true,
//                 mention_types: true,
//                 sentence_locations: true,
//                 model: "WKS-model-id"
//               },
//               sentiment: {
//                 document: true,
//                 targets: [
//                   "IBM",
//                   "Watson"
//                 ]
//               },
//               emotion: {
//                 document: true,
//                 targets: [
//                   "IBM",
//                   "Watson"
//                 ]
//               },
//               categories: {},
//               concepts: {
//                 limit: 8
//               },
//               semantic_roles: {
//                 entities: true,
//                 keywords: true,
//                 limit: 50
//               },
//               relations: {
//                 model: "WKS-model-id"
//               }
//             }
//           }
//         },
//         {
//             enrichment: 'elements',
//             source_field: 'html',
//             destination_field: 'enriched_html',
//             options: {
//                 model: 'contract'
//             }
//         }
//     ],
//     normalizations: [
//         {
//             operation: 'move',
//             source_field: 'metadata.title',
//             destination_field: 'title'
//         },
//         {
//             operation: 'move',
//             source_field: 'metadata.author',
//             destination_field: 'author'
//         },
//         {
//             operation: 'move',
//             source_field: 'alchemy_enriched_text.language',
//             destination_field: 'language'
//         },
//         {
//             operation: 'remove',
//             source_field: 'html'
//         },
//         {
//             operation: 'remove',
//             source_field: 'alchemy_enriched_text.status'
//         },
//         {
//             operation: 'remove',
//             source_field: 'sire_enriched_text.language'
//         },
//         {
//             operation: 'remove',
//             source_field: 'sire_enriched_text.model'
//         },
//         {
//             operation: 'remove',
//             source_field: 'sire_enriched_text.status'
//         },
//         {
//             operation: 'remove_nulls'
//         }
//     ]
//   };
  
//   discovery.updateConfiguration(updateConfigurationParams)
//     .then(configuration => {
//       console.log(JSON.stringify(configuration, null, 2));
//     })
//     .catch(err => {
//       console.log('error:', err);
//     });

// const testConfigurationInEnvironmentParams = {
//     environment_id: process.env.DISCOVERY_ENV_ID,
//     configuration_id: process.env.DISCOVERY_CONFIG_ID,
//     file: fs.createReadStream('./sample.docx'),
//   };
  
//   discovery.testConfigurationInEnvironment(testConfigurationInEnvironmentParams)
//     .then(testDocument => {
//       console.log(JSON.stringify(testDocument, null, 2));
//     })
//     .catch(err => {
//       console.log('error:', err);
//     });

const createCollectionParams = {
    environment_id: process.env.DISCOVERY_ENV_ID,
    name: 'node-sample-watson',
    language: 'en',
  };
  
  discovery.createCollection(createCollectionParams)
    .then(collection => {
      console.log(JSON.stringify(collection, null, 2));
    })
    .catch(err => {
      console.log('error:', err);
    });