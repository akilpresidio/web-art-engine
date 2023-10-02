export function PromptsGenerator(data) {
  const { predictions } = data;
  const prompts = [];

  predictions?.forEach((item, index) => {
    switch (item.class) {
      case "Button":
        prompts.push(
          `Create a React button at (x: ${item.x}, y: ${item.y}) with a width of ${item.width}px and a height of ${item.height}px.`
        );
        break;
      case "TextView":
        prompts.push(
          `Create a React text label at (x: ${item.x}, y: ${item.y}) with a width of ${item.width}px and a height of ${item.height}px.`
        );
        break;
      case "CheckBox":
        prompts.push(
          `Create a React CheckBox at (x: ${item.x}, y: ${item.y}) with a width of ${item.width}px and a height of ${item.height}px.`
        );
        break;
      case "CheckedTextView":
        prompts.push(
          `Create a React CheckedTextView at (x: ${item.x}, y: ${item.y}) with a width of ${item.width}px and a height of ${item.height}px.`
        );
        break;
      case "EditText":
        prompts.push(
          `Create a React Text input at (x: ${item.x}, y: ${item.y}) with a width of ${item.width}px and a height of ${item.height}px.`
        );
        break;
      case "EditText-":
        prompts.push(
          `Create a React text area at (x: ${item.x}, y: ${item.y}) with a width of ${item.width}px and a height of ${item.height}px.`
        );
        break;
      case "ImageButton":
        prompts.push(
          `Create a React Image Button at (x: ${item.x}, y: ${item.y}) with randon image source with a width of ${item.width}px and a height of ${item.height}px.`
        );
        break;
      case "ImageView":
        prompts.push(
          `Create a React Image View at (x: ${item.x}, y: ${item.y}) with randon image source with a width of ${item.width}px and a height of ${item.height}px.`
        );
        break;
      case "ProgressBar":
        prompts.push(
          `Create a React ProgressBar at (x: ${item.x}, y: ${item.y}) with a width of ${item.width}px and a height of ${item.height}px.`
        );
        break;
      case "RadioButton":
        prompts.push(
          `Create a React RadioButton at (x: ${item.x}, y: ${item.y}) with a width of ${item.width}px and a height of ${item.height}px.`
        );
        break;
      case "RatingBar":
        prompts.push(
          `Create a React RatingBar at (x: ${item.x}, y: ${item.y}) with a width of ${item.width}px and a height of ${item.height}px.`
        );
        break;
      case "SeekBar":
        prompts.push(
          `Create a React SeekBar at (x: ${item.x}, y: ${item.y}) with a width of ${item.width}px and a height of ${item.height}px.`
        );
        break;
      case "Spinner":
        prompts.push(
          `Create a React Spinner at (x: ${item.x}, y: ${item.y}) with a width of ${item.width}px and a height of ${item.height}px.`
        );
        break;
      case "Switch":
        prompts.push(
          `Create a React Switch at (x: ${item.x}, y: ${item.y}) with a width of ${item.width}px and a height of ${item.height}px.`
        );
        break;
      default:
        break;
    }
  });

  const combinedPrompt = `Create a responsive React page with the following components: ${prompts.join(
    " "
  )}. Instead of placing in exact x and y coordinates, provide the code with a simple example of how to create a responsive React page with the specified components laid out in a more conventional way. `;
  return combinedPrompt;
}
