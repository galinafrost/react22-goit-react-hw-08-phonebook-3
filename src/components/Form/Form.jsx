import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { getContacts } from 'redux/contacts/contact-selector';
import {
  fetchContacts,
  deleteContacts,
  addContactsFetch,
} from '../../redux/contacts/contact-operations';

import styles from './form.module.css';

const Form = () => {
  const { items, loading, error } = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContacts = data => {
    const resultNumber = items.find(contact => contact.number === data.number);
    if (resultNumber) {
      return alert(`${data.name} уже есть в списке`);
    }

    const action = addContactsFetch(data);

    dispatch(action);
  };

  const onRemoveContacts = id => {
    const action = deleteContacts(id);
    dispatch(action);
  };

  const [filter, setFilter] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return items;
    }
    const filterStr = filter.toLowerCase();
    const result = items.filter(contact => {
      const name = contact.name.toLowerCase();
      return name.includes(filterStr);
    });

    return result;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={onAddContacts} />
      <h2 className={styles.title}>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      {loading && <p>...Loading</p>}
      {error && <p>Error while fetching</p>}
      <ContactList
        contacts={filteredContacts}
        onRemoveContacts={onRemoveContacts}
      />
    </div>
  );
};

export default Form;
