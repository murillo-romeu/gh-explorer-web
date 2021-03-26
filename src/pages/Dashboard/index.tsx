import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title , Form, Repositories } from './styles'
import logoimg from '../../assets/logo.svg'

const Dashboard: React.FC = () =>{
  return (
    <>
      <img src={logoimg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/53868812?v=4"
            alt="Murillo Romeu"
          />
          <div>
            <strong>Repositorio Murillo</strong>
            <p>Descrição do meu repositorio</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/53868812?v=4"
            alt="Murillo Romeu"
          />
          <div>
            <strong>Repositorio Murillo</strong>
            <p>Descrição do meu repositorio</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/53868812?v=4"
            alt="Murillo Romeu"
          />
          <div>
            <strong>Repositorio Murillo</strong>
            <p>Descrição do meu repositorio</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
};

export default Dashboard;
