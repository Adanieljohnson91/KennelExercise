const remoteURL = "http://localhost:8088"

 const OwnerManager = {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owners`).then(result => result.json())
  },
  delete(id){
    return fetch(`${remoteURL}/owners/${id}`, {
        method:"DELETE",
        headers:{
            "Content-Types":"application/json"
        }
    })
    },
  add(data){
      console.log(data, "add call data")
      return fetch(`${remoteURL}/owners`, {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(data)
      })
      .then(res=>console.log(res, "Success"))
      .catch(err=>console.log(err, "Error"))
  },
  editOwner(data, id){
      return fetch(`${remoteURL}/owners/${id}`, {
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
      })
  }
}

export default OwnerManager;