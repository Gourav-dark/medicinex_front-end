const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
        <div className="m-5 bg-white p-3 rounded w-50">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
  )
}

export default Login;
