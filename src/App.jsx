import { Routes, Route } from 'react-router-dom';
import { ContactProvider } from '../src/contexts/ContactContext';
import Layout from '../src/components/Layout/Layout';
import Dashboard from '../src/pages/Dashboard';
import ContactList from '../src/pages/ContactList';
import ContactForm from '../src/components/Contact/ContactForm';
import ContactDetails from '../src/pages/ContactDetails';
import NotFound from '../src/pages/NotFound';

function App() {
  return (
    <ContactProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/contacts/new" element={<ContactForm />} />
          <Route path="/contacts/edit/:id" element={<ContactForm />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ContactProvider>
  );
}

export default App;
