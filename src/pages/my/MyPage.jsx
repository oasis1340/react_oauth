import React from 'react';
import { useSelector } from 'react-redux';


const MyPage = () => {

  

    
    // 토큰이 있을 때에만 접근할 수 있는 페이지
    const {currentUser, isLogin} = useSelector((state) => state.user)
    const {
        memberEmail,
        memberPicture,
        memberName,
        memberNickName
    } = currentUser;
    

    return (
        <div>
            <p>이메일 : {memberEmail}</p>
            <p>이름 : {memberName}</p>
            <p>닉네임 : {memberNickName}</p>
        </div>
    );
};

export default MyPage;