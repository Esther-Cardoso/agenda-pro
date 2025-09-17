let contacts = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 99999-9999',
    category: 'Trabalho',
    company: 'Tech Solutions Ltda',
    position: 'Desenvolvedor Senior',
    notes: 'Conheci na conferência de tecnologia no ano passado.',
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '(11) 98888-8888',
    category: 'Família',
    company: '',
    position: '',
    notes: 'Prima do meio, aniversário em 15 de Julho.',
  },
  {
    id: 3,
    name: 'Pedro Almeida',
    email: 'pedro.almeida@email.com',
    phone: '(11) 97777-7777',
    category: 'Amigos',
    company: 'StartUp Innovate',
    position: 'CEO',
    notes: 'Amigo da faculdade, sempre disponível para networking.',
  },
];

let nextId = 4;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const contactService = {
  async getContacts() {
    await delay(500);
    return [...contacts];
  },

  async getContact(id) {
    await delay(300);
    const contact = contacts.find((c) => c.id === parseInt(id));
    if (!contact) throw new Error('Contato não encontrado');
    return { ...contact };
  },

  async createContact(contactData) {
    await delay(400);
    const newContact = {
      id: nextId++,
      ...contactData,
    };
    contacts.push(newContact);
    return { ...newContact };
  },

  async updateContact(id, contactData) {
    await delay(400);
    const index = contacts.findIndex((c) => c.id === parseInt(id));
    if (index === -1) throw new Error('Contato não encontrado');

    contacts[index] = { ...contacts[index], ...contactData };
    return { ...contacts[index] };
  },

  async deleteContact(id) {
    await delay(300);
    const index = contacts.findIndex((c) => c.id === parseInt(id));
    if (index === -1) throw new Error('Contato não encontrado');

    contacts.splice(index, 1);
  },

  async searchContacts(query) {
    await delay(400);
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(query.toLowerCase()) ||
        contact.email.toLowerCase().includes(query.toLowerCase()) ||
        contact.phone.includes(query),
    );
  },
};
