"use client";

import { BaseProps } from "@/types/props";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

export default function Guard(props: BaseProps){
  const router = useRouter();
  console.log("This should executed in server and client");

  useLayoutEffect(() => {
    console.log("This should executed in client");
    if (localStorage.getItem('warden:isLoggedIn') !== 'true') {
      router.push('/auth/signin');
    }
  }, []);

  return props.children;
}