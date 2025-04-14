import SigninForm from "../components/forms/SigninForm"

const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="w-[70%] m-auto" >
        <SigninForm />
      </div>
      <div className="bg-gray-200 hidden lg:flex lg:justify-center lg:items-center" >
          <img src="login_signup.png" className="w-[60%] mix-blend-multiply" alt="" />
      </div>
    </div>
  )
}

export default Signin
