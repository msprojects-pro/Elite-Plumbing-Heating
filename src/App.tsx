import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <Router>
      <div className="bg-bg-deep min-h-screen text-slate-100 selection:bg-brand-red selection:text-white">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          {/* Fallback to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}
