const remoteURL = "http://localhost:8088"

 const LocationManager = {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then(result => result.json())
  },
  delete(id){
    return fetch(`${remoteURL}/locations/${id}`, {
        method:"DELETE",
        headers:{
            "Content-Types":"application/json"
        }
    })
}
}

export default LocationManager;