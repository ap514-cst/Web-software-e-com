import { useState } from 'react'
import { useNavigate,Link } from "react-router-dom"


const SingIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const handlerSubmit = async (e) => {
    e.preventDefault()


    let res = await fetch("http://localhost:3000/api/user/reg", {
      method: "Post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json"
      }

    })
    res = await res.json();
    console.log(res);
  
    localStorage.setItem("users", JSON.stringify(res))
    alert("login successfull")
    navigate("/home")
      
    



  }






  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          SingIn 
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handlerSubmit}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"


                  onChange={(e) => { setName(e.target.value) }}

                  placeholder="John Doe"
                />

              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"


                  onChange={(e) => { setEmail(e.target.value) }}

                  placeholder="you@example.com"
                />

              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"

                  onChange={(e) => { setPassword(e.target.value) }}

                  placeholder="••••••••"
                />

              </div>
              <p className="mt-2 text-xs text-gray-500">
                Must be at least 6 characters long
              </p>
            </div>

            {/* Submit Button */}
            <div>
              <span className='text-orange-600'><u><Link to={'adminLogin'}>Admin</Link></u></span>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>

          {/* Form Data Preview (for debugging) */}

        </div>
      </div>
    </div>
  );
};


export default SingIn
