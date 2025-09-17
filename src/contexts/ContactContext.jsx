import { createContext, useContext, useReducer } from 'react';
import { contactService } from '../services/contactService';

const ContactContext = createContext();

const contactReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONTACTS':
      return { ...state, contacts: action.payload, loading: false };
    case 'ADD_CONTACT':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact,
        ),
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload,
        ),
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  const fetchContacts = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const contacts = await contactService.getContacts();
      dispatch({ type: 'SET_CONTACTS', payload: contacts });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const addContact = async (contactData) => {
    try {
      const newContact = await contactService.createContact(contactData);
      dispatch({ type: 'ADD_CONTACT', payload: newContact });
      return newContact;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  };

  const updateContact = async (id, contactData) => {
    try {
      const updatedContact = await contactService.updateContact(
        id,
        contactData,
      );
      dispatch({ type: 'UPDATE_CONTACT', payload: updatedContact });
      return updatedContact;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  };

  const deleteContact = async (id) => {
    try {
      await contactService.deleteContact(id);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  };

  const value = {
    contacts: state.contacts,
    loading: state.loading,
    error: state.error,
    fetchContacts,
    addContact,
    updateContact,
    deleteContact,
  };

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
};

export const useContacts = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContacts must be used within a ContactProvider');
  }
  return context;
};
