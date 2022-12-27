import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/theme.css';
import './tailwind/tailwind.css';
import Title from './components/Text/Title';
import Text from './components/Text/Text';
import Wrapper from './components/Layout/Wrapper';
import Modal from './components/Modals/Modal';
import Button from './components/Forms/Button';
import Image from './components/Multimedia/Image';

export * from "./components/Forms/Button";
export * from "./components/Layout/Wrapper"
export * from "./components/Modals/Modal";
export * from "./components/Modals/ModalBackground";
export * from "./components/Multimedia/Image";
export * from "./components/Text/Text";
export * from "./components/Text/Title";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wrapper>
      <>
        {0 ? (
          <Modal
            color="dark"
            actions={<>
              <Button label="Hola" color={"secondary"} />
            </>}
          >
            <Title title="Modal Example" size={"xxl"} />
            <Image src="https://via.placeholder.com/800x600" alt="Hotelverse" />
            <Text>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus a nisl posuere dui iaculis tempor eu porta
                dolor. Suspendisse sodales luctus ipsum vel fermentum.
                Curabitur vel enim hendrerit, tincidunt justo sit amet,
                luctus nisl. Vivamus accumsan lectus sagittis purus
                cursus euismod ac et metus. Vestibulum fermentum sem
                neque.
              </p>
            </Text>
          </Modal>
        ) : null}

        <Title
          title="Hotelverse Design System"
          size={'text-xxl'}
          color={'text-secondary'}
          underline={true}
        />
        <Text>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus a nisl posuere dui iaculis tempor eu porta dolor.
            Suspendisse sodales luctus ipsum vel fermentum. Curabitur
            vel enim hendrerit, tincidunt justo sit amet, luctus nisl.
            Vivamus accumsan lectus sagittis purus cursus euismod ac et
            metus. Vestibulum fermentum sem neque. In convallis massa
            vel aliquam viverra. Nulla lacinia dolor eu quam
            condimentum, in fringilla mauris feugiat. Ut non quam in
            arcu egestas semper. Nam at volutpat velit. Sed auctor
            turpis in rhoncus tincidunt. Sed sapien felis, faucibus sit
            amet posuere sed, scelerisque vitae metus. Nulla magna
            lectus, scelerisque sit amet placerat non, pellentesque ut
            arcu. Aenean tristique vestibulum urna id commodo. Sed
            sollicitudin ante quis sollicitudin hendrerit. Duis a ipsum
            eget eros consequat feugiat.
          </p>

          <p>
            Praesent bibendum leo justo, ut consectetur sapien molestie
            nec. Curabitur ultrices ullamcorper dapibus. Suspendisse
            tincidunt, lorem eu suscipit scelerisque, urna quam viverra
            quam, at aliquam massa lacus sed metus. Nulla in hendrerit
            turpis, aliquam mollis est. In lectus nunc, iaculis
            imperdiet dui id, ultricies ultrices libero. Integer ante
            elit, finibus eu bibendum at, molestie a massa. Proin
            sollicitudin blandit urna vitae ultrices. Fusce imperdiet
            purus a sem dapibus efficitur. Proin ullamcorper porttitor
            eros, at ultricies augue blandit fringilla. Vivamus luctus
            augue vel libero facilisis ullamcorper. Aenean varius erat
            vel lectus maximus, quis eleifend metus dapibus. Phasellus
            porta a libero quis ullamcorper. Vestibulum elementum
            faucibus nulla eget fringilla.
          </p>

          <p>
            Fusce consequat mauris non enim varius varius. Duis interdum
            blandit hendrerit. Mauris sit amet sem ut dolor facilisis
            interdum. Proin vulputate ante tempus mattis laoreet. Fusce
            vehicula lorem vel urna efficitur consectetur. Duis
            tincidunt convallis porta. Phasellus ex nunc, iaculis vel
            congue sit amet, consequat at elit. Suspendisse sit amet
            semper lorem, in aliquam sapien. Donec vel nulla eros. Nunc
            eu tortor eu purus ullamcorper finibus nec et erat. In
            convallis sapien eget diam convallis fringilla. Maecenas
            semper lacus sit amet ligula pulvinar, in fermentum nisl
            semper.
          </p>
        </Text>
      </>
    </Wrapper>
  </React.StrictMode>
);

