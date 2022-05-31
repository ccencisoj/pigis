import agent from "agent";

const auth = {};

auth.child = ({required})=> async (ctx)=> {
  try {
    const child = (await agent.Child.current({
      headers: {"Cookie": ctx.req.headers.cookie}
    })).data.child;
    
    if(!child && required) 
      return {
        props: {},
        redirect: {destination: "/child/signIn"}
      }

    return {props: {child}};

  }catch(error) {
    return {
      props: {},
      redirect: {destination: "/child/signIn"}
    };
  }
}

auth.parent = ({required})=> async (ctx)=> {
  try {
    const parent = (await agent.Parent.current({
      headers: {"Cookie": ctx.req.headers.cookie}
    })).data.parent;

    if(!parent && required)
      return {
        props: {},
        redirect: {destination: "/parent/signIn"}
      }

    return {props: {parent}};

  }catch(error) {
    return {
      props: {},
      redirect: {destination: "/parent/signIn"}
    };
  }
}

export default auth;