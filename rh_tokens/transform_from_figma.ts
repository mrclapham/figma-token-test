// import { transformTokens } from 'token-transformer';

// const __rawTokens = {
//     setA:{
//         "sizing": {
//             "base": {
//             "value": "4",
//             "description": "Alias value",
//             "type": "sizing"
//             },
//             "large": {
//             "value": "$sizing.base * 2",
//             "description": "Math value",
//             "type": "sizing"
//             }
//         }
//     }
// };

// // const rawTokens = fs.readFileSync("rh_tokens/tokens.json", "utf-8");
// // //console.log("rawTokens :: ", rawTokens)
// // const parsed = JSON.parse(rawTokens) 

// // console.log("parsed ", parsed.core.Primary["Primary 100%"])

// const setsToUse = ['core'];
// const excludes = [];

// const transformerOptions = {
//   expandTypography: true,
//   expandShadow: true,
//   expandComposition: true,
//   expandBorder: true,
//   preserveRawValue: false,
//   throwErrorWhenNotResolved:  true,
//   resolveReferences:true
// }

// // const resolved = transformTokens(parsed, setsToUse, excludes,transformerOptions);


// // console.log("resolved",resolved)
