import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/home/Home';

const HomePage = () => {
  //http 요청(jquery -> ajax, javascript -> fetch, axios(다운받아야함))

  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);

  //빈 배열이면 최초 한번만 실행한다.
  useEffect(() => {
    //다운로드 가정 = Block이 되는데, fetch(), axios, ajax()는 비동기로 됨
    let data = [
      { id: 1, title: '제목 1', content: '내용1' },
      { id: 2, title: '제목 2', content: '내용2' },
      { id: 3, title: '제목 3', content: '내용3' },
      { id: 4, title: '제목 4', content: '내용4' },
    ];

    //다운로드가 되지않았는데 빈 데이터가 들어가버린다. 그래서 처음에 빈 데이터가 들어간후 callback되어 다운로드된 데이터가 다시 들어가는 상태가 된다.
    //그래서 상태 데이터(useState)여야 한다.
    setBoards([...data]);
  }, []);

  return (
    <div>
      <Header />
      <Home
        boards={boards}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
