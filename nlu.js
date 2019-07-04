const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2018-11-16',
    iam_apikey: process.env.NLU_IAM_APIKEY,
    url: process.env.NLU_URL
});

const analyzeParams = {
    // 'url': 'https://www.amazon.com/V-MORO-Compatible-Stainless-Replacement-Tortoise-Tone/product-reviews/B0752B4B8H/ref=cm_cr_arp_d_paging_btm_next_2?ie=UTF8&reviewerType=all_reviews&pageNumber=2',
    'text': "I do not like this watch. it is not lightweight and hard to adjust.",
    'features': {
    'categories': {
        'emotion': true,
        'sentiment': true,
        // 'limit': 3
    },
    'concepts': {
        'emotion': true,
        'sentiment': true,
        // 'limit': 3
    },
    'emotion': {
        'targets': [
            'lightweight',
            'adjust'
        ]
    },
    'entities': {
        'emotion': true,
        'sentiment': true,
    //   'limit': 1
      },
    'keywords': {
        'sentiment': true,
        'emotion': true,
    //   'limit': 3
      }
}
  };

naturalLanguageUnderstanding.analyze(analyzeParams)
    .then(analysisResults => {
        console.log(JSON.stringify(analysisResults, null, 2));
    })
    .catch(err => {
        console.log('error:', err);
    });
