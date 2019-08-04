import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deleteUser = (name, id) => {
    let confirm = window.confirm("Are you sure you want to delete " + name + "?")
    if (confirm) {
        const request = axios.delete(baseUrl + "/" + id)
        return request.then(console.log("Delete done"))
    }
}

export default { getAll, create, deleteUser }