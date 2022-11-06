function Join() {

    return (
        <div>
            <div className="logo">
                <a href="#"></a>
                {/*여기에 로고이미지 넣기&로고이미지 클래스 통일하기*/}
            </div>
            <div className="headline">
                <p>회원가입</p>
            </div>
            <table>
                <tr>
                    <th>닉네임</th>
                    <th>
                        <input>이화연</input>
                    </th>

                    {/*여기에 input상자 js로 받아오기*/}
                </tr>
                <tr>
                    <th>전화번호</th>
                    <th>
                        <input type="tel" name="userNumber">01012345678</input>
                        <button>번호 인증하기</button>
                    </th>
                </tr>
                <tr>
                    <th>회원ID</th>
                    <th>
                        <input type="string" name="ID">ID</input>
                        <button>ID 중복 확인</button>
                    </th>
                </tr>
                <tr>
                    <th>비밀번호</th>
                    <th>
                        <input type="string" name="pwd">비밀번호 입력</input>
                        <input type="string" name="pwdAgain">비밀번호 확인</input>
                        <button>비밀번호 확인</button>
                        <p>*비밀번호는 영문과 숫자, 특수기호를 포함한 10~15자리로 설정해주세요</p>
                    </th>
                </tr>
            </table>
            <button type="button" name="join_button">회원가입 완료하기</button>



        </div>
    );
}