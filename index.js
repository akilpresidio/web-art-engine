import express from "express";
import cors from "cors";

import OpenAIApi from "openai";
// const configuration = new Configuration({
//   organization: "org-dSL7SotVjN0hNzNWdECjpKYQ",
//   apiKey: "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",
// });
const openai = new OpenAIApi({
  apiKey: "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",
});
// const response = await openai.listEngines();

const app = express();
const port = 5000;

//Middleware
app.use(cors()); //connect/express middleware
app.use(express.json());

app.post("/", async (req, res) => {
  const { finalPrompt } = req.body;
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: finalPrompt + " without explanation" }],
    model: "gpt-3.5-turbo",
  });
  if (completion.choices && completion.choices[0].message.content) {
    res.json({
      message: completion.choices[0].message.content,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
