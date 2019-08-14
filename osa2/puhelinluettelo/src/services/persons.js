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

const updateUser = (id, name, num) => {
    let confirm = window.confirm(`Name ${name} already exists. Do you want to overwrite?`)
    if (confirm) {
        const request = axios.put(baseUrl + "/" + id, {
            id: id,
            name: name,
            number: num,
        })
        return request.then(console.log("Update done"))    
    }
}

export default { getAll, create, deleteUser, updateUser }