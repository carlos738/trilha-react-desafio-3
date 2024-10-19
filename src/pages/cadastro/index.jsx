import{Navigate, useNavigate} from 'react-router-dom';
import {MdContacts, MdEmail, MdLock} from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Header/styles';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";

import { Container, Column, Title, TitleLogin, SubTitleLogin, Wrapper } from './styles';

const Cadastro = () => {
    const navigate = useNavigate()

    const { control, handSubimit, formState: { errors }} = useForm({
        readValidate: 'onChange',
        mode: 'onChange'
    });

    const addPost = data =>{
        try {
            if (data.nome === '' || data.email === '' || data.senha === '') {
                alert("Insira todos os dados");
            }else{
                const dados = api.post('/users', data);
                console.log(dados);
                alert("Cadastro com sucesso");
                navigate('/Login');
            }
        } catch (error) {
            // TODO: HOUVE UM ERRO
        }
    }

    console.log('errors', errors);

    return(
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.   
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                       <TitleLogin>Comece agora grátis</TitleLogin>
                <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                
               <br/>
                <form onSubmit={handleSubmit(addPost)}>
            
                  <Input placeholder="Nome Completo" leftIcon={<MdContacts />} name="nome"  control={control} />
                   {errors.nome && <span>Nome é obrigatório</span>}
                  <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                  <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                  <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    
                </form>
                 
                    </Wrapper>
                </Column>    
            </Container>
        </>
    )
}