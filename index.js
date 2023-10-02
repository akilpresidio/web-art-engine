import express from "express";
import cors from "cors";

import OpenAIApi from "openai";
const openai = new OpenAIApi({
  apiKey: "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",
});

const app = express();
const port = 5000;

//Middleware
app.use(cors()); //connect/express middleware
app.use(express.json());

app.post("/", async (req, res) => {
  const { message } = req.body;
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `${message}`,
    max_tokens: 4000,
    temperature: 0,
  });
  if (completion.choices && completion.choices[0].text) {
    res.json({ message: completion.choices[0].text.substring(0, 4000) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
