import React from 'react'

function Contact() {
  return (
    <div>

<div className='row py-5 px-5 '  id="About">
    <div className="col-sm-6">
      <div className="text-dark bg-light ">
 <form>
  <div className="mb-3">

  <label for="exampleInputEmail1" className="form-label">first name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>


    <label for="exampleInputEmail1" className="form-label">last name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>


    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<br />
<br />
<br />
<br />
contact me by this phone
<br />

<h1>+ 251-928-50-59-04</h1>
</div>
    </div>



    <div className="col-sm-6">
      <div className="card text-dark">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BWQtnomaTMAIpJrRP1r3QyX23ZAkNcEEazSWg6kO6p1mgXe28YYwiNZUlHbzwlRghk8&usqp=CAU" alt="Image Description" />
    
      <div className="text-dark">
       <h3>we are enterpirener</h3>
         
 
        </div>
      </div>
    </div>
    </div>
    









    </div>
  )
}

export default Contact