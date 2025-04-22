import {
        GoogleGenerativeAI,
        HarmCategory,
        HarmBlockThreshold,
      }from "@google/generative-ai"
      
      const MODEL_NAME = "gemini-2.0-flash";
      const API_KEY = "AIzaSyAL7W0sZhT39Vrol8zuTM54uauLHmVZ57Q";
      
      async function runChat(prompt) {
        const genAI = new GoogleGenerativeAI(API_KEY) ;
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });
        
      
        const generationConfig = {
            temperature: 0.7,
            // topk: 1,
            topP: 0.9,
            maxOutputTokens: 200,
            };
    
            const safetySettings = [
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT, 
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, 
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, 
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, 
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
            ]
                
    
      const chat = model.startChat({
        generationConfig, 
        safetySettings, 
        history:[
        ],
      }); 
    
      const result = await chat.sendMessage(prompt);
      const response = result.response;
      console.log(response.text());
      return response.text();
    }
      
    export default runChat;