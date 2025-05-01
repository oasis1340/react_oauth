import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import MyPage from "../pages/my/MyPage";
import SignIn from "../pages/signIn/SignIn";
import SignInSuccess from "../pages/signIn/SignInSuccess";
import SignUp from "../pages/signUp/SignUp";
import AuthLayout from "../pages/layout/AuthLayout";
import Sms from "../pages/signUp/Sms";
import PaymentContainer from "../pages/payment/PaymentContainer";
import Detail from "../pages/payment/Detail";
import Success from "../pages/payment/Success";
import Failed from "../pages/payment/Failed";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <Main />
      },
      {
        path : "/member",
        element : <AuthLayout />,
        children : [
          {
            path : "my",
            element : <MyPage />
          }
        ]
      },
      {
        path : "/payment",
        element : <PaymentContainer />,
        children : [
          {
            path : "",
            element : <Detail />
          },
          {
            path : "success",
            element : <Success />
          },
          {
            path : "failed",
            element : <Failed />
          },
        ]
      }
    ]
  },
  {
    path : "/sign-in",
    element : <SignIn />
  },
  {
    path : "/sms",
    element : <Sms />
  },
  {
    path : "/sign-in-success",
    element : <SignInSuccess />
  },
  {
    path : "/sign-up",
    element : <SignUp />
  },
])

export default router;