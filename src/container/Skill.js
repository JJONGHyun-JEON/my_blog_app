export default function Skill() {
    return (
        <div>
            <div style={{ width: '50%', height: '100vh', border: '1px solid red', float: 'left' }}>
                Skills
                <div>
                    FrontEnd
                    <img style={{height : '10vh', width : '10%',}} src={require("file:///C:/Users/j2022/Downloads/javascript-color.svg").default}></img>
                    밥먹고, 로고 이미지 다 불러오고 없는건 따로 찾고 이미지 경로는 변수로 만들어서 보기 좋게 정리
                </div>
                <div>
                    BackEnd
                </div>
                <div>
                    Cooperation(깃)
                </div>
                <div style={{ width: '100%', height: '30vh', border: '1px solid green', float: 'left' }}>
                    Career<br />
                    지농 2022-08 ~ 2023-07<br />
                    회사에서 뭐했는지
                </div>
            </div>
            <div style={{ width: '50%', height: '100vh', border: '1px solid green', float: 'left' }}>
                education<br />
                비트교육센터<br /> 2022-01 ~ 2022-08<br />
                학원에서 뭐 배웠는지 ㅇㅇ



                <div style={{ width: '100%', height: '70vh', border: '1px solid green', float: 'left' }}>
                    프로젝트<br />뭐했는지 뭐하고있는지 ㅇㅇ

                    커리어,프로젝트 클릭시 이동되는거 수정하고 education추가해줘야함ㅇㅇ
                </div>
            </div>


        </div>

    )
}