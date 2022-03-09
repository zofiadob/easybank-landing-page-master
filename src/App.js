import './css/App.css'
import Navbar from './Navbar'
import RequestSection from './RequestSection';
import FunctionSection from './FunctionSection';
import ArticleSection from './ArticleSection';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RequestSection />
      <FunctionSection />
      <ArticleSection />
      <Footer />
    </div>
  );
}

export default App;
