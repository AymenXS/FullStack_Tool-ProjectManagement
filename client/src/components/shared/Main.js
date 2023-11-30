import { useSelector } from 'react-redux';
import Container from '../../assets/wrappers/Main';
import CreateButton from './Buttons';
import Modal from './Modal';
import Projects from '../projects/Projects';
import Tasks from '../tasks/Tasks';

const Main = () => {
  const { type, isOpen } = useSelector((store) => store.modal);

  return (
    <Container>
      <CreateButton />
      {isOpen && <Modal />}
      {type === 'Project' ? <Projects /> : <Tasks />}
    </Container>
  );
};
export default Main;
