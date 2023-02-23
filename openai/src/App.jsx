import OptionSelection from "./components/OptionSelection";
import { arrayItems } from "./AIOptions";
import Translation from "./components/Translation";
import {useState} from 'react';
import {Configuration , OpenAIApi} from 'openai'

const App = () => {
  const configuration = new Configuration({
    apiKey: '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'
  });
  const openai = new OpenAIApi(configuration);

    const[option,setOption]=useState({});
    const[input,setInput]=useState("");
    const selectOption =(option) =>{
      setOption(option);
    }
    const doStuff =async () =>{
      let object ={...option, prompt:input}
      const response = await openai.createCompletion(object);
      console.log(input)
      console.log(object)
      console.log(response)

    }
    
    return(
      <>
      
      {Object.values(option).length=== 0 ? (<OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>) :(<Translation doStuff={doStuff} setInput={setInput}/>)}
      
      
      </> 
    ) 
  };
  
  export default App;