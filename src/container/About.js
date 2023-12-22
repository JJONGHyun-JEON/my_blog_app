import React from 'react';
import '../global.css'

export default function About() {

         // 현재 날짜를 얻어옵니다.
         const currentDate = new Date();

         // 연도를 얻어옵니다.
         const currentYear = currentDate.getFullYear();
    return (
        <div>
            <div className='background-ima'>

                <div className='asd'>
                    <h1 style={{ fontWeight: 'bold' }}> - 전종현 -</h1>
                    <p style={{ fontSize: '25px', fontWeight: 'bold' }}>웹 개발자 포트폴리오<br/>ㅡ</p>
                    <div>안녕하세요. <br />웹 풀스택을 지향하는 개발자입니다.<br />
                        저의 블로그를 방문해주셔서 감사합니다.
                    </div>
                </div>
            </div>

            <h1 style={{fontWeight : 'bold', marginTop : '15px'}}>
                About Me
            </h1>

            <div style={{marginLeft : ' 0px'}}>
                <table class="type03">
                    <tr>
                        <th scope="row">이름</th>
                        <td>전종현</td>
                        <th scope="row">생년월일</th>
                        <td>1998-08-14</td>
                    </tr>
                    <tr>
                        <th scope="row">연락처</th>
                        <td>010-8720-1491</td>
                        <th scope="row">이메일</th>
                        <td>jjh980814@naver.com</td>
                    </tr>
                    <tr>
                        <th scope="row">주소지</th>
                        <td>천안시 서북구 성환읍 안궁1길 35</td>
                        <th scope="row">학력</th>
                        <td>방송통신대학교 재학중(2023~)</td>
                    </tr>
                </table>
            </div>
            
            


        </div>

    )
}