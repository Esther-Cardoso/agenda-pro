import { Link } from 'react-router-dom';

const ContactCard = ({ contact, onDelete }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      window.confirm(
        `Tem certeza que deseja excluir o contato ${contact.name}?`,
      )
    ) {
      onDelete(contact.id);
    }
  };

  return (
    <div className="contact-card bg-white rounded-lg shadow-md p-4 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <Link
            to={`/contacts/${contact.id}`}
            className="block hover:text-blue-600"
          >
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {contact.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 truncate">{contact.email}</p>
          <p className="text-sm text-gray-600 mt-1">{contact.phone}</p>

          {contact.category && (
            <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
              {contact.category}
            </span>
          )}
        </div>

        <div className="flex space-x-2 ml-2">
          <Link
            to={`/contacts/edit/${contact.id}`}
            className="text-blue-500 hover:text-blue-700"
            title="Editar contato"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </Link>

          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700"
            title="Excluir contato"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
