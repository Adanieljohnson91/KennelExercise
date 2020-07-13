const remoteURL = "http://localhost:8088"

const LocationManager = {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  },
  add(data) {
    return fetch(`${remoteURL}/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "applications/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => console.log(res, "Success"))
      .catch(err => console.log(err, "Error"))
  },
  edit(data, id) {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => console.log(res, "Success"))
      .catch(err => console.log(err, "Error"))
  }
}

export default LocationManager;