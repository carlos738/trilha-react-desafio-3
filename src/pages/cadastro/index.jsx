import{Navigate, useNavigate} from 'react-router-dom';
import {MdContacts, MdEmail, MdLock} from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Header/styles';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";

import { Container, Column, Title, TitleLogin, SubTitleLogin, Wrapper } from './styles';

const RegisterStudent = () => {
    const navigate = useNavigate()

    const { control, handSubimit, formState: { errors }} = useForm({
        readValidate: 'onChange',
        mode: 'onChange'
    });

    const addPost = data =>{
        try {
            if (data.nome === '' || data.email === '' || data.senha === '') {
                alert("Enter all data");
                
            }else{
                const dados = api.post('/users', data);
                console.log(dados);
                alert("Registration successfully");
                
                navigate('/Login');
            }
        } catch (error) {
            
            // TODO: THERE WAS A MISTAKE
        }
    }

    console.log('errors', errors);

    return(
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                    The platform for you to learn from experts, master the main
                    technologies and get into the most desired companies faster.                
                       
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                       <TitleLogin>Get started now for free</TitleLogin>
                <SubTitleLogin>Create your account and make the change._</SubTitleLogin>
                
               <br/>
                <form onSubmit={handleSubmit(addPost)}>
            
                  <Input placeholder="Full Name" leftIcon={<MdContacts />} name="nome"  control={control} />
                   {errors.nome && <span>Name is required</span>}
                  <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>Email is required</span>}
                  <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Password is required</span>}
                  <Button title="Create my account" variant="secondary" type="submit"/>
                    
                </form>
                 
                    </Wrapper>
                </Column>    
            </Container>
        </>
    )
}
export default{ RegisterStudent }