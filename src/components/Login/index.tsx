import { Row, Col,  Input, Form, Button, message } from "antd"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { useNavigate } from "react-router-dom"
import "../../css/login.css"

export const Login = () => {

    const auth = useAuth()
    const navigate = useNavigate();

    async function onFinish (values : { email:string , password:string }) {
        try {
            
            await auth.authenticate( values.email, values.password )
            navigate("/profile")

        } catch (error) {

            message.error("invalid email or passoword")
            
        }
    }

    return (

    <div className="fundo">

        
        <Row className="linha"
         
        >
            <Col className="coluna">

                <Form
                  
                    onFinish={onFinish}
                >

                    <Form.Item
                        className="inEmail"
                        label='Email'
                        name='email'
                    >
                        <Input />

                    </Form.Item>
                    <Form.Item
                        className="inSenha"
                        label='password'
                        name='password'
                    >
                        <Input.Password />

                    </Form.Item>
                    <Form.Item >
                        <Button type='primary' htmlType="submit" className="inButton">
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    </div>
    )

}