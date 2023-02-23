export const arrayItems=[
  {
    name:'Q&A',
    id:'q&a',
    description:'Answer questions based on the exsisting knowledge',
    option:{
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],

    }
   },
   {
    name :"Grammer Correction",
    id:"grammerCorrectionn",
    description:"Corrects sentences into standard English"
   },
   {
    name:"Summerize for a 2nd grader",
    id:"summery",
    description:"Translates difficult text into simpler concepts"
   },
   {
    name:"English to other language",
    id:"summery",
    description:"Translate english text into French , Spanish and etc"
   },
   {
    name:"Movie to Emoji",
    id:"MovieEmoji",
    description:"Convert movie titles into emoji",
   },
   {
    name:"Explain Code",
    id:"explainCode",
    description:"Covert simple Javascrpit expression to Python"
   }

]