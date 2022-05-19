import React, { useState } from 'react';

import PromptItem from '../models/promptItem';

type PromptContextObj = {
  items: PromptItem[];
  addPrompt: (
    id: string,
    prompt: string,
    response: string,
    created: number
  ) => void;
};

export const PromptsContext = React.createContext<PromptContextObj>({
  items: [],
  addPrompt: () => {},
});

type Props = { children: React.ReactNode };

const PromptsContextProvider: React.FC<Props> = (props) => {
  const [promptList, setPromptList] = useState<PromptItem[]>([]);

  const addPromptHandler = (
    id: string,
    prompt: string,
    response: string,
    created: number
  ) => {
    const newPrompt = new PromptItem(id, prompt, response, created);

    setPromptList((prevState) => {
      return prevState.concat(newPrompt);
    });
  };

  const sortedList = promptList.sort(function (a: any, b: any) {
    return b.created - a.created;
  });

  const contextValue: PromptContextObj = {
    items: sortedList,
    addPrompt: addPromptHandler,
  };

  return (
    <PromptsContext.Provider value={contextValue}>
      {props.children}
    </PromptsContext.Provider>
  );
};

export default PromptsContextProvider;
