import React, { useEffect, useState } from 'react';

let effecNum = 10;

const Effec = () => {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const loadDownload = () => {
    // 다운로드 받고 통신

    let loadDownloadData = 5;
    setData(loadDownloadData);
  };

  // 실행시점:
  // (1) App() 함수가 최초 실행될 때(마운트 될 때), 그림이 그려질 때
  // (2) 상태 변수가 변경될 때(App이 다시 실행될 때) 그게 dependencyList에 등록되어 있어야 한다.
  // (3) 의존리스트 관리를 할 수 있다.

  useEffect(() => {
    console.log('useEffect 실행됨');
    loadDownload();
  }, [search]);

  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색하기
      </button>
      <h1>검색</h1>
      <h1>데이터: {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
};

export { effecNum };
export default Effec;
