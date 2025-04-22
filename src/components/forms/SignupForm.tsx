import LabeledInput from "../LabeledInput"
import { useState } from "react";
import FormHeader from "../FormHeader";
import { SignupInput } from "@my-blogs-types/common";
import Button from "../Button";
import axios from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";


const SignupForm = () => {
    const [signupData, setSignupData] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    // const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleApiCall();      
    }

    const handleApiCall = async () => {
      setLoading(true);
      try{
        const res = await axios.post('/user/signup', signupData);
        if(res.status === 200){
          setLoading(false);
        }

        localStorage.setItem('jwt', res.data.jwt);
        localStorage.setItem('user', res.data.user.name);

        navigate('/');
        
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }catch(err: any){
        setLoading(false);
        console.log(err.response);
      }

    }

    
  return (<>
    <FormHeader header="Create an account" subHeader="Already have an account?" link="/login" />
    <form onSubmit={handleSubmit} className="px-8" >
      <LabeledInput label="Name" onChange={(e) => setSignupData({
        ...signupData,
        name: e.target.value
      })} placeholder="Akshay Pachkate" required={true} />


      <LabeledInput label="Email" onChange={(e) => setSignupData({
        ...signupData,
        email: e.target.value
      })} placeholder="akshay@gmail.com" required={true} />


      <LabeledInput label="Password" onChange={(e) => setSignupData({
        ...signupData,
        password: e.target.value
      })} placeholder="*******" required={true} type="password" />

      <Button title="Signup" loadingText="Registering" loading={loading} />
    </form>
    </>
  )
}

export default SignupForm
