import { useEffect, useState } from "react";
import data from "../data.json";
import { nanoid } from "nanoid";
import { Container } from "./App.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

export const App = () => {
const [contacts, setContacts] = 
useState(JSON.parse(window.localStorage.getItem('contacts')) ?? data);
const [filter, setFilter] = useState('');
    
useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])

const changeFilter = e => {
  setFilter(e.currentTarget.value);
};

const addContact = ({ name, number }) => {
  return (contacts.some(el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase())) ? 
  alert(`${name} is alredy in contacts`) : setContacts(prev => {
[...prev].push({
        id: nanoid(),
        name: name,
        number: number,
      });
    });
  };
  
  const visibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  
      return (
     
<Container>
<h1>Phonebook</h1>
<ContactForm onSubmit = {this.addContact}/>

<h2>Contacts</h2>
<Filter value = {this.state.filter} onChange = {this.changeFilter} />
<ContactList  
contacts={visibleContacts}
onDeleteContact={this.deleteContact}/>
</Container>
      )
    }

