class AIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    text: string;
    index: number;
    logprobs: null;
    finish_reason: string;
  }[];

  constructor(id: string,
    object: string,
    created: number,
    model: string,
    choices: {
      text: string;
      index: number;
      logprobs: null;
      finish_reason: string;
    }[]) {
      this.id = id;
      this.object = object;
      this.created = created;
      this.model = model;
      this.choices = choices;
  }
}

export default AIResponse;