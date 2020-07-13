const remoteURL = "http://localhost:8088"

const EmployeeManager = {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  },
  add(data){
    return fetch(`${remoteURL}/employees`, {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res=>console.log(res, "Success"))
    .catch(err=>console.log(err, "Error"))
  },
  edit(data, id){
    return fetch(`${remoteURL}/employees/${id}`, {
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    .then(res=>console.log(res, "Success"))
    .catch(err=>console.log(err, "Error"))
  }
}

export default EmployeeManager;