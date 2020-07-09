const remoteURL = "http://localhost:8088"

 const EmployeeManager = {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`).then(result => result.json())
  },
  delete(id){
    return fetch(`${remoteURL}/employees/${id}`, {
        method:"DELETE",
        headers:{
            "Content-Types":"application/json"
        }
    })
}
}

export default EmployeeManager;