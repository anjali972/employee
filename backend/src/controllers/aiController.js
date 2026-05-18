import axios from "axios";

export const generateRecommendation = async(req,res)=>{
  try{
    const employee = req.body;

    const prompt = `
    Give promotion recommendation, training suggestion,
    ranking feedback for this employee:
    ${JSON.stringify(employee)}
    `;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model:"openai/gpt-3.5-turbo",
        messages:[
          {
            role:"user",
            content:prompt
          }
        ]
      },
      {
        headers:{
          Authorization:`Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type":"application/json"
        }
      }
    );

    res.json({
      recommendation:response.data.choices[0].message.content
    });

  }catch(error){
    res.status(500).json({message:error.message});
  }
};