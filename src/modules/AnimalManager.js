const remoteURL = "http://localhost:8088"

const AnimalManager = {
    get(id) {
        return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/animals`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/animals/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Types": "application/json"
            }
        })
    },
    add(data) {
        return fetch(`${remoteURL}/animals/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => console.log(res, "success"))
            .catch(err => console.log(err))
    },
    edit(data, id) {
        return fetch(`${remoteURL}/animals/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}

export default AnimalManager;