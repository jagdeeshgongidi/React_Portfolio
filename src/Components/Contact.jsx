import {React,useState} from 'react'
import {Container,Row,Col, Button, Form} from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg"
function Contact() {
    const formInitialDetails={
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:""
    }

    const [formDetails,setFormDetails] =useState(formInitialDetails);
    const [buttonText,setButtonText] = useState("send");
    const [status,setStatus]=useState({});

    const onFormUpdate=(category,value) => {
        setFormDetails(prevValues =>{
            return {...prevValues,[category]:value}
        });
    };
    const handleSubmit=async(e) => {
        e.preventDefault();
        setButtonText('sending.....');
        let response= await fetch("/contact",{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json;charset=utf-8',
            },
            body:JSON.stringify(formDetails),
        }
        );

        setButtonText("send")
        let result=await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({success:true,message:"message sent successfully"});

        }else{
            setStatus({success:false,message:"something went  wrong please try again later"});
        }
    };
    
  return (
    <section className="contact" id="connect">
    <Container>
    
    <Row className='align-items-center'>
        <Col size={12} md={6}>
            <img src={contactImg} alt={contactImg} className="contact-img" />
        </Col>
        <Col md={6}>
            <h2> Get in Touch </h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6} className="px-1">
                    <Form.Group controlId='formFirstName'>
                        <Form.Label>First name</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder=""
                            value={formDetails.firstName}
                            onChange={(e) => onFormUpdate('firstName', e.target.value)}
                            />
                    </Form.Group>
                    </Col>
                    <Col sm={6}  className="px-1">
                        <Form.Group>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder=""
                            value={formDetails.lastName}
                            onChange={(e) => onFormUpdate('lastName', e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                  <Col sm={6}  className="px-1" >
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                            <Form.Control
                            type="email"
                            placeholder=""
                            value={formDetails.email}
                            onChange={(e) => onFormUpdate('email',e.target.value)}
                            />
                    </Form.Group>
                  </Col>
                  <Col sm={6}  className="px-1">
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                            <Form.Control 
                            type="tel" 
                            placeholder=""
                            value={formDetails.phone}
                            onChange={(e) =>onFormUpdate('phone',e.target.value)}
                            />
                    </Form.Group>
                  </Col>
                
                <Col sm={12} className="px-1">
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            rows={6} 
                            cols={80}   
                            placeholder="enter your message here"
                            value={formDetails.message}
                            onChange={(e) => onFormUpdate('message', e.target.value)}
                            />

                    </Form.Group>
                    <Button onClick={() =>setButtonText('sending')}type="submit"><span>{buttonText}</span></Button>
                </Col>
                {
                    status.message &&
                    <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                }
            </Row>
            
            </Form>
        </Col>
    </Row>
    </Container>
    </section>
   
  )
}

export default Contact;