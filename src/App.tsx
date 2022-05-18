import AddPrompt from './components/AddPrompt';
import Responses from './components/Responses';
import PromptsContextProvider from './store/prompts-context';

function App() {
  return (
    <PromptsContextProvider>
      <AddPrompt />
      <Responses />
    </PromptsContextProvider>
  );
}

export default App;
