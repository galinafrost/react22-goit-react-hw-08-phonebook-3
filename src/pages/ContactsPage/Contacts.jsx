import Form from './../../components/Form';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';

const ContactsPage = () => {
  return (
      <Form />
  );
};

const ContactsWithAuthRedirect = WithAuthRedirect(ContactsPage, '/login');

export default ContactsWithAuthRedirect;
