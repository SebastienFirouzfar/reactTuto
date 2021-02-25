import React, { useState } from 'react';
function App() {
  return <div>
    <Folder name=" Desktop">
      <Folder name=" Music">
        <File name="All_star.mp4" />
        <File name="Express_file.mp4" />
      </Folder>

      <File name="dogs.jpeg" />
      <File name="cats.jpeg" />
    </Folder>

    <Folder name=" Application" />

  </div>
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { name, children } = props
  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => setIsOpen(!isOpen);

  return <div>
    <span onClick={handleClick}>
      <i className="fa fa-folder" style={{ color: 'blue' }}></i>
      <i className={`fa fa-angle-${direction}`} style={{ marginLeft: '2px' }}></i>
    </span>
    {name}
    <div style={{ marginLeft: '27px' }}>
      {isOpen ? children : null}
    </div>
  </div>
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline',
  };

  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {name}
  </div>
}

export default App;
