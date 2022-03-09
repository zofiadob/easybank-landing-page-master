import './css/App.css'
import Navbar from './Navbar'
import RequestSection from './RequestSection';
import FunctionSection from './FunctionSection';
import ArticleSection from './ArticleSection';
import Footer from './Footer';
import './css/DesktopNavbar.css'
import './css/DesktopRequestSection.css'
import './css/DesktopFunctionSection.css'
import './css/DesktopArticleSection.css'
import './css/DesktopFooter.css'

function App() {
  window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded"); 
   });

  return (
    <main className="App">
      <Navbar />
      <RequestSection />
      <FunctionSection />
      <ArticleSection />
      <Footer />


      <div class="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/zofiadob">
            Zofia Dobrowolska
          </a>
          .
        </div>
    </main>
  );
}

export default App;
