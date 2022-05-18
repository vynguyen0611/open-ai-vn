// export type PromptItem = {
//     id: string;
//     prompt: string;
//     response: string;
//     created: number;
//   };

class PromptItem {
  id: string;
    prompt: string;
    response: string;
    created: number;

  constructor(id: string,
    prompt: string,
    response: string,
    created: number) {
      this.id = id;
      this.prompt = prompt;
      this.response = response;
      this.created = created;
  }
}

export default PromptItem;