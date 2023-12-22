import React from "react"

export default function Skill() {


    return (
        <div>
            <div style={{ width: '50%', height: '100vh', borderTop: '1px solid black', float: 'left', }}>
                <h1>Skills</h1>

                <div style={{ marginTop: '25px' }}>
                    FrontEnd
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <div style={{ height: '10vh', width: '10%', }} className="css3-icon"></div>
                        <div style={{ height: '10vh', width: '10%', }} className="html5-icon"></div>
                        <div style={{ height: '10vh', width: '10%', }} className="js-icon"></div>
                        <div style={{ height: '10vh', width: '10%', }} className="jquery-icon"></div>
                        <div style={{ height: '10vh', width: '10%', }} className="react-icon"></div>
                        <div style={{ height: '10vh', width: '10%', }} className="redux-icon"></div>
                        <div style={{ height: '10vh', width: '10%', }} className="next-icon"></div>
                    </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                    backEnd
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ height: '10vh', width: '10%', }} className="node-icon"></div>
                        <div style={{ height: '10vh', width: '10%', }} className="springboot-icon"></div>
                        <div style={{ height: '10vh', width: '10%', }} className="express-icon"></div>
                        <div style={{ height: '10vh', width: '10%', }} className="java-icon"></div>
                    </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                    DevOps/Version Control
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ height: '10vh', width: '10%', }} className="github-icon"></div>
                        <div style={{ height: '10vh', width: '10%', }} className="linux-icon"></div>
                    </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                    Database
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ height: '10vh', width: '10%', }} className="mongodb-icon"></div>
                        <div style={{ height: '10vh', width: '10%', }} className="mysql-icon"></div>
                        <div style={{ height: '10vh', width: '10%', }} className="mariadb-icon"></div>
                        <div style={{ height: '10vh', width: '10%', }} className="mybatis-icon"></div>
                    </div>
                </div>

                <div>
                    ETC
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ height: '10vh', width: '10%', }} className="slack-icon"></div>
                        <div style={{ height: '10vh', width: '10%', }} className="flutter-icon"></div>

                    </div>
                </div>

                {/* <div>
                    Mobile
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    </div>
                </div> */}
            </div>


            <div style={{ width: '50%', height: '100vh',borderLeft : '1px solid black', borderTop: '1px solid black', float: 'left' }}>

                <div style={{borderBottom : '1px solid black'}}>
                    <h1>
                        Career
                    </h1>
                    <div style={{marginBottom : '15px'}}>
                    주식회사 지농 2022-08 ~ 2023-07<br />
                    해당 사업의 관제시스템 웹/앱(flutter) 개발, 유지보수    
                    </div>
                    
                </div>

                <div style={{borderBottom : '1px solid black', marginBottom : '5px'}}>
                    <h1>
                        education
                    </h1>
                    <div style={{marginBottom : '15px'}}>
                    비트교육센터<br /> 2022-01 ~ 2022-08<br />
                    웹서비스를 활용한 딥러닝 개발자 과정(NCS)
                    </div>
                    
                </div>

                <div>
                    <h1>
                        Project
                    </h1>
                    <div style={{marginLeft : '10px', marginRight : '10px', marginTop : '30px'}} className="project-ima"></div>
                </div>
                
            </div>


        </div>

    )
}