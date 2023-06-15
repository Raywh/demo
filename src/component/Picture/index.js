import { useState, useEffect } from 'react';
import './index.css';

function Input(props) {
  const [age, setText] = useState('sss');

  const handleChangeText = () => {
    setText('99999999');
  };

  useEffect(() => {
    console.log('useEffect triggered'); // 添加调试语句
    console.log(props.isClickPic);
  }, [props.isClickPic]);

  return (
    <div>
      <input value={age} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleChangeText}>考试</button>
    </div>
  );
}

const Picture = () => {
  const bg_add_name = 'background--active';
  const pic_add_name = 'picture--active';

  const [isClickPic, setIsClickPic] = useState(false);

  const handlePicClick = (flag) => {
    setIsClickPic((prevIsClickPic) => flag); // 使用函数形式的更新
  };

  return (
    <>
      <div
        className={'background ' + (!isClickPic && bg_add_name)}
        onClick={() => {
          handlePicClick(false);
        }}
      >
        <img
          className={'picture ' + (isClickPic && pic_add_name)}
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
          onClick={(e) => {
            e.stopPropagation();
            handlePicClick(true);
          }}
        />
      </div>
      <Input isClickPic={isClickPic} />
    </>
  );
};

export default Picture;
