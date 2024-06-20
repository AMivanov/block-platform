import styled from 'styled-components';

export const EditProfilePage = styled.div`
  width: 384px;
  border: 1px solid #DFE5EC;
  border-radius: 6px;
  box-shadow:
          rgba(0, 0, 0, 0.16) 0 10px 36px 0,
          rgba(0, 0, 0, 0.06) 0 0 0 1px;
  padding: 48px 32px;
  background: #FFFFFF;
  margin: 0 auto;
  font-family: 'RobotoRegular', sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #262626;
`

export const Title = styled.h2`
  text-align: center;
  margin: 0 auto 24px auto;
  font-size: 20px;
  line-height: 28px;
`

export const Input = styled.input`
  width: 320px;
  height: 40px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #BFBFBF;
  border-radius: 5px;
  padding: 8px 12px;
  margin-bottom: 12px;

  &::placeholder {
    color: #BFBFBF;
  }
`

export const Form = styled.form`

`

export const PositionButton = styled.div`
  margin: 24px auto 12px auto;
`