import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function Home_page(){
    const navigate = useNavigate();
  return(
    <>
           <Button variant="primary" onClick={() => navigate("/page_one")}>Without API</Button>
           <Button variant="primary">With API</Button>
    </>
  )
}