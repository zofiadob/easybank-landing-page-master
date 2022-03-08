import './css/App.css'
import Navbar from './Navbar'
import RequestSection from './RequestSection';
import FunctionSection from './FunctionSection';
import ArticleSection from './ArticleSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RequestSection />
      <FunctionSection />
      <ArticleSection />
    </div>
  );
}

export default App;
