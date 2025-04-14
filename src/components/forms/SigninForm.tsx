import LabeledInput from "../LabeledInput"
import { useState } from "react";
import FormHeader from "../FormHeader";
import { LoginInput} from "@my-blogs-types/common";
import Button from "../Button";
import axios from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";


const SigninForm = () => {
    const [signupData, setSignupData] = useState<LoginInput>({
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
        const res = await axios.post('/user/login', signupData);
        if(res.status === 200){
          setLoading(false);
        }

        localStorage.setItem('jwt', res.data.jwt);

        navigate('/blogs');
        
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }catch(err: any){
        setLoading(false);
        console.error(err);
      }

    }

    
  return (<>
    <FormHeader header="Log in" subHeader="Do not have accound?" link="/signup" />
    <form onSubmit={handleSubmit} className="px-8" >
      
      <LabeledInput label="Email" onChange={(e) => setSignupData({
        ...signupData,
        email: e.target.value
      })} placeholder="akshay@gmail.com" required={true} />


      <LabeledInput label="Password" onChange={(e) => setSignupData({
        ...signupData,
        password: e.target.value
      })} placeholder="*******" required={true} type="password" />

      <Button title="Log in" loadingText="logging in" loading={loading} />
    </form>
    </>
  )
}

export default SigninForm
