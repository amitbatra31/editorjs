import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import { bro } from "./bro";
document.querySelector("h1").textContent = bro("HI");

const editor = new EditorJS({
  holder: "editorjs",
  tools: {
    header: {
      class: Header,
      inlineToolbar: ["link"],
    },
    list: {
      class: List,
      inlineToolbar: ["link", "bold"],
    },
    embed: {
      class: Embed,
      inlineToolbar: false,
      config: {
        services: {
          youtube: true,
          coub: true,
        },
      },
    },
  },
});
let savebtn = document.querySelector("button");
savebtn.addEventListener("click", function () {
  editor
    .save()
    .then((outputData) => {
      console.log("Article Data: ", outputData);
    })
    .catch((error) => {
      console.log("Saving Failed: ", error);
    });
});
