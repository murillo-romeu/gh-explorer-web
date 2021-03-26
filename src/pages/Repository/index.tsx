import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoimg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoimg} alt="Github explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://avatars.githubusercontent.com/u/53868812?v=4" alt="imagem" />
          <div>
            <strong>Titulo do repositorio</strong>
            <p>Descrição do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="/repository/">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
