import axios from "axios";

const contactInstance = axios.create({
  baseURL: 'https://648a05135fa58521cab0a641.mockapi.io/contacts',
});

export const getAllContacts = async () => {
    const { data } = await contactInstance.get('/')
    return data
}

export const addContact = async data => {
    const { data: result } = await contactInstance.post('/', data)
    return result
}

export const deleteContact = async id => {
    const { data } = await contactInstance.delete(`/${id}`)
    return data
}